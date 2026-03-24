"use client";
import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <div style={loading ? { filter: "blur(2px)", pointerEvents: "none" } : {}}>
        {children}
      </div>
    </>
  );
}