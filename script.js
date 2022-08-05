console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");
const germanTile = document.querySelector("#German");
const haitianCreoleTile = document.querySelector("#HaitianCreole");
const hindiTile = document.querySelector("#Hindi");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);
console.log(germanTile);
console.log(haitianCreoleTile);
console.log(hindiTile);


let english={
  title1:"English",
  title2:"english",
  tile: englishTile
}
let spanish={
  title1:"Spanish",
  title2:"spanish",
  tile: spanishTile
}
let chinese={
  title1:"Chinese",
  title2:"chinese",
  tile:chineseTile
}
let tagalog={
  title1:"Tagalog",
  title2:"tagalog",
  tile: tagalogTile
}
let vietnamese={
  title1:"Vietnamese",
  title2:"vietnamese",
  tile: vietnameseTile
}
let arabic={
  title1:"Arabic",
  title2:"arabic",
  tile: arabicTile
}
let french={
  title1:"French",
  title2:"french",
  tile: frenchTile
}
let korean={
  title1:"Korean",
  title2:"korean",
  tile: koreanTile
}
let russian={
  title1:"Russian",
  title2:"russian",
  tile: russianTile
}
let german={
  title1:"German",
  title2:"german",
  tile: germanTile
}
let hatian={
  title1:"Haitian Creole",
  title2: "haitian creole",
  tile: haitianCreoleTile
}
let hindi={
  title1:"Hindi",
  title2: "hindi",
  tile: hindiTile
}



let languages=[english, spanish, chinese, tagalog, vietnamese, arabic, french, korean, russian, german, hatian, hindi];
// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
/*
inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess=inputField.value;
  console.log(guess);
  if (guess === "English" || guess === "english") {
    englishTile.classList.remove("hidden");
  } else if (guess === "Spanish" || guess === "spanish") {
    spanishTile.classList.remove("hidden");
  } else if (guess === "Chinese" || guess === "chinese") {
    chineseTile.classList.remove("hidden");
  } else if (guess === "Tagalog" || guess === "tagalog") {
    tagalogTile.classList.remove("hidden");
  } else if (guess === "Vietnamese" || guess === "vietnamese") {
    vietnameseTile.classList.remove("hidden");
  } else if (guess === "Arabic" || guess === "arabic") {
    arabicTile.classList.remove("hidden");
  } else if (guess === "French" || guess === "french") {
    frenchTile.classList.remove("hidden");
  } else if (guess === "Korean" || guess === "korean") {
    koreanTile.classList.remove("hidden");
  } else if (guess === "Russian" || guess === "russian") {
    russianTile.classList.remove("hidden");
  }
  else if (guess === "German" || guess === "german") {
    germanTile.classList.remove("hidden");
  }
   else if (guess === "Haitian Creole" || guess === "haitian creole") {
    haitianCreoleTile.classList.remove("hidden");
  }
  else if (guess === "Hindi" || guess === "hindi") {
   hindiTile.classList.remove("hidden");
  }
  inputField.value = "";
});
*/

inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess=inputField.value;
  console.log(guess);
 for(let i=0; i<languages.length; i++) {
   if(guess===languages[i].title1 || guess=== languages[i].title2){
      let languageGuess=languages[i];
      languageGuess.tile.classList.remove("hidden");
   }
 }
  inputField.value = "";
});

