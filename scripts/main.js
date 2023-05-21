new WOW().init();

// map 

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.94366822276193,30.320574030339184],
        zoom: 12
    });

    myMap.controls.remove('default');

    var myPlacemark = new ymaps.Placemark([59.94366822276193,30.320574030339184], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'image/location.svg',
        iconImageSize: [20, 56],
      });
    
    myMap.geoObjects.add(myPlacemark); 
}
