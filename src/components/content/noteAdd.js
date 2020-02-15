import React,{ useContext, useState } from 'react';
import mainContext from '../../contexts/mainContext';
import { Form, Input, Button, Row, Col, Modal } from 'antd';
import uuid from 'uuid';

export const NoteAdd = () => {
    const { dispatch } = useContext(mainContext);
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    // const [modal, setModal] = useState(false);

    const modal = () => Modal.error({
        title: 'Opps ... ',
        content: 'Please fill the field of title.',
        onOk() {},
      });

    const addNote = (e) => {
        e.preventDefault();
        
        if(!title) {
            modal();
            return false;
        }
        dispatch({type:"Add", id:uuid(), title, detail})
        setTitle("");
        setDetail("");
    }

    return (
        <Row>
            <Form>
                <Col span={6}>
                    <Input size="large" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Col>
                <Col span={15}>
                    <Input size="large" placeholder="Detail" value={detail} onChange={(e) => setDetail(e.target.value)}/>
                </Col>
                <Col span={3}>
                    <Button size="large" onClick={addNote} type="danger">Add</Button>
                </Col>
            </Form>
        </Row>
    )
}