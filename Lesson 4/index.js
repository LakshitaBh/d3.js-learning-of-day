//always get a reference to svg 
const svg = d3.select("svg")

//d3 expects data in form of array
//each element in this array represents one object like one bar of bar graph
//here we have one rect so one object inside array
const data_rect = [
    {width: 200, height: 100, fill: 'purple'}
]

//select rectangle in the scope of this svg
//join data
//d is data param to function, it picks data we passed to element with data function
const rect = svg.select('rect')
    .data(data_rect)
    .attr('height', function(d){ 
        return d.height 
    })
    .attr('width', function(d){ 
        return d.width 
    })
    .attr('fill', (d) => {      //using arrow function, only difference is with this keyword which is fixed by having d,i,n params to arrow func. Used like n[i] to get ith object in n array of objects selected by svg.select
        return d.fill 
    })         

console.log(rect)

