/*
new kakao.maps.LatLng(위도,경도) : 지도와 마커를 출력할 때 필요한 위치 인스턴스 반환
new kakao.maps.Map(DOM, option) : 지도 인스턴스 반환
new kakao.maps.Marker({position : 위치 인스턴스}) : 특정 위치에 생성되는 마커 인스턴스를 반환

마커인스턴스.setMap(지도 인스턴스) : 기존 지도에 마커를 세팅해주는 함수
*/

//frame El
const mapContainer = document.querySelector("#map");

//map option (position instance, level)
const mapOptions = {
	center: new kakao.maps.LatLng(37.5803593, 127.0042622),
	level: 3
};

//map instance
const map = new kakao.maps.Map(mapContainer, mapOptions); //지도 인스턴스
/*
const markerPosition = new kakao.maps.LatLng(37.5803593, 127.0042622);
const marker = new kakao.maps.Marker({
	position: markerPosition
});
*/
//marker instance
const marker = new kakao.maps.Marker({ position: mapOptions.center });

//binding marker
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);
