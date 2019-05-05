import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';

class AddDispositiveFormContainer extends Component {
    handleSubmit = data => {
        const { postDispositive, dispositivesType } = this.props;
        debugger;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.name === data.type).id,
            name: data.name,
        }; 
        postDispositive(JSON.stringify(readyData));
    }
    render() {
        return <AddDispositiveForm onSubmit={this.handleSubmit} />;
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType } }) => ({
    dispositivesType
});

const mapDispatchToProps = dispatch => ({
    postDispositive: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDispositiveFormContainer);