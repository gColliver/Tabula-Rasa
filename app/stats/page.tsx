"use client";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "One",
    color: "#969696",
  },
  mobile: {
    label: "Two",
    color: "#35373d",
  },
} satisfies ChartConfig;

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Statistics</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Gun violence statistics.
        </p>
      </header>

      <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-medium">Placeholder</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Graph data
        </p>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </section>
    </div>
  );
}
