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
    
      
      
    
      var element = document.getElementById("1511008d-656b-4bc4-8a44-e1d48eebc4de");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1511008d-656b-4bc4-8a44-e1d48eebc4de' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0093dd0c-c2a6-4c70-9a37-4d4e08544406":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1519","type":"AllLabels"},{"attributes":{},"id":"1490","type":"WheelZoomTool"},{"attributes":{},"id":"1518","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1495","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1507"},"glyph":{"id":"1509"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1510"},"view":{"id":"1512"}},"id":"1511","type":"GlyphRenderer"},{"attributes":{},"id":"1479","type":"LinearScale"},{"attributes":{},"id":"1516","type":"AllLabels"},{"attributes":{"overlay":{"id":"1495"}},"id":"1491","type":"BoxZoomTool"},{"attributes":{},"id":"1515","type":"BasicTickFormatter"},{"attributes":{},"id":"1493","type":"ResetTool"},{"attributes":{"fields":["unique"]},"id":"1505","type":"Stack"},{"attributes":{"items":[{"id":"1524"},{"id":"1543"}]},"id":"1523","type":"Legend"},{"attributes":{},"id":"1477","type":"LinearScale"},{"attributes":{},"id":"1494","type":"HelpTool"},{"attributes":{"bottom":{"expr":{"id":"1505"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1506"}},"x":{"field":"indices"}},"id":"1528","type":"VBar"},{"attributes":{"source":{"id":"1507"}},"id":"1512","type":"CDSView"},{"attributes":{},"id":"1475","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1503"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1504"}},"x":{"field":"indices"}},"id":"1510","type":"VBar"},{"attributes":{},"id":"1492","type":"SaveTool"},{"attributes":{"bottom":{"expr":{"id":"1503"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1504"}},"x":{"field":"indices"}},"id":"1509","type":"VBar"},{"attributes":{},"id":"1541","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1515"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"microsoft.com","11":"classroom.udacity.com","12":"Bing","13":"pypi.org","14":"gitter.im","15":"opendatascience.com","16":"linkedin.com","17":"paperswithcode.com","18":"DuckDuckGo","19":"engineering.linkedin.com","2":"fairlearn.org","20":"ai.googleblog.com","21":"towardsdatascience.com","22":"venturebeat.com","23":"fairlearn.github.io","24":"medium.com","25":"anaconda.com","26":"t.co","27":"madewithml.com","28":"kdnuggets.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"up-for-grabs.net","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"statics.teams.cdn.office.net","8":"mail.google.com","9":"docs.microsoft.com"},"major_label_policy":{"id":"1516"},"ticker":{"id":"1544"}},"id":"1481","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1525"},"glyph":{"id":"1527"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1528"},"view":{"id":"1530"}},"id":"1529","type":"GlyphRenderer"},{"attributes":{},"id":"1486","type":"BasicTicker"},{"attributes":{"axis":{"id":"1485"},"dimension":1,"ticker":null},"id":"1488","type":"Grid"},{"attributes":{"fields":["unique","duplicate"]},"id":"1506","type":"Stack"},{"attributes":{"formatter":{"id":"1518"},"major_label_policy":{"id":"1519"},"ticker":{"id":"1486"}},"id":"1485","type":"LinearAxis"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1529"}]},"id":"1543","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1544","type":"FixedTicker"},{"attributes":{"data":{"duplicate":[62,122,47,18,9,6,6,15,4,4,3,5,3,8,9,10,8,3,4,5,4,2,1,1,1,2,2,4,1,6,1,3,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[174,84,110,36,40,25,22,13,22,18,19,16,14,8,6,2,4,8,6,5,6,8,9,8,8,7,7,5,8,3,7,5,2,5,5]},"selected":{"id":"1520"},"selection_policy":{"id":"1521"}},"id":"1507","type":"ColumnDataSource"},{"attributes":{},"id":"1473","type":"DataRange1d"},{"attributes":{"axis":{"id":"1481"},"ticker":null},"id":"1484","type":"Grid"},{"attributes":{},"id":"1489","type":"PanTool"},{"attributes":{"bottom":{"expr":{"id":"1505"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1506"}},"x":{"field":"indices"}},"id":"1527","type":"VBar"},{"attributes":{"data":{"duplicate":[62,122,47,18,9,6,6,15,4,4,3,5,3,8,9,10,8,3,4,5,4,2,1,1,1,2,2,4,1,6,1,3,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[174,84,110,36,40,25,22,13,22,18,19,16,14,8,6,2,4,8,6,5,6,8,9,8,8,7,7,5,8,3,7,5,2,5,5]},"selected":{"id":"1540"},"selection_policy":{"id":"1541"}},"id":"1525","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"1503","type":"Stack"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1511"}]},"id":"1524","type":"LegendItem"},{"attributes":{"text":"Top referrers"},"id":"1471","type":"Title"},{"attributes":{},"id":"1521","type":"UnionRenderers"},{"attributes":{},"id":"1540","type":"Selection"},{"attributes":{"below":[{"id":"1481"}],"center":[{"id":"1484"},{"id":"1488"},{"id":"1523"}],"left":[{"id":"1485"}],"renderers":[{"id":"1511"},{"id":"1529"}],"title":{"id":"1471"},"toolbar":{"id":"1496"},"width":900,"x_range":{"id":"1473"},"x_scale":{"id":"1477"},"y_range":{"id":"1475"},"y_scale":{"id":"1479"}},"id":"1470","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"1489"},{"id":"1490"},{"id":"1491"},{"id":"1492"},{"id":"1493"},{"id":"1494"}]},"id":"1496","type":"Toolbar"},{"attributes":{"fields":["unique"]},"id":"1504","type":"Stack"},{"attributes":{},"id":"1520","type":"Selection"},{"attributes":{"source":{"id":"1525"}},"id":"1530","type":"CDSView"}],"root_ids":["1470"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"0093dd0c-c2a6-4c70-9a37-4d4e08544406","root_ids":["1470"],"roots":{"1470":"1511008d-656b-4bc4-8a44-e1d48eebc4de"}}];
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