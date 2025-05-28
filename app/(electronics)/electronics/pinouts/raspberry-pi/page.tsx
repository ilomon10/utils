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
      label: "GPIO 2",
      info: "(I2C1 SDA)",
      path: "pin3_gpio2",
      pin: 3,
      type: "data",
    },
    {
      label: "GPIO 3",
      info: "(I2C1 SCL)",
      path: "pin5_gpio3",
      pin: 5,
      type: "data",
    },
    {
      label: "GPIO 4",
      info: "(GPCLK0)",
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
      label: "GPIO 17",
      path: "pin11_gpio17",
      pin: 11,
      type: "data",
    },
    {
      label: "GPIO 27",
      path: "pin13_gpio27",
      pin: 13,
      type: "data",
    },
    {
      label: "GPIO 22",
      path: "pin15_gpio22",
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
      label: "GPIO 10",
      path: "pin19_gpio10",
      info: "(SPI0 MOSI)",
      pin: 19,
      type: "data",
    },
    {
      label: "GPIO 9",
      path: "pin21_gpio9",
      info: "(SPI1 MOSI)",
      pin: 21,
      type: "data",
    },
    {
      label: "GPIO 11",
      path: "pin23_gpio11",
      info: "(SPI0 SCLK)",
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
      label: "GPIO 0",
      path: "pin27_gpio0",
      info: "(EEPROM SDA)",
      pin: 27,
      type: "data",
    },
    {
      label: "GPIO 5",
      path: "pin29_gpio5",
      pin: 29,
      type: "data",
    },
    {
      label: "GPIO 6",
      path: "pin31_gpio6",
      pin: 31,
      type: "data",
    },
    {
      label: "GPIO 13",
      path: "pin35_gpio13",
      info: "(PWM1)",
      pin: 33,
      type: "data",
    },
    {
      label: "GPIO 19",
      path: "pin35_gpio19",
      info: "(PCM FS)",
      pin: 35,
      type: "data",
    },
    {
      label: "GPIO 26",
      path: "pin37_gpio26",
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
      label: "GPIO 14",
      path: "pin8_gpio14",
      info: "(UART TX)",
      pin: 8,
      type: "data",
    },
    {
      label: "GPIO 15",
      path: "pin10_gpio15",
      info: "(UART RX)",
      pin: 10,
      type: "source",
    },
    {
      label: "GPIO 18",
      path: "pin12_gpio18",
      info: "(PCM CLK)",
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
      label: "GPIO 23",
      path: "pin16_gpio23",
      pin: 16,
      type: "data",
    },
    {
      label: "GPIO 24",
      path: "pin18_gpio24",
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
      label: "GPIO 25",
      path: "pin22_gpio25",
      pin: 22,
      type: "data",
    },
    {
      label: "GPIO 8",
      path: "pin24_gpio8",
      info: "(SPI0 CE0)",
      pin: 24,
      type: "data",
    },
    {
      label: "GPIO 7",
      path: "pin26_gpio7",
      info: "(SPI0 CE1)",
      pin: 26,
      type: "data",
    },
    {
      label: "GPIO 1",
      path: "pin28_gpio1",
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
      label: "GPIO 12",
      path: "pin32_gpio12",
      info: "(PWM0)",
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
      label: "GPIO 16",
      path: "pin36_gpio16",
      pin: 36,
      type: "data",
    },
    {
      label: "GPIO 20",
      path: "pin38_gpio20",
      info: "(PCM DIN)",
      pin: 38,
      type: "data",
    },
    {
      label: "GPIO 21",
      path: "pin40_gpio21",
      info: "(PCM DOUT)",
      pin: 40,
      type: "data",
    },
  ],
};

export const metadata: Metadata = {
  title: "Raspberry Pi GPIO Pinout & Function Reference | Utils",
  description:
    "Complete Raspberry Pi pinout diagram: 40-pin header GPIO, power, UART, I²C, SPI, PWM and more. Find the right pins for your project in seconds.",
};

export default function ElectronicsPinoutRaspberryPiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full min-h-[100vh] py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Raspberry Pi Pinout Reference
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Quickly identify every pin on your Pi’s 40-pin header—GPIO,
                power rails, UART, SPI, I²C, PWM, ground—and never miswire your
                project again.
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
