export const paymentServer = async (cardNumber, cardName, cvc, expiryDate, token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card`)
    .then(response => response.json())
    // .then(data => data.success)
}