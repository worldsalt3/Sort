import { NumberCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'


const numbersCollection = new NumberCollection([10, 3, 5, -1, -2, 0])
numbersCollection.sort()
console.log(numbersCollection.data)


const characterCollection = new CharactersCollection('XAaxy')
characterCollection.sort()
console.log(characterCollection.data)


const linkedList = new LinkedList()

linkedList.add(100)
linkedList.add(0)
linkedList.add(59)
linkedList.add(-1)
linkedList.add(-2)

linkedList.sort()
linkedList.print()


