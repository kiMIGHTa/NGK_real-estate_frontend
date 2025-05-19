import { createContext, useState, useEffect } from 'react';
import { getPropertyList, getFeaturedPropertyList } from "../apiUtils/propertyDetails/index.js";

export const StoreContext = createContext(null);


const StoreContextProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [featuredProperties, setFeaturedProperties] = useState([]);

    // Fetch property items from the API
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await getPropertyList();
                // console.log("Fetched property items:", data);
                setProperties(data);
            } catch (error) {
                console.error("Error fetching property items:", error);
            }
        };

        fetchProperties();
    }, []);
    
    useEffect(() => {
        const fetchFeaturedProperties = async () => {
            try {
                const data = await getFeaturedPropertyList();
                // console.log("Fetched property items:", data);
                setFeaturedProperties(data);
            } catch (error) {
                console.error("Error fetching property items:", error);
            }
        };

        fetchFeaturedProperties();
    }, []);

    const contextValue = {
        properties,
        setProperties,
        featuredProperties,

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;