import React from 'react'
import { connect } from 'react-redux';

const Controller = (props) => {
    return ( 
        <div>
            <button onClick={ ()=> props.add() }>Add</button>
            <button onClick={ ()=> props.sub() }>Sub</button>
        </div>
     );
}
function mapDispatchToState(dispatch) {
    return {
        add: () => { dispatch({type:'ADD'})},
        sub: () => { dispatch({type:'SUB'})}
    }
}
export default connect(null, mapDispatchToState)(Controller);