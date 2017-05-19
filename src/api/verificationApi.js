import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const code = [
  {
    code: '1234'
  }
];

class VerificationApi {
  static getRandomCode() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], code));
      }, delay);
    });
  }
}

export default VerificationApi;
