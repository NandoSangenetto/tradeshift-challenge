import media, { sizes } from './mediaQueries';

describe('mediaQueries helper', () => {
  it('Is passing style forward', () => {
    const cssRule = 'color: rebeccapurple;';
    const result = media.desktop`
      ${cssRule}
    `;
    const hasCss = result.some(item => item.includes(cssRule));
    expect(hasCss).toBeTruthy();
  });

  it('Is adding min-width with desktop value when called', () => {
    const result = media.desktop`
      color: rebeccapurple;
    `;
    const cssWithoutSpace = result.join('').replace(/\s/g, '');
    expect(cssWithoutSpace).toContain(`@media(min-width:${sizes.desktop}px)`);
  });
});
