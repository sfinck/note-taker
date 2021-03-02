const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static('./public/')); 

require('./Routes/APIroutes.js')(app);
require('./Routes/HTMLroutes.js')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  