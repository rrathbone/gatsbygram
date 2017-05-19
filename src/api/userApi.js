import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 1,
    firstName: 'Cory',
    lastName: 'House',
    email: 'ch@email.com',
    phone: '2060000001'
  },
  {
    id: 2,
    firstName: 'Scott',
    lastName: 'Allen',
    email: 'sa@email.com',
    phone: '2060000002'
  },
  {
    id: 3,
    firstName: 'Dan',
    lastName: 'Wahlin',
    email: 'dw@email.com',
    phone: '2060000003'
  }
];

// const generateId = (user) => {
//   return user.firstName.toLowerCase() + '-BOB';
// };

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minUserNameLength = 2;
        // if(user.firstName.length < minUserNameLength) {
        //   reject(`First Name must be at least ${minUserNameLength} characters.`);
        // }
        //
        // if(user.lastName.length < minUserNameLength) {
        //   reject(`Last Name must be at least ${minUserNameLength} characters.`);
        // }

        if(user.id) {
          console.log(user.id);
          const existingUserIndex = users.findIndex(a => a.id === user.id);

          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          // user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  // static deleteUser(userId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfUserToDelete = users.findIndex(user => {
  //         user.userId === userId;
  //       });
  //       users.splice(indexOfUserToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default UserApi;
