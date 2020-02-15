import React,{ useContext } from 'react';
import mainContext from '../../contexts/mainContext';
import { List, Card, Button } from 'antd';


export const NoteList = () => {
    const {notes, dispatch} = useContext(mainContext);
    return (
        <List
            grid={{ gutter: 15, column: 2 }}
            dataSource={notes}
            renderItem={note => (
            <List.Item>
                <Card 
                    extra={<Button type="danger" onClick={() => {dispatch({type:"Delete", id:note.id})}}> Done </Button>} 
                    title={note.title}
                    >
                        {note.detail}
                </Card>
            </List.Item>
            )}
        />
    )
}