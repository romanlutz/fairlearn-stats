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
    
      
      
    
      var element = document.getElementById("96fc7fc6-684c-4b21-8ccd-d0a978452881");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '96fc7fc6-684c-4b21-8ccd-d0a978452881' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4db4be69-39dd-47d5-b036-906bbc1d5bab":{"defs":[],"roots":{"references":[{"attributes":{"fields":["unique","duplicate"]},"id":"1466","type":"Stack"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1471"}]},"id":"1484","type":"LegendItem"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1489"}]},"id":"1503","type":"LegendItem"},{"attributes":{},"id":"1433","type":"DataRange1d"},{"attributes":{},"id":"1446","type":"BasicTicker"},{"attributes":{},"id":"1481","type":"Selection"},{"attributes":{"axis":{"id":"1445"},"dimension":1,"ticker":null},"id":"1448","type":"Grid"},{"attributes":{},"id":"1435","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1485"},"glyph":{"id":"1487"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1488"},"view":{"id":"1490"}},"id":"1489","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1474"},"major_label_policy":{"id":"1476"},"ticker":{"id":"1446"}},"id":"1445","type":"LinearAxis"},{"attributes":{"axis":{"id":"1441"},"ticker":null},"id":"1444","type":"Grid"},{"attributes":{},"id":"1476","type":"AllLabels"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1504","type":"FixedTicker"},{"attributes":{},"id":"1479","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1455","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1449"},{"id":"1450"},{"id":"1451"},{"id":"1452"},{"id":"1453"},{"id":"1454"}]},"id":"1456","type":"Toolbar"},{"attributes":{},"id":"1477","type":"BasicTickFormatter"},{"attributes":{},"id":"1449","type":"PanTool"},{"attributes":{},"id":"1482","type":"UnionRenderers"},{"attributes":{},"id":"1474","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1484"},{"id":"1503"}]},"id":"1483","type":"Legend"},{"attributes":{},"id":"1450","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1465"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1466"}},"x":{"field":"indices"}},"id":"1488","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1463"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1464"}},"x":{"field":"indices"}},"id":"1470","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1465","type":"Stack"},{"attributes":{"overlay":{"id":"1455"}},"id":"1451","type":"BoxZoomTool"},{"attributes":{},"id":"1439","type":"LinearScale"},{"attributes":{},"id":"1452","type":"SaveTool"},{"attributes":{"source":{"id":"1467"}},"id":"1472","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1465"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1466"}},"x":{"field":"indices"}},"id":"1487","type":"VBar"},{"attributes":{"data":{"duplicate":[566,129,150,4,18,12,9,28,18,6,8,6,4,11,4,13,5,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[302,253,139,60,36,42,40,16,16,25,20,22,23,15,22,11,16,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1501"},"selection_policy":{"id":"1502"}},"id":"1485","type":"ColumnDataSource"},{"attributes":{},"id":"1453","type":"ResetTool"},{"attributes":{"source":{"id":"1485"}},"id":"1490","type":"CDSView"},{"attributes":{"data_source":{"id":"1467"},"glyph":{"id":"1469"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1470"},"view":{"id":"1472"}},"id":"1471","type":"GlyphRenderer"},{"attributes":{},"id":"1502","type":"UnionRenderers"},{"attributes":{"fields":[]},"id":"1463","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1464","type":"Stack"},{"attributes":{},"id":"1437","type":"LinearScale"},{"attributes":{},"id":"1454","type":"HelpTool"},{"attributes":{"bottom":{"expr":{"id":"1463"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1464"}},"x":{"field":"indices"}},"id":"1469","type":"VBar"},{"attributes":{"below":[{"id":"1441"}],"center":[{"id":"1444"},{"id":"1448"},{"id":"1483"}],"left":[{"id":"1445"}],"renderers":[{"id":"1471"},{"id":"1489"}],"title":{"id":"1431"},"toolbar":{"id":"1456"},"width":900,"x_range":{"id":"1433"},"x_scale":{"id":"1437"},"y_range":{"id":"1435"},"y_scale":{"id":"1439"}},"id":"1430","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Top referrers"},"id":"1431","type":"Title"},{"attributes":{"data":{"duplicate":[566,129,150,4,18,12,9,28,18,6,8,6,4,11,4,13,5,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[302,253,139,60,36,42,40,16,16,25,20,22,23,15,22,11,16,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1481"},"selection_policy":{"id":"1482"}},"id":"1467","type":"ColumnDataSource"},{"attributes":{},"id":"1501","type":"Selection"},{"attributes":{"formatter":{"id":"1477"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"docs.microsoft.com","11":"event.on24.com","12":"kdnuggets.com","13":"opendatascience.com","14":"mail.google.com","15":"Bing","16":"classroom.udacity.com","17":"pypi.org","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"t.co","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"paperswithcode.com","6":"finance.yahoo.com","7":"statics.teams.cdn.office.net","8":"gitter.im","9":"sparkaisummit.com"},"major_label_policy":{"id":"1479"},"ticker":{"id":"1504"}},"id":"1441","type":"LinearAxis"}],"root_ids":["1430"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"4db4be69-39dd-47d5-b036-906bbc1d5bab","root_ids":["1430"],"roots":{"1430":"96fc7fc6-684c-4b21-8ccd-d0a978452881"}}];
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