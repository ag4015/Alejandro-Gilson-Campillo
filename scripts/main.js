function gotoHome(){
  document.getElementById("title").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoAbout(){
  document.getElementById("aboutAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoProjects(){
  document.getElementById("projectsAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoTimeline(){
  document.getElementById("timelineAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoContact(){
  document.getElementById("contactAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoEEBug(){
  document.getElementById("eebugAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoGlove(){
  document.getElementById("gloveAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoDenoiser(){
  document.getElementById("denoiserAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoCTS(){
  document.getElementById("ctsAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoWine(){
  document.getElementById("wineAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function gotoEMC(){
  document.getElementById("emcAnchor").scrollIntoView({behavior: "smooth", inline: "start"});
}
function downloadURI() {
  var uri = "content/CV Alejandro Gilson (14).pdf";
  var name = "CV Alejandro Gilson.pdf"
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
