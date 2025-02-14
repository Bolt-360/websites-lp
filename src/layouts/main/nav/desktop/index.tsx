import { useCallback } from 'react';
import Stack from '@mui/material/Stack';

import NavList from './nav-list';
import { NavProps } from '../types';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }: NavProps) {
  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      if (path.includes('#')) {
        event.preventDefault();
        const sectionId = path.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    []
  );

  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} onLinkClick={handleLinkClick} />
      ))}
    </Stack>
  );
}
