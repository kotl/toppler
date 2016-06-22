SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": ".",
    "trace": false,
    "production": true,
    "bundles": {
      "build.js": [
        "app/app.js",
        "app/scripts/main.js",
        "app/scripts/toppler.js",
        "app/scripts/services/game-state.js",
        "app/scripts/models/top-menu.js",
        "app/scripts/assets/player/down.js",
        "app/scripts/assets/_ellipse.js",
        "npm:systemjs-plugin-babel@0.0.12.json",
        "app/scripts/models/coin.js",
        "app/scripts/models/drawable.js",
        "app/scripts/services/game-canvas.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "app/scripts/assets/coin.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/possibleConstructorReturn.js",
        "app/scripts/assets/top-menu.js",
        "app/scripts/models/player.js",
        "app/scripts/services/kbd.js",
        "app/scripts/assets/cross.js",
        "app/scripts/assets/player/right.js",
        "app/scripts/assets/player/left.js",
        "app/scripts/assets/player/up.js",
        "app/scripts/models/leaf.js",
        "app/scripts/assets/brown-ball.js",
        "app/scripts/assets/_ball.js",
        "app/scripts/assets/dark-red-ball.js",
        "app/scripts/assets/red-ball.js",
        "app/scripts/assets/blue-ball.js",
        "app/scripts/services/game-stage.js",
        "app/scripts/models/summary-screen.js",
        "app/scripts/models/water.js",
        "app/scripts/assets/water.js",
        "app/scripts/models/container.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
      "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
      "socket.io-client": "npm:socket.io-client@1.4.6"
    },
    "packages": {
      "npm:babel-preset-stage-0@6.5.0": {
        "map": {
          "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0",
          "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
          "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0"
        }
      },
      "npm:babel-plugin-transform-do-expressions@6.8.0": {
        "map": {
          "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-preset-stage-1@6.5.0": {
        "map": {
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.9.1",
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0",
          "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
          "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
        }
      },
      "npm:babel-plugin-transform-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.8.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0"
        }
      },
      "npm:babel-runtime@6.9.2": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-preset-stage-2@6.5.0": {
        "map": {
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0"
        }
      },
      "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-class-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-types@6.10.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-plugin-syntax-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babylon": "npm:babylon@6.8.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-plugin-syntax-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0"
        }
      },
      "npm:babel-traverse@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babylon": "npm:babylon@6.8.1",
          "lodash": "npm:lodash@4.13.1",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "invariant": "npm:invariant@2.2.1",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0"
        }
      },
      "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babylon@6.8.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-preset-stage-3@6.5.0": {
        "map": {
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.8.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@1.0.3",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "strip-ansi": "npm:strip-ansi@3.0.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "github:capaj/systemjs-hot-reloader@0.6.0": {
        "map": {
          "debug": "npm:debug@2.2.0",
          "weakee": "npm:weakee@1.0.0",
          "socket.io-client": "github:socketio/socket.io-client@1.4.6"
        }
      },
      "npm:socket.io-client@1.4.6": {
        "map": {
          "object-component": "npm:object-component@0.0.3",
          "socket.io-parser": "npm:socket.io-parser@2.2.6",
          "indexof": "npm:indexof@0.0.1",
          "component-bind": "npm:component-bind@1.0.0",
          "has-binary": "npm:has-binary@0.1.7",
          "component-emitter": "npm:component-emitter@1.2.0",
          "backo2": "npm:backo2@1.0.2",
          "debug": "npm:debug@2.2.0",
          "parseuri": "npm:parseuri@0.0.4",
          "to-array": "npm:to-array@0.1.4",
          "engine.io-client": "npm:engine.io-client@1.6.9"
        }
      },
      "npm:socket.io-parser@2.2.6": {
        "map": {
          "component-emitter": "npm:component-emitter@1.1.2",
          "debug": "npm:debug@2.2.0",
          "benchmark": "npm:benchmark@1.0.0",
          "isarray": "npm:isarray@0.0.1",
          "json3": "npm:json3@3.3.2"
        }
      },
      "npm:has-binary@0.1.7": {
        "map": {
          "isarray": "npm:isarray@0.0.1"
        }
      },
      "npm:parseuri@0.0.4": {
        "map": {
          "better-assert": "npm:better-assert@1.0.2"
        }
      },
      "npm:engine.io-client@1.6.9": {
        "map": {
          "component-emitter": "npm:component-emitter@1.1.2",
          "indexof": "npm:indexof@0.0.1",
          "debug": "npm:debug@2.2.0",
          "parseuri": "npm:parseuri@0.0.4",
          "ws": "npm:ws@1.0.1",
          "node-ws": "npm:ws@1.0.1",
          "yeast": "npm:yeast@0.1.2",
          "component-inherit": "npm:component-inherit@0.0.3",
          "has-cors": "npm:has-cors@1.1.0",
          "parseqs": "npm:parseqs@0.0.2",
          "parsejson": "npm:parsejson@0.0.1",
          "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
          "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
          "engine.io-parser": "npm:engine.io-parser@1.2.4"
        }
      },
      "npm:better-assert@1.0.2": {
        "map": {
          "callsite": "npm:callsite@1.0.0"
        }
      },
      "npm:ws@1.0.1": {
        "map": {
          "options": "npm:options@0.0.6",
          "utf-8-validate": "npm:utf-8-validate@1.2.1",
          "bufferutil": "npm:bufferutil@1.2.1",
          "ultron": "npm:ultron@1.0.2"
        }
      },
      "npm:utf-8-validate@1.2.1": {
        "map": {
          "nan": "npm:nan@2.3.5",
          "bindings": "npm:bindings@1.2.1"
        }
      },
      "npm:bufferutil@1.2.1": {
        "map": {
          "nan": "npm:nan@2.3.5",
          "bindings": "npm:bindings@1.2.1"
        }
      },
      "npm:parsejson@0.0.1": {
        "map": {
          "better-assert": "npm:better-assert@1.0.2"
        }
      },
      "npm:engine.io-parser@1.2.4": {
        "map": {
          "has-binary": "npm:has-binary@0.1.6",
          "blob": "npm:blob@0.0.4",
          "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
          "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
          "utf8": "npm:utf8@2.1.0",
          "after": "npm:after@0.8.1"
        }
      },
      "npm:parseqs@0.0.2": {
        "map": {
          "better-assert": "npm:better-assert@1.0.2"
        }
      },
      "npm:has-binary@0.1.6": {
        "map": {
          "isarray": "npm:isarray@0.0.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "format": "esm",
      "defaultExtension": "js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "presets": [
              "babel-preset-stage-0"
            ],
            "optional": [
              "runtime"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "inherits": "npm:inherits@2.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.4",
        "elliptic": "npm:elliptic@6.3.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "create-hash": "npm:create-hash@1.1.2",
        "asn1.js": "npm:asn1.js@4.6.2",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    }
  }
});
