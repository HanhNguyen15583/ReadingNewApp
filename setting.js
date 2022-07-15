// let sampledata = [{
//   "title": "Chinese Boeing jet crashes in mountains with 132 on board, no sign of survivors",
//   "timepublish": "2022-03-21T13:15:11Z",
//   "description": "China Eastern said the cause of the crash, in which the plane descended at 31,000 feet a minute according to flight tracking website FlightRadar24, was under investigation. The airline said it had provided a hotline for relatives of those on board and sent a working group to the site.",
//   "image": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/27_06_2019_18_36_44_9180289.png?width=920&format=jpeg",
//   "url" :"https://www.reuters.com/world/china/china-eastern-airlines-passenger-jet-has-accident-guangxi-state-media-says-2022-03-21/"
// },
// {
//   "title": "China usa remédio da Pfizer para conter surtos de covid",
//   "timepublish": "2022-03-21T13:14:37Z",
//   "description": "Para conter surto de casos da covid-19, autoridades de saúde da China adotam um novo antiviral, de uso oral. Medicamento da Pfizer recebe o nome de Paxlovid",
//   "image": "https://t.ctcdn.com.br/bGAPQy7Q_lMOzYBKqGcawtdAB0I=/1400x788/smart/i552997.jpeg",
//   "url" :"https://www.reuters.com/world/china/china-eastern-airlines-passenger-jet-has-accident-guangxi-state-media-says-2022-03-21/"  
// }
// ]
// let sampleDataSearch = [{
//   "title": "Chinese Plane Crash: Boeing 737-800 and Its History of Fatal Crashes",
//   "timepublish": "2022-03-21T13:14:18Z",
//   "description": "A China Eastern Airlines Boeing 737-800 with 132 people on board crashed in mountains in southern China on a domestic flight on Monday following a sudden descent from cruising altitude.",
//   "image": "https://images.news18.com/ibnlive/uploads/2022/03/boeing-737-800_2-164786843416x9.png",
//   "url" :"https://www.reuters.com/world/china/china-eastern-airlines-passenger-jet-has-accident-guangxi-state-media-says-2022-03-21/"  

// },
// {
//   "title": "Plane Crash Prompts China Eastern Airlines to Ground All Boeing 737-800 Aircraft",
//   "timepublish": "2022-03-21T13:12:46Z",
//   "description": "Video footage of the crash site posted online appeared to show smoke billowing from a forested area, along with remains of the aircraft.",
//   "image": "https://d.newsweek.com/en/full/2005066/china-crash.jpg",
//   "url" :"https://www.reuters.com/world/china/china-eastern-airlines-passenger-jet-has-accident-guangxi-state-media-says-2022-03-21/"  

// }
// ]

// function searchNew() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// };

// function closeClick() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   var modal = document.getElementById("myModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// var allnews = new Array();
// function getHeadlineData() {
//   var allnews = new Array();
//   $.ajax({
//     url: "https://gnews.io/api/v4/top-headlines?token=1af56f6c3d0570296e5dfa080a1ed7a0",
//     async: false,
//     type: 'GET',
//     data: {
//       //key: 'value',
//     },
//     success: function (data) {
//       let numberar = data.totalArticles
//       console.log("so bai bao: " + numberar)
//       let dataartical = data.articles
//       let n = dataartical.length

//       for (var i = 0; i < n; i++) {
//         let jsona = dataartical[i]
//         let image = jsona.image;
//         let title = jsona.title;
//         let newUrl = jsona.url;
//         let timepublish = jsona.publishedAt;
//         let description = jsona.description;
//         let anews =
//         {
//           "title": title,
//           "url" : newUrl,
//           "timepublish": timepublish,
//           "description": description,
//           "image": image
//         }
//         allnews.push(anews);
//       }
//       document.getElementById("contentnews").innerHTML = `${allnews.map(NewsTemplate).join("")}`;
//     },
//     error: function (error) {
//       console.log("Loi nhan du lieu: " + error)

//     },
//   })

// }

// function NewsTemplate(anew) {
//   return `
//     <div class="data-setting">
//       <img class="data-img" src="${anew.image}">
//       <h2><a href = "${anew.url}" target="_blank">${anew.title}</a></h2>
//       <br>
//       <p>${anew.timepublish}</p>
//       <br>
//       <p class="data-description">${anew.description}</p>
//     </div>
//   `;
// }

// window.onload = function () {
//  // getHeadlineData();
//   // let dataLoadAuto = allnews;
//   let dataLoadAuto = sampledata;
//   document.getElementById("contentnews").innerHTML = `${dataLoadAuto.map(NewsTemplate).join("")}`;
// }

// var token = "1af56f6c3d0570296e5dfa080a1ed7a0"

// function SearchGnewData() {
//   allnews = new Array();
//   document.getElementById("contentnews").innerHTML = ""
//   let kw = document.getElementById("kwInput").value;
//   if (kw != "" && isNaN(kw)) {
//     $.ajax({
//       url: "https://gnews.io/api/v4/search",
//       type: 'GET',
//       data: {
//         'q': kw,
//         'token': token
//       },
//       success: function (data) {
//          console.log("du lieu lay ve: " + JSON.stringify(data));
//         let numberar = data.totalArticles
//         console.log("so bai bao: " + numberar)
//         let dataartical = data.articles
//         let n = dataartical.length;

//         for (var i = 0; i < n; i++) {
//           let jsona = dataartical[i]
//           let title = jsona.title;
//           let newUrl = jsona.url;
//           let timepublish = jsona.publishedAt
//           let description = jsona.description
//           let image = jsona.image
//           let anews =
//           {
//             "title": title,
//             "url" : newUrl,
//             "timepublish": timepublish,
//             "description": description,
//             "image": image
//           }

//           allnews.push(anews);

//           // console.log(" title : " + title)
//           // console.log(" timepublish : " + timepublish)
//           // console.log("description: " + description);
//           // console.log("image : " + image)
//         }
//         document.getElementById("contentnews").innerHTML = `${allnews.map(NewsTemplate).join("")}`;
//       },
//       error: function (error) {
//         console.log("Loi truy van " + error);
//       },
//     })
//   } else {
//     alert("Nhap tu khoa tim kiem!")
//   }

//   let dataSearch = sampleDataSearch;
//   document.getElementById("contentnews").innerHTML = `${dataSearch.map(NewsTemplate).join("")}`;
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }


$(document).ready(function() {
  $("p").hover(function() {
      $(this).css("color", "green");
  }, function() {
      $(this).css("color", "red");
  });

  $("button").click(function() {
    var ip1 = $("#ip1").val();
    var ip2 = $("#ip2").val();
    var result = Number(ip1) + Number(ip2);
    $("#result").html("Result is: " + result);
    console.log(result)
  });
});

fetch('https://reqres.in/api/users?page=2')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

