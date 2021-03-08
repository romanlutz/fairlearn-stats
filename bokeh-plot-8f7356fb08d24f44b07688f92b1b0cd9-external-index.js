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
    
      
      
    
      var element = document.getElementById("336b3d5b-811b-4fef-a657-db851d78faf1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '336b3d5b-811b-4fef-a657-db851d78faf1' but no matching script tag was found.")
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
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
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
                    
                  var docs_json = '{"69862c25-9795-448a-afb5-f76a352efe00":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"1120","type":"BasicTickFormatter"},{"attributes":{},"id":"1101","type":"ResetTool"},{"attributes":{},"id":"1122","type":"AllLabels"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},"id":"1116","type":"FixedTicker"},{"attributes":{},"id":"1102","type":"HelpTool"},{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{"data":{"top":[396,272,172,102,80,54,34,20,17,10,9,9,9,8,7,6,6,6,6,5,4,4,4,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},"selected":{"id":"1125"},"selection_policy":{"id":"1124"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1120"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"bethz","11":"yuanshi4","12":"shoresh57","13":"rihorn2","14":"nina-hua","15":"hannawallach","16":"Bee-zest","17":"MBrouns","18":"MarsLabAtSLU","19":"anindya5","2":"adrinjalali","20":"harvineet","21":"violazhong","22":"mikephelan","23":"parul100495","24":"vingu","25":"imatiach-msft","26":"bricha2","27":"sagu94271","28":"arjsingh","29":"torfjelde","3":"MiroDudik","30":"chsafouane","31":"LeJit","32":"slbird","33":"hannanabdul55","34":"chisingh","35":"gabrielarcangelbol","36":"mesameki","37":"RachitChhaya","38":"gaugup","39":"michaelamoako","4":"kevinrobinson","40":"hbaniecki","41":"lokijota","42":"wmeints","43":"laurenpendo","44":"afehmiu","45":"philippjfr","46":"cmarmo","47":"firmai","48":"paramrsingh","49":"SameerKSharma","5":"koaning","50":"PranavPillai","51":"KanishkVashisht","52":"msftclas","53":"michael1albq","54":"jingwora","55":"janhavi13","56":"dgiova","57":"deltasun","58":"LianaN","59":"willgart","6":"hildeweerts","60":"LisaIbanez","61":"cedarfall","62":"Rishit-dagli","63":"anirbandasgupta","64":"iofall","65":"ancibira","66":"maurominella","67":"csiebler","68":"GraemeMalcolm","69":"AndreFCruz","7":"srayagarwal","70":"Pooja1301","71":"shngt","72":"mjorgen1","73":"leonarduschen","74":"dciborow","75":"wguyman","76":"kalikhademi","8":"dependabot[bot]","9":"Dref360"},"major_label_policy":{"id":"1119"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{},"id":"1124","type":"UnionRenderers"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{},"id":"1119","type":"AllLabels"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{},"id":"1125","type":"Selection"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{},"id":"1123","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{"formatter":{"id":"1123"},"major_label_policy":{"id":"1122"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"69862c25-9795-448a-afb5-f76a352efe00","root_ids":["1078"],"roots":{"1078":"336b3d5b-811b-4fef-a657-db851d78faf1"}}];
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