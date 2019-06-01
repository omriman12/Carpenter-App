import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';
import { withStyles  } from '@material-ui/core/styles';


//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';
import WoodSearch from '../../components/WoodSearch/WoodSearch'


const styles = theme => ({
    tableWrapper: {
        width: '70%',
        margin: '0 auto',
        padding: '1%'
    },
});

class AssetsSearch extends Component {
    render() {
        let classes = this.props.classes;
        return (
            <React.Fragment>
                <AppTitleLayout>
                    חיפוש עצים
                </AppTitleLayout>
                <AppContentLayout>
                    <div className={classes.tableWrapper}>
                        <WoodSearch/>
                    </div>
                </AppContentLayout>
            </React.Fragment>
        );
    }
}
AssetsSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(AssetsSearch);