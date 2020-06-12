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
    
      
      
    
      var element = document.getElementById("fd91ac9c-cd67-4b39-aac7-7bba2dd8742e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd91ac9c-cd67-4b39-aac7-7bba2dd8742e' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
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
                    
                  var docs_json = '{&quot;e49bb88b-0607-4bda-9b1d-1c942d17aa94&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1162&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1165&quot;},{&quot;id&quot;:&quot;1169&quot;},{&quot;id&quot;:&quot;1200&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1166&quot;}],&quot;plot_width&quot;:900,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1192&quot;},{&quot;id&quot;:&quot;1206&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1152&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1177&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1154&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1158&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1156&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1160&quot;}},&quot;id&quot;:&quot;1151&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;1201&quot;},{&quot;id&quot;:&quot;1216&quot;}]},&quot;id&quot;:&quot;1200&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1198&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1167&quot;}},&quot;id&quot;:&quot;1166&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1185&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1226&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1170&quot;},{&quot;id&quot;:&quot;1171&quot;},{&quot;id&quot;:&quot;1172&quot;},{&quot;id&quot;:&quot;1173&quot;},{&quot;id&quot;:&quot;1174&quot;},{&quot;id&quot;:&quot;1175&quot;}]},&quot;id&quot;:&quot;1177&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1186&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1187&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1205&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1186&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1167&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1196&quot;},&quot;major_label_orientation&quot;:0.75,&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;Google&quot;,&quot;1&quot;:&quot;github.com&quot;,&quot;10&quot;:&quot;pypi.org&quot;,&quot;11&quot;:&quot;microsoft.com&quot;,&quot;12&quot;:&quot;medium.com&quot;,&quot;13&quot;:&quot;DuckDuckGo&quot;,&quot;2&quot;:&quot;fairlearn.github.io&quot;,&quot;3&quot;:&quot;docs.microsoft.com&quot;,&quot;4&quot;:&quot;mybuild.microsoft.com&quot;,&quot;5&quot;:&quot;finance.yahoo.com&quot;,&quot;6&quot;:&quot;Bing&quot;,&quot;7&quot;:&quot;azure.microsoft.com&quot;,&quot;8&quot;:&quot;gitter.im&quot;,&quot;9&quot;:&quot;opendatascience.com&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1217&quot;}},&quot;id&quot;:&quot;1162&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;duplicate&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1206&quot;}]},&quot;id&quot;:&quot;1216&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1184&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1185&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1191&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1176&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1173&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1176&quot;}},&quot;id&quot;:&quot;1172&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;,&quot;duplicate&quot;]},&quot;id&quot;:&quot;1187&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1196&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]},&quot;id&quot;:&quot;1217&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1170&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[]},&quot;id&quot;:&quot;1184&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1184&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1185&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1190&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1171&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1158&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1188&quot;}},&quot;id&quot;:&quot;1193&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1174&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1202&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1204&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;duplicate&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1205&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1207&quot;}},&quot;id&quot;:&quot;1206&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;unique&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1192&quot;}]},&quot;id&quot;:&quot;1201&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1156&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[144,160,66,51,18,9,19,14,19,11,12,10,12,7],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;unique&quot;:[151,64,49,25,36,40,27,26,9,15,14,15,12,9]},&quot;selected&quot;:{&quot;id&quot;:&quot;1225&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1226&quot;}},&quot;id&quot;:&quot;1202&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[144,160,66,51,18,9,19,14,19,11,12,10,12,7],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;unique&quot;:[151,64,49,25,36,40,27,26,9,15,14,15,12,9]},&quot;selected&quot;:{&quot;id&quot;:&quot;1213&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1214&quot;}},&quot;id&quot;:&quot;1188&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1202&quot;}},&quot;id&quot;:&quot;1207&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1186&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1187&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1204&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1188&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1190&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;unique&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1191&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1193&quot;}},&quot;id&quot;:&quot;1192&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1160&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1225&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1162&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1165&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1175&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1198&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1213&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1166&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1169&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1214&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Top referrers&quot;},&quot;id&quot;:&quot;1152&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1154&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;1151&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"e49bb88b-0607-4bda-9b1d-1c942d17aa94","root_ids":["1151"],"roots":{"1151":"fd91ac9c-cd67-4b39-aac7-7bba2dd8742e"}}];
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