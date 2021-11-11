import mongoose from 'mongoose';
import { constants } from '../config/constants';

class MongodbConnection {
  public async connection() {
    try {
      await mongoose.connect(constants.MONGODB_CONNECTION);
      console.log('Mongodb connected!');
    } catch(error: any) {
      console.log(`error connection: ${error.message}`);
      process.exit(1);
    }
  }
};

export { MongodbConnection };