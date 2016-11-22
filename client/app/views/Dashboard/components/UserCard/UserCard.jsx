import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const styles = {
    card: {
        textAlign: 'left',
        marginTop: '30px',
    },
    buttons: {
        marginLeft: '30px',
        fontWeight: '400',
    },
    button: {
        marginTop: '10px',
        marginLeft: '20px',
        marginBottom: '10px',
        color: 'white',
    },
};

class UserCard extends React.Component {
    constructor(props) {
        super(props);
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
                <CardActions>
                    <div style={styles.buttons}>
                        <Link to="/polls/createpoll">
                            <RaisedButton secondary={true} style={styles.button}>CREATE A NEW POLL</RaisedButton>
                        </Link>
                        <Link to="/polls/all">
                            <RaisedButton secondary={true} style={styles.button}>SEE ALL</RaisedButton>
                        </Link>
                    </div>
                </CardActions>`
            </Card>
        );
    }
}

export default UserCard;
