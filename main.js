(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/leaflet/dist/leaflet.css ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n\r\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\ttransform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\ttransition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\ttransform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9COztBQUVwQjs7Ozs7Ozs7OztDQVVDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOOztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNEOzs7Q0FHQyx5QkFBeUI7SUFDdEIsc0JBQXNCO1NBQ2pCLHFCQUFpQjtLQUFqQixpQkFBaUI7R0FDdkIsdUJBQXVCO0NBQ3pCOztBQUNELGtEQUFrRDs7QUFDbEQ7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRkE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBQ0EsbUZBQW1GOztBQUNuRjtDQUNDLDBDQUEwQztDQUMxQzs7QUFDRCxxRUFBcUU7O0FBQ3JFO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0I7O0FBQ0Q7O0NBRUMsY0FBYztDQUNkOztBQUNELGdHQUFnRzs7QUFDaEcscUZBQXFGOztBQUNyRjs7Ozs7O0NBTUMsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQjs7QUFFRDtDQUVDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUVDLHFEQUFxRDtDQUNyRCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCOztBQUNBO0NBRUMsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUNBO0NBQ0Msb0RBQW9EO0FBQ3JEOztBQUNBO0NBQ0MsdUJBQWU7U0FBZixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsUUFBUTtDQUNSLFNBQVM7Q0FFSixzQkFBc0I7Q0FDM0IsWUFBWTtDQUNaOztBQUNELHVFQUF1RTs7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsMEJBQTBCLFlBQVksRUFBRTs7QUFDeEMsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsMkJBQTJCLFlBQVksRUFBRTs7QUFDekMsMkJBQTJCLFlBQVksRUFBRTs7QUFFekM7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYOztBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEI7O0FBR0Qsd0JBQXdCOztBQUV4QjtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osOEJBQThCLEVBQUUsOEJBQThCO0NBQzlELG9CQUFvQjtDQUNwQjs7QUFDRDs7Q0FFQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLE1BQU07Q0FDTjs7QUFDRDtDQUNDLFFBQVE7Q0FDUjs7QUFDRDtDQUNDLFNBQVM7Q0FDVDs7QUFDRDtDQUNDLE9BQU87Q0FDUDs7QUFDRDtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1g7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBR0QsNkJBQTZCOztBQUU3QjtDQUNDLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLFVBQVU7Q0FHRiwrQkFBK0I7Q0FDdkM7O0FBQ0Q7Q0FDQyxVQUFVO0NBQ1Y7O0FBQ0Q7Q0FHUyxxQkFBcUI7Q0FDN0I7O0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBQ0Q7Q0FHUyw0REFBNEQ7Q0FDcEU7O0FBQ0Q7O0NBSVMsZ0JBQWdCO0NBQ3hCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUdELFlBQVk7O0FBRVo7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FFcEIsb0JBQW9CO0NBQ3BCOztBQUNEOztDQUVDLGlCQUFpQjtDQUNqQjs7QUFDRDs7Q0FFQyxZQUFZO0NBQ1o7O0FBQ0Q7OztDQUdDLFlBQVk7Q0FDWix3QkFBd0I7Q0FFeEIsd0JBQXdCO0NBQ3hCOztBQUVELG9DQUFvQzs7QUFDcEM7Ozs7O0NBS0Msb0JBQW9CO0NBQ3BCOztBQUVEOzs7O0NBSUMsOEJBQThCLEVBQUUsOEJBQThCO0NBQzlELG9CQUFvQjtDQUNwQjs7QUFFRCxrQkFBa0I7O0FBRWxCO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVjs7QUFDRDtDQUNDLGNBQWM7Q0FDZDs7QUFDRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixpQ0FBaUM7Q0FDakM7O0FBR0QsdUJBQXVCOztBQUN2QjtDQUNDLDZEQUE2RDtDQUM3RDs7QUFHRCwyQkFBMkI7O0FBRTNCO0NBQ0Msc0NBQXNDO0NBQ3RDLGtCQUFrQjtDQUNsQjs7QUFDRDs7Q0FFQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWjs7QUFDRDs7Q0FFQyw0QkFBNEI7Q0FDNUIsNEJBQTRCO0NBQzVCLGNBQWM7Q0FDZDs7QUFDRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUI7O0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9CLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsV0FBVztDQUNYOztBQUVEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCOztBQUNEO0NBQ0MsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQjs7QUFFRCxpQkFBaUI7O0FBRWpCOztDQUVDLG1EQUFtRDtDQUNuRCxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBR0QsbUJBQW1COztBQUVuQjtDQUNDLHFDQUFxQztDQUNyQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsbUNBQXdDO0NBQ3hDLFdBQVc7Q0FDWCxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxzQ0FBMkM7Q0FDM0MsMEJBQTBCO0NBQzFCOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWjs7QUFDRDs7Q0FFQyxhQUFhO0NBQ2I7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MsU0FBUztDQUNULDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBRUQsc0JBQXNCOztBQUN0QjtDQUNDLHdDQUE2QztDQUM3Qzs7QUFHRCxtQ0FBbUM7O0FBRW5DO0NBQ0MsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxTQUFTO0NBQ1Q7O0FBQ0Q7O0NBRUMsY0FBYztDQUNkLFdBQVc7Q0FDWDs7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQjs7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjs7QUFDRDs7Q0FFQyxlQUFlO0NBQ2Y7O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FFWCxzQkFBc0I7O0NBRTNCLGdCQUFnQjtDQUNoQixvQ0FBb0M7Q0FDcEM7O0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLDZCQUE2QjtDQUM3Qjs7QUFFRDs7O0NBR0MsZ0JBQWdCO0NBQ2hCOztBQUNEOztDQUVDLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUI7O0FBR0QsVUFBVTs7QUFFVjtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLG9CQUFvQjtDQUtaLHdCQUF3QjtDQUNoQzs7QUFDRDs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLHNDQUFzQztDQUN0Qzs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtDQUNSLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMkNBQTJDO0NBQzNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qjs7QUFDRDtDQUNDLFdBQVc7Q0FDWDs7QUFDRDtDQUNDLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsT0FBTztDQUNQOztBQUNEO0NBQ0MsV0FBVztDQUNYLGNBQWM7O0NBRWQsdUhBQXVIO0NBQ3ZILGlIQUFpSDtDQUNqSDs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDs7OztDQUlDLHNCQUFzQjtDQUN0Qjs7QUFHRCxhQUFhOztBQUViO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qjs7QUFHRCxZQUFZOztBQUNaLG1EQUFtRDs7QUFDbkQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixxQ0FBcUM7Q0FDckM7O0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCOztBQUNEOzs7O0NBSUMsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWDs7QUFFRCxlQUFlOztBQUVmO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCOztBQUNEO0NBQ0MsU0FBUztDQUNULG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEI7O0FBQ0Q7Q0FDQyxNQUFNO0NBQ04saUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekI7O0FBQ0Q7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLFFBQVE7Q0FDUixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCOztBQUNEO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJlcXVpcmVkIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtcGFuZSxcclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnLFxyXG4ubGVhZmxldC1wYW5lID4gY2FudmFzLFxyXG4ubGVhZmxldC16b29tLWJveCxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWxheWVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHR9XHJcbi8qIFByZXZlbnRzIElFMTEgZnJvbSBoaWdobGlnaHRpbmcgdGlsZXMgaW4gYmx1ZSAqL1xyXG4ubGVhZmxldC10aWxlOjpzZWxlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIFNhZmFyaSByZW5kZXJzIG5vbi1yZXRpbmEgdGlsZSBvbiByZXRpbmEgYmV0dGVyIHdpdGggdGhpcywgYnV0IENocm9tZSBpcyB3b3JzZSAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZSB7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG5cdH1cclxuLyogaGFjayB0aGF0IHByZXZlbnRzIGh3IGxheWVycyBcInN0cmV0Y2hpbmdcIiB3aGVuIGxvYWRpbmcgbmV3IHRpbGVzICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDE2MDBweDtcclxuXHRoZWlnaHQ6IDE2MDBweDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBzdmc6IHJlc2V0IHN2ZyBtYXgtd2lkdGggZGVjbGVyYXRpb24gc2hpcHBlZCBpbiBKb29tbGEhIChqb29tbGEub3JnKSAzLnggKi9cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIGltZzogbWFwIGlzIGJyb2tlbiBpbiBGRiBpZiB5b3UgaGF2ZSBtYXgtd2lkdGg6IDEwMCUgb24gdGlsZXMgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1tYXJrZXItcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1zaGFkb3ctcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgaW1nLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlIHtcclxuXHRtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcblx0LyogRmFsbGJhY2sgZm9yIEZGIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBwaW5jaC16b29tICovXHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xyXG59XHJcbi5sZWFmbGV0LXRpbGUge1xyXG5cdGZpbHRlcjogaW5oZXJpdDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLWxvYWRlZCB7XHJcblx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0fVxyXG4vKiB3b3JrYXJvdW5kIGZvciBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgzMTkgKi9cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyB7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1wYW5lICAgICAgICAgeyB6LWluZGV4OiA0MDA7IH1cclxuXHJcbi5sZWFmbGV0LXRpbGUtcGFuZSAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgeyB6LWluZGV4OiA0MDA7IH1cclxuLmxlYWZsZXQtc2hhZG93LXBhbmUgIHsgei1pbmRleDogNTAwOyB9XHJcbi5sZWFmbGV0LW1hcmtlci1wYW5lICB7IHotaW5kZXg6IDYwMDsgfVxyXG4ubGVhZmxldC10b29sdGlwLXBhbmUgICB7IHotaW5kZXg6IDY1MDsgfVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lICAgeyB6LWluZGV4OiA3MDA7IH1cclxuXHJcbi5sZWFmbGV0LW1hcC1wYW5lIGNhbnZhcyB7IHotaW5kZXg6IDEwMDsgfVxyXG4ubGVhZmxldC1tYXAtcGFuZSBzdmcgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuXHJcbi5sZWFmbGV0LXZtbC1zaGFwZSB7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR9XHJcbi5sdm1sIHtcclxuXHRiZWhhdmlvcjogdXJsKCNkZWZhdWx0I1ZNTCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cclxuLyogY29udHJvbCBwb3NpdGlvbmluZyAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCxcclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAwMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IHtcclxuXHRsZWZ0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG4ubGVhZmxldC10b3AgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cclxuLyogem9vbSBhbmQgZmFkZSBhbmltYXRpb25zICovXHJcblxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtbWFwLXBhbmUgLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogICAgLW1vei10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LXBhbi1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWhpZGUge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cclxuLyogY3Vyc29ycyAqL1xyXG5cclxuLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbi5sZWFmbGV0LWdyYWIge1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiO1xyXG5cdH1cclxuLmxlYWZsZXQtY3Jvc3NoYWlyLFxyXG4ubGVhZmxldC1jcm9zc2hhaXIgLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogY3Jvc3NoYWlyO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSxcclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0Y3Vyc29yOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYixcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYiAubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtbWFya2VyLWRyYWdnYWJsZSB7XHJcblx0Y3Vyc29yOiBtb3ZlO1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAgICAgIGdyYWJiaW5nO1xyXG5cdH1cclxuXHJcbi8qIG1hcmtlciAmIG92ZXJsYXlzIGludGVyYWN0aXZpdHkgKi9cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgsXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1pbWFnZS1sYXllci5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuc3ZnLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSBwYXRoIHtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcblxyXG4vKiB2aXN1YWwgdHdlYWtzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQ6ICNkZGQ7XHJcblx0b3V0bGluZTogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHRjb2xvcjogIzAwNzhBODtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtYWN0aXZlIHtcclxuXHRvdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1ib3gge1xyXG5cdGJvcmRlcjogMnB4IGRvdHRlZCAjMzhmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0eXBvZ3JhcGh5ICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0Zm9udDogMTJweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHRvb2xiYXIgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR3aWR0aDogMjZweDtcclxuXHRoZWlnaHQ6IDI2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYS5sZWFmbGV0LWRpc2FibGVkIHtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYSB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG5cclxuLyogem9vbSBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLXpvb20taW4sXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQge1xyXG5cdGZvbnQ6IGJvbGQgMThweCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuXHR0ZXh0LWluZGVudDogMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbiwgLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLW91dCAge1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHR9XHJcblxyXG5cclxuLyogbGF5ZXJzIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy5wbmcpO1xyXG5cdHdpZHRoOiAzNnB4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJldGluYSAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLTJ4LnBuZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdHdpZHRoOiA0NHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3QsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIHtcclxuXHRwYWRkaW5nOiA2cHggMTBweCA2cHggNnB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zY3JvbGxiYXIge1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VsZWN0b3Ige1xyXG5cdG1hcmdpbi10b3A6IDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAxcHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZXBhcmF0b3Ige1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHRtYXJnaW46IDVweCAtMTBweCA1cHggLTZweDtcclxuXHR9XHJcblxyXG4vKiBEZWZhdWx0IGljb24gVVJMcyAqL1xyXG4ubGVhZmxldC1kZWZhdWx0LWljb24tcGF0aCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9tYXJrZXItaWNvbi5wbmcpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBhdHRyaWJ1dGlvbiBhbmQgc2NhbGUgY29udHJvbHMgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHRtYXJnaW46IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci10b3A6IG5vbmU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRwYWRkaW5nOiAycHggNXB4IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuXHRib3JkZXItdG9wOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3Nzc7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdH1cclxuXHJcblxyXG4vKiBwb3B1cCAqL1xyXG5cclxuLmxlYWZsZXQtcG9wdXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTNweCAxOXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG5cdG1hcmdpbjogMThweCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAxN3B4O1xyXG5cdGhlaWdodDogMTdweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblxyXG5cdG1hcmdpbjogLTEwcHggYXV0byAwO1xyXG5cclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3gtc2hhZG93OiAwIDNweCAxNHB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDRweCA0cHggMCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0aGVpZ2h0OiAxNHB4O1xyXG5cdGZvbnQ6IDE2cHgvMTRweCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICNjM2MzYzM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtc2Nyb2xsZWQge1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0em9vbTogMTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpXCI7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OCk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtem9vbSxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdH1cclxuXHJcblxyXG4vKiBkaXYgaWNvbiAqL1xyXG5cclxuLmxlYWZsZXQtZGl2LWljb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHR9XHJcblxyXG5cclxuLyogVG9vbHRpcCAqL1xyXG4vKiBCYXNlIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSB0b29sdGlwICovXHJcbi5sZWFmbGV0LXRvb2x0aXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogIzIyMjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAubGVhZmxldC1jbGlja2FibGUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0fVxyXG5cclxuLyogRGlyZWN0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b20ge1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXRvcCB7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRib3R0b206IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogLTEycHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSB7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQge1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlIHtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./leaflet.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\r\n  <a class=\"navbar-brand\" routerLink=\"\"><img src=\"assets/icons/vertigo_logo.svg\" height=\"32px\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"\">File Loader</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/bluetooth\">Bluetooth</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/instructions\">Instructions</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" routerLink=\"\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Tutorials\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/pendulum\">Pendulum</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/circularmotion\">Circular Motion</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/velocity-time\">Velocity/time</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/trampoline\">Trampoline</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/loader/loader.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/loader/loader.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"input-group\">\r\n        <div class=\"custom-file\">\r\n            <input #fileInput id=\"fileselector\" class=\"custom-file-input\" (change)=\"triggerFile(fileInput)\" type=\"file\">\r\n            <label class=\"custom-file-label\" for=\"fileselector\" size=\"60\">Choose file...</label>\r\n        </div>\r\n        <div class=\"input-group-append\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\"\r\n                (click)=\"toggleTrimControls()\">Trim</button>\r\n        </div>\r\n    </div>\r\n    <app-trim-slider  *ngIf=\"showtrim\" [data]=\"vertigoPreviewData\" (scaled)=\"trim($event)\"></app-trim-slider>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/processor/processor.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/processor/processor.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown w-100\">\r\n    <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">Options</label>\r\n        </div>\r\n        <select class=\"custom-select\" id=\"inputGroupSelect01\" [(ngModel)]=\"SelectedValue\" size=\"5\"\r\n            (change)=\"selectionChanged($event.target.selectedOptions)\">\r\n            <option *ngFor=\"let type of Dataspec.Types\" label=\"{{type.Name}}\" value=\"{{type.Id}}\">{{type.Name}}\r\n            </option>\r\n        </select>\r\n        <select class=\"custom-select\" id=\"processingmethod2\" [(ngModel)]=\"SelectedValue2\" size=\"5\"\r\n        (change)=\"processingSelectionChanged($event.target.selectedOptions)\">\r\n            <option *ngFor=\"let type of ProcessingMethods\" label=\"{{type.Name}}\" value=\"{{type.Name}}\">\r\n                {{type.Name}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n    <div *ngIf=\"Params\">\r\n        <div *ngFor=\"let param of Params\" class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" id=\"{{param.Name}}\">{{param.Name}}</span>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"{{param.Value}}\" [(ngModel)]=\"param.Value\">\r\n              </div>\r\n            \r\n    </div>\r\n    <button (click)=\"process()\" class=\"btn btn-success w-100\">Process</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tab/tab.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tab/tab.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"active\" class=\"pane\">\n    <ng-content></ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tabs/tabs.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tabs/tabs.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-tabs\">\n    <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"nav-item\" [class.active]=\"tab.active\">\n        <a href=\"javascript:void(0)\" class=\"nav-link\">{{tab.title}}</a>\n    </li>\n</ul>\n<ng-content></ng-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/trim-slider/trim-slider.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/trim-slider/trim-slider.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width:100%; height:100px\">\r\n    <plotly-plot [data]=\"GraphData\" [layout]=\"layout\" [useResizeHandler]=\"true\" [style]=\"{position: 'relative', width: '100%', height: '100%'}\" (relayout)=\"handleRelayout($event)\"></plotly-plot>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/datagraph/datagraph.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/datagraph/datagraph.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100\" style=\"min-height: 400px;\">\r\n    <plotly-plot #plot [data]=\"GraphData\" [layout]=\"layout\" [config]=\"config\" [useResizeHandler]=\"true\" (afterPlot)=\"onPlot()\"></plotly-plot>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control-selection/graph-control-selection.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control-selection/graph-control-selection.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<selector (SelectionChanged)=\"seriesChanged($event)\"></selector>\r\n<graph-control [RawData]=\"VertigoRawData\" [ProcessedData]=\"VertigoProcessedData\" [SelectedSeries]=\"SelectedSeries\"></graph-control>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control/graph-control.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control/graph-control.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<data-graph [InputData]=\"GraphData\" (afterPlot)=\"onRender()\"></data-graph>         ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/selector/selector.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/selector/selector.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown w-100\">\r\n  <button class=\"btn btn-secondary dropdown-toggle w-100\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Options\r\n  </button>\r\n  <div class=\"dropdown-menu w-100\" aria-labelledby=\"dropdownMenuButton\">\r\n    <div class=\"input-group\">\r\n      <div class=\"input-group-prepend\">\r\n        <label class=\"input-group-text\" for=\"inputGroupSelect01\">Options</label>\r\n      </div>\r\n      <select multiple class=\"custom-select\" id=\"inputGroupSelect01\" [(ngModel)]=\"SelectedValue\" size=\"10\"\r\n        (change)=\"selectionChanged($event.target.selectedOptions)\">\r\n        <option value=\"time\" selected>Time (Seconds)</option>\r\n        <optgroup *ngFor=\"let type of Dataspec.Types\" label=\"{{type.Name}}\">\r\n          <option *ngFor=\"let column of type.Columns\" value=\"{{type.Id}},{{column.Id}}\">{{column.Name}}</option>\r\n        </optgroup>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/livemap/livemap.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/livemap/livemap.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #map leaflet [leafletOptions]=\"options\" [leafletLayers]=\"layers\" [leafletLayersControl]=\"layersControl\" style=\"min-height: 400px; height: 100%;\" (leafletMapReady)=\"onMapReady($event)\" ></div>\r\n<button (click)=\"reload()\" type=\"button\" class=\"btn btn-dark w-100\">Refresh Map</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-12\">\r\n      <app-tabs style=\"margin-bottom: 500px; min-height: 500px;\">\r\n        <app-tab [tabTitle]=\"'Graph'\">\r\n          <graph-control-selection [VertigoRawData]=\"VertigoRawData\" ></graph-control-selection>\r\n        </app-tab>\r\n        <app-tab [tabTitle]=\"'Map'\" (selected)=\"map.reload()\">\r\n          <live-map #map [RawData]=\"VertigoRawData\" [lat]=\"lat\" [lon]=\"lon\"></live-map>\r\n        </app-tab>\r\n        <app-tab [tabTitle]=\"'3D View'\" (selected)=\"orientation.resizeCanvasToDisplaySize()\">\r\n          <app-orientation #orientation [Quat]=\"quat\" [Accel]=\"accel\"></app-orientation>\r\n        </app-tab>\r\n      </app-tabs>\r\n      <br/>\r\n      <br/>\r\n      <app-tabs style=\"margin-bottom: 500px; min-height: 500px;\">\r\n          <app-tab [tabTitle]=\"'Acceleration'\">\r\n                  <div><span><b>X: </b><span>{{ accx | number:'.5' }}</span> m/s<sup>2</sup></span></div>\r\n                  <div><span><b>Y: </b><span>{{ accy | number:'.5'}}</span> m/s<sup>2</sup></span></div>\r\n                  <div><span><b>Z: </b><span>{{ accz | number:'.5'}}</span> m/s<sup>2</sup></span></div>\r\n                  <div><span><b>Absolute Magnitude: </b><span>{{ acc2 | number:'.5'}}</span> m/s<sup>2</sup></span></div>\r\n          </app-tab>\r\n          <app-tab [tabTitle]=\"'Rotational Velocity'\">\r\n              <div><span><b>X: </b><span>{{ rotx | number:'.0'}}</span>°/s</span></div>\r\n              <div><span><b>Y: </b><span>{{ roty | number:'.0'}}</span>°/s</span></div>\r\n              <div><span><b>Z: </b><span>{{ rotz | number:'.0'}}</span>°/s</span></div>\r\n          </app-tab>\r\n          <app-tab [tabTitle]=\"'Location'\">\r\n              <div><span><b>Latitude: </b><span>{{lat| number:'.8'}}</span> Degrees</span></div>\r\n              <div><span><b>Longitude: </b><span>{{lon| number:'.8'}}</span> Degrees</span></div>\r\n              <div><span><b>Altitude: </b><span>{{alt| number:'.2'}}</span> m</span></div>\r\n              <div><span><b>Fix: </b><span>{{fix}}</span></span><span><b>  Flags: </b><span>{{flags}}</span></span></div>\r\n          </app-tab>\r\n          <app-tab [tabTitle]=\"'Atmospheric'\">\r\n            <div><span><b>Temperature: </b><span>{{temp| number:'.2'}}</span> °C</span></div>\r\n            <div><span><b>Pressure: </b><span>{{press| number:'.2'}}</span> kPa</span></div>\r\n            <div><span><b>Humidity: </b><span>{{humidity| number:'.2'}}</span> %</span></div>\r\n        </app-tab>\r\n          <app-tab [tabTitle]=\"'Status'\">\r\n              <div><span><b>Firmware version:</b> {{versionNumber}}</span></div>\r\n              <div><span><b>Serial Number:</b> {{serialNumber}}</span></div>\r\n              <div><span><b>Logger State:</b> {{loggerState}}</span></div>\r\n              <div><span><b>IMU State:</b> {{imuState}}</span></div>\r\n              <div><span><b>GPS State:</b> {{gpsState}}</span></div>\r\n              <div><span><b>Atmospheric Sensor State:</b> {{atmosphericState}}</span></div>\r\n          </app-tab>\r\n         \r\n        </app-tabs>\r\n      \r\n        \r\n      \r\n      <div class=\"row align-items-center no-gutters\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary btn-block\" (click)=\"connect()\"><fa-icon [icon]=\"['fab', 'bluetooth']\"></fa-icon> {{connected ? \"Disconnect\":\"Connect\"}}</button>\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-block\" [disabled]=\"!connected\" (click)=\"startLogging()\"><fa-icon [icon]=\"['fas', 'play']\"></fa-icon> Start Logging</button>\r\n              <button type=\"button\" class=\"btn btn-outline-info btn-block\" [disabled]=\"!connected\" (click)=\"pauseLogging()\"><fa-icon [icon]=\"['fas', 'pause']\"></fa-icon> Pause Browser</button>\r\n              <button type=\"button\" class=\"btn btn-outline-danger btn-block\" [disabled]=\"!connected\" (click)=\"stopLogging()\"><fa-icon [icon]=\"['fas', 'stop']\"></fa-icon> Stop Logging</button>\r\n              <button type=\"button\" class=\"btn btn-outline-info btn-block\" [disabled]=\"!connected\" (click)=\"calibrate()\"><fa-icon [icon]=\"['fas', 'compress-arrows-alt']\"></fa-icon>Calibrate</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circularmotion/circularmotion.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circularmotion/circularmotion.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"circular-motion-1\"><a name=\"Circular\"></a>Circular Motion</h1>\r\n<p>The aim of this lesson is to support pupil understanding of circular motion and in particular centripetal force.\r\nData should be taken outside, although there are options for lab-based experiments. Best outcomes are achieved when a constant radius, uniform speed circle is followed. This may be achieved by a pupil running, a pupil on a bicycle or other suitable vehicle.</p>\r\n<p>The beginner section looks at the speed and velocity of the vertigo unit as it travels in a circle. The data presented in Distance/ time and a s a quiver plot.</p>\r\n<p>The intermediate section looks at the same data but introduces the concept of acceleration.</p>\r\n<p>The advanced section investigates the angle between the acceleration and the Velocity.</p>\r\n<h2 id=\"beginner-2\"><a name=\"BeginnerC\"></a>Beginner</h2>\r\n<h2 id=\"set-up-1\">Set-up</h2>\r\n<p>Suitably attached the Vertigo unit to the person or object that will be travelling in a circle. If possible, vertigo should be placed away from metal parts and be positioned such that its movement is as smooth as practically possible. (The metal may have some ferromagnetism that would affect vertigo’s the onboard magnetometer and any additional oscillatory motion would make pupil analysis more challenging)</p>\r\n<ul>\r\n<li>\r\n<p>Turn Vertigo on and wait for the second LED to stop flashing – Vertigo has a GPS signal.</p>\r\n</li>\r\n<li>\r\n<p>Press the log button and ask the operator to perform circular motion for around 1 minute.\r\nStop Vertigo’s logging.</p>\r\n</li>\r\n</ul>\r\n<h2 id=\"analysis-1\">Analysis</h2>\r\n<ul>\r\n<li>\r\n<p>Remove the sd card from Vertigo and place it into a suitable sd card reader</p>\r\n</li>\r\n<li>\r\n<p>Open the programme matlab</p>\r\n</li>\r\n<li>\r\n<p>The following files must be downloaded into a single folder <a href=\"/vertigo-instructions/Circle_link_files.zip\">Circle_link_files</a></p>\r\n</li>\r\n<li>\r\n<p>In matlab, click the ‘open’ icon located in the top left of the screen, and navigate to the folder that has been downloaded</p>\r\n</li>\r\n<li>\r\n<p>Open the file Circular_lesson1</p>\r\n</li>\r\n<li>\r\n<p>Click run</p>\r\n</li>\r\n</ul>\r\n<p>A graph similar to the one below will appear</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle1.jpg\" alt=\"\" /></p>\r\n<p>This shows how the angle Vertigo was orientated at changed through time. The most important in this instance is Yaw. It shows the angle Vertigo has moved through, around an imaginary vertical axis heading into the Earth. In this graph, it can be seen that Vertigo was travelling with a fairly constant angular velocity. (Notice that to make the graph easier to fit on a scale -180 degrees is converted into 180 degrees)</p>\r\n<p>In the graph, Vertigo completes six full rotations – with a little wobble at 35 seconds.\r\nIn order to keep the data as clean as possible for the pupils, it will is easier to look at one or two rotations only.</p>\r\n<p>The operator will be asked –</p>\r\n<p>“What time do you wish to start analysis from?”\r\nAnd then</p>\r\n<p>“What time do you wish to end the analysis?”</p>\r\n<p>For this data one rotation occurs between 8 and 16 seconds, and two rotations take place between 8 and 23 seconds.</p>\r\n<p>Choosing between 8 and 16 seconds, the following graphs will appear:\r\n<img src=\"https://vertigo.engineering/vertigo-instructions/Circle2.jpg\" alt=\"\" /></p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle4.jpg\" alt=\"\" /></p>\r\n<p>The latter shows the velocity of Vertigo at various positions as it travels in a circle. The critical point here is that the velocity is at a tangent to the direction.</p>\r\n<p>The other graphs show how the speed varies. In this example, the data was taken on a slight slope and so the speed varies accordingly. It should be possible to achieve a fairly constant speed and this could be an activity for the pupils.</p>\r\n<h2 id=\"intermediate-2\"><a name=\"IntermediateC\"></a>Intermediate</h2>\r\n<p>This activity looks to investigate the centripetal acceleration of an object travelling in a circle.</p>\r\n<p>The first method is identical to the Beginner exercise with the addition of a quiver plot which shows acceleration at positions around the circle Vertigo travelled in.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle5.jpg\" alt=\"\" /></p>\r\n<p>Ideally, this would point inwards. However, if the speed of the circular motion is not kept constant then there will be a component of acceleration in the direction of this increasing or decreasing speed. Depending on the class’s ability, this may be an interesting topic of discussion.</p>\r\n<p>If a pure, textbook style centripetal acceleration is required, then Vertigo may be fitted to a fix speed turntable. An old record player works well.</p>\r\n<p>If this is not available, data can be found <a name=\"DataC\"></a><a href=\"/vertigo-instructions/Circle_data.zip\">here</a></p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle6.jpg\" alt=\"\" /></p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle7.jpg\" alt=\"\" /></p>\r\n<h2 id=\"advanced-2\"><a name=\"AdvancedC\"></a>Advanced</h2>\r\n<p>A more in-depth analysis could investigate the angle between the Velocity and Acceleration Vertigo experiences as it travels in a circle.\r\nThis can be found be using the dot product of the two quiver vectors used in the previous lessons.</p>\r\n<p>It would be expected that the angle between the velocity and acceleration would always be 90 degrees.\r\nAs can be seen, this analysis reveals the angle to oscillate between 65 and 115 degrees.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle8.jpg\" alt=\"\" /></p>\r\n<p>The average though is a little over 89.5 degrees – textbook. Why there is such variation could be an interesting area for investigation.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Circle9.jpg\" alt=\"\" /></p>\r\n<p><br /><br />\r\n<br /><br />\r\n<br /><br />\r\n<br /><br />\r\n<br /><br />\r\n<br /><br /></p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-12\">\r\n      <loader (loaded)=\"onLoaded($event)\" (loadedProcessedData)=\"onProcessedLoaded($event)\"\r\n        (loadingProgress)=\"loading($event)\"></loader>\r\n        \r\n      <app-tabs ><!--(click)=\"map.reload()\"-->\r\n        <app-tab [tabTitle]=\"'Graph'\">\r\n          <graph-control-selection [VertigoRawData]=\"VertigoRawData\" [VertigoProcessedData]=\"VertigoProcessedData\"></graph-control-selection>\r\n        </app-tab>\r\n        <app-tab [tabTitle]=\"'Map'\" (selected)=\"map.reload()\">\r\n          <live-map #map [RawData]=\"VertigoRawData\" [lat]=\"lat\" [lon]=\"lon\"></live-map>\r\n        </app-tab>\r\n      </app-tabs>\r\n      <br/><br/>\r\n      <app-tabs><!--(click)=\"map.reload()\"-->\r\n        <app-tab [tabTitle]=\"'Additional Dataseries'\">\r\n          <app-processor [VertigoRawData]=\"VertigoRawData\" (loadedProcessedData)=\"onProcessedLoaded($event)\"></app-processor>\r\n        </app-tab>\r\n      </app-tabs>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"nb-global-loader\" class=\"loader\" *ngIf=\"Progress!=100.0\">\r\n\r\n  <div class=\"blob blob-0\"></div>\r\n  <div class=\"blob blob-2\"></div>\r\n  <div class=\"blob blob-3\"></div>\r\n  <div class=\"blob blob-4\"></div>\r\n  <div class=\"blob blob-5\"></div>\r\n  <p class=\"cent\" style=\"color: white; text-align: center\">Loading: {{Progress}}%</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/instructions/instructions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/instructions/instructions.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"/assets/gifs/turn-on.gif\">\n\n<img src=\"/assets/gifs/start-logging.gif\">\n\n<img src=\"/assets/gifs/sd-card-eject.gif\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendulum/pendulum.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendulum/pendulum.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"pendulums\"><a name=\"Pendulums\"></a>Pendulums</h2>\r\n<h1 id=\"investigating-the-periodic-motion-of-a-pendulum\">Investigating the periodic motion of a pendulum</h1>\r\n<h3 id=\"curriculum-links-1\">Curriculum links</h3>\r\n<p>Key Stage 4 National Curriculum</p>\r\n<ul>\r\n    <li>\r\n        <p>interpreting quantitatively graphs of distance, time, and speed</p>\r\n    </li>\r\n    <li>\r\n        <p>acceleration caused by forces; Newton’s First Law</p>\r\n    </li>\r\n    <li>\r\n        <p>amplitude, frequency</p>\r\n    </li>\r\n</ul>\r\n<h3 id=\"safety-1\">Safety</h3>\r\n<p>appropriate risk assessment should be made in compliance with departmental requirements</p>\r\n<h3 id=\"introduction\">Introduction</h3>\r\n<p>There are many ways to analyse the motion of a pendulum.\r\n    This activity offers three different approaches of increasing complexity.</p>\r\n<p>The beginner section looks at the acceleration Vertigo has experienced and offers a very simple determination of the\r\n    Time period of oscillations.</p>\r\n<p>The intermediate activity gives scope for pupils to investigate the relationship between displacement, velocity and\r\n    acceleration.</p>\r\n<p>The advanced analysis converts the data from a time domain into the frequency domain, introducing students to the\r\n    Fourier transform and a means of presenting data they will likely not have encountered before.</p>\r\n<h1 id=\"beginner-1\"><a name=\"BeginnerP\"></a>Beginner</h1>\r\n<p>This analysis could fit into a wider study, perhaps investigating the relationship between pendulum length and Time\r\n    period.\r\n    It could also be used as a means of comparing data gathered by hand and by data loggers. The latter, ought to, in\r\n    this case, yield a more accurate answer with smaller uncertainties.</p>\r\n<h3 id=\"set-up\">Set-up</h3>\r\n<ul>\r\n    <li>\r\n        <p>Tie Vertigo to a 1 metre length of light inextensible string (cotton thread would be best).<br />\r\n            Although the GPS antenna will not be needed for this investigation, it does provide a convenient point to\r\n            attach the string to, and so could still be connected to the vertigo board.</p>\r\n    </li>\r\n    <li>\r\n        <p>Using two small pieces of wood, or a split cork, fix the other end of the string into a clamp. The clamp can\r\n            then be connected to a retort stand as shown below.</p>\r\n    </li>\r\n</ul>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/apparatus.jpg\" alt=\"\" /></p>\r\n<p>The length of the string is not too important but should be between 20cm and 1 metre. Measurng the length of the\r\n    string should be from the bottom of the split cork to the centre of mass of the vertigo unit. This will involve some\r\n    uncertainty. It may be useful to have pupils estimate this uncertainty and quote it in their results.</p>\r\n<h3 id=\"data-capture\">Data capture</h3>\r\n<ul>\r\n    <li>\r\n        <p>Turn the vertigo device on</p>\r\n    </li>\r\n    <li>\r\n        <p>Wait for 30 seconds, keeping vertigo reasonably stationary</p>\r\n    </li>\r\n    <li>\r\n        <p>Press the log button to start logging</p>\r\n    </li>\r\n    <li>\r\n        <p>Displace vertigo to an angle of approximately 30 degrees and release</p>\r\n    </li>\r\n    <li>\r\n        <p>Allow Vertigo to perform 10 full swings</p>\r\n    </li>\r\n    <li>\r\n        <p>Stop the device and press the log button again.</p>\r\n    </li>\r\n</ul>\r\n<p>If <a name=\"DataP\"></a>data acquisition fails, sample data is available for this activity <a name=\"DataJ\"></a><a\r\n        href=\"/vertigo-instructions/Pendulum_data.csv\">here</a></p>\r\n<h3 id=\"analysis\">Analysis</h3>\r\n<ul>\r\n    <li>\r\n        <p>Remove the sd card from Vertigo and place it into a suitable sd card reader.</p>\r\n    </li>\r\n    <li>\r\n        <p>Open the programme matlab</p>\r\n    </li>\r\n    <li>\r\n        <p>The following files must be downloaded into a single folder <a\r\n                href=\"/vertigo-instructions/Pendulum_scripts.zip\">Pendulum_scripts</a></p>\r\n    </li>\r\n\r\n    <li>\r\n        <p>In matlab, click the ‘open’ icon located in the top left of the screen, and navigate to the folder that has\r\n            been downloaded. Open the file Pendulum_lesson.m</p>\r\n    </li>\r\n    <li>\r\n        <p>Click run</p>\r\n    </li>\r\n</ul>\r\n<p>A graph will quickly appear that resembles the graph below:</p>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <loader (loaded)=\"onLoaded($event)\" (loadedProcessedData)=\"onProcessedLoaded($event)\"\r\n                (loadingProgress)=\"loading($event)\"></loader>\r\n            <graph-control [RawData]=\"VertigoRawData\" [ProcessedData]=\"VertigoProcessedData\"\r\n                [SelectedSeries]=\"Graph1Series\">\r\n            </graph-control>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph.jpg\" alt=\"\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<p>In the command window, the operator will be asked</p>\r\n<p>“Which orientation looks best? - North (1) or East (2)”</p>\r\n<p>In the graph above the Blue line shows the clearest trend. This depends on which way the pendulum has been\r\n    orientated. There will be a choice of either North or East as the pendulum has most amplitude in these directions.\r\n</p>\r\n<p>Please enter, into the command window, a ‘1’ for North or a ‘2’ for East</p>\r\n<p>The user will then be asked\r\n    “when would you like to start the analysis?”\r\n    Followed by:</p>\r\n<p>“when would you like to end the analysis?”</p>\r\n<p>Looking at the graph, it is clear that the less noisy oscillations occur beyond 4 seconds and end at around 16\r\n    seconds.\r\n    Enter these values when prompted.</p>\r\n<p>A new graph will then appear.</p>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <graph-control [RawData]=\"VertigoRawData\" [ProcessedData]=\"VertigoProcessedData\"\r\n                [SelectedSeries]=\"Graph2Series\">\r\n            </graph-control>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph1.jpg\" alt=\"\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/><br/>\r\n<p>This graph can be used to determine the time-period of the pendulum.</p>\r\n<p>For very accurate readings, the cursor icon</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/cursor.jpg\" alt=\"\" /></p>\r\n<p>will allow pupils to find x/y values within 2 decimal places.</p>\r\n<p>The time period for the pendulum above is</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph4.jpg\" alt=\"\" /></p>\r\n<p>11.85s – 7.17s = 4.68 seconds for 3 full oscillations</p>\r\n<p>Time Period = 4.68seconds/ 3 = 1.56 seconds</p>\r\n<p>Giving a frequency of 0.64 Hz</p>\r\n<p>This corresponds to a length of 60cm -which was exactly the length used.</p>\r\n<h1 id=\"intermediate-1\"><a name=\"IntermediateP\"></a>Intermediate</h1>\r\n<p>In addition to investigating the Time period of the pendulum, its movement in the North and or East directions can be\r\n    analysed.</p>\r\n<p>The Pendulum_lesson2 script can be used to produce a graph of displacement, Velocity and acceleration.</p>\r\n<p>The script contains similar prompts as in the beginner exercise.</p>\r\n<p>As before, in matlab, open the file Pendulum_lesson2</p>\r\n<p>The final graph produced looks as follows</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph5.jpg\" alt=\"\" /></p>\r\n<p>One point of interest, in this example, is to investigate the relationship between amplitude and time-period.\r\n    Below is a graph from a second data set taken with the same pendulum but with a much-reduced amplitude. The\r\n    isochronous nature of pendulums can be a conceptual hurdle, and some pupils find this difficult to overcome – it is\r\n    very visible here.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph6.jpg\" alt=\"\" /></p>\r\n<h1 id=\"advanced-1\"><a name=\"AdvancedP\"></a>Advanced</h1>\r\n<p>The final analysis is suitable for G&amp;T students in years 11 or above.\r\n    It involves understanding the moving of data from the time domain into the frequency domain.</p>\r\n<p>The analysis should be used as an extension to the intermediate exercise and not as a stand-alone activity.</p>\r\n<p>The script required is Pendulum_lesson3. Data should already have been loaded into Matlab with the previous scripts\r\n    already complete.</p>\r\n<p>(Note – this analysis gives a more accurate output if the data is recorded over a longer time frame. Leaving the\r\n    pendulum to oscillate for over a minute would be ideal)</p>\r\n<p>Notice, here, the peak amplitude occurs at a frequency of approximately 0.64 Hz which was the calculated frequency\r\n    from earlier examples.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Pendulum_graph7.jpg\" alt=\"\" /></p>\r\n<p>It is also interesting to note that whilst the pendulum will oscillate in the expected plane, it will also oscillate\r\n    as a torsional pendulum. These frequencies often show themselves in the Fourier Transform. It may be an area worth\r\n    investigating.</p>\r\n<p><br /><br />\r\n    <br /><br />\r\n    <br /><br /></p>\r\n<p><br /><br />\r\n    <br /><br />\r\n    <br /><br /></p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trampoline/trampoline.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trampoline/trampoline.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"trampoline-jumping-1\"><a name=\"jump\"></a>Trampoline Jumping</h1>\r\n<p><img src=\"https://media.giphy.com/media/bTIgsd4dlCalDfxZsg/giphy.gif\" alt=\"Alt Text\" /></p>\r\n<h2 id=\"beginner-3\"><a name=\"BeginnerJ\"></a>Beginner</h2>\r\n<h3 id=\"measuring-the-forces-acting-on-a-trampolinist\">Measuring the forces acting on a trampolinist.</h3>\r\n<p>For this experiment it will be assumed that the trampolinist is only moving in the vertical direction.<br />\r\n    For consistency, and for ease of understanding, the trampolinist’s weight has been added on to the force charts.</p>\r\n<p>Fix Vertigo onto the waist of the trampolinist – it is important that Vertigo is not landed on whilst jumping.</p>\r\n<p>The GPS antenna is not needed.</p>\r\n<ul>\r\n    <li>Turn vertigo on and keep it still for 30 seconds</li>\r\n    <li>Press the log button</li>\r\n    <li>Begin jumping</li>\r\n    <li>Once finished, press the log button again to end the data capture.</li>\r\n    <li>Wait until Vertigo’s LED lights stop flashing</li>\r\n</ul>\r\n<p>The following <a href=\"tramp_scripts.zip\">Scripts</a> need to be downloaded into the same folder</p>\r\n<ul>\r\n    <li>Open matlab and run the script Trampoline_lesson_1</li>\r\n</ul>\r\n<p>After a short time, a graph will appear.</p>\r\n<h3 id=\"nb\">NB</h3>\r\n<p>The data used here is not from a trampoline, but the scripts have been written for this purpose.</p>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n                <loader (loaded)=\"onLoaded($event)\" (loadedProcessedData)=\"onProcessedLoaded($event)\"\r\n                (loadingProgress)=\"loading($event)\"></loader>\r\n            <graph-control [RawData]=\"VertigoRawData\" [ProcessedData]=\"VertigoProcessedData\"\r\n                [SelectedSeries]=\"Graph1Series\">\r\n            </graph-control>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <img src=\"https://vertigo.engineering/vertigo-instructions/tramp0.jpg\" alt=\"\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p>The operator will then be asked</p>\r\n<ul>\r\n    <li>What time do you wish to start analysis from? In the command window normally found at the bottom of the matlab\r\n        screen</li>\r\n</ul>\r\n<p>Looking at the graph, input a suitable start time, in seconds, into the command window</p>\r\n<p>And then:</p>\r\n<ul>\r\n    <li>What time do you wish to end the analysis?</li>\r\n</ul>\r\n<p>Chose an end time and enter this in seconds into the command window.</p>\r\n<p>And finally</p>\r\n<ul>\r\n    <li>What is the mass of the trampolinist?</li>\r\n</ul>\r\n<p>This is simply required to calculate the force acting on the trampolinist using F=ma.\r\n    Input the trampolinist’s mass in Kilograms.</p>\r\n<p>Once this data has been entered, graphs such as the one below will be produced.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/tramp1.jpg\" alt=\"\" /></p>\r\n<p>An interesting investigation could be to find the relationship between a pupil’s mass, and the maximum force\r\n    experienced on the trampoline.</p>\r\n<h2 id=\"intermediate-3\"><a name=\"IntermediateJ\"></a>Intermediate</h2>\r\n<h3 id=\"force-displacement-and-velocity\">Force, displacement and velocity</h3>\r\n<p>It is also possible to investigate the height and velocity of the trampolinist. This is similar to previous\r\n    investigations.\r\n    The gradient of the distance/ time graph ought to be directly proportional to the velocity.</p>\r\n<ul>\r\n    <li>Load the script Tramp_lesson2 and follow the instructions as before.</li>\r\n</ul>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/tramp2.jpg\" alt=\"\" /></p>\r\n<p>The final graph looks at the force that the trampoline exerts on the trampolinist as it is stretched. It is a\r\n    difficult graph to analyse, if multiple jumps are viewed simultaneously.</p>\r\n<ul>\r\n    <li>Adjusting the ‘force window’ required can be achieved by modifying line 137 of the matlab script.</li>\r\n</ul>\r\n<p>ylim([150 300]);</p>\r\n<p>Change the limits, in the square brackets, to ones more applicable to your investigation.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/tramp3.jpg\" alt=\"\" /></p>\r\n<p>It is possible, though reasonably involved, to investigate the energy stored in the trampoline.</p>\r\n<h2 id=\"advanced-3\"><a name=\"AdvancedJ\"></a>Advanced</h2>\r\n<h3 id=\"measuring-rotation\">Measuring rotation</h3>\r\n<p>When measuring rotational speeds, the frame of reference is all important.\r\n    Similar to concepts in relativity, the need to stipulate the frame used is important.<br />\r\n    Linear speed is most often measured with respect to longitude and latitude coordinates on the Earth’s surface. But\r\n    this might not be as valuable to a plane or a boat, where speed, in relation to the air or water, is more important.\r\n    The same is true when measuring the rotational speeds for a trampolinist.</p>\r\n<table>\r\n    <thead>\r\n        <tr>\r\n            <th style=\"text-align: center\"><img src=\"https://vertigo.engineering/vertigo-instructions/tramp5.jpg\"\r\n                    alt=\"\" /></th>\r\n            <th style=\"text-align: center\"><img src=\"https://vertigo.engineering/vertigo-instructions/tramp6.jpg\"\r\n                    alt=\"\" /></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"text-align: center\">A ‘NED’ world frame</td>\r\n            <td style=\"text-align: center\">How a Board frame may be assigned</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p>The diagram on the left shows a ‘world frame’. That is, one that has axes fixed to the Earth. Convention has X,Y and\r\n    -Z following the directions of North, East and Down (NED).</p>\r\n<p>The diagram on the right shows rotational axes that rotate with the object. In this particular case, Vertigo will be\r\n    fixed onto a rotating trampolinist.</p>\r\n<p>For this investigation, the rotating frame will be most useful. And therefore, for the first, and possible only time,\r\n    the orientation with which Vertigo is attached to the trampolinist will be important. Especially, if results between\r\n    trampolinists are to be compared.</p>\r\n<p>Load the script trampoline_lesson3</p>\r\n<p>Acquire data as before and follow instructions in the command window.\r\n    Several graphs will appear, all with labelled axes to ease understanding.</p>\r\n<p>Visualising rotations in 3-dimentions can be challenging, and it will take some time to be confident in explaining\r\n    what the graphs represent.\r\n    The following graphs help to understand the problems involved.</p>\r\n<h3 id=\"roll-rotations\">Roll Rotations</h3>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/tramp7.jpg\" alt=\"\" /></p>\r\n<h3 id=\"pitch-rotations\">Pitch Rotations</h3>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/tramp8.jpg\" alt=\"\" /></p>\r\n<p>Rotations can be seen in both the world frame and the trampolinist’s frame of reference. What appears to have\r\n    happened, in this example, is that the board’s X-axis was rotating about an imaginary axis running across the Earth,\r\n    East to West.</p>\r\n<p>The other oscillations are presumably processional.</p>\r\n<p>The oscillation direction can also be seen from the gyroscope rate. In the graph below, it is clear the most\r\n    rotations is occurring around the x-axis.</p>\r\n\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <graph-control [RawData]=\"VertigoRawData\" [ProcessedData]=\"VertigoProcessedData\"\r\n                    [SelectedSeries]=\"Graph2Series\">\r\n                </graph-control>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                    <img src=\"https://vertigo.engineering/vertigo-instructions/tramp9.jpg\" alt=\"\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <br/><br/>\r\n<p>It should be clear that, if rotations between athletes are to be compared, Vertigo will need to be affixed in a\r\n    consistent manner.\r\n    Or, the trampoline jumper would need to face the same way each time he/she jumped.</p>\r\n<h3 id=\"nb-1\">NB</h3>\r\n<p>The data used here was obtained by throwing a Vertigo upward and then catching it. The first throw was launched with\r\n    little spin, the second with a higher revolution rate. These rates would be much higher than a trampolinist might\r\n    achieve.</p>\r\n<p>Comparing the results, measured with Vertigo, against a video recording of a trampolinist, would be a very\r\n    interesting exercise.</p>\r\n<p>Since angular momentum is always conserved, the rate of rotation can be increased as the trampolinist varies their\r\n    moment of inertia. (This is not the case with the ‘board thrown in the air’ data presented here).</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/velocitytime/velocitytime.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/velocitytime/velocitytime.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"physics-of-sprinting-1\"><a name=\"sprint\"></a>Physics of Sprinting</h2>\r\n<h1 id=\"investigating-the-displacement--time-graph-for-a-sprinting-pupil\">Investigating the displacement / time graph for a sprinting pupil.</h1>\r\n<h4 id=\"the-aim-of-this-lesson-is-to-give-pupils-the-chance-to-investigate-an-accurate-displacement--time-graph-generated-by-one-of-the-students-in-the-class\">The aim of this lesson is to give pupils the chance to investigate an accurate displacement / time graph generated by one of the students in the class.</h4>\r\n<h1 id=\"curriculum-links\">Curriculum links</h1>\r\n<h3 id=\"ks3-physics-national-curriculum\">KS3 Physics National Curriculum</h3>\r\n<p>•\tspeed and the quantitative relationship between average speed, distance and time (speed = distance ÷ time)</p>\r\n<p>•\tthe representation of a journey on a distance-time graph</p>\r\n<h3 id=\"ks4-physics-national-curriculum\">KS4 Physics National Curriculum</h3>\r\n<p>•\tinterpreting quantitatively graphs of distance, time, and speed\r\n•\tacceleration caused by forces; Newton’s First Law</p>\r\n<h1 id=\"planning\">Planning</h1>\r\n<p>This activity requires the software package matlab. Please ensure your pupils have access to this programme and the relevant scripts highlighted below.\r\nIt is advisable that teachers familiarise themselves with the process before delivering the lesson content to a class.</p>\r\n<h1 id=\"safety\">Safety</h1>\r\n<p>appropriate risk assessment should be made in compliance with departmental requirements</p>\r\n<h1 id=\"starter-activity\">Starter activity</h1>\r\n<p>The <a href=\"/vertigo-instructions/The_Physics_of_Sprinting.docx\">Physics_of_Sprinting</a> worksheet</p>\r\n<h2 id=\"beginner\"><a name=\"BeginnerS\"></a>Beginner</h2>\r\n<h1 id=\"data-acquisition\">Data acquisition</h1>\r\n<ul>\r\n<li>Making sure the Vertigo unit is fully charged, take the class to a suitable outdoor area to record your data.</li>\r\n<li>Turn the unit on and wait for the second LED to stop flashing. This means that Vertigo has a GPS signal. It may take a minute.</li>\r\n<li>Select a pupil to run with Vertigo.</li>\r\n<li>\r\n<p>Request that the pupil carries the device like an athlete carrying the\r\nOlympic torch. (This is not strictly necessary but, with more wobbling around,\r\nVertigo may miss a GPS point. This would make analysis far trickier\r\n– and is not conducive to good lesson outcomes).</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Olympic_runner.jpg\" alt=\"\" /></p>\r\n</li>\r\n<li>Press the Log button (a solid LED light come on) and set the pupil off on a pre-determined route.</li>\r\n</ul>\r\n<p>On their return, press Vertigo’s log button again. The solid LED light starts to flash. When it stops flashing, Vertigo may be turned off; the data is ready to be analysed.</p>\r\n<p>If <a name=\"DataS\"></a>data acquisition fails, sample data is available for this activity <a href=\"/vertigo-instructions/Sprint_data.csv\">here</a></p>\r\n<h1 id=\"data-analysis\">Data analysis</h1>\r\n<p>The following files should be emailed (or otherwise given to the pupils) before the lesson. (Show my homework or similar may be of help here) The files need to be used by the pupils from a directory of their own. Else, any modifications the pupils might make would be apparent to all.</p>\r\n<p>These can all be found <a href=\"/vertigo-instructions/Ks3_Lesson_link.zip\">here</a></p>\r\n<p>Ask the pupils to download them to a non-shared drive.</p>\r\n<p>Ask the pupils to open matlab and, using the top left icon, open the file “Load_up_your data”\r\nIn the meantime, the csv file created will need to be accessed by the pupils. This should be added to a public drive or emailed to the pupils.</p>\r\n<p>Pupils should execute this script by using the run button, top centre of the screen. They will be prompted to open a file. This file should be the one recorded in the lesson.\r\nAfter a short time, a graph similar to the one below, should appear:</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Accelerations.jpg\" alt=\"\" /></p>\r\n<p>In the graphs above, it can be noted, that the pupil started to run at 3 seconds and stopped at about 28 seconds.</p>\r\n<p>This information is important.</p>\r\n<p>In the command window, located at the bottom of the screen, pupils will be asked,\r\n“What time do you wish to start analysis from?”\r\nPupils should enter a time in this window and hit the enter key. For the example above, they might add 3, and press enter.\r\nThey will then be asked,\r\n“What time do you wish to end the analysis?”</p>\r\n<p>28 seconds would be a reasonable time to end.</p>\r\n<p>The programme will then perform its analysis. This may take a moment.</p>\r\n<p>Eventually, matlab will produce a graph similar to the one below:</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Running_in_the_yard.jpg\" alt=\"\" /></p>\r\n<p>On the ‘figure’ screen, under the desktop ‘tab’ is the data-cursor icon.</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/cursor.jpg\" alt=\"\" /></p>\r\n<p>Pupils can click this to add a cursor point the graph’s curve. This will give them ‘x and y’ coordinates. In this case, Time and Displacement or Velocity.\r\nMultiple cursor points can be added by holding shift and re-clicking.</p>\r\n<p>The shape of the graphs can be discussed with the pupils. They can then answer the questions on the reverse of ‘The Physics of sprinting’.</p>\r\n<h2 id=\"intermediate\"><a name=\"IntermediateS\"></a>Intermediate</h2>\r\n<p>Go back to the file and to lines 399 to 411.\r\nThese have been commented out but can be revived by clicking the green %x symbol at the top of the screen. Some lines will remain green – this is intentional.</p>\r\n<p>Running the script again will give the pupils a quiver plot of the pupil’s velocity through time. See if the pupils can work out what they’re looking at and ask them to label the axes.</p>\r\n<p>This is an excellent time to initiate a discussion on vectors.</p>\r\n<h2 id=\"advanced\"><a name=\"AdvancedS\"></a>Advanced</h2>\r\n<h1 id=\"gradients\">Gradients</h1>\r\n<p>Closing the most recent quiver plot students should open the file:</p>\r\n<p>Getslopeintercept.m</p>\r\n<p>This will open the most recent figure and ask the user to click on the graph. The pupils will be able to draw a tangent to the displacement/ time curve.\r\nThe programme will then generate a value for the gradient.\r\nUsing cursors as before, the pupils will be able to verify that the gradient of the distance time graph is the velocity at that instant. (This is useful as it highlights positive and negative gradients).</p>\r\n<p><img src=\"https://vertigo.engineering/vertigo-instructions/Gradients.jpg\" alt=\"\" /></p>\r\n<p>It is also possible, by de-commenting lines 386 – 390, to view the acceleration against/ time.</p>\r\n<h2 id=\"more-pupils\">More pupils</h2>\r\n<p>It is likely that pupils will want to compare their V/t graphs… Welcome to the Vertigo project.</p>\r\n<p><br /><br />\r\n<br /><br />\r\n<br /><br /></p>\r\n<p><br /><br />\r\n<br /><br />\r\n<br /><br /></p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threed/orientation/orientation.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threed/orientation/orientation.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (window:resize)=\"onResize($event)\" #renderCanvas style=\"height: 400px; min-width: 400px;\" class=\"w-100\"></div>\r\n<p>Red is North, Blue is East and Green is Up</p>\r\n<button (click)=\"resizeCanvasToDisplaySize()\" type=\"button\" class=\"btn btn-dark w-100\">Resize</button>");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/controls/loader/loader.worker.ts":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./src/app/controls/loader/loader.worker.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_bluetooth_bluetooth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/bluetooth/bluetooth.component */ "./src/app/pages/bluetooth/bluetooth.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_velocitytime_velocitytime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/velocitytime/velocitytime.component */ "./src/app/pages/velocitytime/velocitytime.component.ts");
/* harmony import */ var _pages_pendulum_pendulum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pendulum/pendulum.component */ "./src/app/pages/pendulum/pendulum.component.ts");
/* harmony import */ var _pages_circularmotion_circularmotion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/circularmotion/circularmotion.component */ "./src/app/pages/circularmotion/circularmotion.component.ts");
/* harmony import */ var _pages_trampoline_trampoline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/trampoline/trampoline.component */ "./src/app/pages/trampoline/trampoline.component.ts");
/* harmony import */ var _pages_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/instructions/instructions.component */ "./src/app/pages/instructions/instructions.component.ts");










