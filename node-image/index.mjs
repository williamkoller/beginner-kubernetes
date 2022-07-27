import { createServer } from 'node:http';

const port = process.env.PORT || 3004;

createServer((r, rs) => {
  rs.writeHead(200, { 'Content-Type': 'text/plain' });
  rs.end('Hello');
}).listen(port, () => console.log(`Server is running on port ${port}`));
