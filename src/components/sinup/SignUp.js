import React, { Component } from 'react'

import { connect } from 'react-redux'
import  * as actions from '../../actions'
import { bindActionCreators } from 'redux';
import * as selectors from '../../selectors';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username || '',
            pws: this.props.pws || '',
            configpws: this.props.pws || ''
        }
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(){
       if(!this.state.username||!this.state.pws||!this.state.configpws){
           alert("please try it again!!")
           return;
       }
       this.props.onSignupUserRequest({username:this.state.username,pws:this.state.pws,configpws:this.state.configpws});
       this.setState({
        username:  '',
        pws:  '',
        configpws:  ''
       })
    }
    render() {
        return (
            <div>
                <input placeholder="Username" value={this.state.username} onChange={evt => this.setState({username:evt.target.value})} />
                <input placeholder="password" value={this.state.pws} onChange={evt => this.setState({pws:evt.target.value})} />
                <input placeholder="configpassword" value={this.state.configpws} onChange={evt => this.setState({configpws:evt.target.value})} />
                <button type="button" onClick={this.onSubmit} className="btn btn-default">button</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
   //   getsignupUser:selectors.getsignupUser(state)
    };
  };
  
   const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
  export default connect(mapStateToProps,mapDispatchToProps)(SignUp)