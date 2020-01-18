// write your code below!
var name = 'Bob'
var holiday = 'Christmas'
var days = '25'

function happyHolidays () {
  return('Happy holidays!')
}
function happyHolidaysTo('name'){
  return `Happy holidays, ${name}!`
}
function happyHolidayTo('holiday', 'name'){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown('days', 'holiday') {
  return `It\'s ${days} until ${holiday}!`
}
