import { Header as RNHeader} from "@rneui/themed";

const Header = () => {
    return(
        <RNHeader
            backgroundColor='#000000'
            centerComponent={{
                text: 'Cars App',
                style: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
            }}
        ></RNHeader>
    );
};

export default Header;