var routes = [
    { path: 'bluetooth', component: _pages_bluetooth_bluetooth_component__WEBPACK_IMPORTED_MODULE_3__["BluetoothComponent"] },
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'velocity-time', component: _pages_velocitytime_velocitytime_component__WEBPACK_IMPORTED_MODULE_5__["VelocitytimeComponent"] },
    { path: 'pendulum', component: _pages_pendulum_pendulum_component__WEBPACK_IMPORTED_MODULE_6__["PendulumComponent"] },
    { path: 'circularmotion', component: _pages_circularmotion_circularmotion_component__WEBPACK_IMPORTED_MODULE_7__["CircularmotionComponent"] },
    { path: 'trampoline', component: _pages_trampoline_trampoline_component__WEBPACK_IMPORTED_MODULE_8__["TrampolineComponent"] },
    { path: 'instructions', component: _pages_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_9__["InstructionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cent {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  transform: translate3d(0, 0, 0);\n}\n.loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1003;\n  background: #000000;\n  opacity: 0.5;\n  overflow: hidden;\n}\n.loader div:first-child {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 0 #ff386a;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n.loader div:first-child:after,\n.loader div:first-child:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n.loader div:first-child:before {\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  box-shadow: 0 3px 3px 0 #ffe420;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.loader div:first-child:after {\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  box-shadow: 0 3px 3px 0 #3dafff;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxCZW5cXERvY3VtZW50c1xcR2l0SHViXFx2ZXJ0aWdvLXdlYi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLG9CQUFBO0VDQ0o7RURFRTtJQUNFLHlCQUFBO0VDQUo7QUFDRjtBRGFFO0VBQ0U7SUFDRSxvQkFBQTtFQ0hKO0VETUU7SUFDRSx5QkFBQTtFQ0pKO0FBQ0Y7QURPRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNMSjtBRFFFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0xKO0FEUUU7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBQ0xKO0FEUUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtbW96LWtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAzO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICB9XHJcblxyXG4gIC5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDI1NSwgNTYsIDEwNiwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZVxyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbiAgLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgfVxyXG5cclxuICAubG9hZGVyIGRpdjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2IoMjU1LCAyMjgsIDMyKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGVcclxuICB9XHJcblxyXG4gIC5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoNjEsIDE3NSwgMjU1LCAxKTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZVxyXG4gIH0iLCJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5jZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDM7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwICNmZjM4NmE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyLFxuLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCAjZmZlNDIwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCAjM2RhZmZmO1xuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vertigo-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps/maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _graphs_graphs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graphs/graphs.module */ "./src/app/graphs/graphs.module.ts");
/* harmony import */ var _controls_controls_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/controls.module */ "./src/app/controls/controls.module.ts");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/fesm5/angular-plotly.js.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");


















// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
angular_plotly_js__WEBPACK_IMPORTED_MODULE_12__["PlotlyModule"].plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_11__;
var AppModule = /** @class */ (function () {
    function AppModule(library, faConfig) {
        // Add an icon to the library for convenient access in other components
        //library.addIconPacks(fas, fab, far);
        library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faBluetooth"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCloudDownloadAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPause"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlay"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faStop"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faTag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCompressArrowsAlt"]);
        faConfig.defaultPrefix = 'far';
    }
    AppModule.ctorParameters = function () { return [
        { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconLibrary"] },
        { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaConfig"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _controls_controls_module__WEBPACK_IMPORTED_MODULE_10__["ControlsModule"],
                _graphs_graphs_module__WEBPACK_IMPORTED_MODULE_9__["GraphsModule"],
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_12__["PlotlyModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_8__["MapsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__["PagesModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/controls/controls.module.ts":
/*!*********************************************!*\
  !*** ./src/app/controls/controls.module.ts ***!
  \*********************************************/
/*! exports provided: ControlsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsModule", function() { return ControlsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/controls/loader/loader.component.ts");
/* harmony import */ var _trim_slider_trim_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trim-slider/trim-slider.component */ "./src/app/controls/trim-slider/trim-slider.component.ts");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/fesm5/angular-plotly.js.js");
/* harmony import */ var _processor_processor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processor/processor.component */ "./src/app/controls/processor/processor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/controls/tabs/tabs.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/controls/tab/tab.component.ts");










var ControlsModule = /** @class */ (function () {
    function ControlsModule() {
    }
    ControlsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _trim_slider_trim_slider_component__WEBPACK_IMPORTED_MODULE_4__["TrimSliderComponent"], _processor_processor_component__WEBPACK_IMPORTED_MODULE_6__["ProcessorComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__["TabComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__["PlotlyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            exports: [
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
                _processor_processor_component__WEBPACK_IMPORTED_MODULE_6__["ProcessorComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"],
                _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__["TabComponent"]
            ]
        })
    ], ControlsModule);
    return ControlsModule;
}());



/***/ }),

/***/ "./src/app/controls/loader/loader.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/controls/loader/loader.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/controls/loader/loader.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/controls/loader/loader.component.ts ***!
  \*****************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../processing/processes/rawdata */ "./src/app/processing/processes/rawdata.ts");
/* harmony import */ var _processing_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../processing/data */ "./src/app/processing/data.ts");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../processing/vertigo-spec.json */ "./src/app/processing/vertigo-spec.json");
var _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../processing/vertigo-spec.json */ "./src/app/processing/vertigo-spec.json", 1);
/* harmony import */ var _processing_vertigo_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../processing/vertigo-data */ "./src/app/processing/vertigo-data.ts");
/* harmony import */ var src_app_processing_VertigoDataStoreManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/processing/VertigoDataStoreManager */ "./src/app/processing/VertigoDataStoreManager.ts");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");









