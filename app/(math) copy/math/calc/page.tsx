import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calculator,
  ActivityIcon as Function,
  LineChart,
  PieChart,
  ArrowRight,
} from "lucide-react";

export default function MathCalcPage() {
  const calculators = [
    {
      icon: Calculator,
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
      icon: Function,
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
      icon: LineChart,
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
      icon: PieChart,
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Interactive Demo */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Try Our Basic Calculator
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Get a taste of our math tools with this simple calculator demo
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-lg">
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="equation">Equation</TabsTrigger>
                <TabsTrigger value="unit-converter">Unit Converter</TabsTrigger>
              </TabsList>
              <TabsContent
                value="calculator"
                className="p-4 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="result">Result</Label>
                      <Input
                        id="result"
                        readOnly
                        value="0"
                        className="text-right text-lg font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      "7",
                      "8",
                      "9",
                      "÷",
                      "4",
                      "5",
                      "6",
                      "×",
                      "1",
                      "2",
                      "3",
                      "-",
                      "0",
                      ".",
                      "=",
                      "+",
                    ].map((button, index) => (
                      <Button
                        key={index}
                        variant={["="].includes(button) ? "default" : "outline"}
                      >
                        {button}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {["C", "CE", "%", "√", "sin", "cos", "tan", "^"].map(
                      (button, index) => (
                        <Button key={index} variant="outline" size="sm">
                          {button}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="equation"
                className="p-4 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="equation">Enter Equation</Label>
                    <Input id="equation" placeholder="e.g., 2x + 3 = 7" />
                  </div>
                  <Button className="w-full">Solve Equation</Button>
                  <div className="p-4 border rounded-lg bg-muted">
                    <p className="font-medium">Solution:</p>
                    <p className="font-mono">x = 2</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="unit-converter"
                className="p-4 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from-value">From</Label>
                      <Input id="from-value" placeholder="Enter value" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to-value">To</Label>
                      <Input id="to-value" readOnly />
                    </div>
                  </div>
                  <Button className="w-full">Convert</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Math Models & Calculators
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Advanced mathematical tools for calculations, equation solving,
                statistical analysis, and data visualization.
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
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <calculator.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{calculator.title}</CardTitle>
                  </div>
                  <CardDescription>{calculator.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {calculator.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground"
                      >
                        • {feature}
                      </li>
                    ))}
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Ready to Solve Complex Math Problems?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to access all our advanced mathematical tools
                and save your calculations.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Other Tools
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
