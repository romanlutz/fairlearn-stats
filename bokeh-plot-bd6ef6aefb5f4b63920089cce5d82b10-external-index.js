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
    
      
      
    
      var element = document.getElementById("54d94086-fc38-4896-8d45-3498c907ce9e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '54d94086-fc38-4896-8d45-3498c907ce9e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c678a6a7-59fd-4826-ad99-69e2f7760f7a":{"defs":[],"roots":{"references":[{"attributes":{"text":"Created issues"},"id":"1003","type":"Title"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1046","type":"AllLabels"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1044","type":"AllLabels"},{"attributes":{"formatter":{"id":"1045"},"major_label_policy":{"id":"1044"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"source":{"id":"1035"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1045","type":"BasicTickFormatter"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"data_source":{"id":"1035"},"glyph":{"id":"1036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1037"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{},"id":"1050","type":"UnionRenderers"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{},"id":"1049","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{"data":{"top":[273,266,44,29,26,25,20,20,18,16,14,9,8,7,7,5,5,5,5,5,4,4,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]},"selected":{"id":"1049"},"selection_policy":{"id":"1050"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1037","type":"VBar"},{"attributes":{"formatter":{"id":"1047"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"michaelamoako","100":"Godwindaniel10","101":"IllegalBeagle123","102":"Gingeh","103":"Jordan7-davila","104":"lucioZuccolo","105":"davreign-dav","106":"kstohr","107":"Fyrebright","108":"pritishaw1","109":"Patil2099","11":"bethz","110":"nishit-prasad","111":"svenkat19","112":"MikeyHV","113":"coreysharris","114":"OctTree","115":"matthew-so","116":"candalfigomoro","117":"sushmitaS16","118":"RWilsker","119":"IanEisenberg","12":"Dref360","120":"ameyn21","13":"srayagarwal","14":"hannanabdul55","15":"janhavi13","16":"parul100495","17":"Bee-zest","18":"LeJit","19":"bram49","2":"adrinjalali","20":"ziqi-ma","21":"bramreinders97","22":"chisingh","23":"imatiach-msft","24":"arjsingh","25":"gaugup","26":"AndreFCruz","27":"bthng","28":"kurianbenoy","29":"alliesaizan","3":"hildeweerts","30":"Thomasq99","31":"SeanMcCarren","32":"moprescu","33":"mesameki","34":"MBrouns","35":"Rishit-dagli","36":"maurominella","37":"leonarduschen","38":"anindya5","39":"chsafouane","4":"rihorn2","40":"shoresh57","41":"MarsLabAtSLU","42":"vladiliescu","43":"BrandonGoding","44":"adidutt","45":"mmadaio","46":"alexquach","47":"shimst3r","48":"MG-Microsoft","49":"dgiova","5":"MiroDudik","50":"wmeints","51":"afehmiu","52":"bspanjers","53":"firmai","54":"harvineet","55":"gabrielarcangelbol","56":"olliethomas","57":"MatthijsdeJ","58":"guanqun-yang","59":"hugovk","6":"kevinrobinson","60":"michael1albq","61":"jingwora","62":"marcscho","63":"deltasun","64":"yuanshi4","65":"rchiodo","66":"marksoper","67":"LianaN","68":"sagu94271","69":"gregorybchris","7":"dependabot[bot]","70":"anirbandasgupta","71":"RachitChhaya","72":"ancibira","73":"nina-hua","74":"leockl","75":"Acornagain","76":"davreign","77":"bwuzhang","78":"amir78pgd","79":"hbaniecki","8":"koaning","80":"mikephelan","81":"lokijota","82":"violazhong","83":"dciborow","84":"wguyman","85":"manasatramalinga","86":"JEHoctor","87":"rishabhsamb","88":"thomasjpfan","89":"SKrupa","9":"nessamilan","90":"enharten","91":"vamsidesu5","92":"MartaMarchiori","93":"wcheung-code","94":"MeekaElla","95":"trangology","96":"lgfunderburk","97":"stephenrobic","98":"iofall","99":"shashankc28"},"major_label_policy":{"id":"1046"},"ticker":{"id":"1040"}},"id":"1013","type":"LinearAxis"},{"attributes":{},"id":"1047","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"left":[{"id":"1017"}],"renderers":[{"id":"1038"}],"title":{"id":"1003"},"toolbar":{"id":"1028"},"width":900,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]},"id":"1040","type":"FixedTicker"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"c678a6a7-59fd-4826-ad99-69e2f7760f7a","root_ids":["1002"],"roots":{"1002":"54d94086-fc38-4896-8d45-3498c907ce9e"}}];
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