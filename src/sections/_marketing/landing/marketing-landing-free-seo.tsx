import { useState } from 'react';
import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledInput = styled((props: TextFieldProps) => <TextField fullWidth {...props} />)(
  ({ theme }) => ({
    [`& .${inputBaseClasses.input}`]: {
      color: theme.palette.common.white,
    },
    [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
      color: theme.palette.grey[500],
      [`&.${inputLabelClasses.focused}`]: {
        color: theme.palette.grey[500],
      },
    },
  })
);

// ----------------------------------------------------------------------

export default function MarketingLandingFreeSEO() {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const params = new URLSearchParams();
  params.append('name', name);
  params.append('phone', phone);
  params.append('email', email);
  params.append('url', url);

  const onHandleSubmit = async () => {
    try {
      const response = await fetch('https://n8n2.bchat.lat/webhook/landing-page', {
        method: 'POST',
        body: params,
      });

      setName('');
      setPhone('');
      setUrl('');

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      } else {
        toast.success(
          'Obrigado por entrar em contato conosco! Em breve retornaremos com uma resposta.',
          {
            duration: 5000,
            position: 'bottom-center',
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
            },
          }
        );
      }
    } catch (error) {
      toast.error('Erro ao enviar os dados. Tente novamente. Ou contate-nos pelo e-mail.', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          fontWeight: 'bold',
          color: '#fff',
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
        },
      });
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/marketing/marketing_get_free_seo.jpg',
        }),
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={6}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: 'primary.main',
                mb: { xs: 3, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Obtenha uma
              <br /> análise gratuita do seu Site
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              <Link color="inherit" href="contato@bolt360.com.br">
                contato@bolt360.com.br
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              Rua Tereza Bezerra Salustino 1902, Lagoa Nova, Natal/RN
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 1 }}
            >
              <Iconify icon="dashicons:instagram" width={24} sx={{ mr: 2 }} />
              <Link color="inherit" href="https://www.instagram.com/bolt360assessoria/">
                Instagram
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 1 }}
            >
              <Iconify icon="dashicons:linkedin" width={24} sx={{ mr: 2, mb: 1 }} />
              <Link color="inherit" href="https://br.linkedin.com/company/bolt-360">
                Linkedin
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 1 }}
            >
              <Iconify icon="dashicons:facebook" width={24} sx={{ mr: 2, mb: 1 }} />
              <Link color="inherit" href="https://www.facebook.com/bolt360assessoria">
                Facebook
              </Link>
            </Stack>
          </Grid>

          <Grid xs={12} md={5} sx={{ marginTop: '100px' }}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledInput
                label="Nome"
                sx={{ mb: 2.5 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <StyledInput
                label="Telefone"
                sx={{ mb: 2.5 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <StyledInput
                label="Website URL"
                sx={{ mb: 2.5 }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <Button size="large" variant="contained" color="primary" onClick={onHandleSubmit}>
                Enviar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
