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
    
      
      
    
      var element = document.getElementById("1f904b91-8fa1-49e2-ad7d-35306f02b0e6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1f904b91-8fa1-49e2-ad7d-35306f02b0e6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"17a8c599-e385-41fc-b068-b703c7e9d8ed":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1465"},"dimension":1,"ticker":null},"id":"1468","type":"Grid"},{"attributes":{"fields":[]},"id":"1483","type":"Stack"},{"attributes":{"items":[{"id":"1504"},{"id":"1523"}]},"id":"1503","type":"Legend"},{"attributes":{},"id":"1501","type":"Selection"},{"attributes":{"data_source":{"id":"1487"},"glyph":{"id":"1489"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1490"},"view":{"id":"1492"}},"id":"1491","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1505"}},"id":"1510","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"1469"},{"id":"1470"},{"id":"1471"},{"id":"1472"},{"id":"1473"},{"id":"1474"}]},"id":"1476","type":"Toolbar"},{"attributes":{"data":{"duplicate":[122,58,48,18,9,6,6,4,14,3,5,6,4,3,5,9,5,1,10,8,4,5,4,1,2,1,1,2,4,6,1,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[83,136,74,36,40,25,22,22,11,21,16,14,13,13,10,6,9,12,2,4,6,5,6,9,8,8,8,7,5,3,8,7,2,5,5]},"selected":{"id":"1521"},"selection_policy":{"id":"1520"}},"id":"1505","type":"ColumnDataSource"},{"attributes":{},"id":"1520","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1475","type":"BoxAnnotation"},{"attributes":{"bottom":{"expr":{"id":"1483"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1484"}},"x":{"field":"indices"}},"id":"1490","type":"VBar"},{"attributes":{},"id":"1499","type":"AllLabels"},{"attributes":{},"id":"1455","type":"DataRange1d"},{"attributes":{},"id":"1469","type":"PanTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1491"}]},"id":"1504","type":"LegendItem"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1509"}]},"id":"1523","type":"LegendItem"},{"attributes":{"source":{"id":"1487"}},"id":"1492","type":"CDSView"},{"attributes":{"data_source":{"id":"1505"},"glyph":{"id":"1507"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1508"},"view":{"id":"1510"}},"id":"1509","type":"GlyphRenderer"},{"attributes":{},"id":"1470","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1475"}},"id":"1471","type":"BoxZoomTool"},{"attributes":{},"id":"1497","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1485","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1483"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1484"}},"x":{"field":"indices"}},"id":"1489","type":"VBar"},{"attributes":{},"id":"1472","type":"SaveTool"},{"attributes":{},"id":"1453","type":"DataRange1d"},{"attributes":{"data":{"duplicate":[122,58,48,18,9,6,6,4,14,3,5,6,4,3,5,9,5,1,10,8,4,5,4,1,2,1,1,2,4,6,1,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[83,136,74,36,40,25,22,22,11,21,16,14,13,13,10,6,9,12,2,4,6,5,6,9,8,8,8,7,5,3,8,7,2,5,5]},"selected":{"id":"1501"},"selection_policy":{"id":"1500"}},"id":"1487","type":"ColumnDataSource"},{"attributes":{},"id":"1473","type":"ResetTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1486","type":"Stack"},{"attributes":{"axis":{"id":"1461"},"ticker":null},"id":"1464","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1485"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1486"}},"x":{"field":"indices"}},"id":"1507","type":"VBar"},{"attributes":{},"id":"1494","type":"BasicTickFormatter"},{"attributes":{},"id":"1496","type":"AllLabels"},{"attributes":{},"id":"1474","type":"HelpTool"},{"attributes":{},"id":"1457","type":"LinearScale"},{"attributes":{"below":[{"id":"1461"}],"center":[{"id":"1464"},{"id":"1468"},{"id":"1503"}],"left":[{"id":"1465"}],"renderers":[{"id":"1491"},{"id":"1509"}],"title":{"id":"1451"},"toolbar":{"id":"1476"},"width":900,"x_range":{"id":"1453"},"x_scale":{"id":"1457"},"y_range":{"id":"1455"},"y_scale":{"id":"1459"}},"id":"1450","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1485"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1486"}},"x":{"field":"indices"}},"id":"1508","type":"VBar"},{"attributes":{},"id":"1466","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1494"},"major_label_policy":{"id":"1496"},"ticker":{"id":"1466"}},"id":"1465","type":"LinearAxis"},{"attributes":{},"id":"1500","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1451","type":"Title"},{"attributes":{"fields":["unique"]},"id":"1484","type":"Stack"},{"attributes":{},"id":"1459","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1524","type":"FixedTicker"},{"attributes":{},"id":"1521","type":"Selection"},{"attributes":{"formatter":{"id":"1497"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"classroom.udacity.com","11":"pypi.org","12":"Bing","13":"linkedin.com","14":"microsoft.com","15":"gitter.im","16":"paperswithcode.com","17":"t.co","18":"opendatascience.com","19":"up-for-grabs.net","2":"fairlearn.org","20":"DuckDuckGo","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"kdnuggets.com","24":"towardsdatascience.com","25":"fairlearn.github.io","26":"medium.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"venturebeat.com","31":"azure.microsoft.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"mail.google.com","8":"statics.teams.cdn.office.net","9":"docs.microsoft.com"},"major_label_policy":{"id":"1499"},"ticker":{"id":"1524"}},"id":"1461","type":"LinearAxis"}],"root_ids":["1450"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"17a8c599-e385-41fc-b068-b703c7e9d8ed","root_ids":["1450"],"roots":{"1450":"1f904b91-8fa1-49e2-ad7d-35306f02b0e6"}}];
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