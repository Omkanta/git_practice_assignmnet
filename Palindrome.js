let string="naman";
let count=0;
let j=string.length-1;
for(let i=0;i<string.length;i++) {
if(string[i]===string[j]) {
j--;
}
else {
j--;
count++;
} }
if(count>0){
console.log("No");
}
else if(count===0) {
console.log("Yes");
}