import React from "react";

export interface IAuthSnackbarProps {
  message: string;
  handle: React.Dispatch<React.SetStateAction<string>>;
}
