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

const FileUpload: FC = (): ReactElement => {
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);
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
  return (
    <div>
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
              <span className="text-sm text-muted-foreground">80%</span>
            </div>
            <Slider defaultValue={[80]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="format">Output Format</Label>
            <Select defaultValue="original">
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
            <Select defaultValue="none">
              <SelectTrigger>
                <SelectValue placeholder="Select resize option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No resize</SelectItem>
                <SelectItem value="50">50% of original</SelectItem>
                <SelectItem value="75">75% of original</SelectItem>
                <SelectItem value="custom">Custom dimensions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Compress Image</Button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
