//returns a d3 wrapper of the selected element
const canvas = d3.select(".canvas")
//d3 functions available to us like append

//Method chaining and adding attributes to elements and shapes
//append method returns actual svg element
const svg = canvas.append('svg')
    .attr('height',600)
    .attr('width',600)

console.log('svg')

//can append other elements besides svg
//canvas.append('div')

//append shapes to svg 
svg.append('rect')
    .attr('width',200)
    .attr('height',100)
    .attr('fill','orange')
    .attr('x',20)
    .attr('y',20)

svg.append('circle')
    .attr('cx',300)
    .attr('cy',60)
    .attr('r',50)
    .attr('fill','pink')

svg.append('line')
    .attr('x1', 370)
    .attr('y1',10)
    .attr('x2',450)
    .attr('y2',100)
    .attr('stroke','green')
    .attr('stroke-width','2')


//Text SVG - useful when want to add labels to graph/axes
svg.append('text')
    .attr('x',20)
    .attr('y',150)      
    .attr('fill','grey')
    .text('Hello')       
    .style('font-family','arial')