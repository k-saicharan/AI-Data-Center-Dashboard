// Data initialization
const dashboardData = {
  market_forecast: [
    {"Year": 2024, "Global_Market_Size_USD_Billion": 344, "AI_Data_Center_Market_USD_Billion": 13.62, "Global_Power_Demand_GW": 60, "AI_Power_Share_Percent": 20, "Total_Investment_USD_Billion": 57},
    {"Year": 2025, "Global_Market_Size_USD_Billion": 452.53, "AI_Data_Center_Market_USD_Billion": 17.5, "Global_Power_Demand_GW": 70, "AI_Power_Share_Percent": 35, "Total_Investment_USD_Billion": 85},
    {"Year": 2026, "Global_Market_Size_USD_Billion": 490, "AI_Data_Center_Market_USD_Billion": 24.8, "Global_Power_Demand_GW": 82, "AI_Power_Share_Percent": 42, "Total_Investment_USD_Billion": 120},
    {"Year": 2027, "Global_Market_Size_USD_Billion": 531, "AI_Data_Center_Market_USD_Billion": 35.2, "Global_Power_Demand_GW": 96, "AI_Power_Share_Percent": 48, "Total_Investment_USD_Billion": 165},
    {"Year": 2028, "Global_Market_Size_USD_Billion": 576, "AI_Data_Center_Market_USD_Billion": 50.1, "Global_Power_Demand_GW": 100, "AI_Power_Share_Percent": 52, "Total_Investment_USD_Billion": 220},
    {"Year": 2029, "Global_Market_Size_USD_Billion": 624, "AI_Data_Center_Market_USD_Billion": 71.3, "Global_Power_Demand_GW": 118, "AI_Power_Share_Percent": 58, "Total_Investment_USD_Billion": 285},
    {"Year": 2030, "Global_Market_Size_USD_Billion": 677, "AI_Data_Center_Market_USD_Billion": 101.4, "Global_Power_Demand_GW": 139, "AI_Power_Share_Percent": 65, "Total_Investment_USD_Billion": 360}
  ],
  regional_data: [
    {"Region": "North America", "Current_Capacity_MW": 18000, "Projected_2030_Capacity_MW": 45000, "Growth_Rate_CAGR": 15.2, "Investment_2025_USD_Billion": 35},
    {"Region": "Europe", "Current_Capacity_MW": 8500, "Projected_2030_Capacity_MW": 22000, "Growth_Rate_CAGR": 12.8, "Investment_2025_USD_Billion": 15},
    {"Region": "Asia-Pacific", "Current_Capacity_MW": 12000, "Projected_2030_Capacity_MW": 35000, "Growth_Rate_CAGR": 18.5, "Investment_2025_USD_Billion": 25},
    {"Region": "Latin America", "Current_Capacity_MW": 2500, "Projected_2030_Capacity_MW": 8500, "Growth_Rate_CAGR": 22.1, "Investment_2025_USD_Billion": 6},
    {"Region": "Middle East & Africa", "Current_Capacity_MW": 1800, "Projected_2030_Capacity_MW": 6000, "Growth_Rate_CAGR": 20.4, "Investment_2025_USD_Billion": 4}
  ],
  business_opportunities: [
    {"Opportunity_Category": "Hyperscale Data Centers", "Market_Size_2025_USD_Billion": 180, "Projected_2030_USD_Billion": 420, "Growth_Rate_CAGR": 18.5, "Investment_Attractiveness_Score": 9.2},
    {"Opportunity_Category": "Edge Computing", "Market_Size_2025_USD_Billion": 12, "Projected_2030_USD_Billion": 45, "Growth_Rate_CAGR": 30.2, "Investment_Attractiveness_Score": 8.8},
    {"Opportunity_Category": "Colocation Services", "Market_Size_2025_USD_Billion": 45, "Projected_2030_USD_Billion": 95, "Growth_Rate_CAGR": 16.1, "Investment_Attractiveness_Score": 7.8},
    {"Opportunity_Category": "Cooling Technology", "Market_Size_2025_USD_Billion": 8, "Projected_2030_USD_Billion": 28, "Growth_Rate_CAGR": 28.5, "Investment_Attractiveness_Score": 8.5},
    {"Opportunity_Category": "Power Infrastructure", "Market_Size_2025_USD_Billion": 25, "Projected_2030_USD_Billion": 75, "Growth_Rate_CAGR": 24.6, "Investment_Attractiveness_Score": 8.1},
    {"Opportunity_Category": "AI Hardware", "Market_Size_2025_USD_Billion": 85, "Projected_2030_USD_Billion": 200, "Growth_Rate_CAGR": 18.7, "Investment_Attractiveness_Score": 9.5}
  ],
  power_consumption: [
    {"Year": 2024, "Total_Data_Center_Power_TWh": 415, "AI_Specific_Power_TWh": 83, "Renewable_Energy_Share_Percent": 35, "Carbon_Emissions_Million_Tonnes_CO2": 187},
    {"Year": 2025, "Total_Data_Center_Power_TWh": 520, "AI_Specific_Power_TWh": 182, "Renewable_Energy_Share_Percent": 42, "Carbon_Emissions_Million_Tonnes_CO2": 229},
    {"Year": 2026, "Total_Data_Center_Power_TWh": 650, "AI_Specific_Power_TWh": 273, "Renewable_Energy_Share_Percent": 48, "Carbon_Emissions_Million_Tonnes_CO2": 280},
    {"Year": 2027, "Total_Data_Center_Power_TWh": 800, "AI_Specific_Power_TWh": 384, "Renewable_Energy_Share_Percent": 54, "Carbon_Emissions_Million_Tonnes_CO2": 324},
    {"Year": 2028, "Total_Data_Center_Power_TWh": 900, "AI_Specific_Power_TWh": 468, "Renewable_Energy_Share_Percent": 60, "Carbon_Emissions_Million_Tonnes_CO2": 342},
    {"Year": 2029, "Total_Data_Center_Power_TWh": 945, "AI_Specific_Power_TWh": 548, "Renewable_Energy_Share_Percent": 65, "Carbon_Emissions_Million_Tonnes_CO2": 347},
    {"Year": 2030, "Total_Data_Center_Power_TWh": 1000, "AI_Specific_Power_TWh": 650, "Renewable_Energy_Share_Percent": 70, "Carbon_Emissions_Million_Tonnes_CO2": 350}
  ]
};

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// DOM Loaded Event Handler
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  initNavigation();
  
  // Initialize charts
  initGrowthChart();
  initRegionalChart();
  initOpportunitiesData();
  initPowerChart();
  initSustainabilityChart();
  
  // Initialize business opportunities sorting
  document.getElementById('sort-selector').addEventListener('change', function() {
    const sortBy = this.value;
    sortOpportunities(sortBy);
  });
  
  // Initialize metric selector for growth chart
  document.getElementById('metric-selector').addEventListener('change', function() {
    const metric = this.value;
    updateGrowthChart(metric);
  });
});

