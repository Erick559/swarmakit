import { Meta, Story } from '@storybook/vue3';
import EmojiReactionPoll from './EmojiReactionPoll.vue';

export default {
  title: 'component/Polls/EmojiReactionPoll',
  component: EmojiReactionPoll,
  tags: ['autodocs'],
  argTypes: {
    question: { control: 'text' },
    emojis: { control: 'array' },
    initialSelection: { control: 'number' },
    isDisabled: { control: 'boolean' },
    showResults: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => ({
  components: { EmojiReactionPoll },
  setup() {
    return { args };
  },
  template: '<EmojiReactionPoll v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  question: 'How do you feel about this topic?',
  emojis: ['😀', '😐', '😢'],
  initialSelection: null,
  isDisabled: false,
  showResults: false,
};

export const Unanswered = Template.bind({});
Unanswered.args = {
  ...Default.args,
  initialSelection: null,
};

export const Answered = Template.bind({});
Answered.args = {
  ...Default.args,
  initialSelection: 0,
};

export const ResultsVisible = Template.bind({});
ResultsVisible.args = {
  ...Default.args,
  showResults: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};