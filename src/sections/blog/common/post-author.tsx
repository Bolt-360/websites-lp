import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------


export default function PostAuthor() {
  return (
    <Stack direction="row" spacing={2}>
      <Stack spacing={2}>
        <Typography variant="h6">Sobre o Post</Typography>
        <Typography variant="body2">
          Este é um post do nosso blog. Para mais informações, entre em contato conosco.
        </Typography>
      </Stack>
    </Stack>
  );
}
