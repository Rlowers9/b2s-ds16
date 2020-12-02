// Log a comment to the console.
console.log("Hello Beans");
let viz;

//To do list:

//1. Find the URL of the dashboard
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
//2. Find the viz container on the page
const vizContainer = document.getElementById("vizContainer");
//3. Create viz options
const options = {
  device: "desktop",
  Region: "North",
  Category: ["Furniture", "Technology"],
  onFirstInteractive: function () {
    console.log("The viz is ready");
    document.getElementById("showViz").disabled = false;
    document.getElementById("hideViz").disabled = false;
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

//on click of the hide viz button hide the dashboard.
const hideVizButton = document.getElementById("hideViz");
hideVizButton.addEventListener("click", function () {
  viz.hide();
  //Show the show button
  document.getElementById("showViz").style.display = "inline";
  document.getElementById("hideViz").style.display = "none";
});

//on click of the show viz button show the dashboard.
const showVizButton = document.getElementById("showViz");
showVizButton.addEventListener("click", function () {
  viz.show();
  document.getElementById("showViz").style.display = "none";
  document.getElementById("hideViz").style.display = "inline";
});

const exportToPDF = document.getElementById("exportToPDF");
exportToPDF.addEventListener("click", function () {
  viz.showExportPDFDialog();
});

const exportToCrossTab = document.getElementById("exportToCrossTab");
exportToCrossTab.addEventListener("click", function () {
  viz.showExportCrossTabDialog();
});

const exportToPowerPoint = document.getElementById("exportToPowerPoint");
exportToPowerPoint.addEventListener("click", function () {
  viz.showExportPowerPointDialog();
});

const exportToExcel = document.getElementById("exportToExcel");
exportToExcel.addEventListener("click", function () {
  viz.showExportCrossTabToExcel();
});

document.addEventListener("DOMContentLoaded", initViz);
