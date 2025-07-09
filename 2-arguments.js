//Get the number of arguments passed, subtracting 2 for the node executable and script name
const argsLength = process.argv.length -2;

if (argsLength ===0){
  console.log("No argument");
}else if(argsLength ===1){
  console.log("Argument found");
}else{
  console.log("Arguments found");
}
