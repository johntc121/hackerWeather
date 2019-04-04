import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class CardItem extends Component {

    cardStyle = () => {
        return{
            padding: '10px',
            height: '200px',
            width: '300px'
        }
    }

    render() {
        const {day, image, temp} = this.props.card;

        return(
            <div style={this.cardStyle()}>
                <p>
                    <MuiThemeProvider>
                        <Card>
                            <CardHeader title={this.props.getDay.bind(this, day)}/>
                            <CardMedia>
                                <img src={this.props.getImage.bind(this, image)}/>
                            </CardMedia>
                            <CardText>
                                {this.props.getTemp.bind(this, temp)}
                            </CardText>
                        </Card>
                    </MuiThemeProvider>
                </p>
                
            </div>
        )
    }
}

//Proptypes
CardItem.propTypes ={
    card: PropTypes.object.isRequired,
    getDay: PropTypes.func.isRequired,
    getImage: PropTypes.func.isRequired,
    getTemp: PropTypes.func.isRequired
}


export default CardItem;


