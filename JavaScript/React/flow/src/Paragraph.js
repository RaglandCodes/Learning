// @flow

import React from "react";
import { useTheme, createUseStyles } from "react-jss";


function Paragraph({ text }: {text: string}) {
  return (
    <p>
      {text} This is the text for the paragrah {text}
    </p>
  );
}

export default Paragraph;
