let quantity = Number(prompt('Enter quantity of droids'));
let pricePerDroid = Number(prompt('Enter price of the one droid'));
let customerCredits = Number(prompt('Enter the amount of customer credits'));

if((quantity == Number.NaN) || (pricePerDroid == Number.NaN || customerCredits == Number.NaN))
    console.log('quantity or pricePerDroid or customerCredits not a number');
else
    console.log(makeTransaction(quantity, pricePerDroid, customerCredits));

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if(totalPrice > customerCredits)
        return `Insufficient funds!`;
    
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}