console.log("Hello World");

/*
   [js의 변수 선언]
   1) var - 사용하지 않는다
   2) let
   3) const
*/

var name = "홍길동";
var age = 100;
var height = 190.7;
var isTrue = true;

var name = "심청";
console.log(name + " " + age + " " + height + " " + isTrue + "\n");

/*
   let은 var에서 같은 이름의 중복 생성을 하지 못하게 만든 자료형이다.
   다만 let과 var는 모두 값을 변경하는 것은 가능하다.
*/

// let name = "콩쥐";
// name = "팥쥐";

/*
   const는 상수를 표현하기 위한 자료형
   값을 변경할 수 없다.
*/

const name2 = "놀부"
// name2 = "흥부";

/*
   [js 네이밍 규칙]

   <변수 이름 지을 때>
   1) 일반적으로 영어를 사용
   2) 특수문자는 언더 스코어와 달러를 사용할 수 있음
   3) 숫자로 시작하면 안됨
   4) 키워드를 변수명으로 사용하면 안됨

   <네이밍 타입>
   1) camelCase   -> 대부분의 언어에서 많이 사용하며 단어의 시작마다 대문자로 구분해준다.
   2) snake_case  -> 파이썬에서 주로 사용하며 단어의 시작마다 언더바(_)로 구분해준다.
   3) PascalCase  -> c# 및 ms 계열의 언어에서 많이 사용하며 매단어 시작은 무조건 대문자로 한다.
 */

let $name = "김민수";
let _name = "최민식";

/*
   [Data Types]
   여섯 개의 원시 타입과 한 개의 Object 타입이 있다.

   1) Number
   2) String
   3) Boolean
   4) undefined
   5) null
   6) Symbol
   7) Object
      - Function
      - Array
      -Object
   ...
*/

// Number 타입
const age2 = 60;
const tampature = -10;
const pi = 3.14;

console.log(typeof age2);
console.log(typeof tampature);
console.log(typeof pi);

console.log("\n");

// String 타입
const str = "홍길동 76살";
console.log(typeof str);

console.log("\n");

// boolean 타입
const isTrue2 = true;
const isFalse2 = false;

console.log(typeof isTrue2);
console.log(typeof isFalse2);

console.log("\n");

/*
   undefined
   - 개발자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
   - undefined를 직접 넣어주는 것은 지양해야 한다. (직접 넣을 때는 null)
*/

let num2;
console.log(num2);

console.log("\n");

/*
   null 타입
   - undefined와 동일하게 값이 없음을 표시
   - 다만 js에서는 개발자가 직접 명시적으로 없는 값을 초기화할 때 사용
*/

let init = null;
console.log(init);

if(!init) {
   console.log("null이 아니다.");
}

console.log("\n");

/*
   Symbol 타입
   - 유일무이한 값을 생성할 때, 다른 원시값들과 다르게 Symbol 함수를 호출해서 사용
   - 타입과 값이 같더라도 서로 다른 값으로 취급한다.
*/

const tmp1 = '1';
const tmp2 = '1';

console.log(tmp1 == tmp2);

const sym1 = Symbol('1');
const sym2 = Symbol('1');

console.log(sym1, sym2);
console.log(sym1 === sym2);   // 타입도 값도 같지만 false 반환

console.log("\n");

/*
   Object 타입
   - key : value 쌍으로 이루어져있다.
   - Function도 넣을 수 있다.
*/

const man = {
   name : "홍길동",
   age : 66,
   address : "한양",
   job : "도적",
   printInfo : function() {
      console.log(this.name + "입니다.");
      return 10;
   }
}

console.log(typeof man);

man.job = "의적";
console.log(man);

let func1 = man.printInfo();  // return 값이 들어감
let func2 = man.printInfo;    // Function 값이 들어감

console.log(func1, func2);

console.log("\n");

/*
   Array 타입
   - 값을 리스트로 나열할 수 있는 타입
*/

const arr = [];
arr.push("빨");
arr.push("주");
arr.push("노");
arr.push("초");
arr.push("파");
arr.push("남");
arr.push("보");

console.log(arr.pop());       // 마지막 인덱스값 반환
console.log(arr[0], arr[1]);

console.log("\n");

// 타입의 비교
const num = 55;
console.log(num == "55");     // 형태만 같으면 타입이 달라도 true 반환
console.log(num === "55");    // 타입까지 비교

/*
   [이스케이프 문자]
   자바와 동일하게 사용한다.

   \n : 개행
   \t : 탭
   ...
*/