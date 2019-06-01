import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import WoodSearch from '../../../components/WoodSearch/WoodSearch'

const styles = theme => ({
    tableWrapper: {
        width: '70%',
        margin: '0 auto',
        padding: '1%'
    },
});

class SearchAssetsSection extends Component {
    render() {
        let classes = this.props.classes;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className={classes.tableWrapper}>
                            <WoodSearch/>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

SearchAssetsSection.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SearchAssetsSection);