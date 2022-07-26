const colors = require('tailwindcss/colors');

module.exports = {
    // TODO: jit appears to be a bit buggy inside dynamic code (loops etc). cba to figure out why.
    // mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx,md,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
    ],

    // needed in situations where we're using tailwind in prose aka markdown :(
    // https://github.com/tailwindlabs/tailwindcss-typography/issues/32
    important: true,

    theme: {
        fontFamily: {
            display: ['Poppins', 'sans-serif'],
            serif: ['Inter', 'sans-serif'],
            monospaced: ['Space Mono', 'monospaced'],
        },
        extend: {
            colors: {
                'game-t6': {
                    DEFAULT: '#F36B1B',
                },
                'game-iw5': {
                    DEFAULT: '#00BF9F',
                },
                'game-t4': {
                    DEFAULT: '#93c5fd',
                    darker: '#94a3b8',
                },
                orange: colors.orange,
                bluegray: colors.blueGray,
                sky: colors.sky,
            },
            height: {
                'screen-4/5': '80vh'
            },

            // dark theme largely stolen from https://stefanzweifel.io/posts/2020/07/20/add-dark-mode-support-to-at-tailwindcsstypography
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.300'),

                        th: {
                            color: theme('colors.gray.300'),
                        },

                        a: {
                            color: theme('colors.red.500'),
                            '&:hover': {
                                color: theme('colors.red.600'),
                            },
                        },

                        h1: {
                            color: theme('colors.white'),
                        },
                        h2: {
                            color: theme('colors.white'),
                        },
                        h3: {
                            color: theme('colors.white'),
                        },
                        h4: {
                            color: theme('colors.white'),
                        },
                        h5: {
                            color: theme('colors.white'),
                        },
                        h6: {
                            color: theme('colors.white'),
                        },

                        strong: {
                            color: theme('colors.gray.300'),
                        },

                        code: {
                            color: theme('colors.gray.300'),
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },

                        figcaption: {
                            color: theme('colors.gray.500'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {},
    },

    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
