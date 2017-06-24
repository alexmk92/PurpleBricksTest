// PLEASE NOTE: Normally the props being passed to Status would be the result of some
// dynamic API call and would not be statically passed as 'Withdrawn' directly to the
// child component (this is based on the assumption that the Status widget is a dynamic component
// that reacts to a state change.)
const propertyData = {
    image: `${window.location.origin}/public/assets/images/house.jpg`, // id normally fetch from an API
    postCode: 'B79 8PB',
    town: 'Tamworth',
    name: 'Eddington House',   
    number: 16,
    road: 'Wigginton Road',
    askingPrice: 189950,
    currency: 'GBP',
}

const buyerData = {
    name: 'Mr David Shepherd',
    buyingPosition: 'Property to sell - 20 weeks on the market',
    financialPosition: 'Mortgage required - approved',
    timescale: 'Would like to move in 10 weeks - no chain'
}

const offerData = {
    offerPrice: 179000,
    currency: 'GBP',
    offerDate: new Date(2013, 10, 24, 20, 17, 0, 0),
}

const responseData = {
    responseType: 'withdrawn',
    message: 'You have withdrawn your acceptance of the offer',
    offerDate: new Date(2013, 10, 24, 21, 5, 0, 0),
}

module.exports = {
    propertyData,
    buyerData,
    offerData,
    responseData,
}
