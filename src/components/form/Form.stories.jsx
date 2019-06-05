import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Form from '../form';
import Input from '../input';
import Button from '../button';

let form = {
    name: '',
    desc: ''
};

const rules = {
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' }
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' }
    ]
};

export const actionsForm = {
    onSubmit: e => {
        e.preventDefault();
    },
    onChange: (key, value) => {
        form[key] = value;
    },
    handleSubmit: e => {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    handleReset: e => {
        e.preventDefault();
        this.refs.form.resetFields();
    }
};

storiesOf('Formulário|Form', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () => {
        return (
            <Form style={{ width: '500px' }}
                  model={form}
                  onSubmit={actionsForm.onSubmit.bind(this)}
            >
                <Form.Item label="Activity name">
                    <Input value={form.name} onChange={actionsForm.onChange.bind(this, 'name')}/>
                </Form.Item>
                <Form.Item required label="Activity form">
                    <Input type="textarea" value={form.desc}
                           onChange={actionsForm.onChange.bind(this, 'desc')}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" nativeType="submit">Create</Button>
                    <Button>Cancel</Button>
                </Form.Item>
            </Form>
        );
    })
    .add('align', () => {
        return (
            <div>
                <Form
                    style={{ width: '500px' }}
                    labelPosition="top"
                    model={form}
                    onSubmit={actionsForm.onSubmit.bind(this)}
                >
                    <Form.Item label="Activity name">
                        <Input value={form.name}
                               onChange={actionsForm.onChange.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item required label="Activity form">
                        <Input type="textarea" value={form.desc}
                               onChange={actionsForm.onChange.bind(this, 'desc')}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit">Create</Button>
                        <Button>Cancel</Button>
                    </Form.Item>
                </Form>
                <br/>
                <br/>
                <Form
                    style={{ width: '500px' }}
                    labelPosition="left"
                    model={form}
                    onSubmit={actionsForm.onSubmit.bind(this)}
                >
                    <Form.Item label="Activity name">
                        <Input value={form.name}
                               onChange={actionsForm.onChange.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item required label="Activity form">
                        <Input type="textarea" value={form.desc}
                               onChange={actionsForm.onChange.bind(this, 'desc')}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit">Create</Button>
                        <Button>Cancel</Button>
                    </Form.Item>
                </Form>
                <br/>
                <br/>
                <Form
                    style={{ width: '500px' }}
                    labelPosition="rigth"
                    model={form}
                    onSubmit={actionsForm.onSubmit.bind(this)}
                >
                    <Form.Item label="Activity name">
                        <Input value={form.name}
                               onChange={actionsForm.onChange.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item required label="Activity form">
                        <Input type="textarea" value={form.desc}
                               onChange={actionsForm.onChange.bind(this, 'desc')}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit">Create</Button>
                        <Button>Cancel</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    })
    .add('inline', () => {
        return (
            <Form style={{ width: '1000px' }}
                  inline
                  model={form}
                  onSubmit={actionsForm.onSubmit.bind(this)}
            >
                <Form.Item>
                    <Input placeholder="Digite seu nome" value={form.name}
                           onChange={actionsForm.onChange.bind(this, 'name')}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Digite seu apelido" value={form.desc}
                           onChange={actionsForm.onChange.bind(this, 'desc')}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" nativeType="submit">Buscar</Button>
                </Form.Item>
            </Form>
        );
    })
    .add('validating', () => {
        return (
            <div>
                <Form
                    style={{ width: '500px' }}
                    model={form}
                    rules={rules}
                    labelSuffix=":"
                >
                    <Form.Item label="Activity name" prop="name">
                        <Input value={form.name}
                               onChange={actionsForm.onChange.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item label="Activity form" prop="desc">
                        <Input type="textarea" value={form.desc}
                               onChange={actionsForm.onChange.bind(this, 'desc')}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"
                                onClick={actionsForm.handleSubmit.bind(this)}>Submit</Button>
                        <Button onClick={actionsForm.handleReset.bind(this)}>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    });