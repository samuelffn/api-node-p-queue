// import PQueue from 'p-queue';


async function main() {
    
    //Para conseguir importar sem usar o import. A p-queue não usa o require.
    const PQueue = (await import('p-queue')).default;

    const queue = new PQueue({ concurrency: 9 });

    const startDateTime = new Date();

    queue.add(async () => delay(2000));
    queue.add(async () => delay(4000));
    queue.add(async () => delay(3000));
    queue.add(async () => delay(9000));
    //queue.add(async () => delayError(1000));
    queue.add(async () => delay(7000));
    queue.add(async () => delay(6000));
    queue.add(async () => delay(5000));
    queue.add(async () => delay(8000));

    await queue.onIdle();

    const endDateTime = new Date();
    const time = endDateTime - startDateTime;

    console.log(`Terminou! Time: ${time}`); // Tempo que levou para executar tudo
}

async function delay(param) {
    await new Promise(function (resolve) {
        setTimeout(resolve, 1000);//param);
    });
    console.log('>>', param);
}

async function delayError(param) {
    throw new Error('Teste error!');
}

main();



// list = [];
/* list.push(queue.add(async () => delay(2000)));
list.push(queue.add(async () => delay(4000)));
list.push(queue.add(async () => delay(3000)));
list.push(queue.add(async () => delay(9000)));
list.push(queue.add(async () => delay(1000)));
list.push(queue.add(async () => delay(7000)));
list.push(queue.add(async () => delay(6000)));
list.push(queue.add(async () => delay(5000)));
list.push(queue.add(async () => delay(8000))); */
// Promise.all(list).then((() => console.log("Terminou"))).catch(() =>console.log("Terminou com erro"));