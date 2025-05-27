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

export const ElectronicsVoltageDivider = () => {
  const form = useForm();

  const handleSubmit = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          name="v_s"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voltage Source (Vs)</FormLabel>
              <FormControl>
                <Input placeholder="source voltage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="r_1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resistance 1 (R1)</FormLabel>
              <FormControl>
                <Input placeholder="resistance 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="r_2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resistance 2 (R2)</FormLabel>
              <FormControl>
                <Input placeholder="resistance 2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="v_out"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Output Voltage (Vout)</FormLabel>
              <FormControl>
                <Input placeholder="output voltage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
