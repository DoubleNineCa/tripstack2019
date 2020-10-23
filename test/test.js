const assert = require("assert");
const fs = require('fs');
const getFlights = require("../controller/getFlights");
const sort = require("../util/sort");

const rawdata = fs.readFileSync('./test/mockData.json');
const mockFlights = JSON.parse(rawdata);
const mockInput = {
    origin: "BUD",
    destination: "LIS",
    departureDate: "2019-11-04",
    adt: 1
};

describe('request getFlights availability based on date', () => {
    it("it returns empty array when given invalid date", () => {
        assert.equal(mockFlights.currency, "HUF");
        assert.equal(getFlights(mockFlights, mockInput).length, 0);
    });

    it("it returns flights array when given valid date", () => {
        mockInput.departureDate = "2019-11-05";
        assert.equal(getFlights(mockFlights, mockInput).length, 1);
        mockInput.departureDate = "2019-11-07";
        assert.equal(getFlights(mockFlights, mockInput).length, 3);
    });
});
describe('displays unsorted flightList and sorted flightList', () => {
    it("it returns unsorted flightList", () => {
        mockInput.departureDate = "2019-11-07";
        const flightList = getFlights(mockFlights, mockInput);
        assert.equal(flightList[0].flightNumber, "FR 8859");
    });

    it("it returns sorted flightList", () => {
        mockInput.departureDate = "2019-11-07";
        const flightList = sort(getFlights(mockFlights, mockInput));
        assert.equal(flightList[0].flightNumber, "FR 8860");
        assert.equal(flightList[1].flightNumber, "FR 8839");
    });
});