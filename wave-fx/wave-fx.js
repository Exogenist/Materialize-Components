//Author: Swainson.holness

window.onload = function () {
    //    Create element and staging area for putting it into memory to prevent page reflow.
    var fragment = document.createDocumentFragment();
    var element = document.querySelectorAll(".wave-fx");
    var bound;
    var posX;
    var posY;

    //    Create the effect layer 
    var animateDiv = document.createElement("div");

    //    this initialize function appends the effect layer on a x and y position 
    function init(X, Y, elementClick) {
        animateDiv.className = "fab";
        fragment.appendChild(animateDiv);

        //        loop through all elements to append
        elementClick.appendChild(fragment);

        document.querySelector(".fab").style.left = X + "px";
        document.querySelector(".fab").style.top = Y + "px";
        run = false;
    }

    //    when an element is clicked get the x y position of the and run the initialize function 
    for (var n = 0; n < element.length; n++) {
        element[n].addEventListener("click", function (event) { // loop through elements to add event listener
            event.preventDefault();
            bound = this.getClientRects()[0];
            posX = event.clientX - bound.left - 25;
            posY = event.clientY - bound.top - 25;
            init(posX, posY, this);
        });
    } 
};
