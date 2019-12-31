import React from "react";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import Colors from './Colors'
 
export default {
  title: "Colors",
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
export const ColorGenerator = () => (
  <Colors
    colorName={text("Name", "Amethyst")}
    colorHex={color("Color", "#9b59b6")}
    colorStart={number(label, defaultValue, options)} 
  />
);