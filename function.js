const arr = [1, 2, 3, 4];

// using rest operator to get all remaining arguments
function sum(...numbers) {
  console.log(numbers);
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

const person = {
  firstName: "John",
  friends: ["Joe", "Jack", "Bob"],
  sayHi: function () {
    console.log(`Hi, my name is ${this.firstName.toUpperCase()}`);
  },
  sayFriendsName: function () {
    // this.friends.forEach(
    //   function (friend) {
    //     console.log(`Hi ${friend}, this is ${this.firstName}`);
    //   }.bind(this)
    // );

    // arrow functions don't have their own this keyword,
    // so we don't need to bind this keyword
    this.friends.forEach((friend) => {
      console.log(`Hi ${friend}, this is ${this.firstName}`);
    });
  },
};

// person.sayHi();
// person.sayFriendsName();

/////////// Higher order function ///////////////
// 1. if a function takes a callback function
// 2. if a function returns a function

// typical purpose: to reuse logic

// closure:
// inner function has access to the outer function
// !!!! even after the outer function has returned (after the execution context is removed)

// use cases / purpose of closure
// 1. create private variables
// 2. reuse logics

function counterGenerator() {
  let count = 0;
  const getCount = () => {
    return count;
  };
  const add = () => {
    count++;
    document.querySelector("#count").textContent = count;
  };
  const minus = () => {
    count--;
    document.querySelector("#count").textContent = count;
  };
  const reset = () => {
    count = 0;
    document.querySelector("#count").textContent = count;
  };

  return {
    getCount,
    add,
    minus,
    reset,
  };
}

// const counter = counterGenerator();

// console.log(counter.getCount());
// counter.add();
// counter.add();
// console.log(counter.getCount());

// const counter2 = counterGenerator();
// console.log("Counter 2", counter2.getCount());

// document.querySelector(".add").addEventListener("click", counter.add);
// document.querySelector(".minus").addEventListener("click", counter.minus);
// document.querySelector(".reset").addEventListener("click", counter.reset);

// i need a function,
// every time you call it, return value increase by 1

// IIFE
const genId = (() => {
  let id = 0;

  return () => {
    id++;
    console.log(id);
    return id;
  };
})();

genId();
genId();
genId();
genId();
genId();
