import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Who we are and why we care.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>
            Students building a safer future by advocating for evidence-based policies and community action to reduce gun violence.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
          <p>
            Tabula Rasa is a student-led organization committed to ending gun violence in our schools and communities. We are nonpartisan and data-driven, amplifying youth voices.
          </p>
            <p>
            If you want to start a chapter at your school, <a href="/contact" className="text-blue-600 underline text-neutral-300 hover:text-blue-800">reach out to us!</a>
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
