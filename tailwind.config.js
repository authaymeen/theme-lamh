/** لمح (Lamh) — هوية تصميم أنيقة مينيمال: أبيض/رمادي محايد + لون تمييز أخضر زمردي غامق واحد */
module.exports = {
  presets: [require('@salla.sa/twilight-tailwind-theme')],
  content: [
    './src/views/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--color-accent, #0E7C6B)',
          dark: 'var(--color-accent-dark, #0B6355)',
          light: 'var(--color-accent-light, #E7F5F2)',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },
      fontFamily: {
        sans: ['var(--font-main, "Tajawal")', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm, 12px)',
        card: 'var(--radius-card, 16px)',
        'card-lg': 'var(--radius-card-lg, 22px)',
        'card-xl': 'var(--radius-card-xl, 28px)',
        pill: 'var(--radius-pill, 999px)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(24,24,27,0.04), 0 8px 24px -12px rgba(24,24,27,0.10)',
        'card-hover': '0 4px 10px rgba(24,24,27,0.06), 0 16px 32px -12px rgba(24,24,27,0.14)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
