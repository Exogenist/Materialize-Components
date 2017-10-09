//Author: Swainson.holness
var exo = (function () {
    var colorChange;
    var elementColor;

    window.onload = function () {
        //    Create element and staging area for putting it into memory to prevent page reflow.
        var fragment = document.createDocumentFragment();
        var element = document.querySelectorAll(".wave-fx");
        var fabCSS;
        var bound;
        var posX;
        var posY;

        // Create the effect layer 
        var animateDiv = document.createElement("div");

        // for changing wave color 
        function changeColor(el, cssNameClass, cssColorClass) {
            if (el.classList.contains(cssNameClass) === true) {
                fabCSS = document.querySelector(".fab");
                animateDiv.classList.add(cssColorClass);
            }
        };

        // this initialize function appends the effect layer on a x and y position 
        function init(X, Y, elementClick) {
            animateDiv.className = "fab";
            fragment.appendChild(animateDiv);

            // loop through all elements to append
            elementClick.appendChild(fragment);

            // position the styled fab element
            document.querySelector(".fab").style.left = X + "px";
            document.querySelector(".fab").style.top = Y + "px";
            
            changeColor(elementClick, elementColor, colorChange);
        }

        // when an element is clicked get the x y position of the and run the initialize function 
        for (var n = 0; n < element.length; n++) {

            element[n].addEventListener("click", function (event) { // loop through elements to add event listener
                event.preventDefault();
                bound = this.getClientRects()[0];
                posX = event.clientX - bound.left - 25;
                posY = event.clientY - bound.top - 25;
                init(posX, posY, this);



                // remove element fabCSS when animation is done
                this.addEventListener("animationend", function () {
                    fabCSS = document.querySelector(".fab");
                    if (this.contains(fabCSS) === true) {
                        this.removeChild(fabCSS);
                    }
                }, false);

                this.addEventListener("webkitAnimationend", function () {
                    fabCSS = document.querySelector(".fab");
                    if (this.contains(fabCSS) === true) {
                        this.removeChild(fabCSS);
                    }
                }, false);

            });
        }
    };

    return {
        waveCustom: function (g, s) {
            colorChange = s;
            elementColor = g;
        }
    }
})();

