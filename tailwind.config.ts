import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        surface: '#F5F5F7',
        elevated: '#FAFAFA',
        'text-primary': '#1D1D1F',
        'text-secondary': '#6E6E73',
        'text-muted': '#86868B',
        'accent-blue': '#0071E3',
        'accent-blue-hover': '#0077ED',
        'accent-dark': '#1D1D1F',
        border: 'rgba(0,0,0,0.08)',
        'border-strong': 'rgba(0,0,0,0.14)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.3' }],
        sm: ['0.875rem', { lineHeight: '1.4' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1.0' }],
        '7xl': ['4.5rem', { lineHeight: '1.0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        content: '1120px',
        prose: '680px',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06)',
        md: '0 4px 24px rgba(0,0,0,0.08)',
        lg: '0 16px 48px rgba(0,0,0,0.10)',
        glass: '0 4px 24px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        glass: '20px',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        caps: '0.08em',
      },
    },
  },
  plugins: [typography],
}

export default config
