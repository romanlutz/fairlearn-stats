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
    
      
      
    
      var element = document.getElementById("4f69c5a8-29c1-4071-bd8f-d057dd41f207");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4f69c5a8-29c1-4071-bd8f-d057dd41f207' but no matching script tag was found.")
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
                    
                  var docs_json = '{"20e2af25-9d1f-418b-9785-c9857eca9c29":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1044","type":"AllLabels"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{"formatter":{"id":"1043"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"michaelamoako","100":"Fyrebright","101":"pritishaw1","11":"bethz","12":"srayagarwal","13":"hannanabdul55","14":"Dref360","15":"janhavi13","16":"parul100495","17":"Bee-zest","18":"LeJit","19":"chisingh","2":"adrinjalali","20":"imatiach-msft","21":"arjsingh","22":"gaugup","23":"bthng","24":"moprescu","25":"mesameki","26":"MBrouns","27":"Rishit-dagli","28":"maurominella","29":"leonarduschen","3":"rihorn2","30":"anindya5","31":"chsafouane","32":"shoresh57","33":"MarsLabAtSLU","34":"vladiliescu","35":"BrandonGoding","36":"adidutt","37":"mmadaio","38":"alexquach","39":"kurianbenoy","4":"MiroDudik","40":"dgiova","41":"wmeints","42":"afehmiu","43":"bspanjers","44":"firmai","45":"harvineet","46":"gabrielarcangelbol","47":"olliethomas","48":"MatthijsdeJ","49":"guanqun-yang","5":"kevinrobinson","50":"hugovk","51":"michael1albq","52":"jingwora","53":"marcscho","54":"deltasun","55":"yuanshi4","56":"rchiodo","57":"marksoper","58":"LianaN","59":"sagu94271","6":"dependabot[bot]","60":"gregorybchris","61":"anirbandasgupta","62":"RachitChhaya","63":"ancibira","64":"nina-hua","65":"leockl","66":"Acornagain","67":"AndreFCruz","68":"davreign","69":"bwuzhang","7":"hildeweerts","70":"amir78pgd","71":"hbaniecki","72":"mikephelan","73":"lokijota","74":"violazhong","75":"dciborow","76":"wguyman","77":"manasatramalinga","78":"JEHoctor","79":"rishabhsamb","8":"koaning","80":"thomasjpfan","81":"SKrupa","82":"enharten","83":"vamsidesu5","84":"MartaMarchiori","85":"wcheung-code","86":"MeekaElla","87":"trangology","88":"lgfunderburk","89":"stephenrobic","9":"nessamilan","90":"iofall","91":"shashankc28","92":"Godwindaniel10","93":"IllegalBeagle123","94":"Gingeh","95":"ziqi-ma","96":"Jordan7-davila","97":"lucioZuccolo","98":"davreign-dav","99":"kstohr"},"major_label_policy":{"id":"1044"},"ticker":{"id":"1040"}},"id":"1013","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{},"id":"1045","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"left":[{"id":"1017"}],"renderers":[{"id":"1038"}],"title":{"id":"1003"},"toolbar":{"id":"1028"},"width":900,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1037","type":"VBar"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1049","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"text":"Created issues"},"id":"1003","type":"Title"},{"attributes":{"data":{"top":[268,227,38,26,24,20,20,20,17,16,13,9,7,7,7,5,5,5,5,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},"selected":{"id":"1048"},"selection_policy":{"id":"1049"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},"id":"1040","type":"FixedTicker"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1048","type":"Selection"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1035"},"glyph":{"id":"1036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1037"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"formatter":{"id":"1045"},"major_label_policy":{"id":"1047"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"source":{"id":"1035"}},"id":"1039","type":"CDSView"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"20e2af25-9d1f-418b-9785-c9857eca9c29","root_ids":["1002"],"roots":{"1002":"4f69c5a8-29c1-4071-bd8f-d057dd41f207"}}];
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