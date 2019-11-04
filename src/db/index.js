const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo/my_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
