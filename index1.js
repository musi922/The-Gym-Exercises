/*
write a js program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

*/

function numbers(num1,num2){
    if(num1 == 100||num2 == 100 || num1+num2 == 100){
        return true
    }else return false
    
}
console.log(numbers(100,2));
console.log(numbers(100,100));
console.log(numbers(50,50));
console.log(numbers(50,0));


/*
write a js program to get the extension of  a filename
*/

function getextension (str){
    return str.slice(str.lastIndexOf('.'))
}
console.log(getextension("index.html"));
console.log(getextension("web.config.js"));

/*
write a js pro to replace every character in a given string with a character folllowing it in the alphabet
*/

const movecharforwd = (str) =>
    str.split('').
    map(char =>String.fromCharCode(char.charCodeAt(0)+1))
    /*char.charCodeAt(0)+1) you access the ASCII code of it and add 1 saying togo to nexe AScii code as every character has its own then after
    String.fromCharCode(...) it returns that ASCII code to string character
     */
    .join(''); 

console.log(movecharforwd('abcd'));
console.log(movecharforwd('1,2,3,4,8'));


/*
write a js program to get the current date. Exepected output : mm-dd-yyy,
mm/dd/yyyy or dd-mm-yyyy,dd/mm/yyyy
*/

function exepecteddate (date = new Date()){
    const days = date.getDate();
    const months = date.getMonth() + 1; //as array it is taking month from 0 it was giving 3 yet it could be 4
    const years = date.getFullYear();
    return `${days} / ${months} / ${years}`;
}
console.log(exepecteddate());


/*
write a js program  to create a new string adding 'New!' on front of a given string
 if the given string begins with "New!" arleady then return the original string
 */

 function newstring (str){
    return `New! ${str}`
 }
 console.log(newstring("offers"));

 const addnewstring  = (str)=>{
    return str.indexOf('New!') == 0? str:`New! ${str}`

 }
 console.log(newstring("offers"));
 console.log(addnewstring("New!offers"));

 