"use client";

import { MathCalculator } from "@/components/math/calculator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import solveVoltageDivider from "@/lib/voltage-divider-solver";

const SCHEMA = z.object({
  v_s: z.string().optional(),
  r_1: z.string().optional(),
  r_2: z.string().optional(),
  v_out: z.string().optional(),
});

export const ElectronicsVoltageDivider = () => {
  const form = useForm({
    resolver: zodResolver(SCHEMA),
  });

  const handleSubmit = (values: z.infer<typeof SCHEMA>) => {
    const result = solveVoltageDivider({
      v_s: values.v_s ? Number(values.v_s) : undefined,
      r_1: values.r_1 ? Number(values.r_1) : undefined,
      r_2: values.r_2 ? Number(values.r_2) : undefined,
      v_out: values.v_out ? Number(values.v_out) : undefined,
    });
    for (const [key, value] of Object.entries(result)) {
      form.setValue(key as any, String(value));
    }
  };

  return (
    <div className="p-4 border rounded-lg mt-2 bg-background">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            name="v_s"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>
                    Voltage Source (V<sub>S</sub>)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="source voltage" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="r_1"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>
                    Resistance 1 (R<sub>1</sub>)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="resistance 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="r_2"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>
                    Resistance 2 (R<sub>2</sub>)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="resistance 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="v_out"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>
                    Output Voltage (V<sub>out</sub>)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="output voltage" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Calculate</Button>
        </form>
      </Form>
    </div>
  );
};
