// https://www.codewars.com/kata/577ff15ad648a14b780000e7
// This is My Solution

export function greet(language: string) {
  const messages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return messages[language as keyof typeof messages] || "Welcome";
}

// Note : object.hasOwnProperty (key)  => this function returns boolean value that indicates if the object has this key

console.log(greet("czech"));
console.log(greet("irish"));
