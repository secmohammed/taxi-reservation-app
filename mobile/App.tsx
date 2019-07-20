import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/index";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./src/components/Loading";
import { Router } from "react-native-router-flux";
import { scenes } from "./src/routes/scenes";
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <Router scenes={scenes}></Router>
            </PersistGate>
        </Provider>
    );
}