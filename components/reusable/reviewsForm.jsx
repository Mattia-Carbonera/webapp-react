import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewsForm({ id }) {
  const [newReview, setNewReview] = useState({
    name: "",
    vote: "",
    text: "",
  });

  // * EXECUTING FETCH FOR POST
  const urlFrontend = "http://localhost:3000/db/add-review/" + id.id;

  function fetchPost() {
    fetch(urlFrontend, {
      method: "POST",
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  }

  //   * MAKE A HANDLER OF FORM AND INPUT
  const reviewsformHandler = (e) => {
    e.preventDefault();
    console.log(newReview);

    fetchPost();
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
      <form className="reviews-form-container" onSubmit={reviewsformHandler}>
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
