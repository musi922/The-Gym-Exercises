/*
write a a js program to find the number of even digits in an array of intergers
 */

const array = (arr)=> arr.filter(num => num % 2 == 0).length;
console.log(array([1,2,3,4,7,8,9]));


/*
write a a js program to find the number of even values up to a given number

*/

const countevennumbers = (arr)=>
arr.filter(num=>num%2===0).length;
console.log(countevennumbers([1,2,3,4,7,8,9]));

const createarrayofnumbers = (num)=>{
    let returnarray = [];
    for(let i=1;i<=num;i++){
        returnarray.push(i);
    }
    return returnarray
}
console.log(countevennumbers(createarrayofnumbers(6)));



/*
write a js program to check whether a fiven array of integers is sorted in ascending order
 */

const asceorder = (arr)=> {
    for(let i=0; i < arr.length; i+=1){
        if(arr[i+1] < arr[i]) return false;
    }
    return true
}

console.log(asceorder([1,2,3,4]));
console.log(asceorder([9,2,4,3]));


/*
write a js program to get the largest even number from an array of intergers
 */
//to get largest number use math.max smallest use math.min

const largestevennumber = (arr)=>
Math.max(...arr.filter(ar=>ar%2===0));//(...) It takes the array and "spreads" its elements into individual arguments to a function.

console.log(largestevennumber([1,2,3,4,5,6,7,8]));


/*
write a js prog to replace the first digit in string (should contains at least digit) with $ character.
 */

const replacedigit = (str)=>str.replace(/[0-9]/,"$")//if you add /g all digits will be $

console.log(replacedigit("shshdh5sgd6hs"));