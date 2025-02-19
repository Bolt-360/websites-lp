import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { WHATSAPP_CONFIG, sendWhatsAppMessage } from 'src/config/whatsapp';

import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import { IPricingMarketingProps } from 'src/types/pricing';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricingMarketingProps;
};

export default function PricingMarketingCard({ plan }: Props) {
  const basicLicense = plan.license === 'MEI';

  const starterLicense = plan.license === 'PRO';

  const premiumLicense = plan.license === 'SEO';

  const handleWhatsAppClick = () => {
    let message = '';
    if (basicLicense) {
      message = WHATSAPP_CONFIG.messages.plans.mei(Number(plan.price));
    } else if (starterLicense) {
      message = WHATSAPP_CONFIG.messages.plans.pro(Number(plan.price));
    } else if (premiumLicense) {
      message = WHATSAPP_CONFIG.messages.plans.seo(Number(plan.price));
    }
    sendWhatsAppMessage(message);
  };

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h4" component="div" sx={{ color: 'primary.main', mb: 2 }}>
            {plan.license}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              variant="h2"
              component="span"
              sx={{
                color: 'rgba(255, 70, 70, 0.5)',
                textDecoration: 'line-through',
                mr: 1,
                display: 'block',
                mb: 1,
              }}
            >
              {`R$${plan.originalPrice}`}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              variant="h3"
              component="span"
              sx={{ color: 'rgba(0, 0, 0, 0.75)' }}
            >{`R$${plan.price}`}</Typography>
            <Typography variant="h5" component="span" sx={{ color: 'text.disabled' }}>
              /mês
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h6" component="span" sx={{ color: 'text.disabled' }}>
              Setup de
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{ color: 'rgba(0,0,0,0.75)' }}
            >{`R$${plan.setup}`}</Typography>
          </Stack>
        </div>

        <Image alt="icon" src={plan.icon} sx={{ width: 64, height: 64 }} />
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {plan.caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {plan.options.map((option) => (
          <Stack key={option} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {option}
          </Stack>
        ))}
      </Stack>

      <Button
        fullWidth
        size="large"
        color={(premiumLicense && 'primary') || 'inherit'}
        variant={(basicLicense && 'outlined') || 'contained'}
        onClick={handleWhatsAppClick}
      >
        Escolher Plano
      </Button>
    </Card>
  );
}
