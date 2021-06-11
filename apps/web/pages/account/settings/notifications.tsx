import { ButtonCheckbox } from '@pabau/ui'
import { Checkbox as AntCheckbox, Descriptions, Divider, Form } from 'antd'
import React, { FC } from 'react'

const Notification: FC = () => {
  const btnOptions = [
    { key: 1, label: 'iOS', disabled: false },
    { key: 2, label: 'Email', disabled: false },
    { key: 3, label: 'SMS', disabled: false },
    { key: 4, label: 'Pabau Web', disabled: false },
  ]
  const generalNotifications = [
    {
      key: 'feed_post',
      label: 'Feed Post',
      desc: 'When someone makes a post to the buzzfeeed',
    },
    {
      key: 'like_post',
      label: 'Like a post',
      desc: 'When someone likes their wall post',
    },
    {
      key: 'scheduled_report',
      label: 'Scheduled report',
      desc: 'When a scheduled report is delivered to you',
    },
    {
      key: 'appt_booked',
      label: 'Appointment booked',
      desc: 'When an appointment is booked with them',
    },
    {
      key: 'appt_cancelled',
      label: 'Appointment cancelled',
      desc: 'When an appointment is cancelled',
    },
    {
      key: 'lead_enquiry',
      label: 'Lead Enquiry',
      desc: 'When you receive new enquiry',
    },
  ]
  const apptNotifications = [
    { key: '1', label: 'News and announcements' },
    { key: '2', label: 'New feature release' },
    { key: '3', label: 'New blog post' },
  ]
  return (
    <>
      <Descriptions title="Notifications">
        <Descriptions.Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h1>GENERAL</h1>
        </Form.Item>
        {generalNotifications.map(({ key, label, desc }) => (
          <>
            <Form.Item key={key}>
              <h2>{label}</h2>
              <span>{desc}</span>
              <br />
              <br />
              {btnOptions.map(({ key, label, disabled }) => (
                <ButtonCheckbox key={key} label={label} disabled={disabled} />
              ))}
            </Form.Item>
            <Divider />
          </>
        ))}

        <Form.Item>
          <h1 className="nofiticaionApp">APPLICATION</h1>
          {apptNotifications.map(({ key, label }) => (
            <>
              <AntCheckbox className="nofiticaionAppChk" key={key}>
                {label}
              </AntCheckbox>
              <br />
            </>
          ))}
        </Form.Item>
      </Form>
    </>
  )
}

export default Notification
