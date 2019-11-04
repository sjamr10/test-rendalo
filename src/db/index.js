const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo/my_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PersonSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const Person = mongoose.model("Person", PersonSchema);

const getPeople = async () => {
  const result = await Person.find().exec();
  return result;
};

const savePerson = async newPerson => {
  const person = new Person(newPerson);
  const result = await person.save();
  return result;
};

module.exports = {
  getPeople,
  savePerson
};
