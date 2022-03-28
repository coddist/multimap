import { ArrayMultimap, SetMultimap } from '../src';

describe('ArrayMultimap', () => {
  test('sets values', () => {
    const multimap = new ArrayMultimap<number, number>();
    expect(multimap.set).toBeDefined();

    const output = multimap.set(1, 1);
    expect(output).toBe(multimap);

    multimap.set(1, 2);
    const value = multimap.get(1);
    expect(value).toBeInstanceOf(Array);
    expect(value).toEqual([1, 2]);
  });

  test('initialized with entries', () => {
    const multimap = new ArrayMultimap<number, number>([[1, [1, 2, 3]]]);
    expect(multimap.get(1)).toEqual([1, 2, 3]);
  });

  test('initialized with ArrayMultimap instance', () => {
    const multimapA = new ArrayMultimap<number, number>();
    multimapA.set(1, 1);
    multimapA.set(1, 2);

    const multimapB = new ArrayMultimap(multimapA);
    expect(multimapB.get(1)).toEqual([1, 2]);
  });

  test('initialized with regular Map', () => {
    const map = new Map<number, number[]>();
    map.set(1, [1, 2, 3]);

    const multimap = new ArrayMultimap(map);
    expect(multimap.get(1)).toEqual([1, 2, 3]);
  });
});

describe('SetMultimap', () => {
  test('SetMultimap sets values', () => {
    const multimap = new SetMultimap<number, number>();
    expect(multimap.set).toBeDefined();

    const output = multimap.set(1, 1);
    expect(output).toBe(multimap);

    multimap.set(1, 2);
    multimap.set(1, 2);
    const value = multimap.get(1);
    expect(value).toBeInstanceOf(Set);
    expect(value?.size).toBe(2);
    expect(value?.has(1)).toBeTruthy();
    expect(value?.has(2)).toBeTruthy();
  });

  test('initialized with entries', () => {
    const multimap = new SetMultimap<number, number>([[1, new Set([1, 2, 2])]]);
    const value = multimap.get(1);
    expect(value).toBeInstanceOf(Set);
    expect(value?.size).toBe(2);
    expect(value?.has(1)).toBeTruthy();
    expect(value?.has(2)).toBeTruthy();
  });

  test('initialized with SetMultimap instance', () => {
    const multimapA = new SetMultimap<number, number>();
    multimapA.set(1, 1);
    multimapA.set(1, 2);

    const multimapB = new SetMultimap(multimapA);
    const value = multimapB.get(1);
    expect(value).toBeInstanceOf(Set);
    expect(value?.size).toBe(2);
    expect(value?.has(1)).toBeTruthy();
    expect(value?.has(2)).toBeTruthy();
  });

  test('initialized with regular Map', () => {
    const map = new Map<number, Set<number>>();
    map.set(1, new Set([1, 2, 3]));

    const multimap = new SetMultimap(map);
    const value = multimap.get(1);
    expect(value).toBeInstanceOf(Set);
    expect(value?.size).toBe(3);
    expect(value?.has(1)).toBeTruthy();
    expect(value?.has(2)).toBeTruthy();
    expect(value?.has(3)).toBeTruthy();
  });
});
