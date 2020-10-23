function Flight(flightNumber, origin, destination, departureTime, arrivalTime, price, currency) {
    this.flightNumber = flightNumber || null;
    this.origin = origin || null;
    this.destination = destination || null;
    this.departureTime = departureTime || null;
    this.arrivalTime = arrivalTime || null;
    this.price = price || null;
    this.currency = currency || null;
}

module.exports = Flight;