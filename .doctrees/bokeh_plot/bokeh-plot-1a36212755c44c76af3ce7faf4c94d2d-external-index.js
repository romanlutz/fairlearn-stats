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
    
      
      
    
      var element = document.getElementById("0a09dd36-7a6a-476b-a9a6-0d560004e548");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0a09dd36-7a6a-476b-a9a6-0d560004e548' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e585dbea-e50f-46cc-a4ce-2b232fbf7f7f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1537","type":"Selection"},{"attributes":{"data_source":{"id":"1520"},"glyph":{"id":"1522"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1523"},"view":{"id":"1525"}},"id":"1524","type":"GlyphRenderer"},{"attributes":{"data":{"duplicate":[75,87,36,18,9,6,6,4,14,4,5,6,1,3,5,9,5,10,8,2,4,4,5,4,2,1,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[168,98,83,36,40,25,22,22,9,17,16,11,15,13,10,6,9,2,4,10,6,6,5,6,8,9,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1517"},"selection_policy":{"id":"1516"}},"id":"1502","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1490","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1484"},{"id":"1485"},{"id":"1486"},{"id":"1487"},{"id":"1488"},{"id":"1489"}]},"id":"1491","type":"Toolbar"},{"attributes":{"fields":["unique"]},"id":"1500","type":"Stack"},{"attributes":{"data_source":{"id":"1502"},"glyph":{"id":"1504"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1505"},"view":{"id":"1507"}},"id":"1506","type":"GlyphRenderer"},{"attributes":{"fields":["unique","duplicate"]},"id":"1501","type":"Stack"},{"attributes":{},"id":"1484","type":"PanTool"},{"attributes":{"bottom":{"expr":{"id":"1498"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1499"}},"x":{"field":"indices"}},"id":"1505","type":"VBar"},{"attributes":{"source":{"id":"1502"}},"id":"1507","type":"CDSView"},{"attributes":{"below":[{"id":"1476"}],"center":[{"id":"1479"},{"id":"1483"},{"id":"1518"}],"left":[{"id":"1480"}],"renderers":[{"id":"1506"},{"id":"1524"}],"title":{"id":"1466"},"toolbar":{"id":"1491"},"width":900,"x_range":{"id":"1468"},"x_scale":{"id":"1472"},"y_range":{"id":"1470"},"y_scale":{"id":"1474"}},"id":"1465","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1498"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1499"}},"x":{"field":"indices"}},"id":"1504","type":"VBar"},{"attributes":{},"id":"1468","type":"DataRange1d"},{"attributes":{"text":"Top referrers"},"id":"1466","type":"Title"},{"attributes":{},"id":"1485","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1490"}},"id":"1486","type":"BoxZoomTool"},{"attributes":{},"id":"1516","type":"UnionRenderers"},{"attributes":{},"id":"1487","type":"SaveTool"},{"attributes":{},"id":"1472","type":"LinearScale"},{"attributes":{},"id":"1488","type":"ResetTool"},{"attributes":{},"id":"1536","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1510"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"classroom.udacity.com","11":"Bing","12":"t.co","13":"linkedin.com","14":"microsoft.com","15":"gitter.im","16":"paperswithcode.com","17":"opendatascience.com","18":"up-for-grabs.net","19":"kdnuggets.com","2":"fairlearn.org","20":"pypi.org","21":"DuckDuckGo","22":"engineering.linkedin.com","23":"ai.googleblog.com","24":"towardsdatascience.com","25":"venturebeat.com","26":"fairlearn.github.io","27":"medium.com","28":"anaconda.com","29":"madewithml.com","3":"mybuild.microsoft.com","30":"aiforpeople.org","31":"azure.microsoft.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"mail.google.com","8":"statics.teams.cdn.office.net","9":"docs.microsoft.com"},"major_label_policy":{"id":"1511"},"ticker":{"id":"1539"}},"id":"1476","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1500"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1501"}},"x":{"field":"indices"}},"id":"1523","type":"VBar"},{"attributes":{"source":{"id":"1520"}},"id":"1525","type":"CDSView"},{"attributes":{},"id":"1489","type":"HelpTool"},{"attributes":{"data":{"duplicate":[75,87,36,18,9,6,6,4,14,4,5,6,1,3,5,9,5,10,8,2,4,4,5,4,2,1,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[168,98,83,36,40,25,22,22,9,17,16,11,15,13,10,6,9,2,4,10,6,6,5,6,8,9,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1537"},"selection_policy":{"id":"1536"}},"id":"1520","type":"ColumnDataSource"},{"attributes":{},"id":"1517","type":"Selection"},{"attributes":{},"id":"1474","type":"LinearScale"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1524"}]},"id":"1538","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1539","type":"FixedTicker"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1506"}]},"id":"1519","type":"LegendItem"},{"attributes":{},"id":"1481","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1500"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1501"}},"x":{"field":"indices"}},"id":"1522","type":"VBar"},{"attributes":{"axis":{"id":"1476"},"ticker":null},"id":"1479","type":"Grid"},{"attributes":{"items":[{"id":"1519"},{"id":"1538"}]},"id":"1518","type":"Legend"},{"attributes":{"fields":[]},"id":"1498","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1499","type":"Stack"},{"attributes":{"axis":{"id":"1480"},"dimension":1,"ticker":null},"id":"1483","type":"Grid"},{"attributes":{"formatter":{"id":"1513"},"major_label_policy":{"id":"1514"},"ticker":{"id":"1481"}},"id":"1480","type":"LinearAxis"},{"attributes":{},"id":"1510","type":"BasicTickFormatter"},{"attributes":{},"id":"1513","type":"BasicTickFormatter"},{"attributes":{},"id":"1470","type":"DataRange1d"},{"attributes":{},"id":"1514","type":"AllLabels"},{"attributes":{},"id":"1511","type":"AllLabels"}],"root_ids":["1465"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e585dbea-e50f-46cc-a4ce-2b232fbf7f7f","root_ids":["1465"],"roots":{"1465":"0a09dd36-7a6a-476b-a9a6-0d560004e548"}}];
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