// @flow

import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  txt: theme => ({
    fontSize: theme.fontSize
  })
});

function Paragraph({ text }: { text: string }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  console.log(`${JSON.stringify(theme)} <= theme from parag`);
  return (
    <p className={classes.txt}>
      {text} This is the text for the paragrah {text}
    </p>
  );
}

export default Paragraph;
