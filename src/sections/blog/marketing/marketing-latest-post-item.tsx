import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function MarketingLatestPostItem({ post }: Props) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        height: 280,
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          borderRadius: 2,
        }}
      >
        <m.div 
          variants={varHover(1.25)} 
          transition={varTranHover()}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={post.coverUrl}
            alt={post.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            overlay={`linear-gradient(to top, ${alpha(theme.palette.common.black, 0.8)} 0%, ${
              alpha(theme.palette.common.black, 0.2)
            } 100%)`}
          />
        </m.div>
      </Box>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 3,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            createdAt={fDate(post.createdAt)}
            duration={post.duration}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />

          <Link
            component={RouterLink}
            href={paths.marketing.post}
            variant="h4"
            color="inherit"
            underline="none"
          >
            {post.title}
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
