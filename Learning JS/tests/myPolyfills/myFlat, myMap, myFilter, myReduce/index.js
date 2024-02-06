module.exports = function () {
	function myMap(callback, thisArg) {
	if (!(this instanceof String || this instanceof Array)) {
		throw new TypeError(`Array.prototype.myMap was called on wrong type: ${typeof(this)}`);
	}
		if (!(callback)) {
			throw new TypeError(`Array.prototype.myMap argument ${callback} is absent`);
		}
		if (!(callback instanceof Function)) {
			throw new TypeError(`Array.prototype.myMap argument ${callback} is not a function`);
		}
		let returnedArr = [];
		thisArg = thisArg ? thisArg : this;

		for (let i = 0; i < this.length; i++) {
			if (this[i]) {
				returnedArr[i] = callback.call(thisArg, this[i], i, this);
			} else {
				delete returnedArr[i];
			}
		}
		return returnedArr;
	}
	Array.prototype.myMap = myMap;

	function myReduce(callback, initValue) {
		if (!(this instanceof String || this instanceof Array)) {
			throw new TypeError(`Array.prototype.myReduce was called on wrong type: ${typeof(this)}`);
		}
		if (!(callback)) {
			throw new TypeError(`Array.prototype.myReduce argument ${callback} is absent`);
		}
		if (!(callback instanceof Function)) {
			throw new TypeError(`Array.prototype.myReduce argument ${callback} is not a function`);
		}

		let newValue = 0;
		let accumulator = initValue ? initValue : this[0];
		let startIterPnt = initValue ? 0 : 1;
		for (let i = startIterPnt; i < this.length; i++) {
			accumulator = callback.call(this, accumulator, this[i], i, this);
		}
		newValue = accumulator;
		return newValue;
	}
	Array.prototype.myReduce = myReduce;

	function errorsCheck(callback, message) {
		if (!callback) {
			throw new TypeError(
				`${message} argument ${callback} is absent`
			);
		}
		if (!(callback instanceof Function)) {
			throw new TypeError(
				`${message} callback argument is not a function`
			);
		}
	}

	function myFilter(callback, thisArg) {

		errorsCheck(callback, 'Array.prototype.myFilter');


    let returnedArr = [];
    thisArg = thisArg ? thisArg : this;

    for (let i = 0; i < this.length; i++) {
      if (this[i] && callback.call(thisArg, this[i], i, this)) {
        returnedArr.push(this[i]);
      }
    }
    return returnedArr;
  }
  Array.prototype.myFilter = myFilter;

	function myFlat(depth = 1) {
		if (isNaN(depth)) {
			return this;
		}
		
		function flatten(currentArr, depth) {
			let tempArr = [];
			if (depth === 0) {
				currentArr.forEach(each => {
					if (each) tempArr.push(each);
				})		
				return tempArr;
			}
			if (depth < 1) {	
				return currentArr;
			}
	
			for (let i = 0; i < currentArr.length; i++) {
				let el = currentArr[i];
				if (el instanceof Array) {
					tempArr.push(...flatten(el, --depth));
				} else if (el) {
					tempArr.push(el);
				}
			}
			return tempArr;
		}
	
		return flatten(this, depth);
	}
	Array.prototype.myFlat = myFlat;
	
}