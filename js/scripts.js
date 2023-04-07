const url = 'https://fe-task-api.mainstack.io/'

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const topLocations = data.top_locations
        const topSources = data.top_sources

        
          //--------------LOCATION CHART-------------------------------------------------------------------------------------------------------
          let seriesArr =[]
          let labelsArr =[]
          for(let i=0; i < topLocations.length; i++){
            seriesArr.push(topLocations[i].count)
            labelsArr.push(topLocations[i].country)
          }
          let locationChartOptions = {
            chart: {
              type: 'donut',
              background: "transparent",
              height: 200
            },
            series: seriesArr,
            labels: labelsArr,
            dataLabels: {
                enabled: false,
            }
          }
          
          let locationChart = new ApexCharts(document.querySelector("#location-chart"), locationChartOptions);
          
          locationChart.render();
        
        
          //-----------SOURCE CHART--------------------------------------------------------------------------------------------
          let sourceSeriesArr =[]
          let sourceLabelsArr =[]
          for(let i=0; i < topSources.length; i++){
            sourceSeriesArr.push(topSources[i].count)
            sourceLabelsArr.push(topSources[i].source)
          }

          let sourceChartOptions = {
            chart: {
              type: 'donut',
              background: "transparent",
              height: 200
            },
            series: sourceSeriesArr,
            labels: sourceLabelsArr,
            dataLabels: {
                enabled: false,
            }
          }
          
          let sourceChart = new ApexCharts(document.querySelector("#source-chart"), sourceChartOptions);
          
          sourceChart.render();

          //-------------------PAGE VIEW CHART----------------------------------------------------------------------------------
        let areaChartOptions = {
            chart: {
              type: 'area',
              background: "transparent",
              height: 350
            },
            series: [{
              name: 'views',
              data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2]
            }],
            stroke: {
                curve: 'straight',
            },
            xaxis: {
              categories: ['31 Jul','01 Aug','02 Aug', '03 Aug', '04 Aug', '05 Aug', '06 Aug', '07 Aug', '08 Aug', '09 Aug']
            },
            colors: [
                "#FF5403"
            ]
          }
        
          let areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
          
          areaChart.render();
        
        
        
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



