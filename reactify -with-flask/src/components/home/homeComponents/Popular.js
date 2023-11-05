// import React from "react";
//
// interface PopularTourProps {
//   tourName: string;
//   backTitle: string;
//   imageUrl: string;
//   content1: string;
//   content2: string;
//   content3: string;
//   content4: string;
//   content5: string;
//   summary: string;
// }
//
// const PopularTour: React.FC<PopularTourProps> = ({
//   tourName,
//   backTitle,
//   imageUrl,
//   content1,
//   content2,
//   content3,
//   content4,
//   content5,
//   summary,
// }) => {
//   return (
//     <div className="card">
//       <div className="front-side">
//         <img src={imageUrl} alt={tourName} className="card-image" />
//         <h1 className="tour-name">{tourName}</h1>
//         <ul className="card-list">
//           <li className="card-list-item">{content1}</li>
//           <li className="card-list-item">{content2}</li>
//           <li className="card-list-item">{content3}</li>
//           <li className="card-list-item">{content4}</li>
//           <li className="card-list-item">{content5}</li>
//         </ul>
//         <button className="navigation-button">price &gt;&gt;</button>
//       </div>
//       <div className="back-side center">
//         <button className="navigation-button">&lt;&lt; back</button>
//         <h3 className="tour-price">{backTitle}</h3>
//         <button className="card-button">{summary}</button>
//       </div>
//     </div>
//   );
// };
//
// const PopularTours: React.FC = () => {
//   return (
//     <section className="popular-tours">
//       <h1 className="popular-tours-heading">Libre Coding Space</h1>
//       <div className="cards-wrapper">
//         <PopularTour
//           tourName="Task Manager"
//           backTitle="$399"
//           imageUrl="../../../public/img/TaskList.jpg"
//           content1="Up to 20 people"
//           content2="4 tour guides"
//           content3="Sleep in private tents"
//           content4="Difficulty: medium"
//           content5="Other content"
//           summary="var"
//         />
//         <PopularTour
//           tourName="PokeApi"
//           backTitle="$499"
//           imageUrl="../../..//public/img/poke-api-final.png"
//           content1="Up to 30 people"
//           content2="7 tour guides"
//           content3="Sleep in private tents"
//           content4="Difficulty: hard"
//           content5="Other content"
//           summary="Summary of the tour 2"
//         />
//         {/* Add more PopularTour components with different props as needed */}
//       </div>
//     </section>
//   );
// };
//
// export default PopularTours;
