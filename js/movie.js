const dateInput = document.querySelector("#date");
// date 날짜 항상 어제 날짜까지만 가능하도록
const today = () => {
  // 오늘 날짜
  const date = new Date();
  // 어제 날짜
  date.setDate(date.getDate() - 1);
  console.log(date);
  return date.toISOString().split("T")[0];
};
dateInput.max = today();

async function load(date) {
  // 사용자의 날짜를 입력받아서 해당 날자의 일별 박스 오피스 보여주기
  //   const response = await fetch(
  //     "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c65bc32a37635c9f6f036815d6e5b16b&targetDt=20260805",
  //   );
  const url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c65bc32a37635c9f6f036815d6e5b16b&targetDt=";
  const requestUrl = url + date;
  const response = await fetch(requestUrl);
  try {
    const data = await response.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let result = "";
    dailyBoxOfficeList.forEach((item) => {
      result += `<tr>`;
      result += `<td>${item.rank}</td>`;
      result += `<td>${item.rankInten}</td>`;
      result += `<td><a href='${item.movieCd}' > ${item.movieNm}</a></td>`;
      result += `<td>${item.openDt}</td>`;
      result += `<td>${item.audiCnt}</td>`;
      result += `<td>${item.audiAcc}</td>`;
      result += `<td>${item.salesAcc}</td>`;
      result += `</tr>`;
    });

    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = result;
    table.style.display = "block";
    const position = Number(result.indexOf("href"));
    const movieCd = result.substring(position + 6, position + 14);
    console.log(movieCd);
    result.movieNm.addEventListener("click", (e) => {
      load2(movieCd);
    });
  } catch (error) {
    console.log(error);
  }
}

// 사용자가 날짜를 변경하면 선택된 날짜 가져와서 데이터 요청하러 가기
dateInput.addEventListener("change", (e) => {
  const selDate = e.target.value;
  console.log(selDate);
  // selDate : 2026-08-05 => 20260805
  // selDate.replace("-", "").replace("-", "")
  // selDate.split("-").join
  load(selDate.split("-").join(""));
});

// 영화명 클릭 시 영화상세정보 가져와서 화면에 보여주기
// 1) movieCD 가져오기 : href
// 2) a 태그 기능 중지 : e.prevrentDefault()

async function load2(movieCd) {
  const url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=c65bc32a37635c9f6f036815d6e5b16b&movieCd=";
  const requestUrl2 = url + movieCd;
  const response2 = await fetch(requestUrl2);
  try {
    const data2 = await response2.json();
    const movieInfo = data2.movieInfoResult.movieInfo;
    console.log(movieInfo);
    let result2 = "";
    movieInfo.forEach((item2) => {
      result2 += `<tr>`;
      result2 += `<td>${item2.movieCd}</td>`;
      result2 += `<td>${item2.movieNm}</td>`;
      result2 += `<td>${item2.prdtYear}</td>`;
      result2 += `<td>${item2.showTm}</td>`;
      result2 += `<td>${item2.openDt}</td>`;
      result2 += `<td>${item2.typeNm}</td>`;
      result2 += `<td>${item2.genreNm}</td>`;
      result2 += `</tr>`;
    });

    const table2 = document.querySelector("table");
    const tbody2 = table2.querySelector("tbody");
    tbody2.innerHTML = result2;
    table2.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
