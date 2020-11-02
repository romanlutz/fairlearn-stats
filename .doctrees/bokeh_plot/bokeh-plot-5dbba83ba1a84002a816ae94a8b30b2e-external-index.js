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
    
      
      
    
      var element = document.getElementById("9d82e7e9-a5a5-40cd-b3ef-21b65e288cc7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9d82e7e9-a5a5-40cd-b3ef-21b65e288cc7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"46c137f0-38e0-4d6b-bab8-ab10e542422d":{"roots":{"references":[{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},"id":"1039","type":"FixedTicker"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{"source":{"id":"1034"}},"id":"1038","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"left":[{"id":"1016"}],"plot_width":900,"renderers":[{"id":"1037"}],"title":{"id":"1002"},"toolbar":{"id":"1027"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1044"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"srayagarwal","11":"hannanabdul55","12":"janhavi13","13":"parul100495","14":"Bee-zest","15":"Dref360","16":"chisingh","17":"imatiach-msft","18":"arjsingh","19":"gaugup","2":"rihorn2","20":"moprescu","21":"mesameki","22":"MBrouns","23":"Rishit-dagli","24":"maurominella","25":"leonarduschen","26":"anindya5","27":"chsafouane","28":"dgiova","29":"wmeints","3":"adrinjalali","30":"afehmiu","31":"bspanjers","32":"firmai","33":"harvineet","34":"gabrielarcangelbol","35":"olliethomas","36":"MatthijsdeJ","37":"guanqun-yang","38":"hugovk","39":"michael1albq","4":"kevinrobinson","40":"jingwora","41":"marcscho","42":"deltasun","43":"yuanshi4","44":"rchiodo","45":"marksoper","46":"LianaN","47":"sagu94271","48":"gregorybchris","49":"anirbandasgupta","5":"MiroDudik","50":"RachitChhaya","51":"ancibira","52":"nina-hua","53":"leockl","54":"Acornagain","55":"AndreFCruz","56":"davreign","57":"bwuzhang","6":"koaning","7":"dependabot[bot]","8":"bethz","9":"hildeweerts"},"ticker":{"id":"1039"}},"id":"1012","type":"LinearAxis"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{},"id":"1046","type":"Selection"},{"attributes":{"data_source":{"id":"1034"},"glyph":{"id":"1035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036"},"selection_glyph":null,"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"text":"Created issues"},"id":"1002","type":"Title"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1012"},"ticker":null},"id":"1015","type":"Grid"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1045","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1035","type":"VBar"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"formatter":{"id":"1043"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"data":{"top":[223,166,26,21,20,19,16,14,9,9,7,7,5,5,5,4,3,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},"selected":{"id":"1046"},"selection_policy":{"id":"1045"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{},"id":"1044","type":"BasicTickFormatter"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"46c137f0-38e0-4d6b-bab8-ab10e542422d","root_ids":["1001"],"roots":{"1001":"9d82e7e9-a5a5-40cd-b3ef-21b65e288cc7"}}];
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