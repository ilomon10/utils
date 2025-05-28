import PiPins, {
  PinType,
} from "@/components/electronics/pinout/raspberry-pi/pins";
import { Metadata } from "next";

const PINS_LIST: {
  top: PinType[];
  bottom: PinType[];
} = {
  bottom: [
    {
      label: "3v3 Power",
      path: "3v3_power",
      pin: 1,
      type: "source",
    },
    {
      label: "GPIO 8",
      info: "(I2C0 SDA)",
      path: "pin3_gpio8",
      pin: 3,
      type: "data",
    },
    {
      label: "GPIO 9",
      info: "(I2C0 SCL)",
      path: "pin5_gpio9",
      pin: 5,
      type: "data",
    },
    {
      label: "GPIO 7",
      path: "pin7_gpio4",
      pin: 7,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 9,
      type: "ground",
    },
    {
      label: "GPIO 0",
      info: "(UART Rx 2)",
      path: "pin11_gpio0",
      pin: 11,
      type: "data",
    },
    {
      label: "GPIO 2",
      info: "(UART Tx 2)",
      path: "pin13_gpio2",
      pin: 13,
      type: "data",
    },
    {
      label: "GPIO 3",
      info: "(CST2)",
      path: "pin15_gpio3",
      pin: 15,
      type: "data",
    },
    {
      label: "3v3 Power",
      path: "3v3_power",
      pin: 17,
      type: "source",
    },
    {
      label: "GPIO 12",
      info: "(MOSI)",
      path: "pin19_gpio12",
      pin: 19,
      type: "data",
    },
    {
      label: "GPIO 13",
      info: "(MISO)",
      path: "pin21_gpio13",
      pin: 21,
      type: "data",
    },
    {
      label: "GPIO 14",
      info: "(SCLK)",
      path: "pin23_gpio14",
      pin: 23,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 25,
      type: "ground",
    },
    {
      label: "GPIO 30",
      info: "(SDA.1)",
      path: "pin27_gpio30",
      pin: 27,
      type: "data",
    },
    {
      label: "GPIO 21",
      path: "pin29_gpio21",
      pin: 29,
      type: "data",
    },
    {
      label: "GPIO 22",
      path: "pin31_gpio22",
      pin: 31,
      type: "data",
    },
    {
      label: "GPIO 23",
      path: "pin35_gpio23",
      pin: 33,
      type: "data",
    },
    {
      label: "GPIO 24",
      path: "pin35_gpio24",
      pin: 35,
      type: "data",
    },
    {
      label: "GPIO 25",
      path: "pin37_gpio25",
      pin: 37,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 39,
      type: "ground",
    },
  ],
  top: [
    {
      label: "5v Power",
      path: "5v_power",
      pin: 2,
      type: "source",
    },
    {
      label: "5v Power",
      path: "5v_power",
      pin: 4,
      type: "source",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 6,
      type: "ground",
    },
    {
      label: "GPIO 15",
      path: "pin8_gpio15",
      info: "(UART TX 3)",
      pin: 8,
      type: "data",
    },
    {
      label: "GPIO 16",
      path: "pin10_gpio16",
      info: "(UART RX 3)",
      pin: 10,
      type: "source",
    },
    {
      label: "GPIO 1",
      path: "pin12_gpio1",
      pin: 12,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 14,
      type: "ground",
    },
    {
      label: "GPIO 4",
      path: "pin16_gpio4",
      pin: 16,
      type: "data",
    },
    {
      label: "GPIO 5",
      path: "pin18_gpio5",
      pin: 18,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 20,
      type: "ground",
    },
    {
      label: "GPIO 6",
      info: "(RST 2)",
      path: "pin22_gpio6",
      pin: 22,
      type: "data",
    },
    {
      label: "GPIO 10",
      info: "(SPI0 CE0)",
      path: "pin24_gpio10",
      pin: 24,
      type: "data",
    },
    {
      label: "GPIO 11",
      path: "pin26_gpio11",
      info: "(SPI0 CE1)",
      pin: 26,
      type: "data",
    },
    {
      label: "GPIO 31",
      path: "pin28_gpio31",
      info: "(EEPROM SCL)",
      pin: 28,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 30,
      type: "ground",
    },
    {
      label: "GPIO 26",
      path: "pin32_gpio26",
      info: "(RST1)",
      pin: 32,
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: 34,
      type: "ground",
    },
    {
      label: "GPIO 27",
      info: "(CST1)",
      path: "pin36_gpio27",
      pin: 36,
      type: "data",
    },
    {
      label: "GPIO 28",
      info: "(UART Tx 1)",
      path: "pin38_gpio28",
      pin: 38,
      type: "data",
    },
    {
      label: "GPIO 29",
      info: "(UART Rx 1)",
      path: "pin40_gpio29",
      pin: 40,
      type: "data",
    },
  ],
};

export const metadata: Metadata = {
  title: "Orange Pi GPIO Pinout & Function Reference | Utils",
  description:
    "Complete Orange Pi pinout diagram: GPIO, power, UART, I²C, SPI and more. Find the right pins for your project in seconds.",
};

export default function ElectronicsPinoutOrangePiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full min-h-[100vh] py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Orange Pi Pinout Reference
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Quickly identify every header pin on your Orange Pi board—GPIO,
                power rails, UART, SPI, I²C, and more.
              </p>
            </div>
          </div>

          <div className="container mx-auto max-w-2xl">
            <PiPins top={PINS_LIST.top} bottom={PINS_LIST.bottom} />
          </div>
        </div>
      </section>
    </div>
  );
}
