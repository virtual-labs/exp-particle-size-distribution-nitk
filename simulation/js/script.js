var tryData = [[18.98,85,32.2, 1.017],
[18.98,0.995],
[17.48,1],
[15.98, 1.005],
[14.48, 1.01],
[12.98, 1.015],
[11.63, 1.02],
[10.23, 1.025],
[8.98,1.03],
[7.58, 1.035]
];

var sample=[[0.001, 2.57, 0.008, 1.017, 0.0879, 55.59, 27.8 ]]

// var graphData = [{
// 	y: [x],
//   x: [0,1.00,1.01,1.02,1.03], 
// 	type:"line",
// 	'line': {'shape': 'spline', 'smoothing': 1.3},

//     mode:'line'+'markers',
//     enableAnimation: true
// }]

// let layout = {
// 	title:'He V/S Rh',
//     xaxis: {
// 		title:'Rh',
// 		range: [0,1.03],
//     	fixedrange: false
// 		},
//   yaxis: {
// 	range: [ 0,20],
//     title:'Stress, ꞇ (kg/cm<sup>2</sup>)',
//     fixedrange: false
//   },
//   width: 780,
//   height: 490,
  
//   line: {shape: 'vh',
//  		// type: 'lines',
// 		// path: 'M 0 0,1.2 Q 1,3 2,0.3',
// 		// line: {
// 		//   color: 'rgb(207, 114, 255)'
// 		// }
// }
// };
// let layout2a= layout2a.shapes({
//   type: 'line3',
//   path: 'M 0 0,0.5,1 Q 1.2,4 4,0.3',
//   line: {
//     color: 'rgb(207, 114, 255)'
//   }})

// var Data1 = {
//   type: 'scatter',
//   x: [0.0013,0.0061,0.0086,0.0199,0.0167,0.0233,0.0321,0.0446,0.0627,0.0879],
//   y: [6.54,21.26,26.16,31.07,34.34,42.51,47.42,52.32,53.96,55.59],
//   mode: 'markers',
//   name: 'Data',
//   showlegend: true,
//   hoverinfo: 'all',
//   line: {
//     color: 'blue',
//     width: 2
//   },
//   marker: {
//     color: 'blue',
//     size: 8,
//     symbol: 'circle'
//   },
 

// }
// let layout2a;

// function createPathSample(){
// 	layout2a.shapes({
// 			type: 'line3',
// 			path: 'M 0 0,0.5,1 Q 1.2,4 4,0.3',
// 			line: {
// 			  color: 'rgb(207, 114, 255)'
// 			}});
// 			Plotly.newPlot('mydiv', Data1, layout2a);
// }

// // var Viol = {
// //   type: 'scatter',
// //   x: [6,9],
// //   y: [-7,8],
// //   mode: 'markers',
// //   name: 'Violation',
// //   showlegend: true,
// //   marker: {
// //     color: 'rgb(255,65,54)',
// //     line: {width: 3},
// //     opacity: 0.5,
// //     size: 12,
// //     symbol: 'circle-open'
// //   }
// // }

// // var CL = {
// //   type: 'scatter',
// //   x: [0,0.0061,null,0,0.0061,],
// //   y: [0.0013, null,3.27, 10.63,],
// //   mode: 'lines',
// //   name: 'LCL/UCL',
// //   showlegend: true,
// //   line: {
// //     color: 'red',
// //     width: 2,
// //     dash: 'dash'
// //   }
// // }

// // var Centre = {
// //   type: 'scatter',
// //   x: [0.5, 10],
// //   y: [0, 0],
// //   mode: 'lines',
// //   name: 'Centre',
// //   showlegend: true,
// //   line: {
// //     color: 'grey',
// //     width: 2
// //   }
// // }

// var data1 = [Data1]


// var layout1 = {
//   title: "D vs N'",
//   xaxis: {
//     zeroline: true,
//     title: "D",
//     range: [0, 0.01, 1, 10, 100, 1000],
//     fixedrange: true,
//     logarithmic: true 
//   },
//   yaxis: {
//     range: [5,60],
//     title:"N'",
//     zeroline: true,
//     fixedrange: true
//   },
//   width: 690,
//   height: 450,
  

// }

// function plotUsingPlotly1(){
//   Plotly.newPlot('myDiv', data1,layout1, options);
// }










function generate_table(){
	for(let i=0; i <=value.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow(rows,value[i])
		},interval*increment);
		increment = increment+1;
	}
}
function eachRow(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}

function generate_table1(){
	for(let i=0; i <=value5.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow1(rows,value5[i])
		},interval*increment);
		increment = increment+1;
	}
}
function eachRow1(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}

function generate_table2(){
	for(let i=0; i <=value6.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow1(rows,value6[i])
		},interval*increment);
		increment = increment+1;
	}
}
function eachRow1(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}
function generate_table3(){
	for(let i=0; i <=value7.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow1(rows,value7[i])
		},interval*increment);
		increment = increment+1;
	}
}
function eachRow1(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}

function generate_table4(){
	for(let i=0; i <=value8.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow3(rows,value8[i])
		},8000);
		increment = increment+1;
	}
}
function eachRow3(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}

function generate_table5(){
	for(let i=0; i <=value9.length; i++){
		var runner = setTimeout(function(){
			let rows = tableData.insertRow(-1);
			clearTimeout(runner);
			eachRow2(rows,value9[i])
		},3000);
		increment = increment+1;
	}
}
function eachRow2(rows,row){
	for(let i=0;i<2; i++){
		rows.insertCell(i).innerHTML = row[i]
}}


// let i=(parseInt((Math.random()*(3-0)),10));
// 				console.log(i);
				// console.log(x[i]);


const characters ='a';
   let interval = 1000;
   let increment = 0;
  //  let values = i == 0? value: 
  //  console.log(i, values)

   var value = [[0.25,1.016],[0.5,1.0155],[1, 1.015],[2,1.0135],[4,1.012]
			];
    var value5 = [[8,1.0095]
    ];
    var value6 = [[16, 1.0085]];
    var value7 = [[32, 1.007]];
    var value8 = [[64,1.0055]];
    var value9 = [["24x60", 1.001]];


   var value1 = [[3,0.5,1.0400,0.0066,11.4151,0.0911],
			  [7,1,2.4300,0.0132,11.4912,0.2115],
			  [10,1.5,3.4900,0.0197,11.5683,0.3017],
			  [15,2,5.2200,0.0263,11.6465,0.4482],
			  [17,2.5,5.9100,0.0329,11.7257,0.5040],
			  [29,3,10.0400,0.0395,11.8060,0.8504],
			  [38,3.5,13.2200,0.0461,11.8874,1.1121]];


// var value2 = [[12,0.5,4.1700,0.0066,11.4151,0.3653],
// 			  [15,1,5.2200,0.0132,11.4912,0.4543],
// 			  [30,1.5,10.4400,0.0197,11.5683,0.9025],
// 			  [40,2,13.9100,0.0263,11.6465,1.1944],
// 			  [55,2.5,19.1300,0.0329,11.7257,1.6315],
// 			  [60,3,20.8000,0.0395,11.8060,1.7618]];

