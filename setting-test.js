 
  function NewsTemplate(anew) {
    return "mot phan tu: " + anew;
  }

  
  let dataSearch = ['gjalkjga', 'gagaga','gagagag4'];
  let a  = dataSearch.map(NewsTemplate);
  console.log(" gia tri a: " + a);
  
  let tt = dataSearch.map(NewsTemplate).join("___");

    console.log(" gia tri a: " + tt);
    window.onload = function () {
        document.getElementById("test").innerHTML = `${dataSearch.map(NewsTemplate).join("")}`;
      }
//   document.getElementById("test").innerHTML = `${dataSearch.map(NewsTemplate).join("")}`;


