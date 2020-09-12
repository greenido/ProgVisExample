//
// ䷢ An example on how to work with ProgVis.com
//
// @update Sep 2020
// @see 
// https://progvis.com/
// https://github.com/pashasadri/progvis-node/
// 
import ProgVis from "progvis";

//
// The main 'run' that manage our 'long' process
//
async function run() {
  
    // Things are any blocks of work you wish to 'work' on.
    const things = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];

    // The special token you get in order to communicate with the service
    const opts = { "token": "TODO-ENTER-YOUR-PRIVATE-TOKEN" };

    // Let's start the new ProgVis Constructor
    const pv = new ProgVis(
      "A long process of fetching 🚴🏼 -- " + Math.floor(Math.random() * 100),
      things.length,
      opts
    );

  try {
    for (let j = 0; j < things.length; j++) {
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
        "🍾 doing some interesting work on " +
          thing +
          " -- for: " +
          randTimeout +
          " ms."
      );
      resolve("-- Done after: " + randTimeout + " | " + new Date());
    }, randTimeout);
  });
}

//
// Start the party 😃
//
run();
