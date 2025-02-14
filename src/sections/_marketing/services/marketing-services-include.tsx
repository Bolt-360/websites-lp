import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Otimização para Motores de Busca (SEO)',
    description: 'Melhore o ranqueamento do seu site no Google e atraia mais visitantes de forma orgânica. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Estratégia de Redes Sociais',
    description: 'Conecte-se ao seu público com links integrados e direcionamento para suas redes sociais. ',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Monitoramento de Desempenho',
    description: 'Acompanhe o desempenho do seu site para garantir uma experiência de alta qualidade. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Gerenciamento de Conteúdo',
    description: 'Sites prontos e atualizados para exibir as informações mais importantes do seu negócio. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Relatórios de Desempenho',
    description: 'Receba relatórios periódicos sobre o tráfego e as métricas do seu site ',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Hospedagem Segura e Suporte',
    description: 'Hospedagem confiável e suporte técnico para manter o seu site sempre no ar. ',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Nossos serviços</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 500,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Com nosso serviço, você não recebe apenas um site – você ganha uma ferramenta poderosa para o crescimento do seu negócio. Nosso método, fundamentado no método exclusivo PPT (Pessoas, Processos e Tecnologia), garante que cada etapa da criação do seu site seja pensada para maximizar resultados.{' '}
      </Typography>
      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
