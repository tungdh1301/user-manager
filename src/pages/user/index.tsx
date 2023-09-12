import React, {useEffect} from 'react';
import {Button, Card, Col, Form, Input, Layout, Row, Table, Typography} from 'antd';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {createUser, deleteUser, fetchListUser, UserSelector} from "../../redux/slice/UserSlice";
import {useNavigate} from "react-router-dom";
import {UserParams} from "../../types";
import {mbTrim} from "../../lib/utils";

const {Column} = Table;

function Users() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        listUser: {users},
    } = useAppSelector(UserSelector);
    //search
    // const first_name = Form.useWatch('first_name', form);
    // const last_name = Form.useWatch('last_name', form);
    // const email = Form.useWatch('email', form);
    // const status = Form.useWatch('status', form);

    const onCreate = (values: UserParams) => {
        form.setFields([
            {name: 'first_name', value: mbTrim(values?.first_name)},
            {name: 'last_name', value: mbTrim(values?.last_name)},
            {name: 'email', value: mbTrim(values?.email)},
            {name: 'status', value: mbTrim(values?.status)},
        ]);
        dispatch(createUser(values));
    };

    const renderDestroy = (_: any, user: UserParams) => {
        return (
            <Button
                className='text delete-button-notification'
                onClick={() => {
                    dispatch(deleteUser(user.id));
                }}
            >
                delete
            </Button>
        );
    };
    const renderDetail = (_: any, {id}: UserParams) => {
        const onDetailClick = () => navigate(`/users/detail/${id}`);

        return (
            <Button onClick={onDetailClick} className='text detail-button'>
                detail
            </Button>
        );
    };

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchListUser());
    }, [dispatch]);

    return (
        <Layout className='min-vh-100 list_user'>
            <Card>
                <Form form={form} name='' onFinish={onCreate} className='mt-3 w-50'>
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

            <Table
                className='custom-table'
                dataSource={users}
                rowKey='id'
                scroll={{x: 1024}}
                bordered
                pagination={false}
            >

                <Column width='25%' title='first_name' dataIndex='first_name' key='first_name'/>
                <Column width='25%' title='last_name' dataIndex='last_name' key='last_name'/>
                <Column width='25%' title='email' dataIndex='email' key='email'/>
                <Column width='10%' title='status' dataIndex='status' key='status'/>
                <Column
                    className='text-center'
                    title='action'
                    dataIndex='users'
                    key='actionButtons'
                    width='10%'
                    render={renderDetail}
                />
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
