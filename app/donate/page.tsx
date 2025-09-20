import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DonatePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Donate</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Support student-led work to reduce gun violence.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
        <CardTitle>Empower Students</CardTitle>
        <CardDescription>Donating to organizations like ours helps students lead initiatives that make a real impact in their communities.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
        <CardTitle>Educational Resources</CardTitle>
        <CardDescription>Donations help provide educational materials and resources to students and educators that keeps the conversation going.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
        <CardTitle>Drive Change</CardTitle>
        <CardDescription>Backing causes against gun violence means supporting innovative solutions to reduce gun violence.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How to Donate</CardTitle>
          <CardDescription>
            Currently we do not have a need for donations. If you appreciate our work and would like to support causes like ours, please consider donating to organizations such as Sandy Hook Promise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="link" asChild>
            <a href="https://www.sandyhookpromise.org/" target="_blank" rel="noopener noreferrer">
              Sandy Hook Promise
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
