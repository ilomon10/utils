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
  Archive,
  FileArchive,
  ImageIcon,
  Download,
  Upload,
  ArrowRight,
} from "lucide-react";

export default function CompressionPage() {
  const compressionTools = [
    {
      icon: FileArchive,
      title: "File Compression",
      description:
        "Compress files to reduce size for easier sharing and storage",
      features: [
        "ZIP/RAR/7Z formats",
        "Password protection",
        "Split archives",
        "Batch compression",
      ],
    },
    {
      icon: ImageIcon,
      title: "Image Compression",
      description: "Optimize images without significant quality loss",
      features: [
        "JPEG/PNG/WebP support",
        "Quality adjustment",
        "Batch processing",
        "Metadata removal",
      ],
    },
    {
      icon: Archive,
      title: "Video Compression",
      description: "Reduce video file sizes while maintaining quality",
      features: [
        "Multiple format support",
        "Resolution adjustment",
        "Bitrate control",
        "Fast processing",
      ],
    },
    {
      icon: Download,
      title: "Decompression Tools",
      description: "Extract files from various compressed formats",
      features: [
        "Multi-format support",
        "Password handling",
        "Integrity verification",
        "Preview before extract",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Interactive Demo */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Try Our Image Compression
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Optimize your images with our compression tool
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <Tabs defaultValue="image" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="image">Image Compression</TabsTrigger>
                <TabsTrigger value="file">File Compression</TabsTrigger>
                <TabsTrigger value="extract">Extract Files</TabsTrigger>
              </TabsList>
              <TabsContent
                value="image"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <div className="space-y-2">
                        <h3 className="font-medium">Drop your image here</h3>
                        <p className="text-sm text-muted-foreground">
                          Supports JPG, PNG, WebP up to 10MB
                        </p>
                      </div>
                      <Button size="sm">Select File</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="quality">Quality</Label>
                        <span className="text-sm text-muted-foreground">
                          80%
                        </span>
                      </div>
                      <Slider defaultValue={[80]} max={100} step={1} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="format">Output Format</Label>
                      <Select defaultValue="original">
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="original">
                            Same as original
                          </SelectItem>
                          <SelectItem value="jpg">JPG</SelectItem>
                          <SelectItem value="png">PNG</SelectItem>
                          <SelectItem value="webp">WebP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resize">Resize</Label>
                      <Select defaultValue="none">
                        <SelectTrigger>
                          <SelectValue placeholder="Select resize option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No resize</SelectItem>
                          <SelectItem value="50">50% of original</SelectItem>
                          <SelectItem value="75">75% of original</SelectItem>
                          <SelectItem value="custom">
                            Custom dimensions
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full">Compress Image</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="file"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <div className="space-y-2">
                        <h3 className="font-medium">Drop files here</h3>
                        <p className="text-sm text-muted-foreground">
                          Select multiple files to create an archive
                        </p>
                      </div>
                      <Button size="sm">Select Files</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="archive-format">Archive Format</Label>
                      <Select defaultValue="zip">
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zip">ZIP</SelectItem>
                          <SelectItem value="7z">7Z</SelectItem>
                          <SelectItem value="tar">TAR</SelectItem>
                          <SelectItem value="tar.gz">TAR.GZ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="compression-level">
                        Compression Level
                      </Label>
                      <Select defaultValue="normal">
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="store">
                            Store (no compression)
                          </SelectItem>
                          <SelectItem value="fast">
                            Fast (less compression)
                          </SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="maximum">
                            Maximum (slower)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="checkbox"
                          id="password"
                          className="w-4 h-4"
                        />
                        <Label htmlFor="password">Password protect</Label>
                      </div>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        disabled
                      />
                    </div>

                    <Button className="w-full">Create Archive</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="extract"
                className="p-6 border rounded-lg mt-2 bg-background"
              >
                <div className="space-y-6">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <div className="space-y-2">
                        <h3 className="font-medium">Drop archive here</h3>
                        <p className="text-sm text-muted-foreground">
                          Supports ZIP, RAR, 7Z, TAR, and more
                        </p>
                      </div>
                      <Button size="sm">Select Archive</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="extract-path">Extract to</Label>
                      <Input
                        id="extract-path"
                        placeholder="Same folder as archive"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="checkbox"
                          id="extract-password"
                          className="w-4 h-4"
                        />
                        <Label htmlFor="extract-password">
                          Archive is password protected
                        </Label>
                      </div>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        disabled
                      />
                    </div>

                    <Button className="w-full">Extract Files</Button>
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
                File & Media Compression
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Powerful compression tools to reduce file sizes, optimize
                images, and manage archives efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compressionTools.map((tool, index) => (
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Need Advanced Compression Features?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Create an account to access batch processing, higher file size
                limits, and cloud storage integration.
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
