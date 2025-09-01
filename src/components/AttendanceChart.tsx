import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AttendanceData {
  name: string;
  value: number;
  color: string;
  label: string;
  count: string;
}

const data: AttendanceData[] = [
  {
    name: 'Attended Days',
    value: 70,
    color: 'hsl(var(--muted-foreground))',
    label: 'Attended Days',
    count: '4-7'
  },
  {
    name: 'Absent Days',
    value: 30,
    color: 'hsl(var(--muted))',
    label: 'Absent Days', 
    count: '1-7'
  }
];

const AttendanceChart = () => {
  const attendedPercentage = data[0].value;

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Attendance</CardTitle>
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
          View all
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Filter Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Monthly
          </Button>
          <Button variant="secondary" size="sm" className="text-xs">
            Weekly
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Over all
          </Button>
        </div>

        {/* Chart Container */}
        <div className="relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground">
              {attendedPercentage}%
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;