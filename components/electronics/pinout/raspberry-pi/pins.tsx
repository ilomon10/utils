import { cx } from "class-variance-authority";
import Link from "next/link";

const PINS_LIST = {
  bottom: [
    {
      label: "3v3 Power",
      path: "3v3_power",
      pin: "1",
      type: "source",
    },
    {
      label: "GPIO 2",
      info: "(I2C1 SDA)",
      path: "pin3_gpio2",
      pin: "3",
      type: "data",
    },
    {
      label: "GPIO 3",
      info: "(I2C1 SCL)",
      path: "pin5_gpio3",
      pin: "5",
      type: "data",
    },
    {
      label: "GPIO 4",
      info: "(GPCLK0)",
      path: "pin7_gpio4",
      pin: "7",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "9",
      type: "source",
    },
    {
      label: "GPIO 17",
      path: "pin11_gpio17",
      pin: "11",
      type: "data",
    },
    {
      label: "GPIO 27",
      path: "pin13_gpio27",
      pin: "13",
      type: "data",
    },
    {
      label: "GPIO 22",
      path: "pin15_gpio22",
      pin: "15",
      type: "data",
    },
    {
      label: "3v3 Power",
      path: "3v3_power",
      pin: "17",
      type: "source",
    },
    {
      label: "GPIO 10",
      path: "pin19_gpio10",
      info: "(SPI0 MOSI)",
      pin: "19",
      type: "data",
    },
    {
      label: "GPIO 9",
      path: "pin21_gpio9",
      info: "(SPI1 MOSI)",
      pin: "21",
      type: "data",
    },
    {
      label: "GPIO 11",
      path: "pin23_gpio11",
      info: "(SPI0 SCLK)",
      pin: "23",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "25",
      type: "source",
    },
    {
      label: "GPIO 0",
      path: "pin27_gpio0",
      info: "(EEPROM SDA)",
      pin: "27",
      type: "data",
    },
    {
      label: "GPIO 5",
      path: "pin29_gpio5",
      pin: "29",
      type: "data",
    },
    {
      label: "GPIO 6",
      path: "pin31_gpio6",
      pin: "31",
      type: "data",
    },
    {
      label: "GPIO 13",
      path: "pin35_gpio13",
      info: "(PWM1)",
      pin: "33",
      type: "data",
    },
    {
      label: "GPIO 19",
      path: "pin35_gpio19",
      info: "(PCM FS)",
      pin: "35",
      type: "data",
    },
    {
      label: "GPIO 26",
      path: "pin37_gpio26",
      pin: "37",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "39",
      type: "source",
    },
  ],
  top: [
    {
      label: "5v Power",
      path: "5v_power",
      pin: "2",
      type: "source",
    },
    {
      label: "5v Power",
      path: "5v_power",
      pin: "4",
      type: "source",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "6",
      type: "source",
    },
    {
      label: "GPIO 14",
      path: "pin8_gpio14",
      info: "(UART TX)",
      pin: "8",
      type: "data",
    },
    {
      label: "GPIO 15",
      path: "pin10_gpio15",
      info: "(UART RX)",
      pin: "10",
      type: "source",
    },
    {
      label: "GPIO 18",
      path: "pin12_gpio18",
      info: "(PCM CLK)",
      pin: "12",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "14",
      type: "source",
    },
    {
      label: "GPIO 23",
      path: "pin16_gpio23",
      pin: "16",
      type: "data",
    },
    {
      label: "GPIO 24",
      path: "pin18_gpio24",
      pin: "18",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "20",
      type: "data",
    },
    {
      label: "GPIO 25",
      path: "pin22_gpio25",
      pin: "22",
      type: "data",
    },
    {
      label: "GPIO 8",
      path: "pin24_gpio8",
      info: "(SPI0 CE0)",
      pin: "24",
      type: "data",
    },
    {
      label: "GPIO 7",
      path: "pin26_gpio7",
      info: "(SPI0 CE1)",
      pin: "26",
      type: "data",
    },
    {
      label: "GPIO 1",
      path: "pin28_gpio1",
      info: "(EEPROM SCL)",
      pin: "28",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "30",
      type: "source",
    },
    {
      label: "GPIO 12",
      path: "pin32_gpio12",
      info: "(PWM0)",
      pin: "32",
      type: "data",
    },
    {
      label: "GROUND",
      path: "ground",
      pin: "34",
      type: "data",
    },
    {
      label: "GPIO 16",
      path: "pin36_gpio16",
      pin: "36",
      type: "data",
    },
    {
      label: "GPIO 20",
      path: "pin38_gpio20",
      info: "(PCM DIN)",
      pin: "38",
      type: "data",
    },
    {
      label: "GPIO 21",
      path: "pin40_gpio21",
      info: "(PCM DOUT)",
      pin: "40",
      type: "data",
    },
  ],
};

const Pins = () => {
  return (
    <div className="pinout">
      <div className="board" />
      {Object.entries(PINS_LIST).map(([key, pins]) => (
        <ul key={key} className={cx(key)}>
          {pins.map(({ label, path, info, pin }) => (
            <li key={pin}>
              <Link href={path || "#"}>
                <span className="label">
                  <span className="name">
                    {label}
                    <small>{info}</small>
                  </span>
                  <span className="phys">{pin}</span>
                </span>
                <span className="pin" />
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Pins;
