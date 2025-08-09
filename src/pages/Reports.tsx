import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { SEO } from "@/components/SEO";

const data = Array.from({ length: 12 }).map((_, i) => ({
  month: new Date(2025, i, 1).toLocaleString('default', { month: 'short' }),
  score: Math.round(60 + Math.random() * 35),
}));

const Reports: React.FC = () => {
  const exportCSV = () => {
    const rows = ["month,score", ...data.map(d => `${d.month},${d.score}`)];
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPNG = () => {
    // Placeholder export - implement canvas render later when backend in place
    alert("PNG export coming soon.");
  };

  return (
    <main className="min-h-screen container py-10">
      <SEO title="Reports & Analytics | Student Performance" description="Visualize class trends and export reports." />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 lg:grid-cols-3">
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Average Scores by Month</CardTitle>
          </CardHeader>
          <CardContent className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: `hsl(var(--card))`, border: `1px solid hsl(var(--border))`, color: `hsl(var(--foreground))` }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Exports</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
            <Button variant="glow" onClick={exportPNG}>Export PNG</Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Reports;
