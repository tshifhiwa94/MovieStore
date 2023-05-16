import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { useMovie } from '../../../providers/movies';
import { IMovie } from '../../../providers/movies/context';
import {EditOutlined} from '@ant-design/icons';
import './ViewModel.css';

const { Option } = Select;

const ViewModel: React.FC<IMovie> = ({
  id,
  title,
  starring,
  duration,
  categoryName
}) => {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();

  const { updateMovie } = useMovie();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const onFinish = (values: IMovie) => {
    updateMovie(values);
    setEdit(false);
    setVisible(false);
    window.location.href='/MovieTable'
  };

  return (
    <div className='viewMovie'>
      <Button type="primary" onClick={showModal} style={{ marginRight: 10  }}>
        View
      </Button>
      <Modal
        title={`Details of ${title}`}
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="nest-messages"
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={{ title, starring, duration, categoryName }}
        >
          <Form.Item name="id" initialValue={id} hidden>
            <Input type="hidden" />
          </Form.Item>

          <Form.Item label="Title" name="title">
            {edit ? <Input /> : <span>{title}</span>}
          </Form.Item>

          <Form.Item label="Starring" name="starring">
            {edit ? <Input /> : <span>{starring}</span>}
          </Form.Item>

          <Form.Item label="Duration" name="duration">
            {edit ? <Input /> : <span>{duration}</span>}
          </Form.Item>

          <Form.Item label="Category" name="category">
            {edit ? (
              <Select>
                <Option value="">Select A Category</Option>
                <Option value="action">Action</Option>
                <Option value="comedy">Comedy</Option>
                <Option value="horror">Horror</Option>
                <Option value="other">Other</Option>
              </Select>
            ) : (
              <span>{categoryName}</span>
            )}
          </Form.Item>

          <div >
            {!edit && (
              <Button type="primary" onClick={handleEdit} >
                <EditOutlined />
              </Button>
            )}

            {edit && (
              <div>
                <Button style={{ marginRight: 10  }} onClick={() => setEdit(false)}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                  Update
                </Button>
              </div>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ViewModel;