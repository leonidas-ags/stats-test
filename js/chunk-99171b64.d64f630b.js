(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99171b64"],{"0f8c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"treemapPage"}},[a("b-jumbotron",{attrs:{header:"TreeMap aller aktuellen AGs"}}),a("TreeMap",{attrs:{ags:""}})],1)},r=[],s=a("95ee"),n={name:"treemapAgs",components:{TreeMap:s["a"]}},l=n,u=a("2877"),c=Object(u["a"])(l,i,r,!1,null,null,null);t["default"]=c.exports},"95ee":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"treemapChart"}},[a("b-form-select",{attrs:{options:e.indizesConfig.possibleValues},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("div",{staticStyle:{width:"100%",height:"700px","background-color":"#FFFFFF"},attrs:{id:"treeMapAmChart"}})],1)},r=[],s=(a("b0c0"),a("71c9")),n=a("c497"),l={name:"treemap",props:{indizes:Boolean,ags:Boolean},data:function(){return{selected:"",chart:"",agUrl:"".concat("https://api.stats-tsg.de","/api/ag/,"),indizesConfig:{url:"".concat("https://api.stats-tsg.de","/api/index/"),value:"buchwert",name:"name",possibleValues:[{text:"Buchwert",value:"buchwert"},{text:"Marktkapitalisierung",value:"boersenwert"},{text:"Aktien",value:"aktien"},{text:"Anleihen",value:"anleihen"},{text:"Kredite",value:"kredite"},{text:"Bargeld",value:"bargeld"}]},agConfig:{url:"".concat("https://api.stats-tsg.de","/api/ag/treemap/last"),value:"boersenwert",name:"ag",possibleValues:[{text:"Börsenwert",value:"boersenwert"},{text:"Buchwert",value:"buchwert"},{text:"Bargeld",value:"bargeld"},{text:"Aktien",value:"aktien"},{text:"Kredite",value:"kredite"},{text:"Anleihen",value:"anleihen"},{text:"Zertis",value:"zertis"},{text:"Buy-Orders",value:"buys"},{text:"Sell-Orders",value:"sells"}]}}},watch:{selected:function(e,t){""!==t&&(this.chart.dataFields.value=e,this.chart.dataSource.load())}},mounted:function(){this.chart=s["d"](document.getElementById("treeMapAmChart"),n["e"]),this.chart.exporting.menu=new s["a"],this.chart.exporting.menu.align="right",this.chart.exporting.menu.verticalAlign="bottom",this.chart.logo.disabled=!0,this.indizes&&(this.selected=this.indizesConfig.value,this.chart.dataSource.url=this.indizesConfig.url,this.chart.dataFields.value=this.indizesConfig.value,this.chart.dataFields.name=this.indizesConfig.name),this.ags&&(this.selected=this.agConfig.value,this.chart.dataSource.url=this.agConfig.url,this.chart.dataFields.value=this.agConfig.value,this.chart.dataFields.name=this.agConfig.name),this.chart.numberFormatter.numberFormat="#.#a",this.chart.numberFormatter.bigNumberPrefixes=[{number:1e6,suffix:" Mio."},{number:1e9,suffix:" Mrd."},{number:1e12,suffix:" Bill."}];var e=this.chart.seriesTemplates.create("0"),t=e.columns.template;t.column.cornerRadius(10,10,10,10),t.fillOpacity=.8,t.stroke=s["c"]("#fff"),t.strokeWidth=5,t.strokeOpacity=1;var a=e.bullets.push(new n["b"]);a.locationY=.5,a.locationX=.5,a.label.text="{name}"}},u=l,c=a("2877"),o=Object(c["a"])(u,i,r,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-99171b64.d64f630b.js.map