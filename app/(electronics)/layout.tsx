import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/global-electronics.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  ActivityIcon,
  ArrowRightIcon,
  CalculatorIcon,
  LineChartIcon,
  PieChartIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Electronics",
  description: "Sum of all Utilities",
};

const calculators = [
  {
    icon: CalculatorIcon,
    title: "Scientific Calculator",
    description:
      "Perform complex mathematical calculations with our advanced scientific calculator",
    features: [
      "Trigonometric functions",
      "Logarithmic calculations",
      "Exponents and roots",
      "Memory functions",
    ],
  },
  {
    icon: ActivityIcon,
    title: "Equation Solver",
    description:
      "Solve linear, quadratic, and polynomial equations with step-by-step solutions",
    features: [
      "Linear equations",
      "Quadratic formula",
      "Systems of equations",
      "Polynomial roots",
    ],
  },
  {
    icon: LineChartIcon,
    title: "Statistics Tools",
    description:
      "Analyze data sets with comprehensive statistical analysis tools",
    features: [
      "Mean, median, mode",
      "Standard deviation",
      "Correlation analysis",
      "Regression models",
    ],
  },
  {
    icon: PieChartIcon,
    title: "Graphing Calculator",
    description:
      "Visualize functions and data with our interactive graphing calculator",
    features: [
      "Function plotting",
      "Data visualization",
      "Multiple graph overlays",
      "Customizable axes",
    ],
  },
];

export default function RootElectronicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}

              {/* Hero Section */}
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Math Models & Calculators
                      </h1>
                      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Advanced mathematical tools for calculations, equation
                        solving, statistical analysis, and data visualization.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tools Grid */}
              <section className="w-full py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {calculators.map((calculator, index) => (
                      <Card
                        key={index}
                        className="transition-all hover:shadow-md"
                      >
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <calculator.icon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>{calculator.title}</CardTitle>
                          </div>
                          <CardDescription>
                            {calculator.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-4">
                            {calculator.features.map(
                              (feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="text-sm text-muted-foreground"
                                >
                                  • {feature}
                                </li>
                              )
                            )}
                          </ul>
                          <Button className="w-full">Launch Tool</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="w-full py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter">
                        Ready to Solve Complex Math Problems?
                      </h2>
                      <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Create an account to access all our advanced
                        mathematical tools and save your calculations.
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Button size="lg">
                        Get Started
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="lg">
                        Explore Other Tools
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
