import { useState } from "react";

export default function ReviewsForm() {
  const [newReview, setNewReview] = useState({
    name: "",
    vote: "",
    text: "",
  });

  const reviewsformHandler = (e) => {
    e.preventDefault();
    console.log(newReview);
  };

  const inputReviewsFormHandler = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3 className="reviews-form-title mt-5">Add review:</h3>
      <form className="reviews-form-container" onClick={reviewsformHandler}>
        <div className="name-form-container m-2">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            name="name"
            onChange={inputReviewsFormHandler}
            placeholder="Name"
          />
        </div>
        <div className="vote-form-container m-2">
          {/* <label htmlFor="vote">vote</label> */}
          <input
            type="number"
            name="vote"
            onChange={inputReviewsFormHandler}
            placeholder="Vote"
          />
        </div>
        <div className="review-text-form-container m-2">
          {/* <label htmlFor="text">text</label> */}
          <input
            type="text"
            name="text"
            onChange={inputReviewsFormHandler}
            placeholder="Review"
          />
        </div>
        <button className="btn btn-secondary m-2">Aggiungi</button>
      </form>
    </>
  );
}
