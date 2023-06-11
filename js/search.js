document.getElementById("search_btn").addEventListener('click', search_message);

// 검색어로 적절하지 않은 문자열을 담은 배열 – 전역 변수
const badWords = ["시발", "씨발", "병신"];

// 검색어를 검증하는 함수
function no_str(str) {
  for (const word of badWords) {
    if (str.includes(word)) {
      return false;
    }
  }
  return true;
}

// 검색어를 저장하는 배열 – 전역 변수
var search_array = [];
var MAX_SEARCH_COUNT = 10; 


function search_message() {
  const search_str = document.querySelector("#search_txt");
  if (search_str.value.length === 0) {
    alert("검색어가 비었습니다. 입력해주세요");
    return;
  }

  if (!no_str(search_str.value)) {  // 검색어가 적절하지 않은 경우
    alert(`${search_str.value}은(는) 검색어로 적절하지 않습니다.`);
    return  }

	
  alert("검색을 수행합니다!");
	
  // 검색어 개수가 10개 이상인 경우 배열에서 맨 앞 요소를 삭제한다.
  if (search_array.length >= MAX_SEARCH_COUNT) {
    search_array.shift();
  }	
	
	
  search_array.push(search_str.value);
  let text = document.getElementById("search_message").innerHTML = search_array.toString();

  // form 요소가 있는지 확인하고 호출
  let form = document.querySelector("#form_main");
  if (form) {
    form.submit();
  }
}






						 