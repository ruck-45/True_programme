// Traditional Async Pattern

  // Traditionally we use callbacks only in async functions
  // If we needed to make nested async calls, we have to nest the callbacks too, which makes a callback hell

    // Task : read 2 files and write them in new file

      const { readFile, writeFile } = require("fs");

      readFile("./assets/file01.txt", "utf-8", (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          const file1 = data;
          readFile("./assets/file02.txt", "utf-8", (err, data) => {
            if (err) {
              throw new Error(err);
            } else {
              const file2 = data;
              writeFile("./assets/writefile01.txt", file1 + "\n" + file2, (err) => {
                if (err) {
                  throw new Error(err);
                }
              });
            }
          });
        }
      });




// Async pattern with Promises

  // Promise can convert any function (async/sync) as async

  // With Promises we can use
    // .then() : to provide the callback
    // .catch() : to catch the error

  // Only Promises streamline a lot of callback hell, but they still represent traditional method, so they still have nesting

    const readFileText = (path, encoding) => {
      return new Promise((resolve, reject) => {
        readFile(path, encoding, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };

    const writeFileText = (path, data) => {
      return new Promise((resolve, reject) => {
        writeFile(path, data, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve("File Creation Succesful ...");
          }
        });
      });
    };

    readFileText("./assets/file01.txt", "utf-8")
      .then((data) => {
        const file1 = data;
        readFileText("./assets/file02.txt", "utf-8")
          .then((data) => {
            const file2 = data;
            writeFileText("./assets/writeFile02.txt", file1 + "\n" + file2)
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                throw new Error(err);
              });
          })
          .catch((err) => {
            throw new Error(err);
          });
      })
      .catch((err) => {
        throw new Error(err);
      });







// Async Await Patterns

  // We can await promises
  // If we use await, the logic looks a lot similar to a synchronous program
  // But the system still offloads the task if it encounters await just like traditional async and continuous to execute other tasks in the mean time

  // There are various ways to have promises of functions
  // We can promisify any async function using util.promisify()
  // Many modern apis do provide direct promises of their async functions

    const { promisify } = require("util");
    const readFilePromise = promisify(readFile);
    const writeFilePromise = promisify(writeFile);

    const readWrite = async () => {
      try {
        const file1 = await readFilePromise("./assets/file01.txt", "utf-8");
        const file2 = await readFilePromise("./assets/file02.txt", "utf-8");

        await writeFilePromise("./assets/writeFile03.txt", file1 + "\n" + file2);
        console.log("Write successful ...");
      } catch (err) {
        throw new Error(err);
      }
    };

    readWrite();

  // We can also get readFile and writeFile as promises themselves by:
    // const { readFile, writeFile } = require("fs").promises;
