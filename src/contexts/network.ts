import axios from 'axios';

type WebMessage = {
    url: string;
    message: string;
    onSuccess: (arg: string) => void;
    onFailure: (arg: string) => void;
}

export function sendMessageTo({url, message, onSuccess, onFailure}: WebMessage){
    axios
        .get(`${url}/${message}`)
        .then((response) => {
            onSuccess(response.data.at(0).robotMsg);
        })
        .catch((err) => {
            onFailure(err.message);
        });
}