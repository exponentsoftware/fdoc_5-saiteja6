const fetch = require("node-fetch");

const API_URL = 'https://restcountries.eu/rest/v2/all'


const countriesData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()

    const resData = data.map(d => {
        return {
            language: d.languages.map(lang => {
                return lang.name
            })
        }
    })
    



    console.log(resData)
}

countriesData()