import * as React from 'react';
import {Image} from 'react-native';

import { compStyles as styles } from './compStyles';

class Header extends React.Component {
    render() {
        return(
            <Image
                source={require('../img/logo2.png')}
                style={styles.containerHeader}
            />            
        );
    }
}

export default Header;