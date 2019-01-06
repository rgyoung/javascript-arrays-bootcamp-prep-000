
var chocolateBars=["snickers","hundred grand","kitkat","skittles" ];
chocolateBars.push("m&m's")
chocolateBars.unshift("twix")
chocolateBars[1]="reese's"
var array
var element

function addElementToBeginningOfArray (array,element){
  var NewArray=[element, ...array]



}


function destructivelyAddElementToBeginningOfArray (array,element){
[array].unshift(element)
return 
}

function addElementToEndOfArray(array,element){
  var NewArray=[...array, element]
  return NewArray
}
function destuctivelyAddElementToEndOfArray(array,element){
  array.push(element)
return
}

function addElementToBeginningOfArray()