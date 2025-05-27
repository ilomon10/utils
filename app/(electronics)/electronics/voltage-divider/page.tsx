import { ElectronicsVoltageDivider } from "@/components/electronics/voltage-divider";

export default function ElectronicsVoltageDividerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[100vh] py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Voltage Divider
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Get a taste of our math tools with this simple calculator demo
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="p-4 border rounded-lg mt-2 bg-background">
              <ElectronicsVoltageDivider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
