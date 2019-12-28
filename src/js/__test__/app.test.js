import Bowerman from '../Classes/bowerman';

test('should aaa', () => {
  const bowerman = new Bowerman('aaa');

  const expected = {
    name: 'aaa',
    attack: 25,
    defence: 25,
  };
  expect(bowerman).toEqual(expected);
});
