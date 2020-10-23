module.exports = function (flightList) {
    flightList.sort(function (a, b) {
        const departureA = new Date(a.departureTime);
        const departureB = new Date(b.departureTime);
        return a.price < b.price ? -1 : a.price > b.price ? 1 : departureA < departureB ? -1 : departureA > departureB ? 1 : 0;
    });

    return flightList;
}
