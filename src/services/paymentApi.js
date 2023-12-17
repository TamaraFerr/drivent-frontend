import api from './api';

export async function getPaymentByTicketId(ticketId, token) {
    const response = await api.get(`/payments?ticketId=${ticketId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


    return response.data;
}

export async function postPayment(body, token) {
    const response = await api.post('/payments/process', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return response.data;
}