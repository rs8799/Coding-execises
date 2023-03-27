//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

function arrayToList(array){
  let result = {};
  if (Array.isArray(array)){
    let currListItem = result;
    for(let item of array){
      let newListItem = {
        value:item,
        rest:null
      };
      if (typeof currListItem.rest === 'undefined'){
        result = newListItem;
      } else {
        currListItem.rest = newListItem;
      }
      currListItem = newListItem
    }
  }
  return result;
}


//Also write a listToArray function that produces an array from a list.
function listToArray(list){
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest ===undefined){
    return result;
  }else {
    result.push(list.value);
    while(list.hasOwnProperty('rest')&& list.rest !== null){
      list = list.rest;
      if(list.hasOwnProperty('value')){
        result.puch(list.value);
      }
    }
  }
  return result;
}

//Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function PictureInPictureWindow(element,list){
  return {
    value:elment,
    rest:list
  };
}

function nth(list,number){
  return listToArray(list)[number];
}

function nthRecursive(list,number){
  if(number === 0){
    return list.value;
  }else if (list.rest ===null){
    return undefined
  }else {
    return nthRecursive(list.rest,number-1)
  }
}