/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

const dayOfWeekNumberToName = {
  1: weekDays.MONDAY,
  2: weekDays.TUESDAY,
  3: weekDays.WEDNESDAY,
  4: weekDays.THURSDAY,
  5: weekDays.FRIDAY,
  6: weekDays.SATURDAY,
  7: weekDays.SUNDAY,
};

const isWeekend = (weekDay: number | string): boolean => {
  if (typeof weekDay === "number") {
    return (
      dayOfWeekNumberToName[weekDay] === weekDays.SATURDAY ||
      dayOfWeekNumberToName[weekDay] === weekDays.SUNDAY
    );
  } else {
    const normalizedWeekDay = weekDay.toLowerCase();
    return (
      normalizedWeekDay === weekDays.SATURDAY ||
      normalizedWeekDay === weekDays.SUNDAY
    );
  }
};

console.log("====================================");
console.log("isWeekend: ", isWeekend("SATURDAY"));
console.log("====================================");
