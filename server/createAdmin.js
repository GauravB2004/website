const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js'); // Adjust the path to your User model

mongoose.connect('mongodb+srv://cdab89565:tBlJdoC4fO3u7wJt@cluster0.utwhjvq.mongodb.net/B8R'); // Updated connection string

const createAdmin = async () => {
    const hashedPassword = bcrypt.hashSync('hii', 3); // Replace with a strong password

    const adminUser = new User({
        name: 'gaurav',                   // Set the admin's name
        email: 'a@e.com',           // Set the admin's email
        password: hashedPassword,
        role: 'admin'           // Set the hashed password
        // favorites field will be empty initially, it can be populated later
    });


    try {
        await adminUser.save();
        console.log('Admin user created successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error creating admin user:', error);
        mongoose.connection.close();
    }
};

createAdmin();
