// | : 유니온
// 리터럴
const userName1 = "Bob";
let userName2 = "Tom";
// userName2 = 3;
let userName3 = "Tom";
userName3 = 3;
const person1 = {
    name: "Alice",
    job: "developer",
};
const student1 = {
    name: "Charlie",
    grade: 2,
};
const getGift = (gift) => {
    console.log(gift.color);
    if (gift.type === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
};
const person2 = {
    name: "홍길동",
    skills: ["JavaScript", "Python"],
    age: 35,
    manage() {
        console.log("Team");
    },
};
// 제네릭
const getSize = (arr) => {
    return arr.length;
};
const arr1 = [1, 2, 3, 4, 5];
console.log(getSize(arr1));
const arr2 = ["a", "b", "c"];
console.log(getSize(arr2));
// boolean[], Date[].....
const getGenericSize = (arr) => {
    return arr.length;
};
function getGenericSize2(arr) {
    return arr.length;
}
console.log(getGenericSize2(arr1));
console.log(getGenericSize2(arr2));
const arr3 = [true, false, true];
console.log(getGenericSize2(arr3));
const myPhone = {
    name: "galaxy",
    price: 100000,
    option: { color: "black", coupon: true },
};
const myTablet = {
    name: "galaxy",
    price: 100000,
    option: ["pen", "cover"],
};
// 함수
// 2개의 숫자를 받아서 더한 결과를 출력 함수
const add = (x, y) => console.log(x + y);
add(3, 5);
// isAdult 함수 작성 age 값을 받아서 19 보다 큰지 true,false 반환하는 함수
const isAdult = (age) => {
    return age > 19;
};
//
const hello = (name) => {
    console.log(`Hello, ${name || "Guest"}`);
};
hello();
hello("Sam");
const hello2 = (name = "Guest") => {
    console.log(`Hello, ${name}`);
};
hello2();
hello2("Sam");
const sum = (...nums) => {
    return nums.length;
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
const uk = "id";
const pUser1 = {};
const pUser2 = { id: 1 };
const pUser3 = { id: 1, name: "Alice" };
const rUser1 = { id: 1, name: "Bob", age: 30, gender: "M" };
const reUser = { id: 1, name: "Bob", age: 30, gender: "M" };
export {};
