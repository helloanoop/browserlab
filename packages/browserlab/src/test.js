import store from './store';

const BrowserLabTest = function (name, spec) {
  const log = {
    debug: function(message) {
      this.logs.push(message);
    }
  }

  log.debug = log.debug.bind(this);
  
  this.name = name;
  this.spec = spec;
  this.logs = [];
  this.run = function() {
    this.spec.call({log});
  };
};

const test = (name, spec) => {
  store.tests.push(new BrowserLabTest(name, spec));
};

export default test;