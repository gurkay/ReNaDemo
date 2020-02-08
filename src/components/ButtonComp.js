import * as React from 'react';
import {View, Alert, Button} from 'react-native';
import {compStyles as styles} from './compStyles';

function onButtonPress(buttonName) {
    Alert.alert(`${buttonName} has been pressed!`);
}

class ButtonComp extends React.Component{
    render(){
        return(
            <View style={styles.containerButton}>
                <Button 
                    onPress={() => onButtonPress('Btn')}
                    testID="simple_button"
                    color= "#f9c2ff"
                    title="Press Me"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        );
    }
}

export default ButtonComp;