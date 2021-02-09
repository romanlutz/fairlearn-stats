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
    
      
      
    
      var element = document.getElementById("596bf254-bb46-41e6-8ac4-85c76ce8e6aa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '596bf254-bb46-41e6-8ac4-85c76ce8e6aa' but no matching script tag was found.")
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
                    
                  var docs_json = '{"75b84a71-f7b9-460f-9682-2c785513a91b":{"roots":{"references":[{"attributes":{"formatter":{"id":"1182"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"docs.microsoft.com","11":"anaconda.com","12":"azure.microsoft.com","13":"gitter.im","14":"pypi.org","15":"t.co","16":"paperswithcode.com","17":"microsoft.com","18":"engineering.linkedin.com","19":"DuckDuckGo","2":"mybuild.microsoft.com","20":"madewithml.com","21":"Bing","22":"medium.com","23":"com.google.android.gm","3":"fairlearn.github.io","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"opendatascience.com","8":"mail.google.com","9":"statics.teams.cdn.office.net"},"ticker":{"id":"1207"}},"id":"1148","type":"LinearAxis"},{"attributes":{},"id":"1204","type":"Selection"},{"attributes":{},"id":"1184","type":"BasicTickFormatter"},{"attributes":{},"id":"1205","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1162","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1190"}},"id":"1195","type":"CDSView"},{"attributes":{},"id":"1182","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1156"},{"id":"1157"},{"id":"1158"},{"id":"1159"},{"id":"1160"},{"id":"1161"}]},"id":"1163","type":"Toolbar"},{"attributes":{},"id":"1146","type":"LinearScale"},{"attributes":{"text":"Top referrers"},"id":"1138","type":"Title"},{"attributes":{"fields":["unique"]},"id":"1172","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1192","type":"VBar"},{"attributes":{"items":[{"id":"1189"},{"id":"1206"}]},"id":"1188","type":"Legend"},{"attributes":{},"id":"1144","type":"LinearScale"},{"attributes":{},"id":"1156","type":"PanTool"},{"attributes":{"below":[{"id":"1148"}],"center":[{"id":"1151"},{"id":"1155"},{"id":"1188"}],"left":[{"id":"1152"}],"plot_width":900,"renderers":[{"id":"1178"},{"id":"1194"}],"title":{"id":"1138"},"toolbar":{"id":"1163"},"x_range":{"id":"1140"},"x_scale":{"id":"1144"},"y_range":{"id":"1142"},"y_scale":{"id":"1146"}},"id":"1137","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"duplicate":[107,49,18,12,9,6,6,11,4,12,8,2,5,9,1,1,8,0,5,4,4,1,0,5],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"unique":[182,54,36,38,40,25,22,15,22,12,14,14,10,6,13,13,6,11,5,5,5,7,7,2]},"selected":{"id":"1204"},"selection_policy":{"id":"1205"}},"id":"1190","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1174"},"glyph":{"id":"1176"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1177"},"selection_glyph":null,"view":{"id":"1179"}},"id":"1178","type":"GlyphRenderer"},{"attributes":{},"id":"1157","type":"WheelZoomTool"},{"attributes":{"data":{"duplicate":[107,49,18,12,9,6,6,11,4,12,8,2,5,9,1,1,8,0,5,4,4,1,0,5],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"unique":[182,54,36,38,40,25,22,15,22,12,14,14,10,6,13,13,6,11,5,5,5,7,7,2]},"selected":{"id":"1186"},"selection_policy":{"id":"1187"}},"id":"1174","type":"ColumnDataSource"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1178"}]},"id":"1189","type":"LegendItem"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1194"}]},"id":"1206","type":"LegendItem"},{"attributes":{"fields":[]},"id":"1170","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1171","type":"Stack"},{"attributes":{},"id":"1140","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1162"}},"id":"1158","type":"BoxZoomTool"},{"attributes":{},"id":"1186","type":"Selection"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},"id":"1207","type":"FixedTicker"},{"attributes":{},"id":"1159","type":"SaveTool"},{"attributes":{"source":{"id":"1174"}},"id":"1179","type":"CDSView"},{"attributes":{},"id":"1142","type":"DataRange1d"},{"attributes":{},"id":"1160","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1176","type":"VBar"},{"attributes":{},"id":"1153","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1170"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1171"}},"x":{"field":"indices"}},"id":"1177","type":"VBar"},{"attributes":{"axis":{"id":"1152"},"dimension":1,"ticker":null},"id":"1155","type":"Grid"},{"attributes":{},"id":"1161","type":"HelpTool"},{"attributes":{"bottom":{"expr":{"id":"1172"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1173"}},"x":{"field":"indices"}},"id":"1193","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1173","type":"Stack"},{"attributes":{"formatter":{"id":"1184"},"ticker":{"id":"1153"}},"id":"1152","type":"LinearAxis"},{"attributes":{},"id":"1187","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1148"},"ticker":null},"id":"1151","type":"Grid"},{"attributes":{"data_source":{"id":"1190"},"glyph":{"id":"1192"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1193"},"selection_glyph":null,"view":{"id":"1195"}},"id":"1194","type":"GlyphRenderer"}],"root_ids":["1137"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"75b84a71-f7b9-460f-9682-2c785513a91b","root_ids":["1137"],"roots":{"1137":"596bf254-bb46-41e6-8ac4-85c76ce8e6aa"}}];
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