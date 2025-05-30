import { ElectronicsVoltageDivider } from "@/components/electronics/voltage-divider";
import imageVoltageDivider1 from "@/assets/electronics/voltage-divider-calculator-1.png";
import imageVoltageDivider2 from "@/assets/electronics/voltage-divider-calculator-2.png";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltage Divider Calculator & Tutorial | Utils",
  description:
    "Learn how to design and calculate voltage dividers. Step-by-step guide, formula, worked example, and best practices for stable voltage outputs.",
};

export default function ElectronicsVoltageDividerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full min-h-[100vh] py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Voltage Divider Guide & Calculator
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Get a taste of our math tools with this simple calculator demo
              </p>
            </div>
          </div>

          <div className="container mx-auto max-w-2xl flex flex-col-reverse md:flex-row gap-2 md:justify-stretch items-center">
            <div className="max-w-lg md:w-1/2 flex md:flex-col gap-4">
              <Image
                alt="voltage divider equation"
                className="w-1/3 md:w-36 object-contain"
                src={imageVoltageDivider1.src}
                height={imageVoltageDivider1.height}
                width={imageVoltageDivider1.width}
              />

              <Image
                alt="voltage divider schematic"
                className="w-2/3 md:w-md object-contain"
                src={imageVoltageDivider2.src}
                height={imageVoltageDivider2.height}
                width={imageVoltageDivider2.width}
              />
            </div>

            <div className="md:w-1/2 w-full p-4 border rounded-lg mt-2 bg-background">
              <ElectronicsVoltageDivider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
