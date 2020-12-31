const mongoose = require('mongoose');

mongoose.connect("yourmongodburlstring", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to database');
}).catch(() => {
  console.log('failed connected to database');
});
