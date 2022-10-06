process.on("message", (cantidad) => {
  const rands = {};
  let randNumb;
  for (let i = 0; i < cantidad; i++) {
    randNumb = Math.round(Math.ceil(Math.random() * 1000));
    if (Object.keys(rands).find((number) => number == randNumb)) {
      rands[randNumb]++;
    } else {
      rands[randNumb] = 1;
    }
  }
  process.send(rands);
});
