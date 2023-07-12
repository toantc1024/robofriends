import React from "react";
import Card from "./Card";
import { Robot } from "../containers/App";
const CardList = ({ robots }: { robots: Array<Robot> }) => {
  const cardsArray = robots.map((robot, index) => (
    <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
  ));
  return <div>{cardsArray}</div>;
};

export default CardList;
