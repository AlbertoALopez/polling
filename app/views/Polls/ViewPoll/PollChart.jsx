/* Chart component for an individual poll */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const chartData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
        data: [
            300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
};

export default class PollChart extends React.Component {
    render() {
        const styles = {
            graphContainer: {
                padding: '15px',
            },
            title: {
                padding: '20px',
            }
        };
        return (
            <div className="graphContainer" style={styles.graphContainer}>
                <span style={styles.title}><h3>Poll question</h3></span>
                <Doughnut
                    data={chartData}
                />
            </div>
        );
    }
}
