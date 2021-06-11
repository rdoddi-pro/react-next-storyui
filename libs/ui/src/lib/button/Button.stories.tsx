import React from 'react'
import {
  EyeOutlined,
  PauseCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { notification } from 'antd'
import Button from './Button'
import DropdownButton from './DropdownButton'

export default {
  component: Button,
  title: 'Basics/Button',
  args: { label: 'Pabau', disabled: false, type: '', size: 'medium' },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        selected: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        selected: 'primary',
        options: [
          'default',
          'primary',
          'ghost',
          'dashed',
          'link',
          'text',
          'danger',
        ],
      },
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ButtonStory = ({ ...args }) => <Button {...args}>{args.label}</Button>
const DropdownButtonStory = ({ ...args }) => (
  <DropdownButton {...args}>{args.label}</DropdownButton>
)

export const defaultBtn = ButtonStory.bind({})
defaultBtn.args = {
  type: 'default',
}

export const primary = ButtonStory.bind({})
primary.args = {
  type: 'primary',
}
export const ghost = ButtonStory.bind({})
ghost.args = {
  type: 'ghost',
}
export const dashed = ButtonStory.bind({})
dashed.args = {
  type: 'dashed',
}
export const link = ButtonStory.bind({})
link.args = {
  type: 'link',
}
export const text = ButtonStory.bind({})
text.args = {
  type: 'text',
}
export const danger = ButtonStory.bind({})
danger.args = {
  type: 'danger',
}

export const diabled = ButtonStory.bind({})
diabled.args = {
  type: 'primary',
  disabled: true,
}

export const preview = ButtonStory.bind({})
preview.args = {
  label: 'Preview',
  icon: <EyeOutlined />,
}

export const CustomButton = ButtonStory.bind({})
CustomButton.args = {
  label: 'Hello World',
  size: 'large',
  color: '#000',
  backgroundColor: '#54B2D3',
}

export const dropdownButton = DropdownButtonStory.bind({})
dropdownButton.args = {
  label: 'Manage Option',
  size: 'large',
  color: '#40A0C1',
  menuItems: [
    {
      title: 'Pause notifications',
      icon: <PauseCircleOutlined />,
    },
    {
      title: 'See message log',
      icon: <MessageOutlined />,
    },
  ],
  onMenuClick: (val) => {
    notification.open({ message: `Clicked '${val}'` })
  },
}
