const mapContainer = document.querySelector("#map");
// const viewContainer = document.querySelector("#view");
const btnToggle = document.querySelector(".trafficToggle");

const mapOptions = {
	center: new kakao.maps.LatLng(37.5803593, 127.0042622),
	level: 5
};

let map = new kakao.maps.Map(mapContainer, mapOptions);
let marker = new kakao.maps.Marker({ position: mapOptions.center });
const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();
marker.setMap(map);
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

window.addEventListener("resize", () => {
	mapContainer.innerHTML = "";
	map = new kakao.maps.Map(mapContainer, mapOptions);
	marker.setMap(map);
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	btnToggle.classList.remove("on");
	btnToggle.innerText = "Traffic ON";
});

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

// 로드뷰 관련 roadview setting
const viewContainer = document.querySelector("#view");
const view = new kakao.maps.Roadview(viewContainer); //로드뷰 객체
const viewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
// var에서 const 변경하는 이유
// 스크립트의 내용 미숙
// 코드를 만들 때 api 문서를 이해하지 못한 상태로 ctrl+V햇구나 (오픈소스를 업데이트 하지 않은 상태로 옛날 코드 방치...)

// 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
viewClient.getNearestPanoId(mapOptions.center, 50, panoId => {
	//특정 좌표에서 반경 내 가장 가까운 로드뷰 파노라마 ID를 구한다 (50 : 반경(미터 단위))
	view.setPanoId(panoId, mapOptions.center); //panoId와 중심좌표를 통해 로드뷰 실행
});