var data = [{
  y: [18.98,17.48,
    15.98,
    14.48,
    12.98,
    11.63,
    10.23,
    8.98,
    7.58], 
  x: [0.995,
    1,
    1.005,
    1.01,
    1.015,
    1.02,
    1.025,
    1.03,
    1.035], 
  type: 'line',
  mode:'lines+markers',
  enableAnimation: true
}];

let layout = {
  title:'Effective height, He Vs Hydrometer reading, Rh',
  showlegend: false,
  xaxis: {
  title:'Hydrometer reading, Rh (cm)',
  range: [1.03],
  fixedrange: true,
  zeroline: false,
},
yaxis: {
  title:'Effective height, He (cm)',
  range: [0,20],
  fixedrange: true,
  zeroline: true
}
};                        

let options = {
  scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
  isResponsive:true,
  animationEnabled:true,
};

function plotUsingPlotly(){
  Plotly.newPlot('graph1', data, layout,options);
}

var counter1=0;
var counter2=0;


//graph2

var data2 = [{
  y: [18.98,17.48,
    15.98,
    14.48,
    12.98,
    11.63,
    10.23,
    8.98,
    7.58], 
  x: [0.995,
    1,
    1.005,
    1.01,
    1.015,
    1.02,
    1.025,
    1.03,
    1.035], 
  type: 'line',
  mode:'lines+markers',
  enableAnimation: true,
},
{
  type: 'scatter',
  x: [0, 1.002,1.002],
  y: [16.8, 16.8,0],
  mode: 'lines',
  name: 'LCL/UCL',
  showlegend: true,
  line: {
    color: 'red',
    width: 2,
    dash: 'dash'
  }
}
];
var CL2 = {
  type: 'scatter',
  x: [0,null,  1.002],
  y: [16.8,null, 16.8],
  mode: 'lines',
  name: 'LCL/UCL',
  showlegend: true,
  line: {
    color: 'red',
    width: 2,
    dash: 'dash'
  }
}

let layout2 = {
  title:'Effective height, He Vs Hydrometer reading, Rh',
  showlegend: false,
  xaxis: {
  title:'Hydrometer reading, Rh (cm)',
  range: [0.995,1.035],
  fixedrange: true,
  
},
yaxis: {
  title:'Effective height, He (cm)',
  range: [0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  fixedrange: true
}
};                        

let options2 = {
  scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
  isResponsive:true,
  animationEnabled:true,
};

let data4 = [data2,CL2]

function plotUsingPlotly3(){
  Plotly.newPlot('graph3', data2, layout2, options);
}












function navNext() {
    for (temp = 0; temp <= 19; temp++) {
      document.getElementById("canvas" + temp).style.visibility = "hidden";
    }
    simsubscreennum += 1;
    document.getElementById("canvas" + simsubscreennum).style.visibility =
      "visible";
    document.getElementById("nextButton").style.visibility = "hidden";
    magic();
}
  
  
function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}


