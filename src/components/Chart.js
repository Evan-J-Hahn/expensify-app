import React from 'react'
import { Pie } from 'react-chartjs-2'

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    // Import Data
                    'Boston',
                    'Worcester',
                    'Springfield',
                    'Lowell'
                ],
                datasets: [{
                    label: 'Population',
                    data: [
                        // Import Data
                        617594,
                        181045,
                        153060,
                        106519
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }]
            }
        }
    }

    render() {
        return (
            <div className="content-container">
                <Pie
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}