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
    
      
      
    
      var element = document.getElementById("cc195270-722e-41c2-a6d8-cd51ed39beaf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc195270-722e-41c2-a6d8-cd51ed39beaf' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
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
                    
                  var docs_json = '{&quot;9519cf3b-d8b3-465b-a4f1-b0851752e2d2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;text&quot;:&quot;Created issues&quot;},&quot;id&quot;:&quot;1002&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1021&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1012&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1015&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1004&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1026&quot;}},&quot;id&quot;:&quot;1022&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1016&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1019&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1012&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1015&quot;},{&quot;id&quot;:&quot;1019&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1016&quot;}],&quot;plot_width&quot;:900,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1037&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1002&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1027&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1004&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1008&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1006&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1010&quot;}},&quot;id&quot;:&quot;1001&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1047&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1042&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1017&quot;}},&quot;id&quot;:&quot;1016&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;top&quot;:[202,156,26,21,19,19,12,11,9,7,7,7,5,5,5,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],&quot;x&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},&quot;selected&quot;:{&quot;id&quot;:&quot;1046&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1047&quot;}},&quot;id&quot;:&quot;1034&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1023&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1008&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1042&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1020&quot;},{&quot;id&quot;:&quot;1021&quot;},{&quot;id&quot;:&quot;1022&quot;},{&quot;id&quot;:&quot;1023&quot;},{&quot;id&quot;:&quot;1024&quot;},{&quot;id&quot;:&quot;1025&quot;}]},&quot;id&quot;:&quot;1027&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;green&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;}},&quot;id&quot;:&quot;1036&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1024&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1017&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1006&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1034&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1035&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1036&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1038&quot;}},&quot;id&quot;:&quot;1037&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1046&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1020&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1025&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1044&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},&quot;id&quot;:&quot;1039&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1010&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1026&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1034&quot;}},&quot;id&quot;:&quot;1038&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1044&quot;},&quot;major_label_orientation&quot;:0.75,&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;riedgar-ms&quot;,&quot;1&quot;:&quot;romanlutz&quot;,&quot;10&quot;:&quot;hannanabdul55&quot;,&quot;11&quot;:&quot;hildeweerts&quot;,&quot;12&quot;:&quot;janhavi13&quot;,&quot;13&quot;:&quot;parul100495&quot;,&quot;14&quot;:&quot;Bee-zest&quot;,&quot;15&quot;:&quot;chisingh&quot;,&quot;16&quot;:&quot;imatiach-msft&quot;,&quot;17&quot;:&quot;gaugup&quot;,&quot;18&quot;:&quot;moprescu&quot;,&quot;19&quot;:&quot;mesameki&quot;,&quot;2&quot;:&quot;rihorn2&quot;,&quot;20&quot;:&quot;MBrouns&quot;,&quot;21&quot;:&quot;arjsingh&quot;,&quot;22&quot;:&quot;maurominella&quot;,&quot;23&quot;:&quot;dgiova&quot;,&quot;24&quot;:&quot;wmeints&quot;,&quot;25&quot;:&quot;afehmiu&quot;,&quot;26&quot;:&quot;bspanjers&quot;,&quot;27&quot;:&quot;firmai&quot;,&quot;28&quot;:&quot;harvineet&quot;,&quot;29&quot;:&quot;gabrielarcangelbol&quot;,&quot;3&quot;:&quot;adrinjalali&quot;,&quot;30&quot;:&quot;olliethomas&quot;,&quot;31&quot;:&quot;MatthijsdeJ&quot;,&quot;32&quot;:&quot;guanqun-yang&quot;,&quot;33&quot;:&quot;hugovk&quot;,&quot;34&quot;:&quot;michael1albq&quot;,&quot;35&quot;:&quot;jingwora&quot;,&quot;36&quot;:&quot;marcscho&quot;,&quot;37&quot;:&quot;deltasun&quot;,&quot;38&quot;:&quot;yuanshi4&quot;,&quot;39&quot;:&quot;rchiodo&quot;,&quot;4&quot;:&quot;kevinrobinson&quot;,&quot;40&quot;:&quot;marksoper&quot;,&quot;41&quot;:&quot;LianaN&quot;,&quot;42&quot;:&quot;sagu94271&quot;,&quot;43&quot;:&quot;Rishit-dagli&quot;,&quot;44&quot;:&quot;gregorybchris&quot;,&quot;45&quot;:&quot;anirbandasgupta&quot;,&quot;46&quot;:&quot;RachitChhaya&quot;,&quot;47&quot;:&quot;ancibira&quot;,&quot;48&quot;:&quot;nina-hua&quot;,&quot;49&quot;:&quot;Dref360&quot;,&quot;5&quot;:&quot;MiroDudik&quot;,&quot;50&quot;:&quot;leockl&quot;,&quot;6&quot;:&quot;dependabot[bot]&quot;,&quot;7&quot;:&quot;koaning&quot;,&quot;8&quot;:&quot;bethz&quot;,&quot;9&quot;:&quot;srayagarwal&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1039&quot;}},&quot;id&quot;:&quot;1012&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;green&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;}},&quot;id&quot;:&quot;1035&quot;,&quot;type&quot;:&quot;VBar&quot;}],&quot;root_ids&quot;:[&quot;1001&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"9519cf3b-d8b3-465b-a4f1-b0851752e2d2","root_ids":["1001"],"roots":{"1001":"cc195270-722e-41c2-a6d8-cd51ed39beaf"}}];
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