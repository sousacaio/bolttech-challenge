const app = require("./app");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bolttech');

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});