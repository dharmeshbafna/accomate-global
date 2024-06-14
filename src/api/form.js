const axios = require('axios');
const url = 'https://server.accomateglobal.com';

export const ContactForm = async (fd) => {

    const res = await axios.post(`${url}/contactform`,
        {
            formdata: fd
        },
        {
            headers: {
                'Content-type': 'application/json'
            }
        }
    );

    if (res.data) {
        return res.data;
    } else {
        return ({ error: 'Internal Server Error' });
    }
};

export const CareerForm = async (fd) => {

    const res = await axios.post(`${url}/careerform`, fd,
        {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
    );

    if (res.data) {
        return res.data;
    } else {
        return ({ error: 'Internal Server Error' });
    }
};