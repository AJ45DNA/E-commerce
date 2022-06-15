// NAVIGATION MANUELLE

let firstLittleImage = document.querySelector(".manual-btn1 > img");

let secondLittleImage = document.querySelector(".manual-btn2 > img");

let thirdLittleImage = document.querySelector(".manual-btn3 > img");

let quartLittleImage = document.querySelector(".manual-btn4 > img");

let slideImageBox = document.querySelector(".main-pictures > div");


// PREMIERE PETITE IMAGE

// if(slideImageBox.viewportX == 0){
//     firstLittleImage.style.border = "3px solid hls(26, 100%, 55%)"
// }

// console.log(slideImageBox.viewportX)


firstLittleImage.addEventListener('click', () => {

    slideImageBox.style.transform = "translateX(0)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.add("checked");

    secondLittleImage.classList.remove("checked")

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.remove("checked");

    slideImageBox2.style.transform = "translateX(0)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.add("checked");

    secondLittleImage2.classList.remove("checked")

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.remove("checked");
});


// SECONDE PETITE IMAGE


secondLittleImage.addEventListener('click', () => {

    slideImageBox.style.transform = "translateX(-400px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.add("checked");

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.remove("checked");

    slideImageBox2.style.transform = "translateX(-400px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.add("checked");

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.remove("checked");
});


// TROISIEME PETITE IMAGE


thirdLittleImage.addEventListener('click', () => {

    slideImageBox.style.transform = "translateX(-800px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.remove("checked");

    thirdLittleImage.classList.add("checked");

    quartLittleImage.classList.remove("checked");

    slideImageBox2.style.transform = "translateX(-800px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.remove("checked");

    thirdLittleImage2.classList.add("checked");

    quartLittleImage2.classList.remove("checked");
});


// QUATRIEME PETITE IMAGE


quartLittleImage.addEventListener('click', () => {

    slideImageBox.style.transform = "translateX(-1200px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.remove("checked");

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.add("checked");

    slideImageBox2.style.transform = "translateX(-1200px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.remove("checked");

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.add("checked");
});

 
// GESTION DE L'AJOUT AU PANIER


const minus = document.querySelector(".minus > img");

const plus = document.querySelector(".plus > img");

let numberOfArticle = 0;

document.querySelector(".add > p").textContent = numberOfArticle;

plus.addEventListener('click', () => {
    numberOfArticle++
    document.querySelector(".add > p").innerHTML = numberOfArticle;
    // document.querySelector("div .multiplication").innerHTML = '$125.00 x ' + numberOfArticle;
    // document.querySelector("div .total").innerHTML = "$"+125 * numberOfArticle+".00";
});

minus.addEventListener('click', () => {

    if(numberOfArticle == 0){
        numberOfArticle = 0
        document.querySelector(".add > p").innerHTML = numberOfArticle;
    } else{
        numberOfArticle--
        document.querySelector(".add > p").innerHTML = numberOfArticle;
    }

    return numberOfArticle;
});




// GESTION DU PANIER


let cartGesture = document.querySelector("body .cart-details")

let cartImg = document.querySelector(".svg-logos > div")


cartImg.addEventListener('click', () => {
    cartGesture.classList.toggle("display");
})


// const price = 125.00;

// document.querySelector("div .multiplication").innerHTML = '125 x ' + numberOfArticle;



// AJOUT DES OBJETS AU PANIER


const addToCart = document.querySelector("div .add-to");

const allDetails = document.querySelector("div .all-details");

const checkoutBox = document.querySelector("div .checkout-box");

const finalPrice = document.querySelector("div .total");

const empty = document.querySelector("div .empty");

const indicator = document.querySelector("div .indicator")


let valeures = [];

