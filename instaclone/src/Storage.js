// extension helper functions from
//https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

const myStorage = window.localStorage

export default myStorage;