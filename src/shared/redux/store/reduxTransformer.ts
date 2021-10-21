import {createTransform} from "redux-persist";
import {authStateFromJs, authStateToJs} from "../reducers/authReducer";

const appTransformer = createTransform(
    (inboundState: any, key) => {
        switch (key) {
            case 'auth':
                return authStateToJs(inboundState)
        }
        return inboundState
    },
    (outboundState, key) => {
        switch (key) {
            case 'auth':
                return authStateFromJs(outboundState)
        }
        return outboundState
    }
);
export default appTransformer
