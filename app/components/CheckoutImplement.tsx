"use client";
import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    CulqiCheckout: new (
      publicKey: string,
      config: CulqiConfig,
    ) => CulqiInstance;
    // ✅ FIX 2: Culqi v4 dispara un callback GLOBAL window.culqi, no una propiedad de instancia
    culqi: () => void;
  }
}

interface CulqiInstance {
  token?: { id: string };
  order?: unknown;
  error?: { user_message: string };
  open: () => void;
  close: () => void;
}

interface CulqiConfig {
  settings: {
    title: string;
    currency: string;
    amount: number;
    order: string;
    xculqirsaid: string;
    rsapublickey: string;
  };
  client: { email: string };
  options: {
    lang: string;
    installments: boolean;
    modal: boolean;
    container?: string;
    paymentMethods: {
      tarjeta?: boolean;
      yape?: boolean;
      billetera?: boolean;
      bancaMovil?: boolean;
      agente?: boolean;
      cuotealo?: boolean;
    };
    paymentMethodsSort: string[];
  };
}

const CULQI_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY || "",
  TITLE: "Turismo Bus Universo",
  ORDER_ID: "",
  RSA_ID: process.env.NEXT_PUBLIC_CULQI_RSA_ID || "",
  RSA_PUBLIC_KEY: process.env.NEXT_PUBLIC_CULQI_RSA_PUBLIC_KEY || "",
  PAYMENT_METHODS: {
    tarjeta: true,
    yape: true,
    billetera: false,
    bancaMovil: false,
    agente: false,
    cuotealo: false,
  },
};

interface CheckoutProps {
  amount: number; // en soles (ej: 80 = S/80)
  email: string;
  description?: string;
  onSuccess?: (data: unknown) => void;
  onError?: (message: string) => void;
}

const CheckoutImplement = ({
  amount,
  email,
  onSuccess,
  onError,
}: CheckoutProps) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const scriptsLoadedRef = useRef<boolean>(false);
  const culqiInstanceRef = useRef<CulqiInstance | null>(null);

  // Culqi trabaja en centavos
  const amountInCentimos = Math.round(amount * 100);

  const createCulqiConfig = useCallback(
    (currentAmount: number): CulqiConfig => ({
      settings: {
        title: CULQI_CONFIG.TITLE,
        currency: "PEN",
        amount: currentAmount,
        order: CULQI_CONFIG.ORDER_ID,
        xculqirsaid: CULQI_CONFIG.RSA_ID,
        rsapublickey: CULQI_CONFIG.RSA_PUBLIC_KEY,
      },
      client: { email },
      options: {
        lang: "auto",
        installments: true,
        modal: true,
        paymentMethods: CULQI_CONFIG.PAYMENT_METHODS,
        paymentMethodsSort: Object.keys(CULQI_CONFIG.PAYMENT_METHODS),
      },
    }),
    [email],
  );

  const handleToken = useCallback(
    async (tokenId: string) => {
      try {
        setLoading(true);
        setError("");

        // ✅ FIX 1: la ruta correcta es /api/culqi/charger (nombre real del archivo)
        const response = await fetch("/api/culqi/charger", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: tokenId,
            amount: amountInCentimos,
            currency_code: "PEN",
            email,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setSuccess(true);
          onSuccess?.(data.data);
        } else {
          const msg = data.message || "Error al procesar el pago";
          setError(msg);
          onError?.(msg);
        }
      } catch {
        const msg = "Error de conexión. Intenta nuevamente.";
        setError(msg);
        onError?.(msg);
      } finally {
        setLoading(false);
      }
    },
    [amountInCentimos, email, onSuccess, onError],
  );

  const initializeCulqi = useCallback(
    (currentAmount: number) => {
      if (!window.CulqiCheckout) return;

      const config = createCulqiConfig(currentAmount);
      const instance = new window.CulqiCheckout(
        CULQI_CONFIG.PUBLIC_KEY,
        config,
      );

      // ✅ FIX 2: Culqi v4 dispara window.culqi() como función global.
      // Hay que guardar la referencia a la instancia para leerla dentro del callback.
      culqiInstanceRef.current = instance;

      window.culqi = function () {
        const inst = culqiInstanceRef.current;
        if (!inst) return;

        if (inst.token) {
          handleToken(inst.token.id);
        } else if (inst.order) {
          console.log("Orden creada:", inst.order);
        } else if (inst.error) {
          const msg = inst.error.user_message || "Error al procesar el pago";
          setError(msg);
          onError?.(msg);
        }
      };
    },
    [createCulqiConfig, handleToken, onError],
  );

  useEffect(() => {
    if (scriptsLoadedRef.current) {
      // Si el script ya cargó (por ejemplo, en un re-render) solo re-inicializa
      initializeCulqi(amountInCentimos);
      return;
    }

    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadScripts = async () => {
      try {
        await loadScript("https://checkout.culqi.com/js/v4");
        scriptsLoadedRef.current = true;
        initializeCulqi(amountInCentimos);
      } catch {
        setError("Error al cargar el sistema de pagos. Recarga la página.");
      }
    };

    loadScripts();
  }, [amountInCentimos, initializeCulqi]);

  if (success) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
        <p style={{ fontWeight: 700, color: "#1a8c3c", fontSize: 16 }}>
          ¡Pago exitoso! S/ {amount.toFixed(2)}
        </p>
        <p style={{ color: "#5a8a6a", fontSize: 13 }}>
          Tu reserva ha sido confirmada.
        </p>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <p style={{ color: "#e53e3e", fontSize: 13, marginBottom: 12 }}>
          ⚠️ {error}
        </p>
      )}
      <button
        onClick={() => {
          if (!CULQI_CONFIG.PUBLIC_KEY) {
            setError("Clave pública de Culqi no configurada.");
            return;
          }
          culqiInstanceRef.current?.open();
        }}
        disabled={loading}
        style={{
          background: loading
            ? "#a0c4b0"
            : "linear-gradient(135deg, #1a8c3c, #22a849)",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "14px 28px",
          fontSize: 15,
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          width: "100%",
          boxShadow: "0 4px 16px rgba(26,140,60,.3)",
        }}
      >
        {loading ? "Procesando..." : `Pagar S/ ${amount.toFixed(2)}`}
      </button>
    </div>
  );
};

export default CheckoutImplement;
