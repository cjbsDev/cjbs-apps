export const comma = (numberString) => {
    return numberString ? numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
}
export const phone = (numberString) => {
    numberString = numberString ? numberString.replace(/-/g, '') : ""
    if (numberString.length <= 10) {
       return numberString.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
    } 
    else if (numberString.length > 10) {
       return numberString.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    }
}

export const removeHypen = (numberString) => {
    return numberString ? numberString.replace(/-/g, '') : ""
}