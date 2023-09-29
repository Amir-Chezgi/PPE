import { Button, styled } from "@mui/material";
import React from "react";

const Pagefirst = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
  }));
  return (
    <>
      page
      <BlueButton> button</BlueButton>
    </>
  );
};

export default Pagefirst;
