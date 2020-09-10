const sum = (require('./x1'));

describe('Sum', () => {
  it('Should be add two numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    // expect(sum(4, '5')).throw(/parameters must be numbers/);
  })
});

