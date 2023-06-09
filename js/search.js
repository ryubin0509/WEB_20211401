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
const search_array = [];

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
  search_array.push(search_str.value);
  let text = document.getElementById("search_message").innerHTML = search_array.toString();

  // form 요소가 있는지 확인하고 호출
  let form = document.querySelector("#form_main");
  if (form) {
    form.submit();
  }
}






/*function search_message(){    alert("검색을 수행합니다!"); 
function search_message(){ let search_str = document.querySelector("#search_txt"); // 변수에 저장
 if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교
	 alert("검색어가 비었습니다. 입력해주세요"); } 
else{
	alert("검색을 수행합니다!");  
    search_array.push(search_str.value); // 배열에 검색어 추가  
// let text = document.getElementById("search_message").innerHTML = search_str.value;
let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환  
	document.querySelector("#form_main");   
if(form){
	form.submit(); 
}
}
						 }

//cument.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가   //onsole.log


/*documentment.getElementById("search_btn").addEventListener('click',search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
   let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
      alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }



/*document.getElementById("search_btn").addEventListener('click', search_message);


function search_message(){
	alert("검색을 수행합니다!");
let search_str = document.querySelector("#search_txt"); // 변수에 저장
if(search_str.value.length === 0){
  alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");

	search_array.push(search_str.value); // 배열에 검색어 추가
    let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
} */



/* document.getElementById("객체 아이디").innerHTML = cars; // 이름 참조
		for (var i = 0; i < all.length; i++) { // for문
    console.log(all[i]); 
}

   console.log(search_str.value); // 콘솔에 출력 */


						 