var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadedProcessedData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showtrim = false;
        this.vertigoPreviewData = null;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent.prototype.triggerFile = function (inputField) {
        this.workerReadFile(inputField.files[0]);
    };
    LoaderComponent.prototype.toggleTrimControls = function () {
        this.showtrim = !this.showtrim;
    };
    LoaderComponent.prototype.workerReadFile = function (fileName) {
        var _this = this;
        if (typeof Worker !== 'undefined') {
            // Create a new
            var worker = new Worker(__webpack__worker__0, {  });
            worker.onmessage = function (_a) {
                var data = _a.data;
                _this.loadingProgress.emit(data.progress);
                if (data.progress === 1.0 && data.data) {
                    var rawDataClass_1 = _this.prepareRawDataClass();
                    data.data.DataTypes.forEach(function (value, key) {
                        rawDataClass_1.DataTypes.set(key, _processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_2__["RawData"].Cast(value));
                    });
                    var store_1 = src_app_processing_VertigoDataStoreManager__WEBPACK_IMPORTED_MODULE_7__["VertigoDataStoreManager"].GetDataStore();
                    var spec_1 = new src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_8__["Dataspec"]();
                    rawDataClass_1.DataTypes.forEach(function (v, k) {
                        var type = spec_1.Types.find(function (t) { return t.Identifier == k; });
                        store_1.Load(type, v);
                    });
                    _this.vertigoPreviewData = rawDataClass_1;
                    _this.loaded.emit(rawDataClass_1);
                }
            };
            worker.postMessage(fileName);
        }
        else {
            this.asynchronousReadFile(fileName);
        }
    };
    LoaderComponent.prototype.trim = function (event) {
        var rawDataClass = this.prepareRawDataClass();
        this.vertigoPreviewData.DataTypes.forEach(function (value, key) {
            if (event.autorange) {
                rawDataClass.DataTypes.set(key, value);
            }
            else {
                var d = new _processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_2__["RawData"]();
                d.SetHeaders(value.Headers());
                d.LoadAll(value.Trim(event.xmin, event.xmax));
                rawDataClass.DataTypes.set(key, d);
            }
        });
        this.loaded.emit(rawDataClass);
    };
    LoaderComponent.prototype.prepareRawDataClass = function () {
        var rawDataClass = new _processing_vertigo_data__WEBPACK_IMPORTED_MODULE_6__["VertigoRawData"]();
        var types = _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5__["dataTypes"];
        types.forEach(function (t) {
            var specIdentifier = t.identifier;
            var rawData = new _processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_2__["RawData"]();
            rawData.SetHeaders(t.columns.map(function (c) { return c.id; }));
            rawDataClass.DataTypes.set(specIdentifier, rawData);
        });
        return rawDataClass;
    };
    LoaderComponent.prototype.asynchronousReadFile = function (inputField) {
        var _this = this;
        var fileName = inputField.files[0];
        if (!fileName) {
            alert('No file selected');
            return;
        }
        var reader = new FileReader();
        reader.onload = function (file) {
            var contents = file.target;
            var fileText = contents.result;
            console.log("Loaded file, starting parsing");
            var lines = fileText.split('\n');
            var numberOfLines = lines.length;
            var linesProcessed = 0;
            lines.forEach(function (line) {
                linesProcessed = linesProcessed + 1;
                var result = Object(papaparse__WEBPACK_IMPORTED_MODULE_4__["parse"])(line);
                _this.loadingProgress.emit(linesProcessed / numberOfLines);
                if (result.data[0]) {
                    if (!Number.isInteger(result.data[0][0])) {
                        result.data[0][0] = Date.parse(result.data[0][0]);
                    }
                    var data = new _processing_data__WEBPACK_IMPORTED_MODULE_3__["Data"](result.data[0]);
                    var identifier = +result.data[0][1];
                    _this.VertigoRawData.DataTypes.get(identifier).Load(data);
                }
            });
            _this.loaded.emit(_this.VertigoRawData);
            console.log('Finished loading file');
        };
        reader.readAsText(fileName);
    };
    LoaderComponent.prototype.loadFile = function (fileForm, field, submitBtn) {
        var file = fileForm.files[0];
        if (!file) {
            alert("No file selected");
            return;
        }
        var reader = new FileReader();
        reader.onload = function (f) {
            var contents = f.target;
            var fileText = contents.result;
            field.value = fileText;
            submitBtn.disabled = false;
        };
        reader.readAsText(file);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LoaderComponent.prototype, "VertigoRawData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LoaderComponent.prototype, "VertigoProcessedData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoaderComponent.prototype, "loaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoaderComponent.prototype, "loadedProcessedData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoaderComponent.prototype, "loadingProgress", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/loader/loader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/controls/loader/loader.component.scss")).default]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./loader.worker */ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/controls/loader/loader.worker.ts")))

