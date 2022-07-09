// first JS project (Palindrome checker)

function palindrome(str) {
  let regex = /[a-zA-Z0-9]/g;
  let array = str.match(regex).map(word => word.toLowerCase());
  let newArray = [];
  for(let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return array.join() == newArray.join();
}

palindrome("My age is 0, 0 si ega ym.");

// second JS project (Convert arabic numbers to roman numbers)

function convertToRoman(num) {
  let temp = [];
  let newNumber = num;
 
 function recursion(newNumber) {
  if(newNumber >= 1000) {
    temp.push("M");
    recursion(newNumber - 1000);
  } else if(newNumber >= 900 && newNumber < 1000) {
    temp.push("CM");
    recursion(newNumber - 900);
  } else if(newNumber >= 500 && newNumber < 900) {
    temp.push("D");
    recursion(newNumber - 500);
  } else if(newNumber >= 400 && newNumber < 500) {
    temp.push("CD");
    recursion(newNumber - 400);
  } else if(newNumber >= 100 && newNumber < 400) {
    temp.push("C");
    recursion(newNumber - 100);
  } else if(newNumber >= 90 && newNumber < 100) {
    temp.push("XC");
    recursion(newNumber - 90);
  } else if(newNumber >= 50 && newNumber < 90) {
    temp.push("L");
    recursion(newNumber - 50);
  } else if(newNumber >= 40 && newNumber < 50) {
    temp.push("XL");
    recursion(newNumber - 40);
  } else if(newNumber >= 10 && newNumber < 40) {
    temp.push("X");
    recursion(newNumber - 10);
  } else if(newNumber == 9) {
    temp.push("IX");
    recursion(newNumber - 9);
  } else if(newNumber >= 5 && newNumber < 9) {
    temp.push("V");
    recursion(newNumber - 5);
  } else if(newNumber == 4) {
    temp.push("IV");
    recursion(newNumber - 4);
  } else if(newNumber < 4 && newNumber > 0) {
    temp.push("I");
    recursion(newNumber - 1);
  } else {
     return temp;
  }
 }
 
 recursion(newNumber);
  return temp.join('');
}

// third JS project ("Encrypt" text with a Caesars Cipher script)

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = [];
  for(let i = 0; i < str.length; i++) {
    if(alphabet.indexOf(str[i]) != -1) {
      let temp = alphabet.indexOf(str[i]) + 13;
      if(temp >= 26) temp -= 26;
      result.push(alphabet[temp]);
    } else {
      result.push(str[i]);
    }
  }
  console.log(result.join(''));
  return result.join('');
}

// fourth JS project (Name to initials)

function abbrevName(name){
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