addToCart.addEventListener('click', () => {

    valeures.push(parseInt(document.querySelector(".add > p").innerHTML, 10));


    for(i=0; i < valeures.length; i++){
        // let additionner = 0;

        multiplicator = valeures.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    // let multiplicator = ;

    if(multiplicator == 0){
        allDetails.style.display = "none";
        
        checkoutBox.style.display = "none";

        indicator.style.display = "none";

        empty.style.display = "";
    } else{
        allDetails.style.display = "flex";

        checkoutBox.style.display = "flex";

        indicator.style.display = "flex";

        empty.style.display = "none";
    }

    document.querySelector("div .indicator > p").innerHTML = multiplicator;

    document.querySelector("div .multiplication").innerHTML = '$125.00 x ' + multiplicator;
    // console.log(valeures)

    finalPrice.innerHTML = '$' + 125 * multiplicator + '.00'

    numberOfArticle = 0;

    document.querySelector(".add > p").innerHTML = 0;

    let numberOfPairs = multiplicator

    let priceToValidate = finalPrice.innerHTML

    document.querySelector(".number-of-pairs").innerHTML = numberOfPairs;

    document.querySelector(".price-to-validate").innerHTML = priceToValidate;

    document.querySelector(".montant-débité").innerHTML = priceToValidate;

})

// GESTION DE LA SUPPRESSION DU PANIER


const deleteImg = document.querySelector("div .delete > img");


deleteImg.addEventListener('click', () => {
    valeures = [0];

    multiplicator = valeures.reduce((previousValue, currentValue) => previousValue + currentValue);

    document.querySelector("div .multiplication").innerHTML = '$125.00 x ' + multiplicator;

    finalPrice.innerHTML = '$' + 125 * multiplicator + '.00'

    allDetails.style.display = "none";
        
    checkoutBox.style.display = "none";

    indicator.style.display = "none";

    empty.style.display = "";
    // console.log(valeures)
    // console.log(multiplicator)
})


// FOCUS IMAGE


let firstLittleImage2 = document.querySelector(".manual-btn12 > img");

let secondLittleImage2 = document.querySelector(".manual-btn22 > img");

let thirdLittleImage2 = document.querySelector(".manual-btn32 > img");

let quartLittleImage2 = document.querySelector(".manual-btn42 > img");

let slideImageBox2 = document.querySelector(".main-pictures2 > div");

let previousButton = document.querySelector("div .swipe-left")

let nextButton = document.querySelector("div .swipe-right")

let nextButtonOrange = document.querySelector(".swipe-right img")

let previousButtonOrange = document.querySelector(".swipe-left img")

let compteur = 0;

// compteur <= 3;


nextButton.addEventListener('click', () => {
    compteur++;

    switch (compteur) {
        case 0:
            slideImageBox.style.transform = "translateX(0)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.add("checked");

            secondLittleImage.classList.remove("checked")

            thirdLittleImage.classList.remove("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(0)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.add("checked");

            secondLittleImage2.classList.remove("checked")

            thirdLittleImage2.classList.remove("checked");

            quartLittleImage2.classList.remove("checked");
            break;

        case 1:
            slideImageBox.style.transform = "translateX(-400px)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.remove("checked");

            secondLittleImage.classList.add("checked");

            thirdLittleImage.classList.remove("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(-400px)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.remove("checked");

            secondLittleImage2.classList.add("checked");

            thirdLittleImage2.classList.remove("checked");

            quartLittleImage2.classList.remove("checked");
            break;

        case 2:
            slideImageBox.style.transform = "translateX(-800px)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.remove("checked");

            secondLittleImage.classList.remove("checked");

            thirdLittleImage.classList.add("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(-800px)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.remove("checked");

            secondLittleImage2.classList.remove("checked");

            thirdLittleImage2.classList.add("checked");

            quartLittleImage2.classList.remove("checked");
            break;

        case 3:
            slideImageBox.style.transform = "translateX(-1200px)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.remove("checked");

            secondLittleImage.classList.remove("checked");

            thirdLittleImage.classList.remove("checked");

            quartLittleImage.classList.add("checked");

            slideImageBox2.style.transform = "translateX(-1200px)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.remove("checked");

            secondLittleImage2.classList.remove("checked");

            thirdLittleImage2.classList.remove("checked");

            quartLittleImage2.classList.add("checked");
            break;
    }

    if(compteur >= 3){
        compteur = 3;
        slideImageBox.style.transform = "translateX(-1200px)"
        slideImageBox2.style.transform = "translateX(-1200px)"
    }

})


previousButton.addEventListener('click', () => {
    compteur--

    switch (compteur) {
        case 2:
            slideImageBox.style.transform = "translateX(-800px)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.remove("checked");

            secondLittleImage.classList.remove("checked");

            thirdLittleImage.classList.add("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(-800px)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.remove("checked");

            secondLittleImage2.classList.remove("checked");

            thirdLittleImage2.classList.add("checked");

            quartLittleImage2.classList.remove("checked");
            break;

        case 1:
            slideImageBox.style.transform = "translateX(-400px)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.remove("checked");

            secondLittleImage.classList.add("checked");

            thirdLittleImage.classList.remove("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(-400px)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.remove("checked");

            secondLittleImage2.classList.add("checked");

            thirdLittleImage2.classList.remove("checked");

            quartLittleImage2.classList.remove("checked");
            break;

        case 0:
            slideImageBox.style.transform = "translateX(0)"

            firstLittleImage.classList.remove("basic-checked");

            firstLittleImage.classList.add("checked");

            secondLittleImage.classList.remove("checked")

            thirdLittleImage.classList.remove("checked");

            quartLittleImage.classList.remove("checked");

            slideImageBox2.style.transform = "translateX(0)"

            firstLittleImage2.classList.remove("basic-checked");

            firstLittleImage2.classList.add("checked");

            secondLittleImage2.classList.remove("checked")

            thirdLittleImage2.classList.remove("checked");

            quartLittleImage2.classList.remove("checked");
            break;
    }

    if(compteur < 0){
        compteur = 0
        slideImageBox.style.transform = "translateX(0)"
        slideImageBox2.style.transform = "translateX(0)"
    }
})


firstLittleImage2.addEventListener('click', () => {

    slideImageBox2.style.transform = "translateX(0)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.add("checked");

    secondLittleImage2.classList.remove("checked")

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.remove("checked");

    slideImageBox.style.transform = "translateX(0)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.add("checked");

    secondLittleImage.classList.remove("checked")

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.remove("checked");
});


// SECONDE PETITE IMAGE


secondLittleImage2.addEventListener('click', () => {

    slideImageBox2.style.transform = "translateX(-400px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.add("checked");

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.remove("checked");

    slideImageBox.style.transform = "translateX(-400px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.add("checked");

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.remove("checked");
});


// TROISIEME PETITE IMAGE


thirdLittleImage2.addEventListener('click', () => {

    slideImageBox2.style.transform = "translateX(-800px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.remove("checked");

    thirdLittleImage2.classList.add("checked");

    quartLittleImage2.classList.remove("checked");

    slideImageBox.style.transform = "translateX(-800px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.remove("checked");

    thirdLittleImage.classList.add("checked");

    quartLittleImage.classList.remove("checked");
});


// QUATRIEME PETITE IMAGE


quartLittleImage2.addEventListener('click', () => {

    slideImageBox2.style.transform = "translateX(-1200px)";

    firstLittleImage2.classList.remove("basic-checked");

    firstLittleImage2.classList.remove("checked");

    secondLittleImage2.classList.remove("checked");

    thirdLittleImage2.classList.remove("checked");

    quartLittleImage2.classList.add("checked");

    slideImageBox.style.transform = "translateX(-1200px)";

    firstLittleImage.classList.remove("basic-checked");

    firstLittleImage.classList.remove("checked");

    secondLittleImage.classList.remove("checked");

    thirdLittleImage.classList.remove("checked");

    quartLittleImage.classList.add("checked");
});


// GESTION DU RETOUR AU PRINCIPAL


let back = document.querySelector("div .back");

let mainFocusDiv = document.querySelector(".main-focus-div")

let html = document.querySelector("html")

back.addEventListener('click', () => {
    mainFocusDiv.style.display = "none"
    html.style.backgroundColor = "white"
})

slideImageBox.addEventListener('click', () => {
    mainFocusDiv.style.display = "flex"
    html.style.backgroundColor = "hsla(0, 0%, 0%, 0.63)"
})


// GESTION DE LA VALIDATION


let no = document.querySelector(".no")

let buyingValidation = document.querySelector(".buying-validation")

let checkout = document.querySelector(".checkout")

let cartDetails = document.querySelector(".cart-details")

no.addEventListener('click', () => {
    buyingValidation.style.display = "none"
    html.style.backgroundColor = "transparent"
    cartDetails.style.display = "flex"
})

checkout.addEventListener('click', () => {
    buyingValidation.style.display = "flex"
    html.style.backgroundColor = "hsla(0, 0%, 0%, 0.63)"
    cartDetails.style.display = "none"
})


// GESTION DE LA SCROLLBAR


const progressBar = document.querySelector(".scrollbar");

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

    let progress = (document.documentElement.scrollTop / totalHeight) * 100;

    progressBar.style.height = `${progress}%`;
})


// GESTION DE LA VALIDATION

let validate = document.querySelector(".validate")

let transitionBox = document.querySelector(".transition")

let transactionBox = document.querySelector(".transaction-space")

let transactionBtn = document.querySelector(".end-btn")

let validationSpace = document.querySelector(".validation-space")

validate.addEventListener('click', () => {

    // buyingValidation.style.display = "none"

    transactionBox.style.display = "flex";

    validationSpace.style.display = "none"

    // html.style.backgroundColor = "transparent"
    
});

transactionBtn.addEventListener('click', () =>{

    transitionBox.classList.add("transition-animation")

    buyingValidation.style.display = "none"

    function reloading() {
        document.location.reload()
    }

    window.setTimeout(reloading, 1500)
})
