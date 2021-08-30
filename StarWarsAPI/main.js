function toggleDarkMode() {
  var bodyElement =document.getElementById("mainBackground")
  	  if ( bodyElement.style.background == "black") {
        bodyElement.style.background = "thistle"
    } else {
      bodyElement.style.background  = "black"
    }
    function obiWanInfo() {
       fetch('https://swapi.dev/api/people/10')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log('this is the whole object',data);
         console.log(data.name);
        document.getElementById("Obi").innerText = data.name;
        document.getElementById("eye-color").innerText = "eye color: "+ data.eye_color;
       })
       function obiWanMovie() {
          fetch('https://swapi.dev/api/films/2/')
           .then(function (response) {
             return response.json()
           })
           console.log('this is the whole object',data);
          console.log(data.name);
         document.getElementById("Obi").innerText = data.name;
         document.getElementById("title").innerText = "title: "+ data.title;
