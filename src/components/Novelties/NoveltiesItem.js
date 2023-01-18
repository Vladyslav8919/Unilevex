import { useState } from 'react';

const StoreItem = ({ id, image, room, title, cost, info }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="item-card">
      <div className="item-img-container">
        <img src={image} className="item-img" alt="" />
        <p className="item-room">{room}</p>
      </div>
      <div className="item-info">
        <div className="item-title">
          <h4>{title}</h4>
          <span>${cost}</span>
        </div>
        <p>
          {showMore ? info : info.substring(0, 130)}... 
          <button
            className="show-more--btn"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {!showMore ? 'Read more' : 'Show less'}
          </button>
        </p>
      </div>
    </article>
  );
};
export default StoreItem;
