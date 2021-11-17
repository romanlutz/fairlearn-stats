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
    
      
      
    
      var element = document.getElementById("b289cdc2-9625-483f-bea4-a0f23b55cab4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b289cdc2-9625-483f-bea4-a0f23b55cab4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"446b87ee-be3d-4f1d-97c6-33cd56bdae09":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{"data":{"top":[787,415,316,216,188,80,58,28,28,24,20,20,19,19,18,18,15,15,14,12,12,12,10,10,9,9,9,9,8,8,8,8,7,7,6,6,6,6,6,5,5,5,5,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126]},"selected":{"id":"1125"},"selection_policy":{"id":"1126"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{},"id":"1122","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1122"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"srayagarwal","100":"Rishit-dagli","101":"anirbandasgupta","102":"ancibira","103":"maurominella","104":"csiebler","105":"GraemeMalcolm","106":"Pooja1301","107":"shngt","108":"dciborow","109":"wguyman","11":"pritishaw1","110":"kalikhademi","111":"xgchena","112":"MattRudy","113":"lurosenb","114":"kumarnav03","115":"wcheung-code","116":"vishals2911","117":"Zuzah","118":"Patil2099","119":"lesteve","12":"kstohr","120":"MG-Microsoft","121":"MikeyHV","122":"joaquinvanschoren","123":"JorickvdHoeven","124":"glemaitre","125":"ameyn21","126":"millerjohnp","13":"bramreinders97","14":"trangology","15":"SeanMcCarren","16":"shimst3r","17":"bram49","18":"Dref360","19":"vamsidesu5","2":"adrinjalali","20":"kurianbenoy","21":"alliesaizan","22":"stephenrobic","23":"Thomasq99","24":"bethz","25":"yuanshi4","26":"shoresh57","27":"mmadaio","28":"hannawallach","29":"rihorn2","3":"hildeweerts","30":"LeJit","31":"enharten","32":"MBrouns","33":"nina-hua","34":"Bee-zest","35":"MarsLabAtSLU","36":"lgfunderburk","37":"matthew-so","38":"coreysharris","39":"AndreFCruz","4":"MiroDudik","40":"anindya5","41":"leonarduschen","42":"MeekaElla","43":"harvineet","44":"violazhong","45":"mikephelan","46":"galuhsahid","47":"parul100495","48":"vingu","49":"imatiach-msft","5":"kevinrobinson","50":"bricha2","51":"sagu94271","52":"arjsingh","53":"torfjelde","54":"chsafouane","55":"mjorgen1","56":"bthng","57":"Godwindaniel10","58":"svenkat19","59":"ojeda-e","6":"koaning","60":"slbird","61":"hannanabdul55","62":"chisingh","63":"gabrielarcangelbol","64":"mesameki","65":"LisaIbanez","66":"RachitChhaya","67":"gaugup","68":"iofall","69":"hbaniecki","7":"michaelamoako","70":"lokijota","71":"BrandonGoding","72":"adidutt","73":"shashankc28","74":"ziqi-ma","75":"alexquach","76":"Fyrebright","77":"nishit-prasad","78":"sushmitaS16","79":"IanEisenberg","8":"nessamilan","80":"Carlosbogo","81":"wmeints","82":"laurenpendo","83":"afehmiu","84":"philippjfr","85":"cmarmo","86":"firmai","87":"paramrsingh","88":"SameerKSharma","89":"PranavPillai","9":"dependabot[bot]","90":"KanishkVashisht","91":"msftclas","92":"michael1albq","93":"jingwora","94":"janhavi13","95":"dgiova","96":"deltasun","97":"LianaN","98":"willgart","99":"cedarfall"},"major_label_policy":{"id":"1123"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{},"id":"1125","type":"Selection"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{},"id":"1123","type":"AllLabels"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{},"id":"1121","type":"AllLabels"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{},"id":"1126","type":"UnionRenderers"},{"attributes":{},"id":"1120","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{"formatter":{"id":"1120"},"major_label_policy":{"id":"1121"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{},"id":"1101","type":"ResetTool"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126]},"id":"1116","type":"FixedTicker"},{"attributes":{},"id":"1102","type":"HelpTool"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"446b87ee-be3d-4f1d-97c6-33cd56bdae09","root_ids":["1078"],"roots":{"1078":"b289cdc2-9625-483f-bea4-a0f23b55cab4"}}];
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