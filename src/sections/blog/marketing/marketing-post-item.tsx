import { m } from 'framer-motion';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

import { IBlogPostProps } from 'src/types/blog';


// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function MarketingPostItem({ post }: Props) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image
          src={post.coverUrl}
          alt={post.title}
          ratio="3/4"
          overlay={`linear-gradient(to top, ${alpha(theme.palette.common.black, 0)} 0%, ${
            theme.palette.common.black
          } 75%)`}
        />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
            <Stack spacing={0.5} flexGrow={1}>
              <Typography variant="subtitle2">{post.duration}</Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {fDate(post.createdAt)}
              </Typography>
            </Stack>
          </Stack>

          <Link component={RouterLink} href={paths.marketing.post} sx={{ color: 'common.white' }}>
            <TextMaxLine variant="h4">{post.title}</TextMaxLine>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
