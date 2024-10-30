const sum = (a, b) => a + b;

test('adicionar 1 + 2 é pra ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});
const sum_sub = (c, d) => c + d;
test('adicionar -1 + -2 é pra ser -3', () => {
  expect(sum_sub(-1, -2)).toBe(-3);
});
const sum_zero = (e,f) => e + f ;
test('adicionar 3 + 0 é pra ser 3', () => {
  expect(sum_zero(3, 0)).toBe(3);
});

