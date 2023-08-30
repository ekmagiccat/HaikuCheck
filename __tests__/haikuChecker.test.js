/* import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
}); */

import HaikuChecker from './../src/haikuChecker.js';

describe('HaikuChecker', () => {
  let haiku;
  let haikuChecker;

  beforeEach(() => {
    haiku = `A world of dew,
        And within every dewdrop
        A world of struggle.`;
    haikuChecker = new HaikuChecker(haiku);
  });

  test('should define HaikuChecker constructor', () => {
    expect(haikuChecker.haiku).toBe(haiku);
  });

  test('Should return true for a poem with 3 lines', () => {
    expect(haikuChecker.isThreeLines()).toBe(true);
  });

  test('Should return false for a poem that is not 3 lines', () => {
    let haiku = `A world of dew,
    And within every dewdrop
    A world of struggle.
    and so much more`;
    let haikuChecker = new HaikuChecker(haiku);
    expect(haikuChecker.isThreeLines()).toBe(false);
  });

  // test('Should return the count of syllables per input word', () => {
  //   let word = "Epicodus";
  //   expect(haikuChecker.countSyllables(word)).toBe(4);
  // });

  test('Should return the count of vowels per input word of haiku', () => {
    expect(haikuChecker.vowelCount()).toEqual(16);
  });

});