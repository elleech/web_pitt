// load Google Charts API
google.charts.load("current", { packages: ["corechart", "bar"] });

var mmw_list = [
  ["Main Ball Number", "Frequency"],
  ["1", 21],
  ["2", 17],
  ["3", 20],
  ["4", 23],
  ["5", 12],
  ["6", 13],
  ["7", 13],
  ["8", 20],
  ["9", 12],
  ["10", 24],
  ["11", 22],
  ["12", 18],
  ["13", 14],
  ["14", 24],
  ["15", 15],
  ["16", 18],
  ["17", 24],
  ["18", 14],
  ["19", 10],
  ["20", 15],
  ["21", 10],
  ["22", 19],
  ["23", 17],
  ["24", 22],
  ["25", 17],
  ["26", 11],
  ["27", 13],
  ["28", 21],
  ["29", 18],
  ["30", 20],
  ["31", 25],
  ["32", 14],
  ["33", 16],
  ["34", 21],
  ["35", 9],
  ["36", 9],
  ["37", 19],
  ["38", 21],
  ["39", 20],
  ["40", 17],
  ["41", 15],
  ["42", 23],
  ["43", 22],
  ["44", 16],
  ["45", 9],
  ["46", 18],
  ["47", 15],
  ["48", 23],
  ["49", 17],
  ["50", 10],
  ["51", 10],
  ["52", 11],
  ["53", 16],
  ["54", 16],
  ["55", 10],
  ["56", 18],
  ["57", 13],
  ["58", 16],
  ["59", 19],
  ["60", 19],
  ["61", 18],
  ["62", 25],
  ["63", 16],
  ["64", 17],
  ["65", 15],
  ["66", 17],
  ["67", 14],
  ["68", 17],
  ["69", 11],
  ["70", 21]
];

var mmw_list_sorted = [
  ["Main Ball Number", "Frequency"],
  ["31", 25],
  ["62", 25],
  ["10", 24],
  ["14", 24],
  ["17", 24],
  ["4", 23],
  ["42", 23],
  ["48", 23],
  ["11", 22],
  ["24", 22],
  ["43", 22],
  ["1", 21],
  ["28", 21],
  ["34", 21],
  ["38", 21],
  ["70", 21],
  ["3", 20],
  ["8", 20],
  ["30", 20],
  ["39", 20],
  ["22", 19],
  ["37", 19],
  ["59", 19],
  ["60", 19],
  ["12", 18],
  ["16", 18],
  ["29", 18],
  ["46", 18],
  ["56", 18],
  ["61", 18],
  ["2", 17],
  ["23", 17],
  ["25", 17],
  ["40", 17],
  ["49", 17],
  ["64", 17],
  ["66", 17],
  ["68", 17],
  ["33", 16],
  ["44", 16],
  ["53", 16],
  ["54", 16],
  ["58", 16],
  ["63", 16],
  ["15", 15],
  ["20", 15],
  ["41", 15],
  ["47", 15],
  ["65", 15],
  ["13", 14],
  ["18", 14],
  ["32", 14],
  ["67", 14],
  ["6", 13],
  ["7", 13],
  ["27", 13],
  ["57", 13],
  ["5", 12],
  ["9", 12],
  ["26", 11],
  ["52", 11],
  ["69", 11],
  ["19", 10],
  ["21", 10],
  ["50", 10],
  ["51", 10],
  ["55", 10],
  ["35", 9],
  ["36", 9],
  ["45", 9]
];

// change data by radio button - Mega Millions white ball
var radio_mmw = document.querySelectorAll('input[type=radio][name="mmw"]');
function radio_drawMMw(event) {
  if (this.value === "mmw8num") {
    console.log("Draw by number selected.");
    var data = new google.visualization.arrayToDataTable(mmw_list);
    google.charts.setOnLoadCallback(drawMMwBasic(data));
  } else if (this.value === "mmw8freq") {
    console.log("Draw by frequency selected.");
    var data = new google.visualization.arrayToDataTable(mmw_list_sorted);
    google.charts.setOnLoadCallback(drawMMwBasic(data));
  }
}
Array.prototype.forEach.call(radio_mmw, function(radio) {
  radio.addEventListener("click", radio_drawMMw);
});

