const index = require('./index');

// For full Name check
test('if full Name is correct', () => {
  expect(index.fullName('vishal','goswami')).toBe('vishal goswami');
});

test('if full Name is correct', () => {
  expect(index.fullName('Ashwani', '')).toBe('Ashwani');
});
test('if full Name is correct', () => {
  expect(index.fullName('', '')).toBe(' ');
});
test('if full Name is correct', () => {
  expect(index.fullName('manish', 'kanaujia')).toBe('manish kanaujia');
});

// Circumference
test('to test if circumference is correct', () => {
  expect(index.getCircumfrence(2)).toBe('The circumference is 4');
});
test('to test if circumference is correct', () => {
  expect(index.getCircumfrence(2)).toBe('The circumference is 4');
});
test('to test if circumference is correct', () => {
  expect(index.getCircumfrence(2)).toBe('The circumference is 4');
});

// Area
test('to test if Area is correct', () => {
  expect(index.getArea(2)).toBe('The area is 12.56');
});
test('to test if Area is correct', () => {
  expect(index.getArea(2)).toBe('The area is 12.56');
});
test('to test if Area is correct', () => {
  expect(index.getArea(2)).toBe('The area is 12.56');
});
test('to test if Area is correct', () => {
  expect(index.getArea(3)).toBe('The area is 28.26');
});