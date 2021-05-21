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
    
      
      
    
      var element = document.getElementById("c087830b-89ec-4540-a80e-45c671c89356");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c087830b-89ec-4540-a80e-45c671c89356' but no matching script tag was found.")
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
                    
                  var docs_json = '{"cb56fc85-2c7c-4972-9245-38d2f9c3e46b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1415","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1443"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1444"}},"x":{"field":"indices"}},"id":"1450","type":"VBar"},{"attributes":{},"id":"1460","type":"UnionRenderers"},{"attributes":{},"id":"1461","type":"Selection"},{"attributes":{},"id":"1458","type":"AllLabels"},{"attributes":{},"id":"1457","type":"BasicTickFormatter"},{"attributes":{"fields":["unique","duplicate"]},"id":"1446","type":"Stack"},{"attributes":{},"id":"1481","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1435","type":"BoxAnnotation"},{"attributes":{},"id":"1429","type":"PanTool"},{"attributes":{},"id":"1455","type":"AllLabels"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1469"}]},"id":"1483","type":"LegendItem"},{"attributes":{},"id":"1430","type":"WheelZoomTool"},{"attributes":{},"id":"1454","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1464"},{"id":"1483"}]},"id":"1463","type":"Legend"},{"attributes":{"overlay":{"id":"1435"}},"id":"1431","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1444","type":"Stack"},{"attributes":{"data_source":{"id":"1447"},"glyph":{"id":"1449"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1450"},"view":{"id":"1452"}},"id":"1451","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1465"},"glyph":{"id":"1467"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1468"},"view":{"id":"1470"}},"id":"1469","type":"GlyphRenderer"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1451"}]},"id":"1464","type":"LegendItem"},{"attributes":{},"id":"1432","type":"SaveTool"},{"attributes":{},"id":"1417","type":"LinearScale"},{"attributes":{"source":{"id":"1447"}},"id":"1452","type":"CDSView"},{"attributes":{},"id":"1433","type":"ResetTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1484","type":"FixedTicker"},{"attributes":{"fields":[]},"id":"1443","type":"Stack"},{"attributes":{},"id":"1413","type":"DataRange1d"},{"attributes":{},"id":"1434","type":"HelpTool"},{"attributes":{},"id":"1419","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1429"},{"id":"1430"},{"id":"1431"},{"id":"1432"},{"id":"1433"},{"id":"1434"}]},"id":"1436","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1445"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1446"}},"x":{"field":"indices"}},"id":"1468","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1443"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1444"}},"x":{"field":"indices"}},"id":"1449","type":"VBar"},{"attributes":{},"id":"1480","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1421"}],"center":[{"id":"1424"},{"id":"1428"},{"id":"1463"}],"left":[{"id":"1425"}],"renderers":[{"id":"1451"},{"id":"1469"}],"title":{"id":"1411"},"toolbar":{"id":"1436"},"width":900,"x_range":{"id":"1413"},"x_scale":{"id":"1417"},"y_range":{"id":"1415"},"y_scale":{"id":"1419"}},"id":"1410","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1457"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"event.on24.com","11":"opendatascience.com","12":"mail.google.com","13":"classroom.udacity.com","14":"pypi.org","15":"Bing","16":"kdnuggets.com","17":"paperswithcode.com","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"t.co","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"statics.teams.cdn.office.net","7":"docs.microsoft.com","8":"sparkaisummit.com","9":"gitter.im"},"major_label_policy":{"id":"1458"},"ticker":{"id":"1484"}},"id":"1421","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[371,100,111,3,18,9,17,10,6,18,6,11,4,5,5,4,4,4,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[224,240,131,64,36,40,18,22,25,11,22,15,22,16,12,11,11,10,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1461"},"selection_policy":{"id":"1460"}},"id":"1447","type":"ColumnDataSource"},{"attributes":{},"id":"1426","type":"BasicTicker"},{"attributes":{"source":{"id":"1465"}},"id":"1470","type":"CDSView"},{"attributes":{"axis":{"id":"1421"},"ticker":null},"id":"1424","type":"Grid"},{"attributes":{"fields":["unique"]},"id":"1445","type":"Stack"},{"attributes":{"axis":{"id":"1425"},"dimension":1,"ticker":null},"id":"1428","type":"Grid"},{"attributes":{"formatter":{"id":"1454"},"major_label_policy":{"id":"1455"},"ticker":{"id":"1426"}},"id":"1425","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1445"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1446"}},"x":{"field":"indices"}},"id":"1467","type":"VBar"},{"attributes":{"data":{"duplicate":[371,100,111,3,18,9,17,10,6,18,6,11,4,5,5,4,4,4,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[224,240,131,64,36,40,18,22,25,11,22,15,22,16,12,11,11,10,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1481"},"selection_policy":{"id":"1480"}},"id":"1465","type":"ColumnDataSource"},{"attributes":{"text":"Top referrers"},"id":"1411","type":"Title"}],"root_ids":["1410"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"cb56fc85-2c7c-4972-9245-38d2f9c3e46b","root_ids":["1410"],"roots":{"1410":"c087830b-89ec-4540-a80e-45c671c89356"}}];
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