import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dummyData = [
  { name: "Günlük", getiri: 2.3 },
  { name: "Haftalık", getiri: 5.7 },
  { name: "Aylık", getiri: 14.2 },
  { name: "Yıllık", getiri: 65.8 },
];

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: 32 }}>
      <h1 style={{ color: "#F0B90B", fontSize: 32, textAlign: "center" }}>Binance Kripto Getiri Tahmin Aracı</h1>
      <p style={{ textAlign: "center", marginBottom: 24 }}>Günlük, Haftalık, Aylık ve Yıllık tahminlerini al</p>
      <div style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <input placeholder="Coin (BTC)" />
        <input placeholder="Giriş Tarihi" type="date" />
        <input placeholder="Giriş Fiyatı" />
        <input placeholder="Mevcut Fiyat" />
        <input placeholder="USDT Tutarı" />
        <select>
          <option>Scalp</option>
          <option>Swing</option>
          <option>HODL</option>
        </select>
        <button style={{ backgroundColor: "#F0B90B", padding: 12, border: 0 }} onClick={() => setShow(true)}>Tahmini Hesapla</button>
      </div>
      {show && (
        <div style={{ marginTop: 40 }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData}>
              <XAxis dataKey="name" stroke="#F0B90B" />
              <YAxis stroke="#F0B90B" />
              <Tooltip />
              <Line type="monotone" dataKey="getiri" stroke="#F0B90B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}