function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}
function magic() {
  if (simsubscreennum == 1) {
    // document.getElementById("grad4").style.visibility="visible"; 
    document.getElementById("grad1").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:617px; top:133px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("1-1-1").style.visibility="visible"; 
    // document.getElementById("1-1-2").style.visibility="visible"; 
    document.getElementById("1-1-3").style.visibility="visible"; 
    document.getElementById("1-1-3").onclick = function () {
    myStopFunction();
    document.getElementById("1-1-3").style.transformOrigin = "80% 90%";
    document.getElementById("1-1-3").style.animation = "movehy 3s forwards";
  
    setTimeout(function(){
      document.getElementById("grad4").style.visibility="visible";
      document.getElementById("grad4").style.animation = "movehy1 1s forwards";
      setTimeout(function(){
        document.getElementById("1-1-3").style.visibility="hidden";
        document.getElementById("1-1-4").style.visibility="visible";
        document.getElementById("grad2").style.visibility="visible"; 
      document.getElementById("grad2").style.animation =
            "moveWater 1s forwards";
            setTimeout(function(){
              document.getElementById("1-1-4").style.visibility="hidden";
              document.getElementById("grad4").style.visibility="hidden";

            document.getElementById("nextButton").style.visibility="visible";
            },2000);
      },500);
      

    },3000);

    }


    // document.getElementById("1-1-1").style.visibility="visible";
    // document.getElementById("grad3").style.visibility="visible";  
    // document.getElementById("grad2").style.animation =
    //         "moveWater 1s forwards";
    // document.getElementById("grad2").style.visibility="visible";        
  } else if(simsubscreennum==2)
	{
    document.getElementById("grad1").style.visibility="hidden"; 
    document.getElementById("grad3a").style.visibility="visible"; 
    document.getElementById("2-1-3").style.visibility="hidden";
    document.getElementById("1-1-1").style.visibility="hidden";
    document.getElementById("grad2").style.visibility="hidden"; 
    document.getElementById("1-1-1a").style.visibility="visible";
    document.getElementById("1-1-3").style.visibility="hidden";
    document.getElementById("2-1-1").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:576px; top:338px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.transform = "rotate(0deg)";
    document.getElementById("2-1-1").onclick = function () {
      myStopFunction();
      // document.getElementById("2-1-2").style.visibility="visible";
      // document.getElementById("2-1-1").style.visibility="hidden";
      document.getElementById("2-1-1").style.animation =
            "moveHand 3s forwards";
            setTimeout(function(){
              document.getElementById("2-1-1").style.visibility="hidden";
              document.getElementById("2-1-1a").style.visibility="visible";
              document.getElementById("2-1-1a").style.animation =
            "moveHydro2 3s forwards";
              document.getElementById("grad3a").style.animation =
            "moveWater1 1s forwards";
            setTimeout(function(){
            document.getElementById("iv1").style.visibility="visible";
            document.getElementById("form1").style.visibility="visible";
            document.getElementById("d2").style.visibility="visible";
            document.getElementById("a11").style.visibility="visible";
          },3000); 
                    
        
            },3000);


    }
  }
  else if(simsubscreennum==3){
    document.getElementById("d2").style.visibility="hidden";
    document.getElementById("a11").style.visibility="hidden";


    document.getElementById("iv1").style.visibility="hidden";
    document.getElementById("1-1-1a").style.visibility="hidden";
    document.getElementById("grad3a").style.visibility="hidden"; 
    document.getElementById("2-1-1a").style.visibility="hidden";
    document.getElementById("2-1-2").style.visibility="hidden";
    document.getElementById("3-1-1").style.visibility="visible";
    document.getElementById("3-1-2").style.visibility="visible";
    document.getElementById("1-1-1").style.visibility="visible";
    document.getElementById("grad3").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:576px; top:338px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("3-1-1").onclick = function () {
      myStopFunction();

      document.getElementById("3-1-1").style.animation =
            "moveScale 2s forwards";
            document.getElementById("3-1-2").style.animation =
            "moveScale1 2s forwards";
            setTimeout(function(){
              document.getElementById("a1").style.visibility="visible";
              document.getElementById("d1").style.visibility="visible";
              document.getElementById("iv2").style.visibility="visible";
            document.getElementById("form2").style.visibility="visible";
            // document.getElementById("nextButton").style.visibility="visible";
              
              
              
                    
        
            },2000);

    }

  }
  else if(simsubscreennum==4){
    document.getElementById("a1").style.visibility="hidden";
    document.getElementById("d1").style.visibility="hidden";
    document.getElementById("iv2").style.visibility="hidden";
            document.getElementById("form2").style.visibility="hidden";
    document.getElementById("3-1-1").style.visibility="hidden";
    document.getElementById("3-1-2").style.visibility="hidden";
    document.getElementById("1-1-1").style.visibility="hidden";
    document.getElementById("grad3").style.visibility="hidden";
    document.getElementById("4-1-1").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:90px; top:327px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById("4-1-2").onclick = function () {
      myStopFunction();
      document.getElementById("4-1-3").style.visibility="visible";
      document.getElementById("4-1-3").style.animation =
            "moveHydro 2s forwards";
      document.getElementById("4-1-2").style.animation =
            "moveHydro1 2s forwards";
            setTimeout(function(){
              document.getElementById("4-1-2").style.visibility="hidden";
              document.getElementById("4-1-3").style.visibility="hidden";
              document.getElementById("4-1-4").style.visibility="visible";
              document.getElementById("4-1-1").style.visibility="hidden";
              document.getElementById("4-1-5").style.visibility="visible";
              myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:525px; top:233px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.transform = "rotate(0deg)";
              document.getElementById("4-1-5").onclick = function () {
                myStopFunction();
                document.getElementById("4-1-5").style.animation =
            "tracing 6s forwards";
            setTimeout(function(){
              document.getElementById("4-1-5").style.visibility="hidden";
              document.getElementById("nextButton").style.visibility="visible";
            }, 6000);
              }
              
  
            },2500);


    }


  }
  else if(simsubscreennum==5){
    // document.getElementById("5-1-1").style.visibility="visible";
    document.getElementById("4-1-1a").style.visibility="visible";
    document.getElementById("4-1-2a").style.visibility="visible";
    document.getElementById("3-1-1a").style.visibility="visible";
    document.getElementById("4-1-5").style.visibility="hidden";
    document.getElementById("4-1-4").style.visibility="hidden";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:144px; top:233px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById("3-1-1a").onclick = function () {
      myStopFunction();
      document.getElementById("3-1-1a").style.animation =
            "moveScale2 2s forwards";
            setTimeout(function(){
              document.getElementById("4-1-1a").style.visibility="hidden";
              document.getElementById("4-1-2a").style.visibility="hidden";
              document.getElementById("3-1-1a").style.visibility="hidden";
              document.getElementById("5-1-1").style.visibility="visible";
              document.getElementById("d3").style.visibility="visible";
              document.getElementById("nextButton").style.visibility="visible";
            }, 2000);
    }

  }else if(simsubscreennum==6){
    document.getElementById("d3").style.visibility="hidden";
    document.getElementById("5-1-1").style.visibility="hidden";
    document.getElementById("3-1-11a").style.visibility="visible";
    document.getElementById("4-1-1a").style.visibility="visible";
    document.getElementById("4-1-2a").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:144px; top:233px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById("3-1-11a").onclick = function () {
      myStopFunction();
      document.getElementById("3-1-11a").style.animation =
            "moveScale22 2s forwards";
            setTimeout(function(){
              document.getElementById("4-1-1a").style.visibility="hidden";
              document.getElementById("4-1-2a").style.visibility="hidden";
              document.getElementById("3-1-11a").style.visibility="hidden";
              document.getElementById("6-1-1").style.visibility="visible";
              // document.getElementById("d3").style.visibility="visible";
              // document.getElementById("nextButton").style.visibility="visible";
              document.getElementById("d3").style.visibility="hidden";
              document.getElementById("5-1-1").style.visibility="hidden";
              // document.getElementById("6-1-1").style.visibility="visible";
              document.getElementById("d4").style.visibility="visible";
              document.getElementById("nextButton").style.visibility="visible";
            }, 2000);
    }
    // document.getElementById("d3").style.visibility="hidden";
    // document.getElementById("5-1-1").style.visibility="hidden";
    // document.getElementById("6-1-1").style.visibility="visible";
    // document.getElementById("d4").style.visibility="visible";
    // document.getElementById("nextButton").style.visibility="visible";
  }else if(simsubscreennum==7){
    document.getElementById("6-1-1").style.visibility="hidden";
    document.getElementById("d4").style.visibility="hidden";
   
				
						document.getElementById("form").style.visibility="visible";
						document.getElementById("iv").style.visibility="visible";
            document.getElementById("d5").style.visibility="visible";
            setTimeout(function(){
              // document.getElementById("subData1").style.visibility="visible";
              // document.getElementById("").style.visibility="visible";

            },500)
          
            // document.getElementById("nextButton").style.visibility="visible";
			
					
  }else if(simsubscreennum==8){
    document.getElementById("subData1").style.visibility="hidden";
    document.getElementById("d5").style.visibility="hidden";
    document.getElementById("d10").style.visibility="hidden";
    document.getElementById("iv").style.visibility="hidden";
    plotUsingPlotly();
    document.getElementById("nextButton").style.visibility="visible";
  }
  else if(simsubscreennum==9){
    document.getElementById("subData2").style.visibility="hidden";
    document.getElementById("graph1").style.visibility="hidden";

    document.getElementById('p12-1').style.visibility = "visible";
    document.getElementById('p12-1').style.transformOrigin="45% 80%";
		document.getElementById('p12-1').style.animation="fadeIn 3.5s forwards";
    setTimeout(function(){
      document.getElementById("incanvas4").style.visibility="visible";
      document.getElementById("circlebg4").style.visibility="visible"; 
      document.getElementById("steptext4").style.visibility="visible";
    document.getElementById("9-1-2").style.visibility="visible";
    document.getElementById("9-1-3").style.visibility="visible";
    document.getElementById("9-1-5").style.visibility="visible";

    document.getElementById("grad6").style.visibility="visible";
    document.getElementById("9-1-2").style.animation= "sandDrop 3s forwards";
    document.getElementById("9-1-3").style.animation= "moveSeive 3s forwards";
    setTimeout(function(){
      document.getElementById("9-1-1").style.visibility="visible";
      document.getElementById("9-1-2").style.visibility="hidden";
      document.getElementById("9-1-3").style.visibility="hidden";
      document.getElementById("9-1-5").style.visibility="hidden";
      myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:360px; top:408px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.transform = "rotate(270deg)";
              document.getElementById("9-1-1").onclick = function () {
                myStopFunction();
                document.getElementById("grad6").style.visibility="hidden";
                document.getElementById("9-1-1").style.animation =
            "movePlate 1s forwards";
            setTimeout(function(){
              document.getElementById("9-1-6").style.visibility="visible";
            myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:139px; top:360px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.transform = "rotate(270deg)";
              document.getElementById("9-1-1").onclick = function () {
                myStopFunction();
                document.getElementById("9-1-1").style.animation =
            "movePlate1 1s forwards";
            setTimeout(function(){
              document.getElementById("gram").style.visibility="visible";
              document.getElementById("nextButton").style.visibility="visible";

            },1000);


              };

            },1000);

            
            


              }





    }, 3000);
  },3500);


  }else if(simsubscreennum==10){
    document.getElementById("incanvas4").style.visibility="hidden";
    document.getElementById("circlebg4").style.visibility="hidden"; 
    document.getElementById("steptext4").style.visibility="hidden";
    document.getElementById("9-1-1").style.visibility="hidden";
    document.getElementById("9-1-6").style.visibility="hidden";
    document.getElementById("gram").style.visibility="hidden";
    document.getElementById("10-1-1").style.visibility="visible";
    document.getElementById("grad7").style.visibility="visible";
    document.getElementById("10-1-2").style.visibility="visible";
    myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:551px; top:384px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
              document.getElementById("arrow1").style.transform = "rotate(270deg)";
              document.getElementById("10-1-2").onclick = function () {
                myStopFunction();
                document.getElementById("10-1-2").style.animation =
            "moveDrops 2s forwards";
            setTimeout(function(){
              document.getElementById("10-1-3").style.visibility="visible";
              document.getElementById("10-1-3").style.animation =
            "moveDrops1 2s forwards";
            setTimeout(function(){
              document.getElementById("10-1-3").style.visibility="hidden";
              document.getElementById("10-1-3a").style.visibility="visible";
              document.getElementById("10-1-3a").style.animation =
            "moveDrops1 2s forwards";
            setTimeout(function(){
              document.getElementById("10-1-3a").style.visibility="hidden";
              document.getElementById("10-1-3b").style.visibility="visible";
              document.getElementById("10-1-3b").style.animation =
            "moveDrops1 2s forwards";
            setTimeout(function(){
              document.getElementById("10-1-3b").style.visibility="hidden";
              document.getElementById("10-1-2").style.visibility="hidden";
              document.getElementById("10-1-1").style.animation =
            "leftMove 2s forwards";
            document.getElementById("grad7").style.animation =
            "leftMove1 2s forwards";
            setTimeout(function(){
              document.getElementById("10-1-4").style.visibility="visible";
              myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:204px; top:318px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.transform = "rotate(0deg)";
              document.getElementById("10-1-1").onclick = function () {
                myStopFunction();
                document.getElementById("10-1-1").style.animation =
            "rotateCylinder 2s forwards";
            document.getElementById("grad7").style.animation =
            "rotateCylinder1 2s forwards";
            setTimeout(function(){
            document.getElementById("grad2c").style.visibility="visible";
            document.getElementById("grad2d").style.visibility="visible";
            document.getElementById("grad2c").style.animation =
            "waterFall 1s forwards";
            document.getElementById("grad2d").style.animation =
            "waterFall2 1s forwards";
            setTimeout(function(){
              document.getElementById("10-1-1").style.visibility="hidden";
              document.getElementById("grad7").style.visibility="hidden";
              document.getElementById("grad2d").style.visibility="hidden";
              document.getElementById("grad2c").style.visibility="hidden";
            document.getElementById("10-1-4").style.visibility="hidden";
            document.getElementById("10-1-5").style.visibility="visible";
            document.getElementById("10-1-7").style.visibility="visible";
            myInt = setInterval(function () {animatearrow();}, 500);
              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:204px; top:318px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
              document.getElementById("arrow1").style.transform = "rotate(0deg)";
              document.getElementById("10-1-7").onclick = function () {
                myStopFunction();
                document.getElementById("10-1-7").style.animation =
            "moveTrowel 4s forwards";
            setTimeout(function(){
              document.getElementById("10-1-5").style.animation =
            "disPlate 1s forwards";
            document.getElementById("10-1-4").style.animation =
            "disPlate1 1s forwards";
            document.getElementById("10-1-4").style.visibility="visible";
            document.getElementById("10-1-7").style.visibility="hidden";
            document.getElementById("nextButton").style.visibility="visible";






            },3000);
              }
            // document.getElementById("nextButton").style.visibility="visible";
            },500);

            },1800);



              }



            },2000);
          


            },2000);

            },2000);

            },2000);




            },2000);




              }



  }else if(simsubscreennum==11){
    document.getElementById("grad2c").style.visibility="hidden";
    document.getElementById("10-1-5").style.visibility="hidden";
            document.getElementById("grad2d").style.visibility="hidden";
            document.getElementById("10-1-1").style.visibility="hidden";
            document.getElementById("grad7").style.visibility="hidden";
            document.getElementById("10-1-4").style.visibility="hidden";
            document.getElementById("11-1-1").style.visibility="visible";
            document.getElementById("11-1-2").style.visibility="visible";
            myInt = setInterval(function () {animatearrow();}, 500);
            document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:258px; top:410px; height:40px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            document.getElementById("arrow1").style.transform = "rotate(270deg)";
            document.getElementById("11-1-2").onclick = function () {
              myStopFunction();
              
              document.getElementById("11-1-2").style.visibility="hidden";
              document.getElementById("11-1-3").style.visibility="visible";
              

              document.getElementById("11-1-3").style.animation =
            "liftPlate 2s forwards";
            setTimeout(function(){
              document.getElementById("11-1-1").style.visibility="hidden";
              document.getElementById("11-1-3").style.visibility="hidden";
              document.getElementById("11-1-4").style.visibility="visible";
              document.getElementById("11-1-5").style.visibility="visible";
              document.getElementById("11-1-6").style.visibility="visible";
              myInt = setInterval(function () {animatearrow();}, 500);
            document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:630px; top:282px; height:40px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            document.getElementById("arrow1").style.transform = "rotate(270deg)";
            document.getElementById("11-1-6").onclick = function () {
              myStopFunction();
              

              document.getElementById("11-1-5").style.animation =
            "moveRod 5s forwards";
            setTimeout(function(){
              document.getElementById("nextButton").style.visibility="visible";
            },5000);
            
           
            }
              
            },3000);



            }

  }else if(simsubscreennum==12){
    document.getElementById("grad1").style.visibility="visible";
    document.getElementById("11-1-4").style.visibility="hidden";
              document.getElementById("11-1-5").style.visibility="hidden";
              document.getElementById("11-1-6").style.visibility="hidden";
              document.getElementById("12-1-1").style.visibility="visible";
              document.getElementById("12-1-2").style.visibility="visible";
              myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:573px; top:194px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById("12-1-2").onclick = function () {
      myStopFunction();
      document.getElementById("12-1-2").style.transformOrigin = "80% 90%";
      document.getElementById("12-1-2").style.animation = "movehyb 3s forwards";
    
      setTimeout(function(){
        document.getElementById("grad41").style.visibility="visible";
        document.getElementById("grad41").style.animation = "movehyb1 1s forwards";
        setTimeout(function(){
          document.getElementById("12-1-2").style.visibility="hidden";
          document.getElementById("12-1-3").style.visibility="visible";
          document.getElementById("grad21").style.visibility="visible"; 
        document.getElementById("grad21").style.animation =
              "moveWater 1s forwards";
              setTimeout(function(){
                document.getElementById("12-1-3").style.visibility="hidden";
                document.getElementById("grad41").style.visibility="hidden";
                myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:617px; top:133px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("1-1-1").style.visibility="visible"; 
    // document.getElementById("1-1-2").style.visibility="visible"; 
    document.getElementById("1-1-3a").style.visibility="visible"; 
    document.getElementById("1-1-3a").onclick = function () {
    myStopFunction();
    document.getElementById("1-1-3a").style.transformOrigin = "80% 90%";
    document.getElementById("1-1-3a").style.animation = "movehy 3s forwards";
  
    setTimeout(function(){
      document.getElementById("grad4").style.visibility="visible";
      document.getElementById("grad4").style.animation = "movehy1 1s forwards";
      setTimeout(function(){
        document.getElementById("1-1-3a").style.visibility="hidden";
        document.getElementById("1-1-4").style.visibility="visible";
        document.getElementById("grad21").style.visibility="visible"; 
      document.getElementById("grad21").style.animation =
            "moveWatera 1s forwards";
            setTimeout(function(){
              document.getElementById("1-1-4").style.visibility="hidden";
              document.getElementById("grad4").style.visibility="hidden";

            document.getElementById("nextButton").style.visibility="visible";
            },2000);
      },500);
      

    },3000);

    }
                
  
              
              },2000);
        },500);
        
  
      },3000);
  
      }





  }else if(simsubscreennum==13){
    document.getElementById("grad21").style.visibility="hidden";
    document.getElementById("12-1-1").style.visibility="hidden";
    document.getElementById("1-1-1").style.visibility="hidden";

    document.getElementById('p13-1').style.visibility = "visible";
    document.getElementById('p13-1').style.transformOrigin="45% 80%";
		document.getElementById('p13-1').style.animation="fadeIn 3.5s forwards";
    setTimeout(function(){
      document.getElementById("incanvas1").style.visibility="visible";
      document.getElementById("circlebg1").style.visibility="visible"; 
      document.getElementById("steptext1").style.visibility="visible";
      document.getElementById("13-1-1a").style.visibility="visible";
      document.getElementById("13-1-2").style.visibility="visible";
    
    myInt = setInterval(function () {animatearrow();}, 500);
    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:415px; top:248px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("13-1-1a").onclick = function () {
      myStopFunction();
      document.getElementById("13-1-1a").style.visibility="hidden";
      document.getElementById("13-1-2").style.visibility="hidden";
      document.getElementById("13-1-1").style.visibility="visible";
      document.getElementById("13-1-1").style.animation="mix 4s forwards";
      document.getElementById("grad211").style.visibility="visible";
      document.getElementById("grad211").style.animation="mix1 4s forwards";
      setTimeout(function(){
        document.getElementById("grad211").style.visibility="hidden";
        document.getElementById("13-1-1").style.visibility="hidden";
        document.getElementById("13-1-1b").style.visibility="visible";
        document.getElementById("13-1-2").style.visibility="visible";
        document.getElementById("13-1-3").style.visibility="visible";
        myInt = setInterval(function () {animatearrow();}, 500);
        document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:571px; top:343px; height:40px; z-index:10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById("13-1-3").onclick = function () {
          myStopFunction();
          // document.getElementById("13-1-3").style.visibility="hidden";
          // document.getElementById("13-1-4").style.visibility="visible";
          document.getElementById("13-1-3").style.animation="moveHydrometerr 2s forwards";
          setTimeout(function(){
            document.getElementById("15-1-1").style.visibility="visible";

            document.getElementById("13-1-3").style.visibility="hidden";
            document.getElementById("13-1-3a").style.visibility="visible";
            document.getElementById("13-1-3a").style.animation="moveHydrometer11 3s forwards";
            document.getElementById("13-1-5").style.visibility="visible";
            document.getElementById("13-1-6").style.visibility="visible";
            document.getElementById("13-1-6").style.transformOrigin = "80% 90%";
            document.getElementById("13-1-6").style.animation="movePin 5s forwards";
            document.getElementById("data").style.visibility="visible";
             document.getElementById("obsData").style.visibility="visible";
               setTimeout(function(){
                // document.getElementById("obsData").onclick="";
                myInt = setInterval(function () {animatearrow();}, 500);
                    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:368px; top:343px; height:40px; z-index:10;";
                     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                     document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                     document.getElementById("arrow1").style.transform = "rotate(180deg)";
                     document.getElementById("13-1-3a").onclick = function () {
                        myStopFunction();
                           document.getElementById("13-1-3a").style.animation="moveHydrometer11a 4s forwards";
                         setTimeout(function(){
                                  // document.getElementById("13-1-3a").style.animation="moveHydrometer2 2s forwards";
                               document.getElementById("13-1-6").style.transformOrigin = "80% 90%";
                               document.getElementById("13-1-6").style.animation="movePin1 4s forwards";
                               setTimeout(function(){
                                   document.getElementById("13-1-3a").style.visibility="hidden";
                                   document.getElementById("13-1-3b").style.visibility="visible";
                                    myInt = setInterval(function () {animatearrow();}, 500);
                                    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:368px; top:343px; height:40px; z-index:10;";
                                   document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                     document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                     document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                      document.getElementById("13-1-3b").onclick = function () {
                                       myStopFunction();
                                          document.getElementById("13-1-3b").style.animation="moveHydrometer11a 4s forwards";
                                          setTimeout(function(){
                                            document.getElementById("13-1-6").style.transformOrigin = "80% 90%";
                                             document.getElementById("13-1-6").style.animation="movePin2 4s forwards";
                                             setTimeout(function(){
                                              
                                              myInt = setInterval(function () {animatearrow();}, 500);
                                              document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:368px; top:343px; height:40px; z-index:10;";
                                             document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                               document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                               document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                               document.getElementById("13-1-3c").style.visibility="visible";
                                                document.getElementById("13-1-3b").style.visibility="hidden";

                                                document.getElementById("13-1-3c").onclick = function () {
                                                 myStopFunction();
                                                //  document.getElementById("13-1-3b").style.visibility="hidden";
                                                //  document.getElementById("13-1-3c").style.visibility="visible";


                                                 document.getElementById("13-1-3c").style.animation="moveHydrometer11a 4s forwards";
                                                 
                                                 setTimeout(function(){
                                                  
                                                  document.getElementById("13-1-6").style.transformOrigin = "80% 80%";
                                                   document.getElementById("13-1-6").style.animation="movePin3 4s forwards";
                                                   setTimeout(function(){
                                                    myInt = setInterval(function () {animatearrow();}, 500);
                                                    document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:368px; top:343px; height:40px; z-index:10;";
                                                   document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                     document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                     document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                     document.getElementById("13-1-3d").style.visibility="visible";
                                                      document.getElementById("13-1-3c").style.visibility="hidden";
                                                      
                                                          document.getElementById("13-1-3d").onclick = function () {
                                                               myStopFunction();
                                                               document.getElementById("13-1-3d").style.animation="moveHydrometer11a 4s forwards";
                                                               setTimeout(function(){
                                                  
                                                                document.getElementById("13-1-6").style.transformOrigin = "80% 80%";
                                                                 document.getElementById("13-1-6").style.animation="movePin4 4s forwards";
                                                                 setTimeout(function(){
                                                                  document.getElementById("13-1-5").style.visibility="hidden";
                                                                  document.getElementById("13-1-6").style.visibility="hidden";
                                                                  document.getElementById("d21").style.visibility="visible";
                                                                  document.getElementById('d21').style.transformOrigin="45% 80%";
		                                                              document.getElementById('d21').style.animation="fadeIn 3.5s forwards";




                                                                  setTimeout(function(){
                                                                      document.getElementById("nextButton").style.visibility="visible";
                                                                  },3500);
                                                                  generate_table5();

                                                                 },5000);
                                                               },1500);
                                                               generate_table4();
                                                          }
      
                                                   },3000);
                                                  
                                                  
                                                 },1500);
                                                 generate_table3();
                                                 
                                                };
                                                

                                             },3000)

                                          },1500);
                                          generate_table2();
                                       };






                                },4000);
                                 generate_table1();
                            },1500);
                      }

                   },4500);
                    generate_table();





          
          },1000);







        }




      },3000);






    }


      



    },3500);
  }else if(simsubscreennum==14){
    document.getElementById("incanvas1").style.visibility="hidden";
    document.getElementById("circlebg1").style.visibility="hidden";
    document.getElementById("steptext1").style.visibility="hidden";
    document.getElementById("13-1-3a").style.visibility="hidden";
    document.getElementById("13-1-3b").style.visibility="hidden";
    document.getElementById("13-1-3c").style.visibility="hidden";
    document.getElementById("13-1-3d").style.visibility="hidden";

    // document.getElementById("ObsData").style.visibility="hidden";
    document.getElementById("data").style.visibility="hidden";
    document.getElementById("15-1-1").style.visibility="hidden";
    document.getElementById("13-1-6").style.visibility="hidden";
    document.getElementById("13-1-1b").style.visibility="hidden";
    document.getElementById("13-1-2").style.visibility="hidden";
    document.getElementById("13-1-5").style.visibility="hidden";
    document.getElementById("obsData").style.visibility="hidden";
    // document.getElementById("13-1-5").style.visibility="visible";
    // document.getElementById("14-1-6").style.visibility="visible";
    document.getElementById("iv11").style.visibility="visible";
    document.getElementById("form11").style.visibility="visible";
    document.getElementById("d51").style.visibility="visible";

    document.getElementById("13-1-3a").style.visibility="hidden";
    // document.getElementById("nextButton").style.visibility="visible";
    
    // document.getElementById("13-1-1a").style.visibility="hidden";
    // document.getElementById("14-1-3a").style.visibility="visible";
    // document.getElementById("13-1-2").style.visibility="hidden";
    // document.getElementById("14-1-1").style.visibility="visible";
    // document.getElementById("14-1-2").style.visibility="visible";

    // // myInt = setInterval(function () {animatearrow();}, 500);
    // // document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:460px; top:130px; height:40px; z-index:10;";
    // // document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    // // document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    // // document.getElementById("arrow1").style.transform = "rotate(180deg)";
    // // document.getElementById("13-1-5").onclick = function () {
    // //   myStopFunction();
    // document.getElementById("data").style.visibility="visible";
    // document.getElementById("obsData").style.visibility="visible";
    // generate_table1();
    // setTimeout(function(){
    //   document.getElementById("13-1-5").style.visibility="visible";

    //   document.getElementById("14-1-6").style.visibility="visible";
    //   document.getElementById("14-1-6").style.transformOrigin = "80% 90%";
    //   document.getElementById("14-1-6").style.animation="movePin11 5s forwards";
    

    // // document.getElementById("data").style.visibility="visible";
    // // document.getElementById("obsData").style.visibility="visible";
    // // setTimeout(function(){
    //   // document.getElementById("obsData").onclick="";
    //   document.getElementById('nextButton').style.visibility="visible";
    // },500);
     


    // generate_table();
    
  // }



  }else if(simsubscreennum==15){
    document.getElementById("iv11").style.visibility="hidden";
    document.getElementById("form11").style.visibility="hidden";
    document.getElementById("d51").style.visibility="hidden";
    document.getElementById("d52").style.visibility="hidden";
    document.getElementById("14-1-1").style.visibility="hidden";
              document.getElementById("14-1-2").style.visibility="hidden";
    document.getElementById("13-1-5").style.visibility="hidden";
    document.getElementById("13-1-6").style.visibility="hidden";
    document.getElementById("13-1-3a").style.visibility="hidden";
    document.getElementById("obsData").style.visibility="hidden";
    document.getElementById("con").style.visibility = "hidden";
    document.getElementById("tab").style.visibility = "hidden";
    plotUsingPlotly3();
    document.getElementById('nextButton').style.visibility="visible";

    // document.getElementById('con').style.visibility = "hidden";
    // document.getElementById("12-1ob").style.visibility="hidden";
    // document.getElementById('p14-1').style.visibility = "visible";
    // document.getElementById('p14-1').style.transformOrigin="45% 80%";
		// document.getElementById('p14-1').style.animation="fadeIn 3.5s forwards";
    // setTimeout(function(){
    //   document.getElementById('con').style.visibility = "visible";
    //   document.getElementById('subData').style.visibility = "visible";
    //   document.getElementById('nextButton').style.visibility="visible";

      
    // },3500);
    // document.getElementById('con').style.visibility = "hidden";



  }else if(simsubscreennum==16){
    document.getElementById('d11').style.visibility = "visible";
    document.getElementById('d11').style.transformOrigin="45% 80%";
		document.getElementById('d11').style.animation="fadeIn 3.5s forwards";

    setTimeout(function(){
      document.getElementById('con4').style.visibility = "visible";

      document.getElementById("graph3").style.visibility="hidden";
      // document.getElementById('con3').style.visibility = "visible";
      document.getElementById('subData3').style.visibility = "visible";
      document.getElementById('nextButton').style.visibility="visible";

    },3500)
      
    
  }
  else if(simsubscreennum==17){
    document.getElementById('con4').style.visibility = "hidden";
    document.getElementById("tab3").style.visibility = "hidden";
    document.getElementById("12-1").style.visibility="hidden";
    document.getElementById("14-1-1").style.visibility="visible";
    // document.getElementById("14-1-1a").style.visibility="visible";
    document.getElementById("14-1-2").style.visibility="visible";
    document.getElementById("data").style.visibility="hidden";
    document.getElementById("13-1-5").style.visibility="hidden";
    document.getElementById("13-1-6").style.visibility="hidden";
    document.getElementById("13-1-3a").style.visibility="hidden";
    document.getElementById("subData3").style.visibility="hidden";



    document.getElementById("15-1-1").style.visibility="visible";
    document.getElementById("obsData").style.visibility="hidden";
    document.getElementById("15-1-2").style.visibility="visible";
    // myInt = setInterval(function () {animatearrow();}, 500);
    // document.getElementById("arrow1").style ="visibility:visible; position:absolute; left:418px; top:256px; height:40px; z-index:10;";
    // document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    // document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    // document.getElementById("arrow1").style.transform = "rotate(270deg)";
    // document.getElementById("15-1-2").onclick = function () {
      // myStopFunction();
      // document.getElementById("15-1-2").style.visibility="hidden";
      // document.getElementById("15-1-3").style.visibility="visible";
      // document.getElementById("15-1-2").style.animation="moveHydrometer 2s forwards";
      // setTimeout(function(){
        // document.getElementById("15-1-3").style.visibility="hidden";
        // document.getElementById("15-1-2").style.visibility="visible";
        // document.getElementById("15-1-2").style.animation="moveHydrometer1 2s forwards";
        // setTimeout(function(){
              document.getElementById("14-1-1").style.visibility="hidden";
              document.getElementById("14-1-2").style.visibility="hidden";
              document.getElementById("vari1").style.visibility="visible";

          document.getElementById("13-1-3a").style.visibility="hidden";
          document.getElementById("15-1-2").style.visibility="hidden";
          document.getElementById("15-1-1").style.visibility="hidden";
          document.getElementById("12-1ob").style.visibility="visible";
          document.getElementById("12-1").style.visibility="visible";


          // document.getElementById("Dial").innerHTML = sample[i][0];
					// 	document.getElementById("Deform").innerHTML = sample[i][1];
					// 	document.getElementById("load").innerHTML = sample[i][2];
      // },2000);

      // },2000);


    


  }

  // }else if(simsubscreennum==16){
  //   document.getElementById("12-1ob").style.visibility="hidden";
  //   document.getElementById('p14-1').style.visibility = "visible";
  //   document.getElementById('p14-1').style.transformOrigin="45% 80%";
	// 	document.getElementById('p14-1').style.animation="fadeIn 3.5s forwards";
  //   setTimeout(function(){
  //     document.getElementById('con').style.visibility = "visible";
  //     document.getElementById('subData').style.visibility = "visible";
  //     document.getElementById('nextButton').style.visibility="visible";

      
  //   },3500);
  //   // document.getElementById('con').style.visibility = "hidden";



  // }
   else if(simsubscreennum==18){
    document.getElementById("vari1").style.visibility="hidden";

    document.getElementById("12-1ob").style.visibility="hidden";
    // document.getElementById("12").style.visibility = "hidden";
    document.getElementById("con").style.visibility = "hidden";
    document.getElementById("tab").style.visibility = "hidden";
    plotUsingPlotly3();
    document.getElementById('p14-1').style.visibility = "visible";
    document.getElementById('p14-1').style.transformOrigin="45% 80%";
		document.getElementById('p14-1').style.animation="fadeIn 3.5s forwards";
    setTimeout(function(){
      document.getElementById("graph3").style.visibility="hidden";
      document.getElementById('con3').style.visibility = "visible";
      document.getElementById('subData').style.visibility = "visible";
      document.getElementById('tab').style.visibility = "visible";
      document.getElementById('nextButton').style.visibility="visible";

      
    },3500);


  }

  else if(simsubscreennum==19){
    document.getElementById('subData3').style.visibility = "hidden";

    document.getElementById("con1").style.visibility = "hidden";
    document.getElementById("p14-1").style.visibility = "hidden";
    document.getElementById("con3").style.visibility = "hidden";

    
    document.getElementById("con").style.visibility = "hidden";
    document.getElementById("tab").style.visibility = "hidden";


    document.getElementById("iv").style.visibility="hidden";
    plotUsingPlotly1();
    // document.getElementById('mydiv1').style.visibility = "visible";

    // document.getElementById("nextButton").style.visibility="visible";
  

  }

}



