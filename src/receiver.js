
let received = 0;
process.stdin.on('data', () => console.error(` RECEIVED: ${++received}`));