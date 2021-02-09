const express = require('express');
const env  = require('dotenv');
const app = express();
const mongoose = require('mongoose');

// routes
const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');

// environment variable or you can say constants
env.config();

// mongoDB connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@happyshopy.ceu9q.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database Connected');
});

app.use(express.json()); 
app.use('/api', authRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/category', categoryRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});