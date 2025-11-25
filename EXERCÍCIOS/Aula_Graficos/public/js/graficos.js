(function () {
    const { line, bar, pie } = window.pageData || { line: {}, bar: {}, pie: {} };

    const paleta = {
        cyano: 'rgba(34, 211, 238, 1)',
        azul: 'rgba(59, 130, 246, 1)',
        violeta: 'rgba(139, 92, 246, 1)',
        pink: 'rgba(236, 72, 153, 1)',
        verde: 'rgba(45, 212, 191, 1)',
        cinza: 'rgb(97, 95, 95)'
    }
    Chart.defaults.color = '#000';
    Chart.defaults.borderColor = '#000';
    Chart.defaults.plugins.legend.labels.color = '#ffffffff';
    Chart.defaults.font.family = 'Arial';

    //Gráfico de linha
    const  graficoDuplo= {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: ''
                }
            },
            scales: {
                y: {
                    stacked: true
                }
            }
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#555555ff' }
                },
                tooltip: { mode: 'index', intersect: false }
            },
            interaction: { mode: 'nearest', axis: 'x', intersect: false },
            scales: {
                x: { grid: { display: false } },
                y: { beginaAtZero: true }
            }
        }
    }


    //Gráfico de barras
    const graficoBarra = document.getElementById('barChart')
    if (graficoBarra) {
        new Chart(graficoBarra, {
            type: 'bar',
            data: {
                labels: bar.labels,
                datasets: [{
                    label: 'vendas',
                    data: bar.values,
                    borderColor: paleta.cyano,
                    backgoundColor: [paleta.azul, paleta.violeta, paleta.pink, paleta.verde],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#555555ff' }
                    },
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { beginaAtZero: true }
                }
            }
        })
    }

    //Gráfico de Pizza
    const graficoPizza = document.getElementById('pieChart')
    if (graficoPizza) {
        new Chart(graficoPizza, {
            type: 'pie',
            data: {
                labels: pie.labels,
                datasets: [{
                    label: 'vendas',
                    data: pie.values,
                    borderColor: paleta.cyano,
                    backgoundColor: [paleta.azul, paleta.violeta, paleta.pink, paleta.verde],
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        })
    }
    console.log(window);

})();