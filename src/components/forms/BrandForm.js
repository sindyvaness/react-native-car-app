import { useState, useEffect } from "react";
import { ListItem } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

const BrandForm = ( props ) => {
    const { onBrandChange } = props;
    const [brands, setBrands] = useState(["Ferrari", "Porshe"]);
    const [expanded, setExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');


    useEffect(() => {
        // here call the api to get the brands
        // setBrands(brands);
    }, []);

    return(
        <ListItem.Accordion
            content={
                <>
                <Ionicons name="search" size={20} />
                <ListItem.Content>
                    <ListItem.Title>{ selectedBrand || 'Select a Brand...'}</ListItem.Title>
                </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            {brands.map((brand, index) => (
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
            ))}
        </ListItem.Accordion>
    );
};

export default BrandForm;