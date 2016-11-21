import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    card: {
        textAlign: 'left',
        marginTop: '30px',
    },
};

class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card style={styles.card}>
                <CardHeader
                    title={this.props.userName}
                    subtitle={`Created on: ${new Date(this.props.createdAt).toDateString()}
                               Last updated: ${new Date(this.props.updatedAt).toDateString()}`}
                    avatar=""
                />
                <CardTitle title="" subtitle={``} />
                <CardText>
                    <RaisedButton>Meow</RaisedButton>
                    <RaisedButton>Meow</RaisedButton>
                </CardText>
            </Card>
        );
    }
}

export default UserCard;
