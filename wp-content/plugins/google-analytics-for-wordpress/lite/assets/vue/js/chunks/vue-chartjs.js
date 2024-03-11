import{C as y}from"./chart.js.js";function u(e,s){if(s){var t=this.$data._chart,a=e.datasets.map(function(r){return r.label}),i=s.datasets.map(function(r){return r.label}),c=JSON.stringify(i),l=JSON.stringify(a);l===c&&s.datasets.length===e.datasets.length?(e.datasets.forEach(function(r,o){var d=Object.keys(s.datasets[o]),f=Object.keys(r),p=d.filter(function(n){return n!=="_meta"&&f.indexOf(n)===-1});p.forEach(function(n){delete t.data.datasets[o][n]});for(var h in r)r.hasOwnProperty(h)&&(t.data.datasets[o][h]=r[h])}),e.hasOwnProperty("labels")&&(t.data.labels=e.labels,this.$emit("labels:update")),e.hasOwnProperty("xLabels")&&(t.data.xLabels=e.xLabels,this.$emit("xlabels:update")),e.hasOwnProperty("yLabels")&&(t.data.yLabels=e.yLabels,this.$emit("ylabels:update")),t.update(),this.$emit("chart:update")):(t&&(t.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render"))}else this.$data._chart&&(this.$data._chart.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render")}var g={data:function(){return{chartData:null}},watch:{chartData:u}},_={props:{chartData:{type:Object,required:!0,default:function(){}}},watch:{chartData:u}};const b={reactiveData:g,reactiveProp:_};function m(e,s){return{render:function(a){return a("div",{style:this.styles,class:this.cssClasses},[a("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:e,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(a){this.$data._plugins.push(a)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(a,i){if(this.$data._chart&&this.$data._chart.destroy(),!this.$refs.canvas)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");this.$data._chart=new y(this.$refs.canvas.getContext("2d"),{type:s,data:a,options:i,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var $=m("bar-chart","bar");export{$ as B,m as g,b as m};