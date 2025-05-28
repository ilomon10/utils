import { cx } from "class-variance-authority";
import Link from "next/link";
import React from "react";

export type PinType = {
  label: string;
  path: string;
  info?: string;
  pin: number;
  type: "data" | "source" | "ground";
};

const PiPins: React.FC<{
  top: PinType[];
  bottom: PinType[];
}> = ({ top, bottom }) => {
  return (
    <div className="pinout">
      <div className="board" />
      {Object.entries({ bottom, top }).map(([key, pins]) => (
        <ul key={key} className={cx(key)}>
          {pins.map(({ label, path, info, pin, type }) => (
            <li key={pin}>
              <Link href={path || "#"}>
                <span className="label">
                  <span className="name">
                    {label}
                    <small>{info}</small>
                  </span>
                  <span className="phys">{pin}</span>
                </span>
                <span className={`pin ${type}`} />
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default PiPins;
