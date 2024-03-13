/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var weekDays;
(function (weekDays) {
    weekDays["MONDAY"] = "monday";
    weekDays["TUESDAY"] = "tuesday";
    weekDays["WEDNESDAY"] = "wednesday";
    weekDays["THURSDAY"] = "thursday";
    weekDays["FRIDAY"] = "friday";
    weekDays["SATURDAY"] = "saturday";
    weekDays["SUNDAY"] = "sunday";
})(weekDays || (weekDays = {}));
var dayOfWeekNumberToName = {
    1: weekDays.MONDAY,
    2: weekDays.TUESDAY,
    3: weekDays.WEDNESDAY,
    4: weekDays.THURSDAY,
    5: weekDays.FRIDAY,
    6: weekDays.SATURDAY,
    7: weekDays.SUNDAY,
};
var isWeekend = function (weekDay) {
    if (typeof weekDay === "number") {
        return (dayOfWeekNumberToName[weekDay] === weekDays.SATURDAY ||
            dayOfWeekNumberToName[weekDay] === weekDays.SUNDAY);
    }
    else {
        var normalizedWeekDay = weekDay.toLowerCase();
        return (normalizedWeekDay === weekDays.SATURDAY ||
            normalizedWeekDay === weekDays.SUNDAY);
    }
};
console.log("====================================");
console.log("isWeekend: ", isWeekend("SATURDAY"));
console.log("====================================");
