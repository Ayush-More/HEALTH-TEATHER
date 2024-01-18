const express = require("express");
const Staff_Model = require("./models/staff.model");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config({ path: "./config.env" });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
app.use(express.json());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const isAlphabetic = (value) => {
  if (/^[a-zA-Z]+$/.test(value)) {
    return true;
  }
  throw new Error("First name must contain only alphabets");
};

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

app.post(
  "/staffEntry",
  validate([
    body("staffId")
      .trim()
      .notEmpty()
      .withMessage("Staff ID is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("Staff ID must be at most 255 characters"),

    // Validate firstName
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("First name must be at most 255 characters")
      .custom(isAlphabetic),

    // Validate lastName
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("Last name must be at most 255 characters")
      .custom(isAlphabetic),

    // Validate specialization
    body("specialization")
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("Specialization must be at most 50 characters"),

    // Validate isDoctor
    body("isDoctor").isBoolean().withMessage("Invalid value for isDoctor"),

    // Validate age
    body("age")
      .isInt({ min: 1, max: 100 })
      .withMessage("Age must be between 1 and 100"),

    // Validate birthday
    body("birthday")
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for birthday"),

    // Validate gender
    body("gender")
      .trim()
      .escape()
      .isLength({ max: 10 })
      .withMessage("Gender must be at most 10 characters"),

    // Validate mobile
    body("mobile")
      .trim()
      .notEmpty()
      .withMessage("Mobile number is required")
      .escape()
      .isLength({ max: 10 })
      .withMessage("Mobile number must be at most 10 characters")
      .isMobilePhone("any", { strictMode: false })
      .withMessage("Invalid mobile number"),

    // Validate countryCode
    body("countryCode")
      .trim()
      .escape()
      .isLength({ max: 10 })
      .withMessage("Country code must be at most 10 characters"),

    // Validate whatsapp
    body("whatsapp")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("WhatsApp must be at most 255 characters"),

    // Validate email
    body("email")
      .trim()
      .escape()
      .isEmail()
      .withMessage("Invalid email format")
      .isLength({ max: 100 })
      .withMessage("Email must be at most 100 characters"),

    // Validate address.house
    body("address.house")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("House must be at most 255 characters"),

    // Validate address.street
    body("address.street")
      .trim()
      .escape()
      .isLength({ max: 1000 })
      .withMessage("Street must be at most 1000 characters"),

    // Validate address.landmarks
    body("address.landmarks")
      .trim()
      .escape()
      .isLength({ max: 1000 })
      .withMessage("Landmarks must be at most 1000 characters"),

    // Validate address.city
    body("address.city")
      .trim()
      .escape()
      .isLength({ max: 500 })
      .withMessage("City must be at most 500 characters"),

    // Validate address.pincode
    body("address.pincode")
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("Pincode must be at most 50 characters"),

    // Validate documentType
    body("documentType")
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Document type must be at most 100 characters"),

    // Validate documentNumber
    body("documentNumber")
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Document number must be at most 100 characters"),

    // Validate upiId
    body("upiId")
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("UPI ID must be at most 100 characters"),

    // Validate bankName
    body("bankName")
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Bank name must be at most 100 characters"),

    // Validate accountName
    body("accountName")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Account name must be at most 255 characters"),

    // Validate accountNo
    body("accountNo")
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Account number must be at most 100 characters"),

    // Validate ifsc
    body("ifsc")
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("IFSC must be at most 50 characters"),

    // Validate isAdmin
    body("isAdmin").isBoolean().withMessage("Invalid value for isAdmin"),

    // Validate created.on
    body("created.on")
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for created.on"),

    // Validate created.by.id
    body("created.by.id")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Created by ID must be at most 255 characters"),

    // Validate created.by.name
    body("created.by.name")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Created by name must be at most 255 characters"),

    // Validate modified.on
    body("modified.on")
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for modified.on"),

    // Validate modified.by.id
    body("modified.by.id")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Modified by ID must be at most 255 characters"),

    // Validate modified.by.name
    body("modified.by.name")
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Modified by name must be at most 255 characters"),

    // Validate profilePic
    body("profilePic").trim().escape(),

    // Validate documents
    body("documents").isArray().withMessage("Documents must be an array"),

    // Validate deleted
    body("deleted").isBoolean().withMessage("Invalid value for deleted"),

    // Validate user
    body("user").isMongoId().withMessage("Invalid user ID"),
  ]),
  async (req, res) => {
    try {
      const newStaff = new Staff_Model(req.body);
      await newStaff.save();
      res
        .status(200)
        .json({ message: "Staff member created successfully", data: newStaff });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
