const MainDiv = document.querySelector("#DivCollector");
const DivTwo = document.querySelector("#DivCollectorTwo");
const About = document.querySelector("#About");
const Icon = document.querySelector("#IconCollector");
const MainLogo = document.querySelector("#LogoCollector")
const Title = document.querySelector("#H1Collector")
const SubTitle = document.querySelector("#PCollector")

var ClickCount = 0;


About.addEventListener("mouseover", function() {Mouse_Over()})
About.addEventListener("mouseleave", function() {Mouse_Leave()})
About.addEventListener("mousedown", function() {Mouse_Down()})

function Mouse_Over() {
    About.style.color = "#000000";
    About.style.opacity = "40%";
    Icon.src = "/Portfolio/images/icons/arrow-down-circle-black.svg";
    Icon.style.opacity = "40%";
}

function Mouse_Leave() {
    About.style.color = "";
    About.style.opacity = "";
    Icon.src = "/Portfolio/images/icons/arrow-down-circle-white.svg";
    Icon.style.opacity = "";
}

function Mouse_Down() {


    isTrue = false;

    if (ClickCount % 2 === 0) {
        isTrue = true;
    }

    if (isTrue == true) {
    MainDiv.classList.add("ShrinkDiv");
    DivTwo.classList.add("IncreaseDiv");
    MainLogo.classList.add("LowerOpacity");
    Title.classList.add("LowerOpacity");
    SubTitle.classList.add("LowerOpacity");

    Title.textContent = "";
    SubTitle.innerHTML = "";

    ClickCount ++;
    console.log(isTrue, ClickCount);

    }

    if (isTrue === false) {

    MainDiv.classList.remove("ShrinkDiv");
    DivTwo.classList.remove("IncreaseDiv");
    MainLogo.classList.remove("LowerOpacity");
    Title.classList.remove("LowerOpacity");
    SubTitle.classList.remove("LowerOpacity");

    Title.textContent = "Josh Farrow";
    SubTitle.innerHTML = "&lt;Web Development & U.I. Design&gt; <span class='blink' id = 'BlinkCollector'>|</span>";


    MainDiv.classList.add("ShrinkDivRev");
    DivTwo.classList.add("IncreaseDivRev");
    MainLogo.classList.add("LowerOpacityRev");
    Title.classList.add("LowerOpacityRev");
    SubTitle.classList.add("LowerOpacityRev");

    setTimeout(() => {
        MainLogo.classList.remove("LowerOpacityRev");
        Title.classList.remove("LowerOpacityRev");
        SubTitle.classList.remove("LowerOpacityRev");
        MainDiv.classList.remove("ShrinkDivRev"),
        DivTwo.classList.remove("IncreaseDivRev")},
        1000)

    ClickCount ++
    console.log(isTrue, ClickCount)

    }

}