import React from 'react';
import {
  Text,
  Heading,
  Box,
  Image,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';

const NameCard = ({ user }) => {
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)');
  return (
    <Flex
      direction='column'
      w='auto'
      h='400px'
      maxW='600px'
      maxH='500px'
      borderWidth='1px'
      borderRadius='10px'
      shadow='lg'
      backgroundColor='white'
    >
      <Box h='40%' overflow='hidden'>
        <Image
          alt='Cover Image'
          objectFit='cover'
          src='image.jpg'
          className='namecard-image'
        />
      </Box>
      <Flex direction='column' p='8' h='60%'>
        <Heading fontSize='2xl' mb={{ base: 4, xl: 12 }}>
          {user.name}
        </Heading>
        <Flex direction='column' justifyContent='space-between' h='inherit'>
          <Flex>
            <Image w={5} src='phone.svg' alt='Phone' me={3} />
            <Text>{user.phone.split(' ')[0]}</Text>
          </Flex>
          <Flex>
            <Image w={5} src='category.png' alt='Category' me={3} />
            <Text>
              {user.company.bs
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' • ')}
            </Text>
          </Flex>
          <Flex>
            <Image w={5} src='shop.svg' alt='Company' me={3} />
            <Text>
              {user.address.street}, {user.address.suite}, {user.address.city}{' '}
              {user.address.zipcode}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NameCard;
