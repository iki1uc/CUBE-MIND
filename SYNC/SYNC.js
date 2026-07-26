export const SYNC = {
  delay: 120, // Millisekunden

  slow(fn) {
    return new Promise(resolve => {
      setTimeout(() => resolve(fn()), this.delay);
    });
  }
};

