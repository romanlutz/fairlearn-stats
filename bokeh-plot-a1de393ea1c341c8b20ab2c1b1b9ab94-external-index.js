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
    
      
      
    
      var element = document.getElementById("6f988298-4f1a-47fa-92ba-fc64539d4064");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6f988298-4f1a-47fa-92ba-fc64539d4064' but no matching script tag was found.")
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
                    
                  var docs_json = '{"57f83c37-b47d-4d09-980c-8cea1ddb8f59":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1465"},"dimension":1,"ticker":null},"id":"1468","type":"Grid"},{"attributes":{},"id":"1496","type":"BasicTickFormatter"},{"attributes":{},"id":"1455","type":"DataRange1d"},{"attributes":{},"id":"1495","type":"AllLabels"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1524","type":"FixedTicker"},{"attributes":{"items":[{"id":"1504"},{"id":"1523"}]},"id":"1503","type":"Legend"},{"attributes":{"fields":[]},"id":"1483","type":"Stack"},{"attributes":{},"id":"1521","type":"Selection"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1491"}]},"id":"1504","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1475","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1469"},{"id":"1470"},{"id":"1471"},{"id":"1472"},{"id":"1473"},{"id":"1474"}]},"id":"1476","type":"Toolbar"},{"attributes":{"data_source":{"id":"1487"},"glyph":{"id":"1489"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1490"},"view":{"id":"1492"}},"id":"1491","type":"GlyphRenderer"},{"attributes":{},"id":"1502","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1483"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1484"}},"x":{"field":"indices"}},"id":"1490","type":"VBar"},{"attributes":{},"id":"1469","type":"PanTool"},{"attributes":{"source":{"id":"1487"}},"id":"1492","type":"CDSView"},{"attributes":{},"id":"1522","type":"UnionRenderers"},{"attributes":{},"id":"1453","type":"DataRange1d"},{"attributes":{},"id":"1470","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1485"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1486"}},"x":{"field":"indices"}},"id":"1507","type":"VBar"},{"attributes":{},"id":"1501","type":"Selection"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1509"}]},"id":"1523","type":"LegendItem"},{"attributes":{"overlay":{"id":"1475"}},"id":"1471","type":"BoxZoomTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1486","type":"Stack"},{"attributes":{},"id":"1472","type":"SaveTool"},{"attributes":{},"id":"1499","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1484","type":"Stack"},{"attributes":{},"id":"1473","type":"ResetTool"},{"attributes":{"source":{"id":"1505"}},"id":"1510","type":"CDSView"},{"attributes":{"data":{"duplicate":[153,65,63,18,9,6,6,6,15,4,8,7,5,3,5,9,2,5,10,8,4,5,4,2,1,1,2,4,6,1,1,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[86,149,85,36,40,27,25,22,12,22,16,15,16,13,10,6,13,9,2,4,6,5,6,8,8,8,7,5,3,8,7,7,2,5,5]},"selected":{"id":"1501"},"selection_policy":{"id":"1502"}},"id":"1487","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1483"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1484"}},"x":{"field":"indices"}},"id":"1489","type":"VBar"},{"attributes":{"data":{"duplicate":[153,65,63,18,9,6,6,6,15,4,8,7,5,3,5,9,2,5,10,8,4,5,4,2,1,1,2,4,6,1,1,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[86,149,85,36,40,27,25,22,12,22,16,15,16,13,10,6,13,9,2,4,6,5,6,8,8,8,7,5,3,8,7,7,2,5,5]},"selected":{"id":"1521"},"selection_policy":{"id":"1522"}},"id":"1505","type":"ColumnDataSource"},{"attributes":{},"id":"1474","type":"HelpTool"},{"attributes":{},"id":"1466","type":"BasicTicker"},{"attributes":{},"id":"1498","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1485","type":"Stack"},{"attributes":{},"id":"1457","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1485"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1486"}},"x":{"field":"indices"}},"id":"1508","type":"VBar"},{"attributes":{"axis":{"id":"1461"},"ticker":null},"id":"1464","type":"Grid"},{"attributes":{"text":"Top referrers"},"id":"1451","type":"Title"},{"attributes":{"data_source":{"id":"1505"},"glyph":{"id":"1507"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1508"},"view":{"id":"1510"}},"id":"1509","type":"GlyphRenderer"},{"attributes":{},"id":"1459","type":"LinearScale"},{"attributes":{"below":[{"id":"1461"}],"center":[{"id":"1464"},{"id":"1468"},{"id":"1503"}],"left":[{"id":"1465"}],"renderers":[{"id":"1491"},{"id":"1509"}],"title":{"id":"1451"},"toolbar":{"id":"1476"},"width":900,"x_range":{"id":"1453"},"x_scale":{"id":"1457"},"y_range":{"id":"1455"},"y_scale":{"id":"1459"}},"id":"1450","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1496"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"pypi.org","11":"Bing","12":"classroom.udacity.com","13":"linkedin.com","14":"microsoft.com","15":"gitter.im","16":"t.co","17":"paperswithcode.com","18":"opendatascience.com","19":"up-for-grabs.net","2":"fairlearn.org","20":"DuckDuckGo","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"anaconda.com","27":"madewithml.com","28":"aiforpeople.org","29":"venturebeat.com","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"kdnuggets.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"event.on24.com","8":"statics.teams.cdn.office.net","9":"mail.google.com"},"major_label_policy":{"id":"1495"},"ticker":{"id":"1524"}},"id":"1461","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1499"},"major_label_policy":{"id":"1498"},"ticker":{"id":"1466"}},"id":"1465","type":"LinearAxis"}],"root_ids":["1450"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"57f83c37-b47d-4d09-980c-8cea1ddb8f59","root_ids":["1450"],"roots":{"1450":"6f988298-4f1a-47fa-92ba-fc64539d4064"}}];
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