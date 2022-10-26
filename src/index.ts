import { Sorter } from './Sorter'
import { NumberCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'


const numbersCollection = new NumberCollection([10, 3, 5, -1, -2, 0])
const charactersCollection = new CharactersCollection('Animal')
const sorter = new Sorter(numbersCollection)  
const sortCharacter = new Sorter(charactersCollection) 

sorter.sort()
sortCharacter.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)