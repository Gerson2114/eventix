import React from "react";

interface CardProps {
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-4">
        <h5>{title}</h5>
        <p className="fs-4">{value}</p>
      </div>
    </div>
  );
};

export default Card;
