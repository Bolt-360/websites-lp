
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';
import { WHATSAPP_CONFIG, sendWhatsAppMessage } from 'src/config/whatsapp';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

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

                <Typography sx={{ color: 'grey.500', fontSize: '1.2rem' }}>
                  Na Bolt 360, criamos sites modernos, responsivos e otimizados para gerar leads,
                  fortalecer sua marca e contribuições seus resultados.
                </Typography>
              </Stack>

              <Button
                onClick={() => sendWhatsAppMessage(WHATSAPP_CONFIG.messages.budget)}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'common.white',
                  width: '100%',
                  height: '50px',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(6, 205, 205, 0.7)',
                    },
                    '70%': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 0 10px rgba(255, 87, 34, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(255, 87, 34, 0)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: '#024f4f',
                  },
                }}
              >
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
    </Box>
  );
}
