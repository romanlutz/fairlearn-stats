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
    
      
      
    
      var element = document.getElementById("7e71d5a0-cb5e-4a33-b3b7-eb52dbcdc5e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7e71d5a0-cb5e-4a33-b3b7-eb52dbcdc5e2' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js": "JayppSWSRBsibIZqI8S4vAb1oFgLL0uhNvSn8cmArlOvYOwfFjYeyY5UWwJ+K0SU", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js": "G0/Tv/Yy/zEPNsnW0Qif/FOsGesd+KIrKg/QLmvQmReuUW9qmSP7mAmr0VpiUNr3", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js": "VLYHEbLQDk5G1+/4ALU0myoJPMEUsngWry2fzYorFOUmarjGRPLLURaeK/on6JqX"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js"];
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
                    
                  var docs_json = '{"702713a3-5479-4b01-817b-697e8d542d26":{"roots":{"references":[{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{},"id":"1045","type":"Selection"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"1042"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"srayagarwal","11":"hannanabdul55","12":"janhavi13","13":"parul100495","14":"Bee-zest","15":"Dref360","16":"chisingh","17":"imatiach-msft","18":"arjsingh","19":"gaugup","2":"rihorn2","20":"moprescu","21":"mesameki","22":"MBrouns","23":"Rishit-dagli","24":"maurominella","25":"anindya5","26":"dgiova","27":"wmeints","28":"afehmiu","29":"bspanjers","3":"adrinjalali","30":"firmai","31":"harvineet","32":"gabrielarcangelbol","33":"olliethomas","34":"MatthijsdeJ","35":"guanqun-yang","36":"hugovk","37":"michael1albq","38":"jingwora","39":"marcscho","4":"kevinrobinson","40":"deltasun","41":"yuanshi4","42":"rchiodo","43":"marksoper","44":"LianaN","45":"sagu94271","46":"gregorybchris","47":"anirbandasgupta","48":"RachitChhaya","49":"ancibira","5":"MiroDudik","50":"nina-hua","51":"leockl","52":"Acornagain","53":"AndreFCruz","54":"leonarduschen","6":"dependabot[bot]","7":"koaning","8":"bethz","9":"hildeweerts"},"ticker":{"id":"1039"}},"id":"1012","type":"LinearAxis"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"left":[{"id":"1016"}],"plot_width":900,"renderers":[{"id":"1037"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]},"id":"1039","type":"FixedTicker"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"data":{"top":[217,163,26,21,20,19,14,11,9,8,7,7,5,5,5,4,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]},"selected":{"id":"1045"},"selection_policy":{"id":"1046"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1035","type":"VBar"},{"attributes":{"text":"Created issues"},"id":"1002","type":"Title"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"data_source":{"id":"1034"},"glyph":{"id":"1035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036"},"selection_glyph":null,"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1043"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"source":{"id":"1034"}},"id":"1038","type":"CDSView"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1046","type":"UnionRenderers"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1042","type":"BasicTickFormatter"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"702713a3-5479-4b01-817b-697e8d542d26","root_ids":["1001"],"roots":{"1001":"7e71d5a0-cb5e-4a33-b3b7-eb52dbcdc5e2"}}];
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