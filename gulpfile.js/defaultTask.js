const log = location => console.log(`Hello world from`, location ? location : `Gulp!`);
const input = input => console.log(`Input: ${input}`);

module.exports = {
    log,
    input
}