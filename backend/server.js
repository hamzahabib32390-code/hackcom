import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './config/db.js';

// 2. Explicitly point to the .env file one directory up (in the backend root)
dotenv.config({ 
    debug:true
});

const startServer = async () => {
    // 1. Establish Database Connection
    await connectDB();

    // 2. Start Express Listener
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Express Server running on port ${PORT}`);
    });
      
};

startServer();