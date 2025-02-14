import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Perfomance e SEO',
    description: 'Melhore o ranqueamento do seu site no Google e atraia mais visitantes de forma orgânica. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Integração Completa',
    description: 'Conecte seu site a sistemas de e-mail marketing, CRM e analíticos.',
    icon: '/assets/icons/ic_analysis.svg',
  },
  {
    title: 'Design Personalizado',
    description: 'Um site que reflete a identidade única de sua marca.',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    title: 'Gerenciamento de Conteúdo',
    description: 'Sites prontos e atualizados para exibir as informações mais importantes do seu negócio. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Conversão Eficiente',
    description: 'Estrutura e call-to-actions estrategicamente posicionados para gerar leads e aumentar vendas.',
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
