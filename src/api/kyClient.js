import ky from "ky";
import store from "../redux/store/store";

const kyClient = ky.extend({
    prefixUrl: 'http://localhost:3000/',
    hooks: {
        beforeRequest: [
            (config) => {
                const token = store.getState().authorizationUsers.authorization.token;
                if (token) {
                    config.headers.set('Authorization', `Bearer ${token}`);
                    config.headers.set('Content-Type', 'application/json');
                }
            }
        ]
    }
})

export default kyClient;
