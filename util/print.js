const sort = require("../util/sort");

module.exports = function (flightList) {
    const line = "=====================================";
    console.log(`\n${line} FLIGHT LIST ${line}\n`);
    if (flightList.length === 0) {
        console.log("No flights found.");
    } else {
        sort(flightList).forEach(flight => {
            const display = flight.flightNumber + " "
                + flight.origin + " --> " + flight.destination + " "
                + "(" + dateFormatting(flight.departureTime) + " --> "
                + dateFormatting(flight.arrivalTime) + ") "
                + "- " + flight.price + " " + flight.currency;
            console.log(display);
        });
    }

    console.log(`\n${line}==== END ====${line}\n`);
}

function dateFormatting(date) {
    const current_datetime = new Date(date);
    const seconds = current_datetime.getSeconds() === 0 ? "00" : current_datetime.getSeconds();
    const formatted_date = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + seconds;
    return formatted_date;
}