
export const SgDefaultOptions = (title) => {

    return ({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    })
};

export const PicChartDataProcessor = (lableTitle, lables, data, colors) => {
    let processeddata = {
        labels: lables,
        datasets: [
            {
                label: lableTitle,
                data: data,
                backgroundColor: colors,
                hoverOffset: 4
            }]
    }
    return processeddata;
}
export const DoughnutChartDataProcessor = PicChartDataProcessor;

export const BarChartDataProcessor = (datasetCount, labels, data, bgColor) => {
    const dataSetIsMultipal = (datasetCount, data, bgColor) => {

        if (Array.isArray(datasetCount)) {
            let overallData = datasetCount.map((d, i) => {
                let processedData = ({
                    label: d,
                    data: data[i],
                    backgroundColor: bgColor[i],
                })
                return processedData
            })

            return overallData;
        }
        else {
            return ({
                label: datasetCount,
                data: data,
                backgroundColor: bgColor,
            })
        }
    }

    let Datasets = dataSetIsMultipal(datasetCount, data, bgColor);

    return ({
        labels,
        datasets: Array.isArray(Datasets) ? [...Datasets] : [Datasets]
        // [
        //     {
        //         label: 'Dataset 1',
        //         data: labels.map(() => Math.floor(Math.random() * 100)),
        //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //     },
        //   
        // ],
    })
}

export const RadarChartDataProcessor = (datasetTitles, labels, data, colors,offset) => {
    function changeOpacity(hexColor, opacity) {
        // Convert the hexadecimal color to RGB components
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);
    
        // Convert the opacity value to a range between 0 and 1
        const alpha = opacity / 100;
    
        // Return the RGBA color string
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    const dataSetIsMultipal = (datasetCount, data, bgColor) => {

        if (Array.isArray(datasetCount)) {
            let overallData = datasetCount.map((d, i) => {
                let color =  bgColor[i]
                let processedData = ({
                    label: d,
                    data: data[i],
                    backgroundColor: color,
                    fill: true,
                    backgroundColor: changeOpacity(color,offset),
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: color,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: color
                })
                return processedData
            })

            return overallData;
        }
        else {
            return ({
                label: datasetCount,
                data: data,
                backgroundColor: bgColor,
                fill: true,
                backgroundColor: changeOpacity(bgColor,offset),
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: bgColor,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: bgColor
            })
        }
    }
        

    

    let chartData = dataSetIsMultipal(datasetTitles,data,colors);
    return ({
        labels,
        datasets: Array.isArray(chartData)? [...chartData] : [chartData]
    })

  
}