// draw column chart - Mega Millions white ball
function drawMMwBasic(data) {
  // https://stackoverflow.com/questions/46596229/google-column-graphs-set-color-conditionally
  // set color conditionally using DataView()
  var ranges = [
    [0, 10, "lightskyblue"],
    [10, 17, "greenyellow"],
    [17, 23, "gold"],
    [23, null, "salmon"]
  ];

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: function(dt, row) {
        var rowValue = dt.getValue(row, 1);
        var color;
        ranges.forEach(function(range, index) {
          if (
            rowValue >= range[0] &&
            (rowValue < range[1] || range[1] === null)
          ) {
            color = range[2];
          }
        });
        return color;
      },
      role: "style",
      type: "string"
    }
  ]);

  var options = {
    backgroundColor: "#263f3f",
    legend: {
      position: "none"
    },

    title: "Mega Millions MAIN BALL (White) Number Frequencies",
    titleTextStyle: {
      color: "white"
    },

    hAxis: {
      title: "Main Ball Number",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    },
    vAxis: {
      title: "Drawn Frequency",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_mm_w")
  );

  chart.draw(view, options);
}

var mmg_list = [
  ["MegaBall Number", "Frequency"],
  ["1", 10],
  ["2", 8],
  ["3", 8],
  ["4", 9],
  ["5", 9],
  ["6", 8],
  ["7", 9],
  ["8", 5],
  ["9", 14],
  ["10", 13],
  ["11", 15],
  ["12", 8],
  ["13", 9],
  ["14", 9],
  ["15", 5],
  ["16", 10],
  ["17", 7],
  ["18", 6],
  ["19", 10],
  ["20", 13],
  ["21", 10],
  ["22", 13],
  ["23", 10],
  ["24", 10],
  ["25", 7]
];

var mmg_list_sorted = [
  ["Main Ball Number", "Frequency"],
  ["11", 15],
  ["9", 14],
  ["10", 13],
  ["20", 13],
  ["22", 13],
  ["1", 10],
  ["16", 10],
  ["19", 10],
  ["21", 10],
  ["23", 10],
  ["24", 10],
  ["4", 9],
  ["5", 9],
  ["7", 9],
  ["13", 9],
  ["14", 9],
  ["2", 8],
  ["3", 8],
  ["6", 8],
  ["12", 8],
  ["17", 7],
  ["25", 7],
  ["18", 6],
  ["8", 5],
  ["15", 5]
];

// change data by radio button - Mega Millions gold ball
var radio_mmg = document.querySelectorAll('input[type=radio][name="mmg"]');
function radio_drawMMg(event) {
  if (this.value === "mmg8num") {
    console.log("Draw by number selected.");
    var data = new google.visualization.arrayToDataTable(mmg_list);
    google.charts.setOnLoadCallback(drawMMgBasic(data));
  } else if (this.value === "mmg8freq") {
    console.log("Draw by frequency selected.");
    var data = new google.visualization.arrayToDataTable(mmg_list_sorted);
    google.charts.setOnLoadCallback(drawMMgBasic(data));
  }
}
Array.prototype.forEach.call(radio_mmg, function(radio) {
  radio.addEventListener("click", radio_drawMMg);
});

// draw column chart - Mega Millions gold ball
function drawMMgBasic(data) {
  // https://stackoverflow.com/questions/46596229/google-column-graphs-set-color-conditionally
  // set color conditionally using DataView()
  var ranges = [
    [0, 6, "lightskyblue"],
    [6, 9, "greenyellow"],
    [9, 13, "gold"],
    [13, null, "salmon"]
  ];

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: function(dt, row) {
        var rowValue = dt.getValue(row, 1);
        var color;
        ranges.forEach(function(range, index) {
          if (
            rowValue >= range[0] &&
            (rowValue < range[1] || range[1] === null)
          ) {
            color = range[2];
          }
        });
        return color;
      },
      role: "style",
      type: "string"
    }
  ]);

  var options = {
    backgroundColor: "#263f3f",
    legend: {
      position: "none"
    },

    title: "Mega Millions MEGABALL (Gold) Number Frequencies",
    titleTextStyle: {
      color: "white"
    },

    hAxis: {
      title: "MegaBall Number",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    },
    vAxis: {
      title: "Drawn Frequency",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_mm_g")
  );

  chart.draw(view, options);
}

