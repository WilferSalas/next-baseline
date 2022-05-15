// @package
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// @types
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Next Playground
    </Box>
  </Container>
);

export default Home;
