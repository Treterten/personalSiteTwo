import express = require('express');
import path = require('path');

const app = express();
const PORT: number = 8080;

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});