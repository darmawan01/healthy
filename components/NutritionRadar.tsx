
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
  data: {
    subject: string;
    A: number;
    fullMark: number;
  }[];
}

const NutritionRadar: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
          <Radar
            name="Nutrients"
            dataKey="A"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NutritionRadar;
