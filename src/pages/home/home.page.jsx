import React from 'react'
import {
  Button,
  Space,
  Divider,
  Form,
  Typography,
  Select,
  InputNumber,
  Switch,
  Slider,
  DatePicker,
  Rate,
} from 'antd'
import { formatChar, formatCurrency } from '../../utils'
import AntSvg from '../../assets/svgs/ant.svg'

const { Option } = Select
const { Title } = Typography

const HomePage = () => {
  return (
    <div>
      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
        <Space align='start'>
          <img
            style={{ width: 40, height: 40 }}
            src={AntSvg}
            alt='Ant Design'
          />
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design
          </Title>
        </Space>
      </section>
      <Divider style={{ marginBottom: 60 }}>Form</Divider>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label='Number'>
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className='ant-form-text'> Machine</span>
          <a href='https://ant.design'>Link Text</a>
        </Form.Item>
        <Form.Item label='Switch'>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label='Swipe'>
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item label='Selector'>
          <Select defaultValue='lucy' style={{ width: 192 }}>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>
              disabled
            </Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label='Date Select'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Date Range'>
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label='Score'>
          <Rate defaultValue={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>

      <Title>Currenry Format: {formatCurrency(5000)} </Title>
      <Title>
        String Format:{' '}
        {formatChar('This is a very very long string to test out', 20)}
      </Title>
    </div>
  )
}

export default HomePage
