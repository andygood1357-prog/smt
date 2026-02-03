"use client";

import React, { useState, useMemo } from "react";

export default function Home() {
  const PRODUCTS = [
    { id: 1, name: "상품 A", price: 12900, image: "/products/a.jpg", category: "top" },
    { id: 2, name: "상품 B", price: 18900, image: "/products/b.jpg", category: "top" },
    { id: 3, name: "상품 C", price: 9900, image: "/products/c.jpg", category: "shoes" },
    { id: 4, name: "상품 D", price: 25900, image: "/products/d.jpg", category: "shoes" }
  ];

  const [selectedId, setSelectedId] = useState(null);

  const selected = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedId),
    [selectedId]
  );

  const related = useMemo(() => {
    if (!selected) return [];
    return PRODUCTS.filter(
      (p) => p.category === selected.category && p.id !== selected.id
    );
  }, [selected]);

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>상품 목록</h1>

      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ width: 300 }}>
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              style={{
                border: "1px solid #ccc",
                padding: 12,
                marginBottom: 10,
                cursor: "pointer",
                background: selectedId === p.id ? "#eee" : "#fff"
              }}
            >
              <strong>{p.name}</strong>
              <div>{p.price.toLocaleString()}원</div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          {!selected ? (
            <p>상품을 선택하세요</p>
          ) : (
            <>
              <h2>{selected.name}</h2>
              <img
                src={selected.image}
                alt={selected.name}
                style={{ width: 300, display: "block" }}
              />
              <p>{selected.price.toLocaleString()}원</p>

              <h3>관련 상품</h3>
              <ul>
                {related.map((r) => (
                  <li key={r.id}>{r.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <p style={{ marginTop: 24, color: "#666" }}>
        이미지 파일은 public/products/a.jpg 같은 경로에 넣으면 표시돼.
      </p>
    </main>
  );
}
