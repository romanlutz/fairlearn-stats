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
    
      
      
    
      var element = document.getElementById("6da15500-a087-455b-af8a-87e9d457ef6a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6da15500-a087-455b-af8a-87e9d457ef6a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9a8c772b-f2d4-4733-bfe6-ea42917def09":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1805"},"glyph":{"id":"1807"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1808"},"view":{"id":"1810"}},"id":"1809","type":"GlyphRenderer"},{"attributes":{},"id":"1757","type":"LinearScale"},{"attributes":{},"id":"1770","type":"WheelZoomTool"},{"attributes":{},"id":"1769","type":"PanTool"},{"attributes":{},"id":"1821","type":"Selection"},{"attributes":{"text":"Views traffic"},"id":"1751","type":"Title"},{"attributes":{"items":[{"id":"1804"},{"id":"1823"}]},"id":"1803","type":"Legend"},{"attributes":{"overlay":{"id":"1775"}},"id":"1771","type":"BoxZoomTool"},{"attributes":{},"id":"1797","type":"AllLabels"},{"attributes":{},"id":"1820","type":"UnionRenderers"},{"attributes":{"data":{"duplicate":[196,791,25,401,374,189,69,134,559,335,380,382,176,127,432,529,495,536,304,207,92,627,372,310,436,311,85,115,409,685,631,635,777,131,101,828,498,260,386,265,123,46,289,249,175,354,265,9,41,270,361,217,198,251,139,113,130,125,131,243,527,60,179,404,400,392,320,187,36,36,488,231,401,225,239,90,105,389,348,403,236,335,40,67,135,244,213,435,412,126,140,292,165,307,208,167,47,42,122,187,137,228,85,22,34,159,188,213,155,73,14,35,87,189,134,106,55,27,20,172,87,215,218,87,37,39,185,156,147,123,117,17,47,97,211,200,161,128,38,38,109,177,145,264,122,19,63,52,238,156,96,204,46,23,138,216,118,153,146,96,226,338,142,248,266,391,125,131,319,457,273,295,224,123,173,332,321,452,196,315,120,132,287,240,163,264,154,44,69,183,161,111,110,220,18,22,108,173,193,130,183,60,37,137,84,198,193,322,62,33,166,287,131,194,177,33,59,300,207,76,37,13,19,11,80,0,51,115,100,2,34,264,227,194,249,184,68,28,144,134,101,166,121,45,29,171,219,138,105,114,30,47,106,88,146,318,103,56,62,232,143,218,209,191,119,86,170,345,238,206,121,31,12,134,141,125,166,279,140,48,140,135,115,125,53,19,44,183,164,263,263,175,39,51,171,198,141,245,167,30,49,160,141,170,159,107,111,98,175,300,374,220,577,17,58,104,105,253,194,147,113,117,161,245,190,402,261,108,72,279,352,417,362,327,94,59,253,116,231,400,157,117,67,233,111,376,274,86,100,134,296,241,351,502,680,107,57,373,203,248,169,233,154,483,946,819,702,679,576,268,241,471,506,298,466,377,115,270,181,484,624,345,250,81,91,346,349,635,255,286,114,54,150,150,195,184,181,238,225,192,402,380,490,201,99,144,249,217,164,224,227,44,39,173,168,306,425,348,86,203,230,312,468,271,330,144,61,255,341,205,365,159,88,178,278,214,154,328,297,63,108,155,148,283,390,427,67,26,219,237,178,318,160,45,57,158,106,33,82,136,20,95,221,99,92,208,166,12,19,84,285,199,164,15,52,85,285,444,347,268,234,76,37,210,403,150,293,108,6,29,206,243,184,366,214,7,74,135,215,211,357,305,62,27,146,128,193,230,97,77,12,198,127,189,212,111,25,62,97,210,582,1230,487,214,127,836,339,180,157,110,35,44,96,178,159,143],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535],"unique":[60,299,10,157,106,53,47,95,116,94,110,78,32,47,68,91,101,84,94,37,41,102,72,91,78,79,35,34,85,124,101,86,78,36,35,120,83,155,190,130,45,30,76,87,84,133,81,23,28,78,65,87,86,62,48,29,62,66,69,70,72,38,43,101,88,97,93,71,29,40,101,97,75,91,67,33,39,76,83,83,74,73,39,63,64,85,76,75,78,36,44,70,99,113,93,62,46,36,61,68,68,79,49,32,39,64,83,160,98,61,27,23,49,61,66,59,55,29,24,64,59,64,71,50,29,28,52,63,72,55,54,18,41,52,74,83,71,54,20,24,62,50,66,66,70,14,27,41,70,50,64,57,26,21,58,71,47,68,38,24,34,71,80,82,92,67,27,40,84,87,85,58,59,23,28,63,95,78,89,76,26,45,66,67,80,114,75,27,30,74,50,42,43,56,20,24,66,87,68,73,65,34,65,71,52,62,68,62,23,34,59,72,57,64,40,25,20,50,41,39,28,21,18,11,21,4,25,24,15,16,25,53,52,70,64,56,29,24,67,63,60,62,76,47,32,63,68,66,55,60,24,34,67,62,60,92,84,31,26,62,54,64,74,84,45,48,75,90,78,65,66,38,16,62,63,64,67,77,35,26,68,92,83,79,68,27,33,86,78,83,75,89,25,37,86,85,79,99,94,34,39,81,75,89,84,79,35,39,84,87,83,80,67,24,31,73,72,85,69,48,31,24,70,82,83,88,81,31,35,99,93,109,94,94,41,26,86,74,93,92,62,43,29,77,46,103,98,69,27,25,71,77,96,114,109,45,23,109,77,84,70,112,59,111,155,168,246,193,135,47,48,99,125,105,106,100,51,44,63,109,82,103,78,25,29,94,80,145,76,76,24,26,78,83,80,86,78,57,36,70,95,93,99,65,36,49,98,92,69,63,55,25,29,50,62,88,125,104,36,34,92,100,106,101,87,68,59,94,105,93,105,76,54,48,98,88,65,80,74,38,43,70,70,112,109,96,48,36,94,78,85,95,67,33,31,62,69,58,48,50,38,47,69,76,65,68,74,19,30,63,88,83,68,16,22,18,64,86,94,87,71,26,27,69,96,76,75,75,22,25,113,76,76,87,59,19,26,85,95,89,129,59,14,24,88,78,79,101,57,18,22,86,82,68,82,53,44,37,65,68,81,91,70,26,30,75,60,64,86,61,28,26,68,73,75,81]},"selected":{"id":"1821"},"selection_policy":{"id":"1820"}},"id":"1805","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"1783","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1775","type":"BoxAnnotation"},{"attributes":{},"id":"1755","type":"DataRange1d"},{"attributes":{},"id":"1772","type":"SaveTool"},{"attributes":{"fields":["unique"]},"id":"1785","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1809"}]},"id":"1823","type":"LegendItem"},{"attributes":{},"id":"1774","type":"HelpTool"},{"attributes":{"source":{"id":"1787"}},"id":"1792","type":"CDSView"},{"attributes":{"source":{"id":"1805"}},"id":"1810","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1783"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1784"}},"x":{"field":"indices"}},"id":"1789","type":"VBar"},{"attributes":{},"id":"1773","type":"ResetTool"},{"attributes":{"data_source":{"id":"1787"},"glyph":{"id":"1789"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1790"},"view":{"id":"1792"}},"id":"1791","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1765"},"dimension":1,"ticker":null},"id":"1768","type":"Grid"},{"attributes":{},"id":"1800","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1798"},"major_label_policy":{"id":"1797"},"ticker":{"id":"1766"}},"id":"1765","type":"LinearAxis"},{"attributes":{},"id":"1794","type":"AllLabels"},{"attributes":{"bottom":{"expr":{"id":"1783"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1784"}},"x":{"field":"indices"}},"id":"1790","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"1769"},{"id":"1770"},{"id":"1771"},{"id":"1772"},{"id":"1773"},{"id":"1774"}]},"id":"1776","type":"Toolbar"},{"attributes":{"data":{"duplicate":[196,791,25,401,374,189,69,134,559,335,380,382,176,127,432,529,495,536,304,207,92,627,372,310,436,311,85,115,409,685,631,635,777,131,101,828,498,260,386,265,123,46,289,249,175,354,265,9,41,270,361,217,198,251,139,113,130,125,131,243,527,60,179,404,400,392,320,187,36,36,488,231,401,225,239,90,105,389,348,403,236,335,40,67,135,244,213,435,412,126,140,292,165,307,208,167,47,42,122,187,137,228,85,22,34,159,188,213,155,73,14,35,87,189,134,106,55,27,20,172,87,215,218,87,37,39,185,156,147,123,117,17,47,97,211,200,161,128,38,38,109,177,145,264,122,19,63,52,238,156,96,204,46,23,138,216,118,153,146,96,226,338,142,248,266,391,125,131,319,457,273,295,224,123,173,332,321,452,196,315,120,132,287,240,163,264,154,44,69,183,161,111,110,220,18,22,108,173,193,130,183,60,37,137,84,198,193,322,62,33,166,287,131,194,177,33,59,300,207,76,37,13,19,11,80,0,51,115,100,2,34,264,227,194,249,184,68,28,144,134,101,166,121,45,29,171,219,138,105,114,30,47,106,88,146,318,103,56,62,232,143,218,209,191,119,86,170,345,238,206,121,31,12,134,141,125,166,279,140,48,140,135,115,125,53,19,44,183,164,263,263,175,39,51,171,198,141,245,167,30,49,160,141,170,159,107,111,98,175,300,374,220,577,17,58,104,105,253,194,147,113,117,161,245,190,402,261,108,72,279,352,417,362,327,94,59,253,116,231,400,157,117,67,233,111,376,274,86,100,134,296,241,351,502,680,107,57,373,203,248,169,233,154,483,946,819,702,679,576,268,241,471,506,298,466,377,115,270,181,484,624,345,250,81,91,346,349,635,255,286,114,54,150,150,195,184,181,238,225,192,402,380,490,201,99,144,249,217,164,224,227,44,39,173,168,306,425,348,86,203,230,312,468,271,330,144,61,255,341,205,365,159,88,178,278,214,154,328,297,63,108,155,148,283,390,427,67,26,219,237,178,318,160,45,57,158,106,33,82,136,20,95,221,99,92,208,166,12,19,84,285,199,164,15,52,85,285,444,347,268,234,76,37,210,403,150,293,108,6,29,206,243,184,366,214,7,74,135,215,211,357,305,62,27,146,128,193,230,97,77,12,198,127,189,212,111,25,62,97,210,582,1230,487,214,127,836,339,180,157,110,35,44,96,178,159,143],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535],"unique":[60,299,10,157,106,53,47,95,116,94,110,78,32,47,68,91,101,84,94,37,41,102,72,91,78,79,35,34,85,124,101,86,78,36,35,120,83,155,190,130,45,30,76,87,84,133,81,23,28,78,65,87,86,62,48,29,62,66,69,70,72,38,43,101,88,97,93,71,29,40,101,97,75,91,67,33,39,76,83,83,74,73,39,63,64,85,76,75,78,36,44,70,99,113,93,62,46,36,61,68,68,79,49,32,39,64,83,160,98,61,27,23,49,61,66,59,55,29,24,64,59,64,71,50,29,28,52,63,72,55,54,18,41,52,74,83,71,54,20,24,62,50,66,66,70,14,27,41,70,50,64,57,26,21,58,71,47,68,38,24,34,71,80,82,92,67,27,40,84,87,85,58,59,23,28,63,95,78,89,76,26,45,66,67,80,114,75,27,30,74,50,42,43,56,20,24,66,87,68,73,65,34,65,71,52,62,68,62,23,34,59,72,57,64,40,25,20,50,41,39,28,21,18,11,21,4,25,24,15,16,25,53,52,70,64,56,29,24,67,63,60,62,76,47,32,63,68,66,55,60,24,34,67,62,60,92,84,31,26,62,54,64,74,84,45,48,75,90,78,65,66,38,16,62,63,64,67,77,35,26,68,92,83,79,68,27,33,86,78,83,75,89,25,37,86,85,79,99,94,34,39,81,75,89,84,79,35,39,84,87,83,80,67,24,31,73,72,85,69,48,31,24,70,82,83,88,81,31,35,99,93,109,94,94,41,26,86,74,93,92,62,43,29,77,46,103,98,69,27,25,71,77,96,114,109,45,23,109,77,84,70,112,59,111,155,168,246,193,135,47,48,99,125,105,106,100,51,44,63,109,82,103,78,25,29,94,80,145,76,76,24,26,78,83,80,86,78,57,36,70,95,93,99,65,36,49,98,92,69,63,55,25,29,50,62,88,125,104,36,34,92,100,106,101,87,68,59,94,105,93,105,76,54,48,98,88,65,80,74,38,43,70,70,112,109,96,48,36,94,78,85,95,67,33,31,62,69,58,48,50,38,47,69,76,65,68,74,19,30,63,88,83,68,16,22,18,64,86,94,87,71,26,27,69,96,76,75,75,22,25,113,76,76,87,59,19,26,85,95,89,129,59,14,24,88,78,79,101,57,18,22,86,82,68,82,53,44,37,65,68,81,91,70,26,30,75,60,64,86,61,28,26,68,73,75,81]},"selected":{"id":"1801"},"selection_policy":{"id":"1800"}},"id":"1787","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1761"},"ticker":null},"id":"1764","type":"Grid"},{"attributes":{},"id":"1753","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535]},"id":"1824","type":"FixedTicker"},{"attributes":{},"id":"1801","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"1785"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1786"}},"x":{"field":"indices"}},"id":"1808","type":"VBar"},{"attributes":{},"id":"1766","type":"BasicTicker"},{"attributes":{"below":[{"id":"1761"}],"center":[{"id":"1764"},{"id":"1768"},{"id":"1803"}],"left":[{"id":"1765"}],"renderers":[{"id":"1791"},{"id":"1809"}],"title":{"id":"1751"},"toolbar":{"id":"1776"},"width":900,"x_range":{"id":"1753"},"x_scale":{"id":"1757"},"y_range":{"id":"1755"},"y_scale":{"id":"1759"}},"id":"1750","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1795"},"major_label_orientation":0.75,"major_label_overrides":{"0":"2020-05-18 00:00:00","1":"2020-05-19 00:00:00","10":"2020-05-28 00:00:00","100":"2020-08-26 00:00:00","101":"2020-08-27 00:00:00","102":"2020-08-28 00:00:00","103":"2020-08-29 00:00:00","104":"2020-08-30 00:00:00","105":"2020-08-31 00:00:00","106":"2020-09-01 00:00:00","107":"2020-09-02 00:00:00","108":"2020-09-03 00:00:00","109":"2020-09-04 00:00:00","11":"2020-05-29 00:00:00","110":"2020-09-05 00:00:00","111":"2020-09-06 00:00:00","112":"2020-09-07 00:00:00","113":"2020-09-08 00:00:00","114":"2020-09-09 00:00:00","115":"2020-09-10 00:00:00","116":"2020-09-11 00:00:00","117":"2020-09-12 00:00:00","118":"2020-09-13 00:00:00","119":"2020-09-14 00:00:00","12":"2020-05-30 00:00:00","120":"2020-09-15 00:00:00","121":"2020-09-16 00:00:00","122":"2020-09-17 00:00:00","123":"2020-09-18 00:00:00","124":"2020-09-19 00:00:00","125":"2020-09-20 00:00:00","126":"2020-09-21 00:00:00","127":"2020-09-22 00:00:00","128":"2020-09-23 00:00:00","129":"2020-09-24 00:00:00","13":"2020-05-31 00:00:00","130":"2020-09-25 00:00:00","131":"2020-09-26 00:00:00","132":"2020-09-27 00:00:00","133":"2020-09-28 00:00:00","134":"2020-09-29 00:00:00","135":"2020-09-30 00:00:00","136":"2020-10-01 00:00:00","137":"2020-10-02 00:00:00","138":"2020-10-03 00:00:00","139":"2020-10-04 00:00:00","14":"2020-06-01 00:00:00","140":"2020-10-05 00:00:00","141":"2020-10-06 00:00:00","142":"2020-10-07 00:00:00","143":"2020-10-08 00:00:00","144":"2020-10-09 00:00:00","145":"2020-10-10 00:00:00","146":"2020-10-11 00:00:00","147":"2020-10-12 00:00:00","148":"2020-10-13 00:00:00","149":"2020-10-14 00:00:00","15":"2020-06-02 00:00:00","150":"2020-10-15 00:00:00","151":"2020-10-16 00:00:00","152":"2020-10-17 00:00:00","153":"2020-10-18 00:00:00","154":"2020-10-19 00:00:00","155":"2020-10-20 00:00:00","156":"2020-10-21 00:00:00","157":"2020-10-22 00:00:00","158":"2020-10-23 00:00:00","159":"2020-10-24 00:00:00","16":"2020-06-03 00:00:00","160":"2020-10-25 00:00:00","161":"2020-10-26 00:00:00","162":"2020-10-27 00:00:00","163":"2020-10-28 00:00:00","164":"2020-10-29 00:00:00","165":"2020-10-30 00:00:00","166":"2020-10-31 00:00:00","167":"2020-11-01 00:00:00","168":"2020-11-02 00:00:00","169":"2020-11-03 00:00:00","17":"2020-06-04 00:00:00","170":"2020-11-04 00:00:00","171":"2020-11-05 00:00:00","172":"2020-11-06 00:00:00","173":"2020-11-07 00:00:00","174":"2020-11-08 00:00:00","175":"2020-11-09 00:00:00","176":"2020-11-10 00:00:00","177":"2020-11-11 00:00:00","178":"2020-11-12 00:00:00","179":"2020-11-13 00:00:00","18":"2020-06-05 00:00:00","180":"2020-11-14 00:00:00","181":"2020-11-15 00:00:00","182":"2020-11-16 00:00:00","183":"2020-11-17 00:00:00","184":"2020-11-18 00:00:00","185":"2020-11-19 00:00:00","186":"2020-11-20 00:00:00","187":"2020-11-21 00:00:00","188":"2020-11-22 00:00:00","189":"2020-11-23 00:00:00","19":"2020-06-06 00:00:00","190":"2020-11-24 00:00:00","191":"2020-11-25 00:00:00","192":"2020-11-26 00:00:00","193":"2020-11-27 00:00:00","194":"2020-11-28 00:00:00","195":"2020-11-29 00:00:00","196":"2020-11-30 00:00:00","197":"2020-12-01 00:00:00","198":"2020-12-02 00:00:00","199":"2020-12-03 00:00:00","2":"2020-05-20 00:00:00","20":"2020-06-07 00:00:00","200":"2020-12-04 00:00:00","201":"2020-12-05 00:00:00","202":"2020-12-06 00:00:00","203":"2020-12-07 00:00:00","204":"2020-12-08 00:00:00","205":"2020-12-09 00:00:00","206":"2020-12-10 00:00:00","207":"2020-12-11 00:00:00","208":"2020-12-12 00:00:00","209":"2020-12-13 00:00:00","21":"2020-06-08 00:00:00","210":"2020-12-14 00:00:00","211":"2020-12-15 00:00:00","212":"2020-12-16 00:00:00","213":"2020-12-17 00:00:00","214":"2020-12-18 00:00:00","215":"2020-12-19 00:00:00","216":"2020-12-20 00:00:00","217":"2020-12-21 00:00:00","218":"2020-12-22 00:00:00","219":"2020-12-23 00:00:00","22":"2020-06-09 00:00:00","220":"2020-12-24 00:00:00","221":"2020-12-25 00:00:00","222":"2020-12-26 00:00:00","223":"2020-12-27 00:00:00","224":"2020-12-28 00:00:00","225":"2020-12-29 00:00:00","226":"2020-12-30 00:00:00","227":"2020-12-31 00:00:00","228":"2021-01-01 00:00:00","229":"2021-01-02 00:00:00","23":"2020-06-10 00:00:00","230":"2021-01-03 00:00:00","231":"2021-01-04 00:00:00","232":"2021-01-05 00:00:00","233":"2021-01-06 00:00:00","234":"2021-01-07 00:00:00","235":"2021-01-08 00:00:00","236":"2021-01-09 00:00:00","237":"2021-01-10 00:00:00","238":"2021-01-11 00:00:00","239":"2021-01-12 00:00:00","24":"2020-06-11 00:00:00","240":"2021-01-13 00:00:00","241":"2021-01-14 00:00:00","242":"2021-01-15 00:00:00","243":"2021-01-16 00:00:00","244":"2021-01-17 00:00:00","245":"2021-01-18 00:00:00","246":"2021-01-19 00:00:00","247":"2021-01-20 00:00:00","248":"2021-01-21 00:00:00","249":"2021-01-22 00:00:00","25":"2020-06-12 00:00:00","250":"2021-01-23 00:00:00","251":"2021-01-24 00:00:00","252":"2021-01-25 00:00:00","253":"2021-01-26 00:00:00","254":"2021-01-27 00:00:00","255":"2021-01-28 00:00:00","256":"2021-01-29 00:00:00","257":"2021-01-30 00:00:00","258":"2021-01-31 00:00:00","259":"2021-02-01 00:00:00","26":"2020-06-13 00:00:00","260":"2021-02-02 00:00:00","261":"2021-02-03 00:00:00","262":"2021-02-04 00:00:00","263":"2021-02-05 00:00:00","264":"2021-02-06 00:00:00","265":"2021-02-07 00:00:00","266":"2021-02-08 00:00:00","267":"2021-02-09 00:00:00","268":"2021-02-10 00:00:00","269":"2021-02-11 00:00:00","27":"2020-06-14 00:00:00","270":"2021-02-12 00:00:00","271":"2021-02-13 00:00:00","272":"2021-02-14 00:00:00","273":"2021-02-15 00:00:00","274":"2021-02-16 00:00:00","275":"2021-02-17 00:00:00","276":"2021-02-18 00:00:00","277":"2021-02-19 00:00:00","278":"2021-02-20 00:00:00","279":"2021-02-21 00:00:00","28":"2020-06-15 00:00:00","280":"2021-02-22 00:00:00","281":"2021-02-23 00:00:00","282":"2021-02-24 00:00:00","283":"2021-02-25 00:00:00","284":"2021-02-26 00:00:00","285":"2021-02-27 00:00:00","286":"2021-02-28 00:00:00","287":"2021-03-01 00:00:00","288":"2021-03-02 00:00:00","289":"2021-03-03 00:00:00","29":"2020-06-16 00:00:00","290":"2021-03-04 00:00:00","291":"2021-03-05 00:00:00","292":"2021-03-06 00:00:00","293":"2021-03-07 00:00:00","294":"2021-03-08 00:00:00","295":"2021-03-09 00:00:00","296":"2021-03-10 00:00:00","297":"2021-03-11 00:00:00","298":"2021-03-12 00:00:00","299":"2021-03-13 00:00:00","3":"2020-05-21 00:00:00","30":"2020-06-17 00:00:00","300":"2021-03-14 00:00:00","301":"2021-03-15 00:00:00","302":"2021-03-16 00:00:00","303":"2021-03-17 00:00:00","304":"2021-03-18 00:00:00","305":"2021-03-19 00:00:00","306":"2021-03-20 00:00:00","307":"2021-03-21 00:00:00","308":"2021-03-22 00:00:00","309":"2021-03-23 00:00:00","31":"2020-06-18 00:00:00","310":"2021-03-24 00:00:00","311":"2021-03-25 00:00:00","312":"2021-03-26 00:00:00","313":"2021-03-27 00:00:00","314":"2021-03-28 00:00:00","315":"2021-03-29 00:00:00","316":"2021-03-30 00:00:00","317":"2021-03-31 00:00:00","318":"2021-04-01 00:00:00","319":"2021-04-02 00:00:00","32":"2020-06-19 00:00:00","320":"2021-04-03 00:00:00","321":"2021-04-04 00:00:00","322":"2021-04-05 00:00:00","323":"2021-04-06 00:00:00","324":"2021-04-07 00:00:00","325":"2021-04-08 00:00:00","326":"2021-04-09 00:00:00","327":"2021-04-10 00:00:00","328":"2021-04-11 00:00:00","329":"2021-04-12 00:00:00","33":"2020-06-20 00:00:00","330":"2021-04-13 00:00:00","331":"2021-04-14 00:00:00","332":"2021-04-15 00:00:00","333":"2021-04-16 00:00:00","334":"2021-04-17 00:00:00","335":"2021-04-18 00:00:00","336":"2021-04-19 00:00:00","337":"2021-04-20 00:00:00","338":"2021-04-21 00:00:00","339":"2021-04-22 00:00:00","34":"2020-06-21 00:00:00","340":"2021-04-23 00:00:00","341":"2021-04-24 00:00:00","342":"2021-04-25 00:00:00","343":"2021-04-26 00:00:00","344":"2021-04-27 00:00:00","345":"2021-04-28 00:00:00","346":"2021-04-29 00:00:00","347":"2021-04-30 00:00:00","348":"2021-05-01 00:00:00","349":"2021-05-02 00:00:00","35":"2020-06-22 00:00:00","350":"2021-05-03 00:00:00","351":"2021-05-04 00:00:00","352":"2021-05-05 00:00:00","353":"2021-05-06 00:00:00","354":"2021-05-07 00:00:00","355":"2021-05-08 00:00:00","356":"2021-05-09 00:00:00","357":"2021-05-10 00:00:00","358":"2021-05-11 00:00:00","359":"2021-05-12 00:00:00","36":"2020-06-23 00:00:00","360":"2021-05-13 00:00:00","361":"2021-05-14 00:00:00","362":"2021-05-15 00:00:00","363":"2021-05-16 00:00:00","364":"2021-05-17 00:00:00","365":"2021-05-18 00:00:00","366":"2021-05-19 00:00:00","367":"2021-05-20 00:00:00","368":"2021-05-21 00:00:00","369":"2021-05-22 00:00:00","37":"2020-06-24 00:00:00","370":"2021-05-23 00:00:00","371":"2021-05-24 00:00:00","372":"2021-05-25 00:00:00","373":"2021-05-26 00:00:00","374":"2021-05-27 00:00:00","375":"2021-05-28 00:00:00","376":"2021-05-29 00:00:00","377":"2021-05-30 00:00:00","378":"2021-05-31 00:00:00","379":"2021-06-01 00:00:00","38":"2020-06-25 00:00:00","380":"2021-06-02 00:00:00","381":"2021-06-03 00:00:00","382":"2021-06-04 00:00:00","383":"2021-06-05 00:00:00","384":"2021-06-06 00:00:00","385":"2021-06-07 00:00:00","386":"2021-06-08 00:00:00","387":"2021-06-09 00:00:00","388":"2021-06-10 00:00:00","389":"2021-06-11 00:00:00","39":"2020-06-26 00:00:00","390":"2021-06-12 00:00:00","391":"2021-06-13 00:00:00","392":"2021-06-14 00:00:00","393":"2021-06-15 00:00:00","394":"2021-06-16 00:00:00","395":"2021-06-17 00:00:00","396":"2021-06-18 00:00:00","397":"2021-06-19 00:00:00","398":"2021-06-20 00:00:00","399":"2021-06-21 00:00:00","4":"2020-05-22 00:00:00","40":"2020-06-27 00:00:00","400":"2021-06-22 00:00:00","401":"2021-06-23 00:00:00","402":"2021-06-24 00:00:00","403":"2021-06-25 00:00:00","404":"2021-06-26 00:00:00","405":"2021-06-27 00:00:00","406":"2021-06-28 00:00:00","407":"2021-06-29 00:00:00","408":"2021-06-30 00:00:00","409":"2021-07-01 00:00:00","41":"2020-06-28 00:00:00","410":"2021-07-02 00:00:00","411":"2021-07-03 00:00:00","412":"2021-07-04 00:00:00","413":"2021-07-05 00:00:00","414":"2021-07-06 00:00:00","415":"2021-07-07 00:00:00","416":"2021-07-08 00:00:00","417":"2021-07-09 00:00:00","418":"2021-07-10 00:00:00","419":"2021-07-11 00:00:00","42":"2020-06-29 00:00:00","420":"2021-07-12 00:00:00","421":"2021-07-13 00:00:00","422":"2021-07-14 00:00:00","423":"2021-07-15 00:00:00","424":"2021-07-16 00:00:00","425":"2021-07-17 00:00:00","426":"2021-07-18 00:00:00","427":"2021-07-19 00:00:00","428":"2021-07-20 00:00:00","429":"2021-07-21 00:00:00","43":"2020-06-30 00:00:00","430":"2021-07-22 00:00:00","431":"2021-07-23 00:00:00","432":"2021-07-24 00:00:00","433":"2021-07-25 00:00:00","434":"2021-07-26 00:00:00","435":"2021-07-27 00:00:00","436":"2021-07-28 00:00:00","437":"2021-07-29 00:00:00","438":"2021-07-30 00:00:00","439":"2021-07-31 00:00:00","44":"2020-07-01 00:00:00","440":"2021-08-01 00:00:00","441":"2021-08-02 00:00:00","442":"2021-08-03 00:00:00","443":"2021-08-04 00:00:00","444":"2021-08-05 00:00:00","445":"2021-08-06 00:00:00","446":"2021-08-07 00:00:00","447":"2021-08-08 00:00:00","448":"2021-08-09 00:00:00","449":"2021-08-10 00:00:00","45":"2020-07-02 00:00:00","450":"2021-08-11 00:00:00","451":"2021-08-12 00:00:00","452":"2021-08-13 00:00:00","453":"2021-08-14 00:00:00","454":"2021-08-15 00:00:00","455":"2021-08-16 00:00:00","456":"2021-08-17 00:00:00","457":"2021-08-18 00:00:00","458":"2021-08-19 00:00:00","459":"2021-08-20 00:00:00","46":"2020-07-03 00:00:00","460":"2021-08-21 00:00:00","461":"2021-08-22 00:00:00","462":"2021-08-23 00:00:00","463":"2021-08-24 00:00:00","464":"2021-08-25 00:00:00","465":"2021-08-26 00:00:00","466":"2021-08-27 00:00:00","467":"2021-08-28 00:00:00","468":"2021-08-29 00:00:00","469":"2021-08-30 00:00:00","47":"2020-07-04 00:00:00","470":"2021-08-31 00:00:00","471":"2021-09-01 00:00:00","472":"2021-09-02 00:00:00","473":"2021-09-03 00:00:00","474":"2021-09-04 00:00:00","475":"2021-09-05 00:00:00","476":"2021-09-06 00:00:00","477":"2021-09-07 00:00:00","478":"2021-09-08 00:00:00","479":"2021-09-09 00:00:00","48":"2020-07-05 00:00:00","480":"2021-09-10 00:00:00","481":"2021-09-11 00:00:00","482":"2021-09-12 00:00:00","483":"2021-09-13 00:00:00","484":"2021-09-14 00:00:00","485":"2021-09-15 00:00:00","486":"2021-09-16 00:00:00","487":"2021-09-17 00:00:00","488":"2021-09-18 00:00:00","489":"2021-09-19 00:00:00","49":"2020-07-06 00:00:00","490":"2021-09-20 00:00:00","491":"2021-09-21 00:00:00","492":"2021-09-22 00:00:00","493":"2021-09-23 00:00:00","494":"2021-09-24 00:00:00","495":"2021-09-25 00:00:00","496":"2021-09-26 00:00:00","497":"2021-09-27 00:00:00","498":"2021-09-28 00:00:00","499":"2021-09-29 00:00:00","5":"2020-05-23 00:00:00","50":"2020-07-07 00:00:00","500":"2021-09-30 00:00:00","501":"2021-10-01 00:00:00","502":"2021-10-02 00:00:00","503":"2021-10-03 00:00:00","504":"2021-10-04 00:00:00","505":"2021-10-05 00:00:00","506":"2021-10-06 00:00:00","507":"2021-10-07 00:00:00","508":"2021-10-08 00:00:00","509":"2021-10-09 00:00:00","51":"2020-07-08 00:00:00","510":"2021-10-10 00:00:00","511":"2021-10-11 00:00:00","512":"2021-10-12 00:00:00","513":"2021-10-13 00:00:00","514":"2021-10-14 00:00:00","515":"2021-10-15 00:00:00","516":"2021-10-16 00:00:00","517":"2021-10-17 00:00:00","518":"2021-10-18 00:00:00","519":"2021-10-19 00:00:00","52":"2020-07-09 00:00:00","520":"2021-10-20 00:00:00","521":"2021-10-21 00:00:00","522":"2021-10-22 00:00:00","523":"2021-10-23 00:00:00","524":"2021-10-24 00:00:00","525":"2021-10-25 00:00:00","526":"2021-10-26 00:00:00","527":"2021-10-27 00:00:00","528":"2021-10-28 00:00:00","529":"2021-10-29 00:00:00","53":"2020-07-10 00:00:00","530":"2021-10-30 00:00:00","531":"2021-10-31 00:00:00","532":"2021-11-01 00:00:00","533":"2021-11-02 00:00:00","534":"2021-11-03 00:00:00","535":"2021-11-04 00:00:00","54":"2020-07-11 00:00:00","55":"2020-07-12 00:00:00","56":"2020-07-13 00:00:00","57":"2020-07-14 00:00:00","58":"2020-07-15 00:00:00","59":"2020-07-16 00:00:00","6":"2020-05-24 00:00:00","60":"2020-07-17 00:00:00","61":"2020-07-18 00:00:00","62":"2020-07-19 00:00:00","63":"2020-07-20 00:00:00","64":"2020-07-21 00:00:00","65":"2020-07-22 00:00:00","66":"2020-07-23 00:00:00","67":"2020-07-24 00:00:00","68":"2020-07-25 00:00:00","69":"2020-07-26 00:00:00","7":"2020-05-25 00:00:00","70":"2020-07-27 00:00:00","71":"2020-07-28 00:00:00","72":"2020-07-29 00:00:00","73":"2020-07-30 00:00:00","74":"2020-07-31 00:00:00","75":"2020-08-01 00:00:00","76":"2020-08-02 00:00:00","77":"2020-08-03 00:00:00","78":"2020-08-04 00:00:00","79":"2020-08-05 00:00:00","8":"2020-05-26 00:00:00","80":"2020-08-06 00:00:00","81":"2020-08-07 00:00:00","82":"2020-08-08 00:00:00","83":"2020-08-09 00:00:00","84":"2020-08-10 00:00:00","85":"2020-08-11 00:00:00","86":"2020-08-12 00:00:00","87":"2020-08-13 00:00:00","88":"2020-08-14 00:00:00","89":"2020-08-15 00:00:00","9":"2020-05-27 00:00:00","90":"2020-08-16 00:00:00","91":"2020-08-17 00:00:00","92":"2020-08-18 00:00:00","93":"2020-08-19 00:00:00","94":"2020-08-20 00:00:00","95":"2020-08-21 00:00:00","96":"2020-08-22 00:00:00","97":"2020-08-23 00:00:00","98":"2020-08-24 00:00:00","99":"2020-08-25 00:00:00"},"major_label_policy":{"id":"1794"},"ticker":{"id":"1824"}},"id":"1761","type":"LinearAxis"},{"attributes":{},"id":"1798","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1784","type":"Stack"},{"attributes":{},"id":"1759","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1785"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1786"}},"x":{"field":"indices"}},"id":"1807","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1786","type":"Stack"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1791"}]},"id":"1804","type":"LegendItem"},{"attributes":{},"id":"1795","type":"BasicTickFormatter"}],"root_ids":["1750"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"9a8c772b-f2d4-4733-bfe6-ea42917def09","root_ids":["1750"],"roots":{"1750":"6da15500-a087-455b-af8a-87e9d457ef6a"}}];
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