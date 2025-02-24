import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: 'Primeiro Passo',
    title: 'Planejamento',
    description:
      'Entendemos as necessidades do seu negócio e definimos os objetivos do site.',
  },
  {
    step: 'Segundo Passo',
    title: 'Design e Desenvolvimento',
    description:
      'Criamos o layout e desenvolvemos o site com foco em usabilidade e conversão.',
  },
  {
    step: 'Terceiro Passo',
    title: 'Otimização',
    description:
      'Otimizamos o site para garantir carregamento rápido, SEO e uma experiência impecável para o usuário.',
  },
  {
    step: 'Quarto Passo',
    title: 'Lançamento e Suporte',
    description:
      'Colocamos seu site no ar e oferecemos suporte para garantir que tudo funcione perfeitamente.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWork() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Nossas Etapas
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            fontSize: "1.2rem"
          }}
        >
          Saiba como desenvolvemos o site perfeito para o seu negócio em quatro etapas simples.
        </Typography>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.step}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1, fontSize: "1.2rem" }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.1rem",
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
