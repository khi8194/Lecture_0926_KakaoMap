const mapContainer = document.querySelector("#map");
const btnToggle = document.querySelector(".trafficToggle");
const btnReset = document.querySelector(".btnReset");

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

//리셋 버튼 클릭시 지도위치 가운데로 이동
btnReset.addEventListener("click", () => map.panTo(mapOptions.center));

const viewContainer = document.querySelector("#view");
const view = new kakao.maps.Roadview(viewContainer);
const viewClient = new kakao.maps.RoadviewClient();
const btnViewToggle = document.querySelector(".viewToggle");
const [mapEl, viewEl] = document.querySelectorAll(".frame > figure");

viewClient.getNearestPanoId(mapOptions.center, 50, panoId => {
	view.setPanoId(panoId, mapOptions.center);
});

kakao.maps.event.addListener(view, "init", () => {
	new kakao.maps.Marker({
		position: mapOptions.center,
		map: view
	});
});

btnViewToggle.addEventListener("click", e => {
	e.target.classList.toggle("on");

	if (e.target.classList.contains("on")) {
		e.target.innerText = "Roadview OFF";
		viewEl.classList.add("on");
		mapEl.classList.remove("on");
	} else {
		e.target.innerText = "Roadview ON";
		viewEl.classList.remove("on");
		mapEl.classList.add("on");
	}
});
