import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';
import { withStyles  } from '@material-ui/core/styles';


//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';

const data = [{ id: 1, wood: 'wood 1', type: 'wood type 1', year: '1982' }];
const columns = [
    {
        name: 'Wood',
        selector: 'wood',
        sortable: true,
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        // right: true,
    },
];


const styles = theme => ({
    tableWrapper: {
        width: '50%',
        margin: '0 auto',
    },
    
});

class AssetsSearch extends Component {
    render() {
        let classes = this.props.classes;
        return (
            <React.Fragment>
                <AppTitleLayout>
                    חיפוש נכסים
                </AppTitleLayout>
                <AppContentLayout>
                    <div className={classes.tableWrapper}>
                        <DataTable
                            columns={columns}
                            data={data}
                        />
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