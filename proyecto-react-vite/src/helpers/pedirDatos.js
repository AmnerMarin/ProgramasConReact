import data from '../data/data.json'

export function pedirDatos() {
    return new Promise((resolve, reject) => {
        //Para simular la demora
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

export const pedirItemporID = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => {
            return el.id === id;
        });

        item ? resolve(item) : reject({
            error: "No se encontró el producto"
        })
    })
}
