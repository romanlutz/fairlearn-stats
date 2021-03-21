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
    
      
      
    
      var element = document.getElementById("f31f5b23-cfd9-432e-8f58-045874635cd6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f31f5b23-cfd9-432e-8f58-045874635cd6' but no matching script tag was found.")
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
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
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
                    
                  var docs_json = '{"f3c6fe32-17aa-4063-9b4c-930998901b2e":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"1416","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1381"},"ticker":null},"id":"1384","type":"Grid"},{"attributes":{"axis":{"id":"1385"},"dimension":1,"ticker":null},"id":"1388","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1403"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1404"}},"x":{"field":"indices"}},"id":"1410","type":"VBar"},{"attributes":{},"id":"1442","type":"Selection"},{"attributes":{"formatter":{"id":"1416"},"major_label_policy":{"id":"1414"},"ticker":{"id":"1386"}},"id":"1385","type":"LinearAxis"},{"attributes":{},"id":"1414","type":"AllLabels"},{"attributes":{"fields":["unique","duplicate"]},"id":"1406","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1371","type":"Title"},{"attributes":{"data":{"duplicate":[91,107,52,12,18,9,14,6,16,6,14,11,4,4,8,5,6,2,7,5,2,4,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[266,91,61,43,36,40,33,25,14,22,14,15,22,21,13,16,14,15,6,8,10,8,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1422"},"selection_policy":{"id":"1421"}},"id":"1407","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1403"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1404"}},"x":{"field":"indices"}},"id":"1409","type":"VBar"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1429"}]},"id":"1443","type":"LegendItem"},{"attributes":{},"id":"1441","type":"UnionRenderers"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1411"}]},"id":"1424","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"1405"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1406"}},"x":{"field":"indices"}},"id":"1427","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1395","type":"BoxAnnotation"},{"attributes":{},"id":"1386","type":"BasicTicker"},{"attributes":{"data":{"duplicate":[91,107,52,12,18,9,14,6,16,6,14,11,4,4,8,5,6,2,7,5,2,4,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[266,91,61,43,36,40,33,25,14,22,14,15,22,21,13,16,14,15,6,8,10,8,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1442"},"selection_policy":{"id":"1441"}},"id":"1425","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1425"}},"id":"1430","type":"CDSView"},{"attributes":{"fields":["unique"]},"id":"1405","type":"Stack"},{"attributes":{},"id":"1389","type":"PanTool"},{"attributes":{"fields":[]},"id":"1403","type":"Stack"},{"attributes":{"data_source":{"id":"1425"},"glyph":{"id":"1427"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1428"},"view":{"id":"1430"}},"id":"1429","type":"GlyphRenderer"},{"attributes":{},"id":"1390","type":"WheelZoomTool"},{"attributes":{},"id":"1421","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1395"}},"id":"1391","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1405"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1406"}},"x":{"field":"indices"}},"id":"1428","type":"VBar"},{"attributes":{},"id":"1419","type":"BasicTickFormatter"},{"attributes":{},"id":"1377","type":"LinearScale"},{"attributes":{},"id":"1392","type":"SaveTool"},{"attributes":{},"id":"1373","type":"DataRange1d"},{"attributes":{},"id":"1417","type":"AllLabels"},{"attributes":{},"id":"1422","type":"Selection"},{"attributes":{},"id":"1393","type":"ResetTool"},{"attributes":{"items":[{"id":"1424"},{"id":"1443"}]},"id":"1423","type":"Legend"},{"attributes":{},"id":"1375","type":"DataRange1d"},{"attributes":{},"id":"1394","type":"HelpTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"id":"1444","type":"FixedTicker"},{"attributes":{"data_source":{"id":"1407"},"glyph":{"id":"1409"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1410"},"view":{"id":"1412"}},"id":"1411","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"1389"},{"id":"1390"},{"id":"1391"},{"id":"1392"},{"id":"1393"},{"id":"1394"}]},"id":"1396","type":"Toolbar"},{"attributes":{},"id":"1379","type":"LinearScale"},{"attributes":{"source":{"id":"1407"}},"id":"1412","type":"CDSView"},{"attributes":{"fields":["unique"]},"id":"1404","type":"Stack"},{"attributes":{"formatter":{"id":"1419"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"paperswithcode.com","11":"opendatascience.com","12":"mail.google.com","13":"t.co","14":"anaconda.com","15":"classroom.udacity.com","16":"microsoft.com","17":"Bing","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"medium.com","21":"statics.teams.cdn.office.net","22":"engineering.linkedin.com","23":"ai.googleblog.com","24":"linkedin.com","25":"fairlearn.github.io","26":"madewithml.com","27":"azure.microsoft.com","28":"gitter.im","29":"com.google.android.gm","3":"kdnuggets.com","30":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"docs.microsoft.com","7":"sparkaisummit.com","8":"pypi.org","9":"event.on24.com"},"major_label_policy":{"id":"1417"},"ticker":{"id":"1444"}},"id":"1381","type":"LinearAxis"},{"attributes":{"below":[{"id":"1381"}],"center":[{"id":"1384"},{"id":"1388"},{"id":"1423"}],"left":[{"id":"1385"}],"renderers":[{"id":"1411"},{"id":"1429"}],"title":{"id":"1371"},"toolbar":{"id":"1396"},"width":900,"x_range":{"id":"1373"},"x_scale":{"id":"1377"},"y_range":{"id":"1375"},"y_scale":{"id":"1379"}},"id":"1370","subtype":"Figure","type":"Plot"}],"root_ids":["1370"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"f3c6fe32-17aa-4063-9b4c-930998901b2e","root_ids":["1370"],"roots":{"1370":"f31f5b23-cfd9-432e-8f58-045874635cd6"}}];
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