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
    
      
      
    
      var element = document.getElementById("f5ea73b4-6844-4a71-b515-02ada9cb080c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f5ea73b4-6844-4a71-b515-02ada9cb080c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"18ffc659-1823-410c-b15c-d296b337dd67":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1125","type":"UnionRenderers"},{"attributes":{},"id":"1120","type":"BasicTickFormatter"},{"attributes":{},"id":"1124","type":"Selection"},{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{},"id":"1102","type":"HelpTool"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"},{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117]},"id":"1116","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{"formatter":{"id":"1122"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"kstohr","100":"GraemeMalcolm","101":"Pooja1301","102":"shngt","103":"dciborow","104":"wguyman","105":"kalikhademi","106":"xgchena","107":"MattRudy","108":"lurosenb","109":"kumarnav03","11":"trangology","110":"wcheung-code","111":"vishals2911","112":"Zuzah","113":"Patil2099","114":"lesteve","115":"MG-Microsoft","116":"MikeyHV","117":"joaquinvanschoren","12":"shimst3r","13":"pritishaw1","14":"Dref360","15":"nessamilan","16":"vamsidesu5","17":"kurianbenoy","18":"bram49","19":"bethz","2":"adrinjalali","20":"yuanshi4","21":"shoresh57","22":"stephenrobic","23":"hannawallach","24":"rihorn2","25":"enharten","26":"MBrouns","27":"nina-hua","28":"LeJit","29":"Bee-zest","3":"MiroDudik","30":"MarsLabAtSLU","31":"mmadaio","32":"alliesaizan","33":"anindya5","34":"leonarduschen","35":"MeekaElla","36":"harvineet","37":"violazhong","38":"mikephelan","39":"galuhsahid","4":"hildeweerts","40":"lgfunderburk","41":"matthew-so","42":"coreysharris","43":"parul100495","44":"vingu","45":"imatiach-msft","46":"bricha2","47":"sagu94271","48":"arjsingh","49":"torfjelde","5":"kevinrobinson","50":"AndreFCruz","51":"chsafouane","52":"mjorgen1","53":"bthng","54":"Godwindaniel10","55":"svenkat19","56":"ojeda-e","57":"slbird","58":"hannanabdul55","59":"chisingh","6":"koaning","60":"gabrielarcangelbol","61":"mesameki","62":"LisaIbanez","63":"RachitChhaya","64":"gaugup","65":"iofall","66":"hbaniecki","67":"lokijota","68":"BrandonGoding","69":"adidutt","7":"michaelamoako","70":"shashankc28","71":"ziqi-ma","72":"alexquach","73":"Fyrebright","74":"nishit-prasad","75":"sushmitaS16","76":"wmeints","77":"laurenpendo","78":"afehmiu","79":"philippjfr","8":"dependabot[bot]","80":"cmarmo","81":"firmai","82":"paramrsingh","83":"SameerKSharma","84":"PranavPillai","85":"KanishkVashisht","86":"msftclas","87":"michael1albq","88":"jingwora","89":"janhavi13","9":"srayagarwal","90":"dgiova","91":"deltasun","92":"LianaN","93":"willgart","94":"cedarfall","95":"Rishit-dagli","96":"anirbandasgupta","97":"ancibira","98":"maurominella","99":"csiebler"},"major_label_policy":{"id":"1123"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{},"id":"1122","type":"BasicTickFormatter"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{"data":{"top":[711,384,297,175,171,80,57,28,24,20,19,18,15,15,14,14,12,12,10,9,9,9,9,8,8,8,7,7,7,6,6,6,6,5,5,5,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117]},"selected":{"id":"1124"},"selection_policy":{"id":"1125"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{},"id":"1121","type":"AllLabels"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1120"},"major_label_policy":{"id":"1121"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{},"id":"1123","type":"AllLabels"},{"attributes":{},"id":"1101","type":"ResetTool"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"18ffc659-1823-410c-b15c-d296b337dd67","root_ids":["1078"],"roots":{"1078":"f5ea73b4-6844-4a71-b515-02ada9cb080c"}}];
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