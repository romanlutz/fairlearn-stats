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
    
      
      
    
      var element = document.getElementById("28b0e24d-0ead-47a7-aa98-8654ce4596ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '28b0e24d-0ead-47a7-aa98-8654ce4596ce' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
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
                    
                  var docs_json = '{"f9305edf-f347-40b5-a931-daf7cdc823cc":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"},{"attributes":{},"id":"1119","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{},"id":"1123","type":"BasicTickFormatter"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{"data":{"top":[645,365,270,173,154,80,56,26,24,20,19,18,14,13,12,12,12,10,9,9,9,9,8,8,8,7,7,7,6,6,5,5,5,5,5,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113]},"selected":{"id":"1125"},"selection_policy":{"id":"1126"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{},"id":"1125","type":"Selection"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{},"id":"1126","type":"UnionRenderers"},{"attributes":{},"id":"1120","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{"formatter":{"id":"1120"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"kstohr","100":"wguyman","101":"kalikhademi","102":"xgchena","103":"MattRudy","104":"lurosenb","105":"kumarnav03","106":"wcheung-code","107":"vishals2911","108":"lgfunderburk","109":"Zuzah","11":"trangology","110":"Patil2099","111":"lesteve","112":"MG-Microsoft","113":"MikeyHV","12":"nessamilan","13":"Dref360","14":"vamsidesu5","15":"shimst3r","16":"kurianbenoy","17":"pritishaw1","18":"bethz","19":"yuanshi4","2":"adrinjalali","20":"shoresh57","21":"stephenrobic","22":"hannawallach","23":"rihorn2","24":"enharten","25":"MBrouns","26":"nina-hua","27":"LeJit","28":"Bee-zest","29":"MarsLabAtSLU","3":"MiroDudik","30":"anindya5","31":"leonarduschen","32":"mmadaio","33":"MeekaElla","34":"bram49","35":"harvineet","36":"violazhong","37":"mikephelan","38":"galuhsahid","39":"parul100495","4":"hildeweerts","40":"vingu","41":"imatiach-msft","42":"bricha2","43":"sagu94271","44":"arjsingh","45":"torfjelde","46":"chsafouane","47":"bthng","48":"Godwindaniel10","49":"svenkat19","5":"kevinrobinson","50":"slbird","51":"hannanabdul55","52":"chisingh","53":"gabrielarcangelbol","54":"mesameki","55":"LisaIbanez","56":"RachitChhaya","57":"gaugup","58":"iofall","59":"hbaniecki","6":"koaning","60":"lokijota","61":"mjorgen1","62":"BrandonGoding","63":"adidutt","64":"shashankc28","65":"ziqi-ma","66":"alexquach","67":"Fyrebright","68":"matthew-so","69":"nishit-prasad","7":"michaelamoako","70":"coreysharris","71":"wmeints","72":"laurenpendo","73":"afehmiu","74":"philippjfr","75":"cmarmo","76":"firmai","77":"paramrsingh","78":"SameerKSharma","79":"PranavPillai","8":"dependabot[bot]","80":"KanishkVashisht","81":"msftclas","82":"michael1albq","83":"jingwora","84":"janhavi13","85":"dgiova","86":"deltasun","87":"LianaN","88":"willgart","89":"cedarfall","9":"srayagarwal","90":"Rishit-dagli","91":"anirbandasgupta","92":"ancibira","93":"maurominella","94":"csiebler","95":"GraemeMalcolm","96":"AndreFCruz","97":"Pooja1301","98":"shngt","99":"dciborow"},"major_label_policy":{"id":"1119"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1123"},"major_label_policy":{"id":"1122"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{},"id":"1101","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{},"id":"1122","type":"AllLabels"},{"attributes":{},"id":"1102","type":"HelpTool"},{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113]},"id":"1116","type":"FixedTicker"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"f9305edf-f347-40b5-a931-daf7cdc823cc","root_ids":["1078"],"roots":{"1078":"28b0e24d-0ead-47a7-aa98-8654ce4596ce"}}];
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