import React , {Component} from 'react'

class LapBtn extends Component{
    constructor(props){
        super(props);
        // state={}
    }

    render(){
        
        return(
            <>
            
            <div className="lap-outer" onClick={this.props.handleLap}>
                <div className="lap-inner">
                    LAP
                </div>
            </div>
            
            
            
           </>
        );
    }

}

export default LapBtn;