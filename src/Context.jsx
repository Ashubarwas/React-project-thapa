import React, { useContext, useEffect, useReducer } from "react";
import reducer from './reducer'


const AppContext = React.createContext();

const Api = "https://fakestoreapi.com/products";

const intialState = {
    name: "",
    image: "",
    services: [],
};

// provider name and image home, about 

const AppProvider = ({ children }) => {
    const [state, distpatch] = useReducer(reducer, intialState);

    const updateHome = () => {
        return distpatch({
            type: "Home_update",
            payload: {
                name: "Ashu Sangwan",
                image: "./img/hero.jpg"
            },
        });
    };

    const updateAbout = () => {
        return distpatch({
            type: "About_update",
            payload: {
                name: "Nippu",
                image: "./img/about.webp"
            },
        });
    };

    //call to api data

    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            distpatch({ type: "GET_SERVICES", payload: data })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getServices(Api);
    }, []);





    return (
        <AppContext.Provider value={{ ...state, updateHome, updateAbout }}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }