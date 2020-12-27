const ReservedSubdomains = require('./index');

describe('ReservedSubdomains', () => {
  it('catches valid and invalid domains', () => {
    const valid = "this-is-valid";
    const invalid = "www";
    expect(ReservedSubdomains.isValid(valid)).toBe(true);
    expect(ReservedSubdomains.isValid(invalid)).toBe(false);
    expect(ReservedSubdomains.isNotValid(valid)).toBe(false);
    expect(ReservedSubdomains.isNotValid(invalid)).toBe(true);
  })

  it('is case sensitive because it is developer responsibility to lowercase the inputs', () => {
    const invalid = "www";
    const invalidUpper = "WWW";
    expect(ReservedSubdomains.isValid(invalid)).toBe(false);
    expect(ReservedSubdomains.isValid(invalidUpper)).toBe(true);
  })

  it('validates against regex', () => {
    const invalid = "server123";
    expect(ReservedSubdomains.isValid(invalid)).toBe(false);
  })
})
