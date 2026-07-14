import mongoose from 'mongoose';

export const connectDB = async () => {
    // Check if the URI is actually hitting the runtime
    if (!process.env.MONGO_URI) {
        console.error("❌ ERROR: MONGO_URI is missing from process.env!");
        console.error("Double-check that your .env file is named correctly and saved as UTF-8.");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
};

export const devKey="h2a0m0z4a"
