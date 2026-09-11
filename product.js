var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menu.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var search = document.getElementById("search")
var container = document.getElementById("product-container")
var plist = container.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()

    for (count = 0; count < plist.length; count = count + 1) {
        var pname = plist[count].querySelector("h1").textContent

        if (pname.toUpperCase().indexOf(entervalue) < 0) {
            plist[count].style.display = "none"
        }
        else {
            plist[count].style.display = "block"
        }
    }
})

