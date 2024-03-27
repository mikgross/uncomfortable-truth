"use client";
import { LineChart, BarChart } from "@mmpg-soft/charts";

export default function Chart({ data, xDensity, type, colors, labels }: any) {
  return type === "line" ? (
    <LineChart data={data} xValuesDesnity={xDensity} animate={false} />
  ) : (
    <BarChart
      data={data}
      xValuesDesnity={xDensity}
      animate={false}
      colors={colors}
      xAxisLabel={labels.x}
      yAxisLabel={labels.y}
    />
  );
}