/***/ }),

/***/ "./src/app/controls/processor/processor.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/controls/processor/processor.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL3Byb2Nlc3Nvci9wcm9jZXNzb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/controls/processor/processor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/controls/processor/processor.component.ts ***!
  \***********************************************************/
/*! exports provided: ProcessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessorComponent", function() { return ProcessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_processing_datatype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/datatype */ "./src/app/processing/datatype.ts");
/* harmony import */ var src_app_processing_VertigoDataStoreManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/processing/VertigoDataStoreManager */ "./src/app/processing/VertigoDataStoreManager.ts");
/* harmony import */ var src_app_processing_processes_smootheddata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/processing/processes/smootheddata */ "./src/app/processing/processes/smootheddata.ts");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");
/* harmony import */ var src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/processing/vertigo-data */ "./src/app/processing/vertigo-data.ts");
/* harmony import */ var src_app_processing_processes_ProcessingMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/processing/processes/ProcessingMethods */ "./src/app/processing/processes/ProcessingMethods.ts");
/* harmony import */ var src_app_processing_processes_Param__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/processing/processes/Param */ "./src/app/processing/processes/Param.ts");









var ProcessorComponent = /** @class */ (function () {
    function ProcessorComponent() {
        this.loadedProcessedData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Dataspec = new src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_5__["Dataspec"]();
        this.SelectedValues = [];
        this.ProcessingMethods = src_app_processing_processes_ProcessingMethods__WEBPACK_IMPORTED_MODULE_7__["ProcessingMethods"].GetAllMethods();
        this.ProcessedData = new src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_6__["VertigoProcessedData"]();
    }
    ProcessorComponent.prototype.ngOnInit = function () {
    };
    ProcessorComponent.prototype.smooth = function (dataType) {
        var store = src_app_processing_VertigoDataStoreManager__WEBPACK_IMPORTED_MODULE_3__["VertigoDataStoreManager"].GetDataStore();
        var rawData = store.Get(dataType);
        var smoothedData = new src_app_processing_processes_smootheddata__WEBPACK_IMPORTED_MODULE_4__["SmoothedData"]();
        smoothedData.SetHeaders(rawData.Headers());
        smoothedData.SetParams([100]);
        smoothedData.LoadAll(rawData.Data());
        var smoothedDataType = new src_app_processing_datatype__WEBPACK_IMPORTED_MODULE_2__["DataType"]();
        smoothedDataType.from(dataType);
        smoothedDataType.Id = smoothedDataType.Id + '.smoothed';
        smoothedDataType.Name = 'Smoothed ' + smoothedDataType.Name;
        store.Load(smoothedDataType, smoothedData);
    };
    ProcessorComponent.prototype.selectionChanged = function (event) {
        var _this = this;
        var DataTypes = [];
        Object.values(event).forEach(function (v) {
            var key = v.value.replace('\'', '').replace('\'', '').split(',');
            var group = _this.Dataspec.Types.find(function (t) { return t.Id === key[0]; });
            var newDataType = new src_app_processing_datatype__WEBPACK_IMPORTED_MODULE_2__["DataType"]().from(group);
            DataTypes.push(newDataType);
        });
        this.SelectedValues = DataTypes;
    };
    ProcessorComponent.prototype.processingSelectionChanged = function (event) {
        var methodName = Object.values(event).pop().value;
        var method = src_app_processing_processes_ProcessingMethods__WEBPACK_IMPORTED_MODULE_7__["ProcessingMethods"].GetAllMethods().find(function (v) { return (v.Name == methodName); });
        this.SelectedProcessingMethod = method;
        var params = [];
        for (var i = 0; i < method.Params.length; i++) {
            params.push(new src_app_processing_processes_Param__WEBPACK_IMPORTED_MODULE_8__["Param"](method.Params[i], method.DefaultParamValues[i]));
        }
        this.Params = params;
    };
    ProcessorComponent.prototype.process = function () {
        var _this = this;
        console.log(this.Params);
        this.loadedProcessedData.emit(this.VertigoRawData);
        var method = this.SelectedProcessingMethod.ConstructDataBlock();
        this.SelectedValues.forEach(function (type) {
            method.SetHeaders(type.Columns.map(function (c) { return c.Id; }));
            method.SetParams(_this.Params.map(function (p) { return p.Value; }));
            method.LoadAll(_this.VertigoRawData.DataTypes.get(type.Identifier).Data());
            _this.ProcessedData.DataTypes.set(type.Identifier, method);
        });
        this.loadedProcessedData.emit(this.ProcessedData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProcessorComponent.prototype, "VertigoRawData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProcessorComponent.prototype, "loadedProcessedData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProcessorComponent.prototype, "loadingProgress", void 0);
    ProcessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-processor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./processor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/processor/processor.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./processor.component.scss */ "./src/app/controls/processor/processor.component.scss")).default]
        })
    ], ProcessorComponent);
    return ProcessorComponent;
}());



/***/ }),

/***/ "./src/app/controls/tab/tab.component.scss":
/*!*************************************************!*\
  !*** ./src/app/controls/tab/tab.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pane {\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvdGFiL0M6XFxVc2Vyc1xcQmVuXFxEb2N1bWVudHNcXEdpdEh1YlxcdmVydGlnby13ZWIvc3JjXFxhcHBcXGNvbnRyb2xzXFx0YWJcXHRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udHJvbHMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZXtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICB9IiwiLnBhbmUge1xuICBwYWRkaW5nOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/controls/tab/tab.component.ts":
/*!***********************************************!*\
  !*** ./src/app/controls/tab/tab.component.ts ***!
  \***********************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.active = false;
    }
    TabComponent.prototype.select = function () {
        this.selected.emit();
    };
    TabComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TabComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
    ], TabComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TabComponent.prototype, "active", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tab/tab.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab.component.scss */ "./src/app/controls/tab/tab.component.scss")).default]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/controls/tabs/tabs.component.scss":
/*!***************************************************!*\
  !*** ./src/app/controls/tabs/tabs.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvdGFicy9DOlxcVXNlcnNcXEJlblxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnRpZ28td2ViL3NyY1xcYXBwXFxjb250cm9sc1xcdGFic1xcdGFicy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udHJvbHMvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbHMvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jbG9zZSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iLCIudGFiLWNsb3NlIHtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/controls/tabs/tabs.component.ts":
/*!*************************************************!*\
  !*** ./src/app/controls/tabs/tabs.component.ts ***!
  \*************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ "./src/app/controls/tab/tab.component.ts");



var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
        tab.select();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"])
    ], TabsComponent.prototype, "tabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TabsComponent.prototype, "click", void 0);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/tabs/tabs.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.component.scss */ "./src/app/controls/tabs/tabs.component.scss")).default]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/controls/trim-slider/trim-slider.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/controls/trim-slider/trim-slider.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL3RyaW0tc2xpZGVyL3RyaW0tc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/controls/trim-slider/trim-slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/controls/trim-slider/trim-slider.component.ts ***!
  \***************************************************************/
/*! exports provided: TrimSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimSliderComponent", function() { return TrimSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");



var TrimSliderComponent = /** @class */ (function () {
    function TrimSliderComponent() {
        this.InputData = [];
        this.configOptions = {
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'red' },
        };
        this.scaled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.seriesColours = ['red', 'green', 'blue'];
        this.t0 = 0;
        this.GraphData = [{
                x: Array.from(Array(100).keys()),
                y: Array.from(Array(100).keys()).map(function (a) { return Math.sin(a); }),
                type: 'scatter',
                mode: 'lines+points',
                marker: { color: 'red' }
            }];
        this.xaxis = {
            automargin: true,
        };
        this.yaxis = {
            automargin: true,
        };
        this.layout = {
            autosize: true,
            plot_bgcolor: '#FFF3',
            paper_bgcolor: '#FFF3',
            font: { color: '#afafaf' },
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 0
            },
            xaxis: {
                rangeslider: {},
                showgrid: false,
            },
            yaxis: {
                fixedrange: true,
                showgrid: false,
                showticklabels: false,
            }
        };
    }
    TrimSliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data.currentValue) {
            this.onLoaded(changes.data.currentValue);
        }
        else {
            this.GraphData = null;
        }
    };
    TrimSliderComponent.prototype.onLoaded = function (event) {
        this.data = event;
        var spec = new src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
        spec.Types[1].Columns = spec.Types[1].Columns.slice(0, 3);
        spec.Types = [spec.Types[1]];
        this.seriesChanged(spec.Types);
    };
    TrimSliderComponent.prototype.seriesChanged = function (event) {
        var _this = this;
        this.GraphData = this.flatMap(event, function (dt) {
            if (_this.data.DataTypes && _this.data.DataTypes.has(dt.Identifier)) {
                var data_1 = _this.data.DataTypes.get(dt.Identifier).Data();
                if (data_1 && data_1.length > 0) {
                    return dt.Columns.map(function (c) {
                        _this.t0 = data_1[0].Data[0];
                        return {
                            x: data_1.map(function (datum) { return (datum.Data[0] - _this.t0) / 1000.0; }),
                            y: data_1.map(function (datum) { return datum.Data[c.Identifier]; }),
                            name: c.Name,
                            yaxis: c.Id
                        };
                    });
                }
            }
        });
        return;
    };
    TrimSliderComponent.prototype.handleRelayout = function (event) {
        var data = {};
        if (event['xaxis.range[0]']) {
            data.xmin = (1000.0 * event['xaxis.range[0]']) + this.t0;
        }
        if (event['xaxis.range[1]']) {
            data.xmax = (1000.0 * event['xaxis.range[1]']) + this.t0;
        }
        if (event['xaxis.autorange']) {
            data.autorange = event['xaxis.autorange'];
        }
        this.scaled.emit(data);
    };
    TrimSliderComponent.prototype.flatMap = function (array, func) {
        var concatArray = [];
        array.map(func).forEach(function (set) { return concatArray = concatArray.concat(set); });
        return concatArray;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TrimSliderComponent.prototype, "InputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TrimSliderComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TrimSliderComponent.prototype, "scaled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TrimSliderComponent.prototype, "GraphData", void 0);
    TrimSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trim-slider',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trim-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/trim-slider/trim-slider.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trim-slider.component.scss */ "./src/app/controls/trim-slider/trim-slider.component.scss")).default]
        })
    ], TrimSliderComponent);
    return TrimSliderComponent;
}());



/***/ }),

/***/ "./src/app/graphs/datagraph/datagraph.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/graphs/datagraph/datagraph.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBocy9kYXRhZ3JhcGgvZGF0YWdyYXBoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/graphs/datagraph/datagraph.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/graphs/datagraph/datagraph.component.ts ***!
  \*********************************************************/
