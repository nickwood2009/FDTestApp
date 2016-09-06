import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as produceActions from '../../../actions/produceActions';

class ProducePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    produceRow(produce, index) {
        return <div key={index}>{produce.Name}</div>;
    }

    render() {
        return (
            <div>
                <h1>Produce</h1>
                {this.props.produceList.map(this.produceRow)}
            </div>
        );
    }
}

ProducePage.propTypes = {   
    produceList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        produceList: state.produceList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(produceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducePage);