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
