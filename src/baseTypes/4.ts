/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

type personType = [string, number];
let person: personType = ["Max", 21];

// OR

let person2 : [string, number];
person2 = ["Max", 21];

export {};
