import Image from "next/image";
import React, { FC, ReactElement } from "react";

type props = {
  file: File;
};

const FileCard: FC<props> = ({ file }): ReactElement => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <div className="p-2 border select-none border-gray-100 rounded-md">
      <Image className="pointer-events-none select-none" alt={file.name} width={100} height={100} src={imageUrl} />
      <span className="">{file.name}</span>
    </div>
  );
};

export default FileCard;
