import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeFullName = this.onChangeFullName.bind(this);
		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.state = {
			full_name : '',
			username : '',
			email : '',
			address : ''
		}
	}

	componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
        .then(response => {
          this.setState({ 
	          	full_name : response.data.name,
				username : response.data.username,
				email : response.data.email,
				address : response.data.address.street
			});
        }).catch(function (error) {
          console.log(error);
        });
    }

    onChangeFullName(e){
    	this.setState({
    		full_name : e.target.value
    	})
    }
    onChangeUserName(e){
    	this.setState({
    		username : e.target.value
    	})
    } 
    
    onChangeEmail(e){
    	this.setState({
    		email : e.target.value
    	})
    }

    onChangeAddress(e){
    	this.setState({
    		address : e.target.value
    	})
    }

    onSubmit(e) {
	    e.preventDefault();
	     this.setState({ 
	          	full_name : e.target.value,
				username : e.target.value,
				email : e.target.value,
				address : e.target.value
			});
	    console.log(this.state.full_name);
	}

    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3>Edit User Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Full Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.full_name}
                      onChange={this.onChangeFullName}
                      />
                </div>
                <div className="form-group">
                    <label>UserName: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUserName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Address: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="SAVE" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}