/*! exports provided: DataGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGraphComponent", function() { return DataGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataGraphComponent = /** @class */ (function () {
    function DataGraphComponent() {
        this.InputData = [];
        this.afterPlot = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.configOptions = {
            type: 'scattergl',
            mode: 'lines',
            marker: { color: 'red' },
        };
        this.seriesColours = ['red', 'green', 'blue'];
        this.GraphData = [{
                x: Array.from(Array(100).keys()),
                y: Array.from(Array(100).keys()).map(function (a) { return Math.sin(a); }),
                type: 'scattergl',
                mode: 'lines',
                marker: { color: 'red' }
            }];
        this.xaxis = {
            automargin: true,
        };
        this.yaxis = {
            automargin: true,
        };
        this.layout = {
            autosize: true,
            plot_bgcolor: '#FFF3',
            paper_bgcolor: '#FFF3',
            font: { color: '#afafaf' },
            hovermode: false,
            showlegend: true,
            legend: { "orientation": "h" },
            margin: {
                l: 50,
                r: 10,
                b: 50,
                t: 0,
                pad: 4
            },
            xaxis: {
                title: {
                    text: 'Time',
                },
            },
            yaxis: {
                title: {
                    text: ''
                }
            }
        };
        this.config = {
            linkText: 'Edit graph',
            showLink: true,
            responsive: true
        };
    }
    DataGraphComponent.prototype.setXAxis = function (label) {
        this.layout.xaxis.title.text = label;
    };
    DataGraphComponent.prototype.setYAxis = function (label) {
        this.layout.yaxis.title.text = label;
    };
    DataGraphComponent.prototype.onPlot = function () {
        this.afterPlot.emit();
    };
    DataGraphComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var i = 0;
        if (changes.InputData.currentValue) {
            this.GraphData = changes.InputData.currentValue.filter(function (d) { return d != null; }).map(function (d) {
                if (d) {
                    d.type = _this.configOptions.type;
                    d.marker = {
                        color: _this.seriesColours[i++]
                    };
                    d.mode = _this.configOptions.mode;
                }
                return d;
            });
        }
        else {
            this.GraphData = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataGraphComponent.prototype, "InputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DataGraphComponent.prototype, "afterPlot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DataGraphComponent.prototype, "GraphData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataGraphComponent.prototype, "setXAxis", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataGraphComponent.prototype, "setYAxis", null);
    DataGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-graph',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datagraph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/datagraph/datagraph.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datagraph.component.scss */ "./src/app/graphs/datagraph/datagraph.component.scss")).default]
        })
    ], DataGraphComponent);
    return DataGraphComponent;
}());



/***/ }),

/***/ "./src/app/graphs/graph-control-selection/graph-control-selection.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/graphs/graph-control-selection/graph-control-selection.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GraphControlSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphControlSelectionComponent", function() { return GraphControlSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphControlSelectionComponent = /** @class */ (function () {
    function GraphControlSelectionComponent() {
        this.SelectedSeries = [];
    }
    GraphControlSelectionComponent.prototype.seriesChanged = function (event) {
        this.SelectedSeries = event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GraphControlSelectionComponent.prototype, "VertigoRawData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GraphControlSelectionComponent.prototype, "VertigoProcessedData", void 0);
    GraphControlSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'graph-control-selection',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graph-control-selection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control-selection/graph-control-selection.component.html")).default,
        })
    ], GraphControlSelectionComponent);
    return GraphControlSelectionComponent;
}());



/***/ }),

/***/ "./src/app/graphs/graph-control/graph-control.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/graphs/graph-control/graph-control.component.ts ***!
  \*****************************************************************/
/*! exports provided: GraphControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphControlComponent", function() { return GraphControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../processing/dataspec */ "./src/app/processing/dataspec.ts");
/* harmony import */ var src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/processing/processes/rawdata */ "./src/app/processing/processes/rawdata.ts");




var GraphControlComponent = /** @class */ (function () {
    function GraphControlComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.selectedSeries = [];
        this.renderRequested = false;
        this.lastRender = 0;
        this.dataListener = function (a, r) {
            var timeDiff = Math.round((Date.now() - _this.lastRender) / 1000);
            if (!_this.renderRequested && (!_this.lastRender || timeDiff > 1)) {
                _this.renderRequested = true;
                _this.lastRender = Date.now();
                _this.zone.run(function () {
                    _this.controller.seriesChanged(_this.selectedSeries);
                });
            }
        };
        this.controller = this;
        this.GraphData = [{}];
    }
    Object.defineProperty(GraphControlComponent.prototype, "RawData", {
        set: function (vertigoRawData) {
            this.onLoaded(vertigoRawData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphControlComponent.prototype, "ProcessedData", {
        set: function (vertigoProcessedData) {
            this.onProcessedLoaded(vertigoProcessedData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphControlComponent.prototype, "SelectedSeries", {
        set: function (selectedSeries) {
            this.selectedSeries = selectedSeries;
            this.seriesChanged(selectedSeries);
        },
        enumerable: true,
        configurable: true
    });
    GraphControlComponent.prototype.seriesChanged = function (event) {
        var _this = this;
        if (this.vertigoProcessedData) {
            this.GraphData = this.flatMap(event, function (dt) {
                if (_this.vertigoProcessedData.DataTypes && _this.vertigoProcessedData.DataTypes.has(dt.Identifier)) {
                    var data_1 = src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_3__["RawData"].Cast(_this.vertigoProcessedData.DataTypes.get(dt.Identifier)).Data();
                    if (data_1 && data_1.length > 0) {
                        return dt.Columns.map(function (c) {
                            var t0 = data_1[0].Data[0];
                            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                            d.setUTCSeconds(t0 / 1000.0);
                            var isDate = d < new Date(Date.now()) && d > new Date(0);
                            return {
                                x: data_1.map(function (datum) { return isDate ? new Date(datum.Data[0]).toISOString() : (datum.Data[0] - t0) / 1000.0; }),
                                y: data_1.map(function (datum) { return datum.Data[c.Identifier]; }),
                                name: c.Name + ' (' + c.Units + ')',
                                yaxis: c.Id,
                                typeid: dt.Identifier,
                                colid: c.Id,
                            };
                        });
                    }
                }
            });
        }
        else if (this.vertigoRawData) {
            this.GraphData = this.flatMap(event, function (dt) {
                if (_this.vertigoRawData.DataTypes && _this.vertigoRawData.DataTypes.has(dt.Identifier)) {
                    var data_2 = src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_3__["RawData"].Cast(_this.vertigoRawData.DataTypes.get(dt.Identifier)).Data();
                    if (data_2 && data_2.length > 0) {
                        return dt.Columns.map(function (c) {
                            var t0 = data_2[0].Data[0];
                            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                            d.setUTCSeconds(t0 / 1000.0);
                            var isDate = d < new Date(Date.now()) && d > new Date(0);
                            return {
                                x: data_2.map(function (datum) { return isDate ? new Date(datum.Data[0]).toISOString() : (datum.Data[0] - t0) / 1000.0; }),
                                y: data_2.map(function (datum) { return datum.Data[c.Identifier]; }),
                                name: c.Name + ' (' + c.Units + ')',
                                yaxis: c.Id,
                                typeid: dt.Identifier,
                                colid: c.Id,
                            };
                        });
                    }
                }
            });
        }
        return;
    };
    GraphControlComponent.prototype.flatMap = function (array, func) {
        var concatArray = [];
        array.map(func).forEach(function (set) { return concatArray = concatArray.concat(set); });
        return concatArray;
    };
    GraphControlComponent.prototype.onLoaded = function (event) {
        var _this = this;
        if (this.vertigoRawData)
            this.vertigoRawData.DataTypes.forEach(function (dt) { return dt.RemoveListener(_this.dataListener); });
        this.vertigoRawData = event;
        if (this.vertigoRawData) {
            this.vertigoRawData.DataTypes.forEach(function (dt) { return dt.AddListener(_this.dataListener); });
            this.vertigoRawData.DataTypes.forEach(function (dt, key) {
                dt.AddListener(function (a, r) {
                    var type = _this.selectedSeries.find(function (s) { return s.Identifier === key; });
                    if (type) {
                        type.Columns.forEach(function (col) {
                            var series = _this.GraphData.find(function (series) { return series.typeid === key; });
                            var t0 = series.x[0] * 1000.0;
                            series.x.push(a.map(function (datum) { return (datum.Data[0] - t0) / 1000.0; }));
                            series.y.push(a.map(function (datum) { return datum.Data[col.Identifier]; }));
                        });
                    }
                });
            });
        }
        if (this.flatMap(this.selectedSeries, function (dt) { return dt.Columns; }).length === 0) {
            var spec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
            spec.Types[1].Columns = spec.Types[1].Columns.slice(0, 3);
            spec.Types = [spec.Types[1]];
            this.seriesChanged(spec.Types);
        }
        else {
            this.seriesChanged(this.selectedSeries);
        }
    };
    GraphControlComponent.prototype.onProcessedLoaded = function (event) {
        var _this = this;
        this.vertigoProcessedData = event;
        if (this.vertigoRawData) {
            this.vertigoRawData.DataTypes.forEach(function (dt, key) {
                dt.AddListener(function (a, r) {
                    var type = _this.selectedSeries.find(function (s) { return s.Identifier === key; });
                    if (type) {
                        type.Columns.forEach(function (col) {
                            var series = _this.GraphData.find(function (series) { return series.typeid === key; });
                            var t0 = series.x[0] * 1000.0;
                            series.x.push(a.map(function (datum) { return (datum.Data[0] - t0) / 1000.0; }));
                            series.y.push(a.map(function (datum) { return datum.Data[col.Identifier]; }));
                        });
                    }
                });
            });
        }
        if (this.flatMap(this.selectedSeries, function (dt) { return dt.Columns; }).length === 0) {
            var spec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
            spec.Types[1].Columns = spec.Types[1].Columns.slice(0, 3);
            spec.Types = [spec.Types[1]];
            this.seriesChanged(spec.Types);
        }
        else {
            this.seriesChanged(this.selectedSeries);
        }
    };
    GraphControlComponent.prototype.onRender = function () {
        this.renderRequested = false;
    };
    GraphControlComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GraphControlComponent.prototype, "RawData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GraphControlComponent.prototype, "ProcessedData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GraphControlComponent.prototype, "SelectedSeries", null);
    GraphControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'graph-control',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graph-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graph-control/graph-control.component.html")).default,
        })
    ], GraphControlComponent);
    return GraphControlComponent;
}());



/***/ }),

/***/ "./src/app/graphs/graphs.module.ts":
/*!*****************************************!*\
  !*** ./src/app/graphs/graphs.module.ts ***!
  \*****************************************/
/*! exports provided: GraphsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphsModule", function() { return GraphsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datagraph_datagraph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datagraph/datagraph.component */ "./src/app/graphs/datagraph/datagraph.component.ts");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/fesm5/angular-plotly.js.js");
/* harmony import */ var _selector_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selector/selector.component */ "./src/app/graphs/selector/selector.component.ts");
/* harmony import */ var _graph_control_graph_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph-control/graph-control.component */ "./src/app/graphs/graph-control/graph-control.component.ts");
/* harmony import */ var _graph_control_selection_graph_control_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graph-control-selection/graph-control-selection.component */ "./src/app/graphs/graph-control-selection/graph-control-selection.component.ts");









var GraphsModule = /** @class */ (function () {
    function GraphsModule() {
    }
    GraphsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _datagraph_datagraph_component__WEBPACK_IMPORTED_MODULE_4__["DataGraphComponent"],
                _selector_selector_component__WEBPACK_IMPORTED_MODULE_6__["SelectorComponent"],
                _graph_control_selection_graph_control_selection_component__WEBPACK_IMPORTED_MODULE_8__["GraphControlSelectionComponent"],
                _graph_control_graph_control_component__WEBPACK_IMPORTED_MODULE_7__["GraphControlComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__["PlotlyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                _datagraph_datagraph_component__WEBPACK_IMPORTED_MODULE_4__["DataGraphComponent"],
                _selector_selector_component__WEBPACK_IMPORTED_MODULE_6__["SelectorComponent"],
                _graph_control_selection_graph_control_selection_component__WEBPACK_IMPORTED_MODULE_8__["GraphControlSelectionComponent"],
                _graph_control_graph_control_component__WEBPACK_IMPORTED_MODULE_7__["GraphControlComponent"],
            ]
        })
    ], GraphsModule);
    return GraphsModule;
}());



/***/ }),

/***/ "./src/app/graphs/selector/selector.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/graphs/selector/selector.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBocy9zZWxlY3Rvci9zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/graphs/selector/selector.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/graphs/selector/selector.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorComponent", function() { return SelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../processing/dataspec */ "./src/app/processing/dataspec.ts");
/* harmony import */ var _processing_datatype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../processing/datatype */ "./src/app/processing/datatype.ts");




var SelectorComponent = /** @class */ (function () {
    function SelectorComponent() {
        this.Dataspec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
        this.SelectedValues = [];
        this.SelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SelectorComponent.prototype.ngOnInit = function () {
    };
    SelectorComponent.prototype.ngOnChanges = function (changes) {
        //console.log(this.SelectedValue);
    };
    SelectorComponent.prototype.selectionChanged = function (event) {
        var _this = this;
        var DataTypes = [];
        Object.values(event).forEach(function (v) {
            var key = v.value.split(":")[1].trim().replace('\'', '').replace('\'', '').split(",");
            var group = _this.Dataspec.Types.find(function (t) { return t.Id === key[0]; });
            var col = group.Columns.find(function (d) { return d.Id === key[1]; });
            if (DataTypes.find(function (t) { return t.Id === key[0]; })) {
                DataTypes.find(function (t) { return t.Id === key[0]; }).Columns.push(col);
            }
            else {
                var newDataType = new _processing_datatype__WEBPACK_IMPORTED_MODULE_3__["DataType"]().from(group);
                newDataType.Columns = [];
                newDataType.Columns.push(col);
                DataTypes.push(newDataType);
            }
        });
        this.SelectedValues = DataTypes;
        this.SelectionChanged.emit(this.SelectedValues);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SelectorComponent.prototype, "SelectionChanged", void 0);
    SelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'selector',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/selector/selector.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selector.component.scss */ "./src/app/graphs/selector/selector.component.scss")).default]
        })
    ], SelectorComponent);
    return SelectorComponent;
}());



/***/ }),

/***/ "./src/app/maps/livemap/livemap.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/maps/livemap/livemap.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbGl2ZW1hcC9saXZlbWFwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/maps/livemap/livemap.component.ts":
/*!***************************************************!*\
  !*** ./src/app/maps/livemap/livemap.component.ts ***!
  \***************************************************/
/*! exports provided: LivemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivemapComponent", function() { return LivemapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!leaflet/dist/leaflet.css */ "./node_modules/style-loader/dist/index.js!./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _processing_dataspec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../processing/dataspec */ "./src/app/processing/dataspec.ts");





var LivemapComponent = /** @class */ (function () {
    function LivemapComponent() {
        this.InputData = [];
        this.markerIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconSize: [32, 32],
            shadowSize: [32, 25],
            iconAnchor: [16, 32],
            shadowAnchor: [13, 25],
            iconUrl: 'assets/map/map-marker.png',
            shadowUrl: 'assets/map/marker-shadow.png'
        });
        this.lat = 0;
        this.lon = 0;
        this.options = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '...' }),
                leaflet__WEBPACK_IMPORTED_MODULE_2__["polyline"]([[]]),
                leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([0, 0], { icon: this.markerIcon })
            ],
            zoom: 5,
            center: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]({ lat: this.lat, lng: this.lon }),
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Esri World Imagery': leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                }),
                'CartoDB DarkMatter': leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 19
                })
            }
        };
        this.layers = this.options.layers;
    }
    LivemapComponent_1 = LivemapComponent;
    Object.defineProperty(LivemapComponent.prototype, "RawData", {
        set: function (vertigoRawData) {
            var _this = this;
            this.vertigoRawData = vertigoRawData;
            var gpsSpecId = LivemapComponent_1.dataSpec.Types.find(function (s) { return s.Id === "gps"; });
            var latId = gpsSpecId.Columns.find(function (c) { return c.Id === "lat"; });
            var lonId = gpsSpecId.Columns.find(function (c) { return c.Id === "lon"; });
            if (this.vertigoRawData) {
                var rawData = this.vertigoRawData.DataTypes.get(gpsSpecId.Identifier);
                rawData.AddListener(function (a, r) {
                    a.forEach(function (dp) {
                        var polyLine = _this.layers[1];
                        polyLine.addLatLng([+dp.Data[latId.Identifier], +dp.Data[lonId.Identifier]]);
                    });
                });
                var data = rawData.Data();
                if (data.length > 0) {
                    var t0 = data[0].Data[0];
                    var latlngs = data.map(function (datum) { return [+datum.Data[latId.Identifier], +datum.Data[lonId.Identifier]]; });
                    var path = leaflet__WEBPACK_IMPORTED_MODULE_2__["polyline"](latlngs);
                    this.layers[1] = path;
                    this.map.fitBounds(path.getBounds());
                    this.lat = latlngs[latlngs.length - 1][0];
                    this.lon = latlngs[latlngs.length - 1][1];
                    this.layers[2] = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](latlngs[latlngs.length - 1], { icon: this.markerIcon });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LivemapComponent.prototype.reload = function () {
        var _this = this;
        setTimeout(function () {
            _this.map.invalidateSize();
        }, 0);
    };
    LivemapComponent.prototype.ngOnChanges = function (changes) {
        if (this.lat && this.lon) {
            this.options.center = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]({ lat: this.lat, lng: this.lon });
            this.layers[1] = this.layers[1];
            this.layers[2] = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.lat, this.lon], { icon: this.markerIcon });
        }
    };
    LivemapComponent.prototype.ngOnInit = function () {
    };
    LivemapComponent.prototype.onMapReady = function (map) {
        this.map = map;
        setTimeout(function () {
            map.invalidateSize();
        }, 0);
    };
    var LivemapComponent_1;
    LivemapComponent.dataSpec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_4__["Dataspec"]();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: false })
    ], LivemapComponent.prototype, "divView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LivemapComponent.prototype, "InputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LivemapComponent.prototype, "lat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LivemapComponent.prototype, "lon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LivemapComponent.prototype, "RawData", null);
    LivemapComponent = LivemapComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'live-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./livemap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/livemap/livemap.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./livemap.component.scss */ "./src/app/maps/livemap/livemap.component.scss")).default]
        })
    ], LivemapComponent);
    return LivemapComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _livemap_livemap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./livemap/livemap.component */ "./src/app/maps/livemap/livemap.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");





var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_livemap_livemap_component__WEBPACK_IMPORTED_MODULE_3__["LivemapComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
            ],
            exports: [
                _livemap_livemap_component__WEBPACK_IMPORTED_MODULE_3__["LivemapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsdWV0b290aC9ibHVldG9vdGguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.component.ts ***!
  \********************************************************/
/*! exports provided: BluetoothComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothComponent", function() { return BluetoothComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/vertigo-data */ "./src/app/processing/vertigo-data.ts");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");
/* harmony import */ var src_app_processing_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/processing/data */ "./src/app/processing/data.ts");





