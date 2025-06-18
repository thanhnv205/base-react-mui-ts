import type { PaletteMode, Shadows, Theme } from '@mui/material'
import type { CSSProperties } from 'react'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#374957 ',
          light: '#00a79d',
          dark: '#fff',
          contrastText: '#fff'
        },
        secondary: {
          main: '#0000001f',
          light: '#f0fbfc',
          dark: '#E5ECF0',
          contrastText: '#fff'
        },
        success: {
          main: '#00a79d'
        },
        background: {
          paper: '#f0fbfc',
          default: '#fff'
        },
        border: {
          main: '#f6f9fa'
        }
      }
      : {
        primary: {
          light: '#757ce8',
          main: '#fff',
          dark: '#002884',
          contrastText: '#fff'
        },
        success: {
          main: '#00a79d'
        },
        border: {
          main: '#000'
        }
      })
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-size: 62.5%
        }
        body {
          font-family: 'Manrope', 'sans-serif';
          font-size: 1.6rem;
          line-height: 1.5;
          text-rendering: optimizespeed;
        }
        input[type='file'] {
          position: absolute;
          inset: 0;
          opacity: 0
        }
        .swal2-container {
          z-index: 9999
        }
        img:not[Attributes Style] {
            width: 100%;
            object-fit: cover;
            height: 100%
        }
        .light-mode {
          background: #f5f5f5
        }
        .dark-mode {
          background: #232627
        }
        main {
          padding: 160px 40px 20px
        }
        @media (max-width: 899px) {
          main {
            padding: 180px 20px 10px;
          }
        }
        a {
          text-decoration: none;
          line-height: initial;
          color: inherit
        }
      `
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          backgroundColor: theme.palette.background.default
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputSizeSmall: {
          padding: '0 20px',
          height: 40
        },
        sizeSmall: {
          borderRadius: 4
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          minHeight: 40
        }
      }
    }
  },

  typography: {
    fontFamily: ['Manrope', 'sans-serif'].join(','),
    body1: {
      fontSize: '1.4rem',
      color: '#000'
    },
    body2: {
      fontSize: '1.4rem',
      color: '#52627C'
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 700,
      marginBottom: 16
    },
    subtitle2: {
      fontSize: '1.4rem',
      color: '#8c9cb6'
    },
    h1: {
      fontSize: '2.4rem',
      fontWeight: 700,
      margin: '0 0 24px',
      color: '#00a79d'
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 700
    },
    h4: {
      color: '#374957',
      fontSize: '1.4rem',
      fontWeight: 'normal'
    },
    h5: {
      color: '#374957',
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    caption: {
      fontSize: '1.4rem',
      fontWeight: 700,
      marginRight: 16
    },
    overline: {
      fontSize: '1.5rem',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 1,
      overflow: 'hidden'
    } as CSSProperties
  },
  spacing: 10,

  shadows: [
    'none', // 0
    'rgba(42, 53, 53, 0.15) 0px 8px 24px', // 1 => default
    '0px 2px 4px rgba(0, 0, 0, 0.2)', // 2
    '0px 3px 6px rgba(0, 0, 0, 0.3)', // 3
    '0px 4px 8px rgba(0, 0, 0, 0.3)', // 4
    '0px 5px 10px rgba(0, 0, 0, 0.3)', // 5
    '0px 6px 12px rgba(0, 0, 0, 0.3)', // 6
    '0px 7px 14px rgba(0, 0, 0, 0.3)', // 7
    '0px 8px 16px rgba(0, 0, 0, 0.3)', // 8
    '0px 9px 18px rgba(0, 0, 0, 0.3)', // 9
    '0px 10px 20px rgba(0, 0, 0, 0.3)', // 10
    '0px 11px 22px rgba(0, 0, 0, 0.3)', // 11
    '0px 12px 24px rgba(0, 0, 0, 0.3)', // 12
    '0px 13px 26px rgba(0, 0, 0, 0.3)', // 13
    '0px 14px 28px rgba(0, 0, 0, 0.3)', // 14
    '0px 15px 30px rgba(0, 0, 0, 0.3)', // 15
    '0px 16px 32px rgba(0, 0, 0, 0.3)', // 16
    '0px 17px 34px rgba(0, 0, 0, 0.3)', // 17
    '0px 18px 36px rgba(0, 0, 0, 0.3)', // 18
    '0px 19px 38px rgba(0, 0, 0, 0.3)', // 19
    '0px 20px 40px rgba(0, 0, 0, 0.3)', // 20
    '0px 21px 42px rgba(0, 0, 0, 0.3)', // 21
    '0px 22px 44px rgba(0, 0, 0, 0.3)', // 22
    '0px 23px 46px rgba(0, 0, 0, 0.3)', // 23
    '0px 24px 48px rgba(0, 0, 0, 0.3)' // 24
  ] as Shadows
})

