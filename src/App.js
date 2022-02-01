import "./App.css";
import React, { useEffect, useRef } from "react";

const config = {
  flowType: "YOUR_FLOW_TYPE",
  credentials: {
    apiKey: "YOUR_API_KEY",
    clientSecret: "YOUR_CLIENT_SECRET",
    tenant: "YOUR_TENANT",
    banknu: "YOUR_BANKNU",
    env: "YOUR_ENV",
  },
  deskVerificationEnabled: true,
  currentUserInfo: {
    cifCode: "YOUR_CIFCODE",
  },
};

export default function App() {
  const pvtButtonRef = useRef(null);
  useEffect(() => {
    const pvtButton = pvtButtonRef.current;
    pvtButton.addEventListener("loaded", () => {
      pvtButton.initialize(config);
    });
  }, []);

  return <pvt-button ref={pvtButtonRef} config={config}></pvt-button>;
}
