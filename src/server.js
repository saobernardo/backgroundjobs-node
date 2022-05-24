import 'dotenv/config';
import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

let port = 3300;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});