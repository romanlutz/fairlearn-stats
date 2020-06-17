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
    
      
      
    
      var element = document.getElementById("d34a3791-f084-4404-b8e0-6e1bf7bd3115");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd34a3791-f084-4404-b8e0-6e1bf7bd3115' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js": "YobFyzPeVUsFQydHkJGsJL1kyfHnWxOlPc3EwaV22TmBaeGoXHLWx5aRRVPS9xlE", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js": "NuAg9+TcTQQqvQCTtkCneRrpkTiMhhfiq0KHiBzx8ECiKiLWXHN6i6ia3q7b3eHu", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js": "uMVqQc8JqHitD67bXTn9a06Mrk3EiHRaZ18EJENQenAKJ/KL71SakdXYomZQpGRr", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js": "u+eGuEXC8aw0VSCm2mH+b/tQEAitUOYiR1H6SuIVEdUmXsf4vN8m/SmXpmjb7U/X"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js"];
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
                    
                  var docs_json = '{&quot;32e4cf47-00d4-4fdb-ba7c-8748bdabc515&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1083&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;top&quot;:[200,136,110,68,33,26,15,9,8,6,4,4,4,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],&quot;x&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]},&quot;selected&quot;:{&quot;id&quot;:&quot;1120&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1121&quot;}},&quot;id&quot;:&quot;1109&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1101&quot;}},&quot;id&quot;:&quot;1097&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1092&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1085&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1098&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;green&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;}},&quot;id&quot;:&quot;1110&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1099&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1117&quot;},&quot;major_label_orientation&quot;:0.75,&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;romanlutz&quot;,&quot;1&quot;:&quot;riedgar-ms&quot;,&quot;10&quot;:&quot;hannawallach&quot;,&quot;11&quot;:&quot;rihorn2&quot;,&quot;12&quot;:&quot;harvineet&quot;,&quot;13&quot;:&quot;dependabot[bot]&quot;,&quot;14&quot;:&quot;vingu&quot;,&quot;15&quot;:&quot;MBrouns&quot;,&quot;16&quot;:&quot;slbird&quot;,&quot;17&quot;:&quot;hannanabdul55&quot;,&quot;18&quot;:&quot;gabrielarcangelbol&quot;,&quot;19&quot;:&quot;wmeints&quot;,&quot;2&quot;:&quot;adrinjalali&quot;,&quot;20&quot;:&quot;laurenpendo&quot;,&quot;21&quot;:&quot;afehmiu&quot;,&quot;22&quot;:&quot;philippjfr&quot;,&quot;23&quot;:&quot;cmarmo&quot;,&quot;24&quot;:&quot;parul100495&quot;,&quot;25&quot;:&quot;firmai&quot;,&quot;26&quot;:&quot;chisingh&quot;,&quot;27&quot;:&quot;paramrsingh&quot;,&quot;28&quot;:&quot;SameerKSharma&quot;,&quot;29&quot;:&quot;PranavPillai&quot;,&quot;3&quot;:&quot;MiroDudik&quot;,&quot;30&quot;:&quot;KanishkVashisht&quot;,&quot;31&quot;:&quot;msftclas&quot;,&quot;32&quot;:&quot;michael1albq&quot;,&quot;33&quot;:&quot;jingwora&quot;,&quot;34&quot;:&quot;janhavi13&quot;,&quot;35&quot;:&quot;dgiova&quot;,&quot;36&quot;:&quot;mesameki&quot;,&quot;37&quot;:&quot;deltasun&quot;,&quot;38&quot;:&quot;yuanshi4&quot;,&quot;4&quot;:&quot;kevinrobinson&quot;,&quot;5&quot;:&quot;koaning&quot;,&quot;6&quot;:&quot;srayagarwal&quot;,&quot;7&quot;:&quot;bethz&quot;,&quot;8&quot;:&quot;hildeweerts&quot;,&quot;9&quot;:&quot;Bee-zest&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1114&quot;}},&quot;id&quot;:&quot;1087&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1079&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1121&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1109&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1110&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1111&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1113&quot;}},&quot;id&quot;:&quot;1112&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1120&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1087&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1090&quot;},{&quot;id&quot;:&quot;1094&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1091&quot;}],&quot;plot_width&quot;:900,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1112&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1077&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1102&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1079&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1083&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1081&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1085&quot;}},&quot;id&quot;:&quot;1076&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1100&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1087&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1090&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;green&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;}},&quot;id&quot;:&quot;1111&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1101&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1095&quot;},{&quot;id&quot;:&quot;1096&quot;},{&quot;id&quot;:&quot;1097&quot;},{&quot;id&quot;:&quot;1098&quot;},{&quot;id&quot;:&quot;1099&quot;},{&quot;id&quot;:&quot;1100&quot;}]},&quot;id&quot;:&quot;1102&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1119&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1109&quot;}},&quot;id&quot;:&quot;1113&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]},&quot;id&quot;:&quot;1114&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1081&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1095&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Issue comments&quot;},&quot;id&quot;:&quot;1077&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1096&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1119&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1092&quot;}},&quot;id&quot;:&quot;1091&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1117&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1091&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1094&quot;,&quot;type&quot;:&quot;Grid&quot;}],&quot;root_ids&quot;:[&quot;1076&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"32e4cf47-00d4-4fdb-ba7c-8748bdabc515","root_ids":["1076"],"roots":{"1076":"d34a3791-f084-4404-b8e0-6e1bf7bd3115"}}];
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