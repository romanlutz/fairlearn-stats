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
    
      
      
    
      var element = document.getElementById("821ddd65-49cf-409b-a8f4-641d5ed28c75");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '821ddd65-49cf-409b-a8f4-641d5ed28c75' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
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
                    
                  var docs_json = '{"4e64a2d4-2657-4aa2-837d-88680550c815":{"roots":{"references":[{"attributes":{"items":[{"id":"1392"},{"id":"1409"}]},"id":"1391","type":"Legend"},{"attributes":{},"id":"1356","type":"BasicTicker"},{"attributes":{"data":{"duplicate":[155,68,22,18,9,13,6,6,12,11,4,4,5,5,1,5,4,6,5,4,4,5,2,5,4,3,4,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"unique":[197,74,33,36,40,32,25,22,16,15,22,21,16,12,15,10,11,9,9,10,9,8,10,5,6,7,5,3,2,5]},"selected":{"id":"1408"},"selection_policy":{"id":"1407"}},"id":"1393","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1376","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1375"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1376"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1396","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1373"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1374"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1379","type":"VBar"},{"attributes":{"axis":{"id":"1351"},"ticker":null},"id":"1354","type":"Grid"},{"attributes":{"data":{"duplicate":[155,68,22,18,9,13,6,6,12,11,4,4,5,5,1,5,4,6,5,4,4,5,2,5,4,3,4,4,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"unique":[197,74,33,36,40,32,25,22,16,15,22,21,16,12,15,10,11,9,9,10,9,8,10,5,6,7,5,3,2,5]},"selected":{"id":"1390"},"selection_policy":{"id":"1389"}},"id":"1377","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"1373","type":"Stack"},{"attributes":{"source":{"id":"1393"}},"id":"1398","type":"CDSView"},{"attributes":{"axis":{"id":"1355"},"dimension":1,"ticker":null},"id":"1358","type":"Grid"},{"attributes":{"formatter":{"id":"1384"},"ticker":{"id":"1356"}},"id":"1355","type":"LinearAxis"},{"attributes":{"source":{"id":"1377"}},"id":"1382","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1375"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1376"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1395","type":"VBar"},{"attributes":{},"id":"1343","type":"DataRange1d"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1381"}]},"id":"1392","type":"LegendItem"},{"attributes":{"below":[{"id":"1351"}],"center":[{"id":"1354"},{"id":"1358"},{"id":"1391"}],"left":[{"id":"1355"}],"plot_width":900,"renderers":[{"id":"1381"},{"id":"1397"}],"title":{"id":"1341"},"toolbar":{"id":"1366"},"x_range":{"id":"1343"},"x_scale":{"id":"1347"},"y_range":{"id":"1345"},"y_scale":{"id":"1349"}},"id":"1340","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1390","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1365","type":"BoxAnnotation"},{"attributes":{"fields":["unique"]},"id":"1374","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1359"},{"id":"1360"},{"id":"1361"},{"id":"1362"},{"id":"1363"},{"id":"1364"}]},"id":"1366","type":"Toolbar"},{"attributes":{"data_source":{"id":"1393"},"glyph":{"id":"1395"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1396"},"selection_glyph":null,"view":{"id":"1398"}},"id":"1397","type":"GlyphRenderer"},{"attributes":{},"id":"1359","type":"PanTool"},{"attributes":{},"id":"1386","type":"BasicTickFormatter"},{"attributes":{},"id":"1407","type":"UnionRenderers"},{"attributes":{},"id":"1389","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1341","type":"Title"},{"attributes":{},"id":"1360","type":"WheelZoomTool"},{"attributes":{},"id":"1384","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1397"}]},"id":"1409","type":"LegendItem"},{"attributes":{"overlay":{"id":"1365"}},"id":"1361","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1375","type":"Stack"},{"attributes":{},"id":"1362","type":"SaveTool"},{"attributes":{},"id":"1347","type":"LinearScale"},{"attributes":{},"id":"1363","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1373"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1374"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1380","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]},"id":"1410","type":"FixedTicker"},{"attributes":{},"id":"1345","type":"DataRange1d"},{"attributes":{},"id":"1408","type":"Selection"},{"attributes":{},"id":"1364","type":"HelpTool"},{"attributes":{},"id":"1349","type":"LinearScale"},{"attributes":{"data_source":{"id":"1377"},"glyph":{"id":"1379"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1380"},"selection_glyph":null,"view":{"id":"1382"}},"id":"1381","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1386"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"mail.google.com","11":"t.co","12":"classroom.udacity.com","13":"Bing","14":"anaconda.com","15":"azure.microsoft.com","16":"microsoft.com","17":"pypi.org","18":"statics.teams.cdn.office.net","19":"paperswithcode.com","2":"fairlearn.github.io","20":"DuckDuckGo","21":"up-for-grabs.net","22":"medium.com","23":"engineering.linkedin.com","24":"ai.googleblog.com","25":"linkedin.com","26":"madewithml.com","27":"gitter.im","28":"com.google.android.gm","29":"infoworld.com","3":"mybuild.microsoft.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"event.on24.com","8":"fairlearn.org","9":"opendatascience.com"},"ticker":{"id":"1410"}},"id":"1351","type":"LinearAxis"}],"root_ids":["1340"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4e64a2d4-2657-4aa2-837d-88680550c815","root_ids":["1340"],"roots":{"1340":"821ddd65-49cf-409b-a8f4-641d5ed28c75"}}];
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