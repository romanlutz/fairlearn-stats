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
    
      
      
    
      var element = document.getElementById("b12ab0f2-cefb-41a1-a3b2-414af2feeee6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b12ab0f2-cefb-41a1-a3b2-414af2feeee6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ee5551b5-9918-429a-b9a0-976793fbc869":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1043"},"major_label_policy":{"id":"1045"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"text":"Created issues"},"id":"1003","type":"Title"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"formatter":{"id":"1046"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"michaelamoako","100":"iofall","101":"shashankc28","102":"Godwindaniel10","103":"IllegalBeagle123","104":"Gingeh","105":"Jordan7-davila","106":"lucioZuccolo","107":"davreign-dav","108":"kstohr","109":"Fyrebright","11":"bethz","110":"pritishaw1","111":"Patil2099","112":"nishit-prasad","113":"svenkat19","114":"MikeyHV","115":"coreysharris","116":"OctTree","117":"matthew-so","118":"candalfigomoro","119":"sushmitaS16","12":"Dref360","120":"RWilsker","121":"IanEisenberg","122":"ameyn21","123":"millerjohnp","124":"Harsha-Nori","125":"amalik17","126":"LengMei","127":"britneyting","13":"srayagarwal","14":"hannanabdul55","15":"LeJit","16":"janhavi13","17":"parul100495","18":"Bee-zest","19":"bram49","2":"adrinjalali","20":"bramreinders97","21":"ziqi-ma","22":"alliesaizan","23":"SeanMcCarren","24":"chisingh","25":"imatiach-msft","26":"arjsingh","27":"gaugup","28":"AndreFCruz","29":"mmadaio","3":"hildeweerts","30":"bthng","31":"kurianbenoy","32":"Thomasq99","33":"Carlosbogo","34":"moprescu","35":"mesameki","36":"MBrouns","37":"Rishit-dagli","38":"maurominella","39":"leonarduschen","4":"rihorn2","40":"anindya5","41":"chsafouane","42":"shoresh57","43":"MarsLabAtSLU","44":"vladiliescu","45":"BrandonGoding","46":"adidutt","47":"lgfunderburk","48":"alexquach","49":"shimst3r","5":"MiroDudik","50":"MG-Microsoft","51":"kspieks","52":"dgiova","53":"wmeints","54":"afehmiu","55":"bspanjers","56":"firmai","57":"harvineet","58":"gabrielarcangelbol","59":"olliethomas","6":"kevinrobinson","60":"MatthijsdeJ","61":"guanqun-yang","62":"hugovk","63":"michael1albq","64":"jingwora","65":"marcscho","66":"deltasun","67":"yuanshi4","68":"rchiodo","69":"marksoper","7":"dependabot[bot]","70":"LianaN","71":"sagu94271","72":"gregorybchris","73":"anirbandasgupta","74":"RachitChhaya","75":"ancibira","76":"nina-hua","77":"leockl","78":"Acornagain","79":"davreign","8":"koaning","80":"bwuzhang","81":"amir78pgd","82":"hbaniecki","83":"mikephelan","84":"lokijota","85":"violazhong","86":"dciborow","87":"wguyman","88":"manasatramalinga","89":"JEHoctor","9":"nessamilan","90":"rishabhsamb","91":"thomasjpfan","92":"SKrupa","93":"enharten","94":"vamsidesu5","95":"MartaMarchiori","96":"wcheung-code","97":"MeekaElla","98":"trangology","99":"stephenrobic"},"major_label_policy":{"id":"1047"},"ticker":{"id":"1040"}},"id":"1013","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"data":{"top":[274,267,44,37,26,25,20,20,18,17,14,9,8,7,7,6,5,5,5,5,5,4,4,4,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127]},"selected":{"id":"1050"},"selection_policy":{"id":"1049"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127]},"id":"1040","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1037","type":"VBar"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{"source":{"id":"1035"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1050","type":"Selection"},{"attributes":{"data_source":{"id":"1035"},"glyph":{"id":"1036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1037"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"left":[{"id":"1017"}],"renderers":[{"id":"1038"}],"title":{"id":"1003"},"toolbar":{"id":"1028"},"width":900,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{},"id":"1049","type":"UnionRenderers"},{"attributes":{},"id":"1045","type":"AllLabels"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ee5551b5-9918-429a-b9a0-976793fbc869","root_ids":["1002"],"roots":{"1002":"b12ab0f2-cefb-41a1-a3b2-414af2feeee6"}}];
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