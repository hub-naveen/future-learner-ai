import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const Predictions: React.FC = () => {
  const [prob, setProb] = useState<number | null>(null);

  return (
    <main className="min-h-screen container py-10">
      <SEO title="Predictions | Student Performance" description="Students can run predictions and view recommendations." />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Prediction & Recommendations (Student)</CardTitle>
            <CardDescription>Enter key indicators and get instant insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="studyHours">Study hours/week</Label>
                <Input id="studyHours" type="number" placeholder="12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attendance">Attendance %</Label>
                <Input id="attendance" type="number" placeholder="92" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priorScore">Prior average score</Label>
                <Input id="priorScore" type="number" placeholder="78" />
              </div>
              <div className="sm:col-span-3">
                <Button type="button" variant="glow" onClick={() => setProb(Math.round(70 + Math.random() * 25))}>Run Prediction</Button>
              </div>
            </form>

            {prob !== null && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Result</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">Probability of High Performance: <span className="font-semibold">{prob}%</span></p>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                      <li>Maintain consistent study schedule with focused 45-minute sessions.</li>
                      <li>Target attendance ≥ 90% to maximize outcomes.</li>
                      <li>Use spaced repetition for weak topics.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Predictions;
