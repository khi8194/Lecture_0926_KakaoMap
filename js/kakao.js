const mapContainer = document.querySelector("#map");

const mapOptions = {
	center: new kakao.maps.LatLng(37.5803593, 127.0042622),
	level: 3
};

const map = new kakao.maps.Map(mapContainer, mapOptions);
const marker = new kakao.maps.Marker({ position: mapOptions.center });

marker.setMap(map);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
//맵 위에 올릴 타입 컨트롤 인스턴스 생성
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
//타입컨트롤러의 위치값 지정하는 함수
//위성지도 타입 변경 컨트롤러 추가 (BOTTOMRIGHT TOPLEFT TOPRIGHT)
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
//맵 위에 올릴 줌 컨트롤 인트턴스 생성
const zoomControl = new kakao.maps.ZoomControl();
//줌 컨트롤러의 위치값 지정하는 함수
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
