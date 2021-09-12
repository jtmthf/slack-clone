import { ComplexStyleRule, globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const main = style({
  padding: '5rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const footer = style({
  width: '100%',
  height: '100px',
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${footer} a`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

const titleDescription: ComplexStyleRule = {
  textAlign: 'center',
};

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  ...titleDescription,
});

globalStyle(`${title} a`, {
  color: '#0070f3',
  textDecoration: 'none',
});

globalStyle(`${title} a:is(:hover, :focus, :active)`, {
  textDecoration: 'underline',
});

export const description = style({
  lineHeight: 1.5,
  fontSize: '1.5rem',
  ...titleDescription,
});

export const code = style({
  background: '#fafafa',
  borderRadius: 5,
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace`,
});

export const grid = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 800,
  marginTop: '3rem',
  '@media': {
    '(max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
    },
  },
});

export const card = style({
  margin: '1rem',
  padding: '1.5rem',
  border: '1px solid #eaeaea',
  borderRadius: 10,
  transition: 'color 0.15s ease, border-color 0.15s ease',
  width: '45%',
  selectors: {
    '&:is(:hover, :focus, :active)': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
  },
});

globalStyle(`${card} h2`, {
  margin: '0 0 1rem 0',
  fontSize: '1.5rem',
});

globalStyle(`${card} p`, {
  margin: 0,
  fontSize: '1.25rem',
  lineHeight: 1.5,
});

export const logo = style({
  height: '1em',
  marginLeft: '0.5rem',
});
