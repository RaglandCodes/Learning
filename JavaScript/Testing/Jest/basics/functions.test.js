const functions = require('./functions');

const initDB = () => {
  console.log('INIT BD');
};

const closeDB = () => {
  console.log('BD closed');
};

beforeEach(() => initDB());
afterEach(() => closeDB());

// beforeAll afterAll describe

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('< 1600', () => {
  one = 11;
  two = 22;
  expect(one + two).toBeLessThan(55);

  // toBeLessThanOrEqual
});

test('Adds 2 + 2 to !== 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Be falsy', () => {
  expect(functions.check(null)).toBeFalsy();
  // will work for 0, undefined
});

test('Be falsy', () => {
  expect(functions.check(null)).toBeFalsy();
  // will work for 0, undefined
});

/*
toBe is for primitive types

Objects and arrays are reference types

toEqual can be used for objects/arrays
*/
test('User should be Ragland Asir', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Ragland',
    lastName: 'Asir'
  });
});

test("There's no I in team", () => {
  expect('team').not.toMatch(/I/);
});

test('Fetch user should be "Leanne Graham"', () => {
  // We neet BOTH the expoect and the return when dealing with async functions
  expect.assertions(1);

  return functions
    .fetchUser()
    .then(data => expect(data.name).toEqual('Leanne Graham'));
});

/*
⬆  Promise based syntax for asyncronous data

⬇ Async await syntax for asyncronous data
*/
test('Fetch user should be "Leanne Graham"', async () => {
  // We neet BOTH the expoect and the return when dealing with async functions
  expect.assertions(1);

  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

// toContain
// toBeDefined
