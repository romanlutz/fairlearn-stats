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
    
      
      
    
      var element = document.getElementById("15e4fd40-266a-46de-be00-ec73b3c4ce17");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '15e4fd40-266a-46de-be00-ec73b3c4ce17' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0644e8a4-23de-49c1-b9b3-256082825eff":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1560"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1561"}},"x":{"field":"indices"}},"id":"1582","type":"VBar"},{"attributes":{},"id":"1544","type":"PanTool"},{"attributes":{"fields":[]},"id":"1558","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1526","type":"Title"},{"attributes":{},"id":"1545","type":"WheelZoomTool"},{"attributes":{},"id":"1576","type":"Selection"},{"attributes":{},"id":"1528","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1550"}},"id":"1546","type":"BoxZoomTool"},{"attributes":{},"id":"1575","type":"UnionRenderers"},{"attributes":{},"id":"1532","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1550","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[198,182,169,18,9,23,36,6,6,17,13,5,18,18,3,10,13,13,7,11,9,3,11,9,4,6,5,4,1,2,1,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[170,107,54,36,40,22,2,25,22,8,9,16,1,1,15,8,4,4,9,3,4,10,1,2,7,4,5,6,9,8,8,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1596"},"selection_policy":{"id":"1595"}},"id":"1580","type":"ColumnDataSource"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1566"}]},"id":"1579","type":"LegendItem"},{"attributes":{},"id":"1547","type":"SaveTool"},{"attributes":{},"id":"1573","type":"AllLabels"},{"attributes":{"source":{"id":"1580"}},"id":"1585","type":"CDSView"},{"attributes":{},"id":"1548","type":"ResetTool"},{"attributes":{},"id":"1572","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1560","type":"Stack"},{"attributes":{},"id":"1596","type":"Selection"},{"attributes":{},"id":"1570","type":"AllLabels"},{"attributes":{},"id":"1530","type":"DataRange1d"},{"attributes":{},"id":"1549","type":"HelpTool"},{"attributes":{"items":[{"id":"1579"},{"id":"1598"}]},"id":"1578","type":"Legend"},{"attributes":{"active_multi":null,"tools":[{"id":"1544"},{"id":"1545"},{"id":"1546"},{"id":"1547"},{"id":"1548"},{"id":"1549"}]},"id":"1551","type":"Toolbar"},{"attributes":{},"id":"1534","type":"LinearScale"},{"attributes":{"formatter":{"id":"1569"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"paperswithcode.com","11":"classroom.udacity.com","12":"mail.google.com","13":"teams.microsoft.com","14":"towardsdatascience.com","15":"notebooks.githubusercontent.com","16":"up-for-grabs.net","17":"staticsint.teams.cdn.office.net","18":"microsoft.com","19":"fizzylogic.nl","2":"github.com","20":"medium.com","21":"out.reddit.com","22":"kkb-production.jupyter-proxy.kaggle.net","23":"opendatascience.com","24":"pypi.org","25":"DuckDuckGo","26":"engineering.linkedin.com","27":"ai.googleblog.com","28":"venturebeat.com","29":"reddit.com","3":"mybuild.microsoft.com","30":"fairlearn.github.io","31":"anaconda.com","32":"t.co","33":"madewithml.com","34":"kdnuggets.com","35":"techairesearch.com","36":"datacamp.com","37":"com.google.android.gm","38":"goodfirstissues.com","39":"coursera.org","4":"finance.yahoo.com","40":"gitter.im","41":"linkedin.com","42":"infoworld.com","43":"yuque.antfin-inc.com","44":"azure.microsoft.com","45":"aiforpeople.org","46":"l.messenger.com","47":"kensciresearch.github.io","5":"docs.microsoft.com","6":"statics.teams.cdn.office.net","7":"sparkaisummit.com","8":"event.on24.com","9":"Bing"},"major_label_policy":{"id":"1570"},"ticker":{"id":"1599"}},"id":"1536","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1558"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1559"}},"x":{"field":"indices"}},"id":"1565","type":"VBar"},{"attributes":{},"id":"1541","type":"BasicTicker"},{"attributes":{"source":{"id":"1562"}},"id":"1567","type":"CDSView"},{"attributes":{"data_source":{"id":"1562"},"glyph":{"id":"1564"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1565"},"view":{"id":"1567"}},"id":"1566","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1536"},"ticker":null},"id":"1539","type":"Grid"},{"attributes":{},"id":"1569","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]},"id":"1599","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1559","type":"Stack"},{"attributes":{"axis":{"id":"1540"},"dimension":1,"ticker":null},"id":"1543","type":"Grid"},{"attributes":{"data":{"duplicate":[198,182,169,18,9,23,36,6,6,17,13,5,18,18,3,10,13,13,7,11,9,3,11,9,4,6,5,4,1,2,1,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[170,107,54,36,40,22,2,25,22,8,9,16,1,1,15,8,4,4,9,3,4,10,1,2,7,4,5,6,9,8,8,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1576"},"selection_policy":{"id":"1575"}},"id":"1562","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1572"},"major_label_policy":{"id":"1573"},"ticker":{"id":"1541"}},"id":"1540","type":"LinearAxis"},{"attributes":{},"id":"1595","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1558"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1559"}},"x":{"field":"indices"}},"id":"1564","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1560"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1561"}},"x":{"field":"indices"}},"id":"1583","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1561","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1584"}]},"id":"1598","type":"LegendItem"},{"attributes":{"data_source":{"id":"1580"},"glyph":{"id":"1582"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1583"},"view":{"id":"1585"}},"id":"1584","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1536"}],"center":[{"id":"1539"},{"id":"1543"},{"id":"1578"}],"left":[{"id":"1540"}],"renderers":[{"id":"1566"},{"id":"1584"}],"title":{"id":"1526"},"toolbar":{"id":"1551"},"width":900,"x_range":{"id":"1528"},"x_scale":{"id":"1532"},"y_range":{"id":"1530"},"y_scale":{"id":"1534"}},"id":"1525","subtype":"Figure","type":"Plot"}],"root_ids":["1525"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"0644e8a4-23de-49c1-b9b3-256082825eff","root_ids":["1525"],"roots":{"1525":"15e4fd40-266a-46de-be00-ec73b3c4ce17"}}];
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