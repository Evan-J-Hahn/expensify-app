import React from 'react'
import { Pie } from 'react-chartjs-2'
import { connect } from 'react-redux'

export class Graph extends React.Component {
    getData = (props) => {
        let chartData = {}
        chartData.labels = this.props.labels
        chartData.datasets = []
        chartData.datasets[0] = {}
        chartData.datasets[0].label = this.props.datasets[0].label
        chartData.datasets[0].data = this.props.datasets[0].data
        chartData.datasets[0].backgroundColor = this.props.datasets[0].backgroundColor
        
        return (
            chartData
        )
    }

    render() {
        const data = this.getData(this.props)
        return (
            <div className="content-container">
                <Pie
                    data={data}
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

const mapStateToProps = (state) => {
    let descriptions = []
    let amounts = []
    
    for (let i = 0; i < state.expenses.length; i++) {
        descriptions.push(state.expenses[i].description)
        amounts.push(state.expenses[i].amount / 100)
    }

    return {
        labels: descriptions,
        datasets: [{
            label: 'Expenses',
            data: amounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]
        }]
    }
}

export default connect(mapStateToProps)(Graph)