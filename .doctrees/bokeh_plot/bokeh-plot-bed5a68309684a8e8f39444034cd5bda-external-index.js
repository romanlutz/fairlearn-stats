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
    
      
      
    
      var element = document.getElementById("4b878c85-ad7e-4ede-bcf4-d596b16d14c8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4b878c85-ad7e-4ede-bcf4-d596b16d14c8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"07bb17d7-2449-4d03-b9b8-dd959cfacf46":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1455"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1456"}},"x":{"field":"indices"}},"id":"1477","type":"VBar"},{"attributes":{"data":{"duplicate":[525,102,145,4,18,13,9,30,19,6,8,6,11,4,14,5,3,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[294,242,136,64,36,39,40,16,15,25,21,22,15,22,10,16,18,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1471"},"selection_policy":{"id":"1470"}},"id":"1457","type":"ColumnDataSource"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1461"}]},"id":"1474","type":"LegendItem"},{"attributes":{},"id":"1471","type":"Selection"},{"attributes":{"items":[{"id":"1474"},{"id":"1493"}]},"id":"1473","type":"Legend"},{"attributes":{},"id":"1470","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1421","type":"Title"},{"attributes":{"fields":["unique","duplicate"]},"id":"1456","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1445","type":"BoxAnnotation"},{"attributes":{},"id":"1467","type":"AllLabels"},{"attributes":{},"id":"1439","type":"PanTool"},{"attributes":{"data_source":{"id":"1475"},"glyph":{"id":"1477"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1478"},"view":{"id":"1480"}},"id":"1479","type":"GlyphRenderer"},{"attributes":{},"id":"1468","type":"BasicTickFormatter"},{"attributes":{},"id":"1491","type":"Selection"},{"attributes":{},"id":"1440","type":"WheelZoomTool"},{"attributes":{},"id":"1490","type":"UnionRenderers"},{"attributes":{},"id":"1465","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1445"}},"id":"1441","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1454","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1479"}]},"id":"1493","type":"LegendItem"},{"attributes":{},"id":"1442","type":"SaveTool"},{"attributes":{},"id":"1425","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1494","type":"FixedTicker"},{"attributes":{},"id":"1464","type":"AllLabels"},{"attributes":{},"id":"1427","type":"LinearScale"},{"attributes":{},"id":"1443","type":"ResetTool"},{"attributes":{"data_source":{"id":"1457"},"glyph":{"id":"1459"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1460"},"view":{"id":"1462"}},"id":"1461","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"1453","type":"Stack"},{"attributes":{},"id":"1423","type":"DataRange1d"},{"attributes":{"data":{"duplicate":[525,102,145,4,18,13,9,30,19,6,8,6,11,4,14,5,3,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[294,242,136,64,36,39,40,16,15,25,21,22,15,22,10,16,18,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1491"},"selection_policy":{"id":"1490"}},"id":"1475","type":"ColumnDataSource"},{"attributes":{},"id":"1444","type":"HelpTool"},{"attributes":{"source":{"id":"1457"}},"id":"1462","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1453"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1454"}},"x":{"field":"indices"}},"id":"1460","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"1439"},{"id":"1440"},{"id":"1441"},{"id":"1442"},{"id":"1443"},{"id":"1444"}]},"id":"1446","type":"Toolbar"},{"attributes":{},"id":"1429","type":"LinearScale"},{"attributes":{"source":{"id":"1475"}},"id":"1480","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1453"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1454"}},"x":{"field":"indices"}},"id":"1459","type":"VBar"},{"attributes":{"formatter":{"id":"1465"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"docs.microsoft.com","11":"event.on24.com","12":"opendatascience.com","13":"mail.google.com","14":"Bing","15":"classroom.udacity.com","16":"kdnuggets.com","17":"pypi.org","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"t.co","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"paperswithcode.com","6":"finance.yahoo.com","7":"statics.teams.cdn.office.net","8":"gitter.im","9":"sparkaisummit.com"},"major_label_policy":{"id":"1464"},"ticker":{"id":"1494"}},"id":"1431","type":"LinearAxis"},{"attributes":{},"id":"1436","type":"BasicTicker"},{"attributes":{"axis":{"id":"1431"},"ticker":null},"id":"1434","type":"Grid"},{"attributes":{"fields":["unique"]},"id":"1455","type":"Stack"},{"attributes":{"axis":{"id":"1435"},"dimension":1,"ticker":null},"id":"1438","type":"Grid"},{"attributes":{"formatter":{"id":"1468"},"major_label_policy":{"id":"1467"},"ticker":{"id":"1436"}},"id":"1435","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1455"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1456"}},"x":{"field":"indices"}},"id":"1478","type":"VBar"},{"attributes":{"below":[{"id":"1431"}],"center":[{"id":"1434"},{"id":"1438"},{"id":"1473"}],"left":[{"id":"1435"}],"renderers":[{"id":"1461"},{"id":"1479"}],"title":{"id":"1421"},"toolbar":{"id":"1446"},"width":900,"x_range":{"id":"1423"},"x_scale":{"id":"1427"},"y_range":{"id":"1425"},"y_scale":{"id":"1429"}},"id":"1420","subtype":"Figure","type":"Plot"}],"root_ids":["1420"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"07bb17d7-2449-4d03-b9b8-dd959cfacf46","root_ids":["1420"],"roots":{"1420":"4b878c85-ad7e-4ede-bcf4-d596b16d14c8"}}];
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