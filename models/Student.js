const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date },
  standard: { type: String, required: true },
  guardianName: { type: String },
  guardianContact: { type: String },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  admissionDate: { type: Date },
  feesPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Student', studentSchema);
