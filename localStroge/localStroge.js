const getCountryCode = () =>{
    const countryCode = localStorage.getItem("code")
    return countryCode
}

const setCountryCode = (country) =>{
    localStorage.setItem("code", country)
}

export {getCountryCode, setCountryCode}