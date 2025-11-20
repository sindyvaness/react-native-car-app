import { useState, useEffect } from "react";
import { ListItem } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { carsApi } from "../../services/carsApi";

const BrandForm = ( props ) => {
    const { onBrandChange } = props;
    const [brands, setBrands] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');


    useEffect(() => {
        // here call the api to get the brands
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const brands = await carsApi.getBrands();

            if (brands) {
                setBrands(brands.data);
            } else {
                console.log("No brands fetched");
            }
        } catch (error) {
            console.log("Error getting the brands: ", error);
        }
    };

    return(
        <ListItem.Accordion
            content={
                <>
                <Ionicons name="search" size={20} />
                <ListItem.Content style={{marginLeft: 20}}>
                    <ListItem.Title>{ selectedBrand || 'Select a Brand...'}</ListItem.Title>
                </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            { brands && brands.length > 0 ? (brands.map((brand, index) => (
                <ListItem key={index} 
                    onPress={ () => { 
                        onBrandChange(brand); 
                        setSelectedBrand(brand); 
                        setExpanded(!expanded);} }
                    bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{brand}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))) : 
            <ListItem key={0} 
                    onPress={ () => {
                        setExpanded(!expanded);} }
                    bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>No brands gotten...</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
        }
        </ListItem.Accordion>
    );
};

export default BrandForm;