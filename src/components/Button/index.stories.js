import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from './'

export default { component: Button, title: 'Button', decorators: [withKnobs] }

export const withText = () => (
  <Button
    primary={boolean('Primary', false)}
    disabled={boolean('Disabled', false)}
    onClick={action('clicked')}
  >
    {text('Label', 'Hello Button')}
  </Button>
)

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
