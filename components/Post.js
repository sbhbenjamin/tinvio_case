import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

export const Post = ({ header, text }) => {
  return (
    <Stack borderWidth='1px' borderRadius='10px' paddingX='6' paddingY='4'>
      <Text fontSize='lg' fontWeight='semibold'>
        {header}
      </Text>
      <Text color='gray.500'>{text}...</Text>
    </Stack>
  );
};

export default Post;
