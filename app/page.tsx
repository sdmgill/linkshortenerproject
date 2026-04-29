import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link as LinkIcon, Zap, ChartBar, Globe, Copy, Shield } from "lucide-react";

const features = [
  {
    icon: LinkIcon,
    title: "Instant Short Links",
    description:
      "Turn any long URL into a clean, shareable short link in one click. No setup required.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Redirects",
    description:
      "Our infrastructure ensures your links resolve in milliseconds, every time.",
  },
  {
    icon: ChartBar,
    title: "Click Analytics",
    description:
      "Track how many times each link is clicked so you always know what's performing.",
  },
  {
    icon: Globe,
    title: "Share Anywhere",
    description:
      "Short links work across emails, social media, SMS, QR codes, and more.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your short link to the clipboard instantly and paste it wherever you need.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Every link is protected and monitored, giving you confidence in every share.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center gap-8 py-24 px-6">
        <h1 className="text-5xl font-bold tracking-tight leading-tight max-w-2xl">
          Shorten Links,
          <span className="text-primary"> Amplify Reach</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Create short, memorable links in seconds. Track clicks, manage your
          URLs, and share with confidence — all from one simple dashboard.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-6">
              Get Started Free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-6">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Everything you need to manage your links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="size-5 text-primary" />
                  <CardTitle>{title}</CardTitle>
                </div>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