var counter=0;
function hideButton()
{
	let area = tryData[0][0];
	let userInput = Number(document.getElementById("res").value);
	

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area != userInput){
			document.getElementById("rightAns").innerHTML = "&#10008;"
			document.getElementById("rightAns").style.color = "red";
			document.getElementById("Result").style.visibility="hidden";
      // document.getElementById("nextButton").style.visibility="visible";
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns").innerHTML = "&#10004;"
			document.getElementById("rightAns").style.color = "green";
			document.getElementById("chk").style.visibility = "hidden";
      
			document.getElementById("Result").style.visibility="hidden";
      document.getElementById("d10").style.visibility="visible";
      document.getElementById("subData1").style.visibility="visible";
      // setTimeout(function(){
      //   document.getElementById("nextButton").style.visibility="visible";
      // },1000);
      // document.getElementById("nextButton").style.visibility="visible";
			// document.getElementById("form1").style.visibility="visible";
					// document.getElementById("iv1").style.visibility="visible";
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk").style.visibility="hidden";
			document.getElementById("Result").style.visibility="visible";
      // document.getElementById("nextButton").style.visibility="visible";
		// }	
	}
	
}
function hideButton1()
{
	let area = tryData[0][1];
	let userInput = Number(document.getElementById("res1").value);
	

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter1++;
		if(area != userInput){
			document.getElementById("rightAns1").innerHTML = "&#10008;"
			document.getElementById("rightAns1").style.color = "red";
			document.getElementById("Result1").style.visibility="hidden";
      // document.getElementById("nextButton").style.visibility="visible";
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns1").innerHTML = "&#10004;"
			document.getElementById("rightAns1").style.color = "green";
			document.getElementById("chk1").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility="visible";
			document.getElementById("Result1").style.visibility="hidden";
			document.getElementById("form1").style.visibility="visible";
					document.getElementById("iv1").style.visibility="visible";
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk1").style.visibility="hidden";
			document.getElementById("Result1").style.visibility="visible";
      // document.getElementById("nextButton").style.visibility="visible";
		// }	
	}
	
}


