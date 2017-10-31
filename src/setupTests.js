// Mock localStorage

class LocalStorageMock {
  constructor() {
    // this.store = {};
  }

  clear() {
    // this.store = {};
  }

  getItem(key) {
    // return this.store[key];
  }

  setItem(key, value) {
    // this.store[key] = value.toString();
  }

  removeItem(key) {
    // delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

// Silence requestAnimationFrame error
global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {};
