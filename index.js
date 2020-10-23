#!/usr/bin/env node

const request = require("superagent");
const co = require("co");
const prompt = require("co-prompt");
const program = require("commander");
const getFlights = require("./controller/getFlights");
const print = require("./util/print");

program
  .action(function() {
    co(function*() {
      const origin = yield prompt("origin: ");
      const destination = yield prompt("destination: ");
      const departureDate = yield prompt("departureDate: ");
      const adt = yield prompt("Number of Adults: ");
      const input = {
        origin,
        destination,
        departureDate,
        adt
      };

      let url =
        "https://desktopapps.ryanair.com/v4/en-gb/availability?CHD=0&FlexDaysOut=4&INF=0&IncludeConnectingFlights=true&RoundTrip=false&TEEN=0&ToUs=AGREED&exists=false&";
      url += `ADT=${adt}&DateOut=${departureDate}&Origin=${origin}&Destination=${destination}`;
      request
        .get(url)
        .set("Accept", "application/json")
        .end((err, res) => {
          if (!err && res.ok) {
            let flightList = getFlights(JSON.parse(res.text), input);
            print(flightList);
            process.exit(0);
          }
        });
    });
  })
  .parse(process.argv);
