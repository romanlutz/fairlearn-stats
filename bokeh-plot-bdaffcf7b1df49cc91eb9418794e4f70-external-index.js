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
    
      
      
    
      var element = document.getElementById("59fc2310-2577-4365-930e-a165c145832f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '59fc2310-2577-4365-930e-a165c145832f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"11c4717b-3648-4ffa-aafd-0e34af49c3fc":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1484","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1469","type":"Stack"},{"attributes":{},"id":"1454","type":"PanTool"},{"attributes":{},"id":"1483","type":"BasicTickFormatter"},{"attributes":{},"id":"1455","type":"WheelZoomTool"},{"attributes":{},"id":"1481","type":"AllLabels"},{"attributes":{},"id":"1480","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1460"}},"id":"1456","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"1489"},{"id":"1508"}]},"id":"1488","type":"Legend"},{"attributes":{"fields":[]},"id":"1468","type":"Stack"},{"attributes":{},"id":"1457","type":"SaveTool"},{"attributes":{"bottom":{"expr":{"id":"1468"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1469"}},"x":{"field":"indices"}},"id":"1475","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1471","type":"Stack"},{"attributes":{},"id":"1442","type":"LinearScale"},{"attributes":{},"id":"1458","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1468"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1469"}},"x":{"field":"indices"}},"id":"1474","type":"VBar"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1494"}]},"id":"1508","type":"LegendItem"},{"attributes":{"fields":["unique"]},"id":"1470","type":"Stack"},{"attributes":{},"id":"1438","type":"DataRange1d"},{"attributes":{},"id":"1459","type":"HelpTool"},{"attributes":{"bottom":{"expr":{"id":"1470"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1471"}},"x":{"field":"indices"}},"id":"1493","type":"VBar"},{"attributes":{},"id":"1444","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1454"},{"id":"1455"},{"id":"1456"},{"id":"1457"},{"id":"1458"},{"id":"1459"}]},"id":"1461","type":"Toolbar"},{"attributes":{"data":{"duplicate":[247,137,103,18,12,9,6,6,11,4,8,3,5,8,12,8,7,4,4,7,5,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[109,206,120,36,40,40,25,22,15,22,16,20,16,12,7,11,11,11,11,6,8,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1487"},"selection_policy":{"id":"1486"}},"id":"1472","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1472"},"glyph":{"id":"1474"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1475"},"view":{"id":"1477"}},"id":"1476","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1490"},"glyph":{"id":"1492"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1493"},"view":{"id":"1495"}},"id":"1494","type":"GlyphRenderer"},{"attributes":{},"id":"1507","type":"Selection"},{"attributes":{"formatter":{"id":"1483"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"docs.microsoft.com","11":"kdnuggets.com","12":"classroom.udacity.com","13":"gitter.im","14":"Bing","15":"statics.teams.cdn.office.net","16":"linkedin.com","17":"pypi.org","18":"t.co","19":"DuckDuckGo","2":"fairlearn.org","20":"up-for-grabs.net","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"paperswithcode.com","5":"finance.yahoo.com","6":"sparkaisummit.com","7":"event.on24.com","8":"opendatascience.com","9":"mail.google.com"},"major_label_policy":{"id":"1484"},"ticker":{"id":"1509"}},"id":"1446","type":"LinearAxis"},{"attributes":{"source":{"id":"1472"}},"id":"1477","type":"CDSView"},{"attributes":{"below":[{"id":"1446"}],"center":[{"id":"1449"},{"id":"1453"},{"id":"1488"}],"left":[{"id":"1450"}],"renderers":[{"id":"1476"},{"id":"1494"}],"title":{"id":"1436"},"toolbar":{"id":"1461"},"width":900,"x_range":{"id":"1438"},"x_scale":{"id":"1442"},"y_range":{"id":"1440"},"y_scale":{"id":"1444"}},"id":"1435","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1451","type":"BasicTicker"},{"attributes":{"axis":{"id":"1446"},"ticker":null},"id":"1449","type":"Grid"},{"attributes":{"axis":{"id":"1450"},"dimension":1,"ticker":null},"id":"1453","type":"Grid"},{"attributes":{},"id":"1506","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1480"},"major_label_policy":{"id":"1481"},"ticker":{"id":"1451"}},"id":"1450","type":"LinearAxis"},{"attributes":{"text":"Top referrers"},"id":"1436","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1470"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1471"}},"x":{"field":"indices"}},"id":"1492","type":"VBar"},{"attributes":{"source":{"id":"1490"}},"id":"1495","type":"CDSView"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1476"}]},"id":"1489","type":"LegendItem"},{"attributes":{},"id":"1440","type":"DataRange1d"},{"attributes":{"data":{"duplicate":[247,137,103,18,12,9,6,6,11,4,8,3,5,8,12,8,7,4,4,7,5,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[109,206,120,36,40,40,25,22,15,22,16,20,16,12,7,11,11,11,11,6,8,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1507"},"selection_policy":{"id":"1506"}},"id":"1490","type":"ColumnDataSource"},{"attributes":{},"id":"1487","type":"Selection"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1509","type":"FixedTicker"},{"attributes":{},"id":"1486","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1460","type":"BoxAnnotation"}],"root_ids":["1435"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"11c4717b-3648-4ffa-aafd-0e34af49c3fc","root_ids":["1435"],"roots":{"1435":"59fc2310-2577-4365-930e-a165c145832f"}}];
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