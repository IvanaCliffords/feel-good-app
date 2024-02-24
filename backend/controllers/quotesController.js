import Quote from '../models/quoteMessage.js';
import fetch from 'node-fetch'; // You may need to install node-fetch if not already



const getRandomQuote = async (req, res) => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('Failed to fetch quote');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const saveQuote = async (req, res) => {
    const { apiId, content } = req.body;
    try {
        // Check for existing quote
        const existingQuote = await Quote.findOne({ apiId });
        if (existingQuote) {
            return res.status(409).json({ message: "Quote already exists" });
        }

        const newQuote = new Quote({ apiId, message: content, isActive: true });
        await newQuote.save();
        res.status(201).json(newQuote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getActiveQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find({ isActive: true }).sort({ createdAt: -1 });
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const toggleQuoteActive = async (req, res) => {
    const { id } = req.params;
    try {
        const quote = await Quote.findById(id);
        if (!quote) {
            return res.status(404).json({ message: "Quote not found" });
        }
        quote.isActive = !quote.isActive;
        await quote.save();
        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const searchQuotes = async (req, res) => {
    try {
        const searchString = req.query.search;
        const quotes = await Quote.find({
            message: { $regex: searchString, $options: 'i' },
            isActive: true
        }).sort({ createdAt: -1 });
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getRandomQuote, saveQuote, getActiveQuotes, toggleQuoteActive, searchQuotes };




