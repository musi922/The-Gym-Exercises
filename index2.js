/*
write a js program to create a new string from given string taking the first three characters and the last 3 characters of string and adding them together yhe string length must be 3 or more if not , the original string is returned
*/

function newstring (str){
    let first = str.slice(0,3)
    let second = str.slice(-3)
    if(str.length ===3) return str;

    return `${first} ${second}`
    

}
console.log(newstring("abcdgdgdgdg"));
console.log(newstring("123456789"));
console.log(newstring("abc"));
console.log(newstring("ab"));


//simple way
const newstrings = (str)=>
str.length<3?str:str.slice(0,3) + str.slice(-3);


console.log(newstrings("abcdgdgdgdg"));
console.log(newstrings("123456789"));
console.log(newstrings("abc"));
console.log(newstrings("ab"));


/*
 write a js program to extract the first half of a string of even length
 */

 const firstHalf = (str)=>str.slice(0,str.length/2);
 console.log(firstHalf("richar"));
 console.log(firstHalf("ric"));
 console.log(firstHalf("richardomusime"));


 /*
 write a program to concatenate two strings except their first character
 */

 const concetenatestrings = (str1,str2)=>
 str1.slice(1)+str2.slice(1);//itmeans that slice begins from 1 and continue to thelast hence like hello it starts from ello to last
 //str1.slice(0,1)+str2.slice(1) but here hello returns "h" only because it began from 0and ended to 1 but up it started from 1 upto last
 console.log(concetenatestrings("dhdhhd", "dgdgdgd"));


 /*
 given two values , write js program to find out whic one is nearest to 100
  */

 const twovalues = (num1,num2)=> (100-num1) < (100-num2) ? num1:num2;

 console.log(twovalues("10","30"));
 

 /*
 write a js program to check a given string contains 2 to 4 occurrence of a specified character
  */

 const givenstring = (str,char)=> 
 str.split('').filter(ch => ch === char).length;

 const contains2To4 = (str, char)=>
 givenstring(str,char) >= 2 && givenstring(str,char) <= 4;

 console.log(contains2To4("gggghhhhh","g"));
 console.log(contains2To4("ooh","o"));
 console.log(contains2To4("oh","o"));

 