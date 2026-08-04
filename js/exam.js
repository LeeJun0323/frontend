// 1. 두 개의 숫자를 받아서 더한 결과를 반환하는 함수 작성 sum()

function sum(num1, num2) {
  return num1 + num2;
}

// 2. 함수 안에서 1 ~ 10까지 더한 결과를 출력하는 함수 작성

function hap() {
  let total = 0;
  let i = 0;
  while (i <= 10) {
    total = total + i;
    i++;
  }
  return total;
}

// 3. multiple(num) 정의 - num이 3의 배수라면 "박수" 출력 / "통과"

function multiple(num) {
  if (num % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
}

// 4. multiple2(num) - 3의 배수 "박수" / 9의 배수 "박수" * 2 / "통과"

function multiple2(num) {
  if (num % 9 == 0) {
    return "박수박수";
  } else if (num % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
}

// 5. pass(outline, law) - 두과목 합해서 120점 이상이면 합격
// 단, 한 과목이라도 40점 미만이면 과락으로 불합격

function pass(outline, raw) {
  if (outline + raw < 120) {
    return "불합격";
  } else if (outline < 40 || raw < 40) {
    return "과락으로 인한 불합격";
  } else {
    return "합격";
  }
}

// 테스트
// console.log(sum(3, 10));
// console.log(hap());
// console.log(multiple(5));
// console.log(multiple2(18));
// console.log(pass(30, 50));
