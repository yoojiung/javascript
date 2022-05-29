# JavaScript Basic

## 자료형 ' , " 출력
```
console.log(`i'm groot`);
=> i'm groot
```
' or " 을 쓸려면 백틱(`)을 이용하자

***

## typeof 연산자
```
console.log(typeof 2)
=> Number
```

***

## 형 변환(type conversion)

```
console.log(Number('10')+Number('5'))
=> 15 
```
-원하는 type으로 변경이 가능하다  
-boolean이 숫자형으로 형 변환 되는경우 true는 1, false는 0으로 변환  
-boolean값으로 형변환 할 때는 보통 true가 나오지만,  
(''),0,NaN은 false 변환  
-js는 자동으로 형변환해서 계산해주기 때문에 규칙을 잘 알아야 함

***

## 형변환 산술연산
```js
console.log(4+'2') =>42
// +는 문자형에서 있기 때문에 6이 아닌 42가 출력
console.log(4+2) =>6
console.log(4-true) =>3
console.log(4*false) =>0
console.log(4/2) =>2
console.log('4'**true) =>4
console.log(4%'two') => NaN
// NaN값은 어떤 값을 계산을 해도 NaN 변환
```

***

## 형변환 비교연산
```js
console.log(1 ===1)// 일치,불일치 =>false
console.log(1 ===true) // =>false
console.log(1 == '1') //동등,부등 =>true
console.log(1== true) //=> true
```
-좀 더 정확한 코딩을 위해 ===인 일치연산자를 쓰자

 ***

## 템플릿 문자열(template strings)
```js
let year = 2018
let month = 3
let day = 11

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다`);
```
-템플릿 문자열을 이용해서 좀 더 쉽게 작성가능하다

***

## null , undefined 차이
-null : 의도적으로 표현할 때 =>사용하는 값  
-undefined : 값이 없다는 것을 =>확인하는 값

***

## 증가 , 감소 연산자
```js
// 다음 세 줄은 같은 의미입니다.
x = x + 1;
x += 1;
x++;
```

```js
// 다음 세 줄은 같은 의미입니다.
x = x - 1;
x -= 1;
x--;
```

***

## 옵셔널 파라미터(optional prapmeters)
-파라미터 값에 미리 값을 할당할 수 있다
```js
function introduce(name,age,nationality='한국') {
  console.log {name}
  console.log {age}
  console.log {nationality}
};
introduce('yoo',24,'미국'); //값을 모두 할당한 경우는 미국 할당값이 나옴
introduce('yoo',24); //함수에서 지정했기 때문에 3번째 매개변수를 꼭 지정해주지 않아도 된다
```

***

## 범위, 영역 (scope)
```js
let x = 3; //글로벌 변수 , 전역 변수 (global variable)
function myFunction() { //블록문 (block statement)
  let x = 3; //로컬변수, 지역변수(local variable)
  console.log(x);
};
```
-블록문에서 선언한 변수(로컬변수)는 블록문 안에서만 할당된다

***

## 상수(constant)
```js
const pi = 3.14; // 변하지 않는 값을 상수라고 한다
let radius = 0;
```
-상수는 이름을 지을 때 대문자와 (_)로 표기해준다

```js
// 싱수 이해
const X = 1500;

function myFunction() {
  X = 1500 * 1.5;
  console.log(X);
}

myFunction();
console.log(X);
=> error 
//3번 줄부터 myFunction이라는 함수를 선언하고 있는데요. 함수의 동작 부분에서 X의 값을 변경하려고 하고 있습니다.

//그런데 X는 const키워드로 선언한 상수이기 때문에 값의 변경이 불가합니다.
```

***

## if문
```js
if (조건부분) {
  동작부분
} else {
  조건이 아니라면
}
```

***

## else if
```js
if (조건부분) {
  동작부분
} else if(조건부분) {
  동작부분
}
 else {
  위 조건이 모두 아니라면
}
```

***

## switch문
```js

