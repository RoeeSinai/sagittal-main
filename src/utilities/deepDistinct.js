const computeDeepDistinct = array => {
    return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse)
}

module.exports = {
    computeDeepDistinct,
}
