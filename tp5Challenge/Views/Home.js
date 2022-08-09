import { Text } from "react-native"
export default function Home({route, navigation}){
    const apikey = route.params;
    return(
        <Text>{apikey}</Text>
    )
}