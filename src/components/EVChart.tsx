import React from "react";
import {
 
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { Box } from "@mui/material";
import { chartStyles } from "../styles/EvChartsStyles"; 

interface ChartDataPoint {
  year: string | number;
  evCount: number;
}

interface EVChartProps {
  chartData: ChartDataPoint[];
}

const EVChart: React.FC<EVChartProps> = ({ chartData }) => {
    const filteredData = chartData.filter(
      (dataPoint) => !isNaN(Number(dataPoint.year))
    );

  return (
    <Box sx={chartStyles.chartBox}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="evCount"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default EVChart;
