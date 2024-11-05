import RatingStars from './RatingStars.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<RatingStars> = {
  title: 'component/Indicators/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
  argTypes: {
    rating: { control: { type: 'range', min: 0, max: 5 } },
    state: { control: 'select', options: ['hover', 'selected', 'inactive'] },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3,
    state: 'inactive',
  }
};

export const Hover: Story = {
  args: {
    rating: 3,
    state: 'hover',
  }
};

export const Selected: Story = {
  args: {
    rating: 4,
    state: 'selected',
  }
};

export const Inactive: Story = {
  args: {
    rating: 0,
    state: 'inactive',
  }
};