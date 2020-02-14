import React, { Component } from "react";
import Chart from "chart.js";

class Pie extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    // For a pie chart
    this.MyPieChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: this.props.title,
            data: this.props.data,
            backgroundColor: this.props.color
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <div className="col s12 " >
        <canvas ref={this.canvasRef}></canvas>
        </div>
      </div>
    );
  }
}

export default Pie;
