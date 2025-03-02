'use client';

import { useCallback, useState } from 'react';
import { useParams } from 'next/navigation';

import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { _careerPosts, _socials } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';

import CareerLatestPosts from '../../blog/career/career-latest-posts';
import PostSocialsShare from '../../blog/common/post-socials-share';
import PostTags from '../../blog/common/post-tags';
import PostTimeBlock from '../../blog/common/post-time-block';

// ----------------------------------------------------------------------

export default function CareerPostView() {
  const params = useParams();
  const postId = params.id;

  const currentPost = _careerPosts.find((post) => post.id === postId) || _careerPosts[0];

  const { title, description, duration, createdAt, favorited, tags, content } = currentPost;

  const [favorite, setFavorite] = useState(favorited);

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
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: paths.career.posts },
                { name: title },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1">
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ my: 5 }}>
              <Stack spacing={0.5} flexGrow={1}>
                <PostTimeBlock createdAt={new Date(createdAt).toISOString()} duration={duration} />
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content[0]} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

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
