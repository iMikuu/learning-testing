// Verificare daca un string este palindrom

function palindrome(str) {
  let regex = /[a-zA-Z0-9]/g;
  let array = str.match(regex).map((word) => word.toLowerCase());
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return array.join() == newArray.join();
}

console.log(palindrome("My age is 0, 0 si ega ym.")); // Rezultatul va fi: true

// Transformare numar arab in numar roman

function convertToRoman(num) {
  let temp = [];
  let newNumber = num;

  function recursion(newNumber) {
    if (newNumber >= 1000) {
      temp.push("M");
      recursion(newNumber - 1000);
    } else if (newNumber >= 900 && newNumber < 1000) {
      temp.push("CM");
      recursion(newNumber - 900);
    } else if (newNumber >= 500 && newNumber < 900) {
      temp.push("D");
      recursion(newNumber - 500);
    } else if (newNumber >= 400 && newNumber < 500) {
      temp.push("CD");
      recursion(newNumber - 400);
    } else if (newNumber >= 100 && newNumber < 400) {
      temp.push("C");
      recursion(newNumber - 100);
    } else if (newNumber >= 90 && newNumber < 100) {
      temp.push("XC");
      recursion(newNumber - 90);
    } else if (newNumber >= 50 && newNumber < 90) {
      temp.push("L");
      recursion(newNumber - 50);
    } else if (newNumber >= 40 && newNumber < 50) {
      temp.push("XL");
      recursion(newNumber - 40);
    } else if (newNumber >= 10 && newNumber < 40) {
      temp.push("X");
      recursion(newNumber - 10);
    } else if (newNumber == 9) {
      temp.push("IX");
      recursion(newNumber - 9);
    } else if (newNumber >= 5 && newNumber < 9) {
      temp.push("V");
      recursion(newNumber - 5);
    } else if (newNumber == 4) {
      temp.push("IV");
      recursion(newNumber - 4);
    } else if (newNumber < 4 && newNumber > 0) {
      temp.push("I");
      recursion(newNumber - 1);
    } else {
      return temp;
    }
  }

  recursion(newNumber);
  return temp.join("");
}

console.log(convertToRoman(1960)); // Rezultatul va fi: MCMLX

// Criptare text cu algoritmul lui Cezar

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = [];
  let tempStr = str.toUpperCase();
  for (let i = 0; i < tempStr.length; i++) {
    if (alphabet.indexOf(tempStr[i]) != -1) {
      let temp = alphabet.indexOf(tempStr[i]) + 13;
      if (temp >= 26) temp -= 26;
      result.push(alphabet[temp]);
    } else {
      result.push(tempStr[i]);
    }
  }
  return result.join("").toLowerCase();
}

console.log(rot13("averystrongpassword")); // Rezultatul va fi: nirelfgebatcnffjbeq

// Transformarea unui nume in initiale

function abbrevName(name) {
  let array = name.split(" ");
  let initials = "";
  for (let i = 0; i < array.length; i++) {
    let upperCaseInitial = array[i][0].toUpperCase();
    if (i === 0) {
      initials = upperCaseInitial;
    } else {
      initials = initials + "." + upperCaseInitial;
    }
  }
  return initials;
}

console.log(abbrevName("Lalescu Mihai")); // Rezultatul va fi: L.M

// Valul mexican

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      let temp = str.slice().split("");
      let tempLetter = temp[i].toUpperCase();
      temp.splice(i, 1, tempLetter);
      result.push(temp.join(""));
    }
  }
  return result;
}

console.log(wave("waving")); // Rezultatul va fi: [ 'Waving', 'wAving', 'waVing', 'wavIng', 'waviNg', 'wavinG' ]

// Cine apreciaza

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(["Mihai", "Ionel", "Dan", "Alexandru", "George", "Vasile"])); // Rezultatul va fi: Mihai, Ionel and 4 others like this

// Decompune numarul

function expandedForm(num) {
  let result = [];
  function decompose(newNumber) {
    var string = newNumber.toString();
    if (string.length != 1) {
      result.push(string[0] * Math.pow(10, string.length - 1));
      decompose(newNumber - string[0] * Math.pow(10, string.length - 1));
    } else if (Number(string[0]) == 0) {
      return result;
    } else {
      result.push(Number(string[0]));
    }
    return result;
  }

  decompose(num);

  return result.join(" + ");
}

console.log(expandedForm(2561)); // Rezultatul va fi: 2000 + 500 + 60 + 1

// sorteaza un array de numere astfel incat numerele pare sa fie la locul lor, iar numerele impare sa fie sortate crescator

function sortArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1 || array[i] % 2 == -1) {
      newArray.push(array[i]);
    }
  }
  let newArray2 = newArray.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1 || array[i] % 2 == -1) {
      result.push(newArray2[index]);
      index++;
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(sortArray([63, 47, 21, 20, 19, 15, 33, 999, 200, 40, 50, 51, 227])); // Rezultatul va fi: [15, 19, 21, 20, 33, 47, 51, 63, 200, 40, 50, 227, 999]

// separa numerele din array-ul 1 care nu se regasesc in array-ul 2

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    while (a.indexOf(b[i]) !== -1) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a;
}

console.log(
  arrayDiff([2, 5, 8, 12, 21, 55, 6], [2, 5, 3, 7, 8, 12, 20, 71, 25])
); // Rezultatul va fi: [ 21, 55, 6 ]
