'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

// Copy and paste each function from underscore.js, with a mild bit of editing.
// Get rid of the _. for every function and begin the function with function "name"
// Also add module.exports."name" = "name" for every function.

//IDENTITY

/**
 * identity: Designed to return the value of input with no change.
 * 
 * @param is any input.
 * 
 * @return is the input unchanged.
 */
 
function identity(input){
    return input;
}
module.exports.identity = identity;

//TYPE OF

/**
 * typeof: Designed to return the datatype of the input as a string.
 * 
 * @param any input
 * 
 * @return - returns datatype of input as a string
 */
 
function typeOf(input){
    if(Array.isArray(input) === true){
        return "array";
    } else if (input === null){
        return "null";
    } else {
        return typeof input;
    }
}
module.exports.typeOf = typeOf();

//FIRST

/**
 * first: Designed to return the first x number of indecees from the input array.
 * 
 * @param [Array] - the array specifically that you want a specific number of values from starting from index 0.
 * if the input is not an array, it returns an empty array.
 * 
 * @param Number - the number of indecees from 0 you would like pushed inside of a new array.
 * if the number input is not given or not a number, the first index wof the input is pushed into the return.
 * 
 * @return [Array] - the new array contains the number of pushed values from the input array.
 */
 
function first(array, number){
     var newArr = [];
    if(!Array.isArray(array)){
        return newArr; 
    } 
    else if (!number || typeof number !== 'number') {
        return array[0];
    } 
    else if(number > array.length){
        for(var i = 0; i < array.length; i++) {
            newArr.push(array[i]);
        }   
    }
    else {
        for(var j=0; j < number; j++){
            newArr.push(array[j]);
        }
    }    
        
    return newArr;
}
module.exports.first = first();

//LAST

/**
 * last: Designed to return the last x number of indecees from the input array.
 * 
 * @param [Array] - the array that you want a specific number of values from starting from index -1.
 * if the input is not an array, it returns an empty array.
 * 
 * @param Number - the number of indecees from -1 you would like pushed inside of a new array.
 * if the number input is not given or not a number, the last index of the input is pushed into the return array.
 * 
 * @return [Array] - the new array contains the number of pushed values from the input array.
 */
 
 function last(array, number){
    var tempArr = [];
    if(!Array.isArray(array)){
        return [];
    } 
    else if(!number || isNaN(number)){
        return array[array.length -1];
    } 
    else {
        if(number > array.length){
            for(var i = 0; i < array.length; i++){
                tempArr.push(array[i]);
            }
        }
        else {   
            for(var i=array.length-number; i < array.length; i++){
                tempArr.push(array[i]);
            }
        }
    return tempArr;
    }        
}
module.exports.last = last();

//INDEXOF

/**
 * indexOf: Designed to return the index of the input array that is the first occurence of the input value.
 *  
 * @param [Array] - the array with the input value inside
 * 
 * @param <Value> - the value you want the index of
 * will return -1 if the value is not in the array
 * if multiple occurences of value - returns the index of the first occurence.
 * 
 * @return - returns the index of the input value in the input array
 */
 
function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf();

//FILTER

/**
 * filter: Designed to return a new array filled with the values that returned true from the function you call on to the collection provided.
 */
 
 function filter(array, test){
    var newArr = [];
    each(array, function(element, index, array) {
    if(test(array[index], index, array)){
        newArr.push(array[index]);
    }
});    
    return newArr;
}

module.exports.filter = filter();

//REJECT

/**
 * reject: Designed to return a new array filled with the values that returned false from the function you call on to the collection provided.
 */
 
 function reject(array, test){
    var newArr = [];
    filter(array, function(element, index, array){
        if(!test(array[index], index, array)){
            newArr.push(array[index])
        }
    })
 return newArr;
};

module.exports.reject = reject();

//PARTITION

/**
 * partition: Designed to return a new array with both the values that returned true (in [0] of returned array)
 *  and the values that returned false (in [1] of returned array) from the function you call on to the collection provided.
 */
 
 function partition(array, test){
    var finalArr = [filter(array, test), reject(array,test)];
    return finalArr;
};

module.exports.partition = partition();

//UNIQUE

/**
 * unique: Designed to return new array of all elements from <array> with duplicates removed.
 */
 
 function unique(array){
    var newObj = {};
    var uniqueArr = [];
    var j = 0;
    each(array, function(element, index, array) {
        indexOf(array, index);
            let item = array[index];
            if(newObj[item] !== 1){
                newObj[item] = 1;
                uniqueArr[j++] = item;
            }
    });
    return uniqueArr;
};

module.exports.unique = unique();

//MAP

/**
 * map: Designed to return a new array with the values of the function applied to <collection>
 */
 
 function map(collection, test){
    var arrReturn = [];
    var objReturn = [];
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
           arrReturn.push(test(collection[i], i, collection));
        }
    return arrReturn;
    }
    else{
        for(var key in collection){
            objReturn.push(test(collection[key], key, collection));
        }
    return objReturn;
    }
};

module.exports.map = map();

//PLUCK

/**
 * pluck: Designed to return an array containing the value of <property> for every element in <array>
 */
 
 function pluck(array, property){
    return map(array, function(value, key, array){
        return value[property];
    })
};

module.exports.pluck = pluck();

//CONTAINS

/**
 * contains: Designed to return true if the <value> is located in the <array>.
 */
 
 function contains(array, value) {
    return (indexOf(array, value) > 0) ? true : false;
};

module.exports.contains = contains();

//EVERY

/**
 * every: Designed to return a boolean true if the return value of calling function for every element is true.
 */
 
 function every(collection, test){
    var bool = true;
    if(typeof test === 'function'){
        each(collection, function(e, i, a){
            if(!test(e, i, a)){
                bool = false;
            }
        });
    }else{
        each(collection, function(e, i, a){
            if(!e){
                bool = false;
            }
        })
    }
return bool;
};

module.exports.every = every();

//SOME

/**
 * some: Designed to return a boolean true if the return value of calling fuction for at least one element is true.
 */
 
 function some(collection, test){
    var bool = false;
    if(typeof test === 'function'){
        each(collection, function(e, i, a) {
            if(test(e, i, a)){
                bool = true;
            }
        });
    } else {
        each(collection, function(e, i, a) {
            if(e)
            bool = true;
        })
    }
    return bool;
};

module.exports.some = some();

//REDUCE





//EXTEND





