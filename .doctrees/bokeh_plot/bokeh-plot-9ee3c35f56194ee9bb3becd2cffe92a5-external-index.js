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
    
      
      
    
      var element = document.getElementById("7a30b411-ad28-4cbe-98cc-c62d98a636b6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7a30b411-ad28-4cbe-98cc-c62d98a636b6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"06af7e23-e169-4dc7-8719-d5aa9c045394":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128]},"id":"1040","type":"FixedTicker"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{},"id":"1043","type":"AllLabels"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{"data":{"top":[278,268,45,44,26,26,20,20,18,17,14,9,8,7,7,7,5,5,5,5,5,5,5,4,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128]},"selected":{"id":"1049"},"selection_policy":{"id":"1048"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"formatter":{"id":"1046"},"major_label_policy":{"id":"1045"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{"text":"Created issues"},"id":"1003","type":"Title"},{"attributes":{},"id":"1049","type":"Selection"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{},"id":"1045","type":"AllLabels"},{"attributes":{},"id":"1048","type":"UnionRenderers"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{},"id":"1044","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1035"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"left":[{"id":"1017"}],"renderers":[{"id":"1038"}],"title":{"id":"1003"},"toolbar":{"id":"1028"},"width":900,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1044"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"michaelamoako","100":"MeekaElla","101":"trangology","102":"stephenrobic","103":"shashankc28","104":"Godwindaniel10","105":"IllegalBeagle123","106":"Gingeh","107":"Jordan7-davila","108":"lucioZuccolo","109":"davreign-dav","11":"bethz","110":"kstohr","111":"Fyrebright","112":"pritishaw1","113":"Patil2099","114":"nishit-prasad","115":"svenkat19","116":"MikeyHV","117":"coreysharris","118":"OctTree","119":"matthew-so","12":"Dref360","120":"candalfigomoro","121":"sushmitaS16","122":"RWilsker","123":"IanEisenberg","124":"ameyn21","125":"millerjohnp","126":"Harsha-Nori","127":"amalik17","128":"LengMei","13":"srayagarwal","14":"hannanabdul55","15":"LeJit","16":"janhavi13","17":"parul100495","18":"Bee-zest","19":"bram49","2":"hildeweerts","20":"alliesaizan","21":"SeanMcCarren","22":"bramreinders97","23":"ziqi-ma","24":"chisingh","25":"imatiach-msft","26":"arjsingh","27":"gaugup","28":"AndreFCruz","29":"chsafouane","3":"adrinjalali","30":"mmadaio","31":"bthng","32":"kurianbenoy","33":"Thomasq99","34":"Carlosbogo","35":"rensoostenbach","36":"moprescu","37":"mesameki","38":"MBrouns","39":"Rishit-dagli","4":"MiroDudik","40":"maurominella","41":"leonarduschen","42":"anindya5","43":"shoresh57","44":"MarsLabAtSLU","45":"vladiliescu","46":"BrandonGoding","47":"adidutt","48":"lgfunderburk","49":"iofall","5":"rihorn2","50":"alexquach","51":"shimst3r","52":"MG-Microsoft","53":"kspieks","54":"britneyting","55":"dgiova","56":"wmeints","57":"afehmiu","58":"bspanjers","59":"firmai","6":"kevinrobinson","60":"harvineet","61":"gabrielarcangelbol","62":"olliethomas","63":"MatthijsdeJ","64":"guanqun-yang","65":"hugovk","66":"michael1albq","67":"jingwora","68":"marcscho","69":"deltasun","7":"dependabot[bot]","70":"yuanshi4","71":"rchiodo","72":"marksoper","73":"LianaN","74":"sagu94271","75":"gregorybchris","76":"anirbandasgupta","77":"RachitChhaya","78":"ancibira","79":"nina-hua","8":"koaning","80":"leockl","81":"Acornagain","82":"davreign","83":"bwuzhang","84":"amir78pgd","85":"hbaniecki","86":"mikephelan","87":"lokijota","88":"violazhong","89":"dciborow","9":"nessamilan","90":"wguyman","91":"manasatramalinga","92":"JEHoctor","93":"rishabhsamb","94":"thomasjpfan","95":"SKrupa","96":"enharten","97":"vamsidesu5","98":"MartaMarchiori","99":"wcheung-code"},"major_label_policy":{"id":"1043"},"ticker":{"id":"1040"}},"id":"1013","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1037","type":"VBar"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1035"},"glyph":{"id":"1036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1037"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"06af7e23-e169-4dc7-8719-d5aa9c045394","root_ids":["1002"],"roots":{"1002":"7a30b411-ad28-4cbe-98cc-c62d98a636b6"}}];
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