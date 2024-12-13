
describe('jest', () => {
  it('runs a basic jest test', () => {
    const sum = (x,y) => x + y
    const x = 10
    const y  = 5

    const value = sum(x,y)
    const expected = 15

    expect(value).toEqual(expected)
  })
})