import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "../PrimaryButton";

export default {
  title: "little-cabbage/Button/Primary",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>Click Me!</PrimaryButton>
);

export const Primary = Template.bind({});
