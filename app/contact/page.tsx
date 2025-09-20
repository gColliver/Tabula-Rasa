"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy, Mail } from "lucide-react";

export default function ContactPage() {
  const email = "blankslate.somethingnew@gmail.com";
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }
  
  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We’re students building a safer future. Reach us if you want to chat.
        </p>
      </header>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Email us</CardTitle>
          <CardDescription>
            The only contact method we use right now is email. Tap to open your mail client or copy the address.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 font-medium hover:underline underline-offset-4"
            >
              <Mail className="size-4" />
              {email}
            </a>
            <Button variant="outline" size="sm" onClick={copy} aria-live="polite">
              {copied ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4" /> Copied
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Copy className="size-4" /> Copy
                </span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
