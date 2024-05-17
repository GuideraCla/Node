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

async function runLuckyDraws() {
    try {
        const result = await luckyDraw("Tina");
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const result = await luckyDraw("Jorge");
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const result = await luckyDraw("Julien");
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

runLuckyDraws();
