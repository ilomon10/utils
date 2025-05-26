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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  DollarSign,
  Calculator,
  LineChart,
  PieChart,
  ArrowRight,
  Percent,
  CreditCard,
  Landmark,
} from "lucide-react";

export default function FinanceToolkitPage() {
  const financeTools = [
    {
      icon: Calculator,
      title: "Loan Calculator",
      description:
        "Calculate loan payments, interest, and amortization schedules",
      features: [
        "Monthly payment calculation",
        "Amortization schedule",
        "Extra payment analysis",
        "Interest savings",
      ],
    },
    {
      icon: LineChart,
      title: "Investment Calculator",
      description:
        "Plan and analyze your investments with detailed projections",
      features: [
        "Compound interest",
        "Retirement planning",
        "Investment comparison",
        "Goal setting",
      ],
    },
    {
      icon: Percent,
      title: "Tax Calculator",
      description: "Estimate income taxes and plan for tax season",
      features: [
        "Income tax estimation",
        "Deduction analysis",
        "Tax bracket visualization",
        "Year-over-year comparison",
      ],
    },
    {
      icon: PieChart,
      title: "Budget Planner",
      description: "Create and manage budgets to reach your financial goals",
      features: [
        "Expense categorization",
        "Income tracking",
        "Savings goals",
        "Budget templates",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Interactive Demo */}
      <section className="w-full min-h-[100vh] py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Try Our Loan Calculator
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Calculate monthly payments and see amortization schedules
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Tabs defaultValue="loan" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="loan">Loan Calculator</TabsTrigger>
                <TabsTrigger value="investment">
                  Investment Calculator
                </TabsTrigger>
                <TabsTrigger value="budget">Budget Planner</TabsTrigger>
              </TabsList>
              <TabsContent
                value="loan"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loan-amount">Loan Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="loan-amount"
                          placeholder="e.g., 250000"
                          className="pl-9"
                          defaultValue="250000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="interest-rate"
                          placeholder="e.g., 4.5"
                          className="pl-9"
                          defaultValue="4.5"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loan-term">Loan Term (years)</Label>
                      <Select defaultValue="30">
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 years</SelectItem>
                          <SelectItem value="15">15 years</SelectItem>
                          <SelectItem value="20">20 years</SelectItem>
                          <SelectItem value="30">30 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Extra Monthly Payment (optional)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="e.g., 100"
                          className="pl-9"
                          defaultValue="0"
                        />
                      </div>
                    </div>

                    <Button className="w-full">Calculate</Button>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">Monthly Payment</h3>
                      <p className="text-3xl font-bold text-primary">
                        $1,266.71
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">
                            Total Principal
                          </p>
                          <p className="font-medium">$250,000.00</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Total Interest
                          </p>
                          <p className="font-medium">$206,016.78</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Cost</p>
                          <p className="font-medium">$456,016.78</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Payoff Date</p>
                          <p className="font-medium">May 2055</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Payment Breakdown</h3>
                      <div className="h-40 w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Payment chart will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="investment"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="initial-investment">
                        Initial Investment
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="initial-investment"
                          placeholder="e.g., 10000"
                          className="pl-9"
                          defaultValue="10000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthly-contribution">
                        Monthly Contribution
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="monthly-contribution"
                          placeholder="e.g., 500"
                          className="pl-9"
                          defaultValue="500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annual-return">Annual Return (%)</Label>
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="annual-return"
                          placeholder="e.g., 7"
                          className="pl-9"
                          defaultValue="7"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investment-period">
                        Investment Period (years)
                      </Label>
                      <Input
                        id="investment-period"
                        type="number"
                        min="1"
                        max="50"
                        defaultValue="30"
                      />
                    </div>

                    <Button className="w-full">Calculate</Button>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">Future Value</h3>
                      <p className="text-3xl font-bold text-primary">
                        $610,070.58
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">
                            Initial Investment
                          </p>
                          <p className="font-medium">$10,000.00</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Total Contributions
                          </p>
                          <p className="font-medium">$180,000.00</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Total Interest
                          </p>
                          <p className="font-medium">$420,070.58</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">End Date</p>
                          <p className="font-medium">May 2055</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Growth Projection</h3>
                      <div className="h-40 w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Growth chart will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="budget"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="monthly-income">Monthly Income</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="monthly-income"
                          placeholder="e.g., 5000"
                          className="pl-9"
                          defaultValue="5000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="savings-goal">Monthly Savings Goal</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="savings-goal"
                          placeholder="e.g., 1000"
                          className="pl-9"
                          defaultValue="1000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Housing (30%)</Label>
                      <span className="text-sm text-muted-foreground">
                        $1,500
                      </span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Transportation (15%)</Label>
                      <span className="text-sm text-muted-foreground">
                        $750
                      </span>
                    </div>
                    <Slider defaultValue={[15]} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Food (15%)</Label>
                      <span className="text-sm text-muted-foreground">
                        $750
                      </span>
                    </div>
                    <Slider defaultValue={[15]} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Utilities (10%)</Label>
                      <span className="text-sm text-muted-foreground">
                        $500
                      </span>
                    </div>
                    <Slider defaultValue={[10]} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Entertainment (10%)</Label>
                      <span className="text-sm text-muted-foreground">
                        $500
                      </span>
                    </div>
                    <Slider defaultValue={[10]} max={100} step={1} />
                  </div>

                  <div className="p-4 border rounded-lg bg-muted/50">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Remaining for Savings</h3>
                      <p className="font-bold text-primary">$1,000</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">
                        Savings Goal
                      </p>
                      <p className="text-sm font-medium">$1,000</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="text-sm font-medium text-green-500">
                        On Target
                      </p>
                    </div>
                  </div>

                  <Button className="w-full">Save Budget</Button>
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
                Financial Calculators & Tools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive financial tools to help you make smarter money
                decisions and reach your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financeTools.map((tool, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{tool.title}</CardTitle>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
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

      {/* Additional Tools */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                More Financial Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Additional calculators and planners for specific financial needs
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Credit Card Payoff</CardTitle>
                </div>
                <CardDescription>
                  Calculate how long it will take to pay off your credit card
                  debt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Launch Tool</Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Landmark className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Mortgage Calculator</CardTitle>
                </div>
                <CardDescription>
                  Estimate mortgage payments and compare loan options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Launch Tool</Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Net Worth Tracker</CardTitle>
                </div>
                <CardDescription>
                  Track your assets and liabilities to calculate net worth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Launch Tool</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Take Control of Your Finances
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to save your calculations, track your
                progress, and access premium financial tools.
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
