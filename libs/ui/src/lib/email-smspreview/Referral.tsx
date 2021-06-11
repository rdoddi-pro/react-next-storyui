import React, { FC } from 'react'
import { ReferralProps, CancelAClassBookingProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'
import { Button } from '../button/Button'

export const Referral: FC<CancelAClassBookingProps & ReferralProps> = ({
  message,
  footerText,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>
            As a loyal client, we would like to offer you [REWARD] OFF for your
            next visit. Please find your voucher code below.
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button className={styles.bookButton}>Voucher Code</Button>
      </Row>
      <Row gutter={[0, 4]} className={styles.textBox}>
        <Col>
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: footerText || '' }}
          ></span>
        </Col>
      </Row>
    </>
  )
}

export default Referral