function hideButton2()
{
	let area = tryData[0][2];
	let userInput = Number(document.getElementById("res2").value);
	

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter2++;
		if(area != userInput){
			document.getElementById("rightAns2").innerHTML = "&#10008;"
			document.getElementById("rightAns2").style.color = "red";
			document.getElementById("Result2").style.visibility="hidden";
      // document.getElementById("nextButton").style.visibility="visible";
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns2").innerHTML = "&#10004;"
			document.getElementById("rightAns2").style.color = "green";
			document.getElementById("chk2").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility="visible";
			document.getElementById("Result2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="visible";
					document.getElementById("iv2").style.visibility="visible";
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk2").style.visibility="hidden";
			document.getElementById("Result2").style.visibility="visible";
      // document.getElementById("nextButton").style.visibility="visible";
		// }	
	}
	
}

function hideButton11()
{
	let area = tryData[0][3];
	let userInput = Number(document.getElementById("res11").value);
	

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area != userInput){
			document.getElementById("rightAns11").innerHTML = "&#10008;"
			document.getElementById("rightAns11").style.color = "red";
			document.getElementById("Result11").style.visibility="hidden";
      // document.getElementById("nextButton").style.visibility="visible";
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns11").innerHTML = "&#10004;"
			document.getElementById("rightAns11").style.color = "green";
			document.getElementById("chk11").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility="visible";
			document.getElementById("Result11").style.visibility="hidden";
      // document.getElementById("d52").style.visibility="visible";
      // document.getElementById("subData1").style.visibility="visible";

			// document.getElementById("form1").style.visibility="visible";
					// document.getElementById("iv1").style.visibility="visible";
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk11").style.visibility="hidden";
			document.getElementById("Result11").style.visibility="visible";
      // document.getElementById("nextButton").style.visibility="visible";
		// }	
	}
	
}
function evaluateArea(){
	let area = tryData[0][0];
	let userInput = Number(document.getElementById("res").value);
	document.getElementById("rightAns").style.visibility="hidden";
	document.getElementById("res").value = area;
	document.getElementById('Result').style.visibility="hidden";
  document.getElementById("d10").style.visibility="visible";
  document.getElementById("subData1").style.visibility="visible";
  setTimeout(function(){
    document.getElementById("nextButton").style.visibility="visible";
  },2000);
  
	// document.getElementById("form1").style.visibility="visible";
	// document.getElementById("iv1").style.visibility="visible";
}
function evaluateArea1(){
	let area = tryData[0][1];
	let userInput = Number(document.getElementById("res").value);
	document.getElementById("rightAns1").style.visibility="hidden";
	document.getElementById("res1").value = area;
	document.getElementById('Result1').style.visibility="hidden";
  document.getElementById("nextButton").style.visibility="visible";
	// document.getElementById("form1").style.visibility="visible";
	// document.getElementById("iv1").style.visibility="visible";
}
function evaluateArea2(){
	let area = tryData[0][2];
	let userInput = Number(document.getElementById("res2").value);
	document.getElementById("rightAns2").style.visibility="hidden";
	document.getElementById("res2").value = area;
	document.getElementById('Result2').style.visibility="hidden";
  document.getElementById("nextButton").style.visibility="visible";
	// document.getElementById("form1").style.visibility="visible";
	// document.getElementById("iv1").style.visibility="visible";
}
function evaluateArea4() 
{
	// document.getElementById("rightAns4").style.visibility = "hidden";
	document.getElementById("rightAns5").style.visibility = "hidden";
	document.getElementById("rightAns6").style.visibility = "hidden";
  document.getElementById("rightAns7").style.visibility = "hidden";
	// document.getElementById("s11").value = sample[0][3];
	document.getElementById("s1").value = sample[0][4];
	document.getElementById("s2").value = sample[0][5];
  document.getElementById("s3").value = sample[0][6];
	document.getElementById("Result4").style.visibility = "hidden"
}
function evaluateArea11(){
	let area = tryData[0][3];
	let userInput = Number(document.getElementById("res11").value);
	document.getElementById("rightAns11").style.visibility="hidden";
	document.getElementById("res11").value = area;
	document.getElementById('Result11').style.visibility="hidden";
  // document.getElementById("d52").style.visibility="visible";
  // document.getElementById("subData1").style.visibility="visible";
  document.getElementById("nextButton").style.visibility="visible";
	// document.getElementById("form1").style.visibility="visible";
	// document.getElementById("iv1").style.visibility="visible";
}



