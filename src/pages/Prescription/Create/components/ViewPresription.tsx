import { PrinterOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';

export interface IProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ViewPrescription = (props: IProps) => {
  const { handleCancel, handleOk, isModalOpen } = props;
  const onPrint = () => {
    message.success('Printed', 5);
  };
  return (
    <Modal
      width={'65%'}
      title={
        <div>
          <p
            style={{
              borderBottom: '1px solid #e9e9e9',
              paddingBottom: '10px',
            }}
          >
            ផ្ទៀងផ្ទាត់វេជ្ជបញ្ជា
          </p>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText="បិទ"
    >
      <Button
        onClick={onPrint}
        type="primary"
        style={{
          marginTop: '5px',
        }}
      >
        <PrinterOutlined />
        Print
      </Button>
      <div>handle html</div>
    </Modal>
  );
};

export default ViewPrescription;
