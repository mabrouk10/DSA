/*

We are building a word processor and we would like to implement a "reflow" functionality that also applies full justification to the text.
Given an array containing lines of text and a new maximum width, re-flow the text to fit the new width. Each line should have the exact specified width. If any line is too short, insert '-' (as stand-ins for spaces) between words as equally as possible until it fits.
Note: we are using '-' instead of spaces between words to make testing and visual verification of the results easier.


lines = [ "The day began as still as the",
          "night abruptly lighted with",
          "brilliant flame" ]

reflowAndJustify(lines, 24) "reflow lines and justify to length 24" =>

        [ "The--day--began-as-still",
          "as--the--night--abruptly",
          "lighted--with--brilliant",
          "flame" ] // <--- a single word on a line is not padded with spaces

reflowAndJustify(lines, 25) "reflow lines and justify to length 25" =>

        [ "The-day-began-as-still-as"
          "the-----night----abruptly"
          "lighted---with--brilliant"
          "flame" ]

reflowAndJustify(lines, 26) "reflow lines and justify to length 26" =>

        [ "The--day-began-as-still-as",
          "the-night-abruptly-lighted",
          "with----brilliant----flame" ]

reflowAndJustify(lines, 40) "reflow lines and justify to length 40" =>

        [ "The--day--began--as--still--as-the-night",
          "abruptly--lighted--with--brilliant-flame" ]

reflowAndJustify(lines, 14) "reflow lines and justify to length 14" =>

        ['The--day-began',
         'as---still--as',
         'the------night',
         'abruptly', 
         'lighted---with', 
         'brilliant', 
         'flame']


*/

const lines = [
    "The day began as still as the",
    "night abruptly lighted with",
    "brilliant flame"
  ];
  const testReflowWidth1 = 24;
  const testReflowWidth2 = 25;
  const testReflowWidth3 = 26;
  const testReflowWidth4 = 40;
  const testReflowWidth5 = 14;
  
  const wrapLines = (words, lineLength) => {
    const result = [];
    let remainingLength = lineLength;
    const remainingWords = [...words];
  
    const usedWords = [];
    let line = "";
    for (let word of remainingWords) {
      if (remainingLength > word.length) {
        if (line.length) {
          line += "-";
          remainingLength -= 1;
        }
        line += word;
        usedWords.push(word);
        remainingLength -= word.length;
        //console.log('line', line);
      } else {
        if (line) result.push(line);
        remainingLength = lineLength - word.length;
        line = word;
      }
      //console.log('word', word);
      //console.log('line', line);
      //console.log('remainingLength', remainingLength);
      // remainingWords = words.filter(word => !usedWords.includes(word));
    }
    if (line) {
      result.push(line);
    }
    return result;
  };
  
  console.log(wrapLines(lines, testReflowWidth4));

  // console.log(wrapLines(words1, testWords1Width1));
  // console.log(wrapLines(words1, testWords1Width2));
  // console.log(wrapLines(words2, testWords2Width1));
  // console.log(wrapLines(words3, testWords3Width1));
  // console.log(wrapLines(words4, testWords4Width1));
  // console.log(wrapLines(words5, testWords5Width1));
  
  const reflowAndJustify = (sentences, lineLength) => {
    let result = [];
    let usedWords = [];
    let unusedWords = [];
    for (let sentence of sentences) {
      const words = [...unusedWords, ...sentence.split(" ")];
      // console.log("sentence", sentence);
      // console.log("words", words);
      // console.log(sentence.length, lineLength);
      let remainingLength = lineLength;
      let index = 0;
  
      while (remainingLength > 0 && index < words.length) {
        // console.log(remainingLength, words[index].length);
        remainingLength -= words[index].length + 1;
        usedWords.push(words[index]);
        index++;
      }
      unusedWords = words.splice(index);
  
    //   console.log(words, lines, unusedWords);
  
      // let index = 0;
      // let line = ``;
      // while (remainingLength > 0) {
      //   remainingLength--;
      //   line += `${words[index]}-`;
      //   index++;
      //   if (index === words.length) index = 0;
      // }
      // result.push(line);
    }
    return result;
  };
  
  console.log(reflowAndJustify(lines, testReflowWidth1));
  