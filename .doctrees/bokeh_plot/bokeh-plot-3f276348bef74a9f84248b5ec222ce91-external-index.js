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
    
      
      
    
      var element = document.getElementById("e22d8900-cc88-430b-93c3-e4260a36c9c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e22d8900-cc88-430b-93c3-e4260a36c9c9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"323a1914-35fc-4521-bcdc-31085047c4db":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1176","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1171","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1138","type":"Title"},{"attributes":{},"id":"1159","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1162","type":"BoxAnnotation"},{"attributes":{"fields":["unique","duplicate"]},"id":"1173","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1193","type":"VBar"},{"attributes":{},"id":"1140","type":"DataRange1d"},{"attributes":{},"id":"1183","type":"BasicTickFormatter"},{"attributes":{},"id":"1187","type":"Selection"},{"attributes":{"items":[{"id":"1189"},{"id":"1206"}]},"id":"1188","type":"Legend"},{"attributes":{"fields":["unique"]},"id":"1172","type":"Stack"},{"attributes":{},"id":"1156","type":"PanTool"},{"attributes":{},"id":"1181","type":"BasicTickFormatter"},{"attributes":{},"id":"1144","type":"LinearScale"},{"attributes":{},"id":"1157","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1174"}},"id":"1179","type":"CDSView"},{"attributes":{"data_source":{"id":"1190"},"glyph":{"id":"1192"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1193"},"selection_glyph":null,"view":{"id":"1195"}},"id":"1194","type":"GlyphRenderer"},{"attributes":{},"id":"1142","type":"DataRange1d"},{"attributes":{},"id":"1153","type":"BasicTicker"},{"attributes":{"axis":{"id":"1148"},"ticker":null},"id":"1151","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1177","type":"VBar"},{"attributes":{},"id":"1204","type":"UnionRenderers"},{"attributes":{},"id":"1161","type":"HelpTool"},{"attributes":{"data":{"duplicate":[107,70,49,18,34,28,9,25,6,8,6,11,4,18,5,5,1,1,5,5,5,5,5,4,4,1,5],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"unique":[209,65,66,36,19,21,40,15,25,20,22,15,22,5,16,10,13,12,8,7,6,5,5,5,5,7,2]},"selected":{"id":"1187"},"selection_policy":{"id":"1186"}},"id":"1174","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"1170","type":"Stack"},{"attributes":{"below":[{"id":"1148"}],"center":[{"id":"1151"},{"id":"1155"},{"id":"1188"}],"left":[{"id":"1152"}],"plot_width":900,"renderers":[{"id":"1178"},{"id":"1194"}],"title":{"id":"1138"},"toolbar":{"id":"1163"},"x_range":{"id":"1140"},"x_scale":{"id":"1144"},"y_range":{"id":"1142"},"y_scale":{"id":"1146"}},"id":"1137","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1194"}]},"id":"1206","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1156"},{"id":"1157"},{"id":"1158"},{"id":"1159"},{"id":"1160"},{"id":"1161"}]},"id":"1163","type":"Toolbar"},{"attributes":{"formatter":{"id":"1181"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"event.on24.com","11":"opendatascience.com","12":"mail.google.com","13":"gitter.im","14":"classroom.udacity.com","15":"azure.microsoft.com","16":"t.co","17":"anaconda.com","18":"up-for-grabs.net","19":"microsoft.com","2":"fairlearn.github.io","20":"paperswithcode.com","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"DuckDuckGo","24":"madewithml.com","25":"medium.com","26":"com.google.android.gm","3":"mybuild.microsoft.com","4":"statics.teams.cdn.office.net","5":"docs.microsoft.com","6":"finance.yahoo.com","7":"Bing","8":"sparkaisummit.com","9":"pypi.org"},"ticker":{"id":"1207"}},"id":"1148","type":"LinearAxis"},{"attributes":{},"id":"1146","type":"LinearScale"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1178"}]},"id":"1189","type":"LegendItem"},{"attributes":{"data_source":{"id":"1174"},"glyph":{"id":"1176"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1177"},"selection_glyph":null,"view":{"id":"1179"}},"id":"1178","type":"GlyphRenderer"},{"attributes":{},"id":"1186","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},"id":"1207","type":"FixedTicker"},{"attributes":{},"id":"1205","type":"Selection"},{"attributes":{"axis":{"id":"1152"},"dimension":1,"ticker":null},"id":"1155","type":"Grid"},{"attributes":{"formatter":{"id":"1183"},"ticker":{"id":"1153"}},"id":"1152","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1192","type":"VBar"},{"attributes":{"data":{"duplicate":[107,70,49,18,34,28,9,25,6,8,6,11,4,18,5,5,1,1,5,5,5,5,5,4,4,1,5],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"unique":[209,65,66,36,19,21,40,15,25,20,22,15,22,5,16,10,13,12,8,7,6,5,5,5,5,7,2]},"selected":{"id":"1205"},"selection_policy":{"id":"1204"}},"id":"1190","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1190"}},"id":"1195","type":"CDSView"},{"attributes":{},"id":"1160","type":"ResetTool"},{"attributes":{"overlay":{"id":"1162"}},"id":"1158","type":"BoxZoomTool"}],"root_ids":["1137"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"323a1914-35fc-4521-bcdc-31085047c4db","root_ids":["1137"],"roots":{"1137":"e22d8900-cc88-430b-93c3-e4260a36c9c9"}}];
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