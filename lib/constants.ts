import {
  CalculatorIcon,
  ArchiveIcon,
  RefreshCwIcon,
  RulerIcon,
  CodeIcon,
  DollarSignIcon,
} from "lucide-react";

export {};

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
  features: string[];
}

export const navItems: NavItem[] = [
  {
    icon: CalculatorIcon,
    title: "Math Models",
    href: "/math/calc",
    description:
      "Advanced mathematical calculations, equation solvers, and statistical analysis tools",
    features: [
      "Scientific Calculator",
      "Equation Solver",
      "Statistics",
      "Graphing",
    ],
  },
  {
    icon: ArchiveIcon,
    title: "Compression",
    href: "/compression",
    description:
      "Compress and decompress files with multiple formats and optimization levels",
    features: [
      "ZIP/RAR Support",
      "Image Compression",
      "Batch Processing",
      "Size Optimization",
    ],
  },
  {
    icon: RefreshCwIcon,
    title: "Converters",
    href: "/converter",
    description:
      "Convert between different file formats, units, and data types seamlessly",
    features: [
      "File Conversion",
      "Unit Conversion",
      "Currency Exchange",
      "Base Conversion",
    ],
  },
  {
    icon: RulerIcon,
    title: "Physics",
    href: "/physics/meter",
    description:
      "Precise scientific unit conversions and measurement tools for research",
    features: [
      "Length & Distance",
      "Weight & Mass",
      "Temperature",
      "Energy & Power",
    ],
  },
  {
    icon: CodeIcon,
    title: "Code Snippets",
    href: "/programming/code-snippets",
    description:
      "Store, organize, and share your code snippets across multiple languages",
    features: [
      "Syntax Highlighting",
      "Language Support",
      "Search & Filter",
      "Export Options",
    ],
  },
  {
    icon: DollarSignIcon,
    title: "Finance Toolkit",
    href: "/finance/toolkit",
    description:
      "Comprehensive financial calculators and analysis tools for smart decisions",
    features: [
      "Loan Calculator",
      "Investment Analysis",
      "Tax Calculator",
      "Budget Planner",
    ],
  },
];
