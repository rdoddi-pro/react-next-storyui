/* eslint-disable */

import { Button } from 'antd'
import styles from './Table.module.less'
import React, { FC, useState } from 'react'
import { Table } from './Table'
import { data } from './mock'
import { ContactsOutlined } from '@ant-design/icons'

const padlocked = ['Book Now Link', 'Instagram', 'Facebook']

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
    render: function renderSourceName(val, rowData) {
      if (rowData.isLocked) {
        return <>{val}</>
      } else {
        return val
      }
    },
  },
  {
    title: 'STATUS',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
  },
]

export default {
  component: Table,
  title: 'Basics/Table',
  args: {
    draggable: true,
    dataSource: data,
    columns,
    padlocked,
    noDataText: 'rota templates',
    noDataBtnText: 'Rota Templete',
  },
  argTypes: {
    draggable: { control: { type: 'boolean' } },
  },
}

const DragFeatureStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }
  return (
    <Table
      {...args}
      padlocked={[]}
      dataSource={dataSource}
      updateDataSource={updateDataSource}
    />
  )
}
export const TableWithDragFeature = DragFeatureStory.bind({})

const NoDragFeatureStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }
  return (
    <Table
      {...args}
      padlocked={[]}
      draggable={false}
      dataSource={dataSource}
      updateDataSource={updateDataSource}
    />
  )
}
export const TableWithNoDragFeature = NoDragFeatureStory.bind({})

const TableWithReservedWordsStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }

  return (
    <Table
      {...args}
      dataSource={dataSource}
      updateDataSource={updateDataSource}
    />
  )
}
export const TableWithReservedWords = TableWithReservedWordsStory.bind({})

const TableWithCustomColorStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }

  return (
    <Table
      {...args}
      padlocked={[]}
      dataSource={dataSource}
      isCustomColorExist={true}
      updateDataSource={updateDataSource}
    />
  )
}
export const TableWithCustomColor = TableWithCustomColorStory.bind({})

const TableWithCustomIconStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState(data)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }

  return (
    <Table
      {...args}
      padlocked={[]}
      dataSource={dataSource}
      isCustomIconExist={true}
      updateDataSource={updateDataSource}
    />
  )
}
export const TableWithCustomIcon = TableWithCustomIconStory.bind({})

const TableWithNoDataStory: FC = ({ ...args }) => {
  const [dataSource, setDataSource]: any = useState([])
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setDataSource(newData)
  }

  return (
    <div style={{ border: '1px solid var(--light-grey-color)' }}>
      <Table
        {...args}
        padlocked={[]}
        dataSource={dataSource}
        isCustomColorExist={true}
        updateDataSource={updateDataSource}
        noDataIcon={<ContactsOutlined />}
      />
    </div>
  )
}
export const TableWithNoData = TableWithNoDataStory.bind({})
