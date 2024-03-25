import React, { ReactNode } from "react";
// import { CustomCursorProvider } from "./CustomCursorContext";

const AppContext = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <CustomCursorProvider> */}
        {children}
      {/* </CustomCursorProvider> */}
    </>
  );
};

export default AppContext;
