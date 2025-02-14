import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha, styled, useTheme } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { useState } from 'react';
import PostAuthor from 'src/sections/blog/common/post-author';

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

  const onHandleSubmit = async () => {
    console.log(name, phone, email, url);
    try {
      const response = await fetch("https://n8n2.bchat.lat/webhook/landing-page", {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          email,
          url
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados')
      } else {
        console.log('Dados enviados com sucesso')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          <Grid xs={12} md={5}>
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
              sx={{ color: 'common.white' }}
            >
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              Rua Tereza Bezerra Salustino 1902 Lagoa nova, Natal
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledInput label="Nome" sx={{ mb: 2.5 }} value={name} onChange={(e) => setName(e.target.value)}/>

              <StyledInput label="Telefone" sx={{ mb: 2.5 }} value={phone} onChange={(e) => setPhone(e.target.value)}/>

              <StyledInput label="Email" sx={{ mb: 2.5 }} value={email} onChange={(e) => setEmail(e.target.value)}/>

              <StyledInput label="Website URL" sx={{ mb: 2.5 }} value={url} onChange={(e) => setUrl(e.target.value)}/>

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
