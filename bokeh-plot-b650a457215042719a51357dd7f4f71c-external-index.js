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
    
      
      
    
      var element = document.getElementById("5c6add37-195e-4b28-8cbc-afe504a507a7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5c6add37-195e-4b28-8cbc-afe504a507a7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dacbd69d-0ebd-4478-937c-25e43a7bf5b3":{"roots":{"references":[{"attributes":{},"id":"1088","type":"PanTool"},{"attributes":{},"id":"1091","type":"SaveTool"},{"attributes":{},"id":"1114","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1110"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"yuanshi4","11":"shoresh57","12":"rihorn2","13":"nina-hua","14":"hannawallach","15":"Bee-zest","16":"MBrouns","17":"Dref360","18":"MarsLabAtSLU","19":"anindya5","2":"adrinjalali","20":"harvineet","21":"mikephelan","22":"parul100495","23":"vingu","24":"imatiach-msft","25":"bricha2","26":"sagu94271","27":"arjsingh","28":"torfjelde","29":"chsafouane","3":"MiroDudik","30":"slbird","31":"hannanabdul55","32":"chisingh","33":"gabrielarcangelbol","34":"mesameki","35":"RachitChhaya","36":"gaugup","37":"violazhong","38":"michaelamoako","39":"hbaniecki","4":"kevinrobinson","40":"lokijota","41":"wmeints","42":"laurenpendo","43":"afehmiu","44":"philippjfr","45":"cmarmo","46":"firmai","47":"paramrsingh","48":"SameerKSharma","49":"PranavPillai","5":"koaning","50":"KanishkVashisht","51":"msftclas","52":"michael1albq","53":"jingwora","54":"janhavi13","55":"dgiova","56":"deltasun","57":"LianaN","58":"willgart","59":"LisaIbanez","6":"hildeweerts","60":"cedarfall","61":"Rishit-dagli","62":"anirbandasgupta","63":"iofall","64":"ancibira","65":"maurominella","66":"csiebler","67":"GraemeMalcolm","68":"AndreFCruz","69":"Pooja1301","7":"srayagarwal","8":"dependabot[bot]","9":"bethz"},"ticker":{"id":"1107"}},"id":"1080","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1102"},"glyph":{"id":"1103"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1104"},"selection_glyph":null,"view":{"id":"1106"}},"id":"1105","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1094"}},"id":"1090","type":"BoxZoomTool"},{"attributes":{},"id":"1078","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1094","type":"BoxAnnotation"},{"attributes":{},"id":"1110","type":"BasicTickFormatter"},{"attributes":{},"id":"1092","type":"ResetTool"},{"attributes":{"data":{"top":[358,251,148,90,80,54,28,20,17,9,9,9,8,7,6,6,6,6,6,5,4,4,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]},"selected":{"id":"1115"},"selection_policy":{"id":"1114"}},"id":"1102","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]},"id":"1107","type":"FixedTicker"},{"attributes":{},"id":"1085","type":"BasicTicker"},{"attributes":{},"id":"1093","type":"HelpTool"},{"attributes":{"below":[{"id":"1080"}],"center":[{"id":"1083"},{"id":"1087"}],"left":[{"id":"1084"}],"plot_width":900,"renderers":[{"id":"1105"}],"title":{"id":"1070"},"toolbar":{"id":"1095"},"x_range":{"id":"1072"},"x_scale":{"id":"1076"},"y_range":{"id":"1074"},"y_scale":{"id":"1078"}},"id":"1069","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1080"},"ticker":null},"id":"1083","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1104","type":"VBar"},{"attributes":{},"id":"1076","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1088"},{"id":"1089"},{"id":"1090"},{"id":"1091"},{"id":"1092"},{"id":"1093"}]},"id":"1095","type":"Toolbar"},{"attributes":{"formatter":{"id":"1111"},"ticker":{"id":"1085"}},"id":"1084","type":"LinearAxis"},{"attributes":{"source":{"id":"1102"}},"id":"1106","type":"CDSView"},{"attributes":{"text":"Issue comments"},"id":"1070","type":"Title"},{"attributes":{},"id":"1074","type":"DataRange1d"},{"attributes":{},"id":"1089","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1103","type":"VBar"},{"attributes":{},"id":"1115","type":"Selection"},{"attributes":{"axis":{"id":"1084"},"dimension":1,"ticker":null},"id":"1087","type":"Grid"},{"attributes":{},"id":"1111","type":"BasicTickFormatter"},{"attributes":{},"id":"1072","type":"DataRange1d"}],"root_ids":["1069"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"dacbd69d-0ebd-4478-937c-25e43a7bf5b3","root_ids":["1069"],"roots":{"1069":"5c6add37-195e-4b28-8cbc-afe504a507a7"}}];
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