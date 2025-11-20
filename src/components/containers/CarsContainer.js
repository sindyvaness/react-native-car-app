import { useState } from "react";
import { Alert, View } from "react-native";
import BrandForm from "../forms/BrandForm";
import Loading from "../layouts/Loading";
import CarList from "../lists/CarList";
import { carsApi } from "../../services/carsApi";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleBrandChange = async (brand) => {

        setIsLoading(true);

        await fetchCars(brand);

        setIsLoading(false);
    };

    const fetchCars = async (brand) => {
        try {
            const brandCars = await carsApi.getByBrand(brand);

            if (brandCars) {
                // console.log(brandCars.data); // there is cars
                setCars(brandCars.data);
            }
            else {
                console.log("No cars found");
            }

        } catch (error) {
            console.log("Error getting the cars by brand: ", error);
        }
    };
    

    return(
        <View>
            <BrandForm onBrandChange = { handleBrandChange }></BrandForm>
            { isLoading ? <Loading></Loading> : <CarList cars = { cars }></CarList> }
        </View>
    );
};

export default CarsContainer;