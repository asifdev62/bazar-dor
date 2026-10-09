
"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    const timer = window.setTimeout(() => {
      setDate(today);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return <>{date || "আজকের তারিখ"}</>;
}