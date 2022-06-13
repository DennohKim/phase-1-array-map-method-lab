const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// console.log(titleCased())

// function titleCased(...str) {
//   return str.toLowerCase().split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ')
// }

// console.log(titleCased(tutorials));


const titleCased = () => {
  
  
  const convertedSentenceToCaps = tutorials.map((tutorialSentence) => {
    const letter = tutorialSentence.split(' ');
    const letterTitle = letter.map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1));
    const convertedSentence = letterTitle.join(' ');
    return convertedSentence
  });

  return convertedSentenceToCaps 


}


console.log(titleCased());