// Navigation functionality
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and sections
      navTabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding section
      const sectionId = tab.dataset.section;
      document.getElementById(sectionId).classList.add('active');
    });
  });
}

// Initialize Growth Chart
function initGrowthChart() {
  const ctx = document.getElementById('growthChart').getContext('2d');
  window.growthChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dashboardData.market_forecast.map(d => d.Year),
      datasets: [{
        label: 'AI Data Center Market (USD Billion)',
        data: dashboardData.market_forecast.map(d => d.AI_Data_Center_Market_USD_Billion),
        borderColor: chartColors[0],
        backgroundColor: `${chartColors[0]}33`,
        borderWidth: 2,
        pointBackgroundColor: chartColors[0],
        pointRadius: 4,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'AI Data Center Market Growth (2024-2030)',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#13343B',
          bodyColor: '#13343B',
          borderColor: 'rgba(94, 82, 64, 0.2)',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              const value = context.raw;
              return `${context.dataset.label}: $${value.toFixed(1)} Billion`;
            }
          }
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            usePointStyle: true
          }
        }
      },
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Market Size (USD Billion)'
          },
          beginAtZero: true,
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        }
      }
    }
  });
}

// Update Growth Chart based on selected metric
function updateGrowthChart(metric) {
  let data, label, title, yAxisLabel;
  
  switch(metric) {
    case 'market':
      data = dashboardData.market_forecast.map(d => d.AI_Data_Center_Market_USD_Billion);
      label = 'AI Data Center Market (USD Billion)';
      title = 'AI Data Center Market Growth (2024-2030)';
      yAxisLabel = 'Market Size (USD Billion)';
      break;
    case 'power':
      data = dashboardData.market_forecast.map(d => d.Global_Power_Demand_GW);
      label = 'Global Power Demand (GW)';
      title = 'Global Data Center Power Demand (2024-2030)';
      yAxisLabel = 'Power Demand (GW)';
      break;
    case 'investment':
      data = dashboardData.market_forecast.map(d => d.Total_Investment_USD_Billion);
      label = 'Total Investment (USD Billion)';
      title = 'Total Data Center Investment (2024-2030)';
      yAxisLabel = 'Investment (USD Billion)';
      break;
  }
  
  // Update chart data and options
  window.growthChart.data.datasets[0].data = data;
  window.growthChart.data.datasets[0].label = label;
  window.growthChart.options.plugins.title.text = title;
  window.growthChart.options.scales.y.title.text = yAxisLabel;
  
  // Update chart
  window.growthChart.update();
}

