import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const producer =
  {
    Id: '1',
    Name: 'Hinterland Farms',
    Location_Id: '1',
    ShortDescription: 'short desc',
    LongDescription: 'long desc'
  };

class ProducerApi {
  static getProducer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], producer));
      }, delay);
    });
  }

  static saveProducer(_producer) {
    _producer = Object.assign({}, _producer);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minProducerNameLength = 5;
        if (producer.Name.length < minProducerNameLength) {
          reject(`Producer Name must be at least ${minProducerNameLength} characters.`);
        }

        resolve(_producer);
      }, delay);
    });
  }
}

export default ProducerApi;
