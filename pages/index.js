import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NameCard from '../components/NameCard';
import PostCard from '../components/PostCard';
import UserMenu from '../components/UserMenu';
import { Stack, Box, Spacer, Spinner, useMediaQuery } from '@chakra-ui/react';

// Runs on build time
export async function getStaticProps() {
  const userResponse = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const users = await userResponse.json();

  return {
    props: { users },
  };
}

export default function Home({ users }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    async function fetchUser(id) {
      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await userResponse.json();

      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const postData = await postResponse.json();

      setCurrentUser(userData);
      setCurrentPosts(postData);
      setIsLoading(false);
    }
    fetchUser(currentIndex);
  }, [currentIndex]);

  const setSelectedUser = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
  };

  return (
    <>
      <Box className={styles.container}>
        <Head>
          <title>{isLoading ? 'Loading...' : currentUser.name}</title>
          <meta property='og:title' content='Leanne Graham' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Box justify='center' py='5vh' px='5vw'>
          {isLoading ? (
            <Spinner />
          ) : (
            currentUser &&
            currentPosts && (
              <Stack
                direction={{
                  base: 'column',
                  xl: 'row',
                }}
                spacing={4}
              >
                <Box h='500px' w='250px' d={{ base: 'none', xl: 'block' }}>
                  <UserMenu
                    users={users}
                    setSelectedUser={setSelectedUser}
                    selectedUser={currentIndex}
                  />
                </Box>
                <Spacer />
                <Box h='500px'>
                  <NameCard user={currentUser} />
                </Box>
                <Spacer />
                <Box h='500px'>
                  <PostCard user={currentUser} posts={currentPosts} />
                </Box>
              </Stack>
            )
          )}
        </Box>
      </Box>
    </>
  );
}
