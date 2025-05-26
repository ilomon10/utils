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
  Ruler,
  Thermometer,
  Scale,
  Zap,
  ArrowRight,
  Droplet,
  Wind,
  Gauge,
} from "lucide-react";

export default function PhysicsMetersPage() {
  const scienceTools = [
    {
      icon: Ruler,
      title: "Length & Distance",
      description: "Convert between different units of length and distance",
      features: [
        "Metric & imperial units",
        "Astronomical distances",
        "Microscopic scales",
        "Precision conversion",
      ],
    },
    {
      icon: Scale,
      title: "Weight & Mass",
      description: "Convert between different units of weight and mass",
      features: [
        "Metric & imperial units",
        "Atomic mass units",
        "Force conversions",
        "Density calculations",
      ],
    },
    {
      icon: Thermometer,
      title: "Temperature",
      description: "Convert between different temperature scales",
      features: [
        "Celsius, Fahrenheit, Kelvin",
        "Rankine scale",
        "Temperature differences",
        "Heat energy conversion",
      ],
    },
    {
      icon: Zap,
      title: "Energy & Power",
      description: "Convert between different units of energy and power",
      features: [
        "Joules, calories, BTU",
        "Watts, horsepower",
        "Electron volts",
        "Energy efficiency",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Interactive Demo */}
      <section className="w-full h-[100vh] py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Try Our Scientific Converters
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Precise and reliable scientific unit conversions
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <Tabs defaultValue="temperature" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="temperature">Temperature</TabsTrigger>
                <TabsTrigger value="length">Length</TabsTrigger>
                <TabsTrigger value="mass">Mass</TabsTrigger>
                <TabsTrigger value="energy">Energy</TabsTrigger>
              </TabsList>
              <TabsContent
                value="temperature"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-temp">From</Label>
                        <Select defaultValue="celsius">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="celsius">
                              Celsius (°C)
                            </SelectItem>
                            <SelectItem value="fahrenheit">
                              Fahrenheit (°F)
                            </SelectItem>
                            <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                            <SelectItem value="rankine">
                              Rankine (°R)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-temp">To</Label>
                        <Select defaultValue="fahrenheit">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="celsius">
                              Celsius (°C)
                            </SelectItem>
                            <SelectItem value="fahrenheit">
                              Fahrenheit (°F)
                            </SelectItem>
                            <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                            <SelectItem value="rankine">
                              Rankine (°R)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-temp-value">Value</Label>
                        <Input
                          id="from-temp-value"
                          placeholder="Enter value"
                          defaultValue="25"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-temp-value">Result</Label>
                        <Input id="to-temp-value" readOnly value="77" />
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Formula: (°C × 9/5) + 32 = °F</p>
                    </div>

                    <Button className="w-full">Convert</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="length"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-length">From</Label>
                        <Select defaultValue="meter">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meter">Meters (m)</SelectItem>
                            <SelectItem value="cm">Centimeters (cm)</SelectItem>
                            <SelectItem value="mm">Millimeters (mm)</SelectItem>
                            <SelectItem value="km">Kilometers (km)</SelectItem>
                            <SelectItem value="inch">Inches (in)</SelectItem>
                            <SelectItem value="foot">Feet (ft)</SelectItem>
                            <SelectItem value="yard">Yards (yd)</SelectItem>
                            <SelectItem value="mile">Miles (mi)</SelectItem>
                            <SelectItem value="nm">Nanometers (nm)</SelectItem>
                            <SelectItem value="angstrom">
                              Angstroms (Å)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-length">To</Label>
                        <Select defaultValue="foot">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meter">Meters (m)</SelectItem>
                            <SelectItem value="cm">Centimeters (cm)</SelectItem>
                            <SelectItem value="mm">Millimeters (mm)</SelectItem>
                            <SelectItem value="km">Kilometers (km)</SelectItem>
                            <SelectItem value="inch">Inches (in)</SelectItem>
                            <SelectItem value="foot">Feet (ft)</SelectItem>
                            <SelectItem value="yard">Yards (yd)</SelectItem>
                            <SelectItem value="mile">Miles (mi)</SelectItem>
                            <SelectItem value="nm">Nanometers (nm)</SelectItem>
                            <SelectItem value="angstrom">
                              Angstroms (Å)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-length-value">Value</Label>
                        <Input
                          id="from-length-value"
                          placeholder="Enter value"
                          defaultValue="1"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-length-value">Result</Label>
                        <Input id="to-length-value" readOnly value="3.28084" />
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Precision: 6 decimal places</p>
                    </div>

                    <Button className="w-full">Convert</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="mass"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-mass">From</Label>
                        <Select defaultValue="kg">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kilograms (kg)</SelectItem>
                            <SelectItem value="g">Grams (g)</SelectItem>
                            <SelectItem value="mg">Milligrams (mg)</SelectItem>
                            <SelectItem value="lb">Pounds (lb)</SelectItem>
                            <SelectItem value="oz">Ounces (oz)</SelectItem>
                            <SelectItem value="ton">Metric Tons (t)</SelectItem>
                            <SelectItem value="amu">
                              Atomic Mass Units (u)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-mass">To</Label>
                        <Select defaultValue="lb">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kilograms (kg)</SelectItem>
                            <SelectItem value="g">Grams (g)</SelectItem>
                            <SelectItem value="mg">Milligrams (mg)</SelectItem>
                            <SelectItem value="lb">Pounds (lb)</SelectItem>
                            <SelectItem value="oz">Ounces (oz)</SelectItem>
                            <SelectItem value="ton">Metric Tons (t)</SelectItem>
                            <SelectItem value="amu">
                              Atomic Mass Units (u)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-mass-value">Value</Label>
                        <Input
                          id="from-mass-value"
                          placeholder="Enter value"
                          defaultValue="1"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-mass-value">Result</Label>
                        <Input id="to-mass-value" readOnly value="2.20462" />
                      </div>
                    </div>

                    <Button className="w-full">Convert</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="energy"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-energy">From</Label>
                        <Select defaultValue="joule">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joule">Joules (J)</SelectItem>
                            <SelectItem value="calorie">
                              Calories (cal)
                            </SelectItem>
                            <SelectItem value="kcal">
                              Kilocalories (kcal)
                            </SelectItem>
                            <SelectItem value="kwh">
                              Kilowatt-hours (kWh)
                            </SelectItem>
                            <SelectItem value="ev">
                              Electron Volts (eV)
                            </SelectItem>
                            <SelectItem value="btu">BTU</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-energy">To</Label>
                        <Select defaultValue="calorie">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joule">Joules (J)</SelectItem>
                            <SelectItem value="calorie">
                              Calories (cal)
                            </SelectItem>
                            <SelectItem value="kcal">
                              Kilocalories (kcal)
                            </SelectItem>
                            <SelectItem value="kwh">
                              Kilowatt-hours (kWh)
                            </SelectItem>
                            <SelectItem value="ev">
                              Electron Volts (eV)
                            </SelectItem>
                            <SelectItem value="btu">BTU</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-energy-value">Value</Label>
                        <Input
                          id="from-energy-value"
                          placeholder="Enter value"
                          defaultValue="1000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to-energy-value">Result</Label>
                        <Input id="to-energy-value" readOnly value="239.006" />
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>1 calorie = 4.184 joules (exact)</p>
                    </div>

                    <Button className="w-full">Convert</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Scientific Measurement Tools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Precise scientific unit conversions and measurement tools for
                research, education, and professional use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scienceTools.map((tool, index) => (
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                More Scientific Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Additional measurement and conversion tools for specialized
                scientific applications
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Droplet className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Volume & Capacity</CardTitle>
                </div>
                <CardDescription>
                  Convert between different units of volume and capacity
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
                    <Wind className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Pressure</CardTitle>
                </div>
                <CardDescription>
                  Convert between different units of pressure
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
                    <Gauge className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Flow Rate</CardTitle>
                </div>
                <CardDescription>
                  Convert between different units of flow rate
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Need More Scientific Tools?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to access advanced scientific calculators,
                formulas, and constants.
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
