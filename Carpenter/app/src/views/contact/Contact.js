import React, { Component } from 'react';

//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <AppTitleLayout>
                    צור קשר 
                </AppTitleLayout>
                <AppContentLayout>
                    תוכן
s                </AppContentLayout>
            </React.Fragment>
        );
    }
}

export default Contact;