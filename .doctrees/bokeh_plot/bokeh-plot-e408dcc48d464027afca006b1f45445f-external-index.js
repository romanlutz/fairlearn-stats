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
    
      
      
    
      var element = document.getElementById("75b6d575-6936-42dd-bde4-83276bd946ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '75b6d575-6936-42dd-bde4-83276bd946ce' but no matching script tag was found.")
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
                    
                  var docs_json = '{"58b71791-5ba6-44a2-90f9-c8dfee5bd23b":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"overlay":{"id":"1390"}},"id":"1386","type":"BoxZoomTool"},{"attributes":{},"id":"1411","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1398"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1399"}},"x":{"field":"indices"}},"id":"1405","type":"VBar"},{"attributes":{},"id":"1372","type":"LinearScale"},{"attributes":{},"id":"1409","type":"AllLabels"},{"attributes":{},"id":"1387","type":"SaveTool"},{"attributes":{"items":[{"id":"1419"},{"id":"1438"}]},"id":"1418","type":"Legend"},{"attributes":{"text":"Top referrers"},"id":"1366","type":"Title"},{"attributes":{},"id":"1388","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1400"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1401"}},"x":{"field":"indices"}},"id":"1422","type":"VBar"},{"attributes":{},"id":"1436","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1400"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1401"}},"x":{"field":"indices"}},"id":"1423","type":"VBar"},{"attributes":{"fields":[]},"id":"1398","type":"Stack"},{"attributes":{},"id":"1370","type":"DataRange1d"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1424"}]},"id":"1438","type":"LegendItem"},{"attributes":{},"id":"1389","type":"HelpTool"},{"attributes":{},"id":"1437","type":"Selection"},{"attributes":{},"id":"1374","type":"LinearScale"},{"attributes":{"data_source":{"id":"1402"},"glyph":{"id":"1404"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1405"},"view":{"id":"1407"}},"id":"1406","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1398"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1399"}},"x":{"field":"indices"}},"id":"1404","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1390","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[113,89,46,18,9,17,6,6,11,4,4,5,7,3,6,2,7,5,2,4,3,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"unique":[242,69,60,36,40,26,25,22,15,22,21,16,11,15,9,13,6,8,10,8,9,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1417"},"selection_policy":{"id":"1416"}},"id":"1402","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1401","type":"Stack"},{"attributes":{"formatter":{"id":"1414"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"t.co","11":"classroom.udacity.com","12":"pypi.org","13":"anaconda.com","14":"Bing","15":"microsoft.com","16":"DuckDuckGo","17":"up-for-grabs.net","18":"medium.com","19":"statics.teams.cdn.office.net","2":"fairlearn.org","20":"paperswithcode.com","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"linkedin.com","24":"fairlearn.github.io","25":"madewithml.com","26":"azure.microsoft.com","27":"gitter.im","28":"com.google.android.gm","29":"infoworld.com","3":"mybuild.microsoft.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"event.on24.com","8":"opendatascience.com","9":"mail.google.com"},"major_label_policy":{"id":"1412"},"ticker":{"id":"1439"}},"id":"1376","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[113,89,46,18,9,17,6,6,11,4,4,5,7,3,6,2,7,5,2,4,3,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"unique":[242,69,60,36,40,26,25,22,15,22,21,16,11,15,9,13,6,8,10,8,9,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1437"},"selection_policy":{"id":"1436"}},"id":"1420","type":"ColumnDataSource"},{"attributes":{},"id":"1381","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1400","type":"Stack"},{"attributes":{"source":{"id":"1420"}},"id":"1425","type":"CDSView"},{"attributes":{"axis":{"id":"1376"},"ticker":null},"id":"1379","type":"Grid"},{"attributes":{"axis":{"id":"1380"},"dimension":1,"ticker":null},"id":"1383","type":"Grid"},{"attributes":{"data_source":{"id":"1420"},"glyph":{"id":"1422"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1423"},"view":{"id":"1425"}},"id":"1424","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1402"}},"id":"1407","type":"CDSView"},{"attributes":{"formatter":{"id":"1411"},"major_label_policy":{"id":"1409"},"ticker":{"id":"1381"}},"id":"1380","type":"LinearAxis"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1406"}]},"id":"1419","type":"LegendItem"},{"attributes":{"below":[{"id":"1376"}],"center":[{"id":"1379"},{"id":"1383"},{"id":"1418"}],"left":[{"id":"1380"}],"renderers":[{"id":"1406"},{"id":"1424"}],"title":{"id":"1366"},"toolbar":{"id":"1391"},"width":900,"x_range":{"id":"1368"},"x_scale":{"id":"1372"},"y_range":{"id":"1370"},"y_scale":{"id":"1374"}},"id":"1365","subtype":"Figure","type":"Plot"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]},"id":"1439","type":"FixedTicker"},{"attributes":{},"id":"1417","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1399","type":"Stack"},{"attributes":{},"id":"1414","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"1384"},{"id":"1385"},{"id":"1386"},{"id":"1387"},{"id":"1388"},{"id":"1389"}]},"id":"1391","type":"Toolbar"},{"attributes":{},"id":"1368","type":"DataRange1d"},{"attributes":{},"id":"1412","type":"AllLabels"},{"attributes":{},"id":"1384","type":"PanTool"},{"attributes":{},"id":"1416","type":"UnionRenderers"},{"attributes":{},"id":"1385","type":"WheelZoomTool"}],"root_ids":["1365"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"58b71791-5ba6-44a2-90f9-c8dfee5bd23b","root_ids":["1365"],"roots":{"1365":"75b6d575-6936-42dd-bde4-83276bd946ce"}}];
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