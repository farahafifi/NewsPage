var sourceBtn = document.getElementById('sourceBtn')
var section1 = document.getElementById('section1')
// var section2 = document.getElementById('section2')
var links = document.querySelectorAll('ul li')
var dropdown = document.querySelectorAll('.categories ul li')
var eg = document.getElementById('eg')
var it = document.getElementById('it')
var us = document.getElementById('us')
var jp = document.getElementById('jp')
var egMenu = document.getElementById('eg-menu')
var itMenu = document.getElementById('it-menu')
var usMenu = document.getElementById('us-menu')
var jpMenu = document.getElementById('jp-menu')
var upBtn = document.getElementById("upBtn")
var navLogo = document.getElementById('navLogo')


eg.addEventListener('click', function () {
    egMenu.classList.add('show')
    egMenu.classList.remove('hide')
    itMenu.classList.add('hide')
    usMenu.classList.add('hide')
    jpMenu.classList.add('hide')

})

it.addEventListener('click', function () {
    itMenu.classList.add('show')
    itMenu.classList.remove('hide')
    egMenu.classList.add('hide')
    usMenu.classList.add('hide')
    jpMenu.classList.add('hide')

})

us.addEventListener('click', function () {
    usMenu.classList.add('show')
    usMenu.classList.remove('hide')
    egMenu.classList.add('hide')
    itMenu.classList.add('hide')
    jpMenu.classList.add('hide')

})

jp.addEventListener('click', function () {
    jpMenu.classList.add('show')
    jpMenu.classList.remove('hide')
    egMenu.classList.add('hide')
    usMenu.classList.add('hide')
    itMenu.classList.add('hide')
})

for (var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function (e) {
            var countryCode = e.target.getAttribute('countryCode')
            for (var i = 0; i < dropdown.length; i++){
                dropdown[i].addEventListener('click', function (e) {
                    var cat = e.target.getAttribute('category') 
                    news(countryCode ,cat)
                })
            }
        })
}

var data
function news(code, cat) {

    var myhttp = new XMLHttpRequest()
    myhttp.open('GET', `https://newsapi.org/v2/top-headlines?country=${code}&category=${cat}&apiKey=5dd21e75c9f34ba5904d235f0fae27f3`)
    myhttp.send()
    myhttp.addEventListener('readystatechange', function () {
        if (myhttp.readyState == 4) {
            data = JSON.parse(myhttp.response).articles;
            console.log(data);
            receivedData()
            section1.classList.add('hide')
            egMenu.classList.add('hide')
            usMenu.classList.add('hide')
            itMenu.classList.add('hide')
            jpMenu.classList.add('hide')
            document.getElementById('section2').style.paddingTop = `40px`

        }
    
                 })
}

function receivedData() {
    var x = ``

    
    for (var i = 0; i < data.length; i++) {
        x += ` <div class="container">
            <img src="/Images/3104878-200.png" alt="">
            <p>Weak Network</p>
            <button id="sourceBtn" onclick= "seeMore(${i})">Source</button>
            </div>`
        document.getElementById('section2').innerHTML = x
    }
        
            for (var i = 0; i < data.length; i++) {
                x += ` <div class="container">
            <img src="/Images/3104878-200.png" alt="">
            <p>${data[i].description}</p>
            <button id="sourceBtn" onclick= "seeMore(${i})">Source</button>
            </div>`
                document.getElementById('section2').innerHTML = x
            }
        
            for (var i = 0; i < data.length; i++) {
                x += ` <div class="container">
            <img src="${data[i].urlToImage}" alt="">
            <p>Weak Network</p>
            <button id="sourceBtn" onclick= "seeMore(${i})">Source</button>
            </div>`
                document.getElementById('section2').innerHTML = x

            }
        
        for (var i = 0; i < data.length; i++){
            x += ` <div class="container">
            <img src="${data[i].urlToImage}" alt="">
            <p>${data[i].description}</p>
            <button id="sourceBtn" onclick= "seeMore(${i})">Source</button>
            </div>`
            document.getElementById('section2').innerHTML = x

        }
    }


function seeMore(index) {
    i = index
    window.open(`${data[i].url}`, "_blank")
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function toUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

navLogo.addEventListener('click', function () {
    section1.classList.remove('hide')
    document.getElementById('section2').classList.add('hide')

})