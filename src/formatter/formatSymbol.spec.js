/* @flow */

import formatSymbol from './formatSymbol';

describe('formatSymbol', () => {
  it('should format a symbol with an identifier', () => {
    expect(formatSymbol(Symbol('Foo'))).toBe("Symbol('Foo')");
  });

  it('should format a symbol withtout identifier', () => {
    expect(formatSymbol(Symbol())).toBe('Symbol()');
  });
});
