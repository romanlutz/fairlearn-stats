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
    
      
      
    
      var element = document.getElementById("a0bcb4e1-389e-4ebc-97dd-747ebba31e12");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a0bcb4e1-389e-4ebc-97dd-747ebba31e12' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3d0c8377-a964-445b-949e-938d23bfa36f":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1552"},"glyph":{"id":"1554"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1555"},"view":{"id":"1557"}},"id":"1556","type":"GlyphRenderer"},{"attributes":{},"id":"1520","type":"DataRange1d"},{"attributes":{},"id":"1539","type":"HelpTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]},"id":"1589","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1549","type":"Stack"},{"attributes":{"axis":{"id":"1526"},"ticker":null},"id":"1529","type":"Grid"},{"attributes":{},"id":"1586","type":"UnionRenderers"},{"attributes":{},"id":"1524","type":"LinearScale"},{"attributes":{},"id":"1585","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"1548"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1549"}},"x":{"field":"indices"}},"id":"1555","type":"VBar"},{"attributes":{},"id":"1531","type":"BasicTicker"},{"attributes":{},"id":"1518","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1548"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1549"}},"x":{"field":"indices"}},"id":"1554","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1551","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1550","type":"Stack"},{"attributes":{"active_multi":null,"tools":[{"id":"1534"},{"id":"1535"},{"id":"1536"},{"id":"1537"},{"id":"1538"},{"id":"1539"}]},"id":"1541","type":"Toolbar"},{"attributes":{"data":{"duplicate":[361,234,219,42,53,18,9,36,17,6,6,5,7,18,9,5,6,7,5,4,2,1,1,2,4,2,5,2,2,2,5,1,5,1,1,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"unique":[222,111,75,26,9,36,40,2,16,25,22,16,13,1,9,12,10,7,5,6,8,9,8,7,5,5,2,5,4,4,1,5,1,4,4,4,2,1]},"selected":{"id":"1565"},"selection_policy":{"id":"1566"}},"id":"1552","type":"ColumnDataSource"},{"attributes":{"data":{"duplicate":[361,234,219,42,53,18,9,36,17,6,6,5,7,18,9,5,6,7,5,4,2,1,1,2,4,2,5,2,2,2,5,1,5,1,1,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"unique":[222,111,75,26,9,36,40,2,16,25,22,16,13,1,9,12,10,7,5,6,8,9,8,7,5,5,2,5,4,4,1,5,1,4,4,4,2,1]},"selected":{"id":"1585"},"selection_policy":{"id":"1586"}},"id":"1570","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"1548","type":"Stack"},{"attributes":{"data_source":{"id":"1570"},"glyph":{"id":"1572"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1573"},"view":{"id":"1575"}},"id":"1574","type":"GlyphRenderer"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1556"}]},"id":"1569","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1540","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1526"}],"center":[{"id":"1529"},{"id":"1533"},{"id":"1568"}],"left":[{"id":"1530"}],"renderers":[{"id":"1556"},{"id":"1574"}],"title":{"id":"1516"},"toolbar":{"id":"1541"},"width":900,"x_range":{"id":"1518"},"x_scale":{"id":"1522"},"y_range":{"id":"1520"},"y_scale":{"id":"1524"}},"id":"1515","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1570"}},"id":"1575","type":"CDSView"},{"attributes":{"axis":{"id":"1530"},"dimension":1,"ticker":null},"id":"1533","type":"Grid"},{"attributes":{},"id":"1522","type":"LinearScale"},{"attributes":{},"id":"1566","type":"UnionRenderers"},{"attributes":{},"id":"1535","type":"WheelZoomTool"},{"attributes":{},"id":"1534","type":"PanTool"},{"attributes":{},"id":"1565","type":"Selection"},{"attributes":{"formatter":{"id":"1562"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"event.on24.com","11":"classroom.udacity.com","12":"linkedin.com","13":"mail.google.com","14":"t.co","15":"pypi.org","16":"kdnuggets.com","17":"microsoft.com","18":"engineering.linkedin.com","19":"ai.googleblog.com","2":"github.com","20":"towardsdatascience.com","21":"venturebeat.com","22":"fairlearn.github.io","23":"anaconda.com","24":"madewithml.com","25":"DuckDuckGo","26":"com.google.android.gm","27":"goodfirstissues.com","28":"opendatascience.com","29":"medium.com","3":"docs.microsoft.com","30":"gitter.im","31":"infoworld.com","32":"yuque.antfin-inc.com","33":"azure.microsoft.com","34":"aiforpeople.org","35":"up-for-grabs.net","36":"l.messenger.com","37":"kensciresearch.github.io","4":"paperswithcode.com","5":"mybuild.microsoft.com","6":"finance.yahoo.com","7":"statics.teams.cdn.office.net","8":"Bing","9":"sparkaisummit.com"},"major_label_policy":{"id":"1564"},"ticker":{"id":"1589"}},"id":"1526","type":"LinearAxis"},{"attributes":{},"id":"1564","type":"AllLabels"},{"attributes":{"text":"Top referrers"},"id":"1516","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1550"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1551"}},"x":{"field":"indices"}},"id":"1572","type":"VBar"},{"attributes":{},"id":"1537","type":"SaveTool"},{"attributes":{"formatter":{"id":"1559"},"major_label_policy":{"id":"1561"},"ticker":{"id":"1531"}},"id":"1530","type":"LinearAxis"},{"attributes":{},"id":"1561","type":"AllLabels"},{"attributes":{},"id":"1559","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1540"}},"id":"1536","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"1569"},{"id":"1588"}]},"id":"1568","type":"Legend"},{"attributes":{},"id":"1538","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1550"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1551"}},"x":{"field":"indices"}},"id":"1573","type":"VBar"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1574"}]},"id":"1588","type":"LegendItem"},{"attributes":{},"id":"1562","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1552"}},"id":"1557","type":"CDSView"}],"root_ids":["1515"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"3d0c8377-a964-445b-949e-938d23bfa36f","root_ids":["1515"],"roots":{"1515":"a0bcb4e1-389e-4ebc-97dd-747ebba31e12"}}];
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