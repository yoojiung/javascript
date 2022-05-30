const myTag = document.querySelector('#list-1');

// innerHTML
// 요소를 수정하거나 추가할 때 사용
myTag.innerHTML+='<li>Exotic</li>'; //추가
myTag.innerHTML='<li>Exotic</li>'; //수정

// outerHTML
// html 전체를 문자열로 반환
console.log(myTag.outerHTML);

// textContent
// innerHTML과 비슷하지만 text만 수정이 가능하다
console.log(myTag.textContent);
myTag.textContent = 'new text';

