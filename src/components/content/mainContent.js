import React,{ useContext } from 'react';
import mainContext from '../../contexts/mainContext';
import { NoteAdd } from './noteAdd';
import { NoteList } from './noteList';
import { Divider } from 'antd';

export const MainContent = () => {
    const { notes } = useContext(mainContext);
    return (<>
        <NoteAdd />
        <Divider type="horizontal" />
        <NoteList notes={notes} />
    </>)
}