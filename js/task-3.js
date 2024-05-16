'use strict';

class StringBuilder {

    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const addEndString = this.#value + str;
        this.#value = addEndString;
    }

    padStart(str) {
        const addStartString = str + this.#value;
        this.#value = addStartString;
    }

    padBoth(str) {
        const addAroundString = str + this.#value + str;
        this.#value = addAroundString;
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="