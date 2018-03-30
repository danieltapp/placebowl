import React from 'react';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CerealCard from './CerealCard';
import CerealDrawer from './CerealDrawer';


class App extends React.Component {
    render() {
        return (<MuiThemeProvider>
            <Header />
            <CerealCard />
            </MuiThemeProvider>
        )
    }
}

export default App;