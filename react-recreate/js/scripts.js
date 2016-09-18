/*function allowDrop(ev) {
    ev.preventDefault();
} 
var x=document.getElementById("canvas");
var data_src,R,mx,my,fx,fy;
 function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.parentNode)
   data_src = ev.target.src;

}

function drop(ev) {
    ev.preventDefault();
   // var data = ev.dataTransfer.getData("text");
  //  console.log(data)
   // ev.target.appendChild(document.getElementById(data).cloneNode(true));
  console.log(ev.clientX);
  
   var bnds = event.target.getBoundingClientRect();

    // adjust mouse x/y
      mx = event.clientX - bnds.left;
  	   my = event.clientY - bnds.top;
    

      fx = mx*(bnds.width/bnds.height)
      fy = my*(bnds.width/bnds.height)

    // cleanup output
    fx = Number(fx).toPrecision(3);
    fy = Number(fy).toPrecision(3);
 console.log(fx,fy)
     kk();
    
}

   window.onload = function () {
                R = Raphael(x, x.clientWidth, x.clientHeight);
              
            };


var kk = function()
{
	console.log(data_src)
	  if(data_src)
                    r = R.image(data_src, mx,my,35,35);
                 

                    
                var start = function () {
                    this.ox = this.attr("cx");
                    this.oy = this.attr("cy");
                    this.px = this.attr("x");
                    this.py = this.attr("y")
                    this.animate({width: 35,height:35, opacity: .25}, 500, ">");
                },
                move = function (dx, dy) {
                    this.attr({cx: this.ox + dx, cy: this.oy + dy, x:this.px+dx, y:this.py+dy});
                },
                up = function () {
                    this.animate({opacity: 1,width:35,height:35}, 500, ">");
                };
                R.set(r).drag(move, start, up);
}*/


  