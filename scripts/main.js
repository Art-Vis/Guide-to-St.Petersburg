new WOW().init();


// map 

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.94366822276193,30.320574030339184],
        zoom: 12
    });

    myMap.controls.remove('default');

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [59.94366822276193,30.320574030339184] // координаты точки
        }
    });
    
    myMap.geoObjects.add(myGeoObject); 
}
