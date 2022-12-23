export const serverReg = async (email, password, name, surname) => {
    return fetch(
        `https://loft-taxi.glitch.me/register?email=${email}&password=${password}&name=${name}&surname=${surname}`
    ).then(res => res.json()).then(data => data.success)
}


