var totalDivs = 1000;
var speed = 1;
var speed1 = 2;
var laod = document.getElementById("load");
var borders = document.getElementById("block-borders");
var index = document.getElementById("block-index");

document.getElementById("block-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var totalDivs = parseInt(document.getElementById("block-count").value);


    if (totalDivs >= 1000 && totalDivs <= 10000) {
        appendDivs(totalDivs);
    } else {
        alert("Please enter a number between 0 and 10000.");
    }
});


function appendDivs(totalDivs) {
    for (let i = 0; i < totalDivs; i++) {
        setTimeout(function () {

            if (index.checked) {
                document.getElementById("main-area").innerHTML += '<div>' + (i + 1) + '</div>';
            }
            else {
                document.getElementById("main-area").innerHTML += '<div></div>';
            }

            document.getElementById("load-data").innerHTML = `Loading... ${i + 1} blocks of ${totalDivs} blocks`;;

            let rows;
            if (totalDivs <= 10000) {
                rows = totalDivs / 100;
            }
            let height;
            height = 100 / rows;
            const divs = document.querySelectorAll("#main-area div");
            divs.forEach(div => {
                div.style.height = `${height}vh`;
            });
            if (i === totalDivs - 1) {
                load.style.display = 'none';

                var mobile = document.getElementById("mob");
                mobile.style.display = 'flex';

            }

            if (borders.checked) {
                const divs = document.querySelectorAll("#main-area div");

                divs.forEach(div => {
                    div.style.border = "1px solid black";
                });
            }
            else {

                divs.forEach(div => {
                    div.style.border = "none";
                });
            }

        }, speed);

    }

}

var mobile = document.getElementById("mob");
var cross = document.getElementById("cross");
cross.addEventListener("click", () => {
    mobile.style.display = 'none';
});



