import { Sorter } from './Sorter'
import { NumberCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumberCollection([10, 3, 5, -1, -2, 0])
const charactersCollection = new CharactersCollection('Animal')
const sorter = new Sorter(numbersCollection)  
const sortCharacter = new Sorter(charactersCollection) 
const linkedList = new LinkedList()
const linkedSort = new Sorter(linkedList)
linkedList.add(500)
linkedList.add(10)
linkedList.add(0)
linkedList.add(-1)
linkedList.add(0)


sorter.sort()
sortCharacter.sort()
linkedSort.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)
linkedList.print()