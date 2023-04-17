let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

//the first thing code will execute is "starting execution..."
// then "end of script..."
// in a 3sec "42"
