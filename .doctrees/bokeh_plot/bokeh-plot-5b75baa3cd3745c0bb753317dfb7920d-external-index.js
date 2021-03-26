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
    
      
      
    
      var element = document.getElementById("f05cb1f7-e37f-4f2d-8d37-7eaa46a69a4d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f05cb1f7-e37f-4f2d-8d37-7eaa46a69a4d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9d6cb30d-9018-4975-8155-a3b281020d51":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"1446","type":"UnionRenderers"},{"attributes":{"data":{"duplicate":[88,118,48,19,18,9,7,16,6,6,11,4,4,5,8,2,8,7,5,1,4,1,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[227,73,55,40,36,40,39,17,25,22,15,22,21,16,10,13,6,6,8,11,8,10,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1445"},"selection_policy":{"id":"1446"}},"id":"1430","type":"ColumnDataSource"},{"attributes":{},"id":"1423","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1386"},"ticker":null},"id":"1389","type":"Grid"},{"attributes":{},"id":"1426","type":"UnionRenderers"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1434"}]},"id":"1448","type":"LegendItem"},{"attributes":{},"id":"1399","type":"HelpTool"},{"attributes":{},"id":"1445","type":"Selection"},{"attributes":{"data_source":{"id":"1412"},"glyph":{"id":"1414"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1415"},"view":{"id":"1417"}},"id":"1416","type":"GlyphRenderer"},{"attributes":{},"id":"1391","type":"BasicTicker"},{"attributes":{},"id":"1421","type":"AllLabels"},{"attributes":{"formatter":{"id":"1423"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"opendatascience.com","11":"mail.google.com","12":"t.co","13":"classroom.udacity.com","14":"paperswithcode.com","15":"Bing","16":"medium.com","17":"DuckDuckGo","18":"up-for-grabs.net","19":"microsoft.com","2":"fairlearn.org","20":"statics.teams.cdn.office.net","21":"anaconda.com","22":"engineering.linkedin.com","23":"ai.googleblog.com","24":"linkedin.com","25":"fairlearn.github.io","26":"madewithml.com","27":"azure.microsoft.com","28":"gitter.im","29":"com.google.android.gm","3":"docs.microsoft.com","30":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"kdnuggets.com","7":"pypi.org","8":"sparkaisummit.com","9":"event.on24.com"},"major_label_policy":{"id":"1424"},"ticker":{"id":"1449"}},"id":"1386","type":"LinearAxis"},{"attributes":{},"id":"1384","type":"LinearScale"},{"attributes":{"below":[{"id":"1386"}],"center":[{"id":"1389"},{"id":"1393"},{"id":"1428"}],"left":[{"id":"1390"}],"renderers":[{"id":"1416"},{"id":"1434"}],"title":{"id":"1376"},"toolbar":{"id":"1401"},"width":900,"x_range":{"id":"1378"},"x_scale":{"id":"1382"},"y_range":{"id":"1380"},"y_scale":{"id":"1384"}},"id":"1375","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1420"},"major_label_policy":{"id":"1421"},"ticker":{"id":"1391"}},"id":"1390","type":"LinearAxis"},{"attributes":{"fields":["unique"]},"id":"1410","type":"Stack"},{"attributes":{},"id":"1380","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1408"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1409"}},"x":{"field":"indices"}},"id":"1415","type":"VBar"},{"attributes":{"axis":{"id":"1390"},"dimension":1,"ticker":null},"id":"1393","type":"Grid"},{"attributes":{"text":"Top referrers"},"id":"1376","type":"Title"},{"attributes":{},"id":"1420","type":"BasicTickFormatter"},{"attributes":{},"id":"1378","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1410"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1411"}},"x":{"field":"indices"}},"id":"1433","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1411","type":"Stack"},{"attributes":{"data":{"duplicate":[88,118,48,19,18,9,7,16,6,6,11,4,4,5,8,2,8,7,5,1,4,1,5,4,3,1,4,1,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[227,73,55,40,36,40,39,17,25,22,15,22,21,16,10,13,6,6,8,11,8,10,5,6,7,8,5,7,3,2,5]},"selected":{"id":"1425"},"selection_policy":{"id":"1426"}},"id":"1412","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"1429"},{"id":"1448"}]},"id":"1428","type":"Legend"},{"attributes":{"source":{"id":"1430"}},"id":"1435","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1408"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1409"}},"x":{"field":"indices"}},"id":"1414","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1400","type":"BoxAnnotation"},{"attributes":{},"id":"1394","type":"PanTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"id":"1449","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1409","type":"Stack"},{"attributes":{"active_multi":null,"tools":[{"id":"1394"},{"id":"1395"},{"id":"1396"},{"id":"1397"},{"id":"1398"},{"id":"1399"}]},"id":"1401","type":"Toolbar"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1416"}]},"id":"1429","type":"LegendItem"},{"attributes":{"source":{"id":"1412"}},"id":"1417","type":"CDSView"},{"attributes":{},"id":"1395","type":"WheelZoomTool"},{"attributes":{},"id":"1398","type":"ResetTool"},{"attributes":{},"id":"1424","type":"AllLabels"},{"attributes":{"bottom":{"expr":{"id":"1410"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1411"}},"x":{"field":"indices"}},"id":"1432","type":"VBar"},{"attributes":{"overlay":{"id":"1400"}},"id":"1396","type":"BoxZoomTool"},{"attributes":{},"id":"1425","type":"Selection"},{"attributes":{},"id":"1382","type":"LinearScale"},{"attributes":{"data_source":{"id":"1430"},"glyph":{"id":"1432"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1433"},"view":{"id":"1435"}},"id":"1434","type":"GlyphRenderer"},{"attributes":{},"id":"1397","type":"SaveTool"},{"attributes":{"fields":[]},"id":"1408","type":"Stack"}],"root_ids":["1375"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"9d6cb30d-9018-4975-8155-a3b281020d51","root_ids":["1375"],"roots":{"1375":"f05cb1f7-e37f-4f2d-8d37-7eaa46a69a4d"}}];
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