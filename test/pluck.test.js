const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of specified objects, given an array of objects with nested objects', () => {
    const arr = [
      { num: 1, obj: { foo: 1, bar: 2} },
      { num: 2, obj: { foo: 3, bar: 4} },
      { num: 3, obj: { foo: 5, bar: 6} },
    ];
    const result = _.pluck(arr, 'obj');
    expect(result).toEqual([
      { foo: 1, bar: 2 },
      { foo: 3, bar: 4 },
      { foo: 5, bar: 6 },
    ]);
  });
});