var pbw_list = [
  ["Main Ball Number", "Frequency"],
  ["1", 32],
  ["2", 28],
  ["3", 40],
  ["4", 26],
  ["5", 33],
  ["6", 33],
  ["7", 31],
  ["8", 32],
  ["9", 35],
  ["10", 33],
  ["11", 29],
  ["12", 36],
  ["13", 26],
  ["14", 36],
  ["15", 30],
  ["16", 36],
  ["17", 36],
  ["18", 29],
  ["19", 33],
  ["20", 38],
  ["21", 37],
  ["22", 30],
  ["23", 48],
  ["24", 30],
  ["25", 35],
  ["26", 29],
  ["27", 34],
  ["28", 42],
  ["29", 33],
  ["30", 30],
  ["31", 29],
  ["32", 48],
  ["33", 29],
  ["34", 24],
  ["35", 21],
  ["36", 29],
  ["37", 31],
  ["38", 29],
  ["39", 30],
  ["40", 29],
  ["41", 37],
  ["42", 33],
  ["43", 30],
  ["44", 32],
  ["45", 31],
  ["46", 23],
  ["47", 29],
  ["48", 26],
  ["49", 26],
  ["50", 32],
  ["51", 24],
  ["52", 33],
  ["53", 40],
  ["54", 33],
  ["55", 28],
  ["56", 37],
  ["57", 35],
  ["58", 23],
  ["59", 39],
  ["60", 27],
  ["61", 43],
  ["62", 38],
  ["63", 38],
  ["64", 44],
  ["65", 25],
  ["66", 35],
  ["67", 34],
  ["68", 38],
  ["69", 43]
];

var pbw_list_sorted = [
  ["Main Ball Number", "Frequency"],
  ["23", 48],
  ["32", 48],
  ["64", 44],
  ["61", 43],
  ["69", 43],
  ["28", 42],
  ["3", 40],
  ["53", 40],
  ["59", 39],
  ["20", 38],
  ["62", 38],
  ["63", 38],
  ["68", 38],
  ["21", 37],
  ["41", 37],
  ["56", 37],
  ["12", 36],
  ["14", 36],
  ["16", 36],
  ["17", 36],
  ["9", 35],
  ["25", 35],
  ["57", 35],
  ["66", 35],
  ["27", 34],
  ["67", 34],
  ["5", 33],
  ["6", 33],
  ["10", 33],
  ["19", 33],
  ["29", 33],
  ["42", 33],
  ["52", 33],
  ["54", 33],
  ["1", 32],
  ["8", 32],
  ["44", 32],
  ["50", 32],
  ["7", 31],
  ["37", 31],
  ["45", 31],
  ["15", 30],
  ["22", 30],
  ["24", 30],
  ["30", 30],
  ["39", 30],
  ["43", 30],
  ["11", 29],
  ["18", 29],
  ["26", 29],
  ["31", 29],
  ["33", 29],
  ["36", 29],
  ["38", 29],
  ["40", 29],
  ["47", 29],
  ["2", 28],
  ["55", 28],
  ["60", 27],
  ["4", 26],
  ["13", 26],
  ["48", 26],
  ["49", 26],
  ["65", 25],
  ["34", 24],
  ["51", 24],
  ["46", 23],
  ["58", 23],
  ["35", 21]
];

// change data by radio button - PowerBall white ball
var radio_pbw = document.querySelectorAll('input[type=radio][name="pbw"]');
function radio_drawPBw(event) {
  if (this.value === "pbw8num") {
    console.log("Draw by number selected.");
    var data = new google.visualization.arrayToDataTable(pbw_list);
    google.charts.setOnLoadCallback(drawPBwBasic(data));
  } else if (this.value === "pbw8freq") {
    console.log("Draw by frequency selected.");
    var data = new google.visualization.arrayToDataTable(pbw_list_sorted);
    google.charts.setOnLoadCallback(drawPBwBasic(data));
  }
}
Array.prototype.forEach.call(radio_pbw, function(radio) {
  radio.addEventListener("click", radio_drawPBw);
});

