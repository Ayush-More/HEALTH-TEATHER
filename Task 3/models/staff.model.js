const mongoose = require("mongoose");
const client = new mongoose.Schema({
  code: Number,
  name: String,
  address: String,
  mobile: String,
  email: String,
});

const clientModel = new mongoose.model("Clients", client);
module.exports = clientModel;

const staffSchema = new mongoose.Schema(
  {
    staffId: {
      type: String,
      maxLength: 255,
      required: true,
    },
    firstName: {
      type: String,
      index: true,
      maxLength: 255,
      required: true,
    },
    lastName: {
      type: String,
      index: true,
      maxLength: 255,
      required: true,
    },
    specialization: {
      type: String,
      maxLength: 50,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    birthday: {
      type: Date,
    },
    gender: {
      type: String,
      maxLength: 10,
    },
    mobile: {
      type: String,
      index: true,
      maxLength: 10,
      unique: true,
      required: true,
    },
    countryCode: {
      type: String,
      default: "+91",
      maxLength: 10,
    },
    whatsapp: {
      type: String,
      index: true,
    },
    email: {
      type: String,
      maxLength: 100,
    },
    address: {
      house: {
        type: String,
        maxLength: 255,
      },
      street: {
        type: String,
        maxLength: 1000,
      },
      landmarks: {
        type: String,
        maxLength: 1000,
      },
      city: {
        type: String,
        maxLength: 500,
      },
      pincode: {
        type: String,
        maxLength: 50,
      },
    },
    documentType: {
      type: String,
      maxLength: 100,
    },
    documentNumber: {
      type: String,
      maxLength: 100,
    },
    upiId: {
      type: String,
      maxLength: 100,
    },
    bankName: {
      type: String,
      maxLength: 100,
    },
    accountName: {
      type: String,
      maxLength: 255,
    },
    accountNo: {
      type: String,
      maxLength: 100,
    },
    ifsc: {
      type: String,
      maxLength: 50,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    created: {
      on: {
        type: Date,
        default: Date.Now,
      },
      by: {
        id: String,
        name: {
          type: String,
          maxLength: 255,
        },
      },
    },
    modified: {
      on: {
        type: Date,
        default: Date.Now,
      },
      by: {
        id: String,
        name: {
          type: String,
          maxLength: 255,
        },
      },
    },
    profilePic: String,
    documents: [String],
    deleted: {
      type: Boolean,
      default: false,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: "1.1" }
);

// Create the user model
const Staff = new mongoose.model("Staff", staffSchema);
module.exports = Staff;
