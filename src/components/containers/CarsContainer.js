import { useState } from "react";
import { Alert, View } from "react-native";
import BrandForm from "../forms/BrandForm";

const CarsContainer = () => {
    const [brand, setBrand] = useState(); // the list of the cars is by brand
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleBrandChange = (brand) => {
        console.log(brand);

        setIsLoading(true);

        setIsLoading(false);
    };
    

    return(
        <View>
            <BrandForm onBrandChange = { handleBrandChange }></BrandForm>
        </View>
    );
};

export default CarsContainer;