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
    
      
      
    
      var element = document.getElementById("2cca4077-8179-4094-80d2-f513f44d2618");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2cca4077-8179-4094-80d2-f513f44d2618' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js": "jtq3UzIrk2TfDZfSNGEN0ICKrRWmtzZSQm6i1Xnd3hY3UfU9m98vuEL7JUv7Iway", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js": "rRlSZb4FImflqQNhKcvkZq8b+FqcNFxP9CmCO8Vgo9uNXe6wk6yNMlKMrXn+TjeM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js": "MJyUmyL5f4wPlABPEp4CF5HzMeAPMvzucE8gEGNH15tAWgHFb2hsPNIEkva89XtP"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js"];
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
                    
                  var docs_json = '{"60d3b764-a2df-4edb-a3b6-35dbd45f2dde":{"roots":{"references":[{"attributes":{},"id":"1081","type":"DataRange1d"},{"attributes":{},"id":"1120","type":"Selection"},{"attributes":{},"id":"1117","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1087"}],"center":[{"id":"1090"},{"id":"1094"}],"left":[{"id":"1091"}],"plot_width":900,"renderers":[{"id":"1112"}],"title":{"id":"1077"},"toolbar":{"id":"1102"},"x_range":{"id":"1079"},"x_scale":{"id":"1083"},"y_range":{"id":"1081"},"y_scale":{"id":"1085"}},"id":"1076","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1085","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1095"},{"id":"1096"},{"id":"1097"},{"id":"1098"},{"id":"1099"},{"id":"1100"}]},"id":"1102","type":"Toolbar"},{"attributes":{"axis":{"id":"1091"},"dimension":1,"ticker":null},"id":"1094","type":"Grid"},{"attributes":{},"id":"1095","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1110","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},"id":"1114","type":"FixedTicker"},{"attributes":{"data_source":{"id":"1109"},"glyph":{"id":"1110"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1111"},"selection_glyph":null,"view":{"id":"1113"}},"id":"1112","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1118"},"ticker":{"id":"1092"}},"id":"1091","type":"LinearAxis"},{"attributes":{},"id":"1096","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"green"},"line_width":{"value":7},"top":{"field":"top"},"x":{"field":"x"}},"id":"1111","type":"VBar"},{"attributes":{"source":{"id":"1109"}},"id":"1113","type":"CDSView"},{"attributes":{},"id":"1092","type":"BasicTicker"},{"attributes":{"axis":{"id":"1087"},"ticker":null},"id":"1090","type":"Grid"},{"attributes":{"data":{"top":[281,198,128,77,71,43,24,21,9,9,8,7,6,6,6,4,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},"selected":{"id":"1120"},"selection_policy":{"id":"1121"}},"id":"1109","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1101"}},"id":"1097","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1101","type":"BoxAnnotation"},{"attributes":{"text":"Issue comments"},"id":"1077","type":"Title"},{"attributes":{},"id":"1099","type":"ResetTool"},{"attributes":{},"id":"1098","type":"SaveTool"},{"attributes":{},"id":"1079","type":"DataRange1d"},{"attributes":{},"id":"1121","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1117"},"major_label_orientation":0.75,"major_label_overrides":{"0":"romanlutz","1":"riedgar-ms","10":"rihorn2","11":"nina-hua","12":"hannawallach","13":"Bee-zest","14":"MBrouns","15":"harvineet","16":"dependabot[bot]","17":"parul100495","18":"vingu","19":"imatiach-msft","2":"adrinjalali","20":"bricha2","21":"sagu94271","22":"arjsingh","23":"torfjelde","24":"slbird","25":"hannanabdul55","26":"chisingh","27":"gabrielarcangelbol","28":"mesameki","29":"RachitChhaya","3":"MiroDudik","30":"gaugup","31":"Dref360","32":"wmeints","33":"laurenpendo","34":"afehmiu","35":"philippjfr","36":"cmarmo","37":"firmai","38":"paramrsingh","39":"SameerKSharma","4":"kevinrobinson","40":"PranavPillai","41":"KanishkVashisht","42":"msftclas","43":"michael1albq","44":"jingwora","45":"janhavi13","46":"dgiova","47":"deltasun","48":"LianaN","49":"willgart","5":"koaning","50":"LisaIbanez","51":"cedarfall","52":"Rishit-dagli","53":"anirbandasgupta","54":"iofall","55":"ancibira","56":"maurominella","57":"csiebler","6":"hildeweerts","7":"srayagarwal","8":"bethz","9":"yuanshi4"},"ticker":{"id":"1114"}},"id":"1087","type":"LinearAxis"},{"attributes":{},"id":"1100","type":"HelpTool"},{"attributes":{},"id":"1118","type":"BasicTickFormatter"},{"attributes":{},"id":"1083","type":"LinearScale"}],"root_ids":["1076"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"60d3b764-a2df-4edb-a3b6-35dbd45f2dde","root_ids":["1076"],"roots":{"1076":"2cca4077-8179-4094-80d2-f513f44d2618"}}];
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