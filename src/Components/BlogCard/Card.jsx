import "/Card.css";
import PropTypes from "prop-types";

function Card({ image, description, author, date, read }) {
  return (
    <>
      <article className="card-container">
        <section className="img-container">
          <img src={image} alt={description} className="card-img" />
        </section>
        <section className="data-container">
          <p className="card-desc">{description}</p>
          <p className="card-author">{author}</p>
          <div className="small-content">
            <p className="card-date">{date}</p>
            <p className="card-read">{read}</p>
          </div>
        </section>
      </article>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  read: PropTypes.string,
};

export default Card;
