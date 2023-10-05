import React from "react";
import PopularTour from "./data/Card";

interface DataProps {
  cardTitle: string;
  popularTourCardTitle: string;
  tourName: string;
}

const Data: React.FC<DataProps> = ({
  cardTitle,
  popularTourCardTitle,
  tourName,
}: DataProps) => {
  return (
    <section className="popular-tours">
      <h3 className="popular-tours-heading">Libre Coding Space</h3>
      <div className="cards-wrapper">
        <PopularTour
          backTitle="$399"
          imageUrl="../../../public/img/TaskList.jpg"
          content1="Up to 20 people"
          content2="4 tour guides"
          content3="Sleep in private tents"
          content4="Difficulty: medium"
          content5="Other content"
          summary="var"
          cardTitle={cardTitle}
          tourName={tourName}
        />
      </div>

      <h3 className="popular-tours-heading">Libre Coding Space</h3>
      <div className="cards-wrapper">
        <PopularTour
          tourName="Task Manager"
          backTitle="$399"
          imageUrl="../../../public/img/TaskList.jpg"
          content1="Up to 20 people"
          content2="4 tour guides"
          content3="Sleep in private tents"
          content4="Difficulty: medium"
          content5="Other content"
          summary="var"
          cardTitle={popularTourCardTitle}
        />
      </div>
    </section>
  );
};

export default Data;
