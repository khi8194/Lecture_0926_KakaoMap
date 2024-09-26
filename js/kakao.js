const mapContainer = document.querySelector("#map");
// const [btnOn, btnOff] = document.querySelectorAll("nav button");
const btnToggle = document.querySelector(".trafficToggle");

const mapOptions = {
	center: new kakao.maps.LatLng(37.5803593, 127.0042622),
	level: 3
};

const map = new kakao.maps.Map(mapContainer, mapOptions);
const marker = new kakao.maps.Marker({ position: mapOptions.center });

marker.setMap(map);

const mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

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
