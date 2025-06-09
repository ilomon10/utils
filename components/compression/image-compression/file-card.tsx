import Image from "next/image";
import React, { FC, ReactElement } from "react";

type props = {
  file: File;
};

const FileCard: FC<props> = ({ file }): ReactElement => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <div className="overflow-clip shadow-md shadow-gray-300 border select-none border-gray-300 rounded-md">
      <Image className="pointer-events-none select-none" alt={file.name} width={150} height={100} src={imageUrl} />
    </div>
  );
};

export default FileCard;
