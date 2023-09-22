import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';

export default function Start(){
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/controller');
    }, [])

    return <></>;
}