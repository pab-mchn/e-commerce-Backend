const app = require('./app');
require('./database');


async function main() {
    await app.listen(app.get('port'));
    console.log('server on port 3000')
}

main();