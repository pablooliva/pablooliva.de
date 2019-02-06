const annotationsColor = "#419790";

const options = {
  annotations: {
    yaxis: [
      {
        y: 0,
        borderColor: annotationsColor,
        label: {
          borderColor: annotationsColor,
          style: {
            color: '#fff',
            background: annotationsColor,
          },
          text: 'Exposure',
        }
      },
      {
        y: 2,
        borderColor: annotationsColor,
        label: {
          borderColor: annotationsColor,
          style: {
            color: '#fff',
            background: annotationsColor,
          },
          text: 'Familiar',
        }
      },
      {
        y: 4,
        borderColor: annotationsColor,
        label: {
          borderColor: annotationsColor,
          style: {
            color: '#fff',
            background: annotationsColor,
          },
          text: 'Proficient',
        }
      },
      {
        y: 6,
        borderColor: annotationsColor,
        label: {
          borderColor: annotationsColor,
          style: {
            color: '#fff',
            background: annotationsColor,
          },
          text: 'Expert',
        }
      }]
  },
  chart: {
    height: 350,
    type: 'line',
    shadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 1
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#141866', '#27991C', '#5261CC', '#9eb3c2', '#99650F', '#978F89', '#26BE5D'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 6
  },
  xaxis: {
    categories: ["02", "05", "08", "14", "15", "16", "17", "18", "19", "20"],
    title: {
      style: {
        fontSize: '13px',
      },
      text: 'Year'
    }
  },
  yaxis: {
    title: {
      style: {
        fontSize: '13px',
      },
      text: 'Expertise'
    },
    // 0 (Exposure), 2 (Familiar), 4 (Proficient), 6 (Expert)
    min: 0,
    max: 8
  },
  legend: {
    fontSize: '14px',
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -48,
    offsetX: 0
  }
}

const optionsLanguagesPrimary = JSON.parse(JSON.stringify(options));
optionsLanguagesPrimary.series = [
  {
    name: "JS",
    data: [0, 1, 2, 2, 2.5, 4, 4.5, 4.7, 5, null]
  },
  {
    name: "TS",
    data: [null, null, null, null, null, 0, 2.5, 4, 4.5, null]
  },
  {
    name: "CSS / SASS",
    data: [2.5, 2.7, 3, 3.1, 3.5, 3.6, 3.8, 4, 4.1, null]
  },
  {
    name: "HTML",
    data: [3, 3.5, 3.6, 5, 5.1, 5.2, 5.3, 5.4, 5.5, null]
  }
];
optionsLanguagesPrimary.title = {
  style: {
    fontSize: '16px',
  },
  text: 'Primary Languages',
  align: 'left'
};

const chartLanguagesPrimary = new ApexCharts(
  document.querySelector("#chart-languages-primary"),
  optionsLanguagesPrimary
);
chartLanguagesPrimary.render();

const optionsLanguagesSecondary = JSON.parse(JSON.stringify(options));
optionsLanguagesSecondary.series = [
  {
    name: "Java",
    data: [4, 2, 1, 0.9, 1, 1.2, 2, 2.2, 2.4, null]
  },
  {
    name: "PHP",
    data: [0, 4, 3, 3.8, 4.6, 4, 3.7, 3.6, 3.2, null]
  },
  {
    name: "C# (ASP.NET)",
    data: [null, null, 0, 1, 2, 2.5, 2, 1, 1, null]
  },
  {
    name: "Python",
    data: [null, null, null, null, null, null, null, 0, 1, null]
  }
];
optionsLanguagesSecondary.title = {
  style: {
    fontSize: '16px',
  },
  text: 'Secondary Languages',
  align: 'left'
};

const chartLanguagesSecondary = new ApexCharts(
  document.querySelector("#chart-languages-secondary"),
  optionsLanguagesSecondary
);
chartLanguagesSecondary.render();

const optionsFrameworks = JSON.parse(JSON.stringify(options));
optionsFrameworks.series = [
  {
    name: "Angular",
    data: [null, null, null, null, 0, 2, 3.8, 4.5, 5, null]
  },
  {
    name: "Node.js",
    data: [null, null, null, null, null, null, 0, 3.5, 3.9, null]
  },
  {
    name: "MongoDB",
    data: [null, null, null, null, null, null, 0, 2.5, 2.3, null]
  },
  {
    name: "Firebase",
    data: [null, null, null, null, 0, 2.7, 2.3, 2, 1.7, null]
  },
  {
    name: "SQL",
    data: [1, 3, 2.5, 3.2, 3, 2.5, 2, 2, 1.5, null]
  },
  {
    name: "Ng Material",
    data: [null, null, null, null, null, null, 0, 1, 2.5, null]
  },
  {
    name: "Bootstrap",
    data: [null, null, null, 0, 3, 3.8, 3.5, 3, 2, null]
  }
];
optionsFrameworks.title = {
  style: {
    fontSize: '16px',
  },
  text: '*',
  align: 'left'
};

const chartFrameworks = new ApexCharts(
  document.querySelector("#chart-frameworks"),
  optionsFrameworks
);
chartFrameworks.render();

// ["02", "05", "08", "14", "15", "16", "17", "18", "19", null]
const optionsConcepts = JSON.parse(JSON.stringify(options));
optionsConcepts.series = [
  {
    name: "Docker",
    data: [null, null, null, null, null, null, 0, 2, 4, null]
  },
  {
    name: "CI/CD",
    data: [null, null, null, null, null, null, null, 0, 2, null]
  },
  {
    name: "PWAs",
    data: [null, null, null, null, null, 0, 1, 1.8, 2.2, null]
  },
  {
    name: "Security",
    data: [null, null, null, 0, 1, 1, 1, 1.5, 2.5, null]
  },
  {
    name: "Performance",
    data: [null, null, null, null, null, 0, 0.6, 0.8, 1.8, null]
  }
];
optionsConcepts.title = {
  style: {
    fontSize: '16px',
  },
  text: 'Concepts & Practices',
  align: 'left'
};

const chartConcepts = new ApexCharts(
  document.querySelector("#chart-concepts"),
  optionsConcepts
);
chartConcepts.render();