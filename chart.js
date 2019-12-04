let CHART = document.getElementById("lineChart")
console.log(CHART)
let lineChart = new Chart(CHART, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "2019 Power Consumption in kwh",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(191, 63, 63, 1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(191, 63, 63, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 5,
                pointRadius: 10,
                pointHitRadius: 10,
                data: [100, 90, 70, 50, 30, 20, 10, 10, 10, 10, 50, 90]
            },
            {
                label: "2018 Power Consumption in kwh",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 10,
                pointHitRadius: 10,
                data: [110, 80, 70, 45, 10, 0, 5, 10, 15, 10, 80, 100]
            }
        ]
    }
})