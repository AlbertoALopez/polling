import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { Row } from 'react-flexbox-grid';
import Item from '../Item/Item.jsx';
import './_PollsCard.scss';


const styles = {
    card: {
        textAlign: 'left',
        marginTop: '30px',
        marginBottom: '150px',
    },
};

class PollsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: [],
            edited: [],
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            polls: nextProps.polls,
        });
    }
    handleQuestionChange(pollId, newPollQuestion) {
        const polls = this.state.polls.map((poll, index) => {
            if (index.id === pollId) {
                poll.question = newPollQuestion;
            }

            return poll;
        });

        this.setState({
            polls,
        });
    }
    updateAnswer(pollId, answerId, newAnswerValue) {
        const polls = this.state.polls.map((poll, index) => {
            if (poll.id === pollId) {
                poll.Answers.map((answer, index) => {
                    if (answer.id === answerId) {
                        answer.answer = newAnswerValue;
                    }
                    return answer;
                });
            }
            return poll;
        });
        this.setState({
            polls,
        });
    }
    render() {
        return (
            <Card style={styles.card}>
                {/* <CardHeader
                    title="Your Polls"
                /> */}
                <CardTitle title="Your polls" />
                <CardText>
                    <p>Review all your polls here.
                     Click on one to expand and see its related questions.
                     </p>
                    <br />
                    <Divider />
                    <List>
                        {this.state.polls.map((poll) => {
                            const answers = poll.Answers.map((answer) => {
                                return (
                                    <Item
                                        answer={answer}
                                        pollId={poll.id}
                                        updateAnswer={this.updateAnswer.bind(this)}
                                    />
                                );
                            });
                            return (
                                <div>
                                    <ListItem
                                        primaryText={poll.question}
                                        // secondaryText={
                                        //     `Created at: ${new Date(poll.createdAt).toDateString()}
                                        //     Last updated: ${new Date(poll.updatedAt).toDateString()}`
                                        // }
                                        key={poll.id}
                                        nestedItems={[
                                            answers,
                                                // <div className="listitem-buttons">
                                                //     <RaisedButton>Save changes</RaisedButton>
                                                // </div>
                                        ]}
                                    >
                                    </ListItem>
                                    <Divider />
                                </div>
                            );
                        })}
                    </List>
                </CardText>
            </Card>
        );
    }
}

export default PollsCard;
