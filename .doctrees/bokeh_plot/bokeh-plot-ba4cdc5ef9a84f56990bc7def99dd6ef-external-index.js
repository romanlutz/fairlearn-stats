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
    
      
      
    
      var element = document.getElementById("7773ad76-cbbd-4a39-aa7f-5e1551870d96");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7773ad76-cbbd-4a39-aa7f-5e1551870d96' but no matching script tag was found.")
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
                    
                  var docs_json = '{"71f46c7a-7131-4fd8-921f-d9e2d718235f":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1416"},"ticker":null},"id":"1419","type":"Grid"},{"attributes":{"source":{"id":"1460"}},"id":"1465","type":"CDSView"},{"attributes":{"axis":{"id":"1420"},"dimension":1,"ticker":null},"id":"1423","type":"Grid"},{"attributes":{},"id":"1454","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1454"},"major_label_policy":{"id":"1453"},"ticker":{"id":"1421"}},"id":"1420","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1440"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1441"}},"x":{"field":"indices"}},"id":"1463","type":"VBar"},{"attributes":{},"id":"1453","type":"AllLabels"},{"attributes":{"data":{"duplicate":[97,182,106,1,18,9,22,6,6,6,11,4,17,5,5,3,3,7,5,3,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[251,80,115,59,36,40,16,25,22,20,15,22,8,16,11,11,10,6,8,9,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1475"},"selection_policy":{"id":"1476"}},"id":"1460","type":"ColumnDataSource"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1446"}]},"id":"1459","type":"LegendItem"},{"attributes":{"fields":[]},"id":"1438","type":"Stack"},{"attributes":{"data_source":{"id":"1442"},"glyph":{"id":"1444"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1445"},"view":{"id":"1447"}},"id":"1446","type":"GlyphRenderer"},{"attributes":{"fields":["unique","duplicate"]},"id":"1441","type":"Stack"},{"attributes":{},"id":"1456","type":"UnionRenderers"},{"attributes":{},"id":"1475","type":"Selection"},{"attributes":{"below":[{"id":"1416"}],"center":[{"id":"1419"},{"id":"1423"},{"id":"1458"}],"left":[{"id":"1420"}],"renderers":[{"id":"1446"},{"id":"1464"}],"title":{"id":"1406"},"toolbar":{"id":"1431"},"width":900,"x_range":{"id":"1408"},"x_scale":{"id":"1412"},"y_range":{"id":"1410"},"y_scale":{"id":"1414"}},"id":"1405","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1440"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1441"}},"x":{"field":"indices"}},"id":"1462","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1430","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1460"},"glyph":{"id":"1462"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1463"},"view":{"id":"1465"}},"id":"1464","type":"GlyphRenderer"},{"attributes":{},"id":"1424","type":"PanTool"},{"attributes":{"text":"Top referrers"},"id":"1406","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1438"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1439"}},"x":{"field":"indices"}},"id":"1444","type":"VBar"},{"attributes":{"data":{"duplicate":[97,182,106,1,18,9,22,6,6,6,11,4,17,5,5,3,3,7,5,3,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[251,80,115,59,36,40,16,25,22,20,15,22,8,16,11,11,10,6,8,9,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1455"},"selection_policy":{"id":"1456"}},"id":"1442","type":"ColumnDataSource"},{"attributes":{},"id":"1425","type":"WheelZoomTool"},{"attributes":{},"id":"1455","type":"Selection"},{"attributes":{"items":[{"id":"1459"},{"id":"1478"}]},"id":"1458","type":"Legend"},{"attributes":{"overlay":{"id":"1430"}},"id":"1426","type":"BoxZoomTool"},{"attributes":{},"id":"1408","type":"DataRange1d"},{"attributes":{},"id":"1451","type":"BasicTickFormatter"},{"attributes":{},"id":"1427","type":"SaveTool"},{"attributes":{},"id":"1450","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1439","type":"Stack"},{"attributes":{},"id":"1410","type":"DataRange1d"},{"attributes":{"source":{"id":"1442"}},"id":"1447","type":"CDSView"},{"attributes":{},"id":"1412","type":"LinearScale"},{"attributes":{},"id":"1428","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1438"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1439"}},"x":{"field":"indices"}},"id":"1445","type":"VBar"},{"attributes":{},"id":"1429","type":"HelpTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1479","type":"FixedTicker"},{"attributes":{},"id":"1476","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"1424"},{"id":"1425"},{"id":"1426"},{"id":"1427"},{"id":"1428"},{"id":"1429"}]},"id":"1431","type":"Toolbar"},{"attributes":{},"id":"1414","type":"LinearScale"},{"attributes":{"formatter":{"id":"1451"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"opendatascience.com","11":"mail.google.com","12":"gitter.im","13":"classroom.udacity.com","14":"paperswithcode.com","15":"pypi.org","16":"Bing","17":"DuckDuckGo","18":"up-for-grabs.net","19":"kdnuggets.com","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"t.co","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"statics.teams.cdn.office.net","7":"sparkaisummit.com","8":"event.on24.com","9":"docs.microsoft.com"},"major_label_policy":{"id":"1450"},"ticker":{"id":"1479"}},"id":"1416","type":"LinearAxis"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1464"}]},"id":"1478","type":"LegendItem"},{"attributes":{},"id":"1421","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1440","type":"Stack"}],"root_ids":["1405"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"71f46c7a-7131-4fd8-921f-d9e2d718235f","root_ids":["1405"],"roots":{"1405":"7773ad76-cbbd-4a39-aa7f-5e1551870d96"}}];
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