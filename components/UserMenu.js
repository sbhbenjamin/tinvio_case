import { Button, Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const UserMenu = ({ users, setSelectedUser, selectedUser }) => {
  console.log(users);
  return (
    <Stack
      direction={{
        base: 'row',
        xl: 'column',
      }}
      borderWidth='1px'
      borderRadius='10px'
      shadow='lg'
      paddingX={8}
      paddingY={10}
      spacing={6}
      overflowX='scroll'
      h='inherit'
      backgroundColor='white'
    >
      <Heading fontSize='2xl' pb={5}>
        Users
      </Heading>
      <Heading
        fontSize='lg'
        color='gray.500'
        style={{ 'text-transform': 'uppercase' }}
      >
        {users.length} users
      </Heading>
      {users.map((user) => (
        <Box key={user.id} header={user.name}>
          <Button
            colorScheme={selectedUser == user.id ? 'teal' : 'ghost'}
            variant='link'
            onClick={() => setSelectedUser(user.id)}
          >
            {user.name}
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export default UserMenu;
