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
    
      
      
    
      var element = document.getElementById("f1840026-1382-4b5f-8bc7-e3e00c1127ca");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1840026-1382-4b5f-8bc7-e3e00c1127ca' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
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
                    
                  var docs_json = '{"d500ee99-af27-4022-adef-74dad34ff0c7":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{"data":{"top":[586,355,256,170,135,80,56,26,24,20,18,18,13,12,12,10,9,9,9,9,9,8,8,8,7,7,7,6,6,5,5,5,5,4,4,4,4,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]},"selected":{"id":"1126"},"selection_policy":{"id":"1125"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{},"id":"1122","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{"formatter":{"id":"1122"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"trangology","100":"wcheung-code","101":"vishals2911","102":"lgfunderburk","103":"Zuzah","104":"alexquach","11":"kstohr","12":"Dref360","13":"nessamilan","14":"vamsidesu5","15":"kurianbenoy","16":"bethz","17":"yuanshi4","18":"shoresh57","19":"stephenrobic","2":"adrinjalali","20":"pritishaw1","21":"hannawallach","22":"rihorn2","23":"enharten","24":"MBrouns","25":"nina-hua","26":"LeJit","27":"Bee-zest","28":"MarsLabAtSLU","29":"anindya5","3":"MiroDudik","30":"leonarduschen","31":"mmadaio","32":"MeekaElla","33":"harvineet","34":"violazhong","35":"mikephelan","36":"galuhsahid","37":"parul100495","38":"vingu","39":"imatiach-msft","4":"hildeweerts","40":"bricha2","41":"sagu94271","42":"arjsingh","43":"torfjelde","44":"chsafouane","45":"bthng","46":"Godwindaniel10","47":"slbird","48":"hannanabdul55","49":"chisingh","5":"kevinrobinson","50":"gabrielarcangelbol","51":"mesameki","52":"LisaIbanez","53":"RachitChhaya","54":"gaugup","55":"iofall","56":"hbaniecki","57":"lokijota","58":"BrandonGoding","59":"adidutt","6":"koaning","60":"shashankc28","61":"ziqi-ma","62":"Fyrebright","63":"wmeints","64":"laurenpendo","65":"afehmiu","66":"philippjfr","67":"cmarmo","68":"firmai","69":"paramrsingh","7":"michaelamoako","70":"SameerKSharma","71":"PranavPillai","72":"KanishkVashisht","73":"msftclas","74":"michael1albq","75":"jingwora","76":"janhavi13","77":"dgiova","78":"deltasun","79":"LianaN","8":"dependabot[bot]","80":"willgart","81":"cedarfall","82":"Rishit-dagli","83":"anirbandasgupta","84":"ancibira","85":"maurominella","86":"csiebler","87":"GraemeMalcolm","88":"AndreFCruz","89":"Pooja1301","9":"srayagarwal","90":"shngt","91":"mjorgen1","92":"dciborow","93":"wguyman","94":"kalikhademi","95":"xgchena","96":"MattRudy","97":"lurosenb","98":"shimst3r","99":"kumarnav03"},"major_label_policy":{"id":"1123"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]},"id":"1116","type":"FixedTicker"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1120"},"major_label_policy":{"id":"1121"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{},"id":"1123","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{},"id":"1120","type":"BasicTickFormatter"},{"attributes":{},"id":"1101","type":"ResetTool"},{"attributes":{},"id":"1121","type":"AllLabels"},{"attributes":{},"id":"1125","type":"UnionRenderers"},{"attributes":{},"id":"1102","type":"HelpTool"},{"attributes":{},"id":"1126","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"d500ee99-af27-4022-adef-74dad34ff0c7","root_ids":["1078"],"roots":{"1078":"f1840026-1382-4b5f-8bc7-e3e00c1127ca"}}];
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