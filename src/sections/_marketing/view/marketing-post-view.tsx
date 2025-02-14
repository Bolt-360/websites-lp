'use client';

import { useCallback, useState } from 'react';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { _marketingPosts, _socials } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import Markdown from 'src/components/markdown';

import PostAuthor from '../../blog/common/post-author';
import PostSocialsShare from '../../blog/common/post-socials-share';
import PostTags from '../../blog/common/post-tags';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingNewsletter from '../marketing-newsletter';

// ----------------------------------------------------------------------

export default function MarketingPostView() {
  const post = _marketingPosts[0];

  const [favorite, setFavorite] = useState(post.favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Image alt="hero" src={post.heroUrl} ratio="21/9" />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.marketing.posts },
            { name: post.title },
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={3}
          sx={{
            pb: 6,
            textAlign: 'center',
            pt: { xs: 6, md: 10 },
          }}
        >
          <Typography variant="h1">{post.title}</Typography>

          <Stack spacing={3} direction="row" alignItems="center" justifyContent="center">
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              {fDate(post.createdAt)}
            </Typography>

            <Divider orientation="vertical" sx={{ height: 24 }} />

            <Typography variant="body2">{post.duration}</Typography>
          </Stack>
        </Stack>

        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {post.description}
              </Typography>
            </Stack>

            <Divider />
            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  {fDate(post.createdAt)}
                </Typography>
                <Typography variant="subtitle2">{post.duration}</Typography>
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={post.content} firstLetter />

            {post.tags.length && <PostTags tags={post.tags} />}

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={post.author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
