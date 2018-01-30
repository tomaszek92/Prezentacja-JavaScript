function doSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("robię coś...");
        resolve();
      }, 1500);
    });
  }
  
doSomething()
    .then(() => console.log("a teraz robię coś jeszcze"))   
    .then(() => console.log("a później to"));