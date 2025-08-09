import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const PerformanceForm: React.FC = () => {
  return (
    <main className="min-h-screen container py-10">
      <SEO title="Performance Entry | Student Performance" description="Teachers can add new student performance records." />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Performance Entry (Teacher)</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" placeholder="e.g., STU-10023" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Mathematics" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="score">Score</Label>
                <Input id="score" type="number" placeholder="0 - 100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <Button variant="hero">Save Record</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default PerformanceForm;
