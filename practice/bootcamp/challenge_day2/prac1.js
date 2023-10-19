function isLeapYear(year) {
    if (year >= 1582) {
      if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
          return year + " is not a Leap Year";
        } else {
          return year + " is a Leap Year";
        }
      } else {
        return year + " is not a Leap Year";
      }
    } else {
      return "Year must be greater than or equal to 1582 for the Gregorian calendar.";
    }
  }

  const year = 2000;
  console.log(isLeapYear(year)); 
  