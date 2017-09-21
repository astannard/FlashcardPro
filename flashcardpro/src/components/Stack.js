import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Card from './Card';

class Stack extends Component{
    render(){
         const {title,  cards } = this.props.stack;
        return(
            <div>
                <Link to="/">Home</Link> 
                <h3>{title} </h3>

                <br />

                { cards.map(card => {
                    return (<Card key={card.id} card={card} />)
                })}

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        stack:state.stack
    }
}

//connect returns a function hence second set of brackets
export default connect(mapStateToProps, null)(Stack);