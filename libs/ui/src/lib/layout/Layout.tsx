import React, { FC, useState, MouseEvent } from 'react'
import { ReactComponent as IllustrationSvg } from './example.svg'
import { Card, Layout as AntLayout } from 'antd'
import { Footer, Header, Menu } from '@pabau/ui'
import styles from './Layout.module.less'
import classNames from 'classnames'
// import { isMobile, isTablet } from 'react-device-detect'

const { Content } = AntLayout
export interface LayoutProps {
  pageTitle?: string
  newButtonText?: string
  onNewClicked?: string | (() => void)
  onCancelClicked?: true | (() => void)
  card?: true
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
  active?: string
  onCreateChannel?: (
    name: string,
    description: string,
    isPrivate: boolean
  ) => void
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
}

export const Layout: FC<LayoutProps> = ({
  searchRender,
  onCreateChannel,
  pageTitle,
  newButtonText,
  onNewClicked,
  onCancelClicked,
  onMessageType,
  card,
  children,
  active,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(true)

  const onSideBarCollapsed = (collapsed) => setCollapsed(collapsed)

  return (
    <AntLayout {...rest} className={styles.main}>
      <AntLayout style={{ background: '#F7F7F9' }}>
        {/* {(isTablet || !isMobile) && <Header searchRender={searchRender} />} */}
        <Header
          searchRender={searchRender}
          onCreateChannel={onCreateChannel}
          onMessageType={onMessageType}
        />
        <AntLayout className={styles.headerMargin}>
          <Menu onSideBarCollapsed={onSideBarCollapsed} active={active} />
          <Content
            className={classNames(
              styles.layoutContent,
              collapsed ? styles.collapsedSidebarMargin : styles.sidebarMargin
            )}
          >
            <Content
              style={{
                // boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
                position: 'relative',
                minHeight: 'calc(100vh - 146px)',
                // background: '#FFF',
                borderRadius: '4px',
              }}
            >
              {card ? (
                <Card
                  title={pageTitle}
                  style={{ width: '50vmin', margin: '0 auto' }}
                >
                  {children}
                </Card>
              ) : (
                <>
                  {pageTitle && <h1>{pageTitle}</h1>}
                  {children}
                </>
              )}
            </Content>
            <Footer />
          </Content>

          {onNewClicked && (
            <Content
              style={{
                padding: '1em',
                boxShadow: '0 0px 9px -4px rgba(0,0,0,0.8)',
                borderRadius: '0.5em',
                backgroundColor: '#f4f4f4',
                position: 'relative',
                marginBottom: '0',
              }}
            >
              <h4>Related guides</h4>
              <ul>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>Setting up a Marketing Source</a>
                </li>
              </ul>
              <div
                style={{
                  position: 'absolute',
                  top: '-2em',
                  right: '0px',
                  left: '50%',
                  bottom: '0',
                  overflow: 'hidden',
                }}
              >
                <IllustrationSvg width={600} height={200} />
              </div>
            </Content>
          )}
        </AntLayout>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
