import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Mídia Online',
    description:
      'Fortaleça a presença digital da sua marca e alcance mais pessoas nos principais canais da internet. ',
    iconColor: 'primary',
  },
  {
    title: 'Design',
    description:
      'Criação de sites modernos e responsivos, com design exclusivo para destacar o seu negócio.',
    iconColor: 'success',
  },
  {
    title: 'Marketing',
    description:
      'Integrações estratégicas para campanhas de marketing digital e geração de leads qualificados.',
    iconColor: 'secondary',
  },
  {
    title: 'Velocidade e Desempenho',
    description:
      'Sites rápidos e otimizados para oferecer a melhor experiência aos seus visitantes. ',
    iconColor: 'secondary',
  },
  {
    title: 'SEO',
    description:
      'Apareça nas primeiras posições do Google e aumente o tráfego orgânico para o seu site. ',
    iconColor: 'success',
  },
  {
    title: 'Branding',
    description:
      'Reforce a identidade da sua marca com um design alinhado à estratégia de comunicação visual. ',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Descubra as vantagens de ter um site profissional para a sua empresa. Aumente sua presença digital, conquiste novos clientes e impulsione seus resultados!
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 800,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            fontSize: "1.2rem"
          }}
        >
          A presença online da sua empresa comunica para o mundo quem ela é! Um site profissional e
          otimizado além de gerar confiança, transforma visitantes em clientes, impulsionando suas
          vendas e fortalecendo sua marca.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(1, 1fr)' },
          }}
        >
          {mdUp && (
            <Box
              sx={{
                pl: { md: 5 },
                pt: { xs: 5, md: 0 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image 
                alt="benefits" 
                src="/assets/images/marketing/pensarclube.png"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    description: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index }: BenefitItemProps) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
