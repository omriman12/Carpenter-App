import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import wood1 from '../../../assets/img/wood1.jpg';
import wood3 from '../../../assets/img/wood3.jpg';

const images = [
    {
      original: `${wood1}`,
      thumbnail: `${wood1}`,
    },
    {
      original: `${wood3}`,
      thumbnail: `${wood3}`,
    },
  ]
  
class SliderSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <ImageGallery items={images} showThumbnails={false}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default SliderSection;