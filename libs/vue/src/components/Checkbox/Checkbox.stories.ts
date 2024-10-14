import Checkbox from './Checkbox.vue';

export default {
  component: Checkbox,
  title: 'component/Forms/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args">Example Checkbox</Checkbox>',
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};