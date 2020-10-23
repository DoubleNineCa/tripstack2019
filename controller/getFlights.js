const Flight = require("../model/Flight.js");
module.exports = function(args, input) {
  const flightList = new Array();
  args.trips.forEach(trip => {
    if (
      trip.origin === input.origin &&
      trip.destination === input.destination
    ) {
      trip.dates.forEach(date => {
        if (date.dateOut.substring(0, 10) === input.departureDate) {
          if (date.flights.length > 0) {
            date.flights.forEach(flight => {
              const data = new Flight(
                flight.flightNumber,
                trip.origin,
                trip.destination,
                flight.time[0],
                flight.time[1],
                flight.regularFare.fares[0].amount,
                args.currency
              );
              flightList.push(data);
            });
          }
        }
      });
    }
  });
  return flightList;
};
