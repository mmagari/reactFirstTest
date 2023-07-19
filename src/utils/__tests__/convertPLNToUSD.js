import { convertPLNToUSD } from "../convertPLNToUSD";

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is empty', () => {
    expect(Number.isNaN(convertPLNToUSD())).toBe(false);
  });

  it('should return NaN when input is negative number', () => {
    expect(convertPLNToUSD('-1')).toBe('$0.00');
    expect(convertPLNToUSD('-5')).toBe('$0.00');
    expect(convertPLNToUSD('-1151')).toBe('$0.00');
  });

  it('should return NaN when given value is a string', () => {
    expect(convertPLNToUSD('abc')).toBeNaN();
  });

  it('should return "Error" when input is different than number and string', () => {
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(undefined)).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
  });
});