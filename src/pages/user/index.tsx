import React, {useState} from 'react';
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

function Users() {
    const [form] = Form.useForm();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const onCategory = () => {
    };

    const renderDestroy = (_: any, record: any) => {
        return (
            <Button
                className='text delete-button-notification'
                onClick={() => {
                    // setDataEvent(record.id);
                    // setModalConfirmDelete({
                    //     ...modalConfirmDelete,
                    //     isVisible: true,
                    //     onConfirmed: () => {
                    //         dispatch(destroyNotification(record.id));
                    //         onHideModalConfirmDelete();
                    //         setUpdateSuccess(true);
                    //         setConfirmLoading(true);
                    //     },
                    // });
                }}
            >
                Edit
            </Button>
        );
    };
    return (
        <Layout className='min-vh-100 list_user'>
            {
                isEdit
                    ? <Card>
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
                    : <Card>
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
                                        Save
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type='primary' htmlType='submit' className='btn-modal'>
                                        cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
            }

            <Table
                className='custom-table'
                dataSource={users}
                rowKey='id'
                scroll={{x: 1024}}
                bordered
                pagination={false}
            >

                <Column width='10%' title='first_name' dataIndex='first_name' key='first_name'/>
                <Column width='10%' title='last_name' dataIndex='last_name' key='last_name'/>
                <Column width='10%' title='email' dataIndex='email' key='email'/>
                <Column
                    className='text-center'
                    title='action'
                    dataIndex='users'
                    key='actionButtons'
                    width='15%'
                    render={renderDestroy}
                />
            </Table>
        </Layout>
    );
}

export default Users;
