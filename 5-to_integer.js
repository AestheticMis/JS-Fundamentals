// Get the first command-line argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer
const num = parseInt(arg);

// Check if the conversion resulted in a valid number and if the original string
// represents an integer (to exclude floats or non-numeric strings)
if (!isNaN(num) && String(num) === arg) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
