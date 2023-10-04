import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface ITaggedText {
  text: string;
  tagSymbol?: string;
  color?: string;
}
const TaggedText: FC<ITaggedText> = ({
  text = 'null',
  tagSymbol = '@',
  color = 'inherit',
}) => {
  return (
    <Typography variant="h6" color={color}>
      {tagSymbol +
        text.toLowerCase().replace(/[\s~'@#%&*()\-_=+[\]}\\;:'",<.>/?]/g, '')}
    </Typography>
  );
};

export default TaggedText;
