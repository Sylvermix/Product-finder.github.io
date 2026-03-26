/**
 * Design token JS constants — DS-AI
 * Source: https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI
 *
 * Use these in dynamic styles or tests; prefer CSS vars in components.
 */

export const colors = {
  grey: {
    50: '#fafafa',
    75: '#f5f5f5',
    100: '#eceaea',
    200: '#c2c1cd',
    300: '#9697a2',
    400: '#696b72',
    500: '#3d3e42',
    600: '#303236',
    700: '#292a2e',
    800: '#252528',
    900: '#252528',
    950: '#0f0f10',
  },
  green: {
    50: '#d8eee4',
    100: '#b9e4ce',
    200: '#8ed7b5',
    300: '#5ccc9f',
    400: '#31c493',
    500: '#0ebe89',
    600: '#119c77',
    700: '#137c64',
    800: '#125e4f',
    900: '#104139',
    950: '#030c08',
  },
  blue: {
    50: '#d6e6ff',
    100: '#b4d3fd',
    200: '#89b7fa',
    300: '#649cf7',
    400: '#4987f3',
    500: '#226bf1',
    600: '#1652df',
    700: '#1842b4',
    800: '#18338b',
    900: '#162664',
    950: '#08244f',
  },
  red: {
    50: '#ffe5e5',
    100: '#fec3c3',
    200: '#fb9793',
    300: '#f56d66',
    400: '#ef4f43',
    500: '#eb3a2d',
    600: '#d7301d',
    700: '#ad321f',
    800: '#862f1d',
    900: '#61281a',
    950: '#52050a',
  },
  orange: {
    50: '#fff4e5',
    100: '#fee3c3',
    200: '#fcca92',
    300: '#f8b062',
    400: '#fb9e41',
    500: '#ff8c1a',
    600: '#e9730c',
    700: '#b85b14',
    800: '#8b4618',
    900: '#623318',
    950: '#331a00',
  },
} as const

export const semantic = {
  fg: {
    primary: '#082415',
    secondary: '#3d3e42',
    tertiary: '#696b72',
    disabled: '#9697a2',
  },
  neutrals: {
    background: '#fafafa',
    surface: '#ffffff',
    subtle: '#fafafa',
    muted: '#f5f5f5',
    emphasis: '#eceaea',
  },
  border: {
    default: '#eceaea',
    strong: '#e6e6e6',
  },
  accents: {
    brand: '#082415',
    green: '#145e3e',
    red: '#d30018',
    orange: '#c05131',
  },
  tints: {
    brand: '#e6ecf4',
    green: '#d8eee4',
    red: '#ffe5e5',
    orange: '#fff4e5',
    blue: '#d6e6ff',
  },
  constant: {
    white: '#ffffff',
    black: '#000000',
  },
} as const

export const spacing = {
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
} as const

export const borderWidth = {
  none: '0px',
  thin: '0.5px',
  default: '1px',
  medium: '1.5px',
  thick: '2px',
} as const

export const typography = {
  fontFamily: "'Inter', sans-serif",
  scale: {
    display: { size: '48px', weight: 700, lineHeight: 1.1 },
    h1: { size: '36px', weight: 700, lineHeight: 1.15 },
    h2: { size: '30px', weight: 700, lineHeight: 1.2 },
    h3: { size: '24px', weight: 700, lineHeight: 1.25 },
    h4: { size: '20px', weight: 600, lineHeight: 1.3 },
    h5: { size: '18px', weight: 600, lineHeight: 1.35 },
    h6: { size: '16px', weight: 600, lineHeight: 1.4 },
    bodyLg: { size: '18px', weight: 400, lineHeight: 1.6 },
    body: { size: '16px', weight: 400, lineHeight: 1.6 },
    bodySm: { size: '14px', weight: 400, lineHeight: 1.5 },
    label: { size: '14px', weight: 500, lineHeight: 1.4 },
    labelSm: { size: '12px', weight: 500, lineHeight: '18px' },
    caption: { size: '12px', weight: 400, lineHeight: 1.4 },
    overline: { size: '11px', weight: 600, lineHeight: 1.4 },
  },
} as const
