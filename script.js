//document ready function to handle button click event
$(document).ready(function() {
  console.log("start!");
  $("#search-btn").click(getInfo);
});

//function that imports xml, uses user keyword to find zipcode stats, and appends them to the HTML
function getInfo() {
  $("#results").empty();
  $.ajax({
    url: 'nyc_zipcodestats.xml',
    dataType: 'xml',
    success: function(xml) {
      $(xml).find('row').each(function() {
        var zip = $(this).find('jurisdiction_name').text();
        var participants = $(this).find('count_participants').text();
        var percentMale = ($(this).find('percent_male').text() * 100).toFixed(0);
        var percentFemale = ($(this).find('percent_female').text() * 100).toFixed(0);
        var percentPacificIs = ($(this).find('percent_pacific_islander').text() * 100).toFixed(0);
        var percentHispanicLatino = ($(this).find('percent_hispanic_latino').text() * 100).toFixed(0);
        var percentAmerIndian = ($(this).find('percent_american_indian').text() * 100).toFixed(0);
        var percentAsian = ($(this).find('percent_asian_non_hispanic').text() * 100).toFixed(0);
        var percentWhite = ($(this).find('percent_white_non_hispanic').text() * 100).toFixed(0);
        var percentBlack = ($(this).find('percent_black_non_hispanic').text() * 100).toFixed(0);
        var percentOther = ($(this).find('percent_other_ethnicity').text() * 100).toFixed(0);

        var percentUSCitizen = ($(this).find('percent_us_citizen').text() * 100).toFixed(0);
        var percentPermanentResident = ($(this).find('percent_permanent_resident_alien').text() * 100).toFixed(0);
        var percentRecievesPublicAssistance = ($(this).find('percent_receives_public_assistance').text() * 100).toFixed(0);

        if ($('#search').val() == zip) {
          $("#results").append("<p><span class='datazip'> " + zip + "</span><br>");
          $("#results").append("<span class='data'>" + participants + "</span> people were surveyed<br><br>");
          $("#results").append("<span class='data'>" + percentMale + "%</span> of the population is male<br>");
          $("#results").append("<span class='data'>" + percentFemale + "%</span> of the population is female<br><br>");
          $("#results").append("<span class='data'>" + percentAsian + "%</span> identified as Asian<br>");
          $("#results").append("<span class='data'>" + percentPacificIs + "%</span> identified as Pacitic Islander<br>");
          $("#results").append("<span class='data'>" + percentHispanicLatino + "%</span> identified as Hispanic/Latinx<br>");
          $("#results").append("<span class='data'>" + percentAmerIndian + "%</span> identified as Native American<br>");
          $("#results").append("<span class='data'>" + percentWhite + "%</span> of the population identified as White<br>");
          $("#results").append("<span class='data'>" + percentBlack + "%</span> of the population identified as Black<br>");
          $("#results").append("<span class='data'>" + percentOther + "%</span> of the population identified as Other<br><br>");
          $("#results").append("<span class='data'>" + percentUSCitizen + "%</span> of the population were US Citizens<br>");
          $("#results").append("<span class='data'>" + percentPermanentResident + "%</span> of the population were permanent residents<br><br>");
          $("#results").append("<span class='data'>" + percentRecievesPublicAssistance + "%</span> of the population recieves federal and state aid<br>");
        }

      })
    },
    error: function(xml) {
      console.log('Error loading XML data');
    }
  })
};
