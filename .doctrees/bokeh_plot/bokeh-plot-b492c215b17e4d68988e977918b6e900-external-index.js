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
    
      
      
    
      var element = document.getElementById("1f7ad99e-61b7-47df-9625-5938701dff7d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1f7ad99e-61b7-47df-9625-5938701dff7d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b26fc01f-e313-456a-babc-8c6fef512637":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1547"},"glyph":{"id":"1549"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1550"},"view":{"id":"1552"}},"id":"1551","type":"GlyphRenderer"},{"attributes":{"fields":["unique","duplicate"]},"id":"1546","type":"Stack"},{"attributes":{},"id":"1526","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1544","type":"Stack"},{"attributes":{"formatter":{"id":"1559"},"major_label_policy":{"id":"1557"},"ticker":{"id":"1526"}},"id":"1525","type":"LinearAxis"},{"attributes":{},"id":"1532","type":"SaveTool"},{"attributes":{},"id":"1534","type":"HelpTool"},{"attributes":{},"id":"1581","type":"Selection"},{"attributes":{"axis":{"id":"1521"},"ticker":null},"id":"1524","type":"Grid"},{"attributes":{"source":{"id":"1547"}},"id":"1552","type":"CDSView"},{"attributes":{"data":{"duplicate":[342,258,284,88,30,18,27,9,36,6,6,6,5,7,18,8,8,5,4,2,1,1,2,4,6,2,5,2,2,2,5,1,5,1,1,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"unique":[242,115,83,12,24,36,26,40,2,25,23,22,16,14,1,8,5,5,6,8,9,8,7,5,2,5,2,5,4,4,1,5,1,4,4,4,2,1]},"selected":{"id":"1561"},"selection_policy":{"id":"1560"}},"id":"1547","type":"ColumnDataSource"},{"attributes":{},"id":"1533","type":"ResetTool"},{"attributes":{"text":"Top referrers"},"id":"1511","type":"Title"},{"attributes":{},"id":"1530","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1543"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1544"}},"x":{"field":"indices"}},"id":"1550","type":"VBar"},{"attributes":{"axis":{"id":"1525"},"dimension":1,"ticker":null},"id":"1528","type":"Grid"},{"attributes":{"data":{"duplicate":[342,258,284,88,30,18,27,9,36,6,6,6,5,7,18,8,8,5,4,2,1,1,2,4,6,2,5,2,2,2,5,1,5,1,1,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"unique":[242,115,83,12,24,36,26,40,2,25,23,22,16,14,1,8,5,5,6,8,9,8,7,5,2,5,2,5,4,4,1,5,1,4,4,4,2,1]},"selected":{"id":"1581"},"selection_policy":{"id":"1580"}},"id":"1565","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1521"}],"center":[{"id":"1524"},{"id":"1528"},{"id":"1563"}],"left":[{"id":"1525"}],"renderers":[{"id":"1551"},{"id":"1569"}],"title":{"id":"1511"},"toolbar":{"id":"1536"},"width":900,"x_range":{"id":"1513"},"x_scale":{"id":"1517"},"y_range":{"id":"1515"},"y_scale":{"id":"1519"}},"id":"1510","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1543"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1544"}},"x":{"field":"indices"}},"id":"1549","type":"VBar"},{"attributes":{},"id":"1554","type":"AllLabels"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1569"}]},"id":"1583","type":"LegendItem"},{"attributes":{},"id":"1580","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1545"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1546"}},"x":{"field":"indices"}},"id":"1567","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]},"id":"1584","type":"FixedTicker"},{"attributes":{},"id":"1513","type":"DataRange1d"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1551"}]},"id":"1564","type":"LegendItem"},{"attributes":{"fields":["unique"]},"id":"1545","type":"Stack"},{"attributes":{},"id":"1561","type":"Selection"},{"attributes":{"data_source":{"id":"1565"},"glyph":{"id":"1567"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1568"},"view":{"id":"1570"}},"id":"1569","type":"GlyphRenderer"},{"attributes":{},"id":"1517","type":"LinearScale"},{"attributes":{},"id":"1515","type":"DataRange1d"},{"attributes":{},"id":"1559","type":"BasicTickFormatter"},{"attributes":{},"id":"1557","type":"AllLabels"},{"attributes":{},"id":"1560","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1556"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"t.co","11":"event.on24.com","12":"classroom.udacity.com","13":"linkedin.com","14":"mail.google.com","15":"kdnuggets.com","16":"microsoft.com","17":"engineering.linkedin.com","18":"ai.googleblog.com","19":"towardsdatascience.com","2":"github.com","20":"venturebeat.com","21":"fairlearn.github.io","22":"anaconda.com","23":"madewithml.com","24":"pypi.org","25":"DuckDuckGo","26":"com.google.android.gm","27":"goodfirstissues.com","28":"opendatascience.com","29":"medium.com","3":"paperswithcode.com","30":"gitter.im","31":"infoworld.com","32":"yuque.antfin-inc.com","33":"azure.microsoft.com","34":"aiforpeople.org","35":"up-for-grabs.net","36":"l.messenger.com","37":"kensciresearch.github.io","4":"docs.microsoft.com","5":"mybuild.microsoft.com","6":"Bing","7":"finance.yahoo.com","8":"statics.teams.cdn.office.net","9":"sparkaisummit.com"},"major_label_policy":{"id":"1554"},"ticker":{"id":"1584"}},"id":"1521","type":"LinearAxis"},{"attributes":{},"id":"1556","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1564"},{"id":"1583"}]},"id":"1563","type":"Legend"},{"attributes":{"overlay":{"id":"1535"}},"id":"1531","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1535","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1529"},{"id":"1530"},{"id":"1531"},{"id":"1532"},{"id":"1533"},{"id":"1534"}]},"id":"1536","type":"Toolbar"},{"attributes":{},"id":"1529","type":"PanTool"},{"attributes":{"fields":[]},"id":"1543","type":"Stack"},{"attributes":{},"id":"1519","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1545"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1546"}},"x":{"field":"indices"}},"id":"1568","type":"VBar"},{"attributes":{"source":{"id":"1565"}},"id":"1570","type":"CDSView"}],"root_ids":["1510"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b26fc01f-e313-456a-babc-8c6fef512637","root_ids":["1510"],"roots":{"1510":"1f7ad99e-61b7-47df-9625-5938701dff7d"}}];
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