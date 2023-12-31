/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log(arr.filter((x) => x["profession"] === "developer").map((x) => x));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let arr1 = [];
  arr.forEach((el) => {
    if (el["profession"] === "developer") arr1.push(el);
  });
  console.log(arr1);
}

function addData() {
  //Write your code here, just console.log
  let newElement = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newElement);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((element) => element["profession"] !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "balveer", age: "24", profession: "SDE-I" },
    { id: 6, name: "suman", age: "26", profession: "manager" },
    { id: 7, name: "vikash", age: "21", profession: "admin" },
  ];
  arr = arr.concat(newArray);
  console.log(arr);
}
