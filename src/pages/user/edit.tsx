import React from 'react';
import {Button, Card, Col, Form, Image, Input, Layout, Modal, Row, Select, Table, Typography, Spin} from 'antd';

const {Column} = Table;

const users = [
    {
        'first_name': 'test',
        'last_name': 'test',
        'email': 'test'
    },
    {
        'first_name': 'test',
        'last_name': 'test',
        'email': 'test'
    },
    {
        'first_name': 'test',
        'last_name': 'test',
        'email': 'test'
    },
]

function Edit() {
    const [form] = Form.useForm();
    const onCategory = () => {
    };
    const handleCancel = () => {
    };
    return (
        <Layout className='min-vh-100 list_user'>
            <Card>
                <Form form={form} name='' onFinish={onCategory} className='mt-3 w-50'>
                    <Row justify={'center'}>
                        <Col span={6} className='m-3'>
                            <Form.Item
                                name='first_name'
                                required
                                className=''
                            >
                                <Typography className='text-validate-cate'>First name</Typography>
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name='last_name'
                                required
                                className=''
                            >
                                <Typography className='text-validate-cate'>Last name</Typography>
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name='email'
                                required
                                className=''
                            >
                                <Typography className='text-validate-cate'>Email</Typography>
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row aria-colspan={10} gutter={8} className='mg-16 mt-5' justify={'center'}>
                        <Col>
                            <Button type='primary' htmlType='submit' className='btn-modal'>
                                Create
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Layout>
    );
}

export default Edit;
