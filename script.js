'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} old.🎈 Born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are Millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Michał';
calcAge(1990);
