import { Card } from "@rneui/themed";
import { Text } from "react-native";

const CarCard = (props) => {
    const { _id, model, production_years, title, description, image_urls, segment, body_style } = props;

    const images = image_urls ? image_urls.split(',') : [];
    const firstImage = images[0]?.trim();
    
    return(
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Divider></Card.Divider>
            <Card.Image
                style={{ width: "100%", height: 250 }}
                source={{ uri: firstImage }}
            ></Card.Image>
            <Text style={{ width: "100%", paddingTop: 10, textAlign:"center"}}>{segment} - {body_style}</Text>
        </Card>
    );
};

export default CarCard;

const styles = {
    image: {
    width: 100,
    height: 120
  },
};