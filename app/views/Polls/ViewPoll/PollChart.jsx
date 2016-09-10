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
        };
        return (
            <div className="graphContainer" style={styles.graphContainer}>
                <Doughnut
                    data={chartData}
                    //options={chartOptions}
                />
            </div>
        );
    }
}
