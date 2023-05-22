new WOW().init();

// map 

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.94366822276193,30.320574030339184],
        zoom: 12
    });

    myMap.controls.remove('default');

    var myPlacemark = new ymaps.Placemark([59.944979063772884,30.319151457148198], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'image/location.svg',
        iconImageSize: [30, 66],
      });
    
    myMap.geoObjects.add(myPlacemark); 
}
