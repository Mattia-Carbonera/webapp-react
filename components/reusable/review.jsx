export default function Review({ name, review, vote }) {
  return (
    <div className="review-container">
      <div className="logo-review-container">
        <div className="logo-review">
          <span>{name[0]}</span>
        </div>
        <div className="vote-review-container">
          <i className={`fa-${vote < 1 ? "regular" : "solid"} fa-star`}></i>
          <i className={`fa-${vote < 2 ? "regular" : "solid"} fa-star`}></i>
          <i className={`fa-${vote < 3 ? "regular" : "solid"} fa-star`}></i>
          <i className={`fa-${vote < 4 ? "regular" : "solid"} fa-star`}></i>
          <i className={`fa-${vote < 5 ? "regular" : "solid"} fa-star`}></i>
        </div>
        <div className="name-review-container">
          <span>{name}</span>
        </div>
      </div>
      <div className="review">
        <p>{review}</p>
      </div>
    </div>
  );
}
