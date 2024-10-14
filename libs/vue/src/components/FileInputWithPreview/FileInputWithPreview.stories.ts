import FileInputWithPreview from './FileInputWithPreview.vue';

export default {
  component: FileInputWithPreview,
  title: 'component/Forms/FileInputWithPreview',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { FileInputWithPreview },
  setup() {
    return { args };
  },
  template: '<FileInputWithPreview v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const FileUploaded = Template.bind({});
FileUploaded.args = {
  disabled: false,
};

export const PreviewDisplayed = Template.bind({});
PreviewDisplayed.args = {
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};