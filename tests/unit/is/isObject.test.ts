import { isObject } from '../../../src/is/isObject';

describe('isObject()', () => {
  test('it should work with return value true', () => {
    const isTrue = isObject({});

    expect(isTrue).toBeTruthy();
  });

  /* eslint-disable-next-line unicorn/no-null, @typescript-eslint/no-empty-function */
  test.each([[null], ['string'], [Number.NaN], [13], [[]], [() => {}]])(
    'it should work with return value false (%p)',
    (value) => {
      const isTrue = isObject(value);

      expect(isTrue).toBeFalsy();
    },
  );
});
