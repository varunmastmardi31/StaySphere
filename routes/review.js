const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const reviewController = require("../controllers/reviews.js");

const {
  isLoggedIn,
  validatereview,
  isReviewAuthor,
} = require("../middleware.js");

// Reviews Post route

router.post(
  "/",
  isLoggedIn,
  validatereview,
  wrapAsync(reviewController.createReview)
);

// Reviews Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
