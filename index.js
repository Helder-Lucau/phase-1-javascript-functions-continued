// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");
//Monday Work function 
function mondayWork(defActivity = "go to the office"){
    return `This Monday, I will ${defActivity}.`;
}
mondayWork();
mondayWork('work from home');
//Wrap Adjective
function wrapAdjective(operator = '||'){
     const innerFunction = function (adjective = "a dedicated programmer") {
        return `You are ${operator}${adjective}${operator}!`;
    };
    return innerFunction;
}

function outer(msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `Hello, ${name}! ${msg} ${lang}`;
    };
  }
  outer("student", "JavaScript");