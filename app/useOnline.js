import React from 'react';
import {useState, useEffect} from 'react';

export function useOnline(){
    const [isOnline, setIsOnline] = useState(true);
        
    useEffect(() => {
        function handleOnline() {
        setIsOnline(true);
        }
        function handleOffline() {
        setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        };
    }, []);
    
    return isOnline;
}
