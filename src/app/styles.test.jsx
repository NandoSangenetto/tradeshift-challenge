import { BaseStyleContent } from './styles';

describe('Common styles test', () => {
  it('the BaseStyle has the right style', () => {
    const filteredCss = BaseStyleContent.replace(/(\n+)?(\t+)?(\s+){2,}?/g, '');
    expect(filteredCss).toContain(`* {box-sizing: border-box;}`);
    expect(filteredCss).toContain(
      `body {overflow-x: hidden;font-family: "Open Sans", "Helvetica Neue", "Lucida Grande", sans-serif;}`
    );
    expect(filteredCss).toContain(`a {text-decoration: none;}`);
  });
});
