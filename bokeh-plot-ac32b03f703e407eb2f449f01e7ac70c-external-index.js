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
    
      
      
    
      var element = document.getElementById("dc9c98bf-4fad-45da-978c-4e705cf55759");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc9c98bf-4fad-45da-978c-4e705cf55759' but no matching script tag was found.")
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
                    
                  var docs_json = '{"df36b3fb-6d8e-4ba4-b49c-95c28f13128c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{},"id":"1045","type":"AllLabels"},{"attributes":{},"id":"1049","type":"UnionRenderers"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{"formatter":{"id":"1044"},"major_label_orientation":0.75,"major_label_overrides":{"0":"riedgar-ms","1":"romanlutz","10":"bethz","11":"srayagarwal","12":"hannanabdul55","13":"Dref360","14":"janhavi13","15":"parul100495","16":"Bee-zest","17":"LeJit","18":"chisingh","19":"imatiach-msft","2":"adrinjalali","20":"arjsingh","21":"gaugup","22":"moprescu","23":"mesameki","24":"MBrouns","25":"Rishit-dagli","26":"maurominella","27":"leonarduschen","28":"anindya5","29":"chsafouane","3":"rihorn2","30":"shoresh57","31":"MarsLabAtSLU","32":"vladiliescu","33":"BrandonGoding","34":"adidutt","35":"mmadaio","36":"dgiova","37":"wmeints","38":"afehmiu","39":"bspanjers","4":"kevinrobinson","40":"firmai","41":"harvineet","42":"gabrielarcangelbol","43":"olliethomas","44":"MatthijsdeJ","45":"guanqun-yang","46":"hugovk","47":"michael1albq","48":"jingwora","49":"marcscho","5":"MiroDudik","50":"deltasun","51":"yuanshi4","52":"rchiodo","53":"marksoper","54":"LianaN","55":"sagu94271","56":"gregorybchris","57":"anirbandasgupta","58":"RachitChhaya","59":"ancibira","6":"dependabot[bot]","60":"nina-hua","61":"leockl","62":"Acornagain","63":"AndreFCruz","64":"davreign","65":"bwuzhang","66":"amir78pgd","67":"hbaniecki","68":"mikephelan","69":"lokijota","7":"koaning","70":"violazhong","71":"dciborow","72":"wguyman","73":"manasatramalinga","74":"JEHoctor","75":"rishabhsamb","76":"thomasjpfan","77":"SKrupa","78":"enharten","79":"vamsidesu5","8":"hildeweerts","80":"MartaMarchiori","81":"wcheung-code","9":"michaelamoako"},"major_label_policy":{"id":"1043"},"ticker":{"id":"1040"}},"id":"1013","type":"LinearAxis"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"left":[{"id":"1017"}],"renderers":[{"id":"1038"}],"title":{"id":"1003"},"toolbar":{"id":"1028"},"width":900,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1035"},"glyph":{"id":"1036"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1037"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{},"id":"1043","type":"AllLabels"},{"attributes":{"text":"Created issues"},"id":"1003","type":"Title"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]},"id":"1040","type":"FixedTicker"},{"attributes":{"data":{"top":[266,209,29,26,20,20,20,17,15,12,9,7,7,7,5,5,5,4,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]},"selected":{"id":"1050"},"selection_policy":{"id":"1049"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"formatter":{"id":"1046"},"major_label_policy":{"id":"1045"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1050","type":"Selection"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{},"id":"1044","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1037","type":"VBar"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1035"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"x":{"field":"x"}},"id":"1036","type":"VBar"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"df36b3fb-6d8e-4ba4-b49c-95c28f13128c","root_ids":["1002"],"roots":{"1002":"dc9c98bf-4fad-45da-978c-4e705cf55759"}}];
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