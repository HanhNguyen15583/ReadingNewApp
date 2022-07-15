
function searchNew() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

function closeClick() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
};

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var allnews = new Array();
function getHeadlineData() {
    var allnews = new Array();
    $.ajax({
        url: "https://gnews.io/api/v4/top-headlines?token=1af56f6c3d0570296e5dfa080a1ed7a0",
        async: false,
        type: 'GET',
        data: {
            //key: 'value',
        },
        success: function (data) {
            console.log(data)
            let numberar = data.totalArticles

            console.log("so bai bao: " + numberar)
            let dataartical = data.articles
            let n = dataartical.length

            for (var i = 0; i < n; i++) {
                let jsona = dataartical[i]
                let image = jsona.image;
                let title = jsona.title;
                let newsurl = jsona.url;
                console.log("dia chi url: " + newsurl)
                let timepublish = jsona.publishedAt;
                let description = jsona.description;
                let anews =
                {
                    "title": title,
                    "url": newsurl,
                    "timepublish": timepublish,
                    "description": description,
                    "image": image
                }
                allnews.push(anews);
            }
            console.log("du lieu gagag: " + JSON.stringify(allnews))
            if(document.getElementById("contentnews"))
            document.getElementById("contentnews").innerHTML = `${allnews.map(NewsTemplate).join("")}`;
        },
        error: function (error) {
            console.log("Loi nhan du lieu: " + error)

        },
    })

}

function NewsTemplate(anew) {
    return `
      <div class="data-setting">
        <img class="data-img" src="${anew.image}">
        <h3><a href="${anew.url}" target="_blank">${anew.title}</a></h3>
        <p>${anew.timepublish}</p>

        <p class="data-description">${anew.description}</p>
      </div>
    `;
}
window.onload = function () {
    getHeadlineData();
    // let dataLoadAuto = allnews;
    //let dataLoadAuto = sampledata;
    // document.getElementById("contentnews").innerHTML = `${dataLoadAuto.map(NewsTemplate).join("")}`;
}

var token = "1af56f6c3d0570296e5dfa080a1ed7a0"

function SearchGnewData() {
    allnews = new Array();
    if (document.getElementById("contentnews"))
        document.getElementById("contentnews").innerHTML = ""
    let kw = document.getElementById("kwInput").value;
    if (kw != "" && isNaN(kw)) {
        $.ajax({
            url: "https://gnews.io/api/v4/search",
            type: 'GET',
            data: {
                'q': kw,
                'token': token
            },
            success: function (data) {
                let numberar = data.totalArticles
                console.log("so bai bao: " + numberar)
                let dataartical = data.articles
                let n = dataartical.length;

                for (var i = 0; i < n; i++) {
                    let jsona = dataartical[i]
                    let title = jsona.title;
                    let newsurl = jsona.url;
                    let timepublish = jsona.publishedAt
                    let description = jsona.description
                    let image = jsona.image
                    let anews =
                    {
                        "title": title,
                        "url": newsurl,
                        "timepublish": timepublish,
                        "description": description,
                        "image": image
                    }

                    allnews.push(anews);

                    console.log(" title : " + title)
                    console.log(" surl : " + newsurl)
                    console.log(" timepublish : " + timepublish)
                    console.log("description: " + description);
                    console.log("image : " + image)
                }
                if (document.getElementById("contentnews"))
                document.getElementById("contentnews").innerHTML = `${allnews.map(NewsTemplate).join("")}`;
            },
            error: function (error) {
                console.log("Loi truy van " + error);
            },
        })
    } else {
        alert("Nhap tu khoa tim kiem!")
    }

    let dataSearch = allnews;
    if (document.getElementById("contentnews"))
    document.getElementById("contentnews").innerHTML = `${dataSearch.map(NewsTemplate).join("")}`;
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};