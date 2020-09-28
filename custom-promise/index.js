class CustomPromise {
  constructor(callback) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    callback(this.onResolve, this.onReject);
  }

  then(onResolve) {
    this.promiseChain.push(onResolve);

    return this;
  }

  catch(error) {
    this.handleError = error;

    return this;
  }

  onResolve(value) {
    let previousValue = value;
    try {
      this.promiseChain.forEach(nextFunction => {
        previousValue = nextFunction(previousValue);
      });
    } catch(e) {
      this.onReject(e);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

function fakePromise() {
  return new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      const sample = Math.round((Math.random() * 2));
      if (sample % 2 === 0) {
        resolve(sample);
      } else {
        reject(sample);
      }
    }, 1000);
  });
}

fakePromise().then((res) => {
  console.log(`Response 1 ${res}`);
  return res;
}).then((res) => {
  console.log(`Response 2 ${res}`);
}).catch((err) => {
  console.log(`Error ${err}`);
});