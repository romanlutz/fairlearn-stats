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
    
      
      
    
      var element = document.getElementById("e4fb4ae4-32e6-4e71-a936-deaa4c776eb3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e4fb4ae4-32e6-4e71-a936-deaa4c776eb3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5589c272-a3ae-44e0-961d-18c566d77039":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1500","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1513"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1514"}},"x":{"field":"indices"}},"id":"1520","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1513"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1514"}},"x":{"field":"indices"}},"id":"1519","type":"VBar"},{"attributes":{},"id":"1485","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1505"}},"id":"1501","type":"BoxZoomTool"},{"attributes":{},"id":"1531","type":"UnionRenderers"},{"attributes":{},"id":"1528","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1521"}]},"id":"1534","type":"LegendItem"},{"attributes":{"below":[{"id":"1491"}],"center":[{"id":"1494"},{"id":"1498"},{"id":"1533"}],"left":[{"id":"1495"}],"renderers":[{"id":"1521"},{"id":"1539"}],"title":{"id":"1481"},"toolbar":{"id":"1506"},"width":900,"x_range":{"id":"1483"},"x_scale":{"id":"1487"},"y_range":{"id":"1485"},"y_scale":{"id":"1489"}},"id":"1480","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1502","type":"SaveTool"},{"attributes":{"fields":[]},"id":"1513","type":"Stack"},{"attributes":{},"id":"1487","type":"LinearScale"},{"attributes":{},"id":"1503","type":"ResetTool"},{"attributes":{"source":{"id":"1517"}},"id":"1522","type":"CDSView"},{"attributes":{"data":{"duplicate":[71,41,16,18,9,6,6,5,4,4,8,9,2,10,8,6,5,4,5,4,2,7,1,1,2,2,6,4,1,2,5,2,5,1,0],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[151,71,61,36,40,25,22,16,14,14,9,6,12,2,4,5,5,6,5,6,8,3,9,8,7,7,3,5,7,6,2,5,1,5,5]},"selected":{"id":"1532"},"selection_policy":{"id":"1531"}},"id":"1517","type":"ColumnDataSource"},{"attributes":{},"id":"1483","type":"DataRange1d"},{"attributes":{"fields":["unique"]},"id":"1514","type":"Stack"},{"attributes":{},"id":"1504","type":"HelpTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1516","type":"Stack"},{"attributes":{"data_source":{"id":"1517"},"glyph":{"id":"1519"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1520"},"view":{"id":"1522"}},"id":"1521","type":"GlyphRenderer"},{"attributes":{},"id":"1489","type":"LinearScale"},{"attributes":{},"id":"1552","type":"Selection"},{"attributes":{"formatter":{"id":"1528"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"Bing","11":"gitter.im","12":"docs.microsoft.com","13":"opendatascience.com","14":"linkedin.com","15":"statics.teams.cdn.office.net","16":"pypi.org","17":"DuckDuckGo","18":"engineering.linkedin.com","19":"ai.googleblog.com","2":"fairlearn.org","20":"towardsdatascience.com","21":"aiforpeople.org","22":"venturebeat.com","23":"fairlearn.github.io","24":"anaconda.com","25":"t.co","26":"paperswithcode.com","27":"madewithml.com","28":"azure.microsoft.com","29":"medium.com","3":"mybuild.microsoft.com","30":"com.google.android.gm","31":"goodfirstissues.com","32":"mail.google.com","33":"infoworld.com","34":"up-for-grabs.net","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"classroom.udacity.com","8":"microsoft.com","9":"kdnuggets.com"},"major_label_policy":{"id":"1527"},"ticker":{"id":"1554"}},"id":"1491","type":"LinearAxis"},{"attributes":{},"id":"1499","type":"PanTool"},{"attributes":{},"id":"1527","type":"AllLabels"},{"attributes":{},"id":"1496","type":"BasicTicker"},{"attributes":{},"id":"1532","type":"Selection"},{"attributes":{},"id":"1551","type":"UnionRenderers"},{"attributes":{"fields":["unique"]},"id":"1515","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1539"}]},"id":"1553","type":"LegendItem"},{"attributes":{"axis":{"id":"1491"},"ticker":null},"id":"1494","type":"Grid"},{"attributes":{"data":{"duplicate":[71,41,16,18,9,6,6,5,4,4,8,9,2,10,8,6,5,4,5,4,2,7,1,1,2,2,6,4,1,2,5,2,5,1,0],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[151,71,61,36,40,25,22,16,14,14,9,6,12,2,4,5,5,6,5,6,8,3,9,8,7,7,3,5,7,6,2,5,1,5,5]},"selected":{"id":"1552"},"selection_policy":{"id":"1551"}},"id":"1535","type":"ColumnDataSource"},{"attributes":{"text":"Top referrers"},"id":"1481","type":"Title"},{"attributes":{"axis":{"id":"1495"},"dimension":1,"ticker":null},"id":"1498","type":"Grid"},{"attributes":{},"id":"1525","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1515"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1516"}},"x":{"field":"indices"}},"id":"1538","type":"VBar"},{"attributes":{"formatter":{"id":"1525"},"major_label_policy":{"id":"1524"},"ticker":{"id":"1496"}},"id":"1495","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1515"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1516"}},"x":{"field":"indices"}},"id":"1537","type":"VBar"},{"attributes":{"data_source":{"id":"1535"},"glyph":{"id":"1537"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1538"},"view":{"id":"1540"}},"id":"1539","type":"GlyphRenderer"},{"attributes":{},"id":"1524","type":"AllLabels"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1554","type":"FixedTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1505","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"1534"},{"id":"1553"}]},"id":"1533","type":"Legend"},{"attributes":{"source":{"id":"1535"}},"id":"1540","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"1499"},{"id":"1500"},{"id":"1501"},{"id":"1502"},{"id":"1503"},{"id":"1504"}]},"id":"1506","type":"Toolbar"}],"root_ids":["1480"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"5589c272-a3ae-44e0-961d-18c566d77039","root_ids":["1480"],"roots":{"1480":"e4fb4ae4-32e6-4e71-a936-deaa4c776eb3"}}];
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