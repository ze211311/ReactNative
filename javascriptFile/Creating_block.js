let a = 1;
console.log("Top level");
console.log("a = " + a);

// Normal comment
// Create new block

{
  let b = 2;
  console.log("Inside block");
  console.log("a = " + a);
  console.log(`b = ${b}`);
  console.log(`${a} ${b}`);
}
console.log('test');
/*
    Multiline
    Comment
*/
