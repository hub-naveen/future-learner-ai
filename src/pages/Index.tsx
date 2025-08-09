import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <SEO title="Student Performance AI" description="Dark neon, glassy UI for AI-based student performance predictions." />
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-primary" />
      <div className="container flex min-h-screen flex-col items-center justify-center text-center gap-6">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-5xl font-bold tracking-tight">
          AI-Based Student Performance
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="text-lg text-muted-foreground max-w-2xl">
          Predict outcomes, personalize learning, and visualize progress with a modern, responsive dashboard.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-4">
          <Button asChild variant="hero" size="xl">
            <Link to="/auth">Login / Sign Up</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/dashboard">Explore Dashboard</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default Index;
