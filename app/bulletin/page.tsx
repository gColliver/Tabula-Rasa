"use client";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function BulletinPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header className="space-y-1">
        <h1 className="text-xl font-medium">Bulletin</h1>
        <p className="text-muted-foreground text-sm">
          Forum for community discourse.
        </p>
      </header>

      <Separator className="bg-neutral-200" />

      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="post" className="pb-1">New Post</Label>
          <Textarea id="post" placeholder="Write post here..." rows={4} />
        </div>
        <Button variant="link">Submit Post</Button>
      </div>
    </div>
  );
}
