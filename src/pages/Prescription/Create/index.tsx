import { DiffOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Divider, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import ViewPrescription from './components/ViewPresription';

const { Option } = Select;

const Create: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  // const intl = useIntl();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
              <Form.Item label="អាយុ" name={'age'} rules={[{ required: false, message: 'ទាមទា' }]}>
                <InputNumber
                  placeholder="បញ្ចូលអាយុ"
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left">ការប្រើប្រាស់ថ្នាំ</Divider>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      style={{ width: 200 }}
                      {...restField}
                      label="ថ្នាំ"
                      wrapperCol={{ span: 20 }}
                      labelCol={{ span: 4 }}
                      name={[name, 'first']}
                      rules={[{ required: true, message: 'Missing first name' }]}
                    >
                      <Select placeholder="Select">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      style={{ width: 200 }}
                      {...restField}
                      wrapperCol={{ span: 18 }}
                      labelCol={{ span: 6 }}
                      label="ព្រឺក"
                      name={[name, 'last']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input
                        addonAfter={
                          <Select defaultValue={'1'} style={{ width: 70 }}>
                            <Option value="1">មប</Option>
                            <Option value="2">កប</Option>
                          </Select>
                        }
                        placeholder="1"
                      />
                    </Form.Item>
                    <Form.Item
                      style={{ width: 200 }}
                      {...restField}
                      wrapperCol={{ span: 18 }}
                      labelCol={{ span: 6 }}
                      label="ថ្ងៃ"
                      name={[name, 'last']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input
                        addonAfter={
                          <Select defaultValue={'1'} style={{ width: 70 }}>
                            <Option value="1">មប</Option>
                            <Option value="2">កប</Option>
                          </Select>
                        }
                        placeholder="1"
                      />
                    </Form.Item>
                    <Form.Item
                      style={{ width: 200 }}
                      {...restField}
                      wrapperCol={{ span: 18 }}
                      labelCol={{ span: 6 }}
                      label="ល្ងាច"
                      name={[name, 'last']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input
                        addonAfter={
                          <Select defaultValue={'1'} style={{ width: 70 }}>
                            <Option value="1">មប</Option>
                            <Option value="2">កប</Option>
                          </Select>
                        }
                        placeholder="1"
                      />
                    </Form.Item>
                    <Form.Item
                      style={{ width: 180 }}
                      {...restField}
                      wrapperCol={{ span: 16 }}
                      labelCol={{ span: 8 }}
                      label="សរុប"
                      name={[name, 'last']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <InputNumber placeholder="1" />
                      &nbsp;
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Form.Item>
                  </Space>
                ))}
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  បន្ថែមថ្នាំ
                </Button>
              </>
            )}
          </Form.List>
        </Form>
        <br />
        <Button onClick={showModal} type="primary">
          View
        </Button>
        <ViewPrescription
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Card>
    </PageContainer>
  );
};

export default Create;
