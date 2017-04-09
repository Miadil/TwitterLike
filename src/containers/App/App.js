import React, { PropTypes } from 'react';

import './App.css';

// import Home from '../../containers/Home';

//on place des enfant a l'interieur de App on a plus besoin de charger le containers <Home /> dans App
//car il sont renseigner dans les route, est il les cherche pour mois si je suis sur la bonne route
//on utilise donc les enfant qui seront toujour bien sibler en fonction de la route sur la quel on est
//
const App = ({ children }) => (
    <main>
      {children}
    </main>
);

//la propTypes children et de type node car c'est un noeux du dom virtuel que l'on vien tester
App.propTypes ={
    children: PropTypes.node.isRequired,
};
export default App;
