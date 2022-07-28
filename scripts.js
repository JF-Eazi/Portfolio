const MainDiv = document.querySelector("#DivCollector");
const DivTwo = document.querySelector("#DivCollectorTwo");
const About = document.querySelector("#About");
const Icon = document.querySelector("#IconCollector");
const MainLogo = document.querySelector("#LogoCollector");
const Title = document.querySelector("#H1Collector");
const SubTitle = document.querySelector("#PCollector");
const ProcessContent = document.querySelector("#Process");
const PortfolioContent = document.querySelector("#Portfolio");
const ContactContent = document.querySelector("#Contact");

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

    isTrue = false;

    if (ClickCount % 2 === 0) {
        isTrue = true;
    }

    if (isTrue === true) {
        About.style.color = "";
        About.style.opacity = "";
        Icon.src = "/Portfolio/images/icons/arrow-down-circle-white.svg";
        Icon.style.opacity = "";}
    
    if (isTrue === false) {
        return null
    }
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

        About.style.color = "#000000";
        About.style.opacity = "40%";
        Icon.src = "/Portfolio/images/icons/arrow-down-circle-black.svg";
        Icon.style.opacity = "40%";

        ProcessContent.innerHTML = PROCESS_HTML;
        PortfolioContent.innerHTML = PORTFOLIO_HTML;
        ContactContent.innerHTML = CONTACT_HTML;

        ClickCount ++;

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

        Title.classList.add("LowerOpacityRev");
        SubTitle.classList.add("LowerOpacityRev");
        MainLogo.classList.add("LowerOpacityRev");

        About.style.color = "";
        About.style.opacity = "";
        Icon.src = "/Portfolio/images/icons/arrow-down-circle-white.svg";
        Icon.style.opacity = "";

        setTimeout(() => {
            MainLogo.classList.remove("LowerOpacityRev");
            Title.classList.remove("LowerOpacityRev");
            SubTitle.classList.remove("LowerOpacityRev");
            MainDiv.classList.remove("ShrinkDivRev");
            DivTwo.classList.remove("IncreaseDivRev");
            ProcessContent.innerHTML = "";
            PortfolioContent.innerHTML = "";
            ContactContent.innerHTML = "";},
            1000)

        ClickCount ++
    }

}

const PROCESS_HTML = `
    <h2>The Process</h2>
    <ol>
        <li>Define</li>
            <ul>
                <li>Customer Requirements</li>
            </ul>
        <br>
        <li>ProtoType</li>
            <ul>
                <li>Basic Development</li>
            </ul>
        <br>
        <li>Review</li>
            <ul>
                <li>Customer Walkthrough and Feedback</li>
            </ul>
        <br>
        <li>Execute</li>
            <ul>
                <li>Deployment Ready Development</li>
            </ul>
        <br>
        <li>Deploy</li>
            <ul>
                <li>Customer Handover</li>
            </ul>
        <br>
    </ol>
`

const PORTFOLIO_HTML = `
    <h2>Portfolio Projects</h2>
`

const CONTACT_HTML = `
    <h2>Contact Information</h2>
`