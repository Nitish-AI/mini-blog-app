"use client";

import { useEffect, useState } from "react";

type Info = { name: string; author: string } | null;

export default function InfoClient() {
  const [info, setInfo] = useState<Info>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    fetch("/api/info")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then((data) => { if (mounted) setInfo(data); })
      .catch((err) => { if (mounted) setError(String(err)); });

    return () => { mounted = false; };
  }, []);

  if (error) return <p className="text-red-600">Error loading info</p>;
  if (!info) return <p>Loading info...</p>;

  return (
    <div>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Author:</strong> {info.author}</p>
    </div>
  );
}
