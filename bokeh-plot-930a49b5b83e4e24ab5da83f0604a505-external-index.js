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
    
      
      
    
      var element = document.getElementById("a60f0b9b-7032-4217-ac45-b774021aeb2c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a60f0b9b-7032-4217-ac45-b774021aeb2c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7ba325da-8600-49c1-9693-3cbca0b7a4dd":{"defs":[],"roots":{"references":[{"attributes":{"text":"Top referrers"},"id":"1501","type":"Title"},{"attributes":{},"id":"1520","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1533"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1534"}},"x":{"field":"indices"}},"id":"1539","type":"VBar"},{"attributes":{},"id":"1509","type":"LinearScale"},{"attributes":{},"id":"1523","type":"ResetTool"},{"attributes":{"data":{"duplicate":[53,118,54,18,9,6,6,5,4,18,2,9,10,6,4,5,4,2,1,1,2,2,4,1,2,5,2,4,0,1,0,0,0,0,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"unique":[189,77,88,36,40,25,22,16,15,1,14,6,2,5,6,5,6,8,9,8,7,7,5,7,6,2,5,3,6,5,5,4,4,4,4,2,1]},"selected":{"id":"1552"},"selection_policy":{"id":"1551"}},"id":"1537","type":"ColumnDataSource"},{"attributes":{},"id":"1522","type":"SaveTool"},{"attributes":{},"id":"1507","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]},"id":"1574","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1535","type":"Stack"},{"attributes":{},"id":"1505","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1535"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1536"}},"x":{"field":"indices"}},"id":"1558","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1536","type":"Stack"},{"attributes":{},"id":"1571","type":"UnionRenderers"},{"attributes":{},"id":"1544","type":"AllLabels"},{"attributes":{},"id":"1572","type":"Selection"},{"attributes":{},"id":"1547","type":"AllLabels"},{"attributes":{"formatter":{"id":"1546"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"docs.microsoft.com","11":"gitter.im","12":"opendatascience.com","13":"statics.teams.cdn.office.net","14":"DuckDuckGo","15":"engineering.linkedin.com","16":"ai.googleblog.com","17":"towardsdatascience.com","18":"venturebeat.com","19":"fairlearn.github.io","2":"fairlearn.org","20":"anaconda.com","21":"t.co","22":"madewithml.com","23":"azure.microsoft.com","24":"Bing","25":"com.google.android.gm","26":"goodfirstissues.com","27":"aiforpeople.org","28":"pypi.org","29":"infoworld.com","3":"mybuild.microsoft.com","30":"linkedin.com","31":"medium.com","32":"paperswithcode.com","33":"up-for-grabs.net","34":"kdnuggets.com","35":"l.messenger.com","36":"kensciresearch.github.io","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"classroom.udacity.com","8":"microsoft.com","9":"mail.google.com"},"major_label_policy":{"id":"1544"},"ticker":{"id":"1574"}},"id":"1511","type":"LinearAxis"},{"attributes":{},"id":"1546","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1555"}},"id":"1560","type":"CDSView"},{"attributes":{"below":[{"id":"1511"}],"center":[{"id":"1514"},{"id":"1518"},{"id":"1553"}],"left":[{"id":"1515"}],"renderers":[{"id":"1541"},{"id":"1559"}],"title":{"id":"1501"},"toolbar":{"id":"1526"},"width":900,"x_range":{"id":"1503"},"x_scale":{"id":"1507"},"y_range":{"id":"1505"},"y_scale":{"id":"1509"}},"id":"1500","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1537"}},"id":"1542","type":"CDSView"},{"attributes":{"formatter":{"id":"1549"},"major_label_policy":{"id":"1547"},"ticker":{"id":"1516"}},"id":"1515","type":"LinearAxis"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1559"}]},"id":"1573","type":"LegendItem"},{"attributes":{},"id":"1551","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1525","type":"BoxAnnotation"},{"attributes":{"fields":[]},"id":"1533","type":"Stack"},{"attributes":{},"id":"1552","type":"Selection"},{"attributes":{"items":[{"id":"1554"},{"id":"1573"}]},"id":"1553","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"1535"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1536"}},"x":{"field":"indices"}},"id":"1557","type":"VBar"},{"attributes":{},"id":"1503","type":"DataRange1d"},{"attributes":{"axis":{"id":"1511"},"ticker":null},"id":"1514","type":"Grid"},{"attributes":{},"id":"1524","type":"HelpTool"},{"attributes":{"data_source":{"id":"1537"},"glyph":{"id":"1539"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1540"},"view":{"id":"1542"}},"id":"1541","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1555"},"glyph":{"id":"1557"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1558"},"view":{"id":"1560"}},"id":"1559","type":"GlyphRenderer"},{"attributes":{},"id":"1516","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1533"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1534"}},"x":{"field":"indices"}},"id":"1540","type":"VBar"},{"attributes":{"axis":{"id":"1515"},"dimension":1,"ticker":null},"id":"1518","type":"Grid"},{"attributes":{"data":{"duplicate":[53,118,54,18,9,6,6,5,4,18,2,9,10,6,4,5,4,2,1,1,2,2,4,1,2,5,2,4,0,1,0,0,0,0,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"unique":[189,77,88,36,40,25,22,16,15,1,14,6,2,5,6,5,6,8,9,8,7,7,5,7,6,2,5,3,6,5,5,4,4,4,4,2,1]},"selected":{"id":"1572"},"selection_policy":{"id":"1571"}},"id":"1555","type":"ColumnDataSource"},{"attributes":{},"id":"1519","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1519"},{"id":"1520"},{"id":"1521"},{"id":"1522"},{"id":"1523"},{"id":"1524"}]},"id":"1526","type":"Toolbar"},{"attributes":{"fields":["unique"]},"id":"1534","type":"Stack"},{"attributes":{},"id":"1549","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1525"}},"id":"1521","type":"BoxZoomTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1541"}]},"id":"1554","type":"LegendItem"}],"root_ids":["1500"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"7ba325da-8600-49c1-9693-3cbca0b7a4dd","root_ids":["1500"],"roots":{"1500":"a60f0b9b-7032-4217-ac45-b774021aeb2c"}}];
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