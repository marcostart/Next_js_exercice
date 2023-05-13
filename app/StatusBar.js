'use client';

import React from 'react';
import {useOnline} from './useOnline.js'

const Status = ()=>{
    const isOnline = useOnline();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

const SaveButton = ()=>{
    const isOnline = useOnline();

    function handleSaveClick() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
}

const StatusBar = ()=>{
    return (
        <>
          <SaveButton />
          <Status />
        </>
      );
}

export default StatusBar;