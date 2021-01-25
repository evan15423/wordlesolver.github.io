<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>

<script>
	var osmUrl = 'https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png',
		osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});

	var map = L.map('map').setView([40.746,-73.995], 10).addLayer(osm);

	L.circleMarker([40.746, -73.995], {radius: 100})
		.addTo(map)
		.bindPopup('New York City (HQ)<br>Contact: Mike<br><a target="_blank" href="https://goo.gl/maps/1pRiJ3yL2ytVaGhP7">123 Eighth Avenue, 15th Floor<br>New York, NY 10001</a><br>Phone: (212) 555-5555<br>Fax: (212) 555-555')
		.openPopup();
</script>
