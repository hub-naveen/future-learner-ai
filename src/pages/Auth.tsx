import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
            <form className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Alex Johnson" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="student | teacher | admin" />
                </div>
              )}
              <Button type="button" variant="hero" size="xl" className="w-full">{mode === "login" ? "Login" : "Create account"}</Button>
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
            <div className="mt-4 text-center">
              <Link to="/" className="story-link">Back to home</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Auth;
