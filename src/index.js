class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = function(a,b) {
            return a - b;
        }; 
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        let arrLength = this.arr.length;
        return arrLength;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let newArr = [];
        let IndicesLength = indices.length;

        for (let i = 0; i < IndicesLength; i++) {
            newArr.push(this.arr[indices[i]]);
        }
        
        indices.sort(function(a,b) {
            return a - b;
        });
        
        newArr.sort(this.compareFunction);

        for (let j = 0; j < IndicesLength; j++) {
            this.arr[indices[j]] = newArr[j];
        }
      
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;