import fs from 'node:fs'

//                                       Task1
// read file
const data = fs.readFileSync('./input.txt', 'utf8')

// split input file into 2 lists 
const rowSplit = data.split("\n")
let firstList = []
let secondList = []
for (const row of rowSplit) {
    const rowToColumnus = row.split("   ")
    // push to add all numbers into an array 
    // parseInt to convert to numbers
    firstList.push(parseInt(rowToColumnus[0]))
    secondList.push(parseInt(rowToColumnus[1]))
}

// sort numbers
firstList.sort()
secondList.sort()
// calculate distance 

let result = 0
for (const [index, leftNumber] of firstList.entries()) {
    const rightNumber = secondList[index]

    const calculateDistance = Math.abs(rightNumber - leftNumber)
    result = result + calculateDistance

}

console.log('task 1:', result)

//                                       Task2

let loopCOunter= 0
let similarityScore = 0
// we go over each item in the left list
for ( let i = 0; i < firstList.length; i++  ) {
    loopCOunter++
    const leftNumber = firstList[i]
    // we need to compare it to each number on the right
    let count = 0;
    // counting loop 
    for (let j = 0; j < firstList.length; j++  ) {
        loopCOunter++
        const rightNumber = secondList[j]
        if (leftNumber === rightNumber) {
            count = count + 1;

        }
    }
    similarityScore = similarityScore + (leftNumber * count)
 }
 console.log('task 2:',similarityScore, loopCOunter)


 // SECOND WAY 
loopCOunter = 0
let similarityScore2 = 0
let counter = {}
// we go over each item in the left list
for ( let i = 0; i < firstList.length; i++  ) {
    loopCOunter++
    const leftNumber = firstList[i]
    // have we seen this number before?
    const count = counter[leftNumber]
    if (count != null) {
        similarityScore2 = similarityScore2 + (leftNumber * count)
        continue
    }
    // counting loop 
    let rightCount =0
    for (let j = 0; j < firstList.length; j++  ) {
        loopCOunter++
        const rightNumber = secondList[j]
        if (leftNumber === rightNumber) {
            rightCount = rightCount + 1;
        }
    }
    counter[leftNumber] = rightCount
    similarityScore2 = similarityScore2 + (leftNumber * rightCount)
 }
 console.log('task 2.1:',similarityScore2, loopCOunter)