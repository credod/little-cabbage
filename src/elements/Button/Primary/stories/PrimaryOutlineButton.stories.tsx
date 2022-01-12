import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryOutlineButton from "../PrimaryOutlineButton";

export default {
  title: "little-cabbage/Button/Primary",
  component: PrimaryOutlineButton,
} as ComponentMeta<typeof PrimaryOutlineButton>;

const Template: ComponentStory<typeof PrimaryOutlineButton> = (args) => (
  <PrimaryOutlineButton {...args}>Click Me!</PrimaryOutlineButton>
);

export const PrimaryOutline = Template.bind({});
