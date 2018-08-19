webpackJsonp([2,18],{332:function(n,e,t){var a=t(347);"string"===typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0};r.transform=void 0;t(7)(a,r);a.locals&&(n.exports=a.locals)},338:function(n,e,t){"use strict";function a(n){return o.a.createElement("h4",{className:"minor-title"},n.children)}e.a=a;var r=t(0),o=t.n(r),i=t(339);t.n(i)},339:function(n,e,t){var a=t(340);"string"===typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0};r.transform=void 0;t(7)(a,r);a.locals&&(n.exports=a.locals)},340:function(n,e,t){e=n.exports=t(6)(void 0),e.push([n.i,".minor-title {\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n",""])},344:function(n,e,t){"use strict";function a(n){var e=n.tracks,t=n.isShowAr,a=void 0===t||t;return l.a.createElement("div",{className:"songList"},l.a.createElement("p",{className:"play-all-btn"},"\u64ad\u653e\u5168\u90e8(",e.length,")"),l.a.createElement("ul",{className:"container"},e.map(function(e,t){return l.a.createElement("li",{className:"item",key:e.id},l.a.createElement("div",{className:"section-one"},l.a.createElement("span",{className:"index"},Object(p.d)(t)),l.a.createElement("span",{className:"name"},e.name)),l.a.createElement("div",{className:"section-two"},l.a.createElement(i.a,{type:"plus",onClick:function(){return n.addSong2Que(e)}}),l.a.createElement(i.a,{type:"play-circle-o",onClick:function(){return n.playSong2Que(e)}}),a?d(e):null),l.a.createElement("span",{className:"album"},e.album?e.album.name:e.al.name),l.a.createElement("span",{className:"duration"},Object(p.b)(e.duration||e.dt)))})))}var r=t(15),o=(t.n(r),t(10)),i=t.n(o),s=t(0),l=t.n(s),c=t(8),m=t(21),f=t(36),p=t(146),u=t(345),d=(t.n(u),function(n){var e=n.artists||n.ar;return l.a.createElement("div",{className:"artist"},e.map(function(n){return l.a.createElement(c.a,{key:n.name,to:{pathname:"/artistinfo/"+n.id}}," ",n.name)}))}),g=function(){return{state:null}},h={addSong2Que:f.a,playSong2Que:f.h};e.a=Object(m.connect)(g,h)(a)},345:function(n,e,t){var a=t(346);"string"===typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0};r.transform=void 0;t(7)(a,r);a.locals&&(n.exports=a.locals)},346:function(n,e,t){e=n.exports=t(6)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songList .play-all-btn {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 12px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.songList .container {\n  font-size: 12px;\n  color: #b0b0b1;\n  text-align: left;\n}\n.songList .item {\n  display: flex;\n  height: 45px;\n  line-height: 45px;\n  padding-left: 15px;\n}\n.songList .item:nth-child(odd) {\n  background-color: #f4f4f6;\n}\n.songList .item:nth-child(even) {\n  background-color: #fafafc;\n}\n.songList .section-one,\n.songList .section-two {\n  flex: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.songList .section-one > i,\n.songList .section-two > i {\n  margin: 0 12px;\n}\n.songList .index,\n.songList .name {\n  color: #333;\n  margin-right: 8px;\n}\n.songList .artist {\n  display: inline-block;\n}\n.songList .album {\n  flex: 2;\n}\n.songList .duration {\n  flex: 1;\n}\n",""])},347:function(n,e,t){e=n.exports=t(6)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.artist-info {\n  margin: 20px 30px;\n}\n.artist-info .ar-header {\n  display: flex;\n  margin-bottom: 40px;\n}\n.artist-info .avatar {\n  flex: 0 0 200px;\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n  position: relative;\n}\n.artist-info .avatar > img {\n  width: 100%;\n  height: 100%;\n}\n.artist-info .num {\n  flex: 1;\n  margin-top: 4px;\n  padding: 10px;\n}\n.artist-info .num .name {\n  font-size: 18px;\n  margin-bottom: 45px;\n}\n.artist-info .num > span {\n  display: block;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n}\n.artist-info .desc {\n  flex: 6;\n  font-size: 14px;\n  line-height: 25px;\n  padding-top: 40px;\n}\n",""])},61:function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return x});var i,s,l=t(0),c=t.n(l),m=t(21),f=t(344),p=t(338),u=t(62),d=t(332),g=(t.n(d),function(){function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}()),h=function(n){var e=n.artist,t=e.img1v1Url,a=e.name,r=e.musicSize,o=e.albumSize,i=e.mvSize,s=e.briefDesc;return c.a.createElement("div",{className:"ar-header"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:t,alt:"artist-avatar"})),c.a.createElement("div",{className:"num"},c.a.createElement("span",{className:"name"},a),c.a.createElement("span",null,c.a.createElement("i",{className:"icon-music"}),"\u6b4c\u66f2\u6570:",r),c.a.createElement("span",null,c.a.createElement("i",{className:"icon-shocked"}),"\u4e13\u8f91\u6570:",o),c.a.createElement("span",null,c.a.createElement("i",{className:"icon-film"}),"MV\u6570:",i)),c.a.createElement("div",{className:"desc"},c.a.createElement("p",null,s)))},v=function(n){if(!n)return null;var e=n.artist,t=n.hotSongs;return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,null,"\u6b4c\u624b\u4fe1\u606f"),c.a.createElement(h,{artist:e}),c.a.createElement(f.a,{tracks:t,isShowAr:!1}))},x=(i=Object(m.connect)(function(n){return{artistInfo:n.artistInfo}},{getArtistInfoEffect:u.getArtistInfoEffect}))(s=function(n){function e(){return a(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,n),g(e,[{key:"componentDidMount",value:function(){var n=this.props.match.params.id;this.props.getArtistInfoEffect(n)}},{key:"componentWillReceiveProps",value:function(n){var e=n.match.params.id;e!==this.props.match.params.id&&n.getArtistInfoEffect(e)}},{key:"render",value:function(){var n=this.props.artistInfo.data;return c.a.createElement("div",{className:"artist-info"},v(n))}}]),e}(l.Component))||s}});
//# sourceMappingURL=2.dbf2d5bc.chunk.js.map