import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Calculator,
  Archive,
  RefreshCw,
  Ruler,
  Code,
  DollarSign,
  Zap,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

export function SiteFooter() {
  const toolCategories = [
    { name: "Math Models", href: "/math-models", icon: Calculator },
    { name: "Compression", href: "/compression", icon: Archive },
    { name: "Converters", href: "/converters", icon: RefreshCw },
    { name: "Science Meters", href: "/science-meters", icon: Ruler },
    { name: "Code Snippets", href: "/code-snippets", icon: Code },
    { name: "Finance Toolkit", href: "/finance-toolkit", icon: DollarSign },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Contact Support", href: "#" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Data Processing", href: "#" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="w-full border-t bg-background">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">UtilityKit</span>
            </div>
            <p className="text-muted-foreground">
              Professional-grade utilities designed to boost your productivity
              and solve complex problems efficiently.
            </p>
            <div className="space-y-2">
              <h3 className="font-medium">Subscribe to our newsletter</h3>
              <div className="flex max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>

          {/* Tool Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tools</h3>
            <ul className="space-y-2">
              {toolCategories.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <tool.icon className="mr-2 h-4 w-4" />
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Links */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} UtilityKit. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
