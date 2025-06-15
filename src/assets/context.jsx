import React, { useContext, useReducer, useEffect } from "react";

import { reducer } from "./reducer"

// create a context(warehouse)
// provider
// consumer

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app"

const initialState = {
    name: "",
    image: "",
    services: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Aniket Tiwari",
                image: "./images/hero.svg"
            },
        });
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Aniket Tiwari",
                image: "./images/about.svg"
            },
        });
    }
    // To get API data
    const getServices = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data })
        } catch (error) {
            console.log(error);
        }
    }

    // To call the api

    useEffect(() => {
        getServices(API);
    }, [])



    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }} >
        {children}
    </AppContext.Provider>
};
// Global custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider, useGlobalContext };