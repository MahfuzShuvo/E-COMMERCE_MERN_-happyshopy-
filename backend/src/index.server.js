const express = require('express');
const env  = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// routes
const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

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
app.use('/public', express.static(path.join(__dirname, 'images')));
app.use('/api', authRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/user/cart', cartRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});