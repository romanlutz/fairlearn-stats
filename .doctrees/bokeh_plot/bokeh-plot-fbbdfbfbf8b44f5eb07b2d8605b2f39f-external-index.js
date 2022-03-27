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
    
      
      
    
      var element = document.getElementById("ccfabeee-2802-433e-b2d3-88cdb52188b0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ccfabeee-2802-433e-b2d3-88cdb52188b0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"14016f18-05c8-496c-afdd-6170aacaa12d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1119","type":"BasicTickFormatter"},{"attributes":{"data":{"top":[853,450,340,251,195,80,58,45,35,28,28,25,24,20,20,20,18,17,15,15,14,13,12,10,10,9,9,9,9,8,8,8,7,7,7,6,6,6,6,6,6,5,5,5,5,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135]},"selected":{"id":"1126"},"selection_policy":{"id":"1125"}},"id":"1111","type":"ColumnDataSource"},{"attributes":{},"id":"1083","type":"DataRange1d"},{"attributes":{},"id":"1102","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1112","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"},{"id":"1101"},{"id":"1102"}]},"id":"1104","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1103","type":"BoxAnnotation"},{"attributes":{},"id":"1087","type":"LinearScale"},{"attributes":{"data_source":{"id":"1111"},"glyph":{"id":"1112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1113"},"view":{"id":"1115"}},"id":"1114","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1089"}],"center":[{"id":"1092"},{"id":"1096"}],"left":[{"id":"1093"}],"renderers":[{"id":"1114"}],"title":{"id":"1079"},"toolbar":{"id":"1104"},"width":900,"x_range":{"id":"1081"},"x_scale":{"id":"1085"},"y_range":{"id":"1083"},"y_scale":{"id":"1087"}},"id":"1078","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1122"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"nessamilan","100":"jingwora","101":"janhavi13","102":"dgiova","103":"deltasun","104":"LianaN","105":"willgart","106":"cedarfall","107":"Rishit-dagli","108":"anirbandasgupta","109":"ancibira","11":"alliesaizan","110":"maurominella","111":"csiebler","112":"GraemeMalcolm","113":"Pooja1301","114":"shngt","115":"dciborow","116":"wguyman","117":"kalikhademi","118":"xgchena","119":"MattRudy","12":"dependabot[bot]","120":"lurosenb","121":"kumarnav03","122":"vishals2911","123":"Zuzah","124":"Patil2099","125":"lesteve","126":"MG-Microsoft","127":"MikeyHV","128":"joaquinvanschoren","129":"JorickvdHoeven","13":"srayagarwal","130":"glemaitre","131":"ameyn21","132":"Vibhaa5","133":"britneyting","134":"charlenemariscal","135":"jiajiexiao","14":"kstohr","15":"pritishaw1","16":"trangology","17":"bram49","18":"LeJit","19":"shimst3r","2":"adrinjalali","20":"Dref360","21":"kurianbenoy","22":"vamsidesu5","23":"stephenrobic","24":"Thomasq99","25":"bethz","26":"yuanshi4","27":"shoresh57","28":"mmadaio","29":"hannawallach","3":"hildeweerts","30":"rihorn2","31":"enharten","32":"MBrouns","33":"iofall","34":"nina-hua","35":"Bee-zest","36":"MarsLabAtSLU","37":"lgfunderburk","38":"matthew-so","39":"coreysharris","4":"MiroDudik","40":"rensoostenbach","41":"AndreFCruz","42":"anindya5","43":"leonarduschen","44":"MeekaElla","45":"Harsha-Nori","46":"kspieks","47":"harvineet","48":"imatiach-msft","49":"violazhong","5":"kevinrobinson","50":"mikephelan","51":"galuhsahid","52":"parul100495","53":"vingu","54":"bricha2","55":"sagu94271","56":"arjsingh","57":"torfjelde","58":"chsafouane","59":"mjorgen1","6":"koaning","60":"bthng","61":"Godwindaniel10","62":"svenkat19","63":"ojeda-e","64":"Carlosbogo","65":"Hadyark","66":"Hrittik20","67":"slbird","68":"hannanabdul55","69":"chisingh","7":"SeanMcCarren","70":"gabrielarcangelbol","71":"mesameki","72":"LisaIbanez","73":"RachitChhaya","74":"gaugup","75":"hbaniecki","76":"lokijota","77":"BrandonGoding","78":"adidutt","79":"wcheung-code","8":"bramreinders97","80":"shashankc28","81":"ziqi-ma","82":"alexquach","83":"Fyrebright","84":"nishit-prasad","85":"sushmitaS16","86":"IanEisenberg","87":"millerjohnp","88":"wmeints","89":"laurenpendo","9":"michaelamoako","90":"afehmiu","91":"philippjfr","92":"cmarmo","93":"firmai","94":"paramrsingh","95":"SameerKSharma","96":"PranavPillai","97":"KanishkVashisht","98":"msftclas","99":"michael1albq"},"major_label_policy":{"id":"1123"},"ticker":{"id":"1116"}},"id":"1089","type":"LinearAxis"},{"attributes":{},"id":"1097","type":"PanTool"},{"attributes":{},"id":"1094","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1113","type":"VBar"},{"attributes":{"text":"Issue comments"},"id":"1079","type":"Title"},{"attributes":{},"id":"1098","type":"WheelZoomTool"},{"attributes":{},"id":"1126","type":"Selection"},{"attributes":{"axis":{"id":"1089"},"ticker":null},"id":"1092","type":"Grid"},{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1103"}},"id":"1099","type":"BoxZoomTool"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{},"id":"1122","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1111"}},"id":"1115","type":"CDSView"},{"attributes":{"axis":{"id":"1093"},"dimension":1,"ticker":null},"id":"1096","type":"Grid"},{"attributes":{},"id":"1121","type":"AllLabels"},{"attributes":{},"id":"1100","type":"SaveTool"},{"attributes":{},"id":"1101","type":"ResetTool"},{"attributes":{"formatter":{"id":"1119"},"major_label_policy":{"id":"1121"},"ticker":{"id":"1094"}},"id":"1093","type":"LinearAxis"},{"attributes":{},"id":"1123","type":"AllLabels"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135]},"id":"1116","type":"FixedTicker"},{"attributes":{},"id":"1125","type":"UnionRenderers"}],"root_ids":["1078"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"14016f18-05c8-496c-afdd-6170aacaa12d","root_ids":["1078"],"roots":{"1078":"ccfabeee-2802-433e-b2d3-88cdb52188b0"}}];
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