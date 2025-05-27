"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const MathCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (char: string) => {
    switch (char) {
      case "=":
        try {
          const evalResult = eval(input);
          setResult(evalResult);
        } catch (err) {
          setResult("Math Error");
        }
        setInput("");
        break;
      case "C":
        setInput((s) => {
          const chars = s.split("");
          chars.pop();
          return chars.join("");
        });
        break;
      case "CE":
        setInput("");
        setResult("");
        break;
      default:
        setResult("");
        setInput((s) => {
          return `${s}${char}`;
        });
    }
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-2">
        <div className="space-y-2">
          <Label htmlFor="result">Result</Label>
          <Input
            id="input"
            readOnly
            value={result}
            className="text-right text-lg font-mono"
          />
          <Input
            id="result"
            readOnly
            value={result || input}
            className="text-right text-lg font-mono"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "÷",
          "4",
          "5",
          "6",
          "×",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((button, index) => (
          <Button
            key={index}
            variant={["="].includes(button) ? "default" : "outline"}
            onClick={() => handleClick(button)}
          >
            {button}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["C", "CE", "%", "√", "sin", "cos", "tan", "^"].map(
          (button, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleClick(button)}
            >
              {button}
            </Button>
          )
        )}
      </div>
    </div>
  );
};
