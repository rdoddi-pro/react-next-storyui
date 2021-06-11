import React, { useState } from 'react'
import {
  Layout,
  Breadcrumb,
  Wstepper,
  StepperItem,
  MobileHeader,
} from '@pabau/ui'
import styles from './lead-forms.module.less'
import LeadSettings from './lead-capture/lead-setting'
import LeadIntegration from './lead-capture/lead-integration'
import LeadTesting from './lead-capture/lead-testing'
import LeadResult from './lead-capture/lead-result'
import LeadFormResult from './lead-capture/lead-forms/lead-form-result'
import LeadCustomizeForm from './lead-capture/lead-forms/lead-customize-form'
import {
  FlagOutlined,
  HomeOutlined,
  LeftOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Typography } from 'antd'
import Link from 'next/link'

const { Title } = Typography

export const LeadForms: React.FC = () => {
  const allAPISteps = ['Basic', 'Configure(API)', 'Testing(API)', 'Result']
  const allFormSteps = ['Basic', 'Customize Form', 'Result']
  const [activeStepper, setActiveStepper] = useState('API')
  const [activeStep, setActiveStep] = useState(0)

  const apiStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      img: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Configure(API)',
      img: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Testing(API)',
      img: <ToolOutlined />,
      isActive: false,
      index: 2,
    },
    {
      step: 4,
      name: 'Result',
      img: <FlagOutlined />,
      isActive: false,
      index: 3,
    },
  ]

  const formStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      img: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Customize Form',
      img: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Result',
      img: <FlagOutlined />,
      isActive: false,
      index: 2,
    },
  ]

  const setActiveStepperForLead = (type) => {
    setActiveStepper(type)
  }

  const onAPIFlowComplete = () => {
    setActiveStep(allAPISteps.length - 1)
  }

  return (
    <>
      <div className={styles.desktopViewNone}>
        <MobileHeader className={styles.mobileHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.mobileHeaderTextStyle}>
              <Link href="/setup">
                <LeftOutlined />
              </Link>
              <p>Lead Capture</p>
            </div>
          </div>
        </MobileHeader>
      </div>

      <Layout active={'setup'}>
        <div className={styles.cardWrapper}>
          <div style={{ background: '#FFF' }}>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Lead Capture', path: '' },
              ]}
            />
            <Title>Lead Capture</Title>
          </div>
          <Wstepper
            data={activeStepper === 'API' ? apiStepper : formStepper}
            active={activeStep}
            disableNextStep={
              activeStepper === 'API' &&
              allAPISteps[activeStep] === 'Testing(API)'
            }
            onActiveStepChange={(step) => {
              setActiveStep(step)
            }}
          >
            {allAPISteps[activeStep] === 'Basic' && (
              <LeadSettings
                activeStepper={activeStepper}
                captureLeadStepChange={setActiveStepperForLead}
              />
            )}
            {activeStepper === 'API' ? (
              <>
                {allAPISteps[activeStep] === 'Configure(API)' && (
                  <LeadIntegration />
                )}
                {allAPISteps[activeStep] === 'Testing(API)' && (
                  <LeadTesting onAPIFlowComplete={onAPIFlowComplete} />
                )}
                {allAPISteps[activeStep] === 'Result' && <LeadResult />}
              </>
            ) : (
              <>
                {allFormSteps[activeStep] === 'Customize Form' && (
                  <LeadCustomizeForm />
                )}
                {allFormSteps[activeStep] === 'Result' && <LeadFormResult />}
              </>
            )}
          </Wstepper>
        </div>
      </Layout>
    </>
  )
}

export default LeadForms
