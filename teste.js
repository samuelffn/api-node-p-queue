import PQueue from 'p-queue';

const queue = new PQueue({ concurrency: 1 });

queue.add(async () => delay(2000));
queue.add(async () => delay(8000));
queue.add(async () => delay(4000));

async function delay(param) {
    await new Promise(function (resolve) {
        setTimeout(resolve, param);
    });
    console.log('>>', param);
}

// Para executar, utilize: node teste.js