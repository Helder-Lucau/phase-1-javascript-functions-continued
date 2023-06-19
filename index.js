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
     return function (adjective = "a dedicated programmer") {
        return `You are ${operator}${adjective}${operator}!`;
    };
}