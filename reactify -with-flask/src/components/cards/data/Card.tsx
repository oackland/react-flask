import React from "react";

interface Cards {
  cardTitle: string;
  backTitle: string;
  imageUrl: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  summary: string;
  tourName: string;
}

const Card: React.FC<Cards> = ({
  cardTitle,
  backTitle,
  imageUrl,
  content1,
  content2,
  content3,
  content4,
  content5,
  summary,
}) => {
  return (
    <div className="card">
      <div className="front-side">
        <img src={imageUrl} alt={cardTitle} className="card-image" />
        <h1 className="tour-name">{cardTitle}</h1>
        <ul className="card-list">
          <li className="card-list-item">{content1}</li>
          <li className="card-list-item">{content2}</li>
          <li className="card-list-item">{content3}</li>
          <li className="card-list-item">{content4}</li>
          <li className="card-list-item">{content5}</li>
        </ul>
        <button className="navigation-button">price &gt;&gt;</button>
      </div>
      <div className="back-side center">
        <button className="navigation-button">&lt;&lt; back</button>
        <h3 className="tour-price">{backTitle}</h3>
        <button className="card-button">{summary}</button>
      </div>
    </div>
  );
};

export default Card;
