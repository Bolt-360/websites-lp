import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';
import ConfettiExplosion from 'react-confetti-explosion';

// Definindo animações
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const openLid = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-50px) rotate(-20deg);
  }
  100% {
    transform: translateY(-100px) rotate(-40deg);
  }
`;

export default function MarketingLandingGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsExploding(true);
      setTimeout(() => {
        setIsExploding(false);
      }, 3000);
    }
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
      {isExploding && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600} />
        </Box>
      )}

      <Box
        onClick={handleClick}
        sx={{
          cursor: isOpen ? 'default' : 'pointer',
          width: '200px',
          height: '200px',
          margin: '0 auto',
          position: 'relative',
          animation: `${bounce} 2s infinite`,
          '&:hover': {
            opacity: isOpen ? 1 : 0.95,
          },
        }}
      >
        {/* Base da Caixa de Presente */}
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <rect x="20" y="40" width="60" height="60" fill="#e74c3c" /> {/* Corpo da caixa */}
          <rect x="45" y="40" width="10" height="60" fill="#ff9c24" /> {/* Fita vertical */}
          <rect x="20" y="65" width="60" height="10" fill="#ff9c24" /> {/* Fita horizontal */}
        </Box>

        {/* Tampa da Caixa de Presente */}
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            animation: isOpen ? `${openLid} 0.5s ease-out forwards` : 'none',
            transformOrigin: 'top center',
            zIndex: 2,
          }}
        >
          <rect x="15" y="30" width="70" height="15" fill="#e74c3c" /> {/* Tampa */}
          <rect x="45" y="30" width="10" height="15" fill="#ff9c24" /> {/* Fita na tampa */}
          {/* Laço do Presente */}
          {/* Laço esquerdo */}
          <path
            d="M 35,18
               C 25,8 15,8, 15,18
               C 15,28 25,38 35,28
               C 45,18 35,18 35,18"
            fill="#ff9c24"
          />
          {/* Laço direito */}
          <path
            d="M 65,18
               C 75,8 85,8 85,18
               C 85,28 75,40 65,28
               C 55,18 65,18 65,18"
            fill="#ff9c24"
          />
          {/* Nó central do laço */}
          <circle cx="50" cy="24" r="5" fill="#ff9c24" />
        </Box>
      </Box>

      {isOpen && (
        <Box
          component="a"
          href="#"
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f20c0c',
            color: 'white',
            p: 2,
            borderRadius: '50%',
            width: '200px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translate(-50%, -50%) scale(1.05)',
            },
          }}
        >
          <Typography variant="subtitle1" component="div">
            🎉 30% OFF!
          </Typography>
        </Box>
      )}
    </Container>
  );
}
