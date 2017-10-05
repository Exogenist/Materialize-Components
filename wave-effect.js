//Author: Swainson.holness

window.onload = function () {
    //    Create element and staging area for putting it into memory to prevent page reflow.
    var fragment = document.createDocumentFragment();
    var element = document.querySelector(".wave-fx");
    var bound;
    var posX;
    var posY;

    //    Create the effect layer 
    var animateDiv = document.createElement("div");

    //    this initialize function appends the effect layer on a x and y position 
    function init(X, Y) {
        animateDiv.className = "fab";
        fragment.appendChild(animateDiv);
        element.appendChild(fragment);
        document.querySelector(".fab").style.left = X + "px";
        document.querySelector(".fab").style.top = Y + "px";
        run = false;
    }

    //    when an element is clicked get the x y position of the and run the initialize function 
    element.addEventListener("click", function (event) {
        event.preventDefault();
        bound = this.getClientRects()[0];
        posX = event.clientX - bound.left;
        posY = event.clientY - bound.top;
        console.log(posX + " " + posY);
        console.log(event);
        console.log(bound);
        init(posX, posY);
    });
};