// Initialize Regional Chart
function initRegionalChart() {
  const ctx = document.getElementById('regionalChart').getContext('2d');
  
  // Sort regions by projected capacity
  const sortedRegions = [...dashboardData.regional_data].sort((a, b) => 
    b.Projected_2030_Capacity_MW - a.Projected_2030_Capacity_MW
  );
  
  window.regionalChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedRegions.map(d => d.Region),
      datasets: [
        {
          label: 'Current Capacity (MW)',
          data: sortedRegions.map(d => d.Current_Capacity_MW),
          backgroundColor: chartColors[1],
          borderColor: `${chartColors[1]}99`,
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        },
        {
          label: 'Projected 2030 Capacity (MW)',
          data: sortedRegions.map(d => d.Projected_2030_Capacity_MW),
          backgroundColor: chartColors[0],
          borderColor: `${chartColors[0]}99`,
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Regional Data Center Capacity Comparison',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#13343B',
          bodyColor: '#13343B',
          borderColor: 'rgba(94, 82, 64, 0.2)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              const value = context.raw;
              return `${context.dataset.label}: ${value.toLocaleString()} MW`;
            },
            afterBody: function(context) {
              const regionName = context[0].label;
              const region = dashboardData.regional_data.find(r => r.Region === regionName);
              return [`Growth Rate (CAGR): ${region.Growth_Rate_CAGR}%`, 
                      `Investment (2025): $${region.Investment_2025_USD_Billion}B`];
            }
          }
        },
        legend: {
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Capacity (MW)'
          },
          beginAtZero: true,
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        },
        y: {
          title: {
            display: false
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// Initialize and display business opportunities
function initOpportunitiesData() {
  // Create opportunity cards
  createOpportunityCards();
  
  // Create opportunities chart
  createOpportunitiesChart();
  
  // Set initial sorting (by growth rate)
  sortOpportunities('growth');
}

// Create opportunity cards
function createOpportunityCards() {
  const container = document.getElementById('opportunities-grid');
  container.innerHTML = '';
  
  dashboardData.business_opportunities.forEach(opp => {
    const card = document.createElement('div');
    card.className = 'opportunity-card';
    card.setAttribute('data-category', opp.Opportunity_Category);
    card.setAttribute('data-growth', opp.Growth_Rate_CAGR);
    card.setAttribute('data-market', opp.Projected_2030_USD_Billion);
    card.setAttribute('data-score', opp.Investment_Attractiveness_Score);
    
    card.innerHTML = `
      <h4>${opp.Opportunity_Category}</h4>
      <div class="opportunity-stats">
        <div class="opportunity-stat">
          <span class="stat-label">2025 Market Size</span>
          <span class="stat-value">$${opp.Market_Size_2025_USD_Billion}B</span>
        </div>
        <div class="opportunity-stat">
          <span class="stat-label">2030 Market Size</span>
          <span class="stat-value">$${opp.Projected_2030_USD_Billion}B</span>
        </div>
        <div class="opportunity-stat">
          <span class="stat-label">Growth Rate</span>
          <span class="stat-value">${opp.Growth_Rate_CAGR}%</span>
        </div>
        <div class="opportunity-stat">
          <span class="stat-label">Growth Multiple</span>
          <span class="stat-value">${(opp.Projected_2030_USD_Billion / opp.Market_Size_2025_USD_Billion).toFixed(1)}x</span>
        </div>
      </div>
      <div class="attractiveness-score">
        <span class="score-label">Investment Attractiveness Score</span>
        <span class="score-value">${opp.Investment_Attractiveness_Score}/10</span>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Create opportunities chart
function createOpportunitiesChart() {
  const ctx = document.getElementById('opportunitiesChart').getContext('2d');
  
  window.opportunitiesChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: dashboardData.business_opportunities.map((opp, index) => {
        return {
          label: opp.Opportunity_Category,
          data: [{
            x: opp.Growth_Rate_CAGR,
            y: opp.Projected_2030_USD_Billion,
            r: opp.Investment_Attractiveness_Score * 3
          }],
          backgroundColor: `${chartColors[index % chartColors.length]}99`
        };
      })
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Business Opportunities: Growth vs Market Size (2030)',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const opportunity = dashboardData.business_opportunities[context.datasetIndex];
              return [
                `${opportunity.Opportunity_Category}`,
                `Growth Rate: ${opportunity.Growth_Rate_CAGR}%`,
                `2030 Market Size: $${opportunity.Projected_2030_USD_Billion}B`,
                `Attractiveness Score: ${opportunity.Investment_Attractiveness_Score}/10`
              ];
            }
          }
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Growth Rate (CAGR %)'
          },
          min: 10,
          max: 35
        },
        y: {
          title: {
            display: true,
            text: 'Market Size 2030 (USD Billion)'
          },
          beginAtZero: true
        }
      }
    }
  });
}

// Sort business opportunities
function sortOpportunities(sortBy) {
  const container = document.getElementById('opportunities-grid');
  const cards = Array.from(container.querySelectorAll('.opportunity-card'));
  
  cards.sort((a, b) => {
    let aValue, bValue;
    
    switch(sortBy) {
      case 'growth':
        aValue = parseFloat(a.getAttribute('data-growth'));
        bValue = parseFloat(b.getAttribute('data-growth'));
        break;
      case 'market-size':
        aValue = parseFloat(a.getAttribute('data-market'));
        bValue = parseFloat(b.getAttribute('data-market'));
        break;
      case 'attractiveness':
        aValue = parseFloat(a.getAttribute('data-score'));
        bValue = parseFloat(b.getAttribute('data-score'));
        break;
    }
    
    return bValue - aValue; // Sort descending
  });
  
  // Reattach sorted cards
  cards.forEach(card => {
    container.appendChild(card);
  });
}

// Initialize Power Consumption Chart
function initPowerChart() {
  const ctx = document.getElementById('powerChart').getContext('2d');
  
  const years = dashboardData.power_consumption.map(d => d.Year);
  const aiPower = dashboardData.power_consumption.map(d => d.AI_Specific_Power_TWh);
  const traditionalPower = dashboardData.power_consumption.map(d => 
    d.Total_Data_Center_Power_TWh - d.AI_Specific_Power_TWh
  );
  
  window.powerChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'AI Specific Power (TWh)',
          data: aiPower,
          backgroundColor: `${chartColors[0]}80`,
          borderColor: chartColors[0],
          fill: true,
          tension: 0.4
        },
        {
          label: 'Traditional Workloads (TWh)',
          data: traditionalPower,
          backgroundColor: `${chartColors[1]}80`,
          borderColor: chartColors[1],
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Data Center Power Consumption Trends',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Power Consumption (TWh)'
          },
          beginAtZero: true
        }
      }
    }
  });
}

// Initialize Sustainability Chart
function initSustainabilityChart() {
  const ctx = document.getElementById('sustainabilityChart').getContext('2d');
  
  window.sustainabilityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.power_consumption.map(d => d.Year),
      datasets: [
        {
          label: 'Renewable Energy Share (%)',
          data: dashboardData.power_consumption.map(d => d.Renewable_Energy_Share_Percent),
          backgroundColor: chartColors[0],
          borderColor: `${chartColors[0]}99`,
          borderWidth: 1,
          order: 2,
          yAxisID: 'y-right'
        },
        {
          label: 'Carbon Emissions (Mt CO2)',
          data: dashboardData.power_consumption.map(d => d.Carbon_Emissions_Million_Tonnes_CO2),
          type: 'line',
          borderColor: chartColors[2],
          backgroundColor: `${chartColors[2]}20`,
          borderWidth: 2,
          pointBackgroundColor: chartColors[2],
          pointRadius: 4,
          fill: false,
          order: 1,
          yAxisID: 'y-left',
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Data Center Sustainability Metrics',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        'y-left': {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Carbon Emissions (Million Tonnes CO2)'
          },
          beginAtZero: true,
          grid: {
            display: false
          }
        },
        'y-right': {
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'Renewable Energy (%)'
          },
          beginAtZero: true,
          max: 100,
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// Export data functionality
function exportData(dataType) {
  let dataToExport, filename;
  
  switch(dataType) {
    case 'market-forecast':
      dataToExport = dashboardData.market_forecast;
      filename = 'ai_data_center_market_forecast.csv';
      break;
    case 'regional-data':
      dataToExport = dashboardData.regional_data;
      filename = 'regional_data_center_capacity.csv';
      break;
    case 'business-opportunities':
      dataToExport = dashboardData.business_opportunities;
      filename = 'data_center_business_opportunities.csv';
      break;
    case 'power-data':
      dataToExport = dashboardData.power_consumption;
      filename = 'data_center_power_consumption.csv';
      break;
  }
  
  // Convert JSON to CSV
  const csv = convertToCSV(dataToExport);
  
  // Create download link
  const downloadLink = document.createElement('a');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  
  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Convert JSON to CSV
function convertToCSV(data) {
  if (!data || data.length === 0) return '';
  
  // Get headers
  const headers = Object.keys(data[0]);
  
  // Create CSV rows
  const csvRows = [];
  
  // Add header row
  csvRows.push(headers.join(','));
  
  // Add data rows
  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header];
      // Handle string values with commas
      return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
    });
    csvRows.push(values.join(','));
  }
  
  return csvRows.join('\n');
}