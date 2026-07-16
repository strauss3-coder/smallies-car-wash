/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Mobile-first breakpoints: base styles target mobile, these scale up.
    screens: {
      sm: '480px',   // large phones
      md: '768px',   // tablet
      lg: '1024px',  // laptop
      xl: '1280px',  // desktop
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        lg: '2.5rem',
      },
      screens: {
        xl: '1200px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        // Brand — pulled from the Smallie's logo & signage
        brand: {
          red: '#E01B24',
          'red-dark': '#B3141B',
          'red-light': '#F04A52',
          blue: '#1D4ED8',
          'blue-dark': '#12308F',
          'blue-light': '#3B82F6',
        },
        carbon: '#FBFCFE',      // carbon white — page background
        'grey-light': '#F1F4F9', // soft light grey sections
        'grey-mid': '#94A3B8',
        'grey-dark': '#475569',
        ink: '#0F1B33',          // dark typography (deep navy-black)
        success: '#16A34A',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography scale (clamp) — mobile → desktop
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 4.6vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3.4vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading': ['clamp(1.4rem, 2.4vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'subheading': ['clamp(1.1rem, 1.6vw, 1.35rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        section: 'clamp(4.5rem, 9vw, 8rem)',   // vertical section rhythm
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
      },
      maxWidth: {
        container: '1200px',
        prose: '68ch',
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '0.875rem',
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '2.25rem',
        pill: '999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(15, 27, 51, 0.06)',
        sm: '0 2px 8px rgba(15, 27, 51, 0.06)',
        md: '0 8px 24px rgba(15, 27, 51, 0.08)',
        lg: '0 18px 48px rgba(15, 27, 51, 0.10)',
        xl: '0 30px 70px rgba(15, 27, 51, 0.14)',
        glow: '0 0 0 1px rgba(224, 27, 36, 0.12), 0 16px 40px rgba(224, 27, 36, 0.22)',
        'glow-blue': '0 0 0 1px rgba(29, 78, 216, 0.14), 0 16px 40px rgba(29, 78, 216, 0.24)',
        glass: '0 8px 32px rgba(15, 27, 51, 0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
        float: '0 12px 40px rgba(15, 27, 51, 0.18)',
      },
      backdropBlur: {
        glass: '16px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        rise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        ripple: 'ripple 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
