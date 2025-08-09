import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const tiles = [
  { title: "Performance Entry", to: "/performance", desc: "Add student scores (teacher)", role: "teacher" },
  { title: "Predictions", to: "/predictions", desc: "Get personalized insights (student)", role: "student" },
  { title: "Reports & Analytics", to: "/reports", desc: "Charts and exports", role: "teacher" },
  { title: "Profile", to: "/profile", desc: "Manage your account", role: "all" },
];

const Dashboard: React.FC = () => {
  return (
    <main className="min-h-screen container py-10">
      <SEO title="Dashboard | Student Performance" description="Role-based navigation to teacher and student tools." />
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome! Choose a section to get started.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <motion.div key={t.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle>{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{t.desc}</p>
                <Button asChild variant="glow" className="w-fit">
                  <Link to={t.to}>Open</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
