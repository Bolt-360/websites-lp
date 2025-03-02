import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

import { IBlogPostProps } from 'src/types/blog';

import CareerPostItem from './career-post-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function CareerPosts({ posts }: Props) {
  return (
    <>
      <Masonry
        columns={{ xs: 1, sm: 2 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {posts.slice(0, 8).map((post, index) => (
          <CareerPostItem key={post.id} post={post} index={index} />
        ))}
      </Masonry>

      <Stack
        alignItems="center"
        sx={{
          pt: 5,
          pb: { xs: 10, md: 0 },
        }}
      >
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Carregar mais
        </Button>
      </Stack>
    </>
  );
}