var BluetoothComponent = /** @class */ (function () {
    function BluetoothComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.connected = false;
        this.pause = false;
        this.stop = false;
        this.deviceName = BluetoothComponent_1.NO_CONNECTION;
        this.supported = false;
        this.title = 'Connected Device';
        this.useNotifications = true;
        this.VertigoRawData = new src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_2__["VertigoRawData"]();
        this.accx = 0.0;
        this.accy = 0.0;
        this.accz = 0.0;
        this.acc2 = 0.0;
        this.rotx = 0.0;
        this.roty = 0.0;
        this.rotz = 0.0;
        this.lon = 1.0;
        this.lat = 50.0;
        this.alt = 0.0;
        this.q0 = 0.0;
        this.q1 = 0.0;
        this.q2 = 0.0;
        this.q3 = 0.0;
        this.temp = 0.0;
        this.press = 0.0;
        this.humidity = 0.0;
        this.quat = { q0: this.q0, q1: this.q1, q2: this.q2, q3: this.q3 };
        this.rot = { x: this.rotx, y: this.roty, z: this.rotz };
        this.accel = { x: this.accx, y: this.accy, z: this.accz };
        this.fix = 'Not detected';
        this.flags = 'Not detected';
        this.versionNumber = 'Not detected';
        this.serialNumber = 'Not detected';
        this.gpsState = 'Not detected';
        this.imuState = 'Not detected';
        this.atmosphericState = 'Not detected';
        this.loggerState = 'Not detected';
        this.graphData = [
            function () { return _this.accx; },
            function () { return _this.accy; },
            function () { return _this.accz; },
            function () { return _this.rotx; },
            function () { return _this.roty; },
            function () { return _this.rotz; },
        ];
        this.VertigoRawData.init(new src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__["Dataspec"]());
    }
    BluetoothComponent_1 = BluetoothComponent;
    BluetoothComponent.prototype.lookupLoggerState = function (byte) {
        switch (byte) {
            case 0x00: return 'Unconfigured';
            case 0x01: return 'No SD card present'; // (will go to “Ready” when detected and mounted)
            case 0x02: return 'Clearing SD card of previous log files';
            case 0x03: return 'Initialising'; // (prepares for logging, opens log file, then moves to “Logging”)
            case 0x04: return 'Pending config'; // (waiting for configuration to be updated before moving to “Ready”)
            case 0x05: return 'Ready'; // (will go to “Initialising” on start request, or to “No SD” if SD card is removed)
            case 0x06: return 'Logging'; // (will go to “Finalise” on stop request)
            case 0x07: return 'Finalise'; // (closing file handles after end of run, will return to “Ready”)
            case 0x08: return 'Fatal error'; //
        }
    };
    BluetoothComponent.prototype.lookupGPSFix = function (byte) {
        switch (byte) {
            case 0: return 'No Fix';
            case 2: return '2D Fix';
            case 3: return '3D Fix';
        }
    };
    BluetoothComponent.prototype.lookupGPSvalidity = function (byte) {
        // tslint:disable-next-line: no-bitwise
        switch (0x4 & byte) {
            case 0x00: return 'No valid time information';
            case 0x01: return 'Valid date';
            case 0x02: return 'Valid time';
            case 0x03: return 'Valid date and time';
            case 0x04: return 'Valid time of day';
            case 0x05: return 'Valid time of day';
            case 0x06: return 'Valid time of day';
            case 0x07: return 'Valid time of day';
            case 0x08: return 'Valid magnetic declination, No valid time information';
            case 0x09: return 'Valid magnetic declination and date';
            case 0x0a: return 'Valid magnetic declination and time';
            case 0x0b: return 'Valid magnetic declination, date and time';
            case 0x0c: return 'Valid magnetic declination and time of day';
            case 0x0d: return 'Valid magnetic declination and time of day';
            case 0x0e: return 'Valid magnetic declination and time of day';
            case 0x0f: return 'Valid magnetic declination and time of day';
        }
    };
    BluetoothComponent.prototype.lookupIMUState = function (byte) {
        switch (byte) {
            case 0x00: return 'Unconfigured';
            case 0x01: return 'Initialisation failed';
            case 0x02: return 'Armed';
            case 0x03: return 'Generating';
            case 0x04: return 'Finalise';
            case 0x05: return 'Calibrating';
        }
    };
    BluetoothComponent.prototype.lookupGPSState = function (byte) {
        switch (byte) {
            case 0x00: return 'Unconfigured';
            case 0x01: return 'Initialisation failed';
            case 0x02: return 'Armed';
            case 0x03: return 'Generating';
            case 0x04: return 'Finalise';
        }
    };
    BluetoothComponent.prototype.lookupAtmosphericState = function (byte) {
        switch (byte) {
            case 0x00: return 'Unconfigured';
            case 0x01: return 'Initialisation failed';
            case 0x02: return 'Armed';
            case 0x03: return 'Generating';
            case 0x04: return 'Finalise';
        }
    };
    BluetoothComponent.prototype.reconnect = function (component) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('disconnected');
                        component.deviceName = BluetoothComponent_1.NO_CONNECTION;
                        component.connected = false;
                        if (!(!this.stop && this.device)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tryConnect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BluetoothComponent.prototype.tryConnect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.device.gatt.connect()
                        .then(function (server) {
                        _this.device.addEventListener('gattserverdisconnected', function () { return _this.reconnect(_this); });
                        return server.getPrimaryServices();
                    })
                        .then(function (services) {
                        var service = services.find(function (s) { return s.uuid === BluetoothComponent_1.serviceID; });
                        var deviceService = services.find(function (s) { return s.uuid === BluetoothComponent_1.harwareInfoServiceId; });
                        _this.registerToServices(service, BluetoothComponent_1.imuQuaternionCharacteristicID)
                            .then(function (charteristic) { return _this.imuQuaternionCharacteristic = charteristic; })
                            .then(function (c) { return _this.registerToServices(service, BluetoothComponent_1.magnetometerCharacteristicID)
                            .then(function (charteristic) { return _this.magnetometerCharacteristic = charteristic; }); })
                            .then(function (c) { return _this.registerToServices(service, BluetoothComponent_1.atmosphericCharacteristicID)
                            .then(function (charteristic) { return _this.atmosphericCharacteristic = charteristic; }).catch(function (error) {
                            return console.log("Atmospheric characteristic not present");
                        }); })
                            .then(function (c) { return _this.registerToServices(service, BluetoothComponent_1.gpsCharacteristicID)
                            .then(function (charteristic) { return _this.gpsCharacteristic = charteristic; }); })
                            .then(function (c) { return _this.registerToServices(service, BluetoothComponent_1.controlCharacteristicID)
                            .then(function (charteristic) { return _this.controlCharacteristic = charteristic; }); })
                            .then(function (c) { return _this.registerToServices(service, BluetoothComponent_1.statusCharacteristicID)
                            .then(function (charteristic) { return _this.statusCharacteristic = charteristic; }); })
                            .then(function (c) { return _this.registerToServices(deviceService, BluetoothComponent_1.firwareRevisionCharateristicID)
                            .then(function (charteristic) { return _this.firmwareVersionCharacteristic = charteristic; }); });
                        // this.registerToServices(deviceService, BluetoothComponent.serialNumberCharateristicID)
                        //   .then(charteristic => this.serialNumberCharteristic = charteristic)
                    })
                        .then(function () {
                        _this.stop = false;
                        _this.pause = false;
                        _this.pollforUpdates(_this.magnetometerCharacteristic, _this.handleMagnetometer, 1);
                        if (_this.atmosphericCharacteristic)
                            _this.pollforUpdates(_this.atmosphericCharacteristic, _this.handleAtmospheric, 1);
                        _this.pollforUpdates(_this.gpsCharacteristic, _this.handleGPS, 1000);
                        _this.pollforUpdates(_this.statusCharacteristic, _this.handleState, 1000);
                        _this.pollforUpdates(_this.imuQuaternionCharacteristic, _this.handleIMU, 1);
                        //this.readOnce(this.serialNumberCharteristic, this.handleSerial);
                        _this.readOnce(_this.firmwareVersionCharacteristic, _this.handleVersion);
                    })
                        .catch(function (error) {
                        console.log(error);
                        _this.handleBluetoothError();
                    })];
            });
        });
    };
    BluetoothComponent.prototype.connect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, device, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.supported) return [3 /*break*/, 5];
                        if (this.connected && this.device) {
                            try {
                                this.device.gatt.disconnect();
                                this.handleBluetoothDisconnect(this);
                                return [2 /*return*/];
                            }
                            catch (error) {
                                console.log('Connection failed ' + error);
                                this.handleBluetoothError();
                            }
                        }
                        options = {
                            acceptAllDevices: true,
                            optionalServices: [
                                BluetoothComponent_1.serviceID,
                                BluetoothComponent_1.harwareInfoServiceId
                            ],
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        console.log('Requesting Bluetooth Device...');
                        console.log('with ' + JSON.stringify(options));
                        return [4 /*yield*/, navigator.bluetooth.requestDevice(options)];
                    case 2:
                        device = _a.sent();
                        this.serialNumber = device.name;
                        console.log('> Name:             ' + device.name);
                        console.log('> Id:               ' + device.id);
                        console.log('> Connected:        ' + device.gatt.connected);
                        this.deviceName = device.name;
                        this.connected = true;
                        this.device = device;
                        return [4 /*yield*/, this.tryConnect()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log('Argh! ' + error_1);
                        this.handleBluetoothError();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BluetoothComponent.prototype.handleMagnetometer = function (component, event) {
        var dataArray = component.VertigoRawData.DataTypes.get(src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__["Dataspec"].Spec.Types.find(function (t) { return t.Id === "imu"; }).Identifier);
        component.accx = (event.getInt16(0, true) / 1e3) * 9.81;
        component.accy = (event.getInt16(2, true) / 1e3) * 9.81;
        component.accz = (event.getInt16(4, true) / 1e3) * 9.81;
        component.acc2 = Math.sqrt(Math.pow(component.accx, 2) + Math.pow(component.accy, 2) + Math.pow(component.accz, 2));
        component.rotx = (event.getInt16(6, true));
        component.roty = (event.getInt16(8, true));
        component.rotz = (event.getInt16(10, true));
        component.accel = { x: component.accx, y: component.accy, z: component.accz };
        dataArray.Load(new src_app_processing_data__WEBPACK_IMPORTED_MODULE_4__["Data"]([
            Date.now(),
            0,
            component.accx,
            component.accy,
            component.accz,
            component.rotx,
            component.roty,
            component.rotz,
            0, 0, 0, 0, 0, 0
        ]));
    };
    BluetoothComponent.prototype.handleAtmospheric = function (component, event) {
        var dataArray = component.VertigoRawData.DataTypes.get(src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__["Dataspec"].Spec.Types.find(function (t) { return t.Id === "atmospheric"; }).Identifier);
        component.temp = (event.getInt16(0, true) / 1e2);
        component.humidity = (event.getInt16(2, true) / 1e2);
        component.press = (event.getInt16(4, true) / 1e1);
        dataArray.Load(new src_app_processing_data__WEBPACK_IMPORTED_MODULE_4__["Data"]([
            Date.now(),
            0,
            component.press,
            component.temp,
            component.humidity
        ]));
    };
    BluetoothComponent.prototype.handleVersion = function (component, event) {
        component.versionNumber = component.uintToString(event.buffer);
    };
    BluetoothComponent.prototype.handleSerial = function (component, event) {
        component.serialNumber = component.uintToString(event.buffer);
    };
    BluetoothComponent.prototype.uintToString = function (uintArray) {
        return String.fromCharCode.apply(null, new Uint8Array(uintArray));
    };
    BluetoothComponent.prototype.handleIMU = function (component, event) {
        var dataArray = component.VertigoRawData.DataTypes.get(src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__["Dataspec"].Spec.Types.find(function (t) { return t.Id === "ahrs"; }).Identifier);
        component.q0 = (event.getFloat32(0, true));
        component.q1 = (event.getFloat32(4, true));
        component.q2 = (event.getFloat32(8, true));
        component.q3 = (event.getFloat32(12, true));
        component.quat = { q0: component.q0, q1: component.q1, q2: component.q2, q3: component.q3 };
        var arr = [component.q0, component.q1, component.q2, component.q3];
        var rpy = component.toEuler(arr);
        component.rot = { x: rpy[0], y: rpy[1], z: rpy[2] };
        dataArray.Load(new src_app_processing_data__WEBPACK_IMPORTED_MODULE_4__["Data"]([Date.now(), 0, component.q0, component.q1, component.q2, component.q3, rpy[0], rpy[1], rpy[2]]));
    };
    BluetoothComponent.prototype.handleGPS = function (component, event) {
        var dataArray = component.VertigoRawData.DataTypes.get(src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_3__["Dataspec"].Spec.Types.find(function (t) { return t.Id === "gps"; }).Identifier);
        component.lon = (event.getInt32(0, true) / 1e7);
        component.lat = (event.getInt32(4, true) / 1e7);
        component.alt = (event.getInt32(8, true) / 1e3);
        component.fix = component.lookupGPSFix(event.getUint8(12));
        component.flags = component.lookupGPSvalidity(event.getUint8(13));
        dataArray.Load(new src_app_processing_data__WEBPACK_IMPORTED_MODULE_4__["Data"]([Date.now(), 0, component.lat, component.lon, component.alt, 0, 0, 0, 0, 0]));
    };
    BluetoothComponent.prototype.handleState = function (component, event) {
        if (event.byteLength === 11) {
            component.versionNumber = String.fromCharCode(event.getInt8(0)) +
                String.fromCharCode(event.getInt8(1)) +
                String.fromCharCode(event.getInt8(2)) +
                String.fromCharCode(event.getInt8(3)) +
                String.fromCharCode(event.getInt8(4)) +
                String.fromCharCode(event.getInt8(5)) +
                String.fromCharCode(event.getInt8(6));
            component.loggerState = component.lookupLoggerState(event.getInt8(7));
            component.imuState = component.lookupIMUState(event.getInt8(8));
            component.gpsState = component.lookupGPSState(event.getInt8(9));
            component.atmosphericState = component.lookupAtmosphericState(event.getInt8(10));
        }
        else {
            component.loggerState = component.lookupLoggerState(event.getInt8(0));
            component.imuState = component.lookupIMUState(event.getInt8(1));
            component.gpsState = component.lookupGPSState(event.getInt8(2));
            component.atmosphericState = component.lookupAtmosphericState(event.getInt8(3));
        }
    };
    BluetoothComponent.prototype.startLogging = function () {
        var _this = this;
        this.pause = false;
        this.stop = false;
        if (this.device.gatt.connected) {
            this.controlCharacteristic.writeValue(new Uint8Array([0x01])).catch(function (error) {
                console.log(error);
                _this.handleBluetoothError();
            });
        }
    };
    BluetoothComponent.prototype.pauseLogging = function () {
        this.pause = !this.pause;
    };
    BluetoothComponent.prototype.stopLogging = function () {
        var _this = this;
        this.stop = true;
        if (this.device.gatt.connected) {
            this.controlCharacteristic.writeValue(new Uint8Array([0x02])).catch(function (error) {
                console.log(error);
                _this.handleBluetoothError();
            });
        }
    };
    BluetoothComponent.prototype.calibrate = function () {
        var _this = this;
        this.stop = true;
        if (this.device.gatt.connected) {
            this.controlCharacteristic.writeValue(new Uint8Array([8])).catch(function (error) {
                console.log(error);
                _this.handleBluetoothError();
            });
        }
    };
    BluetoothComponent.prototype.readOnce = function (charateristic, handler) {
        var _this = this;
        try {
            if (this.device.gatt.connected) {
                charateristic.readValue()
                    .then(function (v) {
                    handler(_this, v);
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
            else {
                this.handleBluetoothError();
            }
        }
        catch (error) {
            console.log('Argh! ' + error);
            this.handleBluetoothError();
        }
    };
    BluetoothComponent.prototype.pollforUpdates = function (charateristic, handler, delay) {
        var _this = this;
        if (this.device.gatt.connected) {
            var controller_1 = this;
            charateristic.oncharacteristicvaluechanged = function (e) {
                if (_this.pause) {
                    return;
                }
                var evt = e.target;
                var data = evt.value;
                controller_1.zone.run(function () { return handler(controller_1, data); });
            };
            return charateristic.startNotifications();
        }
        else {
            throw new Error("Cannot register charateristic " + charateristic.uuid);
        }
    };
    BluetoothComponent.prototype.handleBluetoothError = function () {
        this.handleBluetoothDisconnect(this);
    };
    BluetoothComponent.prototype.handleBluetoothDisconnect = function (component) {
        console.log('disconnected');
        component.deviceName = BluetoothComponent_1.NO_CONNECTION;
        component.stop = true;
        component.connected = false;
    };
    BluetoothComponent.prototype.toEuler = function (q) {
        var t0 = -2 * (q[2] * q[2] + q[3] * q[3]) + 1;
        var t1 = 2 * (q[1] * q[2] - q[0] * q[3]);
        var t2 = -2 * (q[1] * q[3] + q[0] * q[2]);
        var t3 = 2 * (q[2] * q[3] - q[0] * q[1]);
        var t4 = -2 * (q[1] * q[1] + q[2] * q[2]) + 1;
        if (t2 > 1) {
            t2 = 1;
        }
        if (t2 < -1) {
            t2 = -1;
        }
        var pitch = Math.asin(t2) * 2;
        var roll = Math.atan2(t3, t4);
        var yaw = Math.atan2(t1, t0);
        pitch = pitch * (180.0 / Math.PI);
        roll = roll * (180.0 / Math.PI);
        yaw = yaw * (180.0 / Math.PI);
        return [pitch, roll, yaw];
    };
    BluetoothComponent.prototype.registerToServices = function (service, charteristicID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, service.getCharacteristic(charteristicID).catch(function (e) {
                        console.error(e);
                        throw new Error("Cannot get charateristic " + charteristicID);
                    })];
            });
        });
    };
    BluetoothComponent.prototype.ngOnInit = function () {
        if (navigator.bluetooth) {
            this.supported = true;
            console.log('bluetooth supported');
        }
        else {
            this.title = 'Bluetooth is not supported in your browser! Please use Chrome or Chrome for Android';
        }
    };
    var BluetoothComponent_1;
    BluetoothComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    BluetoothComponent.NO_CONNECTION = 'No device connected, click the bluetooth button to connect!';
    //Device information service
    BluetoothComponent.harwareInfoServiceId = '0000180a-0000-1000-8000-00805f9b34fb';
    //Can't use this charateristic as it is on the gatt blocklist
    //https://github.com/WebBluetoothCG/registries/blob/master/gatt_blocklist.txt
    //private static serialNumberCharateristicID = '00002a25-0000-1000-8000-00805f9b34fb';
    //Firmware version 
    BluetoothComponent.firwareRevisionCharateristicID = '00002a26-0000-1000-8000-00805f9b34fb';
    //IMU information service
    BluetoothComponent.serviceID = 'd7a7fc0a-b32e-4bda-933f-49cbd9cfe2dc';
    // Altitude & Heading Reference System (“AHRS”)
    BluetoothComponent.imuQuaternionCharacteristicID = '45ae0807-2233-4026-b264-045a933fa973';
    // Magnetometer/Accelerometer/Rate Gyro (“MARG”)
    BluetoothComponent.magnetometerCharacteristicID = '45ae0807-2233-4026-b264-045a933fa974';
    // Atmospheric / Ambient sensors (“ATMO”)
    BluetoothComponent.atmosphericCharacteristicID = '45ae0807-2233-4026-b264-045a933fa975';
    // Global Navigation Satellite System (“GNSS”)
    BluetoothComponent.gpsCharacteristicID = 'f078622c-f2ee-4adb-896f-cef6645e1521';
    // STATUS (“STAT”)
    BluetoothComponent.statusCharacteristicID = 'c70617b6-993d-481f-b02a-7fcfbb3d2133';
    // CONTROL (“CTRL”)
    BluetoothComponent.controlCharacteristicID = 'c771b990-055f-11e9-8eb2-f2801f1b9fd1';
    BluetoothComponent = BluetoothComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bluetooth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bluetooth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bluetooth/bluetooth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bluetooth.component.scss */ "./src/app/pages/bluetooth/bluetooth.component.scss")).default]
        })
    ], BluetoothComponent);
    return BluetoothComponent;
}());



/***/ }),

/***/ "./src/app/pages/circularmotion/circularmotion.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/circularmotion/circularmotion.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpcmN1bGFybW90aW9uL2NpcmN1bGFybW90aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/circularmotion/circularmotion.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/circularmotion/circularmotion.component.ts ***!
  \******************************************************************/
