"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[380],{35380:($,M,m)=>{m.r(M),m.d(M,{ChartsModule:()=>N});var h=m(28551),d=m(56213),g=m(85446),C=m(9956),b=m(39256),c=m(20971),H=m(7131),f=m(2504),e=m(82963),L=function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-charts"]],decls:1,vars:0,template:function(t,n){1&t&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[f.lC],encapsulation:2}),s}(),_=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[r.danger,r.primary,r.info],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},legend:{left:"left",data:["Line 1","Line 2","Line 3"],textStyle:{color:i.textColor}},xAxis:[{type:"category",data:["1","2","3","4","5","6","7","8","9"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:i.axisLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],yAxis:[{type:"log",axisLine:{lineStyle:{color:i.axisLineColor}},splitLine:{lineStyle:{color:i.splitLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"Line 1",type:"line",data:[1,3,9,27,81,247,741,2223,6669]},{name:"Line 2",type:"line",data:[1,2,4,8,16,32,64,128,256]},{name:"Line 3",type:"line",data:[.5,.25,.125,.0625,.03125,.015625,.0078125,.00390625,.001953125]}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-line"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),O=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[r.warningLight,r.infoLight,r.dangerLight,r.successLight,r.primaryLight],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["USA","Germany","France","Canada","Russia"],textStyle:{color:i.textColor}},series:[{name:"Countries",type:"pie",radius:"80%",center:["50%","50%"],data:[{value:335,name:"Germany"},{value:310,name:"France"},{value:234,name:"Canada"},{value:135,name:"Russia"},{value:1548,name:"USA"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:i.itemHoverShadowColor}},label:{normal:{textStyle:{color:i.textColor}}},labelLine:{normal:{lineStyle:{color:i.axisLineColor}}}}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-pie"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),P=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[l.variables.primaryLight],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:i.axisLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:i.axisLineColor}},splitLine:{lineStyle:{color:i.splitLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],series:[{name:"Score",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-bar"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),A=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[r.success,r.info],tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{data:["2015 Precipitation","2016 Precipitation"],textStyle:{color:i.textColor}},grid:{top:70,bottom:50},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:r.info}},axisLabel:{textStyle:{color:i.textColor}},axisPointer:{label:{formatter:function(u){return"Precipitation  "+u.value+(u.seriesData.length?"\uff1a"+u.seriesData[0].data:"")}}},data:["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]},{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:r.success}},axisLabel:{textStyle:{color:i.textColor}},axisPointer:{label:{formatter:function(u){return"Precipitation  "+u.value+(u.seriesData.length?"\uff1a"+u.seriesData[0].data:"")}}},data:["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11","2015-12"]}],yAxis:[{type:"value",axisLine:{lineStyle:{color:i.axisLineColor}},splitLine:{lineStyle:{color:i.splitLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],series:[{name:"2015 Precipitation",type:"line",xAxisIndex:1,smooth:!0,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"2016 Precipitation",type:"line",smooth:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,18.4,10.3,.7]}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-multiple-xaxis"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),S=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[r.warningLight,r.infoLight,r.dangerLight,r.successLight,r.primaryLight],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:i.tooltipBackgroundColor}}},legend:{data:["Mail marketing","Affiliate advertising","Video ad","Direct interview","Search engine"],textStyle:{color:i.textColor}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:i.axisLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:i.axisLineColor}},splitLine:{lineStyle:{color:i.splitLineColor}},axisLabel:{textStyle:{color:i.textColor}}}],series:[{name:"Mail marketing",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:i.areaOpacity}},data:[120,132,101,134,90,230,210]},{name:"Affiliate advertising",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:i.areaOpacity}},data:[220,182,191,234,290,330,310]},{name:"Video ad",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:i.areaOpacity}},data:[150,232,201,154,190,330,410]},{name:"Direct interview",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:i.areaOpacity}},data:[320,332,301,334,390,330,320]},{name:"Search engine",type:"line",stack:"Total amount",label:{normal:{show:!0,position:"top",textStyle:{color:i.textColor}}},areaStyle:{normal:{opacity:i.areaOpacity}},data:[820,932,901,934,1290,1330,1320]}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-area-stack"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),w=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=[],i=[],y=[],u=l.variables,x=l.variables.echarts;n.options={backgroundColor:x.bg,color:[u.primaryLight,u.infoLight],legend:{data:["bar","bar2"],align:"left",textStyle:{color:x.textColor}},xAxis:[{data:r,silent:!1,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:x.axisLineColor}},axisLabel:{textStyle:{color:x.textColor}}}],yAxis:[{axisLine:{lineStyle:{color:x.axisLineColor}},splitLine:{lineStyle:{color:x.splitLineColor}},axisLabel:{textStyle:{color:x.textColor}}}],series:[{name:"bar",type:"bar",data:i,animationDelay:function(v){return 10*v}},{name:"bar2",type:"bar",data:y,animationDelay:function(v){return 10*v+100}}],animationEasing:"elasticOut",animationDelayUpdate:function(v){return 5*v}};for(var p=0;p<100;p++)r.push("Category "+p),i.push(5*(Math.sin(p/5)*(p/5-10)+p/6)),y.push(5*(Math.cos(p/5)*(p/5-10)+p/6))})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-bar-animation"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),k=function(){var a,s=function(){function o(t){(0,d.Z)(this,o),this.theme=t,this.options={}}return(0,h.Z)(o,[{key:"ngAfterViewInit",value:function(){var n=this;this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.echarts;n.options={backgroundColor:i.bg,color:[r.danger,r.warning],tooltip:{},legend:{data:["Allocated Budget","Actual Spending"],textStyle:{color:i.textColor}},radar:{name:{textStyle:{color:i.textColor}},indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Techology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}],splitArea:{areaStyle:{color:"transparent"}}},series:[{name:"Budget vs Spending",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"Actual Spending"}]}]}})}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-radar"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"div",0),2&t&&e.\u0275\u0275property("options",n.options)},dependencies:[g.w],encapsulation:2}),s}(),j=function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts"]],decls:43,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Pie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body"),e.\u0275\u0275element(6,"ngx-echarts-pie"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),e.\u0275\u0275text(10,"Bar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"nb-card-body"),e.\u0275\u0275element(12,"ngx-echarts-bar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),e.\u0275\u0275text(16,"Line"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"nb-card-body"),e.\u0275\u0275element(18,"ngx-echarts-line"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),e.\u0275\u0275text(22,"Multiple x-axis"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-card-body"),e.\u0275\u0275element(24,"ngx-echarts-multiple-xaxis"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),e.\u0275\u0275text(28,"Area Stack"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"nb-card-body"),e.\u0275\u0275element(30,"ngx-echarts-area-stack"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(31,"div",1)(32,"nb-card")(33,"nb-card-header"),e.\u0275\u0275text(34,"Bar Animation"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"nb-card-body"),e.\u0275\u0275element(36,"ngx-echarts-bar-animation"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(37,"div",1)(38,"nb-card")(39,"nb-card-header"),e.\u0275\u0275text(40,"Radar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"nb-card-body"),e.\u0275\u0275element(42,"ngx-echarts-radar"),e.\u0275\u0275elementEnd()()()())},dependencies:[c.Asz,c.yKW,c.ndF,_,O,P,A,S,w,k],styles:["[_nghost-%COMP%]   ngx-echarts-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar-animation[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-radar[_ngcontent-%COMP%]{display:block;height:var(--card-height-medium);width:100%}[_nghost-%COMP%]     .echart{height:100%;width:100%}"]}),s}(),D=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.results=[{name:"Germany",value:8940},{name:"USA",value:5e3},{name:"France",value:7200}],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.xAxisLabel="Country",this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables;n.colorScheme={domain:[r.primaryLight,r.infoLight,r.successLight,r.warningLight,r.dangerLight]}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-bar"]],decls:1,vars:7,consts:[[3,"scheme","results","xAxis","yAxis","legend","xAxisLabel","yAxisLabel"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"ngx-charts-bar-vertical",0),2&t&&e.\u0275\u0275property("scheme",n.colorScheme)("results",n.results)("xAxis",n.showXAxis)("yAxis",n.showYAxis)("legend",n.showLegend)("xAxisLabel",n.xAxisLabel)("yAxisLabel",n.yAxisLabel)},dependencies:[C.K$],encapsulation:2}),s}(),E=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.multi=[{name:"Germany",series:[{name:"2010",value:7300},{name:"2011",value:8940}]},{name:"USA",series:[{name:"2010",value:7870},{name:"2011",value:8270}]},{name:"France",series:[{name:"2010",value:5002},{name:"2011",value:5800}]}],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.showXAxisLabel=!0,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables;n.colorScheme={domain:[r.primaryLight,r.infoLight,r.successLight,r.warningLight,r.dangerLight]}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-line"]],decls:1,vars:9,consts:[[3,"scheme","results","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"ngx-charts-line-chart",0),2&t&&e.\u0275\u0275property("scheme",n.colorScheme)("results",n.multi)("xAxis",n.showXAxis)("yAxis",n.showYAxis)("legend",n.showLegend)("showXAxisLabel",n.showXAxisLabel)("showYAxisLabel",n.showYAxisLabel)("xAxisLabel",n.xAxisLabel)("yAxisLabel",n.yAxisLabel)},dependencies:[C.Dw],encapsulation:2}),s}(),T=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.results=[{name:"Germany",value:8940},{name:"USA",value:5e3},{name:"France",value:7200}],this.showLegend=!0,this.showLabels=!0,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables;n.colorScheme={domain:[r.primaryLight,r.infoLight,r.successLight,r.warningLight,r.dangerLight]}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-pie"]],decls:1,vars:4,consts:[[3,"scheme","results","legend","labels"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"ngx-charts-pie-chart",0),2&t&&e.\u0275\u0275property("scheme",n.colorScheme)("results",n.results)("legend",n.showLegend)("labels",n.showLabels)},dependencies:[C.JU],encapsulation:2}),s}(),F=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.multi=[{name:"Germany",series:[{name:"2010",value:73e5},{name:"2011",value:894e4}]},{name:"USA",series:[{name:"2010",value:787e4},{name:"2011",value:827e4}]},{name:"France",series:[{name:"2010",value:5000002},{name:"2011",value:58e5}]}],this.showLegend=!0,this.autoScale=!0,this.showXAxis=!0,this.showYAxis=!0,this.showXAxisLabel=!0,this.showYAxisLabel=!0,this.xAxisLabel="Country",this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables;n.colorScheme={domain:[r.primaryLight,r.infoLight,r.successLight,r.warningLight,r.dangerLight]}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-area-stack"]],decls:1,vars:10,consts:[[3,"scheme","results","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"ngx-charts-area-chart",0),2&t&&e.\u0275\u0275property("scheme",n.colorScheme)("results",n.multi)("xAxis",n.showXAxis)("yAxis",n.showYAxis)("legend",n.showLegend)("showXAxisLabel",n.showXAxisLabel)("showYAxisLabel",n.showYAxisLabel)("xAxisLabel",n.xAxisLabel)("yAxisLabel",n.yAxisLabel)("autoScale",n.autoScale)},dependencies:[C.rt],encapsulation:2}),s}(),Z=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.single=[{name:"Germany",value:894e4},{name:"USA",value:5e6},{name:"France",value:72e5}],this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables;n.colorScheme={domain:[r.primaryLight,r.infoLight,r.successLight,r.warningLight,r.dangerLight]}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-advanced-pie"]],decls:1,vars:2,consts:[[3,"scheme","results"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"ngx-charts-advanced-pie-chart",0),2&t&&e.\u0275\u0275property("scheme",n.colorScheme)("results",n.single)},dependencies:[C.MP],encapsulation:2}),s}(),R=function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3"]],decls:31,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Pie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body"),e.\u0275\u0275element(6,"ngx-d3-pie"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),e.\u0275\u0275text(10,"Bar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"nb-card-body"),e.\u0275\u0275element(12,"ngx-d3-bar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),e.\u0275\u0275text(16,"Line"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"nb-card-body"),e.\u0275\u0275element(18,"ngx-d3-line"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),e.\u0275\u0275text(22,"Advanced Pie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-card-body"),e.\u0275\u0275element(24,"ngx-d3-advanced-pie"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),e.\u0275\u0275text(28,"Area Chart"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"nb-card-body"),e.\u0275\u0275element(30,"ngx-d3-area-stack"),e.\u0275\u0275elementEnd()()()())},dependencies:[c.Asz,c.yKW,c.ndF,D,E,T,F,Z],styles:["[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]{display:block;width:100%;height:var(--card-height-medium)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label{fill:var(--text-basic-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text{fill:var(--text-hint-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels{background:var(--background-basic-color-2)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label{color:var(--text-hint-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text{color:var(--text-basic-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent{line-height:1.25}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items{overflow-y:hidden}"]}),s}(),B=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["2006","2007","2008","2009","2010","2011","2012"],datasets:[{data:[65,59,80,81,56,55,40],label:"Series A",backgroundColor:c.c5R.hexToRgbA(r.primaryLight,.8)},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:c.c5R.hexToRgbA(r.infoLight,.8)}]},n.options={maintainAspectRatio:!1,responsive:!0,legend:{labels:{fontColor:i.textColor}},scales:{xAxes:[{gridLines:{display:!1,color:i.axisLineColor},ticks:{fontColor:i.textColor}}],yAxes:[{gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}]}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-bar"]],decls:1,vars:2,consts:[["type","bar",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),I=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["January","February","March","April","May","June","July"],datasets:[{data:[65,59,80,81,56,55,40],label:"Series A",backgroundColor:c.c5R.hexToRgbA(r.primary,.3),borderColor:r.primary},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:c.c5R.hexToRgbA(r.danger,.3),borderColor:r.danger},{data:[18,48,77,9,100,27,40],label:"Series C",backgroundColor:c.c5R.hexToRgbA(r.info,.3),borderColor:r.info}]},n.options={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}],yAxes:[{gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}]},legend:{labels:{fontColor:i.textColor}}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-line"]],decls:1,vars:2,consts:[["type","line",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),W=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["Download Sales","In-Store Sales","Mail Sales"],datasets:[{data:[300,500,100],backgroundColor:[r.primaryLight,r.infoLight,r.successLight]}]},n.options={maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{labels:{fontColor:i.textColor}}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-pie"]],decls:1,vars:2,consts:[["type","pie",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),X=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["January","February","March","April","May","June"],datasets:[{label:"dataset - big points",data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()],borderColor:r.primary,backgroundColor:r.primary,fill:!1,borderDash:[5,5],pointRadius:8,pointHoverRadius:10},{label:"dataset - individual point sizes",data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()],borderColor:r.dangerLight,backgroundColor:r.dangerLight,fill:!1,borderDash:[5,5],pointRadius:8,pointHoverRadius:10},{label:"dataset - large pointHoverRadius",data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()],borderColor:r.info,backgroundColor:r.info,fill:!1,pointRadius:8,pointHoverRadius:10},{label:"dataset - large pointHitRadius",data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()],borderColor:r.success,backgroundColor:r.success,fill:!1,pointRadius:8,pointHoverRadius:10}]},n.options={responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom",labels:{fontColor:i.textColor}},hover:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"},gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"},gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}]}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}},{key:"random",value:function(){return Math.round(100*Math.random())}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-multiple-xaxis"]],decls:1,vars:2,consts:[["type","line",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),J=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:r.infoLight,borderWidth:1,data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()]},{label:"Dataset 2",backgroundColor:r.successLight,data:[n.random(),n.random(),n.random(),n.random(),n.random(),n.random()]}]},n.options={responsive:!0,maintainAspectRatio:!1,elements:{rectangle:{borderWidth:2}},scales:{xAxes:[{gridLines:{display:!0,color:i.axisLineColor},ticks:{fontColor:i.textColor}}],yAxes:[{gridLines:{display:!1,color:i.axisLineColor},ticks:{fontColor:i.textColor}}]},legend:{position:"right",labels:{fontColor:i.textColor}}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}},{key:"random",value:function(){return Math.round(100*Math.random())}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-bar-horizontal"]],decls:1,vars:2,consts:[["type","horizontalBar",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),z=function(){var a,s=function(){function o(t){var n=this;(0,d.Z)(this,o),this.theme=t,this.themeSubscription=this.theme.getJsTheme().subscribe(function(l){var r=l.variables,i=l.variables.chartjs;n.data={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{data:[65,59,90,81,56,55,40],label:"Series A",borderColor:r.danger,backgroundColor:c.c5R.hexToRgbA(r.dangerLight,.5)},{data:[28,48,40,19,96,27,100],label:"Series B",borderColor:r.warning,backgroundColor:c.c5R.hexToRgbA(r.warningLight,.5)}]},n.options={responsive:!0,maintainAspectRatio:!1,scaleFontColor:"white",legend:{labels:{fontColor:i.textColor}},scale:{pointLabels:{fontSize:14,fontColor:i.textColor},gridLines:{color:i.axisLineColor},angleLines:{color:i.axisLineColor}}}})}return(0,h.Z)(o,[{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),o}();return(a=s).\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.WMF))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-radar"]],decls:1,vars:2,consts:[["type","radar",3,"data","options"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"chart",0),2&t&&e.\u0275\u0275property("data",n.data)("options",n.options)},dependencies:[b.ChartComponent],encapsulation:2}),s}(),U=[{path:"",component:L,children:[{path:"echarts",component:j},{path:"d3",component:R},{path:"chartjs",component:function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs"]],decls:37,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Pie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body"),e.\u0275\u0275element(6,"ngx-chartjs-pie"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),e.\u0275\u0275text(10,"Bar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"nb-card-body"),e.\u0275\u0275element(12,"ngx-chartjs-bar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),e.\u0275\u0275text(16,"Line"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"nb-card-body"),e.\u0275\u0275element(18,"ngx-chartjs-line"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),e.\u0275\u0275text(22,"Multiple x-axis"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-card-body"),e.\u0275\u0275element(24,"ngx-chartjs-multiple-xaxis"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),e.\u0275\u0275text(28,"Bar Horizontal"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"nb-card-body"),e.\u0275\u0275element(30,"ngx-chartjs-bar-horizontal"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(31,"div",1)(32,"nb-card")(33,"nb-card-header"),e.\u0275\u0275text(34,"Radar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"nb-card-body"),e.\u0275\u0275element(36,"ngx-chartjs-radar"),e.\u0275\u0275elementEnd()()()())},dependencies:[c.Asz,c.yKW,c.ndF,B,I,W,X,J,z],styles:["[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]{display:block;height:var(--card-height-medium);width:100%}[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}"]}),s}()}]}],G=function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[f.Bz.forChild(U),f.Bz]}),s}(),N=function(){var a,s=(0,h.Z)(function o(){(0,d.Z)(this,o)});return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[H.O,G,g.N,C.a4,b.ChartModule,c.zyh]}),s}()}}]);