switch (비교할값) {
  case 조건값_1:
    동작부분;
    break
  case 조건값_2:
    동작부분;
    break
  default; //else 와 비슷하다
    동작부분;
}
```

***

## for 반복문(loop statement)
```js
for (초기화부분; 조건부분; 추가동작부분(옵션)) {
  동작부분
}
// ex
for (let i= 1,i<=10,i++) {
  console.log("코드잇 최고!");
}
```

***

## while 문
```js
while (조건부분) {
  동작부분
}
// ex
let i =1;
// while문은 글로벌 변수로 지정
while (i<=10) {
  console.log('test')
}
```
- 글로벌 변수를 인수처럼 쓸 수 있기 때문에 상황에 따라서 for문 과 while문을 적절히 섞어서 쓸 것

***

## break ,continue
```js
//break
let i= 1;

while (i<10) {
  console.log(i);
  if (i===7) {
    break; // 정지
  }
  i++;
}

for (let i= 1;i<10;i++) {
  console.log(i)
  if (i===7) {
    break; //for문을 빠져나옴
  }
}
```

```js
//continue
for (let i= 1;i<10;i++) {
  if (i%2===0) {
    continue;  //  if문을 건너뜀. 그래서 2의배수를 제외한다 // 조건부분을 무시하고 추가부분을 실행
  }
  console.log(i) // 1,3,5,7,9
}

let i= 1;
while(i<=10) {
  if (i%2==0) {
    i++; // i++; 를 넣어주는 이유: while문에는 추가부분이 없기 때문에 
    continue; 
  }
  console.log(i)
  i++;
}

```

# javascript deep

## id로 태그 선택하기
```js
const myTag = document.getElementById(id이름);
```
- 존재하지 않는 id값으로 태그를 선택하면 null값을 반환한다

***

## class 태그 선택하기
```js
document.getElementsByClassName('');
```
***

## 유사배열(Array-like object)
1. 숫자 형태의 indexing이 가능하다.  
2. length 프로퍼티가 있다.  
3. 배열의 기본 메소드를 사용할 수 없다.  
4. Array.isArray(유사배열)은 false다.  

>tips  
유사 배열은 위의 특징들을 가진 대부분의 형태를 가리키는 포괄적인 개념이기 때문에 정말 다양한 형태로 존재할 수 있습니다.
예를 들어 지난 시간에 봤던 HTMLCollection의 경우 for..of 문을 활용하는 데 문제는 없었지만 어떤 유사 배열의 경우에는 for..of문을 활용할 수 없는 경우도 있습니다.
배열의 기본 메소드를 사용할 수 없다고 했지만, 직접 구현해서 마치 배열처럼 사용할 수 있도록 만들 수도 있습니다.
하지만 직접 유사 배열을 만드는 게 아니라 이미 만들어진 유사 배열에 접근하는 경우에는 대부분 위 4가지 특징을 모두 가지고 있으니깐 잘 기억해 두시면 좋을 것 같습니다 :)  

>getElementsByClassName 메소드를 통해 존재하지 않는 class 값으로 태그를 선택하게 되면 그 값은 빈 HTMLCollelction이 됩니다. 

***

## css 선택자
```js
document.querySelector('css'); //한개 선택
document.querySelectorAll('css'); //여러개 선택
```

***

## 이벤트(event)와 버튼 클릭
```js
const btn = document.querySelector('#myBtn');

//이벤트 핸들링(event handling)
btn.onclick= function () { //이벤트 핸들러
  console.log('Hello')
}
```

***

>정리  

메소드 | 의미 | 결과
--|--|--
document.getElementById('id') |HTML id속성으로 태그 선택하기|	id에 해당하는 태그 하나 
document.getElementsByClassName('class')|HTML class속성으로 태그 선택하기|class에 해당하는 태그 모음(HTMLCollection)
document.getElementsByTagName('tag')|HTML 태그 이름으로 태그 선택하기|tag에 해당하는 태그 모음(HTMLCollection)
document.querySelector('css')|css 선택자로 태그 선택하기|css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
document.querySelectorAll('css')|css 선택자로 태그 선택하기|	css 선택자에 해당하는 태그 모음(NodeList)


