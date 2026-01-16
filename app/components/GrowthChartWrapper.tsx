"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./GrowthChart"), { 
  ssr: false,
  loading: () => <div className="h-[300px] w-full animate-pulse rounded-2xl bg-slate-100 sm:h-[400px]" />
});

export default function GrowthChartWrapper() {
  return <Chart />;
}
