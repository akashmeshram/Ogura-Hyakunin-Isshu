(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"0wJt":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));a("0mN4"),a("KKXr");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),l=a.n(s),o=a("Bl7J"),d=a("lh28"),u=a.n(d);t.default=function(e){var t=e.data,a=e.pageContext,r=t.poemsDataJson,s=a.previous,d=a.next,c=r.list_full_en.split("//").map((function(e,t){return i.a.createElement("span",{key:t},e," ",i.a.createElement("br",null))})),f=r.list_full_romaji.split("|").map((function(e,t){return i.a.createElement("span",{key:t},e," ",i.a.createElement("br",null))}));return i.a.createElement(o.a,null,i.a.createElement("h1",null,r.id),i.a.createElement("h2",null,r.author),i.a.createElement("h3",null,r.author_romaji),i.a.createElement("div",{className:u.a.contents},i.a.createElement(l.a,{className:u.a.poet,fixed:t.file.childImageSharp.fixed,alt:r.author_en}),i.a.createElement("div",{className:u.a.poems},i.a.createElement("p",{className:u.a.rom},f),i.a.createElement("p",{className:u.a.eng},c))),i.a.createElement("div",{className:u.a.pnav},s&&i.a.createElement(n.Link,{to:s.fields.slug,rel:"prev"}," ",i.a.createElement("button",null,"← Prev")," "),d&&i.a.createElement(n.Link,{to:d.fields.slug,rel:"next"}," ",i.a.createElement("button",null,"Next →")," ")),i.a.createElement(n.Link,{to:"/",rel:"next",className:u.a.home}," ",i.a.createElement("button",null,"Home")," "))};var c="2632963561"},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(R,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,O=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:z?1:0,transition:k?"opacity "+y+"ms":"none"},l),C="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},q=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&P,{},l,{},f),T={title:t,alt:this.state.isVisible?"":a,style:q,className:g,itemProp:S};if(m){var H=m,j=p(m);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&P)}),j.base64&&d.default.createElement(V,{ariaHidden:!0,src:j.base64,spreadProps:T,imageVariants:H,generateSources:I}),j.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:j.tracedSVG,spreadProps:T,imageVariants:H,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(H),d.default.createElement(R,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:H}))}}))}if(h){var _=h,G=p(h),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},k&&P)}),G.base64&&d.default.createElement(V,{ariaHidden:!0,src:G.base64,spreadProps:T,imageVariants:_,generateSources:I}),G.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:G.tracedSVG,spreadProps:T,imageVariants:_,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(_),d.default.createElement(R,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},G,{imageVariants:_}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});k.propTypes={resolutions:x,sizes:C,fixed:u.default.oneOfType([x,u.default.arrayOf(x)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=k;t.default=P},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement("h1",null,"Ogura Hyakunin Isshu"),t,i.a.createElement("h5",null,"Made by Akash Meshram"))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-poem-post-js-d0d4a451e5c1776ce3b8.js.map