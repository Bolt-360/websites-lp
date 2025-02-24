import { memo } from 'react';
import Image from 'next/image';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
  headerOnDark?: boolean;
}

function Logo({ single = false, headerOnDark = false, sx }: LogoProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = <Image src="/singleBolt.png" alt="Bolt Assessoria" width={80} height={60} />;

  const fullLogo = (
    <Image
      src={headerOnDark ? '/bolt_white.png' : '/bolt.png'}
      alt="Bolt Assessoria"
      width={120}
      height={65}
    />
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 120,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
