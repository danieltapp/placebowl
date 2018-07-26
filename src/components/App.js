import React from 'react';
import Header from './Header'
import SubmitForm from './SubmitForm';
import CerealCard from './CerealCard';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import Search from './Search';



class App extends React.Component {
    render() {
        return (
           <div>
           <Header />
           <Search />
           <CerealCard />
           <SubmitForm />
           </div>
        )
    }
}

export default App;