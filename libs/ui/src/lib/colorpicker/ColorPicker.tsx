import React, { FC, useEffect, useState } from 'react'
// import { ReactComponent as CheckBadge } from '../../assets/images/check-badge.svg'
import styles from './ColorPicker.module.less'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
interface P {
  color: string
  selected: boolean
  isDarkColor?: boolean
  onClick(): void
  onHover?(): void
  onLeave?(): void
}

const ColorItem: FC<P> = ({
  color,
  selected,
  isDarkColor = false,
  onClick,
  onHover,
  onLeave,
}) => {
  return (
    <div
      className={classNames(
        styles.colorItem,
        selected && styles.selectedColor,
        !isDarkColor && styles.toggleOpacity
      )}
      style={{
        backgroundColor: color,
        // border: hovering || selected ? '1px solid #54B2D3' : 'none',
        boxSizing: 'border-box',
        // opacity: hovering || selected ? '1' : '0.2',
      }}
      onClick={() => {
        onClick()
      }}
      onMouseEnter={() => onHover?.()}
      onMouseLeave={() => onLeave?.()}
    >
      <CheckOutlined className={styles.badge} />
    </div>
  )
}

interface PickerProps {
  heading: string
  selectedColor?: string
  isDarkColor?: boolean
  onSelected(val): void
  onHover?(val): void
  onLeave?(val): void
}

export const ColorPicker: FC<PickerProps> = ({
  heading = 'Background color',
  selectedColor = '',
  isDarkColor = false,
  onSelected,
  onHover,
  onLeave,
}) => {
  const colorData = [
    '#03dbfc',
    '#fca903',
    '#8c03fc',
    '#0ffc03',
    '#03fcfc',
    '#5e03fc',
    '#03e7fc',
    '#45fc03',
    '#84fc03',
    '#fcf403',
    '#fcce03',
    '#d2fc03',
    '#f4fc03',
    '#bf15c2',
    '#486578',
    '#9a3ac9',
  ]

  const [selColor, setSelColor] = useState(selectedColor)

  useEffect(() => {
    setSelColor(selectedColor)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor])
  const onClickColorItem = (color) => {
    setSelColor(color)
    onSelected(color)
  }

  return (
    <div>
      {' '}
      {/*  style={{ marginTop: '16px' }} */}
      <span className={styles.heading}>{heading}</span>
      <div className={styles.colorPickerWrap}>
        {colorData.map((color) => (
          <ColorItem
            key={`${heading}${color}`}
            color={color}
            selected={color === selColor}
            isDarkColor={isDarkColor}
            onClick={() => onClickColorItem(color)}
            onHover={() => onHover?.(color)}
            onLeave={() => onLeave?.(color)}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
