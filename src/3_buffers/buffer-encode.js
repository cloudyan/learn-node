// 使用 Buffers 来修改字符串编码

const user = 'johnny';
const password = 'c-bad';
const authString = `${user}:${password}`;

// const buf = new Buffer(authString);
// const encoded = buf.toString('base64');

// 这样写更紧凑
const encoded = Buffer(`${user}:${password}`).toString('base64');

console.log(encoded)
