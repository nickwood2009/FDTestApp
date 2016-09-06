import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const produce = [
    {
        Id: '1',
        Name: 'Basil Clamshell',
        ProduceType_Id: '1',
        Producer_Id: '1'
    },
    {
        Id: '2',
        Name: 'Eggs',
        ProduceType_Id: '1',
        Producer_Id: '1'
    },
    {
        Id: '3',
        Name: 'Cheese',
        ProduceType_Id: '1',
        Producer_Id: '1'
    },
    {
        Id: '4',
        Name: 'Milk',
        ProduceType_Id: '1',
        Producer_Id: '1'
    },
    {
        Id: '5',
        Name: 'Potatoes',
        ProduceType_Id: '1',
        Producer_Id: '1'
    }
];

class ProduceApi {
    static getAllProduce() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], produce));
            }, delay);
        });
    }

    static saveProduce(_produce) {
        _produce = Object.assign({}, _produce);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minProduceNameLength = 5;
                if (produce.Name.length < minProduceNameLength) {
                    reject(`Produce Name must be at least ${minProduceNameLength} characters.`);
                }

                resolve(_produce);
            }, delay);
        });
    }
}

export default ProduceApi;
