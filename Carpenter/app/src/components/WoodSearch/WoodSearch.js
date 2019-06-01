import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';
import Paper from '@material-ui/core/Paper';
import { withStyles  } from '@material-ui/core/styles';

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
    },
});

class WoodSearch extends Component {
    render() {
        let classes = this.props.classes;
        return (
            <React.Fragment>
                <Paper className={classes.tableWrapper}>
                    <DataTable
                        title={"חיפוש עצים"}
                        columns={columns}
                        data={data}
                    />
                </Paper>
            </React.Fragment>
        );
    }
}
WoodSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(WoodSearch);