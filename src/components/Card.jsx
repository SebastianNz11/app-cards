import PropTypes from "prop-types";
import './cards.css'
import 'animate.css';

export const Card = ({ image, title, url, text }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__backInUp">
      <img src={image} alt="" />
      <div className="card-body text-light pt-3 pb-4">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary p-1">
          {
            text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Corporis illo adipisci fuga ea enim facilis nesciunt tenetur, cumque ipsa repudiandae, cum unde magnam. Esse, neque! Nulla, quidem et!'
          }
        </p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="blank_"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
