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
    
      
      
    
      var element = document.getElementById("4fdd113a-8253-4be7-a3b1-1f66abdc3e83");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4fdd113a-8253-4be7-a3b1-1f66abdc3e83' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;0e08ae62-e5c0-40be-96a4-b30ad561b516&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1275&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1278&quot;},{&quot;id&quot;:&quot;1282&quot;},{&quot;id&quot;:&quot;1313&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1279&quot;}],&quot;plot_width&quot;:900,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1305&quot;},{&quot;id&quot;:&quot;1319&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1265&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1290&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1267&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1271&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1269&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1273&quot;}},&quot;id&quot;:&quot;1264&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1299&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1300&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1317&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1283&quot;},{&quot;id&quot;:&quot;1284&quot;},{&quot;id&quot;:&quot;1285&quot;},{&quot;id&quot;:&quot;1286&quot;},{&quot;id&quot;:&quot;1287&quot;},{&quot;id&quot;:&quot;1288&quot;}]},&quot;id&quot;:&quot;1290&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1273&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1309&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1298&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1283&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1289&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1327&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1299&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1300&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1318&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},&quot;id&quot;:&quot;1330&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;unique&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1305&quot;}]},&quot;id&quot;:&quot;1314&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1267&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Clones traffic&quot;},&quot;id&quot;:&quot;1265&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1284&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1297&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1298&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1303&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;1314&quot;},{&quot;id&quot;:&quot;1329&quot;}]},&quot;id&quot;:&quot;1313&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1289&quot;}},&quot;id&quot;:&quot;1285&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;duplicate&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1319&quot;}]},&quot;id&quot;:&quot;1329&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1269&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1311&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1328&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1340&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1286&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1271&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,101,59,52,44,157,75,80,99,67,41,39],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],&quot;unique&quot;:[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,70,109,64,38,14,72,85,97,115,73,28,25]},&quot;selected&quot;:{&quot;id&quot;:&quot;1340&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1339&quot;}},&quot;id&quot;:&quot;1315&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1287&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1339&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,101,59,52,44,157,75,80,99,67,41,39],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],&quot;unique&quot;:[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,70,109,64,38,14,72,85,97,115,73,28,25]},&quot;selected&quot;:{&quot;id&quot;:&quot;1328&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1327&quot;}},&quot;id&quot;:&quot;1301&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[]},&quot;id&quot;:&quot;1297&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1288&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1315&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1317&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;duplicate&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1318&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1320&quot;}},&quot;id&quot;:&quot;1319&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1297&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1298&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1304&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1315&quot;}},&quot;id&quot;:&quot;1320&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1301&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1303&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;unique&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1304&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1306&quot;}},&quot;id&quot;:&quot;1305&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1280&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;,&quot;duplicate&quot;]},&quot;id&quot;:&quot;1300&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1309&quot;},&quot;major_label_orientation&quot;:0.75,&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;2020-05-18 00:00:00&quot;,&quot;1&quot;:&quot;2020-05-19 00:00:00&quot;,&quot;10&quot;:&quot;2020-05-28 00:00:00&quot;,&quot;11&quot;:&quot;2020-05-29 00:00:00&quot;,&quot;12&quot;:&quot;2020-05-30 00:00:00&quot;,&quot;13&quot;:&quot;2020-05-31 00:00:00&quot;,&quot;14&quot;:&quot;2020-06-01 00:00:00&quot;,&quot;15&quot;:&quot;2020-06-02 00:00:00&quot;,&quot;16&quot;:&quot;2020-06-03 00:00:00&quot;,&quot;17&quot;:&quot;2020-06-04 00:00:00&quot;,&quot;18&quot;:&quot;2020-06-05 00:00:00&quot;,&quot;19&quot;:&quot;2020-06-06 00:00:00&quot;,&quot;2&quot;:&quot;2020-05-20 00:00:00&quot;,&quot;20&quot;:&quot;2020-06-07 00:00:00&quot;,&quot;21&quot;:&quot;2020-06-08 00:00:00&quot;,&quot;22&quot;:&quot;2020-06-09 00:00:00&quot;,&quot;23&quot;:&quot;2020-06-10 00:00:00&quot;,&quot;24&quot;:&quot;2020-06-11 00:00:00&quot;,&quot;25&quot;:&quot;2020-06-12 00:00:00&quot;,&quot;26&quot;:&quot;2020-06-13 00:00:00&quot;,&quot;27&quot;:&quot;2020-06-14 00:00:00&quot;,&quot;3&quot;:&quot;2020-05-21 00:00:00&quot;,&quot;4&quot;:&quot;2020-05-22 00:00:00&quot;,&quot;5&quot;:&quot;2020-05-23 00:00:00&quot;,&quot;6&quot;:&quot;2020-05-24 00:00:00&quot;,&quot;7&quot;:&quot;2020-05-25 00:00:00&quot;,&quot;8&quot;:&quot;2020-05-26 00:00:00&quot;,&quot;9&quot;:&quot;2020-05-27 00:00:00&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1330&quot;}},&quot;id&quot;:&quot;1275&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1299&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1275&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1278&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1301&quot;}},&quot;id&quot;:&quot;1306&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1279&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1282&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1311&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1280&quot;}},&quot;id&quot;:&quot;1279&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;1264&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"0e08ae62-e5c0-40be-96a4-b30ad561b516","root_ids":["1264"],"roots":{"1264":"4fdd113a-8253-4be7-a3b1-1f66abdc3e83"}}];
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