function setEvaluateColor(id, res){
	let color = res ? "green" : "red";
	let mark = res ? "&#10004;" : "&#10008;"
	document.getElementById(id).innerHTML = mark;
	document.getElementById(id).style.color = color;
}

function showTooltip1(){
	document.getElementById("ttp1").style.visibility = "visible"										
}
function hideTooltip1(){
	document.getElementById("ttp1").style.visibility = "hidden"										
}

function showTooltip2(){
	document.getElementById("ttp2").style.visibility = "visible"										
}
function hideTooltip2(){
	document.getElementById("ttp2").style.visibility = "hidden"										
}

function showTooltip3(){
	document.getElementById("ttp3").style.visibility = "visible"										
}
function hideTooltip3(){
	document.getElementById("ttp3").style.visibility = "hidden"										
}
function showTooltip11(){
	document.getElementById("ttp5").style.visibility = "visible"										
}
function hideTooltip11(){
	document.getElementById("ttp5").style.visibility = "hidden"										
}

// function table13(){
// 	for(let i=0; i<values.length; i++){
// 	rows = tableData1.insertRow(-1);
// 	eachRow1(rows,values[i]);
	
// }}
// function eachRow1(rows,row){
// 	for(let i=0;i<row.length; i++){
// 	rows.insertCell(i).innerHTML = row[i]
// }}

