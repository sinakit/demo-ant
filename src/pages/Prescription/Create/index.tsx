import { DiffOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const Create: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  // const intl = useIntl();

  return (
    <PageContainer title=" ">
      <Card
        title={
          <>
            <DiffOutlined />
            <span>វេជ្ជបញ្ជារថ្មី</span>
          </>
        }
      >
        <div
          style={{
            textAlign: 'center',
            paddingBottom: '10px',
          }}
        >
          បញ្ជូលពត៌មានអ្នកជំងឺរ
        </div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" size="large">
          <Row>
            <Col span={12}>
              <Form.Item
                label="លេខទូរសព្ទ"
                name={'phone'}
                rules={[{ required: true, message: 'ទាមទា' }]}
              >
                <Input
                  placeholder="បញ្ចូលលេខទូរសព្ទ"
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="ឈ្មោះអ្នកជំងឺរ"
                name={'name'}
                rules={[{ required: true, message: 'ទាមទា' }]}
              >
                <Input
                  placeholder="បញ្ចូលឈ្មោះអ្នកជំងឺរ"
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item label="ភេទ" name={'gender'} rules={[{ required: true, message: 'ទាមទា' }]}>
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={() => {}}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="អាយុ"
                name={'age'}
                rules={[{ required: false, message: 'ទាមទា' }]}
              >
                <InputNumber
                  placeholder="បញ្ចូលអាយុ"
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default Create;
