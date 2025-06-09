"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import React, { FC, ReactElement, useCallback, useState } from "react";
import FileCard from "./file-card";
import { useForm, Controller, useWatch } from "react-hook-form";

const defaultValues = {
  quality: 80,
  format: "original",
  resize: 100
}

const FileUpload: FC = (): ReactElement => {
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);
  const form = useForm({
    defaultValues
  })
  const onDrop = useCallback((files: Array<File>) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  }, []);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [],
      "image/webp": [],
    },
  });

  const handleSubmit = (val: typeof defaultValues) => {
    console.log("on:submit", val)
  }

  const quality = useWatch({ control: form.control, name: "quality" });

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="space-y-6">
        {selectedFiles.length > 0 ? (
          <div className="flex flex-row gap-2">
            {selectedFiles.map((file) => (
              <FileCard file={file} key={`${file.size}${file.name}`} />
            ))}
          </div>
        ) : (
          <div
            {...getRootProps()}
            className="border-2 border-dashed cursor-pointer select-none rounded-lg p-8 text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <Upload className="h-10 w-10 text-muted-foreground" />
              <div className="space-y-2">
                <h3 className="font-medium">Drop your image here</h3>
                <p className="text-sm text-muted-foreground">
                  Supports JPG, PNG, WebP up to 10MB
                </p>
              </div>
              <input {...getInputProps()} />
              <Button size="sm">Select Files</Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="quality">Quality</Label>
              <span className="text-sm text-muted-foreground">{quality}%</span>
            </div>
            <Controller control={form.control} name="quality" render={({ field }) => (
              <Slider value={[field.value]} name={field.name} max={100} step={1} onValueChange={([value]) => field.onChange(value)} />
            )} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="format">Output Format</Label>
            <Select {...form.register("format")} defaultValue="original">
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Same as original</SelectItem>
                <SelectItem value="jpg">JPG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resize">Resize</Label>
            <Select {...form.register("resize")} defaultValue="none">
              <SelectTrigger>
                <SelectValue placeholder="Select resize option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">No resize</SelectItem>
                <SelectItem value="50">50% of original</SelectItem>
                <SelectItem value="75">75% of original</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">Compress Image</Button>
        </div>
      </div>
    </form>
  );
};

export default FileUpload;
