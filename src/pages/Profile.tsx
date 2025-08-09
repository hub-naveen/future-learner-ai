import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const Profile: React.FC = () => {
  return (
    <main className="min-h-screen container py-10">
      <SEO title="Profile | Student Performance" description="Manage your personal information and settings." />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" placeholder="student | teacher | admin" />
              </div>
              <div className="sm:col-span-2">
                <Button variant="hero">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Profile;
