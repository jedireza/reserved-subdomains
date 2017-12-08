'use strict';
const Names = require('./names.json');
const Patterns = require('./patterns.json');


class ReservedSubdomains {
    static isNotValid (name) {

        return !this.isValid(name);
    }

    static isValid (name) {

        if (this.nameMap.hasOwnProperty(name)) {
            return false;
        }

        for (let i = 0; i < this.patternsRegex.length; ++i) {
            const regex = this.patternsRegex[i];

            if (regex.test(name)) {
                return false;
            }
        }

        return true;
    }
}

ReservedSubdomains.names = Names;
ReservedSubdomains.nameMap = Names.reduce((accumulator, name) => {

    accumulator[name] = true;

    return accumulator;
}, {});
ReservedSubdomains.patterns = Patterns;
ReservedSubdomains.patternsRegex = Patterns.map((pattern) => {

    return new RegExp(pattern);
});


module.exports = ReservedSubdomains;
