import request from './api';

export function getImmobile() {
    return request.get('/immobile-all');
}
