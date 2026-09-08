// 타입지정
// string, number, boolean, array, null, undefined
const car = "BMW";
let car2 = "BMW";
// 선언된 타입과 다른 타입 대입시 오류
// car2 = 3;
let age = 23;
let isAdult = false;
let n = null;
let u = undefined;
let fruits = ["사과", "바나나", "딸기"];
//fruits.push(95);
let scores1 = [95, 78, 100];
let mixed = ["사과", "바나나", 78, "딸기"];
// 타입 추론
let fruits2 = ["사과", "바나나", "딸기"];
const vegetables = ["carrot", "broccoli", "spinach"];
const vegetables2 = ["carrot", "broccoli", "spinach"];
const scores2 = [100, 95, 85];
// vegetables.push("potato")
// scores2.push()
// ...
const newArray = [...scores2, 85];
console.log(newArray);
// 타입스크립트에서 추가된 데이터 타입
// 튜플 : 배열인데 요소의 개수와 각 위치의 타입을 미리 정해 놓은 배열
const person = ["Alice", 25];
console.log(person[0].toLowerCase());
person[0] = "Tiger";
person[1] = 26;
console.log(person);
function getUserInfo() {
    return ["Bob", 30, true];
}
//console.log(getUserInfo());
const [username, age1, isUserAdult] = getUserInfo();
// 추론을 이용한 튜플 선언
// 상수처럼
const person2 = ["Alice", 25];
// person2[0] = "three";
// 배열선언
const array1 = [];
// 튜플선언
const tuple1 = [25, ""];
// any : js 랑 같은 개념(거의 자주 사용하지 않음)
// any : 타입 검사 포기
let num;
num = 95;
num = "Nine";
let randomValue = 10;
randomValue = "hello";
console.log(randomValue.length);
randomValue = true;
// unknown : 무슨 타입인지 모르니까 사용불가
// 확인 후 사용
let unknownValue = 10;
unknownValue = "Hello";
console.log(unknownValue);
// let strLength:number = unknownValue.length;
if (typeof unknownValue === "string") {
    let strLength = unknownValue.length;
    console.log(strLength);
}
// void : 반환값이 없는 함수
function message(msg) {
    // return msg;
    console.log(msg);
}
const print1 = () => {
    console.log(print1);
};
// printLength() : 반환값 없음
// 파라메터 text => string or null
function printLength(text) {
    if (text === null) {
        console.log("No text");
        return;
    }
    console.log(`${text.length}`);
}
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num);
});
// never : 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
// x 파라메터 : string,number,boolean
function handleValue(x) {
    if (typeof x === "string") {
    }
    else if (typeof x === "number") {
    }
    else if (typeof x === "boolean") {
    }
    else if (typeof x === "object") {
    }
    else {
        const unreachable = x;
        throw new Error("Unhandled type : " + unreachable);
    }
}
handleValue("Hello");
handleValue(42);
handleValue(true);
handleValue({ name: "John" });
// 열거형 : 관련있는 상수들을 하나의 이름으로 묶어놓은 타입
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log("enum");
console.log(Color.Green); // 1
let favoriteColor = Color.Green;
let userAddr;
let currentStatus;
currentStatus = "loading";
let point = { x: 10, y: 20 };
let tuple2 = [10, 20];
let employee = {
    firstName: "John",
    lastName: "Doe",
    employeeId: 1234,
};
let member = {
    id: "user01",
    name: "alice",
};
let member2 = {
    id: "user01",
    name: "alice",
    addr: "seoul",
};
let menu = {
    name: "피자",
    category: "",
    price: "35000",
};
let best = {
    name: "피자",
    category: "",
};
// interface : 객체 타입 지정 시 주로 사용
// let user1 = { name: "Alice", age: 25 };
let user1;
user1 = { name: "Alice", age: 25 };
console.log(user1);
let user = { name: "David", age: 30 };
console.log(user.name);
let user2 = { name: "David", age: 30 };
let user3 = { name: "David", age: 30, gender: "남" };
user3.name = "Teddy";
let car1 = { model: "Toyota", year: 2026 };
let student = {
    name: "John",
    id: 12345,
    1: "A",
    2: "B",
    3: "C",
};
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 7));
// 인라인 지정
function sub(a, b) {
    return a - b;
}
// Car2 속성 그대로 구현
class Truck {
    constructor(color, wheels) {
        this.color = color;
        this.wheels = wheels;
    }
    start() {
        console.log("Truck started");
    }
    // 본인만의 메서드 추가 가능
    drive() {
        console.log("Truck is driving");
    }
}
const myTruck = new Truck("red", 6);
myTruck.start();
let employee2 = {
    name: "",
    age: 30,
    employeeId: 1001,
    department: "HR",
};
const best2 = {
    name: "아메리카노",
    category: "coffee",
    price: "4500",
    rank: 3,
};
// as 타입 : type assertion
let someValue = "This is a string";
let someValueLength = someValue.length;
export {};
