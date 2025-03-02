import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IPricingMarketingProps } from 'src/types/pricing';

import PlanCard from './pricing-marketing-card';

// ----------------------------------------------------------------------

type Props = {
  plans: IPricingMarketingProps[];
};

export default function PricingMarketing({ plans }: Props) {
  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Valores
          </Typography>

          <Typography variant="h2">Planos</Typography>

          <Typography sx={{ color: 'text.secondary', fontSize: "1.2rem" }}>
            Escolha o plano perfeito para suas necessidades.
            <br /> Sempre flexível para crescer
          </Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>

      <Typography variant="overline">
        <Typography variant='h6' sx={{color: "primary.main"}}>Serviços Adicionais:</Typography>
         Hospedagem, registro de domínio e certificados SSL podem ser contratados separadamente, conforme a necessidade.
      </Typography>

    </Container>
  );
}
