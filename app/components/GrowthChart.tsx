"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { year: "2021", shipments: 400, clients: 150, trainings: 80 },
  { year: "2022", shipments: 950, clients: 320, trainings: 170 },
  { year: "2023", shipments: 1600, clients: 510, trainings: 290 },
  { year: "2024", shipments: 2400, clients: 740, trainings: 420 },
  { year: "2025", shipments: 3000, clients: 900, trainings: 500 },
];

export default function GrowthChart() {
  return (
    <div className="h-[300px] w-full rounded-2xl bg-white/50 p-4 shadow-sm ring-1 ring-slate-200/50 backdrop-blur-sm sm:h-[400px]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">Operational Growth</h3>
        <p className="text-sm text-slate-500">Milestones achieved over the last 5 years</p>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            hide 
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              fontSize: '13px',
              fontWeight: '600'
            }}
          />
          <Bar
            dataKey="shipments"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
            name="Shipments"
            barSize={20}
          />
          <Bar
            dataKey="clients"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            name="Clients"
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Shipments Moved (Total: 3000+)
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Clients Supported (900+)
        </div>
      </div>
    </div>
  );
}
