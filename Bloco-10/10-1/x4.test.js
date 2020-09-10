const myFizzBuzz = (require('./x4'));

describe('FizzBuzz Function', () => {
  it(('Should be make the operations'), () => {
    expect(myFizzBuzz(15)).toBe('')
  })
})