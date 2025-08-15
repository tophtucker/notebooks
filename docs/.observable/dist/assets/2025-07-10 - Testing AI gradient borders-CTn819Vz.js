import{d as h}from"./define-BW8gZLxC.js";h({root:document.getElementById("cell-2"),expanded:[],variables:[]},{id:2,body:(n,s)=>{const d=n.html`<div class="gradient-input-container">
  <div class="gradient-border"></div>
  <input type="text" class="gradient-input" placeholder="Type something...">
  <style>
    .gradient-input-container {
      position: relative;
      display: inline-block;
      padding: 4px;
    }

    .gradient-border {
      position: absolute;
      inset: 0;
      border-radius: 12px;
      padding: 3px;
      background: conic-gradient(from 0deg,
        #ff6b6b, #4ecdc4, #45b7d1, #96ceb4,
        #feca57, #ff9ff3, #54a0ff, #ff6b6b);
      animation: spin 2s linear infinite;
    }

    .gradient-border::before {
      content: '';
      position: absolute;
      inset: 3px;
      border-radius: 8px;
      background: white;
    }

    .gradient-input {
      width: 400px;
      height: 50px;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      background: transparent;
      font-size: 16px;
      outline: none;
      position: relative;
      z-index: 1;
      color: #333;
    }

    .gradient-input::placeholder {
      color: #999;
    }

    .gradient-input:focus {
      background: rgba(255, 255, 255, 0.95);
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  </style>
</div>`;return s(d),{input:d}},inputs:["htl","display"],outputs:["input"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});h({root:document.getElementById("cell-4"),expanded:[],variables:[]},{id:4,body:(n,s,d)=>{const i=n.html`<canvas width="800" height="400" style="border: 1px solid #ccc;"></canvas>`,e=i.getContext("2d");let t=0,b;function g(){e.fillStyle="white",e.fillRect(0,0,800,400);const u=400,l=200,c=600,f=100,o=u-c/2,r=l-f/2;e.strokeStyle="#333",e.lineWidth=2,e.strokeRect(o,r,c,f);const M=400,y=u+Math.cos(t)*M,x=l+Math.sin(t)*M;e.strokeStyle="#ff4444",e.lineWidth=3,e.beginPath(),e.moveTo(u,l),e.lineTo(y,x),e.stroke();const p=[];if(Math.sin(t)<0){const a=u-(l-r)/Math.tan(t);a>=o&&a<=o+c&&p.push({x:a,y:r,edge:"top"})}if(Math.sin(t)>0){const a=u+(r+f-l)/Math.tan(t);a>=o&&a<=o+c&&p.push({x:a,y:r+f,edge:"bottom"})}if(Math.cos(t)<0){const a=l-(u-o)*Math.tan(t);a>=r&&a<=r+f&&p.push({x:o,y:a,edge:"left"})}if(Math.cos(t)>0){const a=l+(o+c-u)*Math.tan(t);a>=r&&a<=r+f&&p.push({x:o+c,y:a,edge:"right"})}p.forEach(a=>{e.fillStyle="#ff4444",e.beginPath(),e.arc(a.x,a.y,6,0,2*Math.PI),e.fill()}),e.fillStyle="#333",e.font="14px Arial",p.forEach(a=>{let m;switch(a.edge){case"top":case"bottom":m=Math.abs(1/Math.cos(t));break;case"left":case"right":m=Math.abs(1/Math.sin(t));break}isFinite(m)&&e.fillText(`Speed: ${m.toFixed(2)}`,a.x+10,a.y-10)}),e.fillText(`Angle: ${(t*180/Math.PI).toFixed(1)}°`,10,30),t+=.02,b=requestAnimationFrame(g)}return g(),s.then(()=>cancelAnimationFrame(b)),d(i),{canvas:i,ctx:e,angle:t,frame:b,drawVisualization:g}},inputs:["htl","invalidation","display"],outputs:["canvas","ctx","angle","frame","drawVisualization"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});h({root:document.getElementById("cell-6"),expanded:[],variables:[]},{id:6,body:(n,s,d)=>{const i=n.plot({width:800,height:400,x:{domain:[0,4*Math.PI],label:"θ (radians)",tickFormat:e=>{const t=Math.PI;return e===0?"0":e===t/2?"π/2":e===t?"π":e===3*t/2?"3π/2":e===2*t?"2π":e===5*t/2?"5π/2":e===3*t?"3π":e===7*t/2?"7π/2":e===4*t?"4π":""},ticks:[0,Math.PI/2,Math.PI,3*Math.PI/2,2*Math.PI,5*Math.PI/2,3*Math.PI,7*Math.PI/2,4*Math.PI]},y:{domain:[0,10],label:"Speed multiplier",clamp:!0},marks:[n.line(s.range(0,4*Math.PI,.01).filter(e=>Math.abs(Math.cos(e))>.1).map(e=>({theta:e,speed:Math.abs(1/Math.cos(e)),type:"|sec(θ)| - Horizontal edges"})),{x:"theta",y:"speed",stroke:"#ff4444",strokeWidth:2}),n.line(s.range(0,4*Math.PI,.01).filter(e=>Math.abs(Math.sin(e))>.1).map(e=>({theta:e,speed:Math.abs(1/Math.sin(e)),type:"|csc(θ)| - Vertical edges"})),{x:"theta",y:"speed",stroke:"#4444ff",strokeWidth:2}),n.ruleY([10],{x:[0,Math.PI,2*Math.PI,3*Math.PI,4*Math.PI],stroke:"#4444ff",strokeDasharray:"4,4",strokeOpacity:.5}),n.ruleY([10],{x:[Math.PI/2,3*Math.PI/2,5*Math.PI/2,7*Math.PI/2],stroke:"#ff4444",strokeDasharray:"4,4",strokeOpacity:.5}),n.ruleY([1],{stroke:"#666",strokeDasharray:"2,2",strokeOpacity:.7})],color:{legend:!0,domain:["|sec(θ)| - Horizontal edges","|csc(θ)| - Vertical edges"],range:["#ff4444","#4444ff"]},caption:"Speed at which rotating gradient boundary crosses rectangle edges. Dashed lines show singularities where speed approaches infinity."});return d(i),{plot:i}},inputs:["Plot","d3","display"],outputs:["plot"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});h({root:document.getElementById("cell-7"),expanded:[],variables:[]},{id:7,body:n=>{n("Addition: 10 + 5 = 15"),n("Subtraction: 10 - 5 = 5"),n("Multiplication: 10 × 5 = 50"),n(`Division: 10 ÷ 5 = ${10/5}`);const i=[1,2,3,4,5],e=i.reduce((b,g)=>b+g,0),t=e/i.length;return n(`Array: [${i.join(", ")}]`),n(`Sum: ${e}`),n(`Average: ${t}`),n(`10 squared: ${Math.pow(10,2)}`),n(`Square root of 100: ${Math.sqrt(100)}`),n(`10 to the power of 5: ${Math.pow(10,5)}`),{a:10,b:5,numbers:i,sum:e,average:t}},inputs:["display"],outputs:["a","b","numbers","sum","average"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});h({root:document.getElementById("cell-8"),expanded:[],variables:[]},{id:8,body:()=>2,inputs:[],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});h({root:document.getElementById("cell-9"),expanded:[],variables:[]},{id:9,body:()=>3,inputs:[],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});
