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
import {
  RefreshCw,
  FileType,
  ArrowRight,
  ArrowLeftRight,
  Binary,
  Globe,
} from "lucide-react";

export default function ConvertersPage() {
  const converterTools = [
    {
      icon: FileType,
      title: "File Format Converter",
      description: "Convert files between different formats for compatibility",
      features: [
        "Document formats",
        "Image formats",
        "Audio formats",
        "Video formats",
      ],
    },
    {
      icon: ArrowLeftRight,
      title: "Unit Converter",
      description: "Convert between different units of measurement",
      features: [
        "Length & distance",
        "Weight & mass",
        "Volume & capacity",
        "Temperature",
      ],
    },
    {
      icon: Globe,
      title: "Currency Converter",
      description: "Convert between different currencies with up-to-date rates",
      features: [
        "Live exchange rates",
        "Historical rates",
        "Currency charts",
        "Rate alerts",
      ],
    },
    {
      icon: Binary,
      title: "Base Converter",
      description: "Convert numbers between different numeral systems",
      features: ["Binary", "Decimal", "Hexadecimal", "Octal"],
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
                Try Our Conversion Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Quick and accurate conversions for your everyday needs
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <Tabs defaultValue="unit" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="unit">Units</TabsTrigger>
                <TabsTrigger value="currency">Currency</TabsTrigger>
                <TabsTrigger value="base">Number Base</TabsTrigger>
                <TabsTrigger value="time">Time Zones</TabsTrigger>
              </TabsList>
              <TabsContent
                value="unit"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="unit-category">Category</Label>
                      <Select defaultValue="length">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="length">Length</SelectItem>
                          <SelectItem value="weight">Weight</SelectItem>
                          <SelectItem value="volume">Volume</SelectItem>
                          <SelectItem value="temperature">
                            Temperature
                          </SelectItem>
                          <SelectItem value="area">Area</SelectItem>
                          <SelectItem value="speed">Speed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-unit">From</Label>
                        <Select defaultValue="meter">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meter">Meters</SelectItem>
                            <SelectItem value="cm">Centimeters</SelectItem>
                            <SelectItem value="km">Kilometers</SelectItem>
                            <SelectItem value="inch">Inches</SelectItem>
                            <SelectItem value="foot">Feet</SelectItem>
                            <SelectItem value="yard">Yards</SelectItem>
                            <SelectItem value="mile">Miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-unit">To</Label>
                        <Select defaultValue="foot">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meter">Meters</SelectItem>
                            <SelectItem value="cm">Centimeters</SelectItem>
                            <SelectItem value="km">Kilometers</SelectItem>
                            <SelectItem value="inch">Inches</SelectItem>
                            <SelectItem value="foot">Feet</SelectItem>
                            <SelectItem value="yard">Yards</SelectItem>
                            <SelectItem value="mile">Miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-value">Value</Label>
                        <Input
                          id="from-value"
                          placeholder="Enter value"
                          defaultValue="1"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-value">Result</Label>
                        <Input id="to-value" readOnly value="3.28084" />
                      </div>
                    </div>

                    <Button className="w-full">
                      Convert
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="currency"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-currency">From</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD - US Dollar</SelectItem>
                            <SelectItem value="eur">EUR - Euro</SelectItem>
                            <SelectItem value="gbp">
                              GBP - British Pound
                            </SelectItem>
                            <SelectItem value="jpy">
                              JPY - Japanese Yen
                            </SelectItem>
                            <SelectItem value="cad">
                              CAD - Canadian Dollar
                            </SelectItem>
                            <SelectItem value="aud">
                              AUD - Australian Dollar
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-currency">To</Label>
                        <Select defaultValue="eur">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD - US Dollar</SelectItem>
                            <SelectItem value="eur">EUR - Euro</SelectItem>
                            <SelectItem value="gbp">
                              GBP - British Pound
                            </SelectItem>
                            <SelectItem value="jpy">
                              JPY - Japanese Yen
                            </SelectItem>
                            <SelectItem value="cad">
                              CAD - Canadian Dollar
                            </SelectItem>
                            <SelectItem value="aud">
                              AUD - Australian Dollar
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-amount">Amount</Label>
                        <Input
                          id="from-amount"
                          placeholder="Enter amount"
                          defaultValue="1"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-amount">Result</Label>
                        <Input id="to-amount" readOnly value="0.92" />
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Exchange rate: 1 USD = 0.92 EUR</p>
                      <p>Last updated: May 26, 2025</p>
                    </div>

                    <Button className="w-full">
                      Convert
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="base"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-base">From Base</Label>
                        <Select defaultValue="decimal">
                          <SelectTrigger>
                            <SelectValue placeholder="Select base" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="binary">
                              Binary (Base 2)
                            </SelectItem>
                            <SelectItem value="octal">
                              Octal (Base 8)
                            </SelectItem>
                            <SelectItem value="decimal">
                              Decimal (Base 10)
                            </SelectItem>
                            <SelectItem value="hex">
                              Hexadecimal (Base 16)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-base">To Base</Label>
                        <Select defaultValue="binary">
                          <SelectTrigger>
                            <SelectValue placeholder="Select base" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="binary">
                              Binary (Base 2)
                            </SelectItem>
                            <SelectItem value="octal">
                              Octal (Base 8)
                            </SelectItem>
                            <SelectItem value="decimal">
                              Decimal (Base 10)
                            </SelectItem>
                            <SelectItem value="hex">
                              Hexadecimal (Base 16)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-number">Number</Label>
                        <Input
                          id="from-number"
                          placeholder="Enter number"
                          defaultValue="42"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-number">Result</Label>
                        <Input id="to-number" readOnly value="101010" />
                      </div>
                    </div>

                    <Button className="w-full">
                      Convert
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="time"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-timezone">From Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">EST (UTC-5)</SelectItem>
                            <SelectItem value="cet">CET (UTC+1)</SelectItem>
                            <SelectItem value="jst">JST (UTC+9)</SelectItem>
                            <SelectItem value="aest">AEST (UTC+10)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-timezone">To Timezone</Label>
                        <Select defaultValue="est">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">EST (UTC-5)</SelectItem>
                            <SelectItem value="cet">CET (UTC+1)</SelectItem>
                            <SelectItem value="jst">JST (UTC+9)</SelectItem>
                            <SelectItem value="aest">AEST (UTC+10)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-time">Time</Label>
                        <Input
                          id="from-time"
                          type="datetime-local"
                          defaultValue="2025-05-26T14:30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-time">Result</Label>
                        <Input
                          id="to-time"
                          readOnly
                          value="2025-05-26 09:30 EST"
                        />
                      </div>
                    </div>

                    <Button className="w-full">
                      Convert
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
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
                Conversion Tools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Convert between file formats, units of measurement, currencies,
                and number systems with precision and ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {converterTools.map((tool, index) => (
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Need More Conversion Options?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to access advanced conversion tools, save your
                conversion history, and more.
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
