import { m } from 'framer-motion';
import { memo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import Image from 'src/components/image';

function CareerHeroIllustration({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.div}
      sx={{
        width: 640,
        height: 640,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          zIndex: 10,
          width: 640,
        }}
      >
        <Image
          alt="Character Animation"
          src="/assets/images/marketing/Oh neymar.gif"
          sx={{
            width: '100%',
            height: 'auto',
            maxWidth: 640,
          }}
        />
      </Box>
    </Box>
  );
}

export default memo(CareerHeroIllustration);
