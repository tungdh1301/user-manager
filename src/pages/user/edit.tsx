import React, {useEffect} from 'react';
import {Button, Card, Col, Form, Radio, Input, Layout, Row, Typography} from 'antd';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {createUser, UserSelector} from "../../redux/slice/UserSlice";
import {UserParams} from "../../types";
import {mbTrim} from "../../lib/utils";
import {useNavigate} from 'react-router-dom';

function Edit() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        userDetail: {user},
    } = useAppSelector(UserSelector);

    const onSubmit = (values: UserParams) => {
        form.setFields([
            {name: 'first_name', value: mbTrim(values?.first_name)},
            {name: 'last_name', value: mbTrim(values?.last_name)},
            {name: 'email', value: mbTrim(values?.email)},
            {name: 'status', value: mbTrim(values?.status)},
        ]);
        dispatch(createUser(values));
        navigate('/user');
    };

    const onBack = () => {
        navigate('/user');
    };

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                status: user.status,
            });
        }
    }, [form, user]);
    return (
        <Layout className='min-vh-100 list_user'>
            <Card>
                <Form form={form} name='' onFinish={onSubmit} className='mt-3 w-50'>
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
                            <Form.Item
                                name='status'
                                required
                                className=''
                            >
                                <Radio.Group className='w-100'>
                                    <Row wrap>
                                        <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
                                            <Radio value={0} children='inactive'/>
                                        </Col>
                                        <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
                                            <Radio value={1} children='active'/>
                                        </Col>
                                    </Row>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row aria-colspan={10} gutter={8} className='mg-16 mt-5' justify={'center'}>
                        <Col>
                            <Button type='primary' htmlType='submit' className='btn-modal'>
                                <span> Create </span>
                            </Button>
                            <Col>
                                <Button htmlType='button' className='icon-center' onClick={onBack}>
                                    <span className='text-btn text-back'> Back </span>
                                </Button>
                            </Col>
                        </Col>
                    </Row>

                </Form>
            </Card>
        </Layout>
    );
}

export default Edit;
