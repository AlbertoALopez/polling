/* Chart component for an individual poll */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './_PollChart.scss';
import hex from '../../../../../utils/hex';


const PollChart = (props) => {
    // Set up inital chart data from passed props
    const labels = [];
    const data = [];
    const colors = [];
    props.answers.forEach((value) => {
        labels.push(value.answer);
        data.push(value.votes || 0);
        colors.push(hex.generate());
    });

    const chartData = {
        labels,
        datasets: [{
            data,
            backgroundColor: colors,
            hoverBackgroundColor: colors,
        }],
    };
    return (
        <div className="graph-container">
            <span className="graph-title"><h3>{props.question}</h3></span>
            <Doughnut
                data={chartData}
            />
        </div>
    );
};

PollChart.propTypes = {
    answers: React.PropTypes.array.isRequired,
    question: React.PropTypes.string.isRequired,
};

export default PollChart;
