'use client';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { _socials, _marketingPosts } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import MarketingNewsletter from '../marketing-newsletter';
import PostSocialsShare from '../../blog/common/post-socials-share';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';

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

            <PostAuthor />
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
