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

***

## 객체(object)
- {key:value}
- Property Name 주의 사항  
 1.첫 번째 글자는 반드시 문자,밑줄,달러기호 중 하나로 시작  
 2. 띄어쓰기 금지  
 3. 하이픈 금지  

***

### 데이터 접근하기
```js
ex ) 
let codeit = {
  name:'lulu',
  age:21,
  isVeryNice : true
  bestCourse: {
    title:'leesu',
    age:24
  }
}
// 점 표기법 (objectName.propertyName)
console.log(codeit.name);

// 대괄호 표기법(objectName['propertyName'] )
console.log(codeit['isVeryNice'])

// 객체 안에 객체 접근
console.log(codeit.bestCourse.title);

// 데이터 추가하기
// 아래와 같이 추가하면 된다
codeit.lang = 'java';

// 데이터 삭제하기
delete codeit.age;

// 'propertyName' in object
// 객체 안에 프로포터리 있는 지 확인 
// boolean 값 return
console.log('name' in codeit)
```

***

## for..in
```js
let codeit = {
  name:'codeit',
  bornYear:2020,
  isVeryNice:true,
  worstCourse:null,
  bestCourse:'javascript'
}

for (let key in codeit) {
  console.log(key);
  console.log(codeit[key])
}
```

***

## Date 객체
```js
// 데이트객체 생성
let myDate = new Date();
//요일, 월, 일, 년도, 시간, 시긴대 순서로 출력
console.log(myDate);
// +1000밀리초 추가 
let myDate = new Date(1000);
// new Date('YYYY-MM--DD')
let myDate = new Date(2020-02-11);
// new Date(YYYY,MM,DD,HH,mm,ss,ms)
//  YYYY DD 이 후는 생략가능
// tips 요일은 1이 월요일이 아닌 0이 월요일이다

let myDate = new Date();

//간단하게 시간 정보 알아내기
console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

// getTime()을 통해서 특정한 날짜로 부터 얼마나 지났는지 확인 할 수 있다
let myDate = new Date(2017,4,18,19,11,16);
console.log(myDate.getTime())

// 타임스탬프(time stamp) : myDate가 특정한 날로 부터 몇 밀리초가 지났는지 확인
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
```

***

