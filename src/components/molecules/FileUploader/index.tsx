import { IconButton } from "components/molecules";
import { FC } from "react";

export const FileUploader: FC<unknown> = (props) => (
  <IconButton icon="upload" dashed {...props}>
    Choose File
  </IconButton>
);
