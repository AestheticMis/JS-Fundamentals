

const args = process.argv.slice(2);

const firstArg = args[0] === undefined ? "undefined" : args[0];
const secondArg = args[1] === undefined ? "undefined" : args[1];

if (args.length === 1) {
  console.log(`HBTN is undefined`);
} else {
  console.log(`${Python} is ${Fun}`);
}


  
