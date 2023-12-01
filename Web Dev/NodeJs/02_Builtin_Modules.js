// os Module

// This module gives various information also allows us to take varios+us action on the Os of the system node is running in
const os = require("os");

const osObj = {};

osObj.freemem = os.freemem(); // Returns the amount of free system memory in bytes as an integer
osObj.totmem = os.totalmem(); //Returns the total amount of system memory in bytes as an integer

osObj.uptime = os.uptime(); // Returns the system uptime in number of seconds

osObj.type = os.type(); // Returns the operating system name

osObj.release = os.release(); // Returns the operating system as a string

osObj.userInfo = os.userInfo(); // Returns information about the currently effective user

console.log(osObj);

// path Module

// Allows us to interact with file path easily
const path = require("path");

const pathObj = {};

pathObj.separator = path.sep; // returns the platform specific spearator '/' or '\'
pathObj.joinedpath = path.join("src", "utils", "accounts.js"); // joins provided folder/dir/file names provided and also normalizes them
pathObj.basename = path.basename(pathObj.joinedpath); // Return the last portion (base) of a path
pathObj.absolutePath = path.resolve(__dirname, "src", "utils", "passwords.js"); //Starting from left to right parameters, resolves to an absolute path

console.log(pathObj);

// fs Module (file system)

// Used to read write and modify files and many more

// Synchronous Method
const { readFileSync, writeFileSync, appendFileSync } = require("fs"); // These are Synchronous Varients

const textFile = readFileSync("./assets/dummy.txt", "utf-8");

const content1 = textFile + "Text for duplicate file included";
const content2 = "Text to be overwritten";
const content3 = " text to be appended at the end";

writeFileSync("./assets/dummy2.txt", content1, "utf-8"); // create another text file and write the content in it
writeFileSync("./assets/dummy3.txt", content1, "utf-8");

writeFileSync("./assets/dummy3.txt", content2); // will override the content of dummy3 because it is already present
writeFileSync("./assets/dummy3.txt", content3, { flag: "a" }); // will append the content at the end of dummy3 , we cans also use  appendFileSync

// Asynchronous Method

const { readFile, writeFile } = require("fs"); // These are Asynchronous Varients

readFile("./assets/dummy.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  } else {
    writeFile("./assets/dummyAsync.txt", result + " Extra data For Async Varient", (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
      }
    });
  }
});


// Async methods result in callback hell as they each take callbacks and also execute asyncly