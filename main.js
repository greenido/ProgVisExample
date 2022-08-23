//
// ䷢ An example on how to work with ProgVis.com
//
// @update Sep 2020
// @see 
// https://progvis.com/
// https://github.com/pashasadri/progvis-node/
// 
import ProgVis from "progvis";
import fs from "fs";
const PROG_TOKEN = fs.readFileSync('.env', {encoding:'utf8', flag:'r'});

console.log("🎉 starting with token: " + PROG_TOKEN);

//
// The main 'run' that manage our 'long' process
//
async function run() {
  
    // Things are any blocks of work you wish to 'work' on.
    const things = Array.from({length: 1000}, () => Math.floor(Math.random() * 500));

    // The special token you get in order to communicate with the service
    const opts = { "token": PROG_TOKEN };

    // Let's start the new ProgVis Constructor
    const pv = new ProgVis(
      "Fetching HR information -- " + Math.floor(Math.random() * 100),
      things.length,
      opts
    );

  try {
    for (let j = 1; j < things.length; j++) {
      // The real/long work we are doing is inside 'process'
      const result = await process(things[j]);

      // indicate you made some progress
      pv.step(j);

      // log some useful info
      pv.log({ num: j, data: JSON.stringify(result) });
    }
    // success
    pv.done();
  } catch (error) {
    pv.error();
  }
}

//
// Here you can put any 'long' process you wish to do.
// For example: fetching data, ML batch analysis, geo information transformation etc'
//
async function process(thing) {
  return new Promise((resolve) => {
    const randTimeout = Math.floor(Math.random() * 10000);
    setTimeout(function () {
      console.log(
        "🍾 Fetching the data " +
          thing +
          " -- for: " +
          randTimeout +
          " ms."
      );
      resolve("-- Done fetching & ETLing. After: " + randTimeout + " | " + new Date());
    }, randTimeout);
  });
}

//
// Start the party 😃
//
run();
