import Invoice from '@/components/Invoice';
import { Modal } from 'antd';

export interface IProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ViewPrescription = (props: IProps) => {
  const { handleCancel, handleOk, isModalOpen } = props;
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
      <Invoice />
    </Modal>
  );
};

export default ViewPrescription;
