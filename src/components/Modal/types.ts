import React from "react";

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  handler: (editName: string) => void;
  text: {
    disagree: string;
    agree: string;
    title: string;
    text: string;
  };
};
