(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f4d06bef-f536-48c6-80a1-3c620497dd8f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f4d06bef-f536-48c6-80a1-3c620497dd8f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"7dba4f6f-fa96-4813-93d6-6a7d62ae0eb1":{"roots":{"references":[{"attributes":{},"id":"1248","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1278"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1279"}},"x":{"field":"indices"}},"id":"1285","type":"VBar"},{"attributes":{},"id":"1261","type":"BasicTicker"},{"attributes":{},"id":"1294","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1270","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1256"},"ticker":null},"id":"1259","type":"Grid"},{"attributes":{"fields":[]},"id":"1278","type":"Stack"},{"attributes":{"items":[{"id":"1297"},{"id":"1314"}]},"id":"1296","type":"Legend"},{"attributes":{},"id":"1293","type":"Selection"},{"attributes":{"data":{"duplicate":[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,83,52,43,81,32,34,32,58,63,119,101,51,57,33,32,80,50,34,33,32,34,33,52,34,32,32,32,46,56,499,74,32,32,32,32,32,32,43,32,46],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],"unique":[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,60,33,25,28,2,6,5,23,23,22,116,35,48,11,4,84,46,14,14,2,14,3,45,15,2,4,2,13,22,17,4,4,3,3,2,2,3,4,4,5]},"selected":{"id":"1311"},"selection_policy":{"id":"1312"}},"id":"1298","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1280"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1281"}},"x":{"field":"indices"}},"id":"1300","type":"VBar"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1286"}]},"id":"1297","type":"LegendItem"},{"attributes":{},"id":"1265","type":"WheelZoomTool"},{"attributes":{"fields":["unique"]},"id":"1280","type":"Stack"},{"attributes":{},"id":"1252","type":"LinearScale"},{"attributes":{},"id":"1264","type":"PanTool"},{"attributes":{"formatter":{"id":"1290"},"major_label_orientation":0.75,"major_label_overrides":{"0":"2020-05-18 00:00:00","1":"2020-05-19 00:00:00","10":"2020-05-28 00:00:00","100":"2020-08-26 00:00:00","101":"2020-08-27 00:00:00","102":"2020-08-28 00:00:00","103":"2020-08-29 00:00:00","104":"2020-08-30 00:00:00","105":"2020-08-31 00:00:00","106":"2020-09-01 00:00:00","107":"2020-09-02 00:00:00","108":"2020-09-03 00:00:00","109":"2020-09-04 00:00:00","11":"2020-05-29 00:00:00","110":"2020-09-05 00:00:00","111":"2020-09-06 00:00:00","112":"2020-09-07 00:00:00","113":"2020-09-08 00:00:00","114":"2020-09-09 00:00:00","115":"2020-09-10 00:00:00","116":"2020-09-11 00:00:00","117":"2020-09-12 00:00:00","12":"2020-05-30 00:00:00","13":"2020-05-31 00:00:00","14":"2020-06-01 00:00:00","15":"2020-06-02 00:00:00","16":"2020-06-03 00:00:00","17":"2020-06-04 00:00:00","18":"2020-06-05 00:00:00","19":"2020-06-06 00:00:00","2":"2020-05-20 00:00:00","20":"2020-06-07 00:00:00","21":"2020-06-08 00:00:00","22":"2020-06-09 00:00:00","23":"2020-06-10 00:00:00","24":"2020-06-11 00:00:00","25":"2020-06-12 00:00:00","26":"2020-06-13 00:00:00","27":"2020-06-14 00:00:00","28":"2020-06-15 00:00:00","29":"2020-06-16 00:00:00","3":"2020-05-21 00:00:00","30":"2020-06-17 00:00:00","31":"2020-06-18 00:00:00","32":"2020-06-19 00:00:00","33":"2020-06-20 00:00:00","34":"2020-06-21 00:00:00","35":"2020-06-22 00:00:00","36":"2020-06-23 00:00:00","37":"2020-06-24 00:00:00","38":"2020-06-25 00:00:00","39":"2020-06-26 00:00:00","4":"2020-05-22 00:00:00","40":"2020-06-27 00:00:00","41":"2020-06-28 00:00:00","42":"2020-06-29 00:00:00","43":"2020-06-30 00:00:00","44":"2020-07-01 00:00:00","45":"2020-07-02 00:00:00","46":"2020-07-03 00:00:00","47":"2020-07-04 00:00:00","48":"2020-07-05 00:00:00","49":"2020-07-06 00:00:00","5":"2020-05-23 00:00:00","50":"2020-07-07 00:00:00","51":"2020-07-08 00:00:00","52":"2020-07-09 00:00:00","53":"2020-07-10 00:00:00","54":"2020-07-11 00:00:00","55":"2020-07-12 00:00:00","56":"2020-07-13 00:00:00","57":"2020-07-14 00:00:00","58":"2020-07-15 00:00:00","59":"2020-07-16 00:00:00","6":"2020-05-24 00:00:00","60":"2020-07-17 00:00:00","61":"2020-07-18 00:00:00","62":"2020-07-19 00:00:00","63":"2020-07-20 00:00:00","64":"2020-07-21 00:00:00","65":"2020-07-22 00:00:00","66":"2020-07-23 00:00:00","67":"2020-07-24 00:00:00","68":"2020-07-25 00:00:00","69":"2020-07-26 00:00:00","7":"2020-05-25 00:00:00","70":"2020-07-27 00:00:00","71":"2020-07-28 00:00:00","72":"2020-07-29 00:00:00","73":"2020-07-30 00:00:00","74":"2020-07-31 00:00:00","75":"2020-08-01 00:00:00","76":"2020-08-02 00:00:00","77":"2020-08-03 00:00:00","78":"2020-08-04 00:00:00","79":"2020-08-05 00:00:00","8":"2020-05-26 00:00:00","80":"2020-08-06 00:00:00","81":"2020-08-07 00:00:00","82":"2020-08-08 00:00:00","83":"2020-08-09 00:00:00","84":"2020-08-10 00:00:00","85":"2020-08-11 00:00:00","86":"2020-08-12 00:00:00","87":"2020-08-13 00:00:00","88":"2020-08-14 00:00:00","89":"2020-08-15 00:00:00","9":"2020-05-27 00:00:00","90":"2020-08-16 00:00:00","91":"2020-08-17 00:00:00","92":"2020-08-18 00:00:00","93":"2020-08-19 00:00:00","94":"2020-08-20 00:00:00","95":"2020-08-21 00:00:00","96":"2020-08-22 00:00:00","97":"2020-08-23 00:00:00","98":"2020-08-24 00:00:00","99":"2020-08-25 00:00:00"},"ticker":{"id":"1315"}},"id":"1256","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117]},"id":"1315","type":"FixedTicker"},{"attributes":{},"id":"1311","type":"Selection"},{"attributes":{},"id":"1292","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1260"},"dimension":1,"ticker":null},"id":"1263","type":"Grid"},{"attributes":{"data_source":{"id":"1298"},"glyph":{"id":"1300"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1301"},"selection_glyph":null,"view":{"id":"1303"}},"id":"1302","type":"GlyphRenderer"},{"attributes":{},"id":"1269","type":"HelpTool"},{"attributes":{"formatter":{"id":"1292"},"ticker":{"id":"1261"}},"id":"1260","type":"LinearAxis"},{"attributes":{},"id":"1250","type":"DataRange1d"},{"attributes":{"source":{"id":"1298"}},"id":"1303","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1264"},{"id":"1265"},{"id":"1266"},{"id":"1267"},{"id":"1268"},{"id":"1269"}]},"id":"1271","type":"Toolbar"},{"attributes":{},"id":"1254","type":"LinearScale"},{"attributes":{},"id":"1312","type":"UnionRenderers"},{"attributes":{"text":"Clones traffic"},"id":"1246","type":"Title"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1302"}]},"id":"1314","type":"LegendItem"},{"attributes":{},"id":"1290","type":"BasicTickFormatter"},{"attributes":{"data":{"duplicate":[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,83,52,43,81,32,34,32,58,63,119,101,51,57,33,32,80,50,34,33,32,34,33,52,34,32,32,32,46,56,499,74,32,32,32,32,32,32,43,32,46],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],"unique":[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,60,33,25,28,2,6,5,23,23,22,116,35,48,11,4,84,46,14,14,2,14,3,45,15,2,4,2,13,22,17,4,4,3,3,2,2,3,4,4,5]},"selected":{"id":"1293"},"selection_policy":{"id":"1294"}},"id":"1282","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1282"}},"id":"1287","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1280"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1281"}},"x":{"field":"indices"}},"id":"1301","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1279","type":"Stack"},{"attributes":{"data_source":{"id":"1282"},"glyph":{"id":"1284"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1285"},"selection_glyph":null,"view":{"id":"1287"}},"id":"1286","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1256"}],"center":[{"id":"1259"},{"id":"1263"},{"id":"1296"}],"left":[{"id":"1260"}],"plot_width":900,"renderers":[{"id":"1286"},{"id":"1302"}],"title":{"id":"1246"},"toolbar":{"id":"1271"},"x_range":{"id":"1248"},"x_scale":{"id":"1252"},"y_range":{"id":"1250"},"y_scale":{"id":"1254"}},"id":"1245","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1268","type":"ResetTool"},{"attributes":{"overlay":{"id":"1270"}},"id":"1266","type":"BoxZoomTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1281","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1278"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1279"}},"x":{"field":"indices"}},"id":"1284","type":"VBar"},{"attributes":{},"id":"1267","type":"SaveTool"}],"root_ids":["1245"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"7dba4f6f-fa96-4813-93d6-6a7d62ae0eb1","root_ids":["1245"],"roots":{"1245":"f4d06bef-f536-48c6-80a1-3c620497dd8f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();