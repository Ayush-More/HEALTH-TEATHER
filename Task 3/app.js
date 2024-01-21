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
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Staff ID is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("Staff ID must be at most 255 characters"),

    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("First name must be at most 255 characters")
      .custom(isAlphabetic),

    body("lastName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .escape()
      .isLength({ max: 255 })
      .withMessage("Last name must be at most 255 characters")
      .custom(isAlphabetic),

    body("specialization")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("Specialization must be at most 50 characters"),

    body("isDoctor")
      .optional()
      .isBoolean()
      .withMessage("Invalid value for isDoctor"),

    body("age")
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage("Age must be between 1 and 100"),

    body("birthday")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for birthday"),

    body("gender")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 10 })
      .withMessage("Gender must be at most 10 characters"),

    body("mobile")
      .trim()
      .notEmpty()
      .withMessage("Mobile number is required")
      .escape()
      .isLength({ max: 10 })
      .withMessage("Mobile number must be at most 10 characters")
      .isMobilePhone("any", { strictMode: false })
      .withMessage("Invalid mobile number"),

    body("countryCode")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 10 })
      .withMessage("Country code must be at most 10 characters"),

    body("whatsapp")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("WhatsApp must be at most 255 characters"),

    body("email")
      .optional()
      .trim()
      .escape()
      .isEmail()
      .withMessage("Invalid email format")
      .isLength({ max: 100 })
      .withMessage("Email must be at most 100 characters"),

    body("address.house")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("House must be at most 255 characters"),

    body("address.street")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 1000 })
      .withMessage("Street must be at most 1000 characters"),

    body("address.landmarks")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 1000 })
      .withMessage("Landmarks must be at most 1000 characters"),

    body("address.city")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 500 })
      .withMessage("City must be at most 500 characters"),

    body("address.pincode")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("Pincode must be at most 50 characters"),

    body("documentType")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Document type must be at most 100 characters"),

    body("documentNumber")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Document number must be at most 100 characters"),

    body("upiId")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("UPI ID must be at most 100 characters"),

    body("bankName")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Bank name must be at most 100 characters"),

    body("accountName")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Account name must be at most 255 characters"),

    body("accountNo")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 100 })
      .withMessage("Account number must be at most 100 characters"),

    body("ifsc")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 50 })
      .withMessage("IFSC must be at most 50 characters"),

    body("isAdmin")
      .optional()
      .isBoolean()
      .withMessage("Invalid value for isAdmin"),

    body("created.on")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for created.on"),

    body("created.by.id")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Created by ID must be at most 255 characters"),

    body("created.by.name")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Created by name must be at most 255 characters"),

    body("modified.on")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format for modified.on"),

    body("modified.by.id")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Modified by ID must be at most 255 characters"),

    body("modified.by.name")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 255 })
      .withMessage("Modified by name must be at most 255 characters"),

    body("profilePic").optional().trim().escape(),

    body("documents")
      .optional()
      .isArray()
      .withMessage("Documents must be an array"),

    body("deleted")
      .optional()
      .isBoolean()
      .withMessage("Invalid value for deleted"),

    body("user").optional().isMongoId().withMessage("Invalid user ID"),
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
