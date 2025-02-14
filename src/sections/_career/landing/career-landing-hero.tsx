import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _brands } from 'src/_mock';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';
import { bgGradient } from 'src/theme/css';

import SvgColor from 'src/components/svg-color';

import { IJobFiltersProps } from 'src/types/job';


// ----------------------------------------------------------------------

type FiltersProps = Pick<IJobFiltersProps, 'filterKeyword' | 'filterLocation'>;

export default function CareerLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3} sx={{ marginTop: '30px' }}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Transforme sua
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Presença `}
                  </Box>
                  Digital com um Site que
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Converte `}
                  </Box>
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                Na Bolt 360, criamos sites modernos, responsivos e otimizados para gerar leads, fortalecer sua marca e contribuições seus resultados.
                </Typography>
              </Stack>

              <Button sx={{
                backgroundColor: 'primary.main',
                color: 'common.white',
                width: "100%",
                height: "50px",
                '&:hover': {
                  backgroundColor: '#A63606',
                }
              }} >
                Solicite um orçamento gratuito agora
              </Button>

          </Stack>
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6} lg={6}>
            <CareerHeroIllustration />
          </Grid>
        )}
      </Grid>
    </Container>
    </Box >
  );
}
