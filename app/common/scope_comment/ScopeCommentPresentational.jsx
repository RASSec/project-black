import React from 'react'
import { 
	Button, 
	FormControl,
	FormGroup,
	ControlLabel
} from 'react-bootstrap'


class ScopeCommentPresentational extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<FormGroup controlId="formBasicText">
					<ControlLabel>Comment</ControlLabel>

					<FormControl placeholder="Enter anything, that would help you in future. After moving focus out, the data will be saved."
				                 type="text" 
				                 componentClass="textarea"
				                 value={this.props.scopeComment} 
				                 onChange={this.props.onChange}
				                 onBlur={this.props.onBlur}
				                 onFocus={this.props.onFocus}
				                 disabled={this.props.commentDisabled}/>	
				</FormGroup>
			</div>
		)
	}
}

export default ScopeCommentPresentational;