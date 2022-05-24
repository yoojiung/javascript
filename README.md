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








