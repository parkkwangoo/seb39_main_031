import { options, towns } from "../../types/OptionType";

export const regionOptions: options = [
  { value: "지역을 선택해주세요", name: "지역을 선택해주세요" },
  { value: "서울특별시", name: "서울특별시" },
  { value: "경기도", name: "경기도" },
];

export const townOptions: towns = [
  {
    서울특별시: [
      { value: "동네를 선택해주세요", name: "동네를 선택해주세요" },
      { value: "강남구", name: "강남구" },
      { value: "강동구", name: "강동구" },
      { value: "강북구", name: "강북구" },
      { value: "강서구", name: "강서구" },
      { value: "관악구", name: "관악구" },
      { value: "광진구", name: "광진구" },
      { value: "구로구", name: "구로구" },
      { value: "금천구", name: "금천구" },
      { value: "노원구", name: "노원구" },
      { value: "도봉구", name: "도봉구" },
      { value: "동대문구", name: "동대문구" },
      { value: "동작구", name: "동작구" },
      { value: "마포구", name: "마포구" },
      { value: "서대문구", name: "서대문구" },
      { value: "서초구", name: "서초구" },
      { value: "성동구", name: "성동구" },
      { value: "성북구", name: "성북구" },
      { value: "송파구", name: "송파구" },
      { value: "양천구", name: "양천구" },
      { value: "영등포구", name: "영등포구" },
      { value: "용산구", name: "용산구" },
      { value: "은평구", name: "은평구" },
      { value: "종로구", name: "종로구" },
      { value: "중구", name: "중구" },
      { value: "중랑구", name: "중랑구" },
    ],
  },

  {
    경기도: [
      { value: "동네를 선택해주세요", name: "동네를 선택해주세요" },
      { value: "가평군", name: "가평군" },
      { value: "고양시 덕양구", name: "고양시 덕양구" },
      { value: "고양시 일산동구", name: "고양시 일산동구" },
      { value: "고양시 일산서구", name: "고양시 일산서구" },
      { value: "과천시", name: "과천시" },
      { value: "광명시", name: "광명시" },
      { value: "광주시", name: "광주시" },
      { value: "구리시", name: "구리시" },
      { value: "군포시", name: "군포시" },
      { value: "김포시", name: "김포시" },
      { value: "남양주시", name: "남양주시" },
      { value: "동두천시", name: "동두천시" },
      { value: "부천시 소사구", name: "부천시 소사구" },
      { value: "부천시 오정구", name: "부천시 오정구" },
      { value: "부천시 원미구", name: "부천시 원미구" },
      { value: "성남시 분당구", name: "성남시 분당구" },
      { value: "성남시 수정구", name: "성남시 수정구" },
      { value: "성남시 중원구", name: "성남시 중원구" },
      { value: "수원시 권선구", name: "수원시 권선구" },
      { value: "수원시 영통구", name: "수원시 영통구" },
      { value: "수원시 장안구", name: "수원시 장안구" },
      { value: "수원시 팔달구", name: "수원시 팔달구" },
      { value: "시흥시", name: "시흥시" },
      { value: "안산시 단원구", name: "안산시 단원구" },
      { value: "안산시 상록구", name: "안산시 상록구" },
      { value: "안성시", name: "안성시" },
      { value: "안양시 동안구", name: "안양시 동안구" },
      { value: "안양시 만안구", name: "안양시 만안구" },
      { value: "양주시", name: "양주시" },
      { value: "양평군", name: "양평군" },
      { value: "여주시", name: "여주시" },
      { value: "연천군", name: "연천군" },
      { value: "오산시", name: "오산시" },
      { value: "용인시 기흥구", name: "용인시 기흥구" },
      { value: "용인시 수지구", name: "용인시 수지구" },
      { value: "용인시 처인구", name: "용인시 처인구" },
      { value: "의왕시", name: "의왕시" },
      { value: "의정부시", name: "의정부시" },
      { value: "이천시", name: "이천시" },
      { value: "파주시", name: "파주시" },
      { value: "평택시", name: "평택시" },
      { value: "포천시", name: "포천시" },
      { value: "하남시", name: "하남시" },
      { value: "화성시", name: "화성시" },
    ],
  },
];

export const category: options = [
  { value: "카테고리를 선택해주세요", name: "카테고리를 선택해주세요" },
  { value: "인기매물", name: "인기매물" },
  { value: "식품", name: "식품" },
  { value: "생활가전", name: "생활가전" },
  { value: "가구/인테리어", name: "가구/인테리어" },
  { value: "여성의류", name: "여성의류" },
  { value: "여성잡화", name: "여성잡화" },
  { value: "남성의류/잡화", name: "남성의류/잡화" },
  { value: "유아동", name: "유아동" },
  { value: "디지털기기", name: "디지털기기" },
  { value: "차량용품", name: "차량용품" },
  { value: "도서", name: "도서" },
  { value: "뷰티/미용", name: "뷰티/미용" },
  { value: "스포츠/레저", name: "스포츠/레저" },
  { value: "티켓/교환권", name: "티켓/교환권" },
  { value: "반려동물용품", name: "반려동물용품" },
  { value: "기타 물품", name: "기타 물품" },
];
