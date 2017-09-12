import React, { Component } from 'react';

import StackList from './StackList';

class App extends Component {
    render(){
        return <div>
                <h2>Flashcard pro</h2>
                <hr />
                <StackList />
            </div>
    }
}

export default App;