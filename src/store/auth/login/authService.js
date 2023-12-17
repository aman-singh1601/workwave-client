export const fakeLogin = async (username, password) => {
    // Simulate a network request
    return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (username === 'ajs' && password === 2) {
    //       resolve({ username: 'ajs', password: 23 });
    //     } else {
    //       reject(new Error('Invalid username or password'));
    //     }
    //   }, 500);
    resolve({username,password});
    });
  };