var em1 = "tatu.haut";
var em2 = em1 + "ala@cyb";
var sotku = "ilb";
var em = em2 + "ercom.com";

var puh_loppu = "6895";
var puh = "+358 50 384 " + puh_loppu;

$('#contactForm').attr("action", "//formspree.io/" + em);

$('div#myyntitykki > div.puhh > button').click(function()
{
  $('div#myyntitykki div.puhh').html('<A href="callto:' + puh + '">' + puh + '</A></DIV>');
  return false;
});

$('div#myyntitykki > div.imail > button').click(function() {$('div#myyntitykki div.imail').html('<A href="mailto:' + em + '">' + em + '</A>');return false;});

$('input#gotcha').hide();
$('section#contact').show();
