function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(symbol = "*") {
    const opener = "You are"
    return function result(emphatic= "special") {
        return `${opener} ${symbol}${emphatic}${symbol}!`
    }
}