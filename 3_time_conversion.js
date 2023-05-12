// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s='12:01:00PM'
// Return '12:01:00'.

// s='12:01:00AM'
// Return '00:01:00'.


function timeConversion(s) {

    let hour = s.slice(0, 2)
    let min_sec = s.slice(2, 8)
    let am_pm = s.slice(8)

    if (hour == 12 && am_pm == "AM") {
        hour = "00"
    }

    else if (am_pm == "PM" && hour != 12) {
        hour = Number(hour)+12
    }

    return hour + min_sec
}

console.log(timeConversion('12:01:00PM'))
console.log(timeConversion('12:01:00AM'))
console.log(timeConversion('07:01:00PM'))
console.log(timeConversion('07:01:00AM'))