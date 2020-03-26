const fs = require('fs');

for (let i = 1; i < 100; i++) {
    setTimeout(() => {
        console.error(`SENT: ${i}`);
        const img = fs.readFileSync(`./images/${i % 5}.jpg`);
        process.stdout.write(img);
    }, i * 100);
}
