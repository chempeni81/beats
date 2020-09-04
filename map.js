let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 11
    });

    const coords = [
        [55.70, 37.55],
        [55.77, 37.69],
        [55.80, 37.57]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);