// draw column chart - PowerBall white ball
function drawPBwBasic(data) {
  // https://stackoverflow.com/questions/46596229/google-column-graphs-set-color-conditionally
  // set color conditionally using DataView()
  var ranges = [
    [0, 25, "lightskyblue"],
    [25, 33, "greenyellow"],
    [33, 40, "gold"],
    [40, null, "salmon"]
  ];

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: function(dt, row) {
        var rowValue = dt.getValue(row, 1);
        var color;
        ranges.forEach(function(range, index) {
          if (
            rowValue >= range[0] &&
            (rowValue < range[1] || range[1] === null)
          ) {
            color = range[2];
          }
        });
        return color;
      },
      role: "style",
      type: "string"
    }
  ]);

  var options = {
    backgroundColor: "#263f3f",
    legend: {
      position: "none"
    },

    title: "PowerBall MAIN BALL (White) Number Frequencies",
    titleTextStyle: {
      color: "white"
    },

    hAxis: {
      title: "Main Ball Number",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    },
    vAxis: {
      title: "Drawn Frequency",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_pb_w")
  );

  chart.draw(view, options);
}

var pbr_list = [
  ["PowerBall Number", "Frequency"],
  ["1", 15],
  ["2", 15],
  ["3", 21],
  ["4", 17],
  ["5", 12],
  ["6", 20],
  ["7", 16],
  ["8", 18],
  ["9", 20],
  ["10", 19],
  ["11", 16],
  ["12", 17],
  ["13", 20],
  ["14", 12],
  ["15", 17],
  ["16", 11],
  ["17", 15],
  ["18", 18],
  ["19", 18],
  ["20", 15],
  ["21", 25],
  ["22", 19],
  ["23", 13],
  ["24", 22],
  ["25", 21],
  ["26", 19]
];

var pbr_list_sorted = [
  ["PowerBall Number", "Frequency"],
  ["21", 25],
  ["24", 22],
  ["3", 21],
  ["25", 21],
  ["6", 20],
  ["9", 20],
  ["13", 20],
  ["10", 19],
  ["22", 19],
  ["26", 19],
  ["8", 18],
  ["18", 18],
  ["19", 18],
  ["4", 17],
  ["12", 17],
  ["15", 17],
  ["7", 16],
  ["11", 16],
  ["1", 15],
  ["2", 15],
  ["17", 15],
  ["20", 15],
  ["23", 13],
  ["5", 12],
  ["14", 12],
  ["16", 11]
];

// change data by radio button - PowerBall red ball
var radio_pbr = document.querySelectorAll('input[type=radio][name="pbr"]');
function radio_drawPBr(event) {
  if (this.value === "pbr8num") {
    console.log("Draw by number selected.");
    var data = new google.visualization.arrayToDataTable(pbr_list);
    google.charts.setOnLoadCallback(drawPBrBasic(data));
  } else if (this.value === "pbr8freq") {
    console.log("Draw by frequency selected.");
    var data = new google.visualization.arrayToDataTable(pbr_list_sorted);
    google.charts.setOnLoadCallback(drawPBrBasic(data));
  }
}
Array.prototype.forEach.call(radio_pbr, function(radio) {
  radio.addEventListener("click", radio_drawPBr);
});

