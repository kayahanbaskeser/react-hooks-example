import React, { useReducer, useEffect } from 'react';
import { Header } from '../components/header/header';
import { MainContent } from '../components/content/mainContent';
import noteReducer from '../reducers/noteReducer';
import AppProvider from '../contexts/mainContext';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

const Main = () => {
    const [notes, dispatch] = useReducer(noteReducer, []);

    useEffect(()=> {
        const storedNote = JSON.parse(localStorage.getItem("noteList"));
        if(storedNote) {
            dispatch({type:"Refresh", notes:storedNote})
        }
    },[])

    useEffect(() => {
        localStorage.setItem("noteList", JSON.stringify(notes))
    }, [notes])

    return (
        <AppProvider.Provider value={{notes, dispatch}}>
            <Row>
                <Col span={12} offset={6}>
                    <Header className="header"/>
                    <MainContent />
                </Col>
            </Row>
        </AppProvider.Provider>
    );
}

export default Main;