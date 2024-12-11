import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupMemberAvatar, { GroupMemberAvatarProps } from './GroupMemberAvatar';

export default {
  title: 'component/Chat/GroupMemberAvatar',
  component: GroupMemberAvatar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupMemberAvatarProps> = (args) => <GroupMemberAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  status: 'online',
  altText: 'User Avatar',
};

export const Online = Template.bind({});
Online.args = {
  ...Default.args,
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  ...Default.args,
  status: 'offline',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  status: 'active',
};

export const Away = Template.bind({});
Away.args = {
  ...Default.args,
  status: 'away',
};

export const Busy = Template.bind({});
Busy.args = {
  ...Default.args,
  status: 'busy',
};