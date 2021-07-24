import React , {Component} from 'react'

// import './ResetBtn.css'

class ResetBtn extends Component{
    constructor(){
        super();
        // state={}
    }
    

    render(){

        return(
            <div className="outer" onClick={this.props.handleReset}>
                <div className="inner">
                    RESET
                </div>
            </div>
        );
    }




}

export default ResetBtn;