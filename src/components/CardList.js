import React from "react";
import Card from "./Card";

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};
