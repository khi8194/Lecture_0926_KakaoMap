const mapContainer = document.querySelector("#map");
// const [btnOn, btnOff] = document.querySelectorAll("nav button");
const btnToggle = document.querySelector(".trafficToggle");

const mapOptions = {
	center: new kakao.maps.LatLng(37.5803593, 127.0042622),
	level: 5
};

//스크립트가 처음 로드된 시점에 mapOption안에 포함되어 있는 위치값을 기준으로 지도 인스턴스가 생성되고 끝
//이슈사항 : 지도 인스턴스가 처음 생성된 시점에서 위치값이 고정되어 있기 때문에 브라우저 리사이즈시 위치 중앙이 틀어짐
//해결방법 : 브라우저 리사이즈 할때마다 지도 인스턴스를 다시 생성
// const map = new kakao.maps.Map(mapContainer, mapOptions);
// const marker = new kakao.maps.Marker({ position: mapOptions.center });

//브라우저 리사이즈 될때마다 map변수에 변경된 값을 재반영해야 되므로 let 방식으로 변수 선언
let map = new kakao.maps.Map(mapContainer, mapOptions);
let marker = new kakao.maps.Marker({ position: mapOptions.center });
const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();
marker.setMap(map);
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//브라우저 리사이즈 이벤트가 발생할때마다
window.addEventListener("resize", () => {
	//리사이즈 될때마다 중첩되는 엘리먼트 요소들을 일단은 지워서 초기화
	mapContainer.innerHTML = "";
	//기존 map, marker 변수에 변경된 인스턴스 정보값을 덮어쓰기 처리
	map = new kakao.maps.Map(mapContainer, mapOptions);
	marker.setMap(map);
	//리사이즈 될때마다 컨트롤 패널 다시 추가
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	//리사이즈시 강제 토글버튼 초기화
	btnToggle.classList.remove("on");
	btnToggle.innerText = "Traffic ON";
});

// const mapTypeControl = new kakao.maps.MapTypeControl();
// map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

// const zoomControl = new kakao.maps.ZoomControl();
// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
//지도 인스턴스에 교통량 정보 레이어 추가
// map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

// 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
// map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

//미션1- traffic ON 버튼 클릭 시 교통량 레이어 활성화, traffic OFF 버튼 클릭시 교통량 레이어 비활성화
//미션2- 토글버튼 : 버튼 하나로 위의 기능을 껐다 켰다 하도록 설정

// btnOn.addEventListener("click", () => map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC));
// btnOff.addEventListener("click", () => map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC));

btnToggle.addEventListener("click", e => {
	e.target.classList.toggle("on");

	if (e.target.classList.contains("on")) {
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "Traffic OFF";
	} else {
		map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "Traffic ON";
	}
});
