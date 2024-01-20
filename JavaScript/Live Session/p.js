//promises -reject and resolve
console.log("hello this is the first linr ");
const newPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const data = { message: "resolved the promise" };
    rej("problem not resolved ");
    res(data);
  }, 1000);
});
newPromise
  .catch((error) => {
    console.log(error.message);
  })
  .then((result) => {
    console.log(result.message);
  });

console.log("hello this is the second linr ");
