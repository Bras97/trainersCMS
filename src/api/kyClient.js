import ky from "ky";
import store from "../redux/store/store";

const kyClient = ky.extend({
    prefixUrl: 'http://localhost:3000/',
    hooks: {
        beforeRequest: [
            (config) => {
                const authorizationUsers = store.getState().authorizationUsers;
                if (authorizationUsers.authorization && authorizationUsers.authorization.token) {
                    config.headers.set('Authorization', `Bearer ${authorizationUsers.authorization.token}`);
                }
                config.headers.set('Content-Type', 'application/json');
            }
        ]
    }
})

export default kyClient;
