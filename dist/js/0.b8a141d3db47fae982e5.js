(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,i,e){},156:function(t,i,e){},157:function(t,i,e){"use strict";e.r(i);var n=e(7),s=e.n(n),a=e(17),r=e.n(a),o=e(24),c=e.n(o),h=document.documentElement.clientWidth,l=window.navigator.appVersion.match(/iphone/gi)?Math.floor(window.devicePixelRatio):1,u={name:"banner",data:function(){return{initialItems:[],items:["static/img/banner1.jpg","static/img/banner2.jpg","static/img/banner3.jpg"],curItemIndex:0,curPaginationIndex:0,translateX:0,translateOffset:0,itemSpacing:30,speed:500,interval:3e3,animated:!1,loop:!0,startTime:0,startX:0,startY:0,offsetX:0}},computed:{bannerWrapperSize:function(){return h*l}},created:function(){this.initBanner()},mounted:function(){var t=this;setInterval(function(){t.play()},this.interval)},methods:{initBanner:function(){var t=this.items,i=t[0],e=t[t.length-1];if(this.loop){this.items.push(i),this.items.unshift(e),this.speed=0,this.translateOffset=(this.bannerWrapperSize+this.itemSpacing)*(this.curItemIndex+1),this.translateX=this.translateOffset;var n=!0,s=!1,a=void 0;try{for(var o,h=r()(t.entries());!(n=(o=h.next()).done);n=!0){var l=o.value,u=c()(l,2),d=u[0],m=u[1];0!==d&&d!==t.length-1&&this.initialItems.push(m)}}catch(t){s=!0,a=t}finally{try{!n&&h.return&&h.return()}finally{if(s)throw a}}}else{var f=!0,p=!1,g=void 0;try{for(var I,v=r()(t);!(f=(I=v.next()).done);f=!0){var x=I.value;this.initialItems.push(x)}}catch(t){p=!0,g=t}finally{try{!f&&v.return&&v.return()}finally{if(p)throw g}}}},touchstart:function(t){this.startTime=(new Date).getTime(),this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY},touchmove:function(t){if(!this.animated){var i=t.targetTouches[0].pageX;this.offsetX=i-this.startX,this.speed=0,this.translateX=-this.offsetX+(this.bannerWrapperSize+this.itemSpacing)*this.curItemIndex+this.translateOffset}},touchend:function(t){var i=(new Date).getTime()-this.startTime<=500?50:this.bannerWrapperSize/2;this.offsetX>=i?this.play("prev"):this.offsetX<-i?this.play():this.translate(this.curItemIndex)},play:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";if(!this.animated){var i=this.items.length;"next"===t?this.curItemIndex++:this.curItemIndex--,!this.loop&&this.curItemIndex>i-1?this.curItemIndex=0:!this.loop&&this.curItemIndex<0&&(this.curItemIndex=i-1),this.translate(this.curItemIndex)}},translate:function(t){this.animated=!0,this.speed=500,this.translateX=(this.bannerWrapperSize+this.itemSpacing)*t+this.translateOffset,this.setPagination(t)},setPagination:function(t){var i=this.initialItems.length;this.curPaginationIndex=t,this.loop&&t<0?this.curPaginationIndex=i-1:this.loop&&t===i&&(this.curPaginationIndex=0)},transitionend:function(){this.offsetX=0,this.speed=0,this.animated=!1;var t=this.items.length;this.loop&&(this.curItemIndex>=t-2?this.curItemIndex=0:-1===this.curItemIndex&&(this.curItemIndex=t-3),this.translateX=(this.bannerWrapperSize+this.itemSpacing)*this.curItemIndex+this.translateOffset)}}},d=e(4),m=Object(d.a)(u,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"banner",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[e("div",{ref:"bannerWrapper",staticClass:"banner-wrapper",style:{transform:"translateX(-"+t.translateX+"px)",transitionDuration:t.speed+"ms"},on:{transitionend:t.transitionend}},t._l(t.items,function(i){return e("div",{staticClass:"banner-item",style:{marginRight:t.itemSpacing+"px"}},[e("img",{attrs:{src:i,width:"100%"}})])})),t._v(" "),t.initialItems.length>0?e("div",{staticClass:"banner-pagination"},t._l(t.initialItems,function(i,n){return e("span",{class:{active:t.curPaginationIndex===n},on:{click:function(i){t.translate(n)}}})})):t._e()])},[],!1,function(t){e(154)},null,null).exports,f=e(1),p={name:"list",data:function(){return{songList:[],page:1,totalPage:0,allLoaded:!1,isLoading:!1}},computed:s()({},Object(f.mapState)(["curPlayIndex","view","isPlayed"]),{routerPath:function(){return this.$route.path.slice(1)}}),created:function(){this.getList()},mounted:function(){var t=this;document.onscroll=null,document.onscroll=function(){"search"===t.routerPath&&t.scrollLoad()}},watch:{$route:"getList"},methods:{getList:function(){var t=this,i=this.routerPath;this.$Indicator.open("加载中..."),"search"===i?(this.songList=[],this.searchList()):this.api.getList(i).then(function(i){200===i.status&&"OK"===i.statusText?(t.songList=i.data.data.slice(0)||[],t.$Indicator.close()):(t.songList=[],t.$Toast({message:"获取歌曲列表失败",duration:3}))}).catch(function(i){t.$Indicator.close(),t.$Toast("网络出现错误或服务暂时不可用")})},searchList:function(){var t=this,i=this.page,e=this.$route.query.keyword;this.isLoading=!0,this.$Indicator.open("加载中..."),this.api.getSongInfo(e,i).then(function(i){var e=i.data.data;if(200===i.status&&"OK"===i.statusText){var n=e.total;t.totalPage=Math.ceil(n/20);var s=t.songList.slice(0),a=e.lists.map(function(t){return{SingerName:t.SingerName,SongName:t.SongName,FileName:t.FileName}});t.isLoading=!1,t.$Indicator.close(),t.songList=s.concat(a),t.$store.commit("setSearchCount",n)}}).catch(function(i){t.$Indicator.close(),t.$Toast("网络出现错误或服务暂时不可用")})},play:function(t){var i=this.routerPath,e=this.songList;this.$store.commit("setView",i),this.$store.commit("setSongList",e),this.$store.commit("setCurPlayIndex",t),this.$store.dispatch("playSong")},scrollLoad:function(){if(!this.isLoading&&!this.allLoaded){var t=document.documentElement,i=t.scrollTop;t.scrollHeight-i-t.clientHeight<=100&&(this.page<this.totalPage?(this.page++,this.searchList()):(this.allLoaded=!0,this.$Toast("已加载全部数据！")))}}},components:{banner:m}},g=Object(d.a)(p,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},["new"===t.routerPath?e("banner"):t._e(),t._v(" "),e("div",{staticClass:"list",class:[t.routerPath+"-songList",{noSongData:0===t.songList.length}]},[t.songList.length>0?e("ul",t._l(t.songList,function(i,n){return e("li",{class:{active:t.view===t.routerPath&&n===t.curPlayIndex&&t.isPlayed},on:{click:function(i){t.play(n)}}},[e("p",{staticClass:"filename"},[t._v(t._s(i.FileName))])])})):e("p",[t._v("暂无数据！")])])],1)},[],!1,function(t){e(156)},null,null);i.default=g.exports}}]);