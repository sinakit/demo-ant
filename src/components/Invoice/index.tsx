import { EnvironmentOutlined, PhoneOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './style.css';
const Invoice = () => {
  // handle print
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'វេជ្ជបញ្ជា',

    onBeforePrint: () => console.log('before printing...'),
    onAfterPrint: () => console.log('after printing...'),
    removeAfterPrint: true,
  });
  return (
    <>
      <Button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        type="primary"
        style={{
          marginTop: '5px',
        }}
      >
        <PrinterOutlined />
        Print
      </Button>
      <div ref={contentToPrint} className="container">
        <div className="header">
          <div className="logo">
            <img src="/doctor.jpeg" alt="logo" />
            <h2>មន្ទីរសម្រាកព្យាបាលសុជាតិមាលា</h2>
          </div>
          <div className="title">
            <div className="title__left">
              <h1>ព្រះរាជាណាចក្រកម្ពុជា</h1>
              <h1>ជាតិ សាសនា ព្រះមហាក្សត្រ</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>វេជ្ជបញ្ជា</h2>
          <Row>
            <Col span={6}>
              <p>ឈ្មោះ KOE SOK</p>{' '}
            </Col>
            <Col span={6}>
              <p>ភេទ ប្រុស</p>{' '}
            </Col>
            <Col span={6}>
              <p>អាយុ 41ឆ្នាំ</p>
            </Col>
            <Col span={6}>
              <p>ទូរសព្ទ 0962094626</p>
            </Col>
          </Row>
          <p>អាសយដ្ឋាន ភូមិ toukmeas ឃុំ/សង្កាត់ toukmeas ស្រុក/ខណ្ឌ toukmeas ខេត្ត/ក្រុង KP</p>
          <h4>រោគវិនិឆ្ឆ័យ PHARYNGITIS</h4>

          <Row>
            <Col span={12}>
              <p>1. cefixime 200mg</p>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'right' }}>ចំនួនៈ 9 គ្រាប់</p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p>ព្រឹក 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ថ្ងៃ 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ល្ងាច 1 គ្រាប់​(ក្រោយបាយ)</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p>2. cefixime 200mg</p>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'right' }}>ចំនួនៈ 9 គ្រាប់</p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p>ព្រឹក 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ថ្ងៃ 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ល្ងាច 1 គ្រាប់​(ក្រោយបាយ)</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p>3. cefixime 200mg</p>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'right' }}>ចំនួនៈ 9 គ្រាប់</p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p>ព្រឹក 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ថ្ងៃ 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ល្ងាច 1 គ្រាប់​(ក្រោយបាយ)</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p>4. cefixime 200mg</p>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'right' }}>ចំនួនៈ 9 គ្រាប់</p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p>ព្រឹក 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ថ្ងៃ 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ល្ងាច 1 គ្រាប់​(ក្រោយបាយ)</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p>5. cefixime 200mg</p>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'right' }}>ចំនួនៈ 9 គ្រាប់</p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <p>ព្រឹក 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ថ្ងៃ 1 គ្រាប់(ក្រោយបាយ)</p>
            </Col>
            <Col span={8}>
              <p>ល្ងាច 1 គ្រាប់​(ក្រោយបាយ)</p>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <p
            style={{
              textAlign: 'right',
            }}
          >
            ថ្ងៃទី 27 ខែ មេសា ឆ្នាំ 2024
          </p>
          <div className="footer-doctor-name">
            <p>គ្រូពេទ្យព្យាបាល</p>
          </div>
          <div className="footer-doctor-signature">
            <p>(មកពិនិត្យលើកក្រោយ សូមមេត្តាយកវេជ្ជបញ្ជានេះមកជាមួយផង)</p>
            <p>
              <i>Issued No: 89921668</i>
            </p>
            <p>
              <EnvironmentOutlined />
              &nbsp; ភូមិទូកមាស ឃុំទូកមាសខាងលិច ស្រុកបន្ទាយមាស ខេត្តកំពត
            </p>
            <p>
              <PhoneOutlined /> &nbsp;081 833 883 – 069 833 883 – 067 833 883
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