// draw column chart - PowerBall red ball
function drawPBrBasic(data) {
  // https://stackoverflow.com/questions/46596229/google-column-graphs-set-color-conditionally
  // set color conditionally using DataView()
  var ranges = [
    [0, 13, "lightskyblue"],
    [13, 18, "greenyellow"],
    [18, 21, "gold"],
    [21, null, "salmon"]
  ];

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: function(dt, row) {
        var rowValue = dt.getValue(row, 1);
        var color;
        ranges.forEach(function(range, index) {
          if (
            rowValue >= range[0] &&
            (rowValue < range[1] || range[1] === null)
          ) {
            color = range[2];
          }
        });
        return color;
      },
      role: "style",
      type: "string"
    }
  ]);

  var options = {
    backgroundColor: "#263f3f",
    legend: {
      position: "none"
    },

    title: "PowerBall POWERBALL (Red) Number Frequencies",
    titleTextStyle: {
      color: "white"
    },

    hAxis: {
      title: "PowerBall Number",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    },
    vAxis: {
      title: "Drawn Frequency",
      titleTextStyle: {
        color: "white"
      },
      textStyle: {
        color: "white"
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_pb_r")
  );

  chart.draw(view, options);
}

// random number generator - Mega Millions
function gen_randMM() {
  var mmw = [];
  for (var i = 1; i <= 70; i++) {
    mmw.push(i);
  }
  var mmg = [];
  for (var i = 1; i <= 25; i++) {
    mmg.push(i);
  }

  var res = [];
  while (res.length < 5) {
    var rand = mmw[Math.floor(Math.random() * mmw.length)];
    mmw.splice(mmw.indexOf(rand), 1);
    res.push(rand);
  }

  document.getElementById("showrandmm").value =
    res + " + " + mmg[Math.floor(Math.random() * mmg.length)];
}

const btn_randMM = document.getElementById("randmm");
btn_randMM.addEventListener("click", gen_randMM);

// random weighted number generator - Mega Millions
function randMM_weighted() {
  // meant to use the global variable (mmw_list) but somehow cannot access
  var mmw_list = [
    ["1", 21],
    ["2", 17],
    ["3", 20],
    ["4", 23],
    ["5", 12],
    ["6", 13],
    ["7", 13],
    ["8", 20],
    ["9", 12],
    ["10", 24],
    ["11", 22],
    ["12", 18],
    ["13", 14],
    ["14", 24],
    ["15", 15],
    ["16", 18],
    ["17", 24],
    ["18", 14],
    ["19", 10],
    ["20", 15],
    ["21", 10],
    ["22", 19],
    ["23", 17],
    ["24", 22],
    ["25", 17],
    ["26", 11],
    ["27", 13],
    ["28", 21],
    ["29", 18],
    ["30", 20],
    ["31", 25],
    ["32", 14],
    ["33", 16],
    ["34", 21],
    ["35", 9],
    ["36", 9],
    ["37", 19],
    ["38", 21],
    ["39", 20],
    ["40", 17],
    ["41", 15],
    ["42", 23],
    ["43", 22],
    ["44", 16],
    ["45", 9],
    ["46", 18],
    ["47", 15],
    ["48", 23],
    ["49", 17],
    ["50", 10],
    ["51", 10],
    ["52", 11],
    ["53", 16],
    ["54", 16],
    ["55", 10],
    ["56", 18],
    ["57", 13],
    ["58", 16],
    ["59", 19],
    ["60", 19],
    ["61", 18],
    ["62", 25],
    ["63", 16],
    ["64", 17],
    ["65", 15],
    ["66", 17],
    ["67", 14],
    ["68", 17],
    ["69", 11],
    ["70", 21]
  ];
  var mmw_weighted = [];
  for (var i = 0; i < mmw_list.length; i++) {
    for (var j = 0; j < mmw_list[i][1]; j++) {
      mmw_weighted.push(i + 1);
    }
  }
  // meant to use the global variable (mmg_list) but somehow cannot access
  var mmg_list = [
    ["1", 10],
    ["2", 8],
    ["3", 8],
    ["4", 9],
    ["5", 9],
    ["6", 8],
    ["7", 9],
    ["8", 5],
    ["9", 14],
    ["10", 13],
    ["11", 15],
    ["12", 8],
    ["13", 9],
    ["14", 9],
    ["15", 5],
    ["16", 10],
    ["17", 7],
    ["18", 6],
    ["19", 10],
    ["20", 13],
    ["21", 10],
    ["22", 13],
    ["23", 10],
    ["24", 10],
    ["25", 7]
  ];
  var mmg_weighted = [];
  for (var i = 0; i < mmg_list.length; i++) {
    for (var j = 0; j < mmg_list[i][1]; j++) {
      mmg_weighted.push(i + 1);
    }
  }

  var res = [];
  while (res.length < 5) {
    var rand = mmw_weighted[Math.floor(Math.random() * mmw_weighted.length)];
    mmw_weighted.splice(mmw_weighted.indexOf(rand), mmw_list[rand - 1][1]);
    res.push(rand);
  }

  document.getElementById("showrandmm_weighted").value =
    res + " + " + mmg_weighted[Math.floor(Math.random() * mmg_weighted.length)];
}
const btn_randMM_weighted = document.getElementById("randmm_weighted");
btn_randMM_weighted.addEventListener("click", randMM_weighted);

// random number generator - PowerBall
function gen_randPB() {
  var pbw = [];
  for (var i = 1; i <= 69; i++) {
    pbw.push(i);
  }
  var pbr = [];
  for (var i = 1; i <= 26; i++) {
    pbr.push(i);
  }

  var res = [];
  while (res.length < 5) {
    var rand = pbw[Math.floor(Math.random() * pbw.length)];
    pbw.splice(pbw.indexOf(rand), 1);
    res.push(rand);
  }

  document.getElementById("showrandpb").value =
    res + " + " + pbr[Math.floor(Math.random() * pbr.length)];
}

const btn_randPB = document.getElementById("randpb");
btn_randPB.addEventListener("click", gen_randPB);

// random weighted number generator - Mega Millions
function randPB_weighted() {
  // meant to use the global variable (pbw_list) but somehow cannot access
  var pbw_list = [
    ["1", 21],
    ["2", 17],
    ["3", 20],
    ["4", 23],
    ["5", 12],
    ["6", 13],
    ["7", 13],
    ["8", 20],
    ["9", 12],
    ["10", 24],
    ["11", 22],
    ["12", 18],
    ["13", 14],
    ["14", 24],
    ["15", 15],
    ["16", 18],
    ["17", 24],
    ["18", 14],
    ["19", 10],
    ["20", 15],
    ["21", 10],
    ["22", 19],
    ["23", 17],
    ["24", 22],
    ["25", 17],
    ["26", 11],
    ["27", 13],
    ["28", 21],
    ["29", 18],
    ["30", 20],
    ["31", 25],
    ["32", 14],
    ["33", 16],
    ["34", 21],
    ["35", 9],
    ["36", 9],
    ["37", 19],
    ["38", 21],
    ["39", 20],
    ["40", 17],
    ["41", 15],
    ["42", 23],
    ["43", 22],
    ["44", 16],
    ["45", 9],
    ["46", 18],
    ["47", 15],
    ["48", 23],
    ["49", 17],
    ["50", 10],
    ["51", 10],
    ["52", 11],
    ["53", 16],
    ["54", 16],
    ["55", 10],
    ["56", 18],
    ["57", 13],
    ["58", 16],
    ["59", 19],
    ["60", 19],
    ["61", 18],
    ["62", 25],
    ["63", 16],
    ["64", 17],
    ["65", 15],
    ["66", 17],
    ["67", 14],
    ["68", 17],
    ["69", 11],
    ["70", 21]
  ];
  var pbw_weighted = [];
  for (var i = 0; i < pbw_list.length; i++) {
    for (var j = 0; j < pbw_list[i][1]; j++) {
      pbw_weighted.push(i + 1);
    }
  }
  // meant to use the global variable (pbr_list) but somehow cannot access
  var pbr_list = [
    ["1", 10],
    ["2", 8],
    ["3", 8],
    ["4", 9],
    ["5", 9],
    ["6", 8],
    ["7", 9],
    ["8", 5],
    ["9", 14],
    ["10", 13],
    ["11", 15],
    ["12", 8],
    ["13", 9],
    ["14", 9],
    ["15", 5],
    ["16", 10],
    ["17", 7],
    ["18", 6],
    ["19", 10],
    ["20", 13],
    ["21", 10],
    ["22", 13],
    ["23", 10],
    ["24", 10],
    ["25", 7]
  ];
  var pbr_weighted = [];
  for (var i = 0; i < pbr_list.length; i++) {
    for (var j = 0; j < pbr_list[i][1]; j++) {
      pbr_weighted.push(i + 1);
    }
  }

  var res = [];
  while (res.length < 5) {
    var rand = pbw_weighted[Math.floor(Math.random() * pbw_weighted.length)];
    pbw_weighted.splice(pbw_weighted.indexOf(rand), pbw_list[rand - 1][1]);
    res.push(rand);
  }

  document.getElementById("showrandpb_weighted").value =
    res + " + " + pbr_weighted[Math.floor(Math.random() * pbr_weighted.length)];
}
const btn_randPB_weighted = document.getElementById("randpb_weighted");
btn_randPB_weighted.addEventListener("click", randPB_weighted);
