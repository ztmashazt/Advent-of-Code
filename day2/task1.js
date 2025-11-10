import fs from 'node:fs'

//                                       Task1

const data = fs.readFileSync('./input.txt', 'utf8')
// split row into arrow with numbers
let rowSplit = data.split("\n")
// let rowSplit2 = rowSplit.split(" ")
console.log(rowSplit.length)
// console.log(rowSplit2.length)

// split row numbers 
// how to make each string separate arrow 

// check increase decrease 

// sum safe rows


// for (const row of rowSplit) {
//     const rowToColumnus = row.split(" ")
//     // push to add all numbers into an array 
//     // parseInt to convert to numbers
//     firstList.push(parseInt(rowToColumnus[0]))
   
// }
// console.log(firstList) 