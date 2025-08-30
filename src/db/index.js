import mongoose from "mongoose";

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) {
      return this.connection;
    }

    try {
      this.connection = await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        autoIndex: false,
        maxPoolSize: 100, // make it 500 in prod for millions,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        tls: true,
      });

      return this.connection;
    } catch (error) {
      console.error("mongodb connection error", error);
      process.exit(1);
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
module.exports = Database;
