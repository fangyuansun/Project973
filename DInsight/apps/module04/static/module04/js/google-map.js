var initCenter = new google.maps.LatLng(33, 105);
var geocoder;
var map;

var points = [
  '天津市',
  '烟台市',
  '山东省',
  '郑州市',
  '河南省',
  '湖南省',
  '贵州省',
  '郴州市',
  '福建省',
  '广州市',
  '台湾省'
];

var topicString = [
  '注胶虾',
  '农药残留',
  '速成鸡',
  '柴鸡',
  '地沟油',
  '黄金大米',
  '假酒',
  '铅超标',
  '病死猪肉',
  '假鸡蛋',
  '瘦肉精'
];

function initializeMap() {
  geocoder = new google.maps.Geocoder();
  var mapOptions = {
    center: initCenter,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // Place marker
  /*google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng, 'null');
  });*/

  for (var i = 0; i < points.length; ++i)
  {
    codeAddr(points[i], topicString[i]);
  }
}

function codeAddr(addr, topic)
{
  geocoder.geocode({'address': addr}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK)
    {
      placeMarker(results[0].geometry.location, '<p>'+addr+':'+topic+'</p>');
    }
    else
    {
      alert('Not found' + status);
    }
  });
}

function placeMarker(location, str)
{
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  var infoWindow = new google.maps.InfoWindow({
    /*content: '纬度: ' + location.lat() + '<br />经度: ' + location.lng()*/
    content: str
  });

  infoWindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', initializeMap);
