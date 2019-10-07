let dataset = [11, 22, 143, 15, 132, 5, 21, 43, 123, 32];

// let svgWidth = window.innerWidth,
let svgWidth = 765,
  svgHeight = 300,
  barPadding = 5;

let barWidth = svgWidth / dataset.length;

let svg = d3
  .select(".linear-regression")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

let xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth]);

let yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgHeight - 16]);

let x_axis = d3.axisBottom().scale(xScale);
let y_axis = d3.axisLeft().scale(yScale);

svg
  .append("g")
  .attr("transform", "translate(50, 10)")
  .call(y_axis);

let xAxisTranslate = svgHeight - 20;
svg
  .append("g")
  .attr("transform", `translate(50, '${xAxisTranslate}')`)
  .call(x_axis);

let barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  //   .attr("y", d => svgHeight - d)
  .attr("height", d => yScale(d))
  .attr("width", barWidth - barPadding)
  .attr(
    "transform",
    (d, i) => `translate(${[barWidth * i, svgHeight - yScale(d)]})`
  );

let text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(d => d)
  .attr("y", (d, i) => svgHeight - yScale(d) - 2)
  .attr("x", (d, i) => barWidth * i + 12)
  .attr("fill", "blue");
