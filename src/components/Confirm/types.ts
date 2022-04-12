import React from "react";

export type TConfirmProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handler: () => void;
  id: string;
  text: {
    disagree: string;
    agree: string;
    title: string;
  };
};
