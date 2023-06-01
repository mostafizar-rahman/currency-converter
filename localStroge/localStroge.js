const getCountryCode = () =>{
    const countryCode = localStorage.getItem("code")
    return countryCode
}
// console.log(getCountryCode())
const setCountryCode = (country) =>{
    localStorage.setItem("code", country)
}

export {getCountryCode, setCountryCode}