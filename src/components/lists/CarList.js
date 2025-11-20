import { FlatList, Text, View } from "react-native";
import CarCard from "../listItems/CarCard";
import { useEffect } from "react";

const CarList = (props) => {
    const { cars } = props;
    
    return(
        <FlatList
            data={cars}
            renderItem={ ({item}) => (
                <CarCard
                    _id= {item._id}
                    model= {item.model}
                    production_years= {item.production_years}
                    title= {item.title}
                    description= {item.description}
                    image_urls= {item.image_urls}
                    segment= {item.segment}
                    body_style= {item.body_style}
                ></CarCard>
            )}
        ></FlatList>
    );
};

export default CarList;