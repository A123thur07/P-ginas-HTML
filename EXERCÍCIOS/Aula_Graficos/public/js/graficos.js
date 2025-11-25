(function () {
    const { doughnut } = window.pageData || { doughnut: {} };

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
    const graficoRosca = document.getElementById('doughnutChart')
    if (graficoRosca) {
        new Chart(graficoRosca, {
            type: 'doughnut',
            data: {
                labels: doughnut.labels,
                datasets: [{
                    label: 'vendas',
                    data: doughnut.values,
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

        console.log(window);

    }
})();