/*! exports provided: CircularmotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularmotionComponent", function() { return CircularmotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CircularmotionComponent = /** @class */ (function () {
    function CircularmotionComponent() {
    }
    CircularmotionComponent.prototype.ngOnInit = function () {
    };
    CircularmotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circularmotion',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./circularmotion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circularmotion/circularmotion.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./circularmotion.component.scss */ "./src/app/pages/circularmotion/circularmotion.component.scss")).default]
        })
    ], CircularmotionComponent);
    return CircularmotionComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cent {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  transform: translate3d(0, 0, 0);\n}\n.loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1003;\n  background: #000000;\n  opacity: 0.5;\n  overflow: hidden;\n}\n.loader div:first-child {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 0 #ff386a;\n  transform: translate3d(0, 0, 0);\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n.loader div:first-child:after,\n.loader div:first-child:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n.loader div:first-child:before {\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  box-shadow: 0 3px 3px 0 #ffe420;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.loader div:first-child:after {\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  box-shadow: 0 3px 3px 0 #3dafff;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQmVuXFxEb2N1bWVudHNcXEdpdEh1YlxcdmVydGlnby13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0Usb0JBQUE7RUNDSjtFREVFO0lBQ0UseUJBQUE7RUNBSjtBQUNGO0FEYUU7RUFDRTtJQUNFLG9CQUFBO0VDSEo7RURNRTtJQUNFLHlCQUFBO0VDSko7QUFDRjtBRE9FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0xKO0FEUUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDTEo7QURRRTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FDTEo7QURRRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtbW96LWtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAzO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICB9XHJcblxyXG4gIC5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDI1NSwgNTYsIDEwNiwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZVxyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXHJcbiAgLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgfVxyXG5cclxuICAubG9hZGVyIGRpdjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2IoMjU1LCAyMjgsIDMyKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGVcclxuICB9XHJcblxyXG4gIC5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoNjEsIDE3NSwgMjU1LCAxKTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZVxyXG4gIH0iLCJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5jZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDM7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwICNmZjM4NmE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyLFxuLmxvYWRlciBkaXY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCAjZmZlNDIwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sb2FkZXIgZGl2OmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCAjM2RhZmZmO1xuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../processing/dataspec */ "./src/app/processing/dataspec.ts");
/* harmony import */ var src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/processing/processes/rawdata */ "./src/app/processing/processes/rawdata.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.Progress = 100.0;
        this.SelectedValues = { columns: [] };
        this.accx = 0.0;
        this.accy = 0.0;
        this.accz = 0.0;
        this.acc2 = 0.0;
        this.rotx = 0.0;
        this.roty = 0.0;
        this.rotz = 0.0;
        this.lon = 1.0;
        this.lat = 50.0;
        this.alt = 0.0;
        this.q0 = 0.0;
        this.q1 = 0.0;
        this.q2 = 0.0;
        this.q3 = 0.0;
        this.SelectedSeries = [];
        this.GraphData = [{}];
    }
    DashboardComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.SelectedValues);
    };
    DashboardComponent.prototype.seriesChanged = function (event) {
        var _this = this;
        this.GraphData = this.flatMap(event, function (dt) {
            if (_this.VertigoRawData.DataTypes && _this.VertigoRawData.DataTypes.has(dt.Identifier)) {
                var data_1 = src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_3__["RawData"].Cast(_this.VertigoRawData.DataTypes.get(dt.Identifier)).Data();
                if (data_1 && data_1.length > 0) {
                    return dt.Columns.map(function (c) {
                        var t0 = data_1[0].Data[0];
                        return {
                            x: data_1.map(function (datum) { return (datum.Data[0] - t0) / 1000.0; }),
                            y: data_1.map(function (datum) { return datum.Data[c.Identifier]; }),
                            name: c.Name,
                            yaxis: c.Id
                        };
                    });
                }
            }
        });
        return;
    };
    DashboardComponent.prototype.flatMap = function (array, func) {
        var concatArray = [];
        array.map(func).forEach(function (set) { return concatArray = concatArray.concat(set); });
        return concatArray;
    };
    DashboardComponent.prototype.onLoaded = function (event) {
        this.VertigoRawData = event;
        if (this.flatMap(this.SelectedSeries, function (dt) { return dt.Columns; }).length === 0) {
            var spec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
            spec.Types[1].Columns = spec.Types[1].Columns.slice(0, 3);
            spec.Types = [spec.Types[1]];
            this.seriesChanged(spec.Types);
        }
        else {
            this.seriesChanged(this.SelectedSeries);
        }
    };
    DashboardComponent.prototype.onProcessedLoaded = function (event) {
        this.VertigoProcessedData = event;
        if (this.flatMap(this.SelectedSeries, function (dt) { return dt.Columns; }).length === 0) {
            var spec = new _processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"]();
            spec.Types[1].Columns = spec.Types[1].Columns.slice(0, 3);
            spec.Types = [spec.Types[1]];
            this.seriesChanged(spec.Types);
        }
        else {
            this.seriesChanged(this.SelectedSeries);
        }
    };
    DashboardComponent.prototype.loading = function (event) {
        this.Progress = Math.round(event * 100.0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DashboardComponent.prototype, "Progress", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/instructions/instructions.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/instructions/instructions.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/instructions/instructions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/instructions/instructions.component.ts ***!
  \**************************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instructions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/instructions/instructions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instructions.component.scss */ "./src/app/pages/instructions/instructions.component.scss")).default]
        })
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-pages',
            template: "",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _bluetooth_bluetooth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bluetooth/bluetooth.component */ "./src/app/pages/bluetooth/bluetooth.component.ts");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../maps/maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _graphs_graphs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphs/graphs.module */ "./src/app/graphs/graphs.module.ts");
/* harmony import */ var _controls_controls_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controls/controls.module */ "./src/app/controls/controls.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _pendulum_pendulum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pendulum/pendulum.component */ "./src/app/pages/pendulum/pendulum.component.ts");
/* harmony import */ var _circularmotion_circularmotion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./circularmotion/circularmotion.component */ "./src/app/pages/circularmotion/circularmotion.component.ts");
/* harmony import */ var _velocitytime_velocitytime_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./velocitytime/velocitytime.component */ "./src/app/pages/velocitytime/velocitytime.component.ts");
/* harmony import */ var _trampoline_trampoline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trampoline/trampoline.component */ "./src/app/pages/trampoline/trampoline.component.ts");
/* harmony import */ var _threed_threed_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../threed/threed.module */ "./src/app/threed/threed.module.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/pages/instructions/instructions.component.ts");
















var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
    _bluetooth_bluetooth_component__WEBPACK_IMPORTED_MODULE_4__["BluetoothComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _controls_controls_module__WEBPACK_IMPORTED_MODULE_7__["ControlsModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_5__["MapsModule"],
                _graphs_graphs_module__WEBPACK_IMPORTED_MODULE_6__["GraphsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _threed_threed_module__WEBPACK_IMPORTED_MODULE_14__["ThreedModule"]
            ],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](PAGES_COMPONENTS, [
                _pendulum_pendulum_component__WEBPACK_IMPORTED_MODULE_10__["PendulumComponent"],
                _circularmotion_circularmotion_component__WEBPACK_IMPORTED_MODULE_11__["CircularmotionComponent"],
                _velocitytime_velocitytime_component__WEBPACK_IMPORTED_MODULE_12__["VelocitytimeComponent"],
                _trampoline_trampoline_component__WEBPACK_IMPORTED_MODULE_13__["TrampolineComponent"],
                _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__["InstructionsComponent"],
            ]),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pendulum/pendulum.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/pendulum/pendulum.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmR1bHVtL3BlbmR1bHVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pendulum/pendulum.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pendulum/pendulum.component.ts ***!
  \******************************************************/
/*! exports provided: PendulumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendulumComponent", function() { return PendulumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");



var PendulumComponent = /** @class */ (function () {
    function PendulumComponent() {
        this.Progress = 100.0;
        this.SelectedValues = { columns: [] };
        this.Graph1Series = src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"].slice(1, 6, 3);
        this.Graph2Series = src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"].slice(1, 6, 1);
    }
    PendulumComponent.prototype.ngOnInit = function () {
    };
    PendulumComponent.prototype.onLoaded = function (event) {
        this.VertigoRawData = event;
    };
    PendulumComponent.prototype.onProcessedLoaded = function (event) {
        this.VertigoProcessedData = event;
    };
    PendulumComponent.prototype.loading = function (event) {
        this.Progress = Math.round(event * 100.0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PendulumComponent.prototype, "Progress", void 0);
    PendulumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pendulum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pendulum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendulum/pendulum.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pendulum.component.scss */ "./src/app/pages/pendulum/pendulum.component.scss")).default]
        })
    ], PendulumComponent);
    return PendulumComponent;
}());



/***/ }),

/***/ "./src/app/pages/trampoline/trampoline.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/trampoline/trampoline.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW1wb2xpbmUvdHJhbXBvbGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/trampoline/trampoline.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/trampoline/trampoline.component.ts ***!
  \**********************************************************/
/*! exports provided: TrampolineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrampolineComponent", function() { return TrampolineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/dataspec */ "./src/app/processing/dataspec.ts");



var TrampolineComponent = /** @class */ (function () {
    function TrampolineComponent() {
        this.Progress = 100.0;
        this.SelectedValues = { columns: [] };
        this.Graph1Series = src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"].slice(1, 6, 3);
        this.Graph2Series = src_app_processing_dataspec__WEBPACK_IMPORTED_MODULE_2__["Dataspec"].slice(1, 3, 3);
    }
    TrampolineComponent.prototype.ngOnInit = function () {
    };
    TrampolineComponent.prototype.onLoaded = function (event) {
        this.VertigoRawData = event;
    };
    TrampolineComponent.prototype.onProcessedLoaded = function (event) {
        this.VertigoProcessedData = event;
    };
    TrampolineComponent.prototype.loading = function (event) {
        this.Progress = Math.round(event * 100.0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TrampolineComponent.prototype, "Progress", void 0);
    TrampolineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trampoline',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trampoline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trampoline/trampoline.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trampoline.component.scss */ "./src/app/pages/trampoline/trampoline.component.scss")).default]
        })
    ], TrampolineComponent);
    return TrampolineComponent;
}());



/***/ }),

/***/ "./src/app/pages/velocitytime/velocitytime.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/velocitytime/velocitytime.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbG9jaXR5dGltZS92ZWxvY2l0eXRpbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/velocitytime/velocitytime.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/velocitytime/velocitytime.component.ts ***!
  \**************************************************************/
/*! exports provided: VelocitytimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VelocitytimeComponent", function() { return VelocitytimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VelocitytimeComponent = /** @class */ (function () {
    function VelocitytimeComponent() {
    }
    VelocitytimeComponent.prototype.ngOnInit = function () {
    };
    VelocitytimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-velocitytime',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./velocitytime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/velocitytime/velocitytime.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./velocitytime.component.scss */ "./src/app/pages/velocitytime/velocitytime.component.scss")).default]
        })
    ], VelocitytimeComponent);
    return VelocitytimeComponent;
}());



/***/ }),

/***/ "./src/app/processing/VertigoDataStoreManager.ts":
/*!*******************************************************!*\
  !*** ./src/app/processing/VertigoDataStoreManager.ts ***!
  \*******************************************************/
/*! exports provided: VertigoDataStoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoDataStoreManager", function() { return VertigoDataStoreManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _VertigoInMemoryDataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VertigoInMemoryDataStore */ "./src/app/processing/VertigoInMemoryDataStore.ts");


var VertigoDataStoreManager = /** @class */ (function () {
    function VertigoDataStoreManager() {
    }
    VertigoDataStoreManager.GetDataStore = function () {
        if (this.store == null)
            VertigoDataStoreManager.store = new _VertigoInMemoryDataStore__WEBPACK_IMPORTED_MODULE_1__["VertigoInMemoryDataStore"]();
        return VertigoDataStoreManager.store;
    };
    VertigoDataStoreManager.ResetDataStore = function () {
        VertigoDataStoreManager.store = new _VertigoInMemoryDataStore__WEBPACK_IMPORTED_MODULE_1__["VertigoInMemoryDataStore"]();
        return VertigoDataStoreManager.store;
    };
    return VertigoDataStoreManager;
}());



/***/ }),

/***/ "./src/app/processing/VertigoInMemoryDataStore.ts":
/*!********************************************************!*\
  !*** ./src/app/processing/VertigoInMemoryDataStore.ts ***!
  \********************************************************/
/*! exports provided: VertigoInMemoryDataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoInMemoryDataStore", function() { return VertigoInMemoryDataStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var VertigoInMemoryDataStore = /** @class */ (function () {
    function VertigoInMemoryDataStore() {
        this.store = new Map();
        this.listeners = [];
    }
    VertigoInMemoryDataStore.prototype.GetAvailableDataTypes = function () {
        return Array.from(this.store.keys());
    };
    VertigoInMemoryDataStore.prototype.Get = function (type) {
        return this.store.get(type);
    };
    VertigoInMemoryDataStore.prototype.AddListener = function (listener) {
        this.listeners.push(listener);
    };
    VertigoInMemoryDataStore.prototype.Load = function (type, data) {
        this.store.set(type, data);
        this.notifyListeners([type], []);
    };
    VertigoInMemoryDataStore.prototype.Clear = function (dataType) {
        this.store.delete(dataType);
        this.notifyListeners([], [dataType]);
    };
    VertigoInMemoryDataStore.prototype.ClearAll = function () {
        var keys = Array.from(this.store.keys());
        this.notifyListeners([], keys);
    };
    VertigoInMemoryDataStore.prototype.notifyListeners = function (added, removed) {
        this.listeners.forEach(function (l) { return l.DataChanged(added, removed); });
    };
    return VertigoInMemoryDataStore;
}());



/***/ }),

/***/ "./src/app/processing/column.ts":
/*!**************************************!*\
  !*** ./src/app/processing/column.ts ***!
  \**************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Column = /** @class */ (function () {
    function Column(type) {
        this.RawType = type;
        this.Id = type.id;
        this.Name = type.name;
        this.Units = type.units;
        this.Identifier = type.identifier;
    }
    return Column;
}());



/***/ }),

/***/ "./src/app/processing/data.ts":
/*!************************************!*\
  !*** ./src/app/processing/data.ts ***!
  \************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Data = /** @class */ (function () {
    function Data(data) {
        this.Data = data.slice();
    }
    Data.prototype.AddData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] += data.Data[index];
        }
    };
    Data.prototype.SubtractData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] -= data.Data[index];
        }
    };
    Data.prototype.DivideData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] /= data.Data[index];
        }
    };
    Data.prototype.MultiplyData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] *= data.Data[index];
        }
    };
    Data.prototype.Add = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] += data;
        }
    };
    Data.prototype.Subtract = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] -= data;
        }
    };
    Data.prototype.Divide = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] /= data;
        }
    };
    Data.prototype.Multiply = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] *= data;
        }
    };
    Data.AddData = function (a, b) {
        var data = new Data(a.Data);
        data.AddData(b);
        return data;
    };
    Data.SubtractData = function (a, b) {
        var data = new Data(a.Data);
        data.SubtractData(b);
        return data;
    };
    Data.MultiplyData = function (a, b) {
        var data = new Data(a.Data);
        data.MultiplyData(b);
        return data;
    };
    Data.DivideData = function (a, b) {
        var data = new Data(a.Data);
        data.DivideData(b);
        return data;
    };
    Data.Add = function (a, b) {
        var data = new Data(a.Data);
        data.Add(b);
        return data;
    };
    Data.Subtract = function (a, b) {
        var data = new Data(a.Data);
        data.Subtract(b);
        return data;
    };
    Data.Multiply = function (a, b) {
        var data = new Data(a.Data);
        data.Multiply(b);
        return data;
    };
    Data.Divide = function (a, b) {
        var data = new Data(a.Data);
        data.Divide(b);
        return data;
    };
    return Data;
}());



/***/ }),

/***/ "./src/app/processing/dataspec.ts":
/*!****************************************!*\
  !*** ./src/app/processing/dataspec.ts ***!
  \****************************************/
/*! exports provided: Dataspec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataspec", function() { return Dataspec; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vertigo_spec_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertigo-spec.json */ "./src/app/processing/vertigo-spec.json");
var _vertigo_spec_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./vertigo-spec.json */ "./src/app/processing/vertigo-spec.json", 1);
/* harmony import */ var _datatype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatype */ "./src/app/processing/datatype.ts");



var Dataspec = /** @class */ (function () {
    function Dataspec() {
        this.RawTypes = _vertigo_spec_json__WEBPACK_IMPORTED_MODULE_1__.dataTypes;
        this.Types = this.RawTypes.map(function (t) { return new _datatype__WEBPACK_IMPORTED_MODULE_2__["DataType"]().parse(t); });
    }
    Dataspec.slice = function (type, start, take) {
        var spec = new Dataspec();
        spec.Types[type].Columns = spec.Types[type].Columns.slice(start, start + take);
        spec.Types = [spec.Types[type]];
        return spec.Types;
    };
    Dataspec.Spec = new Dataspec();
    return Dataspec;
}());



/***/ }),

/***/ "./src/app/processing/datatype.ts":
/*!****************************************!*\
  !*** ./src/app/processing/datatype.ts ***!
  \****************************************/
/*! exports provided: DataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column */ "./src/app/processing/column.ts");


var DataType = /** @class */ (function () {
    function DataType() {
    }
    DataType.prototype.parse = function (type) {
        this.RawType = type;
        this.Id = type.id;
        this.Name = type.name;
        this.Identifier = type.identifier;
        this.Columns = type.columns.map(function (t) { return new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](t); });
        return this;
    };
    DataType.prototype.from = function (clone) {
        this.RawType = clone.RawType;
        this.Columns = clone.Columns.slice();
        this.Id = clone.Id;
        this.Name = clone.Name;
        this.Identifier = clone.Identifier;
        return this;
    };
    return DataType;
}());



/***/ }),

/***/ "./src/app/processing/processes/Param.ts":
/*!***********************************************!*\
  !*** ./src/app/processing/processes/Param.ts ***!
  \***********************************************/
/*! exports provided: Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Param = /** @class */ (function () {
    function Param(name, defaultValue) {
        this.Name = name;
        this.DefaultValue = defaultValue;
        this.Value = defaultValue;
    }
    return Param;
}());



/***/ }),

/***/ "./src/app/processing/processes/ProcessingMethod.ts":
/*!**********************************************************!*\
  !*** ./src/app/processing/processes/ProcessingMethod.ts ***!
  \**********************************************************/
/*! exports provided: ProcessingMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingMethod", function() { return ProcessingMethod; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProcessingMethod = /** @class */ (function () {
    function ProcessingMethod(constructor, name, params, defaultValues) {
        this.processingMethodCreator = constructor;
        this.Name = name;
        this.Params = params;
        this.DefaultParamValues = defaultValues;
    }
    ProcessingMethod.prototype.ConstructDataBlock = function () {
        return this.processingMethodCreator(this.DefaultParamValues);
    };
    return ProcessingMethod;
}());



/***/ }),

/***/ "./src/app/processing/processes/ProcessingMethods.ts":
/*!***********************************************************!*\
  !*** ./src/app/processing/processes/ProcessingMethods.ts ***!
  \***********************************************************/
/*! exports provided: ProcessingMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingMethods", function() { return ProcessingMethods; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ProcessingMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessingMethod */ "./src/app/processing/processes/ProcessingMethod.ts");
/* harmony import */ var _smootheddata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smootheddata */ "./src/app/processing/processes/smootheddata.ts");
/* harmony import */ var _dataintegrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataintegrator */ "./src/app/processing/processes/dataintegrator.ts");
/* harmony import */ var _decimator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimator */ "./src/app/processing/processes/decimator.ts");





var ProcessingMethods = /** @class */ (function () {
    function ProcessingMethods() {
    }
    ProcessingMethods.GetAllMethods = function () {
        return [ProcessingMethods.Smoothing, ProcessingMethods.Integrating, ProcessingMethods.Decimating];
    };
    ProcessingMethods.Smoothing = new _ProcessingMethod__WEBPACK_IMPORTED_MODULE_1__["ProcessingMethod"](function (args) {
        var smoothingProcessor = new _smootheddata__WEBPACK_IMPORTED_MODULE_2__["SmoothedData"]();
        smoothingProcessor.SetParams(args);
        return smoothingProcessor;
    }, "Rolling Average", ["Window"], [50]);
    ProcessingMethods.Integrating = new _ProcessingMethod__WEBPACK_IMPORTED_MODULE_1__["ProcessingMethod"](function (args) {
        var integrationProcessor = new _dataintegrator__WEBPACK_IMPORTED_MODULE_3__["DataIntegrator"]();
        integrationProcessor.SetParams(args);
        return integrationProcessor;
    }, "Integration", [], []);
    ProcessingMethods.Decimating = new _ProcessingMethod__WEBPACK_IMPORTED_MODULE_1__["ProcessingMethod"](function (args) {
        var decimationProcessor = new _decimator__WEBPACK_IMPORTED_MODULE_4__["Decimator"]();
        decimationProcessor.SetParams(args);
        return decimationProcessor;
    }, "Decimation", ["Frequency"], [10]);
    return ProcessingMethods;
}());



