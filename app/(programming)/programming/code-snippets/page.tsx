"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Copy,
  Share,
  Star,
  ArrowRight,
  Save,
  Tag,
  FolderPlus,
} from "lucide-react";

export default function CodeSnippetsPage() {
  const popularLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "Go",
    "Rust",
  ];

  const featuredSnippets = [
    {
      title: "React useEffect Hook Example",
      description: "A simple example of using the useEffect hook in React",
      language: "JavaScript",
      code: "useEffect(() => {\n  // This runs after every render\n  document.title = `You clicked ${count} times`;\n  \n  return () => {\n    // Cleanup function\n    console.log('Component unmounted');\n  };\n}, [count]); // Only re-run if count changes",
      tags: ["react", "hooks", "frontend"],
      stars: 42,
    },
    {
      title: "Python List Comprehension",
      description:
        "Create a new list based on an existing list with a single line of code",
      language: "Python",
      code: "# Create a list of squares\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\nprint(squares)  # Output: [1, 4, 9, 16, 25]",
      tags: ["python", "list", "basics"],
      stars: 38,
    },
    {
      title: "SQL JOIN Query",
      description: "Example of joining two tables in SQL",
      language: "SQL",
      code: "SELECT users.name, orders.product\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE orders.status = 'completed'\nORDER BY orders.date DESC;",
      tags: ["sql", "database", "join"],
      stars: 29,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Code Snippet Manager
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Store, organize, and share your code snippets across multiple
                languages and frameworks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg">
                Create Snippet
                <Plus className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Library
                <Search className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Search for code snippets..."
                  className="h-12"
                />
              </div>
              <Button className="h-12 px-6">
                <Search className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">Search</span>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium">Popular:</span>
              {popularLanguages.slice(0, 6).map((lang, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippets */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Featured Snippets
              </h2>
              <p className="text-muted-foreground">
                Popular code snippets from our community
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSnippets.map((snippet, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{snippet.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {snippet.description}
                      </CardDescription>
                    </div>
                    <Badge>{snippet.language}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="relative rounded-md bg-muted p-4 overflow-x-auto font-mono text-sm">
                    <pre className="whitespace-pre-wrap break-all">
                      {snippet.code}
                    </pre>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {snippet.tags?.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-3 pb-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span>{snippet.stars}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Star className="h-4 w-4" />
                      <span className="sr-only">Star</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">
              View More Snippets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Create Snippet Demo */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Create Your Own Snippet
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Save and organize your code for future reference
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>New Code Snippet</CardTitle>
                <CardDescription>
                  Fill in the details to save your code snippet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a descriptive title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe what this code does"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="javascript">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularLanguages.map((lang, index) => (
                          <SelectItem key={index} value={lang.toLowerCase()}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="folder">Folder</Label>
                    <div className="flex gap-2">
                      <Select defaultValue="none">
                        <SelectTrigger className="flex-1">
                          <SelectValue placeholder="Select folder" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="css">CSS Tricks</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <FolderPlus className="h-4 w-4" />
                        <span className="sr-only">New Folder</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code">Code</Label>
                  <Textarea
                    id="code"
                    placeholder="Paste or type your code here"
                    className="font-mono h-64"
                    defaultValue="// Your code here"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      id="tags"
                      placeholder="Add tags separated by commas"
                    />
                    <Button variant="outline" size="icon">
                      <Tag className="h-4 w-4" />
                      <span className="sr-only">Add Tag</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>
                  Save Snippet
                  <Save className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
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
                Ready to Organize Your Code?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to save unlimited snippets, create
                collections, and share with your team.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
