const express = require('express');
const ContactRoutes = express.Router();
const Contact = require('../models/Contact');

// POST request to register for a job  
ContactRoutes.post('/register-contact', async (req, res) => {
    try {
        const { fname, lname, email, phone, message } = req.body;

        const newUser = await Contact.create({
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            message: message
        });

        return res.status(201).json({
            text: "OK",
            id: newUser._id.toString(),
            fname: newUser.fname,
            lname: newUser.lname,
            email: newUser.email,
            phone: newUser.phone,
            message: newUser.message
        });

    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            return res.status(400).json({
                message: "This email or phone number is already registered.",
                cause: "Duplicate Key Error"
            });
        }
        console.log(error);
        return res.status(500).json({
            message: "ERROR",
            cause: error.message
        });
    }
});


module.exports = ContactRoutes;