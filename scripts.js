const button = document.getElementById('convert-button')
const select = document.getElementById('currency-selector')

const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    const dollar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log(data)

    realValueText.innerHTML = Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(inputReal)

    if(select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputReal / dollar)
    }

    if(select.value === '€ Euro') {
        currencyValueText.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputReal / euro)
    }

    if(select.value === 'Bitcoin') {
        currencyValueText.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC', minimumFractionDigits: 8
        }).format(inputReal / bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-img')

    if(select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if(select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/usa.png'
    }

    if(select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

