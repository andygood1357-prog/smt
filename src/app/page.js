"use client";

import React from "react";

export default function Home() {
  const PRODUCTS = [
    { id: 1, name: "상품 A", price: 12900, image: "/products/a.jpg", category: "top" },
    { id: 2, name: "상품 B", price: 18900, image: "/products/b.jpg", category: "top" },
    { id: 3, name: "상품 C", price: 9900,  image: "/products/c.jpg", category: "shoes" },
    { id: 4, name: "상품 D", price: 25900, image: "/products/d.jpg", category: "shoes" },
  ];

  const [selectedId, setSelectedId] = React.useState(null);

  const selected = React.useMemo(
    () => PRODUCTS.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  );

  const related = React.useMemo(() => {
    if (!selected) return [];
    return PRODUCTS.filter(
      (p) => p.id !== selected.id && p.category === selected.category
    ).slice(0, 3);
  }, [selected]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">상품</h1>
          <button
            onClick={() => setSelectedId(null)}
            className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100"
          >
            상품칸 초기화
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* 상품 목록 */}
          <section className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-lg font-semibold">상품 목록</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`rounded-2xl border p-3 text-left transition ${
                    selectedId === p.id
                      ? "border-black"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-2 font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    {p.price.toLocaleString()}원
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* 선택 상품 */}
          <section className="rounded-2xl border border-zinc-200 bg-white p-5">
            {!selected ? (
              <div className="flex h-full flex-col justify-center rounded-xl bg-zinc-50 p-6 text-center">
                <div className="text-lg font-semibold">상품을 선택해줘</div>
                <div className="mt-2 text-sm text-zinc-600">
                  선택하면 이미지랑 가격이 나와
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold">선택한 상품</h2>
                <div className="mt-4 overflow-hidden rounded-2xl border">
                  <div className="aspect-[16/9] w-full bg-zinc-100">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xl font-bold">{selected.name}</div>
                    <div className="mt-1 text-base text-zinc-700">
                      {selected.price.toLocaleString()}원
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-base font-semibold">관련 상품</h3>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {related.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedId(p.id)}
                      className="rounded-2xl border p-2 text-left hover:border-zinc-400"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-sm font-semibold">{p.name}</div>
                      <div className="mt-1 text-xs text-zinc-600">
                        {p.price.toLocaleString()}원
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
