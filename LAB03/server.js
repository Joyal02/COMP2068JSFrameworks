const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return `${method} is not a valid method. Valid methods are: add, subtract, multiply, divide`;
    }
    return `${x} ${method} ${y} = ${result}`;
}

app.use((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { method, x, y } = parsedUrl.query;
    if (!method || !x || !y) {
        res.end('Missing parameters');
        return;
    }
    const result = calculate(method, parseInt(x), parseInt(y));
    res.end(result);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
