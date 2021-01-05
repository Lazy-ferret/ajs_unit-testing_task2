import getSortedUnits from '../app';

const units = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedUnits = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('should to sort units by toEqual', () => {
  const result = getSortedUnits(units);
  expect(result).toEqual(sortedUnits);
});

test('should try to sort units by toBe', () => {
  const result = getSortedUnits(units);
  expect(result).not.toBe(sortedUnits);
});