var sInput1=0;
   var sInput2=0;
   var sInput3=0;
   var sInput4=0;
function Observation()
{
  
	// let sInput1 = Number(document.getElementById("s11").value);
	let sInput2= Number(document.getElementById("s1").value);
	let sInput3= Number(document.getElementById("s2").value);
  let sInput4 = Number(document.getElementById("s3").value);
	// console.log(sInput1)
	let resultVisible = false;
	if( !sInput2 && !sInput3 && !sInput4)
		{
			alert("Please Enter the Value ")
		}
	else
	{
				// if(sInput1 == sample[0][3]){
				// 	setEvaluateColor("rightAns4", true)
				// 	resultVisible = false;
				// }
        //   {
				// 	setEvaluateColor("rightAns4", false)
				// 	resultVisible = true;
				// }
				if(sInput2 == sample[0][4]){
					setEvaluateColor("rightAns5", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns5", false)
					resultVisible = true;
				}
				if(sInput3 ==  sample[0][5]){
					setEvaluateColor("rightAns6", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns6", false)
					resultVisible = true;
				}
        if(sInput4 ==  sample[0][6]){
					setEvaluateColor("rightAns7", true)
					resultVisible = false;

				} else {
					setEvaluateColor("rightAns7", false)
					resultVisible = true;
				}
				if(resultVisible){
					document.getElementById("Result4").style.visibility = "visible"
					document.getElementById("12-1").style.visibility = "hidden"
				} else {
					document.getElementById("12-1").style.visibility = "hidden"
					document.getElementById('nextButton').style.visibility="visible";

}
}}	
function viewData(){
  document.getElementById("subData2").style.visibility="visible";
  // document.getElementById("subData1").style="position:absolute; margin-top:10px; visibility:visible";
  document.getElementById("graph1").style.visibility="hidden";

}
function viewGraph(){
  document.getElementById("subData2").style.visibility="hidden";
  // document.getElementById("subData1").style="position:absolute; margin-top:10px; visibility:visible";
  document.getElementById("graph1").style.visibility="visible";

}

var trace1 = {
  x: [0.0013, 0.0061, 0.0086,  0.0167, 0.0233, 0.0321, 0.0446, 0.0627, 0.0879],
  y: [6.54, 21.26, 26.16, 35.9, 42.51, 47.42, 52.32, 53.96, 55.59],
  type: 'spline',
  line: {shape: 'spline'},
};

// var trace2 = {
//   x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//   y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//   type: 'scatter'
// };

var data21 = [trace1];

var layout6 = {
  title:"Particle size, D Vs % Finer N'",

  xaxis: {
    title:"Particle size, D (cm)",
    
    type: 'log',
    dtick:1,
    showline: true,
    
    fixedrange: true,
    

    
  },
  yaxis: {
    title: " % Finer N'",
    type: 'log',
    
    dtick:1,
    showline:true,
    fixedrange: true
    
    
  },
  width: 690,
  height: 450,
  
};


function plotUsingPlotly1(){
  Plotly.newPlot('myDiv1', data21, layout6, options);
}