$(document).ready(function () {
    $('#projectTabs a').on('shown.bs.tab', function (event) {
      console.log("Selected tab:", $(event.target).text());
    });
  });
  