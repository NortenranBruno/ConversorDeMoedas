const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    /*cotação das moedas */
    const dolarToday = 5.12
    const euroToday = 5.55
    const libraToday = 6.50
    const BitcoinToday = 354.6930 

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" /* sigla das moedas */
    }).format(inputCurrencyValue) 

    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD" /* sigla das moedas */
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" /* sigla das moedas */
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP" /* sigla das moedas */
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelectConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"  /* sigla das moedas */
        }).format(inputCurrencyValue / BitcoinToday)
    }    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD" /* sigla das moedas */
        }).format(inputCurrencyValue * dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" /* sigla das moedas */
        }).format(inputCurrencyValue * euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP" /* sigla das moedas */
        }).format(inputCurrencyValue * libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"  /* sigla das moedas */
        }).format(inputCurrencyValue * BitcoinToday)
    }

}

function changeCurrencyConverted() {
    const currencyName = document.getElementById("currency-name-converted") 
    const currencyImage = document.querySelector(".currency-img-converted")

    if (currencySelectConverted.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"     /* caminho das imagens */
    }
    else if (currencySelectConverted.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"       /* caminho das imagens */
    }
    else if (currencySelectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"         /* caminho das imagens */
    }
    else if (currencySelectConverted.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"        /* caminho das imagens */
    }
    else if (currencySelectConverted.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"       /* caminho das imagens */
    }

    convertValues()
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") 
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real" 
        currencyImage.src = "./assets/real.png" /* caminho das imagens */
    }
    else if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png" /* caminho das imagens */
    }
    else if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png" /* caminho das imagens */
    }
    else if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png" /* caminho das imagens */
    }
    else if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png" /* caminho das imagens */
    }

    convertValues()
}

currencySelectConverted.addEventListener("change", changeCurrencyConverted) 
currencySelect.addEventListener("change", changeCurrency)  
convertButton.addEventListener("click", convertValues)