import { useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Portal from '@mui/material/Portal';
import Grid from '@mui/material/Unstable_Grid2';
import ListSubheader from '@mui/material/ListSubheader';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { useBoolean } from 'src/hooks/use-boolean';

import Label from 'src/components/label';

import NavItem from './nav-item';
import { NavListProps, NavSubListProps } from '../types';

// ----------------------------------------------------------------------

export default function NavList({ data, onLinkClick }: NavListProps) {
  const pathname = usePathname();

  const menuOpen = useBoolean();

  const active = useActiveLink(data.path, !!data.children);

  const mainList = data.children ? data.children.filter((list) => list.subheader !== 'Common') : [];

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      menuOpen.onTrue();
    }
  }, [data.children, menuOpen]);

  return (
    <>
      <NavItem
        open={menuOpen.value}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={menuOpen.onFalse}
        //
        title={data.title}
        path={data.path}
        //
        active={active}
        hasChild={!!data.children}
        externalLink={data.path.includes('http')}
        onLinkClick={onLinkClick}
      />

      {!!data.children && menuOpen.value && (
        <Portal>
          <Fade in={menuOpen.value}>
            <Paper
              onMouseEnter={handleOpenMenu}
              onMouseLeave={menuOpen.onFalse}
              sx={{
                top: 62,
                width: 1,
                borderRadius: 0,
                position: 'fixed',
                bgcolor: 'background.default',
                zIndex: (theme) => theme.zIndex.modal,
                boxShadow: (theme) => theme.customShadows.dialog,
              }}
            >
              <Grid container columns={15}>
                <Grid xs={15}>
                  <Box
                    gap={5}
                    display="grid"
                    gridTemplateColumns="repeat(5, 1fr)"
                    sx={{
                      p: 5,
                      height: 1,
                      position: 'relative',
                      bgcolor: 'background.neutral',
                    }}
                  >
                    {mainList.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        cover={list.cover}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }: NavSubListProps) {
  const pathname = usePathname();

  const coverPath = items.length ? items[0].path : '';

  return (
    <Stack spacing={2}>
      <ListSubheader
        sx={{
          p: 0,
          typography: 'h6',
          color: 'text.primary',
          bgcolor: 'transparent',
        }}
      >
        {subheader}
        {isNew && (
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </ListSubheader>

      <Link component={RouterLink} href={coverPath} />

      <Stack spacing={1.5} alignItems="flex-start">
        {items.map((item) => {
          const active = pathname === item.path || pathname === `${item.path}/`;

          return (
            <NavItem key={item.title} title={item.title} path={item.path} active={active} subItem />
          );
        })}
      </Stack>
    </Stack>
  );
}
