let country = prompt('Enter delivery country');
let price = Number(prompt('Enter price of the product'));
let deliveryFee = Number(prompt('Enter delivery fee'));

if((price == Number.NaN) || (deliveryFee == Number.NaN))
    console.log('price or deliveryFee not a number');
else
    console.log(getShippingMessage(country, price, deliveryFee));

function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits.`;
}