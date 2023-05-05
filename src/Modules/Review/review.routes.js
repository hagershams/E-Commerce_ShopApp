import express from 'express';
const ReviewRoutes = express.Router()
import * as ReviewControllers from './review.controller.js'

ReviewRoutes.route('/').get(ReviewControllers.GetAllReviews)//Comes from Getting Spicific product
.post(ReviewControllers.AddReview)
ReviewRoutes.route('/:id').get(ReviewControllers.GetReview)
.delete(ReviewControllers.DeleteReview)

export default ReviewRoutes;