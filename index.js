//src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f57562ac0cf4a8d52ee496013f49dfef`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f57562ac0cf4a8d52ee496013f49dfef`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function append(data) {
    let container1 = document.getElementById("weather");
    let map = document.getElementById("gmap_canvas");
    container1.innerHTML = null;
  
    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;
  
    let div1 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KioOVSSr5tLbh3fNosNTDfTDft57frmReHZVHfCJZg&s";
    let min = document.createElement("p");
    min.innerText = `Min temp: ${data.main.temp_min}`;
    div1.append(min,img1);
  
    let div2 = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nTuFnbEGCv3mXcWiTuu073aAUXVcwKQ8_c6KeNj8&s";
    let max = document.createElement("p");
    max.innerText = `Max temp: ${data.main.temp_max}`;
    div2.append(max, img2);
  
    let div3 = document.createElement("div");
    let img3 = document.createElement("img");
    img3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLB2GyjSfZ5rcZrRJdgrsYFXlsSyo0j3alw&usqp=CAU";
    let current = document.createElement("p");
    current.innerText = `Current Temp: ${data.main.temp}`;
    div3.append(current, img3);

    let div4 = document.createElement("div");
    let img4 = document.createElement("img");
    img4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kBgU6njOc34NedQQNg51XrYd2u2TDIiNeA&usqp=CAU";
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${data.main.humidity}`;
    div4.append(humidity, img4);
  
    container1.append(city, div1, div2, div3, div4);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
  function getWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
  }