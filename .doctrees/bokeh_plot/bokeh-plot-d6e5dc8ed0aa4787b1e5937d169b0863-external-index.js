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
    
      
      
    
      var element = document.getElementById("da933e76-6eb7-4550-82b6-4fc7e584bf08");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da933e76-6eb7-4550-82b6-4fc7e584bf08' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d9d8e191-04ec-4ca0-a063-c329377a4bbb":{"roots":{"references":[{"attributes":{},"id":"1390","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1377"},"glyph":{"id":"1379"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1380"},"selection_glyph":null,"view":{"id":"1382"}},"id":"1381","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1373"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1374"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1379","type":"VBar"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1397"}]},"id":"1409","type":"LegendItem"},{"attributes":{},"id":"1363","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1375"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1376"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1396","type":"VBar"},{"attributes":{},"id":"1407","type":"Selection"},{"attributes":{},"id":"1347","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1373"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1374"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1380","type":"VBar"},{"attributes":{},"id":"1364","type":"HelpTool"},{"attributes":{},"id":"1349","type":"LinearScale"},{"attributes":{"formatter":{"id":"1384"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"t.co","11":"statics.teams.cdn.office.net","12":"microsoft.com","13":"classroom.udacity.com","14":"anaconda.com","15":"azure.microsoft.com","16":"medium.com","17":"up-for-grabs.net","18":"linkedin.com","19":"Bing","2":"fairlearn.github.io","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"madewithml.com","23":"gitter.im","24":"DuckDuckGo","25":"com.google.android.gm","26":"pypi.org","27":"paperswithcode.com","28":"infoworld.com","3":"mybuild.microsoft.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"event.on24.com","8":"opendatascience.com","9":"mail.google.com"},"ticker":{"id":"1410"}},"id":"1351","type":"LinearAxis"},{"attributes":{},"id":"1356","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1375","type":"Stack"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},"id":"1410","type":"FixedTicker"},{"attributes":{"axis":{"id":"1351"},"ticker":null},"id":"1354","type":"Grid"},{"attributes":{"axis":{"id":"1355"},"dimension":1,"ticker":null},"id":"1358","type":"Grid"},{"attributes":{"formatter":{"id":"1386"},"ticker":{"id":"1356"}},"id":"1355","type":"LinearAxis"},{"attributes":{},"id":"1408","type":"UnionRenderers"},{"attributes":{"items":[{"id":"1392"},{"id":"1409"}]},"id":"1391","type":"Legend"},{"attributes":{"data_source":{"id":"1393"},"glyph":{"id":"1395"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1396"},"selection_glyph":null,"view":{"id":"1398"}},"id":"1397","type":"GlyphRenderer"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1381"}]},"id":"1392","type":"LegendItem"},{"attributes":{},"id":"1384","type":"BasicTickFormatter"},{"attributes":{"fields":[]},"id":"1373","type":"Stack"},{"attributes":{"fields":["unique","duplicate"]},"id":"1376","type":"Stack"},{"attributes":{},"id":"1386","type":"BasicTickFormatter"},{"attributes":{"data":{"duplicate":[139,76,27,18,9,6,6,6,11,4,4,13,8,5,4,5,7,5,5,3,5,4,4,4,1,5,2,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"unique":[217,70,41,36,40,30,25,22,15,22,21,10,13,16,12,10,7,8,7,7,5,6,5,3,6,2,4,4,5]},"selected":{"id":"1389"},"selection_policy":{"id":"1390"}},"id":"1377","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1365","type":"BoxAnnotation"},{"attributes":{},"id":"1389","type":"Selection"},{"attributes":{"below":[{"id":"1351"}],"center":[{"id":"1354"},{"id":"1358"},{"id":"1391"}],"left":[{"id":"1355"}],"plot_width":900,"renderers":[{"id":"1381"},{"id":"1397"}],"title":{"id":"1341"},"toolbar":{"id":"1366"},"x_range":{"id":"1343"},"x_scale":{"id":"1347"},"y_range":{"id":"1345"},"y_scale":{"id":"1349"}},"id":"1340","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"duplicate":[139,76,27,18,9,6,6,6,11,4,4,13,8,5,4,5,7,5,5,3,5,4,4,4,1,5,2,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"unique":[217,70,41,36,40,30,25,22,15,22,21,10,13,16,12,10,7,8,7,7,5,6,5,3,6,2,4,4,5]},"selected":{"id":"1407"},"selection_policy":{"id":"1408"}},"id":"1393","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1359"},{"id":"1360"},{"id":"1361"},{"id":"1362"},{"id":"1363"},{"id":"1364"}]},"id":"1366","type":"Toolbar"},{"attributes":{},"id":"1343","type":"DataRange1d"},{"attributes":{},"id":"1359","type":"PanTool"},{"attributes":{"fields":["unique"]},"id":"1374","type":"Stack"},{"attributes":{},"id":"1345","type":"DataRange1d"},{"attributes":{"source":{"id":"1393"}},"id":"1398","type":"CDSView"},{"attributes":{"text":"Top referrers"},"id":"1341","type":"Title"},{"attributes":{},"id":"1360","type":"WheelZoomTool"},{"attributes":{},"id":"1362","type":"SaveTool"},{"attributes":{"source":{"id":"1377"}},"id":"1382","type":"CDSView"},{"attributes":{"overlay":{"id":"1365"}},"id":"1361","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1375"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1376"}},"width":{"value":1},"x":{"field":"indices"}},"id":"1395","type":"VBar"}],"root_ids":["1340"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d9d8e191-04ec-4ca0-a063-c329377a4bbb","root_ids":["1340"],"roots":{"1340":"da933e76-6eb7-4550-82b6-4fc7e584bf08"}}];
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