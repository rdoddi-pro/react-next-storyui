import React from 'react'
import { render } from '@testing-library/react'

import RadioGroup from './RadioGroup'

describe('RadioGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroup radioItems={[]} value="" />)
    expect(baseElement).toBeTruthy()
  })
})
