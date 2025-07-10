setTimeout(() => {
  //   console.log("time out");
}, 0);

// const p = new Promise((res, rej) => {
//   res(1);
// });

const p = Promise.resolve(1);

p.then((data) => {
  //   console.log("data", data);
});

// callback hell
// function getBeef(cb) {
//   setTimeout(() => {
//     const beef = "beef";
//     cb(beef);
//   }, 2000);
// }

// function cookBeef(beef, cb) {
//   setTimeout(() => {
//     const patty = beef === "beef" ? "patty" : null;
//     cb(patty);
//   }, 2000);
// }

// getBeef((beef) => {
//   console.log(beef);
//   cookBeef(beef, (patty) => {
//     console.log(patty);
//     getBun((bun) => {
//       getLettuce((lettuce) => {
//         getTomatoes((tomatoes) => {
//           makeBurger((burger) => {
//             console.log("burger");
//           });
//         });
//       });
//     });
//   });
// });

// console.log("eat", patty);

function getBeef() {
  return Promise.resolve("beef");
}

function cookBeef(beef) {
  if (beef === "beef") return Promise.resolve("patty");
  throw new Error("beef not found");
}

// write code with promise .then

getBeef()
  .then((beef) => {
    console.log(beef);
    return cookBeef(beef);
  })
  .then((patty) => {
    console.log(patty);
  });

// async / await

const main = async () => {
  try {
    const beef = await getBeef();
    const patty = await cookBeef(beef);
  } catch (err) {
    console.log("err", err.message);
  }
};

main();
