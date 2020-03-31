
//Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
.container("#viz1")
.data([{"year": 1991, "name":"alpha", "value": 15},
{"year": 1992, "name":"alpha", "value": 20},])
.type("bar")
.id("name")
.x("year")
.y("value")
.draw()

var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ]
var visualization = d3plus.viz()
  .container("#viz2")
  .data(data)
  .type("bar")
  .id("name")
  .x("year")
  .y("value")
  .axes({"ticks" : false})
  .draw()

var data3 = [
        {"year": 1991, "name":"alpha", "value": 15},
        {"year": 1992, "name":"alpha", "value": 34},
        {"year": 1991, "name":"alpha2", "value": 17},
        {"year": 1992, "name":"alpha2", "value": 65},
        {"year": 1991, "name":"beta", "value": 10},
        {"year": 1992, "name":"beta", "value": 10},
        {"year": 1991, "name":"beta2", "value": 40},
        {"year": 1992, "name":"beta2", "value": 38},
        {"year": 1991, "name":"gamma", "value": 5},
        {"year": 1992, "name":"gamma", "value": 10},
        {"year": 1991, "name":"gamma2", "value": 20},
        {"year": 1992, "name":"gamma2", "value": 34},
        {"year": 1991, "name":"delta", "value": 50},
        {"year": 1992, "name":"delta", "value": 43},
        {"year": 1991, "name":"delta2", "value": 17},
        {"year": 1992, "name":"delta2", "value": 35}
      ]
var myData = [
  {"Travel Time": "<5 Minutes",    "Population Percentage":  2},
  {"Travel Time": "15-24 Minutes", "Population Percentage": 30},
  {"Travel Time": "35-44 Minutes", "Population Percentage":  7},
  {"Travel Time": "45-89 Minutes", "Population Percentage": 11},
  {"Travel Time": "5-14 Minutes",  "Population Percentage": 20},
  {"Travel Time": "90+ Minutes",   "Population Percentage":  5},
  {"Travel Time": "25-34 Minutes", "Population Percentage": 25}
]

new d3plus.BarChart()
  .config({
    data: myData,
    groupBy: "Travel Time",
    x: "Travel Time",
    xConfig: {
      tickFormat: function(d) {
        return d.replace("Minutes", "").trim();
      },
      title: "Commute Time in Minutes"
    },
    y: "Population Percentage",
    yConfig: {
      tickFormat: function(d) {
        return d + "%";
      },
      title: "Percentage of Population"
    },
    shapeConfig: {label: false},
    legend: false
  })
  .render();
