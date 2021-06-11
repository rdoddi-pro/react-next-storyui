import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
  aggregateQuery?: DocumentNode
  tableSearch?: boolean
  updateOrderQuery?: DocumentNode
  showNotificationBanner?: boolean
  createPage?: boolean
  notificationBanner?: React.ReactNode
  createPageOnClick?(): void
  addFilter?: boolean
  needTranslation?: boolean
}

const CrudLayout: FC<P> = ({ ...props }) => <CrudTable {...props} />

export default CrudLayout
