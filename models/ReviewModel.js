import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  review_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
    unique: true,
  },
  
  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  reviewImage: {
    type: Schema.Types.ObjectId,
    ref: 'GridFSBucket',
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  review_date: {
    type: Date,
    required: true,
  },
  content: {
    type: String
  },
});


const Review = model('Review', reviewSchema);

export default Review;