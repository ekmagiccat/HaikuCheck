//import { syllable } from "syllable";
//import {syllable} from 'https://esm.sh/syllable@5
//import something from './../src/index.js';

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const addLine1 = changeState("line1")(`${line1}`);
const addLine2 = changeState("line2")(`${line2}`);
const addLine3 = changeState("line3")(`${line3}`);

function haikuCheck(state) {
  let count = 0;
  const syllables = [];
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = (count, vowels, state, syllables) => {
    for (const line in state) {
      const charArray = line.split("(?!^)");
      for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];
        if (vowels.includes(char)) {
          count++;
        }
      }
      syllables.push(count);
    }
    if (syllables[0] === 5 && syllables[1] === 7 && syllables[2] === 5) {
      return true;
    } else {
      return false;
    }
  };
  return vowelCount(count, vowels, state, syllables);
}
