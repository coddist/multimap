import { ArrayMultimap, SetMultimap } from '../src';

test('ArrayMultimap', () => {
  const multimap = new ArrayMultimap<number, number>();
  expect(multimap.add).toBeDefined();

  multimap.add(1, 1);
  multimap.add(1, 2);
  const value = multimap.get(1);
  expect(value).toBeInstanceOf(Array);
  expect(value).toHaveLength(2);
  expect(value).toEqual([1, 2]);
});

test('SetMultimap', () => {
  const multimap = new SetMultimap<number, number>();
  expect(multimap.add).toBeDefined();

  multimap.add(1, 1);
  multimap.add(1, 2);
  multimap.add(1, 2);
  const value = multimap.get(1);
  expect(value).toBeInstanceOf(Set);
  expect(value?.size).toBe(2);
  expect(value?.has(1)).toBeTruthy();
  expect(value?.has(2)).toBeTruthy();
});
