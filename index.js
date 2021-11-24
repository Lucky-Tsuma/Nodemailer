const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

const router = require("./route/mailer.router");
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Application running on port: ${PORT}`);
})