/***/ }),

/***/ "./src/app/processing/processes/abstractdatablock.ts":
/*!***********************************************************!*\
  !*** ./src/app/processing/processes/abstractdatablock.ts ***!
  \***********************************************************/
/*! exports provided: AbstractDataBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDataBlock", function() { return AbstractDataBlock; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AbstractDataBlock = /** @class */ (function () {
    function AbstractDataBlock() {
        this.data = [];
        this.headers = [];
        this.listeners = [];
    }
    AbstractDataBlock.prototype.Headers = function () {
        return this.headers;
    };
    AbstractDataBlock.prototype.SetHeaders = function (headers) {
        this.headers = headers;
    };
    AbstractDataBlock.prototype.SetParams = function (params) {
    };
    AbstractDataBlock.prototype.Data = function () {
        return this.data;
    };
    AbstractDataBlock.prototype.AddListener = function (listener) {
        this.listeners.push(listener);
    };
    AbstractDataBlock.prototype.RemoveListener = function (listener) {
        this.listeners = this.listeners.filter(function (l) { return l != listener; });
    };
    AbstractDataBlock.prototype.notifyListeners = function (added, removed) {
        this.listeners.forEach(function (l) { return l(added, removed); });
    };
    AbstractDataBlock.prototype.Trim = function (min, max) {
        var minIdx = this.data.findIndex(function (v) { return v.Timestamp > min; });
        var maxIdx = this.data.findIndex(function (v) { return v.Timestamp > max; });
        if (minIdx === -1) {
            minIdx = 0;
        }
        if (maxIdx === -1) {
            maxIdx = this.data.length;
        }
        return this.data.slice(minIdx, maxIdx);
    };
    return AbstractDataBlock;
}());



/***/ }),

/***/ "./src/app/processing/processes/dataintegrator.ts":
/*!********************************************************!*\
  !*** ./src/app/processing/processes/dataintegrator.ts ***!
  \********************************************************/
/*! exports provided: DataIntegrator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataIntegrator", function() { return DataIntegrator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var DataIntegrator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataIntegrator, _super);
    function DataIntegrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataIntegrator.prototype.Load = function (data) {
        var integratedData = this.load(data);
        this.notifyListeners([integratedData], []);
    };
    DataIntegrator.prototype.load = function (data) {
        var integralStep;
        if (this.currentData && this.currentTimeStep) {
            var step = (data.Timestamp - this.currentTimeStep) / 1000.0;
            if (this.data.length == 0)
                integralStep = new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](data.Data);
            else
                integralStep = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].AddData(data, this.currentData);
            integralStep.Multiply(0.5 * step);
            integralStep.Timestamp = data.Timestamp;
            if (this.data.length > 0)
                integralStep = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].AddData(integralStep, this.data[this.data.length - 1]);
            this.data.push(integralStep);
        }
        else {
            integralStep = new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](Array.apply(null, Array(data.Data.length)).map(Number.prototype.valueOf, 0));
        }
        this.currentData = new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](data.Data);
        this.currentTimeStep = data.Timestamp;
        return integralStep;
    };
    DataIntegrator.prototype.LoadAll = function (data) {
        var _this = this;
        var integratedDataArray = [];
        data.forEach(function (d) {
            var integratedData = _this.load(d);
            integratedDataArray.push(integratedData);
        });
        this.notifyListeners(integratedDataArray, []);
    };
    return DataIntegrator;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));



/***/ }),

/***/ "./src/app/processing/processes/decimator.ts":
/*!***************************************************!*\
  !*** ./src/app/processing/processes/decimator.ts ***!
  \***************************************************/
/*! exports provided: Decimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimator", function() { return Decimator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");


var Decimator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Decimator, _super);
    function Decimator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.step = 0;
        return _this;
    }
    Decimator.prototype.SetParams = function (params) {
        this.frequency = params[0];
    };
    Decimator.prototype.Load = function (data) {
        if (this.step >= this.frequency - 1) {
            this.data.push(data);
            this.step = 0;
            this.notifyListeners([data], []);
        }
        this.step++;
    };
    Decimator.prototype.LoadAll = function (data) {
        var _this = this;
        var updated = false;
        data.forEach(function (d) {
            if (_this.step >= _this.frequency - 1) {
                _this.data.push(d);
                _this.step = 0;
                updated = true;
            }
            _this.step++;
        });
        if (updated)
            this.notifyListeners(data, []);
    };
    return Decimator;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_1__["AbstractDataBlock"]));



/***/ }),

/***/ "./src/app/processing/processes/rawdata.js":
/*!*************************************************!*\
  !*** ./src/app/processing/processes/rawdata.js ***!
  \*************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var RawData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RawData, _super);
    function RawData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawData.Cast = function (object) {
        var rd = new RawData();
        rd.SetHeaders = object.headers;
        rd.data = object.data.map(function (d) { return new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](d.Data); });
        rd.data.forEach(function (d) { return d.Timestamp = d.Data[0]; });
        return rd;
    };
    RawData.prototype.Load = function (data) {
        this.data.push(data);
        this.notifyListeners([data], []);
    };
    RawData.prototype.LoadAll = function (data) {
        var _this = this;
        data.forEach(function (d) {
            _this.data.push(d);
        });
        this.notifyListeners(data, []);
    };
    return RawData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));

//# sourceMappingURL=rawdata.js.map

/***/ }),

/***/ "./src/app/processing/processes/rawdata.ts":
/*!*************************************************!*\
  !*** ./src/app/processing/processes/rawdata.ts ***!
  \*************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var RawData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RawData, _super);
    function RawData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawData.Cast = function (object) {
        var rd = new RawData();
        rd.SetHeaders = object.headers;
        rd.data = object.data.map(function (d) { return new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](d.Data); });
        rd.data.forEach(function (d) { return d.Timestamp = d.Data[0]; });
        return rd;
    };
    RawData.prototype.Load = function (data) {
        this.data.push(data);
        this.notifyListeners([data], []);
    };
    RawData.prototype.LoadAll = function (data) {
        var _this = this;
        data.forEach(function (d) {
            _this.data.push(d);
        });
        this.notifyListeners(data, []);
    };
    return RawData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));



/***/ }),

/***/ "./src/app/processing/processes/smootheddata.ts":
/*!******************************************************!*\
  !*** ./src/app/processing/processes/smootheddata.ts ***!
  \******************************************************/
/*! exports provided: SmoothedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothedData", function() { return SmoothedData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var SmoothedData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SmoothedData, _super);
    function SmoothedData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buffer = [];
        _this.numberInBuffer = 0;
        return _this;
    }
    SmoothedData.prototype.SetParams = function (params) {
        this.bufferSize = params[0];
    };
    SmoothedData.prototype.add = function (data) {
        this.buffer.push(data);
        if (!this.combinedValue) {
            this.combinedValue = new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](data.Data);
        }
        else {
            this.combinedValue.AddData(data);
        }
        if (this.numberInBuffer === this.bufferSize) {
            var removedData = this.buffer.shift();
            this.combinedValue.SubtractData(removedData);
        }
        else {
            this.numberInBuffer++;
        }
        var smoothedData = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].Divide(this.combinedValue, this.numberInBuffer);
        smoothedData.Data[0] = data.Data[0];
        smoothedData.Data[1] = data.Data[1];
        smoothedData.Timestamp = data.Timestamp;
        this.data.push(smoothedData);
        return smoothedData;
    };
    SmoothedData.prototype.Load = function (data) {
        var smoothedData = this.add(data);
        this.notifyListeners([smoothedData], []);
    };
    SmoothedData.prototype.LoadAll = function (data) {
        var _this = this;
        var smoothedDataArray = [];
        data.forEach(function (d) {
            var smoothedData = _this.add(d);
            smoothedDataArray.push(smoothedData);
        });
        this.notifyListeners(smoothedDataArray, []);
    };
    return SmoothedData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));



/***/ }),

/***/ "./src/app/processing/vertigo-data.ts":
/*!********************************************!*\
  !*** ./src/app/processing/vertigo-data.ts ***!
  \********************************************/
/*! exports provided: VertigoRawData, VertigoProcessedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoRawData", function() { return VertigoRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoProcessedData", function() { return VertigoProcessedData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _processes_rawdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processes/rawdata.js */ "./src/app/processing/processes/rawdata.js");


var VertigoRawData = /** @class */ (function () {
    function VertigoRawData() {
        this.DataTypes = new Map();
    }
    VertigoRawData.prototype.init = function (spec) {
        var _this = this;
        spec.Types.forEach(function (t) {
            var rd = new _processes_rawdata_js__WEBPACK_IMPORTED_MODULE_1__["RawData"]();
            rd.SetHeaders(t.Columns.map(function (c) { return c.Name; }));
            _this.DataTypes.set(t.Identifier, rd);
        });
    };
    return VertigoRawData;
}());

var VertigoProcessedData = /** @class */ (function () {
    function VertigoProcessedData() {
        this.DataTypes = new Map();
    }
    return VertigoProcessedData;
}());



/***/ }),

/***/ "./src/app/processing/vertigo-spec.json":
/*!**********************************************!*\
  !*** ./src/app/processing/vertigo-spec.json ***!
  \**********************************************/
/*! exports provided: dataTypes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dataTypes\":[{\"id\":\"gps\",\"name\":\"gps\",\"identifier\":1,\"columns\":[{\"identifier\":2,\"id\":\"lon\",\"name\":\"longitude\",\"units\":\"Decimal Degrees x 1e7\"},{\"identifier\":3,\"id\":\"lat\",\"name\":\"latitude\",\"units\":\"Decimal Degrees x 1e7\"},{\"identifier\":4,\"id\":\"alt\",\"name\":\"altitude\",\"units\":\"mm\"},{\"identifier\":5,\"id\":\"veln\",\"name\":\"north velocity\",\"units\":\"mm/s\"},{\"identifier\":6,\"id\":\"vele\",\"name\":\"east velocity\",\"units\":\"mm/s\"},{\"identifier\":7,\"id\":\"veld\",\"name\":\"down velocity\",\"units\":\"mm/s\"},{\"identifier\":8,\"id\":\"acch\",\"name\":\"horizontal accuracy\",\"units\":\"mm\"},{\"identifier\":9,\"id\":\"accv\",\"name\":\"vertical accuracy\",\"units\":\"mm\"}]},{\"id\":\"imu\",\"name\":\"imu\",\"identifier\":2,\"columns\":[{\"identifier\":2,\"id\":\"ax\",\"name\":\"ax\",\"units\":\"g\"},{\"identifier\":3,\"id\":\"ay\",\"name\":\"ay\",\"units\":\"g\"},{\"identifier\":4,\"id\":\"az\",\"name\":\"az\",\"units\":\"g\"},{\"identifier\":5,\"id\":\"rx\",\"name\":\"rx\",\"units\":\"deg/s\"},{\"identifier\":6,\"id\":\"ry\",\"name\":\"ry\",\"units\":\"deg/s\"},{\"identifier\":7,\"id\":\"rz\",\"name\":\"rz\",\"units\":\"deg/s\"},{\"identifier\":8,\"id\":\"wax\",\"name\":\"world frame ax\",\"units\":\"g\"},{\"identifier\":9,\"id\":\"way\",\"name\":\"world frame ay\",\"units\":\"g\"},{\"identifier\":10,\"id\":\"waz\",\"name\":\"world frame az\",\"units\":\"g\"},{\"identifier\":11,\"id\":\"wrx\",\"name\":\"world frame rx\",\"units\":\"deg/s\"},{\"identifier\":12,\"id\":\"wry\",\"name\":\"world frame ry\",\"units\":\"deg/s\"},{\"identifier\":13,\"id\":\"wrz\",\"name\":\"world frame rz\",\"units\":\"deg/s\"}]},{\"id\":\"ahrs\",\"name\":\"ahrs\",\"identifier\":3,\"columns\":[{\"identifier\":2,\"id\":\"q0\",\"name\":\"q0\",\"units\":\"1\"},{\"identifier\":3,\"id\":\"q1\",\"name\":\"q1\",\"units\":\"i\"},{\"identifier\":4,\"id\":\"q2\",\"name\":\"q2\",\"units\":\"j\"},{\"identifier\":5,\"id\":\"q3\",\"name\":\"q3\",\"units\":\"k\"},{\"identifier\":6,\"id\":\"r\",\"name\":\"roll\",\"units\":\"deg\"},{\"identifier\":7,\"id\":\"p\",\"name\":\"pitch\",\"units\":\"deg\"},{\"identifier\":8,\"id\":\"y\",\"name\":\"yaw\",\"units\":\"deg\"}]},{\"id\":\"atmospheric\",\"name\":\"atmospheric\",\"identifier\":4,\"columns\":[{\"identifier\":2,\"id\":\"press\",\"name\":\"pressure\",\"units\":\"kPa\"},{\"identifier\":3,\"id\":\"temperature\",\"name\":\"temperature\",\"units\":\"°C\"},{\"identifier\":4,\"id\":\"humidity\",\"name\":\"humidity\",\"units\":\"%\"}]}]}");

/***/ }),

/***/ "./src/app/threed/orientation/orientation.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/threed/orientation/orientation.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RocmVlZC9vcmllbnRhdGlvbi9vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/threed/orientation/orientation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/threed/orientation/orientation.component.ts ***!
  \*************************************************************/
/*! exports provided: OrientationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientationComponent", function() { return OrientationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_orbitcontrols_ts_port__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-orbitcontrols-ts-port */ "./node_modules/three-orbitcontrols-ts-port/build/index.js");
/* harmony import */ var three_orbitcontrols_ts_port__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols_ts_port__WEBPACK_IMPORTED_MODULE_3__);




var STLLoader = __webpack_require__(/*! three-stl-loader */ "./node_modules/three-stl-loader/index.js")(three__WEBPACK_IMPORTED_MODULE_2__);
var OrientationComponent = /** @class */ (function () {
    function OrientationComponent(zone) {
        this.zone = zone;
    }
    OrientationComponent.prototype.ngAfterViewInit = function () {
        var _this_1 = this;
        var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene = scene;
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, 1.0, 0.1, 1000);
        this.camera = camera;
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        this.renderer = renderer;
        // renderer.setSize(this.renderCanvas.nativeElement.offsetWidth, 400);
        this.renderCanvas.nativeElement.appendChild(renderer.domElement);
        scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0xffffff));
        var light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff);
        light.position.set(1, -1, -1);
        scene.add(light);
        var map = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('/assets/mesh/case.stl');
        map.wrapS = map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
        map.anisotropy = 16;
        var loader = new STLLoader();
        // loader.load('/assets/mesh/case.stl', function (geometry) {
        // 	let material = new THREE.MeshLambertMaterial({ map, side: THREE.DoubleSide });
        // 	var mesh = new THREE.Mesh(geometry, material)
        // 	// this.cube = mesh;
        // 	scene.add(mesh)
        //   })
        var _this = this;
        loader.load('/assets/mesh/case.stl', function (geometry) {
            var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x27cfbe, specular: 0x111111, shininess: 500 });
            var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
            //mesh.rotation.set(- Math.PI / 2, 0, - Math.PI / 2);
            mesh.scale.set(0.01, 0.01, 0.01);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            scene.add(mesh);
            _this.cube = mesh;
        });
        // var material = new THREE.MeshBasicMaterial( { color: 0x4444aa } );
        // let cube = new THREE.Mesh(geometry, material);
        // this.cube = cube;
        var axis = new three__WEBPACK_IMPORTED_MODULE_2__["AxesHelper"](1000);
        this.axis = axis;
        var helper = new three__WEBPACK_IMPORTED_MODULE_2__["GridHelper"](10, 10, 0x888888, 0x888888);
        this.arrow = new three__WEBPACK_IMPORTED_MODULE_2__["ArrowHelper"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0), 0, 0x4444aa, 0.1, 0.1);
        scene.add(helper);
        scene.add(axis);
        scene.add(this.arrow);
        camera.position.x = -2;
        camera.position.y = 1;
        this.controls = new three_orbitcontrols_ts_port__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](camera, renderer.domElement);
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.addEventListener('change', function () { return _this_1.checkSizeAndAnimate(); });
        this.animate();
        // renderer.render(scene, camera);
        this.resizeCanvasToDisplaySize();
    };
    OrientationComponent.prototype.ngOnChanges = function (changes) {
        if (this.renderer) {
            this.resizeCanvasToDisplaySize();
        }
    };
    OrientationComponent.prototype.checkSizeAndAnimate = function () {
        this.resizeCanvasToDisplaySize();
        this.animate();
    };
    OrientationComponent.prototype.animate = function () {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // axis.rotation.x += 0.01;
        // axis.rotation.y += 0.01;
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    OrientationComponent.prototype.onResize = function (event) {
        var canvas = this.renderer.domElement;
        // look up the size the canvas is being displayed
        var width = this.renderCanvas.nativeElement.clientWidth;
        var height = this.renderCanvas.nativeElement.clientHeight;
        if (width === 0.0) {
            width = 400;
        }
        if (height === 0.0) {
            height = 400;
        }
        if (width > event.target.innerWidth) {
            width = event.target.innerWidth;
        }
        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {
            // you must pass false here or three.js sadly fights the browser
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            // update any render target sizes here
            this.controls.update();
            this.animate();
        }
    };
    OrientationComponent.prototype.resizeCanvasToDisplaySize = function () {
        var canvas = this.renderer.domElement;
        // look up the size the canvas is being displayed
        var width = this.renderCanvas.nativeElement.clientWidth;
        var height = this.renderCanvas.nativeElement.clientHeight;
        if (width === 0.0) {
            width = 400;
        }
        if (height === 0.0) {
            height = 400;
        }
        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {
            // you must pass false here or three.js sadly fights the browser
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            // update any render target sizes here
            this.controls.update();
            this.animate();
        }
    };
    OrientationComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OrientationComponent.prototype, "Quat", {
        set: function (quat) {
            var quaternion = new three__WEBPACK_IMPORTED_MODULE_2__["Quaternion"](-quat.q1, -quat.q3, quat.q2, -quat.q0);
            if (this.cube) {
                this.cube.setRotationFromQuaternion(quaternion);
            }
            if (this.renderer) {
                this.renderer.render(this.scene, this.camera);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrientationComponent.prototype, "Accel", {
        set: function (accel) {
            var vector = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.1 * accel.x, -0.1 * accel.z, 0.1 * accel.y);
            if (this.arrow) {
                vector.applyQuaternion(this.cube.quaternion);
                this.arrow.setDirection(vector);
                this.arrow.setLength(vector.manhattanLength());
            }
            if (this.renderer) {
                this.renderer.render(this.scene, this.camera);
            }
        },
        enumerable: true,
        configurable: true
    });
    OrientationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('renderCanvas', { static: false })
    ], OrientationComponent.prototype, "renderCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrientationComponent.prototype, "Quat", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrientationComponent.prototype, "Accel", null);
    OrientationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orientation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orientation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threed/orientation/orientation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orientation.component.scss */ "./src/app/threed/orientation/orientation.component.scss")).default]
        })
    ], OrientationComponent);
    return OrientationComponent;
}());



/***/ }),

/***/ "./src/app/threed/threed.module.ts":
/*!*****************************************!*\
  !*** ./src/app/threed/threed.module.ts ***!
  \*****************************************/
/*! exports provided: ThreedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreedModule", function() { return ThreedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orientation_orientation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientation/orientation.component */ "./src/app/threed/orientation/orientation.component.ts");




var ThreedModule = /** @class */ (function () {
    function ThreedModule() {
    }
    ThreedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orientation_orientation_component__WEBPACK_IMPORTED_MODULE_3__["OrientationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _orientation_orientation_component__WEBPACK_IMPORTED_MODULE_3__["OrientationComponent"]
            ]
        })
    ], ThreedModule);
    return ThreedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function () { if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(function (active) { return !active && navigator.serviceWorker.register('/ngsw-worker.js'); }).catch(console.error);
} });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben\Documents\GitHub\vertigo-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map