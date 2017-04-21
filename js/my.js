let submit = () => {
        document.getElementById("showsearch").innerHTML = document.getElementById("search").value || "<b>The Global Community of Travellers.</b>";
    }
    //jquery code to scroll %
var output = document.getElementById('top')

function getDocHeight() {
    var D = document;
    return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
}

function amountscrolled() {
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    var docheight = getDocHeight();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    return pctScrolled;
}
window.addEventListener("scroll", function () {
    let a = amountscrolled();
    let navmenu = document.querySelector('#navmenu');
    let search = document.querySelector('#search');
    if (a > 15) {
        navmenu.style.backgroundColor = "#15a5db";
        search.style.backgroundColor = "#15a5db";
        navmenu.style.boxShadow = "0px 0px 10px 5px rgba(3, 1, 1, 0.5)";
    }
    else {
        navmenu.style.backgroundColor = "";
        search.style.backgroundColor = "transparent";
        navmenu.style.boxShadow = "";
    }
}, false);