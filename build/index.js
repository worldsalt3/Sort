"use strict";
exports.__esModule = true;
var Sorter_1 = require("../src/Sorter");
var NumbersCollection_1 = require("../src/NumbersCollection");
var CharactersCollection_1 = require("../src/CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumberCollection([10, 3, 5, -1, -2, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Animal');
var sorter = new Sorter_1.Sorter(numbersCollection);
var sortCharacter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
sortCharacter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
