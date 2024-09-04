let members = [
   "홍길동",
   "고길동",
   "호돌이",
   "꿈돌이",
   "향아치"
]

// push
console.log(members.push("놀부"));  // 값을 넣고 길이 반환
console.log(members);

// splice(인덱스, 갯수) -> 원본에 영향을 준다
console.log(members.splice(0, 3));  // 0번째 인덱스부터 3개의 값을 반환
console.log(members.splice(1, 4));  // 1번째 인덱스부터 4개의 값을 반환해야 하나, 원본이 잘렸기에 남은 값을 토대로 반환
console.log(members);

members = [
   "홍길동",
   "고길동",
   "호돌이",
   "꿈돌이",
   "향아치"
]

let members2 = [
   // members의 값을 복사
   ...members
]

console.log("members : " + members);
console.log("members2 : " + members2);

let choi = {
   name : "jijibae",
   age : 21,
   gender : "여"
}

let choi2 = {
   ...choi,
   age : 20,
   gender : "남"
}

console.log(choi);
console.log(choi2);

console.log("--------------------------------------------");

// join() -> 배열을 문자열로 변경
console.log(members2.join());
console.log(members2.join("/"));
console.log(members2.join(" "));

// sort() -> 기본 사전순 정렬
members2.sort();
console.log(members2);
console.log(members2.reverse());

let numbers = [1, 9, 7, 5, 3]
console.log(numbers);
numbers.sort();
console.log(numbers);

// a, b를 비교하여 정렬
// 1) a를 b보다 나중에 정렬하고 싶다면(뒤에 두고 싶다면) 0 보다 큰 수를 반환
// 2) a를 b보다 먼저 정렬하고 싶다면(앞에 두고 싶다면) 0 보다 작은 수를 반환
// 3) 원래 순서를 유지하고 싶다면 0을 반환

numbers.sort((a, b) => {
   // return a > b ? 1 : -1;  // 오름차순 정렬
   return a < b ? 1 : -1;  // 내림차순 정렬
})

console.log(numbers);

console.log("---------------------------------------------------------");

// map
// 기존 배열의 요소를 전부 반복하면서 return된 값으로 새로운 배열을 만들어주는 함수
let tmpMembers = members2.map(function(m, i){
   console.log(m);
   console.log(i);
   return {
      index : i,
      value : m
   }
})

console.log(tmpMembers);

let userList = [
   {
      userKey : 1,
      userName : "홍길동",
      address : "한양",
      age : 22
   },
   {
      userKey : 2,
      userName : "콩쥐",
      address : "한양 고을",
      age : 17
   },
   {
      userKey : 3,
      userName : "흥부",
      address : "박씨 마을",
      age : 34
   }
]

let buyHistory = [
   {
      userKey : 2,
      productName : "꽃신",
      price : 14000
   },
   {
      userKey : 3,
      productName : "박씨",
      price : 30000
   },
   {
      userKey : 1,
      productName : "상모",
      price : 39000
   },
   {
      userKey : 2,
      productName : "저고리",
      price : 20990
   },
   {
      userKey : 3,
      productName : "박주머니",
      price : 39200
   }
]

buyHistory = buyHistory.map((history) => {
   for(let user of userList) {
      if(user.userKey == history.userKey) {
         return {
            ...user,
            ...history,
         }
      }
   }
})

buyHistory = buyHistory.map((h, i) => {
   return {
      ...h,
      index : i + 1,
   }
})

console.log(buyHistory);

console.log("---------------------------------------------------------------");

// filter
// return 값이 false 요소를 제외하고 true인 요소만 가져올 때
let numbers2 = [1, 6, 7, 8, 10, 11];
let tmp2 = [];

tmp2 = numbers2.filter(n => n % 2 === 0);
console.log(tmp2);

// userKey가 2인 것을 배열에서 모두 삭제
buyHistory = buyHistory.filter(h => h.userKey !== 2);
console.log(buyHistory);

// find()
// return 되는 조건의 값이 true인 첫 요소를 반환
// 모든 요소가 조건에 부합하지 않는다면(false를 리턴한다면) undefind를 반환
console.log(tmp2.find(function(n) {
   return n % 2 === 0;
}));

// findIndex();
// return 되는 조건의 값이 true인 첫 요소의 인덱스를 반환
// 모든 요소가 조건에 부합하지 않는다면(false를 리턴한다면) -1을 반환
console.log(tmp2.find(function(n) {
   return n % 2 === 1;
}));