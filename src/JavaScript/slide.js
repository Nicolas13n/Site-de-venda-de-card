myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.querySelectorAll(".mySlider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
}