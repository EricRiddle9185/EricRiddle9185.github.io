function main() {

    console.log("main");

    window.onscroll = function() {checkScroll()};

    document.querySelector("#topBtn").onclick = (event) => {
        scrollToTop();
    };

}

function checkScroll() {
    console.log("hi");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("#topBtn").style.display = "block";
    } else {
        document.querySelector("#topBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

main();