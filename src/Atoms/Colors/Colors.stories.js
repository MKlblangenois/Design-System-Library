import React from "react";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import Colors from './Colors'
 
export default {
  title: "Color generator",
  decorators: [withKnobs]
};

// Options pour le champ "colorStart"
const label = 'colorStart';
const defaultValue = 50;
const options = {
   range: true,
   min: 10,
   max: 100,
   step: 10,
};
 
// Knobs for React props
export const Color = () => (
  <Colors
    colorName={text("Name", "Amethyst")}
    colorHex={color("Color", "#9b59b6")}
    colorStart={number(label, defaultValue, options)} 
  />
);
 
// // Knobs as dynamic variables.
// export const asDynamicVariables = () => {
//   const name = text("Name", "Arunoda Susiripala");
//   const age = number("Age", 89);
 
//   const content = `I am ${name} and I'm ${age} years old.`;
//   return <div>{content}</div>;
// };