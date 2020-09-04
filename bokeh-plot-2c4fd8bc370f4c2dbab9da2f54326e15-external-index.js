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
    
      
      
    
      var element = document.getElementById("b4034715-70fe-4496-b066-48b14575e50e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b4034715-70fe-4496-b066-48b14575e50e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"39ced1b2-a408-4224-be01-6e2b17a67b8b":{"roots":{"references":[{"attributes":{},"id":"1186","type":"Selection"},{"attributes":{},"id":"1140","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1177","type":"VBar"},{"attributes":{"overlay":{"id":"1162"}},"id":"1158","type":"BoxZoomTool"},{"attributes":{},"id":"1159","type":"SaveTool"},{"attributes":{"text":"Top referrers"},"id":"1138","type":"Title"},{"attributes":{"fields":["unique","duplicate"]},"id":"1173","type":"Stack"},{"attributes":{},"id":"1181","type":"BasicTickFormatter"},{"attributes":{},"id":"1160","type":"ResetTool"},{"attributes":{},"id":"1156","type":"PanTool"},{"attributes":{},"id":"1185","type":"UnionRenderers"},{"attributes":{},"id":"1183","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1193","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1176","type":"VBar"},{"attributes":{},"id":"1161","type":"HelpTool"},{"attributes":{},"id":"1203","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1174"},"glyph":{"id":"1176"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1177"},"selection_glyph":null,"view":{"id":"1179"}},"id":"1178","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},"id":"1207","type":"FixedTicker"},{"attributes":{"data":{"duplicate":[90,46,31,18,9,26,6,6,11,8,3,3,6,5,3,5,3,1,1,8,0,1,7,4],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"unique":[160,61,29,36,40,5,25,22,15,15,18,14,10,10,12,10,11,13,13,6,13,11,4,5]},"selected":{"id":"1186"},"selection_policy":{"id":"1185"}},"id":"1174","type":"ColumnDataSource"},{"attributes":{},"id":"1157","type":"WheelZoomTool"},{"attributes":{"data":{"duplicate":[90,46,31,18,9,26,6,6,11,8,3,3,6,5,3,5,3,1,1,8,0,1,7,4],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"unique":[160,61,29,36,40,5,25,22,15,15,18,14,10,10,12,10,11,13,13,6,13,11,4,5]},"selected":{"id":"1204"},"selection_policy":{"id":"1203"}},"id":"1190","type":"ColumnDataSource"},{"attributes":{"fields":["unique"]},"id":"1172","type":"Stack"},{"attributes":{"source":{"id":"1174"}},"id":"1179","type":"CDSView"},{"attributes":{"fields":["unique"]},"id":"1171","type":"Stack"},{"attributes":{"data_source":{"id":"1190"},"glyph":{"id":"1192"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1193"},"selection_glyph":null,"view":{"id":"1195"}},"id":"1194","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"1189"},{"id":"1206"}]},"id":"1188","type":"Legend"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1194"}]},"id":"1206","type":"LegendItem"},{"attributes":{"axis":{"id":"1148"},"ticker":null},"id":"1151","type":"Grid"},{"attributes":{},"id":"1142","type":"DataRange1d"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1178"}]},"id":"1189","type":"LegendItem"},{"attributes":{"fields":[]},"id":"1170","type":"Stack"},{"attributes":{"axis":{"id":"1152"},"dimension":1,"ticker":null},"id":"1155","type":"Grid"},{"attributes":{},"id":"1204","type":"Selection"},{"attributes":{"formatter":{"id":"1183"},"ticker":{"id":"1153"}},"id":"1152","type":"LinearAxis"},{"attributes":{},"id":"1144","type":"LinearScale"},{"attributes":{"source":{"id":"1190"}},"id":"1195","type":"CDSView"},{"attributes":{},"id":"1153","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1162","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1148"}],"center":[{"id":"1151"},{"id":"1155"},{"id":"1188"}],"left":[{"id":"1152"}],"plot_width":900,"renderers":[{"id":"1178"},{"id":"1194"}],"title":{"id":"1138"},"toolbar":{"id":"1163"},"x_range":{"id":"1140"},"x_scale":{"id":"1144"},"y_range":{"id":"1142"},"y_scale":{"id":"1146"}},"id":"1137","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1146","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1156"},{"id":"1157"},{"id":"1158"},{"id":"1159"},{"id":"1160"},{"id":"1161"}]},"id":"1163","type":"Toolbar"},{"attributes":{"formatter":{"id":"1181"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"mail.google.com","11":"com.google.android.gm","12":"statics.teams.cdn.office.net","13":"azure.microsoft.com","14":"Bing","15":"DuckDuckGo","16":"microsoft.com","17":"pypi.org","18":"t.co","19":"paperswithcode.com","2":"fairlearn.github.io","20":"anaconda.com","21":"engineering.linkedin.com","22":"medium.com","23":"madewithml.com","3":"mybuild.microsoft.com","4":"finance.yahoo.com","5":"gitter.im","6":"sparkaisummit.com","7":"event.on24.com","8":"opendatascience.com","9":"docs.microsoft.com"},"ticker":{"id":"1207"}},"id":"1148","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1192","type":"VBar"}],"root_ids":["1137"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"39ced1b2-a408-4224-be01-6e2b17a67b8b","root_ids":["1137"],"roots":{"1137":"b4034715-70fe-4496-b066-48b14575e50e"}}];
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