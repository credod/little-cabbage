import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "little-cabbage/Box",
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bg: { control: "color" },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => (
  <Box display="flex" alignItems="center" justifyContent="center" {...args}>
    <h1>one</h1>
    <h1>two</h1>
    <h1>three</h1>
  </Box>
);

export const FlexRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlexRow.args = {
  flexDirection: "row",
};

export const FlexCol = Template.bind({});
FlexCol.args = {
  flexDirection: "column",
};

export const PaddingMargin = Template.bind({});
PaddingMargin.args = {
  m: "40px",
  px: "20px",
  py: "30px",
  bg: "lightblue",
};
