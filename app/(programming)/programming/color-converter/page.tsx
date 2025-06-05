"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Palette,
  Pipette,
  Copy,
  Check,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";
import { toast } from "sonner";

// Helper functions (these would ideally be more robust and in a utils file)
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null;
};

const rgbToHex = (r: number, g: number, b: number): string =>
  `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;

const rgbToHsl = (
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const hslToRgb = (
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4)),
  };
};

// Tailwind palette generation (simplified)
const generateTailwindShades = (hexColor: string): Record<string, string> => {
  const baseRgb = hexToRgb(hexColor);
  if (!baseRgb) return {};

  const shades: Record<string, string> = {};
  const factors: Record<string, number> = {
    "50": 0.95,
    "100": 0.9,
    "200": 0.75,
    "300": 0.6,
    "400": 0.45,
    "500": 0, // base color
    "600": -0.1,
    "700": -0.25,
    "800": -0.4,
    "900": -0.55,
    "950": -0.7,
  };

  for (const shade in factors) {
    let r = baseRgb.r,
      g = baseRgb.g,
      b = baseRgb.b;
    const factor = factors[shade];

    if (factor > 0) {
      // Lighter shades: mix with white
      r = Math.round(r + (255 - r) * factor);
      g = Math.round(g + (255 - g) * factor);
      b = Math.round(b + (255 - b) * factor);
    } else if (factor < 0) {
      // Darker shades: mix with black
      r = Math.round(r + r * factor);
      g = Math.round(g + g * factor);
      b = Math.round(b + b * factor);
    }
    shades[shade] = rgbToHex(
      Math.max(0, Math.min(255, r)),
      Math.max(0, Math.min(255, g)),
      Math.max(0, Math.min(255, b))
    );
  }
  return shades;
};

export default function ColorToolsPage() {
  const [hex, setHex] = useState("#10B981"); // Emerald-500
  const [rgb, setRgb] = useState({ r: 16, g: 185, b: 129 });
  const [hsl, setHsl] = useState({ h: 158, s: 82, l: 49 });

  const [tailwindBaseColor, setTailwindBaseColor] = useState("#10B981");
  const [tailwindPalette, setTailwindPalette] = useState<
    Record<string, string>
  >({});
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   const newRgb = hexToRgb(hex);
  //   if (newRgb) {
  //     setRgb(newRgb);
  //     setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  //   }
  // }, [hex]);

  // useEffect(() => {
  //   setHex(rgbToHex(rgb.r, rgb.g, rgb.b));
  //   setHsl(rgbToHsl(rgb.r, rgb.g, rgb.b));
  // }, [rgb]);

  // useEffect(() => {
  //   const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  //   setRgb(newRgb);
  //   setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  // }, [hsl]);

  // useEffect(() => {
  //   if (tailwindBaseColor.match(/^#[0-9a-f]{6}$/i)) {
  //     setTailwindPalette(generateTailwindShades(tailwindBaseColor));
  //   }
  // }, [tailwindBaseColor]);

  const handleHexChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value;
    if (newHex.match(/^#?[0-9a-f]{0,6}$/i)) {
      setHex(newHex.startsWith("#") ? newHex : `#${newHex}`);
      if (newHex.match(/^#[0-9a-f]{6}$/i)) {
        const newRgbVal = hexToRgb(newHex);
        if (newRgbVal) setRgb(newRgbVal);
      }
    }
  };

  const handleRgbChange = (part: "r" | "g" | "b", value: string) => {
    const numValue = Number.parseInt(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 255) {
      setRgb((prev) => ({ ...prev, [part]: numValue }));
    } else if (value === "") {
      setRgb((prev) => ({ ...prev, [part]: 0 }));
    }
  };

  const handleHslChange = (part: "h" | "s" | "l", value: string) => {
    const numValue = Number.parseInt(value);
    const max = part === "h" ? 360 : 100;
    if (!isNaN(numValue) && numValue >= 0 && numValue <= max) {
      setHsl((prev) => ({ ...prev, [part]: numValue }));
    } else if (value === "") {
      setHsl((prev) => ({ ...prev, [part]: 0 }));
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied!", { description: `${text} copied to clipboard.` });
    setTimeout(() => setCopied(false), 1500);
  };
  // console.log(hex);

  const colorTools = [
    {
      icon: Pipette,
      title: "Color Converter",
      description:
        "Convert colors between HEX, RGB, and HSL formats instantly.",
      features: ["Live conversion", "Color picker input", "Copy color codes"],
    },
    {
      icon: Palette,
      title: "Tailwind Palette Generator",
      description:
        "Generate a full Tailwind CSS color palette from a base color.",
      features: [
        "Automatic shade generation",
        "Copy Tailwind config",
        "Visual preview",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Color Tools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Convert color formats and generate beautiful color palettes for
                your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {colorTools.map((tool, index) => (
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
                  <Button
                    className="w-full"
                    onClick={() => {
                      const demoElement = document.getElementById(
                        tool.title.toLowerCase().replace(/\s+/g, "-")
                      );
                      if (demoElement)
                        demoElement.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Use {tool.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demos */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          {/* Color Converter Demo */}
          <div id="color-converter" className="mb-16">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Color Converter
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Instantly convert between HEX, RGB, and HSL color formats.
                </p>
              </div>
            </div>
            <Card className="mx-auto max-w-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Label htmlFor="color-picker" className="mb-2 block">
                      Base Color
                    </Label>
                    <div className="relative">
                      <Input
                        type="color"
                        id="color-picker"
                        value={hex.match(/^#[0-9a-f]{6}$/i) ? hex : "#000000"}
                        onChange={(e) => setHex(e.target.value)}
                        className="w-full h-12 p-1 cursor-pointer"
                      />
                    </div>
                    <div
                      className="w-full h-24 mt-4 rounded-md border"
                      style={{
                        backgroundColor: hex.match(/^#[0-9a-f]{6}$/i)
                          ? hex
                          : "transparent",
                      }}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hex-input">HEX</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="hex-input"
                          value={hex}
                          onChange={handleHexChange}
                          placeholder="#RRGGBB"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleCopy(hex)}
                        >
                          {copied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label>RGB</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Input
                          type="number"
                          value={rgb.r}
                          onChange={(e) => handleRgbChange("r", e.target.value)}
                          placeholder="R"
                        />
                        <Input
                          type="number"
                          value={rgb.g}
                          onChange={(e) => handleRgbChange("g", e.target.value)}
                          placeholder="G"
                        />
                        <Input
                          type="number"
                          value={rgb.b}
                          onChange={(e) => handleRgbChange("b", e.target.value)}
                          placeholder="B"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-1 w-full"
                        onClick={() =>
                          handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
                        }
                      >
                        Copy RGB
                      </Button>
                    </div>
                    <div>
                      <Label>HSL</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Input
                          type="number"
                          value={hsl.h}
                          onChange={(e) => handleHslChange("h", e.target.value)}
                          placeholder="H"
                        />
                        <Input
                          type="number"
                          value={hsl.s}
                          onChange={(e) => handleHslChange("s", e.target.value)}
                          placeholder="S"
                        />
                        <Input
                          type="number"
                          value={hsl.l}
                          onChange={(e) => handleHslChange("l", e.target.value)}
                          placeholder="L"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-1 w-full"
                        onClick={() =>
                          handleCopy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)
                        }
                      >
                        Copy HSL
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tailwind Palette Generator Demo */}
          <div id="tailwind-palette-generator">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Tailwind Palette Generator
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Generate a full color palette for Tailwind CSS from a base
                  color.
                </p>
              </div>
            </div>
            <Card className="mx-auto max-w-3xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-grow space-y-2">
                      <Label htmlFor="tailwind-base">Base Color (HEX)</Label>
                      <Input
                        id="tailwind-base"
                        value={tailwindBaseColor}
                        onChange={(e) => setTailwindBaseColor(e.target.value)}
                        placeholder="#RRGGBB"
                      />
                    </div>
                    <Input
                      type="color"
                      id="tailwind-color-picker"
                      value={
                        tailwindBaseColor.match(/^#[0-9a-f]{6}$/i)
                          ? tailwindBaseColor
                          : "#000000"
                      }
                      onChange={(e) => setTailwindBaseColor(e.target.value)}
                      className="w-full sm:w-12 h-10 p-1 cursor-pointer"
                    />
                    <Button
                      onClick={() => {
                        if (tailwindBaseColor.match(/^#[0-9a-f]{6}$/i)) {
                          setTailwindPalette(
                            generateTailwindShades(tailwindBaseColor)
                          );
                          toast.success("Palette Generated!", {
                            description:
                              "Tailwind palette updated based on new color.",
                          });
                        } else {
                          toast.error("Invalid HEX", {
                            description:
                              "Please enter a valid 6-digit HEX color.",
                          });
                        }
                      }}
                    >
                      <RefreshCcw className="mr-2 h-4 w-4" /> Generate
                    </Button>
                  </div>

                  {Object.keys(tailwindPalette).length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Generated Palette:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {Object.entries(tailwindPalette).map(
                          ([shade, color]) => (
                            <div key={shade} className="text-center">
                              <div
                                className="h-16 w-full rounded border"
                                style={{ backgroundColor: color }}
                                onClick={() => handleCopy(color)}
                                title={`Copy ${color}`}
                              />
                              <p className="text-xs mt-1 font-mono">{shade}</p>
                              <p className="text-xs text-muted-foreground font-mono">
                                {color}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                      <Button
                        className="w-full mt-6"
                        onClick={() => {
                          const paletteString = `{\n${Object.entries(
                            tailwindPalette
                          )
                            .map(([shade, color]) => `  "${shade}": "${color}"`)
                            .join(",\n")}\n}`;
                          handleCopy(paletteString);
                          toast.success("Palette Copied!", {
                            description: "Tailwind palette config copied.",
                          });
                        }}
                      >
                        <Copy className="mr-2 h-4 w-4" /> Copy Tailwind Palette
                        Config
                      </Button>
                    </div>
                  )}
                </div>
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
                Enhance Your Design Workflow
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to save your favorite colors, palettes, and
                access more design tools.
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
