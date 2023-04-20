var imgslist = Array.from(document.querySelectorAll(".item img"))
var boxContainer = document.querySelector("#boxContainer")
var innerBox = document.querySelector("#innerBox")
var closeEl = document.querySelector("#closeEl")
var prev = document.querySelector("#prev")
var next = document.querySelector("#next")
var currentindex = 0
for (var i = 0; i < imgslist.length; i++) {
    imgslist[i].addEventListener("click", function (event) {
        boxContainer.style.display = "flex"
        var imgpath = event.target.getAttribute("src")
        innerBox.style.backgroundImage = 'url(' + imgpath + ')'
        currentindex = imgslist.indexOf(event.target)
    })
}
next.addEventListener("click", nextfun)
function nextfun() {
    currentindex++
    if (currentindex == imgslist.length) {
        currentindex = 0
    }
    var imgsrc = imgslist[currentindex].getAttribute("src")
    innerBox.style.backgroundImage = 'url(' + imgsrc + ')'
}
prev.addEventListener("click", prevfun)
function prevfun() {
    currentindex--
    if (currentindex < 0) {
        currentindex = imgslist.length - 1
    }
    var imgsrc = imgslist[currentindex].getAttribute("src")
    innerBox.style.backgroundImage = 'url(' + imgsrc + ')'
}
closeEl.addEventListener("click", closefun)
function closefun() {
    boxContainer.style.display = "none"
}
document.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.key == "Arrowright") {
        nextfun()
    }
})