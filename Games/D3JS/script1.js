d3.select("h1")
  .style("color", "darkblue")
  .attr("class", "heading1")
  .text("The new heading");

d3.select("body")
  .append("p")
  .text("This p was added using d3");

d3.select("body")
  .append("p")
  .text("This p was added using d3");
d3.select("body")
  .append("p")
  .text("This p was added using d3");

d3.selectAll("p").style("color", "gray");