## 배열(Array)
- 여러개의 데이터를 []를 통해 순서있는 집합이다  
- 데이터를 가져올 때는 배열[index] 가져 올 것
- [배열mdnsite](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
```js
let className = [
  '유리','나미리','철수','짱구'
]
// 데이터 추가
className[5]='훈이'
// 데이터 수정
className[0]='토끼인형'
// 데이터 삭제
// splice(startIndex, deleteCount, item)
// deleteCount를 설정하지 않으면 startIndex를 제외하고 다 삭제
// deleteCount 값을 0을 넣는다면 삭제하지 않고 아이템들을 추가할 수 있다
className.splice(1,1,'짱구엄마','짱구아빠')
result = ['유리','짱구엄마','짱구아빠','나미리','철수','짱구']
```

***

## 배열 메소드

### 배열의 첫 요소를 삭제 :
- shift()
### 배열의 마지막 요소를 삭제 : 
- pop()
### 배열의 첫 요소로 값 추가
- unshift(value)
```js
ex)
className.unshift('채송화')
```
### 배열의 마지막 요소로 값 추가
- push(value)

### 배열에서 특정 값 찾기 (indexOf / lastIndexOf)
- 배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.  
- 1.만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
- 2.포함되어 있지 않다면, -1이 리턴됩니다.
- 3.여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.

### 배열에서 특정 값이 있는지 확인하기 (includes)
- indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려줍니다.
하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있는데요. 그럴때는 includes 라는 메소드를 활용하면 됩니다.

- array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.

### 배열 뒤집기 (reverse)
- reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있습니다.

***

## for..of반복문
- for (변수 of 배열) {
  동작부분;
}

## 다차원 배열 
```js
let twoDimensional = [[1,2][3,4]]
// 2의 값을 꺼내고 싶다면
twoDimensional[0][1]
```
 
***

## 숫자표현법
```js
let millionaire = 1000000000;
let myNumber = 1e9; // 자수 표기법
// 지수표가법
// 알파벳 e의 왼쪽에 있는 숫자에 오른쪽에 있는 수만큼 10의 거듭제곱을 곱한다 , 알파벳 e의 오른쪽 값이 음수일 경우에는 이 숫자만큼 10의 거듭제곱으로 나누는 의미
둘 다 똑같은 표기법이다

console.log(25e5 ===2500000);
console.log(5.3e3 ===5300);
console.log(-6.1e8 ===6100000000);

//16진법
0xff; // 255

//8진법
0o377 // 255

//2진법
0b1111111; // 255
```

***

## 숫자형 메소드

### toFixed(0~100)
- 파라미터로 받은 값을 소수점을 고정해준다
- 문자형으로 출력되니 주의 할 것!
- 숫자형으로 사용할려면 Number 형 변환
```js
let myNumber = 0.159157;
console.log(myNumber.toFixed(2)) //0.16 
```

### toString(2~36)
- 파라미터로 받은 값을 2,8,16진법으로 변환
- 문자형으로 출력되니 주의 할 것
```js
let myNumber = 255
console.log(myNumber.toString(2)) //1111111
console.log(myNumber.toString(8)) // 377
console.log(myNumber.toString(10)) // 255
console.log(myNumber.toString(16)) // ff

// tips !
// 정수형 값을 출력하고 싶다면 ..을 입력해야 한다
console.log(255..toString(2)) //1111111
```

### Tips !
```js
console.log(Number(123))
console.log(+123)
+기호를 넣어주면 자동으로 Number로 형변환이 된다
```

***

## Math()

### 절댓값 (Absolute Number)
- Math.abs(x)를 하면 x의 절댓값이 리턴됩니다.
```js
console.log(Math.abs(-10));
console.log(Math.abs(10));
```

### 최댓값 (Maximum)
- Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴됩니다.
```js
console.log(Math.max(2, -1, 4, 5, 0)); //5
```

### 최솟값 (Minimum)
- Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴됩니다.

### 거듭제곱 (Exponentiation)
- Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴됩니다.
```js
console.log(Math.pow(2, 3)); //8
console.log(Math.pow(5, 2)); //25
```

### 제곱근 (Square Root)
- Math.sqrt(x)를 하면 x의 제곱근이 리턴됩니다.
```js
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(49)); //7
```

### 반올림 (Round)
- Math.round(x)를 하면 x의 반올림된 값이 리턴됩니다. 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려갑니다.
```js
console.log(Math.round(2.3)); //2
console.log(Math.round(2.4)); //2
console.log(Math.round(2.49)); //2
console.log(Math.round(2.5)); //3
console.log(Math.round(2.6)); //3
```

### 버림과 올림 (Floor and Ceil)
- Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다. 이 경우, 소수 부분이 얼마 인지와는 상관이 없습니다.
```js
console.log(Math.floor(2.4)); //2
console.log(Math.floor(2.49)); //2 
console.log(Math.floor(2.8)); //2
console.log('-');             //-
console.log(Math.ceil(2.4)); //3
console.log(Math.ceil(2.49)); //3
console.log(Math.ceil(2.8)); //3
```

### 난수 (Random)
- Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴됩니다.

***

## 문자열 다루기 

```js
let myString = 'Hi Codeit!';

//요소탐색
console.log(myString.indexOf('i')); //앞부터
console.log(myString.lastindexOf('i')); //뒤부터

//요소접근
console.log(myString[3]); //i //대괄호표기법
console.log(myString.charAt(3)) // i //charAt 메소드

//부분 문자열 접근 slice(start, end)
console.log(myString.slice(0,2)); // Hi
console.log(myString.slice(3)); // Codeit!
console.log(myString.slice()); // Hi Codeit!

//문자열 길이
console.log(myString.length) //9  // length 프로퍼티

//대소문자 변환
console.log(myString.toUpperCase()) // 대문자
console.log(myString.toLowerCase()) // 소문자

// 양 끝 공백
console.log(myString.trim()); // trim 메소드 
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

***

## window: 전역객체 (global object)
[window mdn](https://developer.mozilla.org/ko/docs/Web/API/Window)

***

## DOM: 문서객체모델(document object model)
- html tags를 자유롭게 자바스크립트에서 사용할 수 있다 

***

## console vs dir
1. 출력하는 자료형이 다르다  
- dir메소드는 문자열 표시 형식으로 콘솔에 출력

2. log는 값 자체, dir은 객체 속성에  
- log 메소드는 파라미터로 전달받은 값을 위주로 출력하는 반면, dir 메소드는 객체의 속성을 좀 더 자세하게 출력합니다.

3. log는 여러 개 , dir은 하나만  
- log 메소드는 여러 값을 쉼표로 구분해서 전달하면 전달받은 모든 값을 출력하는 반면, dir 메소드는 여러 값을 전달하더라도 첫 번째 값만 출력합니다.  

4. DOM  
- log 메소드는 대상을 HTML 형태로 출력하고, 객체의 속성에 좀 더 중점을 둔 dir 메소드는 대상을 객체 형태로 출력합니다.

***

## DOM TREE
[DOM트리](https://dom.spec.whatwg.org/#node)
- 객체 : 노드(node)  
- 태그를 표현하는 노드는 요소노드(element node)  
- 문자를 표현하는 노드는 텍스트노드(text node)  
- 텍스트노드는 요소의 자식 노드이며 , 자식노드를 가질 수 없다 

### node 선택
프로퍼티 | 유형 | 결과
--|--|--
element.children|	자식 요소 노드|	element의 자식 요소 모음(HTMLCollection)
element.firstElementChild	|자식 요소 노드|	element의 첫 번째 자식 요소 하나
element.lastElementChild |	자식 요소 노드|	element의 마지막 자식 요소 하나
element.parentElement |	부모 요소 노드 |	element의 부모 요소 하나
element.previousElementSibling |	형제 요소 노드|	element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
element.nextElementSibling	|형제 요소 노드	|element의 다음(next) 혹은 우측(right)에 있는 요소 하나

### 모든노드 이동 프로퍼티
프로퍼티 |	유형	| 결과
--|--|--
node.childNodes |	자식 노드	|node의 자식 노드 모음(NodeList)
node.firstChild |	자식 노드	| node의 첫 번째 자식 노드 하나
node.lastChild |	자식 노드 |	node의 마지막 자식 노드 하나
node.parentNode |	부모 노드 |	node의 부모 요소 하나
node.previousSibling | 형제 노드 |	node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
node.nextSibling |	형제 노드 |	node의 다음(next) 혹은 우측(right)에 있는 노드 하나

## 요소 노드 주요 프로퍼티
1. element.innerHTML  
- 요소 노드 내부의 HTML 코드를 문자열로 리턴해 줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)  
```js
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
```
- 요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용됩니다. (내부에 있던 값을 완전히 새로운 값으로 교체하기 때문에 주의해서 사용해야해요!)  
```js
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Exotic</li>';
console.log(myTag.innerHTML);
```

2. element.outerHTML  
- 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
```js
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
```
- outerHTML은 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의해야 합니다.
```js
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';
```

3. element.textContent
- 요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
```
- 새로운 값을 할당하면 innerHTML과 마찬가지로 내부의 값을 완전히 새로운 값으로 교체 합니다.
```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
myTag.textContent = 'new text!';
```
- 하지만 textContent는 말그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리한다는 점, 꼭 기억해주세요!
