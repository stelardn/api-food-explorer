function noSpecialCharacters(string) {
    const newString = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-')

    return newString
}

module.exports = { noSpecialCharacters }