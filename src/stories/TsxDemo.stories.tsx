import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TsxDemo, { TsxDemoProps } from '../components/TsxDemo';

export default {
  title: 'Example/TsxDemo',
  component: TsxDemo,
  argTypes: {
    backgroundColor: { control: 'color' },
    name: {},
  },
} as Meta;

const Template: Story<TsxDemoProps> = (args) => <TsxDemo {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Named = Template.bind({});
Named.args = {
  name: 'hello',
};
