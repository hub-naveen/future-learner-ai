import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";

const tiles = [
  { title: "Performance Entry", to: "/performance", desc: "Add student scores and assessments", roles: ["teacher", "admin"] },
  { title: "Predictions", to: "/predictions", desc: "Get personalized insights and analytics", roles: ["student"] },
  { title: "Reports & Analytics", to: "/reports", desc: "View charts, trends and export data", roles: ["teacher", "admin"] },
  { title: "Profile", to: "/profile", desc: "Manage your account settings", roles: ["student", "teacher", "admin"] },
  { title: "User Management", to: "/users", desc: "Manage student and teacher accounts", roles: ["admin"] },
  { title: "System Settings", to: "/settings", desc: "Configure system-wide settings", roles: ["admin"] },
];

const Dashboard: React.FC = () => {
  const { profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    );
  }

  if (!profile) {
    navigate('/auth');
    return null;
  }

  const userTiles = tiles.filter(tile => tile.roles.includes(profile.role));

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <main className="min-h-screen container py-10">
      <SEO title="Dashboard | Student Performance" description="Role-based navigation to teacher and student tools." />
      <header className="mb-10 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground mb-2">Welcome back, {profile.full_name}!</p>
          <Badge variant="secondary" className="capitalize">{profile.role}</Badge>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {userTiles.map((t) => (
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
