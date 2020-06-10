const canvas = d3.select(".canvas")

const svg = canvas.append('svg')
    .attr('height',600)
    .attr('width',600)


//Create group inside svg container and perform transformation to whole group, performing x axis translation
const group =  svg.append('g')
    .attr('transform','translate(0,100)')

//append shapes inside group
group.append('rect')
    .attr('width',200)
    .attr('height',100)
    .attr('fill','orange')
    .attr('x',20)
    .attr('y',20)

group.append('circle')
    .attr('cx',300)
    .attr('cy',60)
    .attr('r',50)
    .attr('fill','pink')

group.append('line')
    .attr('x1', 370)
    .attr('y1',10)
    .attr('x2',450)
    .attr('y2',100)
    .attr('stroke','green')
    .attr('stroke-width','2')

svg.append('text')
    .attr('x',20)
    .attr('y',150)      
    .attr('fill','grey')
    .text('Hello')       
    .style('font-family','arial')