import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ZapIcon,
  ShieldIcon,
  ClockIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/constants";

export default function LandingPage() {
  const tools = navItems;

  const benefits = [
    {
      icon: ZapIcon,
      title: "Lightning Fast",
      description:
        "Optimized for speed with instant results and minimal loading times",
    },
    {
      icon: ShieldIcon,
      title: "Secure & Private",
      description:
        "Your data stays private with client-side processing and no data collection",
    },
    {
      icon: ClockIcon,
      title: "Always Available",
      description:
        "Access your tools 24/7 from any device with our responsive design",
    },
    {
      icon: UsersIcon,
      title: "User Friendly",
      description:
        "Intuitive interface designed for both beginners and professionals",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                🚀 All-in-One Toolkit
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Every Tool You Need,
                <br />
                <span className="text-primary">All in One Place</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From mathematical calculations to file compression, unit
                conversion to code management. UtilityKit provides
                professional-grade tools for developers, scientists, and
                professionals.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-12 px-8">
                Start Using Tools
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                View Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>Privacy focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section
        id="tools"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Tools for Every Need
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional-grade utilities designed to boost your productivity
                and solve complex problems efficiently.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="relative overflow-hidden transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <Link href={tool.href}>Try {tool.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose UtilityKit?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built with modern web technologies to provide the best user
                  experience while maintaining the highest standards of
                  performance and security.
                </p>
              </div>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="UtilityKit Dashboard"
                className="aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm text-muted-foreground">
                Calculations Performed
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex items-center space-x-1">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <div className="text-3xl font-bold">4.9</div>
              </div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Boost Your Productivity?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who trust UtilityKit for their
                daily computational needs.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-12 px-8">
                Get Started Now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
