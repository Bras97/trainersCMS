import ky from "ky";

const kyClient = ky.extend({
    prefixUrl: 'http://localhost:3000/',
    hooks: {
        beforeRequest: [
            (config) => {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDU5ZWVkMGY0MGFjMjg5NDY1NGRhYyIsImlhdCI6MTYxMDk4MTEwMX0.tj9NBKi4SY1vNrfbnAQnAkid8bcvGGjWRGnD1kh6Wyk';
                if (token) {
                    config.headers.set('Authorization', `Bearer ${token}`);
                    config.headers.set('Content-Type', 'application/json');
                }
            }
        ]
    }
})

export default kyClient;