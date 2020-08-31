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
    
      
      
    
      var element = document.getElementById("a63fa760-eb8f-4be3-ae3f-f31eaab73f3d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a63fa760-eb8f-4be3-ae3f-f31eaab73f3d' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js": "jtq3UzIrk2TfDZfSNGEN0ICKrRWmtzZSQm6i1Xnd3hY3UfU9m98vuEL7JUv7Iway", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js": "rRlSZb4FImflqQNhKcvkZq8b+FqcNFxP9CmCO8Vgo9uNXe6wk6yNMlKMrXn+TjeM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js": "MJyUmyL5f4wPlABPEp4CF5HzMeAPMvzucE8gEGNH15tAWgHFb2hsPNIEkva89XtP"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js"];
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
                    
                  var docs_json = '{"c33a0b32-8bef-4645-a7ce-6b2b4cbb93ad":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1186"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1187"}},"x":{"field":"indices"}},"id":"1207","type":"VBar"},{"attributes":{},"id":"1171","type":"WheelZoomTool"},{"attributes":{},"id":"1173","type":"SaveTool"},{"attributes":{},"id":"1154","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1176"}},"id":"1172","type":"BoxZoomTool"},{"attributes":{},"id":"1174","type":"ResetTool"},{"attributes":{},"id":"1200","type":"UnionRenderers"},{"attributes":{},"id":"1175","type":"HelpTool"},{"attributes":{},"id":"1170","type":"PanTool"},{"attributes":{},"id":"1218","type":"UnionRenderers"},{"attributes":{},"id":"1156","type":"DataRange1d"},{"attributes":{},"id":"1217","type":"Selection"},{"attributes":{"axis":{"id":"1162"},"ticker":null},"id":"1165","type":"Grid"},{"attributes":{"data_source":{"id":"1204"},"glyph":{"id":"1206"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1207"},"selection_glyph":null,"view":{"id":"1209"}},"id":"1208","type":"GlyphRenderer"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1208"}]},"id":"1220","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},"id":"1221","type":"FixedTicker"},{"attributes":{"formatter":{"id":"1196"},"ticker":{"id":"1167"}},"id":"1166","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[114,58,18,18,9,6,6,11,7,5,5,5,6,3,1,8,4,0,7,6,4],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"unique":[172,84,36,36,40,25,22,15,17,16,10,10,9,11,13,6,9,12,4,3,5]},"selected":{"id":"1199"},"selection_policy":{"id":"1200"}},"id":"1188","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1184"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1185"}},"x":{"field":"indices"}},"id":"1190","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1184"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1185"}},"x":{"field":"indices"}},"id":"1191","type":"VBar"},{"attributes":{"fields":[]},"id":"1184","type":"Stack"},{"attributes":{},"id":"1199","type":"Selection"},{"attributes":{"items":[{"id":"1203"},{"id":"1220"}]},"id":"1202","type":"Legend"},{"attributes":{},"id":"1167","type":"BasicTicker"},{"attributes":{"axis":{"id":"1166"},"dimension":1,"ticker":null},"id":"1169","type":"Grid"},{"attributes":{"fields":["unique"]},"id":"1185","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1152","type":"Title"},{"attributes":{"fields":["unique","duplicate"]},"id":"1187","type":"Stack"},{"attributes":{"formatter":{"id":"1198"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"azure.microsoft.com","11":"DuckDuckGo","12":"statics.teams.cdn.office.net","13":"microsoft.com","14":"t.co","15":"paperswithcode.com","16":"Bing","17":"anaconda.com","18":"medium.com","19":"gitter.im","2":"fairlearn.github.io","20":"madewithml.com","3":"mybuild.microsoft.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"opendatascience.com","8":"docs.microsoft.com","9":"pypi.org"},"ticker":{"id":"1221"}},"id":"1162","type":"LinearAxis"},{"attributes":{},"id":"1158","type":"LinearScale"},{"attributes":{},"id":"1198","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1188"}},"id":"1193","type":"CDSView"},{"attributes":{"data":{"duplicate":[114,58,18,18,9,6,6,11,7,5,5,5,6,3,1,8,4,0,7,6,4],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"unique":[172,84,36,36,40,25,22,15,17,16,10,10,9,11,13,6,9,12,4,3,5]},"selected":{"id":"1217"},"selection_policy":{"id":"1218"}},"id":"1204","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1176","type":"BoxAnnotation"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1192"}]},"id":"1203","type":"LegendItem"},{"attributes":{},"id":"1160","type":"LinearScale"},{"attributes":{"data_source":{"id":"1188"},"glyph":{"id":"1190"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1191"},"selection_glyph":null,"view":{"id":"1193"}},"id":"1192","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1204"}},"id":"1209","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1170"},{"id":"1171"},{"id":"1172"},{"id":"1173"},{"id":"1174"},{"id":"1175"}]},"id":"1177","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1186"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1187"}},"x":{"field":"indices"}},"id":"1206","type":"VBar"},{"attributes":{"below":[{"id":"1162"}],"center":[{"id":"1165"},{"id":"1169"},{"id":"1202"}],"left":[{"id":"1166"}],"plot_width":900,"renderers":[{"id":"1192"},{"id":"1208"}],"title":{"id":"1152"},"toolbar":{"id":"1177"},"x_range":{"id":"1154"},"x_scale":{"id":"1158"},"y_range":{"id":"1156"},"y_scale":{"id":"1160"}},"id":"1151","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["unique"]},"id":"1186","type":"Stack"},{"attributes":{},"id":"1196","type":"BasicTickFormatter"}],"root_ids":["1151"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"c33a0b32-8bef-4645-a7ce-6b2b4cbb93ad","root_ids":["1151"],"roots":{"1151":"a63fa760-eb8f-4be3-ae3f-f31eaab73f3d"}}];
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