function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  luckyDraw("Joe").then(r => console.log(r)).catch(error => console.error(error.message))
  .then(luckyDraw("Carolina")).then(r => console.log(r)).catch(e => console.error(e.message))
  .then(luckyDraw("Sabrina")).then(r => console.log(r)).catch(e => console.error(e.message))