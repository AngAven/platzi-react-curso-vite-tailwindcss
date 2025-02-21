/**
 * This function calculates total price of a new order
 * @param shoppingCart Array of objects
 * @returns {number} Total Price
 */

const totalPrice = (shoppingCart) => {
    const iva = 0.16
    const prices = shoppingCart.map(product => product?.price)
    const totalRaw = prices.reduce((acc, price) => acc + price, 0)
    const total = totalRaw + (totalRaw * iva)

    return total.toFixed(2)
}

export {
    totalPrice
}