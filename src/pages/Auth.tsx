import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { testUsers, testAccountInstructions } from "@/data/testUsers";
const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) navigate("/dashboard");
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) navigate("/dashboard");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast({ title: "Logged in", description: "Welcome back!" });
        navigate("/dashboard");
      } else {
        const redirectUrl = `${window.location.origin}/`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, role },
            emailRedirectTo: redirectUrl,
          },
        });
        if (error) throw error;
        toast({
          title: "Sign up successful",
          description: "Check your email to confirm your account.",
        });
      }
    } catch (err: any) {
      toast({
        title: "Authentication error",
        description: err?.message ?? "Something went wrong",
      });
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <SEO title={`${mode === "login" ? "Login" : "Sign Up"} | Student Performance`} description="Secure authentication for students, teachers, and admins." />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-full max-w-md"
      >
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">{mode === "login" ? "Welcome back" : "Create your account"}</CardTitle>
            <CardDescription>AI-based Student Performance Prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    placeholder="Alex Johnson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    placeholder="student | teacher | admin"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              )}
              <Button type="submit" variant="hero" size="xl" className="w-full">{mode === "login" ? "Login" : "Create account"}</Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {mode === "login" ? (
                <p>
                  New here? <button className="story-link" onClick={() => setMode("signup")}>Create an account</button>
                </p>
              ) : (
                <p>
                  Already have an account? <button className="story-link" onClick={() => setMode("login")}>Login</button>
                </p>
              )}
            </div>
            <div className="mt-4 text-center space-y-2">
              <Link to="/" className="story-link">Back to home</Link>
              <details className="text-left mt-4">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">Test Accounts</summary>
                <div className="mt-2 p-3 bg-muted/30 rounded-md text-xs space-y-2">
                  <div>
                    <strong>Student:</strong> student@test.com / student123
                  </div>
                  <div>
                    <strong>Teacher:</strong> teacher@test.com / teacher123
                  </div>
                  <div>
                    <strong>Admin:</strong> admin@test.com / admin123
                  </div>
                </div>
              </details>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Auth;
