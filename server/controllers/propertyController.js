const Property = require('../models/Property');

exports.findAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.addProperty = async (req, res) => {
    try {
        const newProperty = new Property(req.body);
        const savedProperty = await newProperty.save();
        res.json(savedProperty);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Add other controller methods as needed for updating and deleting properties
