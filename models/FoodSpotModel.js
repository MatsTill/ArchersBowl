import mongoose from 'mongoose';

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foodCoverPhoto: {
    type: Schema.Types.ObjectId,
    ref: 'GridFSBucket',
    required: true,
  },
  waitTime: {
    type: Number,
    required: true,
  },

  avgRating: {
    type: Number,
    required: true,
  },
  avgPrice: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  stallImage: {
    type: Schema.Types.ObjectId,
    ref: 'GridFSBucket',
    required: true,
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: 'GridFSBucket',
    required: true,
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
