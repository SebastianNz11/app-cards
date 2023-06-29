import { Card } from "./card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Fazt Web",
      image: image1,
      url : 'https://www.google.com/'
    },
    {
      id: 2,
      title: "Fazt Blog",
      image: image2,
      url : 'https://www.google.com/'
    },
    {
      id: 3,
      title: "Fazt Youtube",
      image: image3,
      url : 'https://www.google.com/'
    },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(card => (
          <div className="col-4" key={card.id}>
            <Card image = {card.image} title= {card.title} url = {card.url}/>
          </div>
        ))}
      </div>
    </div>
  );
};
