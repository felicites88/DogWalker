var mongoose = require('mongoose');
var WalkerSchema = new mongoose.Schema({
  name: String,
  address: String,
  cpf: String,
  phone: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Walker', WalkerSchema);
