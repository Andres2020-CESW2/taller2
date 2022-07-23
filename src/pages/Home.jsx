import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const onFinish  =  async (values)  =>  {
    console.log('Success:', values);
    navigate('/game',{state:{values}});
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ width: '500px', margin: 'auto', position: 'relative', top: '200px', border: '1px solid', backgroundColor: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>Deck of Cards</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ padding: '20px' }}
      >
        <Form.Item
          label="Jugador 1"
          name="player1"
          rules={[{ required: true, message: 'Porfavor ingresa Nombre Jugador 1!' }]}
        >
          <Input required />
        </Form.Item>

        <Form.Item
          label="Jugador 2"
          name="player2"
          rules={[{ required: true, message: 'Porfavor ingresa Nombre Jugador 2!' }]}
        >
          <Input required />
        </Form.Item>

        <Button type="primary" block htmlType="submit">
          Submit
        </Button>

      </Form>
    </div>
  );
};


export default Home