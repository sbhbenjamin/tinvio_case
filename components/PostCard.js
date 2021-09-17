import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import Post from './Post';

const PostCard = ({ user, posts }) => {
  return (
    <Stack
      h='inherit'
      maxW='600px'
      borderWidth='1px'
      borderRadius='10px'
      shadow='lg'
      paddingX={8}
      paddingY={10}
      spacing={6}
      overflowX='scroll'
      backgroundColor='white'
    >
      <Heading fontSize='2xl' pb={5}>
        {`${user.name.split(' ')[0]}'s Posts`}
      </Heading>
      <Heading
        fontSize='lg'
        color='gray.500'
        style={{ 'text-transform': 'uppercase' }}
      >
        {posts.length} posts
      </Heading>
      {posts.map((post) => (
        <Post
          key={post.id}
          header={post.title}
          text={post.body.substring(0, 60)}
        />
      ))}
    </Stack>
  );
};

export default PostCard;
