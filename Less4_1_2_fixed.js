/**
 * Less - Leaner CSS v4.1.2
 * http://lesscss.org
 *
 * Copyright (c) 2009-2021, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 * @license Apache-2.0
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.less = factory());
}(this, (function () { 'use strict';

    // Export a new default each time
    function defaultOptions () {
        return {
            /* Inline Javascript - @plugin still allowed */
            javascriptEnabled: false,
            /* Outputs a makefile import dependency list to stdout. */
            depends: false,
            /* (DEPRECATED) Compress using less built-in compression.
             * This does an okay job but does not utilise all the tricks of
             * dedicated css compression. */
            compress: false,
            /* Runs the less parser and just reports errors without any output. */
            lint: false,
            /* Sets available include paths.
             * If the file in an @import rule does not exist at that exact location,
             * less will look for it at the location(s) passed to this option.
             * You might use this for instance to specify a path to a library which
             * you want to be referenced simply and relatively in the less files. */
            paths: [],
            /* color output in the terminal */
            color: true,
            /* The strictImports controls whether the compiler will allow an @import inside of either
             * @media blocks or (a later addition) other selector blocks.
             * See: https://github.com/less/less.js/issues/656 */
            strictImports: false,
            /* Allow Imports from Insecure HTTPS Hosts */
            insecure: false,
            /* Allows you to add a path to every generated import and url in your css.
             * This does not affect less import statements that are processed, just ones
             * that are left in the output css. */
            rootpath: '',
            /* By default URLs are kept as-is, so if you import a file in a sub-directory
             * that references an image, exactly the same URL will be output in the css.
             * This option allows you to re-write URL's in imported files so that the
             * URL is always relative to the base imported file */
            rewriteUrls: false,
            /* How to process math
             *   0 always           - eagerly try to solve all operations
             *   1 parens-division  - require parens for division "/"
             *   2 parens | strict  - require parens for all operations
             *   3 strict-legacy    - legacy strict behavior (super-strict)
             */
            math: 1,
            /* Without this option, less attempts to guess at the output unit when it does maths. */
            strictUnits: false,
            /* Effectively the declaration is put at the top of your base Less file,
             * meaning it can be used but it also can be overridden if this variable
             * is defined in the file. */
            globalVars: null,
            /* As opposed to the global variable option, this puts the declaration at the
             * end of your base file, meaning it will override anything defined in your Less file. */
            modifyVars: null,
            /* This option allows you to specify a argument to go on to every URL.  */
            urlArgs: ''
        };
    }

    function extractId(href) {
        return href.replace(/^[a-z-]+:\/+?[^\/]+/, '') // Remove protocol & domain
            .replace(/[\?\&]livereload=\w+/, '') // Remove LiveReload cachebuster
            .replace(/^\//, '') // Remove root /
            .replace(/\.[a-zA-Z]+$/, '') // Remove simple extension
            .replace(/[^\.\w-]+/g, '-') // Replace illegal characters
            .replace(/\./g, ':'); // Replace dots with colons(for valid id)
    }
    function addDataAttr(options, tag) {
        if(tag) {
            for (var opt in tag.dataset) {
                if (tag.dataset.hasOwnProperty(opt)) {
                    if (opt === 'env' || opt === 'dumpLineNumbers' || opt === 'rootpath' || opt === 'errorReporting') {
                        options[opt] = tag.dataset[opt];
                    }
                    else {
                        try {
                            options[opt] = JSON.parse(tag.dataset[opt]);
                        }
                        catch (_) { }
                    }
                }
            }
        }
    }

    var browser = {
        createCSS: function (document, styles, sheet) {
            // Strip the query-string
            var href = sheet.href || '';
            // If there is no title set, use the filename, minus the extension
            var id = "less:" + (sheet.title || extractId(href));
            // If this has already been inserted into the DOM, we may need to replace it
            var oldStyleNode = document.getElementById(id);
            var keepOldStyleNode = false;
            // Create a new stylesheet node for insertion or (if necessary) replacement
            var styleNode = document.createElement('style');
            styleNode.setAttribute('type', 'text/css');
            if (sheet.media) {
                styleNode.setAttribute('media', sheet.media);
            }
            styleNode.id = id;
            if (!styleNode.styleSheet) {
                styleNode.appendChild(document.createTextNode(styles));
                // If new contents match contents of oldStyleNode, don't replace oldStyleNode
                keepOldStyleNode = (oldStyleNode !== null && oldStyleNode.childNodes.length > 0 && styleNode.childNodes.length > 0 &&
                    oldStyleNode.firstChild.nodeValue === styleNode.firstChild.nodeValue);
            }
            var head = document.getElementsByTagName('head')[0];
            // If there is no oldStyleNode, just append; otherwise, only append if we need
            // to replace oldStyleNode with an updated stylesheet
            if (oldStyleNode === null || keepOldStyleNode === false) {
                var nextEl = sheet && sheet.nextSibling || null;
                if (nextEl) {
                    nextEl.parentNode.insertBefore(styleNode, nextEl);
                }
                else {
                    head.appendChild(styleNode);
                }
            }
            if (oldStyleNode && keepOldStyleNode === false) {
                oldStyleNode.parentNode.removeChild(oldStyleNode);
            }
            // For IE.
            // This needs to happen *after* the style element is added to the DOM, otherwise IE 7 and 8 may crash.
            // See http://social.msdn.microsoft.com/Forums/en-US/7e081b65-878a-4c22-8e68-c10d39c2ed32/internet-explorer-crashes-appending-style-element-to-head
            if (styleNode.styleSheet) {
                try {
                    styleNode.styleSheet.cssText = styles;
                }
                catch (e) {
                    throw new Error('Couldn\'t reassign styleSheet.cssText.');
                }
            }
        },
        currentScript: function (window) {
            var document = window.document;
            return document.currentScript || (function () {
                var scripts = document.getElementsByTagName('script');
                return scripts[scripts.length - 1];
            })();
        }
    };

    var addDefaultOptions = (function (window, options) {
        // use options from the current script tag data attribues
        addDataAttr(options, browser.currentScript(window));
        if (options.isFileProtocol === undefined) {
            options.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(window.location.protocol);
        }
        // Load styles asynchronously (default: false)
        //
        // This is set to `false` by default, so that the body
        // doesn't start loading before the stylesheets are parsed.
        // Setting this to `true` can result in flickering.
        //
        options.async = options.async || false;
        options.fileAsync = options.fileAsync || false;
        // Interval between watch polls
        options.poll = options.poll || (options.isFileProtocol ? 1000 : 1500);
        options.env = options.env || (window.location.hostname == '127.0.0.1' ||
        window.location.hostname == '0.0.0.0' ||
        window.location.hostname == 'localhost' ||
        (window.location.port &&
            window.location.port.length > 0) ||
        options.isFileProtocol ? 'development'
            : 'production');
        var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(window.location.hash);
        if (dumpLineNumbers) {
            options.dumpLineNumbers = dumpLineNumbers[1];
        }
        if (options.useFileCache === undefined) {
            options.useFileCache = true;
        }
        if (options.onReady === undefined) {
            options.onReady = true;
        }
        if (options.relativeUrls) {
            options.rewriteUrls = 'all';
        }
    });

    var logger$1 = {
        error: function (msg) {
            this._fireEvent('error', msg);
        },
        warn: function (msg) {
            this._fireEvent('warn', msg);
        },
        info: function (msg) {
            this._fireEvent('info', msg);
        },
        debug: function (msg) {
            this._fireEvent('debug', msg);
        },
        addListener: function (listener) {
            this._listeners.push(listener);
        },
        removeListener: function (listener) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i] === listener) {
                    this._listeners.splice(i, 1);
                    return;
                }
            }
        },
        _fireEvent: function (type, msg) {
            for (var i = 0; i < this._listeners.length; i++) {
                var logFunction = this._listeners[i][type];
                if (logFunction) {
                    logFunction(msg);
                }
            }
        },
        _listeners: []
    };

    /**
     * @todo Document why this abstraction exists, and the relationship between
     *       environment, file managers, and plugin manager
     */
    var Environment = /** @class */ (function () {
        function Environment(externalEnvironment, fileManagers) {
            this.fileManagers = fileManagers || [];
            externalEnvironment = externalEnvironment || {};
            var optionalFunctions = ['encodeBase64', 'mimeLookup', 'charsetLookup', 'getSourceMapGenerator'];
            var requiredFunctions = [];
            var functions = requiredFunctions.concat(optionalFunctions);
            for (var i = 0; i < functions.length; i++) {
                var propName = functions[i];
                var environmentFunc = externalEnvironment[propName];
                if (environmentFunc) {
                    this[propName] = environmentFunc.bind(externalEnvironment);
                }
                else if (i < requiredFunctions.length) {
                    this.warn("missing required function in environment - " + propName);
                }
            }
        }
        Environment.prototype.getFileManager = function (filename, currentDirectory, options, environment, isSync) {
            if (!filename) {
                logger$1.warn('getFileManager called with no filename.. Please report this issue. continuing.');
            }
            if (currentDirectory == null) {
                logger$1.warn('getFileManager called with null directory.. Please report this issue. continuing.');
            }
            var fileManagers = this.fileManagers;
            if (options.pluginManager) {
                fileManagers = [].concat(fileManagers).concat(options.pluginManager.getFileManagers());
            }
            for (var i = fileManagers.length - 1; i >= 0; i--) {
                var fileManager = fileManagers[i];
                if (fileManager[isSync ? 'supportsSync' : 'supports'](filename, currentDirectory, options, environment)) {
                    return fileManager;
                }
            }
            return null;
        };
        Environment.prototype.addFileManager = function (fileManager) {
            this.fileManagers.push(fileManager);
        };
        Environment.prototype.clearFileManagers = function () {
            this.fileManagers = [];
        };
        return Environment;
    }());

    var colors = {
        'aliceblue': '#f0f8ff',
        'antiquewhite': '#faebd7',
        'aqua': '#00ffff',
        'aquamarine': '#7fffd4',
        'azure': '#f0ffff',
        'beige': '#f5f5dc',
        'bisque': '#ffe4c4',
        'black': '#000000',
        'blanchedalmond': '#ffebcd',
        'blue': '#0000ff',
        'blueviolet': '#8a2be2',
        'brown': '#a52a2a',
        'burlywood': '#deb887',
        'cadetblue': '#5f9ea0',
        'chartreuse': '#7fff00',
        'chocolate': '#d2691e',
        'coral': '#ff7f50',
        'cornflowerblue': '#6495ed',
        'cornsilk': '#fff8dc',
        'crimson': '#dc143c',
        'cyan': '#00ffff',
        'darkblue': '#00008b',
        'darkcyan': '#008b8b',
        'darkgoldenrod': '#b8860b',
        'darkgray': '#a9a9a9',
        'darkgrey': '#a9a9a9',
        'darkgreen': '#006400',
        'darkkhaki': '#bdb76b',
        'darkmagenta': '#8b008b',
        'darkolivegreen': '#556b2f',
        'darkorange': '#ff8c00',
        'darkorchid': '#9932cc',
        'darkred': '#8b0000',
        'darksalmon': '#e9967a',
        'darkseagreen': '#8fbc8f',
        'darkslateblue': '#483d8b',
        'darkslategray': '#2f4f4f',
        'darkslategrey': '#2f4f4f',
        'darkturquoise': '#00ced1',
        'darkviolet': '#9400d3',
        'deeppink': '#ff1493',
        'deepskyblue': '#00bfff',
        'dimgray': '#696969',
        'dimgrey': '#696969',
        'dodgerblue': '#1e90ff',
        'firebrick': '#b22222',
        'floralwhite': '#fffaf0',
        'forestgreen': '#228b22',
        'fuchsia': '#ff00ff',
        'gainsboro': '#dcdcdc',
        'ghostwhite': '#f8f8ff',
        'gold': '#ffd700',
        'goldenrod': '#daa520',
        'gray': '#808080',
        'grey': '#808080',
        'green': '#008000',
        'greenyellow': '#adff2f',
        'honeydew': '#f0fff0',
        'hotpink': '#ff69b4',
        'indianred': '#cd5c5c',
        'indigo': '#4b0082',
        'ivory': '#fffff0',
        'khaki': '#f0e68c',
        'lavender': '#e6e6fa',
        'lavenderblush': '#fff0f5',
        'lawngreen': '#7cfc00',
        'lemonchiffon': '#fffacd',
        'lightblue': '#add8e6',
        'lightcoral': '#f08080',
        'lightcyan': '#e0ffff',
        'lightgoldenrodyellow': '#fafad2',
        'lightgray': '#d3d3d3',
        'lightgrey': '#d3d3d3',
        'lightgreen': '#90ee90',
        'lightpink': '#ffb6c1',
        'lightsalmon': '#ffa07a',
        'lightseagreen': '#20b2aa',
        'lightskyblue': '#87cefa',
        'lightslategray': '#778899',
        'lightslategrey': '#778899',
        'lightsteelblue': '#b0c4de',
        'lightyellow': '#ffffe0',
        'lime': '#00ff00',
        'limegreen': '#32cd32',
        'linen': '#faf0e6',
        'magenta': '#ff00ff',
        'maroon': '#800000',
        'mediumaquamarine': '#66cdaa',
        'mediumblue': '#0000cd',
        'mediumorchid': '#ba55d3',
        'mediumpurple': '#9370d8',
        'mediumseagreen': '#3cb371',
        'mediumslateblue': '#7b68ee',
        'mediumspringgreen': '#00fa9a',
        'mediumturquoise': '#48d1cc',
        'mediumvioletred': '#c71585',
        'midnightblue': '#191970',
        'mintcream': '#f5fffa',
        'mistyrose': '#ffe4e1',
        'moccasin': '#ffe4b5',
        'navajowhite': '#ffdead',
        'navy': '#000080',
        'oldlace': '#fdf5e6',
        'olive': '#808000',
        'olivedrab': '#6b8e23',
        'orange': '#ffa500',
        'orangered': '#ff4500',
        'orchid': '#da70d6',
        'palegoldenrod': '#eee8aa',
        'palegreen': '#98fb98',
        'paleturquoise': '#afeeee',
        'palevioletred': '#d87093',
        'papayawhip': '#ffefd5',
        'peachpuff': '#ffdab9',
        'peru': '#cd853f',
        'pink': '#ffc0cb',
        'plum': '#dda0dd',
        'powderblue': '#b0e0e6',
        'purple': '#800080',
        'rebeccapurple': '#663399',
        'red': '#ff0000',
        'rosybrown': '#bc8f8f',
        'royalblue': '#4169e1',
        'saddlebrown': '#8b4513',
        'salmon': '#fa8072',
        'sandybrown': '#f4a460',
        'seagreen': '#2e8b57',
        'seashell': '#fff5ee',
        'sienna': '#a0522d',
        'silver': '#c0c0c0',
        'skyblue': '#87ceeb',
        'slateblue': '#6a5acd',
        'slategray': '#708090',
        'slategrey': '#708090',
        'snow': '#fffafa',
        'springgreen': '#00ff7f',
        'steelblue': '#4682b4',
        'tan': '#d2b48c',
        'teal': '#008080',
        'thistle': '#d8bfd8',
        'tomato': '#ff6347',
        'turquoise': '#40e0d0',
        'violet': '#ee82ee',
        'wheat': '#f5deb3',
        'white': '#ffffff',
        'whitesmoke': '#f5f5f5',
        'yellow': '#ffff00',
        'yellowgreen': '#9acd32'
    };

    var unitConversions = {
        length: {
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'in': 0.0254,
            'px': 0.0254 / 96,
            'pt': 0.0254 / 72,
            'pc': 0.0254 / 72 * 12
        },
        duration: {
            's': 1,
            'ms': 0.001
        },
        angle: {
            'rad': 1 / (2 * Math.PI),
            'deg': 1 / 360,
            'grad': 1 / 400,
            'turn': 1
        }
    };

    var data = { colors: colors, unitConversions: unitConversions };

    /**
     * The reason why Node is a class and other nodes simply do not extend
     * from Node (since we're transpiling) is due to this issue:
     *
     * https://github.com/less/less.js/issues/3434
     */
    var Node = /** @class */ (function () {
        function Node() {
            this.parent = null;
            this.visibilityBlocks = undefined;
            this.nodeVisible = undefined;
            this.rootNode = null;
            this.parsed = null;
        }
        Object.defineProperty(Node.prototype, "currentFileInfo", {
            get: function () {
                return this.fileInfo();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Node.prototype, "index", {
            get: function () {
                return this.getIndex();
            },
            enumerable: false,
            configurable: true
        });
        Node.prototype.setParent = function (nodes, parent) {
            function set(node) {
                if (node && node instanceof Node) {
                    node.parent = parent;
                }
            }
            if (Array.isArray(nodes)) {
                nodes.forEach(set);
            }
            else {
                set(nodes);
            }
        };
        Node.prototype.getIndex = function () {
            return this._index || (this.parent && this.parent.getIndex()) || 0;
        };
        Node.prototype.fileInfo = function () {
            return this._fileInfo || (this.parent && this.parent.fileInfo()) || {};
        };
        Node.prototype.isRulesetLike = function () { return false; };
        Node.prototype.toCSS = function (context) {
            var strs = [];
            this.genCSS(context, {
                add: function (chunk, fileInfo, index) {
                    strs.push(chunk);
                },
                isEmpty: function () {
                    return strs.length === 0;
                }
            });
            return strs.join('');
        };
        Node.prototype.genCSS = function (context, output) {
            output.add(this.value);
        };
        Node.prototype.accept = function (visitor) {
            this.value = visitor.visit(this.value);
        };
        Node.prototype.eval = function () { return this; };
        Node.prototype._operate = function (context, op, a, b) {
            switch (op) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
            }
        };
        Node.prototype.fround = function (context, value) {
            var precision = context && context.numPrecision;
            // add "epsilon" to ensure numbers like 1.000000005 (represented as 1.000000004999...) are properly rounded:
            return (precision) ? Number((value + 2e-16).toFixed(precision)) : value;
        };
        Node.compare = function (a, b) {
            /* returns:
             -1: a < b
             0: a = b
             1: a > b
             and *any* other value for a != b (e.g. undefined, NaN, -2 etc.) */
            if ((a.compare) &&
                // for "symmetric results" force toCSS-based comparison
                // of Quoted or Anonymous if either value is one of those
                !(b.type === 'Quoted' || b.type === 'Anonymous')) {
                return a.compare(b);
            }
            else if (b.compare) {
                return -b.compare(a);
            }
            else if (a.type !== b.type) {
                return undefined;
            }
            a = a.value;
            b = b.value;
            if (!Array.isArray(a)) {
                return a === b ? 0 : undefined;
            }
            if (a.length !== b.length) {
                return undefined;
            }
            for (var i = 0; i < a.length; i++) {
                if (Node.compare(a[i], b[i]) !== 0) {
                    return undefined;
                }
            }
            return 0;
        };
        Node.numericCompare = function (a, b) {
            return a < b ? -1
                : a === b ? 0
                    : a > b ? 1 : undefined;
        };
        // Returns true if this node represents root of ast imported by reference
        Node.prototype.blocksVisibility = function () {
            if (this.visibilityBlocks == null) {
                this.visibilityBlocks = 0;
            }
            return this.visibilityBlocks !== 0;
        };
        Node.prototype.addVisibilityBlock = function () {
            if (this.visibilityBlocks == null) {
                this.visibilityBlocks = 0;
            }
            this.visibilityBlocks = this.visibilityBlocks + 1;
        };
        Node.prototype.removeVisibilityBlock = function () {
            if (this.visibilityBlocks == null) {
                this.visibilityBlocks = 0;
            }
            this.visibilityBlocks = this.visibilityBlocks - 1;
        };
        // Turns on node visibility - if called node will be shown in output regardless
        // of whether it comes from import by reference or not
        Node.prototype.ensureVisibility = function () {
            this.nodeVisible = true;
        };
        // Turns off node visibility - if called node will NOT be shown in output regardless
        // of whether it comes from import by reference or not
        Node.prototype.ensureInvisibility = function () {
            this.nodeVisible = false;
        };
        // return values:
        // false - the node must not be visible
        // true - the node must be visible
        // undefined or null - the node has the same visibility as its parent
        Node.prototype.isVisible = function () {
            return this.nodeVisible;
        };
        Node.prototype.visibilityInfo = function () {
            return {
                visibilityBlocks: this.visibilityBlocks,
                nodeVisible: this.nodeVisible
            };
        };
        Node.prototype.copyVisibilityInfo = function (info) {
            if (!info) {
                return;
            }
            this.visibilityBlocks = info.visibilityBlocks;
            this.nodeVisible = info.nodeVisible;
        };
        return Node;
    }());

    //
    // RGB Colors - #ff0014, #eee
    //
    var Color = function (rgb, a, originalForm) {
        var self = this;
        //
        // The end goal here, is to parse the arguments
        // into an integer triplet, such as `128, 255, 0`
        //
        // This facilitates operations and conversions.
        //
        if (Array.isArray(rgb)) {
            this.rgb = rgb;
        }
        else if (rgb.length >= 6) {
            this.rgb = [];
            rgb.match(/.{2}/g).map(function (c, i) {
                if (i < 3) {
                    self.rgb.push(parseInt(c, 16));
                }
                else {
                    self.alpha = (parseInt(c, 16)) / 255;
                }
            });
        }
        else {
            this.rgb = [];
            rgb.split('').map(function (c, i) {
                if (i < 3) {
                    self.rgb.push(parseInt(c + c, 16));
                }
                else {
                    self.alpha = (parseInt(c + c, 16)) / 255;
                }
            });
        }
        this.alpha = this.alpha || (typeof a === 'number' ? a : 1);
        if (typeof originalForm !== 'undefined') {
            this.value = originalForm;
        }
    };
    Color.prototype = Object.assign(new Node(), {
        type: 'Color',
        luma: function () {
            var r = this.rgb[0] / 255, g = this.rgb[1] / 255, b = this.rgb[2] / 255;
            r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
            g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
            b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        },
        genCSS: function (context, output) {
            output.add(this.toCSS(context));
        },
        toCSS: function (context, doNotCompress) {
            var compress = context && context.compress && !doNotCompress;
            var color;
            var alpha;
            var colorFunction;
            var args = [];
            // `value` is set if this color was originally
            // converted from a named color string so we need
            // to respect this and try to output named color too.
            alpha = this.fround(context, this.alpha);
            if (this.value) {
                if (this.value.indexOf('rgb') === 0) {
                    if (alpha < 1) {
                        colorFunction = 'rgba';
                    }
                }
                else if (this.value.indexOf('hsl') === 0) {
                    if (alpha < 1) {
                        colorFunction = 'hsla';
                    }
                    else {
                        colorFunction = 'hsl';
                    }
                }
                else {
                    return this.value;
                }
            }
            else {
                if (alpha < 1) {
                    colorFunction = 'rgba';
                }
            }
            switch (colorFunction) {
                case 'rgba':
                    args = this.rgb.map(function (c) {
                        return clamp$1(Math.round(c), 255);
                    }).concat(clamp$1(alpha, 1));
                    break;
                case 'hsla':
                    args.push(clamp$1(alpha, 1));
                case 'hsl':
                    color = this.toHSL();
                    args = [
                        this.fround(context, color.h),
                        this.fround(context, color.s * 100) + "%",
                        this.fround(context, color.l * 100) + "%"
                    ].concat(args);
            }
            if (colorFunction) {
                // Values are capped between `0` and `255`, rounded and zero-padded.
                return colorFunction + "(" + args.join("," + (compress ? '' : ' ')) + ")";
            }
            color = this.toRGB();
            if (compress) {
                var splitcolor = color.split('');
                // Convert color to short format
                if (splitcolor[1] === splitcolor[2] && splitcolor[3] === splitcolor[4] && splitcolor[5] === splitcolor[6]) {
                    color = "#" + splitcolor[1] + splitcolor[3] + splitcolor[5];
                }
            }
            return color;
        },
        //
        // Operations have to be done per-channel, if not,
        // channels will spill onto each other. Once we have
        // our result, in the form of an integer triplet,
        // we create a new Color node to hold the result.
        //
        operate: function (context, op, other) {
            var rgb = new Array(3);
            var alpha = this.alpha * (1 - other.alpha) + other.alpha;
            for (var c = 0; c < 3; c++) {
                rgb[c] = this._operate(context, op, this.rgb[c], other.rgb[c]);
            }
            return new Color(rgb, alpha);
        },
        toRGB: function () {
            return toHex(this.rgb);
        },
        toHSL: function () {
            var r = this.rgb[0] / 255, g = this.rgb[1] / 255, b = this.rgb[2] / 255, a = this.alpha;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h;
            var s;
            var l = (max + min) / 2;
            var d = max - min;
            if (max === min) {
                h = s = 0;
            }
            else {
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return { h: h * 360, s: s, l: l, a: a };
        },
        // Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        toHSV: function () {
            var r = this.rgb[0] / 255, g = this.rgb[1] / 255, b = this.rgb[2] / 255, a = this.alpha;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h;
            var s;
            var v = max;
            var d = max - min;
            if (max === 0) {
                s = 0;
            }
            else {
                s = d / max;
            }
            if (max === min) {
                h = 0;
            }
            else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return { h: h * 360, s: s, v: v, a: a };
        },
        toARGB: function () {
            return toHex([this.alpha * 255].concat(this.rgb));
        },
        compare: function (x) {
            return (x.rgb &&
                x.rgb[0] === this.rgb[0] &&
                x.rgb[1] === this.rgb[1] &&
                x.rgb[2] === this.rgb[2] &&
                x.alpha === this.alpha) ? 0 : undefined;
        }
    });
    Color.fromKeyword = function (keyword) {
        var c;
        var key = keyword.toLowerCase();
        if (colors.hasOwnProperty(key)) {
            c = new Color(colors[key].slice(1));
        }
        else if (key === 'transparent') {
            c = new Color([0, 0, 0], 0);
        }
        if (c) {
            c.value = keyword;
            return c;
        }
    };
    function clamp$1(v, max) {
        return Math.min(Math.max(v, 0), max);
    }
    function toHex(v) {
        return "#" + v.map(function (c) {
            c = clamp$1(Math.round(c), 255);
            return (c < 16 ? '0' : '') + c.toString(16);
        }).join('');
    }

    var Paren = function (node) {
        this.value = node;
    };
    Paren.prototype = Object.assign(new Node(), {
        type: 'Paren',
        genCSS: function (context, output) {
            output.add('(');
            this.value.genCSS(context, output);
            output.add(')');
        },
        eval: function (context) {
            return new Paren(this.value.eval(context));
        }
    });

    var _noSpaceCombinators = {
        '': true,
        ' ': true,
        '|': true
    };
    var Combinator = function (value) {
        if (value === ' ') {
            this.value = ' ';
            this.emptyOrWhitespace = true;
        }
        else {
            this.value = value ? value.trim() : '';
            this.emptyOrWhitespace = this.value === '';
        }
    };
    Combinator.prototype = Object.assign(new Node(), {
        type: 'Combinator',
        genCSS: function (context, output) {
            var spaceOrEmpty = (context.compress || _noSpaceCombinators[this.value]) ? '' : ' ';
            output.add(spaceOrEmpty + this.value + spaceOrEmpty);
        }
    });

    var Element = function (combinator, value, isVariable, index, currentFileInfo, visibilityInfo) {
        this.combinator = combinator instanceof Combinator ?
            combinator : new Combinator(combinator);
        if (typeof value === 'string') {
            this.value = value.trim();
        }
        else if (value) {
            this.value = value;
        }
        else {
            this.value = '';
        }
        this.isVariable = isVariable;
        this._index = index;
        this._fileInfo = currentFileInfo;
        this.copyVisibilityInfo(visibilityInfo);
        this.setParent(this.combinator, this);
    };
    Element.prototype = Object.assign(new Node(), {
        type: 'Element',
        accept: function (visitor) {
            var value = this.value;
            this.combinator = visitor.visit(this.combinator);
            if (typeof value === 'object') {
                this.value = visitor.visit(value);
            }
        },
        eval: function (context) {
            return new Element(this.combinator, this.value.eval ? this.value.eval(context) : this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo());
        },
        clone: function () {
            return new Element(this.combinator, this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo());
        },
        genCSS: function (context, output) {
            output.add(this.toCSS(context), this.fileInfo(), this.getIndex());
        },
        toCSS: function (context) {
            context = context || {};
            var value = this.value;
            var firstSelector = context.firstSelector;
            if (value instanceof Paren) {
                // selector in parens should not be affected by outer selector
                // flags (breaks only interpolated selectors - see #1973)
                context.firstSelector = true;
            }
            value = value.toCSS ? value.toCSS(context) : value;
            context.firstSelector = firstSelector;
            if (value === '' && this.combinator.value.charAt(0) === '&') {
                return '';
            }
            else {
                return this.combinator.toCSS(context) + value;
            }
        }
    });

    var Math$1 = {
        ALWAYS: 0,
        PARENS_DIVISION: 1,
        PARENS: 2
        // removed - STRICT_LEGACY: 3
    };
    var RewriteUrls = {
        OFF: 0,
        LOCAL: 1,
        ALL: 2
    };

    /**
     * Returns the object type of the given payload
     *
     * @param {*} payload
     * @returns {string}
     */
    function getType(payload) {
        return Object.prototype.toString.call(payload).slice(8, -1);
    }
    /**
     * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
     *
     * @param {*} payload
     * @returns {payload is Record<string, any>}
     */
    function isPlainObject(payload) {
        if (getType(payload) !== 'Object')
            return false;
        return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
    }
    /**
     * Returns whether the payload is an array
     *
     * @param {any} payload
     * @returns {payload is any[]}
     */
    function isArray(payload) {
        return getType(payload) === 'Array';
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
        var propType = {}.propertyIsEnumerable.call(originalObject, key)
            ? 'enumerable'
            : 'nonenumerable';
        if (propType === 'enumerable')
            carry[key] = newVal;
        if (includeNonenumerable && propType === 'nonenumerable') {
            Object.defineProperty(carry, key, {
                value: newVal,
                enumerable: false,
                writable: true,
                configurable: true,
            });
        }
    }
    /**
     * Copy (clone) an object and all its props recursively to get rid of any prop referenced of the original object. Arrays are also cloned, however objects inside arrays are still linked.
     *
     * @export
     * @template T
     * @param {T} target Target can be anything
     * @param {Options} [options={}] Options can be `props` or `nonenumerable`
     * @returns {T} the target with replaced values
     * @export
     */
    function copy(target, options) {
        if (options === void 0) { options = {}; }
        if (isArray(target))
            return target.map(function (i) { return copy(i, options); });
        if (!isPlainObject(target))
            return target;
        var props = Object.getOwnPropertyNames(target);
        var symbols = Object.getOwnPropertySymbols(target);
        return __spreadArrays(props, symbols).reduce(function (carry, key) {
            if (isArray(options.props) && !options.props.includes(key)) {
                return carry;
            }
            var val = target[key];
            var newVal = copy(val, options);
            assignProp(carry, key, newVal, target, options.nonenumerable);
            return carry;
        }, {});
    }

    /* jshint proto: true */
    function getLocation(index, inputStream) {
        var n = index + 1;
        var line = null;
        var column = -1;
        while (--n >= 0 && inputStream.charAt(n) !== '\n') {
            column++;
        }
        if (typeof index === 'number') {
            line = (inputStream.slice(0, index).match(/\n/g) || '').length;
        }
        return {
            line: line,
            column: column
        };
    }
    function copyArray(arr) {
        var i;
        var length = arr.length;
        var copy = new Array(length);
        for (i = 0; i < length; i++) {
            copy[i] = arr[i];
        }
        return copy;
    }
    function clone(obj) {
        var cloned = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cloned[prop] = obj[prop];
            }
        }
        return cloned;
    }
    function defaults(obj1, obj2) {
        var newObj = obj2 || {};
        if (!obj2._defaults) {
            newObj = {};
            var defaults_1 = copy(obj1);
            newObj._defaults = defaults_1;
            var cloned = obj2 ? copy(obj2) : {};
            Object.assign(newObj, defaults_1, cloned);
        }
        return newObj;
    }
    function copyOptions(obj1, obj2) {
        if (obj2 && obj2._defaults) {
            return obj2;
        }
        var opts = defaults(obj1, obj2);
        if (opts.strictMath) {
            opts.math = Math$1.PARENS;
        }
        // Back compat with changed relativeUrls option
        if (opts.relativeUrls) {
            opts.rewriteUrls = RewriteUrls.ALL;
        }
        if (typeof opts.math === 'string') {
            switch (opts.math.toLowerCase()) {
                case 'always':
                    opts.math = Math$1.ALWAYS;
                    break;
                case 'parens-division':
                    opts.math = Math$1.PARENS_DIVISION;
                    break;
                case 'strict':
                case 'parens':
                    opts.math = Math$1.PARENS;
                    break;
                default:
                    opts.math = Math$1.PARENS;
            }
        }
        if (typeof opts.rewriteUrls === 'string') {
            switch (opts.rewriteUrls.toLowerCase()) {
                case 'off':
                    opts.rewriteUrls = RewriteUrls.OFF;
                    break;
                case 'local':
                    opts.rewriteUrls = RewriteUrls.LOCAL;
                    break;
                case 'all':
                    opts.rewriteUrls = RewriteUrls.ALL;
                    break;
            }
        }
        return opts;
    }
    function merge(obj1, obj2) {
        for (var prop in obj2) {
            if (obj2.hasOwnProperty(prop)) {
                obj1[prop] = obj2[prop];
            }
        }
        return obj1;
    }
    function flattenArray(arr, result) {
        if (result === void 0) { result = []; }
        for (var i = 0, length_1 = arr.length; i < length_1; i++) {
            var value = arr[i];
            if (Array.isArray(value)) {
                flattenArray(value, result);
            }
            else {
                if (value !== undefined) {
                    result.push(value);
                }
            }
        }
        return result;
    }

    var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getLocation: getLocation,
        copyArray: copyArray,
        clone: clone,
        defaults: defaults,
        copyOptions: copyOptions,
        merge: merge,
        flattenArray: flattenArray
    });

    var anonymousFunc = /(<anonymous>|Function):(\d+):(\d+)/;
    /**
     * This is a centralized class of any error that could be thrown internally (mostly by the parser).
     * Besides standard .message it keeps some additional data like a path to the file where the error
     * occurred along with line and column numbers.
     *
     * @class
     * @extends Error
     * @type {module.LessError}
     *
     * @prop {string} type
     * @prop {string} filename
     * @prop {number} index
     * @prop {number} line
     * @prop {number} column
     * @prop {number} callLine
     * @prop {number} callExtract
     * @prop {string[]} extract
     *
     * @param {Object} e              - An error object to wrap around or just a descriptive object
     * @param {Object} fileContentMap - An object with file contents in 'contents' property (like importManager) @todo - move to fileManager?
     * @param {string} [currentFilename]
     */
    var LessError = function (e, fileContentMap, currentFilename) {
        Error.call(this);
        var filename = e.filename || currentFilename;
        this.message = e.message;
        this.stack = e.stack;
        if (fileContentMap && filename) {
            var input = fileContentMap.contents[filename];
            var loc = getLocation(e.index, input);
            var line = loc.line;
            var col = loc.column;
            var callLine = e.call && getLocation(e.call, input).line;
            var lines = input ? input.split('\n') : '';
            this.type = e.type || 'Syntax';
            this.filename = filename;
            this.index = e.index;
            this.line = typeof line === 'number' ? line + 1 : null;
            this.column = col;
            if (!this.line && this.stack) {
                var found = this.stack.match(anonymousFunc);
                /**
                 * We have to figure out how this environment stringifies anonymous functions
                 * so we can correctly map plugin errors.
                 *
                 * Note, in Node 8, the output of anonymous funcs varied based on parameters
                 * being present or not, so we inject dummy params.
                 */
                var func = new Function('a', 'throw new Error()');
                var lineAdjust = 0;
                try {
                    func();
                }
                catch (e) {
                    var match = e.stack.match(anonymousFunc);
                    var line = parseInt(match[2]);
                    lineAdjust = 1 - line;
                }
                if (found) {
                    if (found[2]) {
                        this.line = parseInt(found[2]) + lineAdjust;
                    }
                    if (found[3]) {
                        this.column = parseInt(found[3]);
                    }
                }
            }
            this.callLine = callLine + 1;
            this.callExtract = lines[callLine];
            this.extract = [
                lines[this.line - 2],
                lines[this.line - 1],
                lines[this.line]
            ];
        }
    };
    if (typeof Object.create === 'undefined') {
        var F = function () { };
        F.prototype = Error.prototype;
        LessError.prototype = new F();
    }
    else {
        LessError.prototype = Object.create(Error.prototype);
    }
    LessError.prototype.constructor = LessError;
    /**
     * An overridden version of the default Object.prototype.toString
     * which uses additional information to create a helpful message.
     *
     * @param {Object} options
     * @returns {string}
     */
    LessError.prototype.toString = function (options) {
        options = options || {};
        var message = '';
        var extract = this.extract || [];
        var error = [];
        var stylize = function (str) { return str; };
        if (options.stylize) {
            var type = typeof options.stylize;
            if (type !== 'function') {
                throw Error("options.stylize should be a function, got a " + type + "!");
            }
            stylize = options.stylize;
        }
        if (this.line !== null) {
            if (typeof extract[0] === 'string') {
                error.push(stylize(this.line - 1 + " " + extract[0], 'grey'));
            }
            if (typeof extract[1] === 'string') {
                var errorTxt = this.line + " ";
                if (extract[1]) {
                    errorTxt += extract[1].slice(0, this.column) +
                        stylize(stylize(stylize(extract[1].substr(this.column, 1), 'bold') +
                            extract[1].slice(this.column + 1), 'red'), 'inverse');
                }
                error.push(errorTxt);
            }
            if (typeof extract[2] === 'string') {
                error.push(stylize(this.line + 1 + " " + extract[2], 'grey'));
            }
            error = error.join('\n') + stylize('', 'reset') + "\n";
        }
        message += stylize(this.type + "Error: " + this.message, 'red');
        if (this.filename) {
            message += stylize(' in ', 'red') + this.filename;
        }
        if (this.line) {
            message += stylize(" on line " + this.line + ", column " + (this.column + 1) + ":", 'grey');
        }
        message += "\n" + error;
        if (this.callLine) {
            message += stylize('from ', 'red') + (this.filename || '') + "/n";
            message += stylize(this.callLine, 'grey') + " " + this.callExtract + "/n";
        }
        return message;
    };

    var Selector = function (elements, extendList, condition, index, currentFileInfo, visibilityInfo) {
        this.extendList = extendList;
        this.condition = condition;
        this.evaldCondition = !condition;
        this._index = index;
        this._fileInfo = currentFileInfo;
        this.elements = this.getElements(elements);
        this.mixinElements_ = undefined;
        this.copyVisibilityInfo(visibilityInfo);
        this.setParent(this.elements, this);
    };
    Selector.prototype = Object.assign(new Node(), {
        type: 'Selector',
        accept: function (visitor) {
            if (this.elements) {
                this.elements = visitor.visitArray(this.elements);
            }
            if (this.extendList) {
                this.extendList = visitor.visitArray(this.extendList);
            }
            if (this.condition) {
                this.condition = visitor.visit(this.condition);
            }
        },
        createDerived: function (elements, extendList, evaldCondition) {
            elements = this.getElements(elements);
            var newSelector = new Selector(elements, extendList || this.extendList, null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
            newSelector.evaldCondition = (evaldCondition != null) ? evaldCondition : this.evaldCondition;
            newSelector.mediaEmpty = this.mediaEmpty;
            return newSelector;
        },
        getElements: function (els) {
            if (!els) {
                return [new Element('', '&', false, this._index, this._fileInfo)];
            }
            if (typeof els === 'string') {
                this.parse.parseNode(els, ['selector'], this._index, this._fileInfo, function (err, result) {
                    if (err) {
                        throw new LessError({
                            index: err.index,
                            message: err.message
                        }, this.parse.imports, this._fileInfo.filename);
                    }
                    els = result[0].elements;
                });
            }
            return els;
        },
        createEmptySelectors: function () {
            var el = new Element('', '&', false, this._index, this._fileInfo), sels = [new Selector([el], null, null, this._index, this._fileInfo)];
            sels[0].mediaEmpty = true;
            return sels;
        },
        match: function (other) {
            var elements = this.elements;
            var len = elements.length;
            var olen;
            var i;
            other = other.mixinElements();
            olen = other.length;
            if (olen === 0 || len < olen) {
                return 0;
            }
            else {
                for (i = 0; i < olen; i++) {
                    if (elements[i].value !== other[i]) {
                        return 0;
                    }
                }
            }
            return olen; // return number of matched elements
        },
        mixinElements: function () {
            if (this.mixinElements_) {
                return this.mixinElements_;
            }
            var elements = this.elements.map(function (v) {
                return v.combinator.value + (v.value.value || v.value);
            }).join('').match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);
            if (elements) {
                if (elements[0] === '&') {
                    elements.shift();
                }
            }
            else {
                elements = [];
            }
            return (this.mixinElements_ = elements);
        },
        isJustParentSelector: function () {
            return !this.mediaEmpty &&
                this.elements.length === 1 &&
                this.elements[0].value === '&' &&
                (this.elements[0].combinator.value === ' ' || this.elements[0].combinator.value === '');
        },
        eval: function (context) {
            var evaldCondition = this.condition && this.condition.eval(context);
            var elements = this.elements;
            var extendList = this.extendList;
            elements = elements && elements.map(function (e) { return e.eval(context); });
            extendList = extendList && extendList.map(function (extend) { return extend.eval(context); });
            return this.createDerived(elements, extendList, evaldCondition);
        },
        genCSS: function (context, output) {
            var i, element;
            if ((!context || !context.firstSelector) && this.elements[0].combinator.value === '') {
                output.add(' ', this.fileInfo(), this.getIndex());
            }
            for (i = 0; i < this.elements.length; i++) {
                element = this.elements[i];
                element.genCSS(context, output);
            }
        },
        getIsOutput: function () {
            return this.evaldCondition;
        }
    });

    var Value = function (value) {
        if (!value) {
            throw new Error('Value requires an array argument');
        }
        if (!Array.isArray(value)) {
            this.value = [value];
        }
        else {
            this.value = value;
        }
    };
    Value.prototype = Object.assign(new Node(), {
        type: 'Value',
        accept: function (visitor) {
            if (this.value) {
                this.value = visitor.visitArray(this.value);
            }
        },
        eval: function (context) {
            if (this.value.length === 1) {
                return this.value[0].eval(context);
            }
            else {
                return new Value(this.value.map(function (v) {
                    return v.eval(context);
                }));
            }
        },
        genCSS: function (context, output) {
            var i;
            for (i = 0; i < this.value.length; i++) {
                this.value[i].genCSS(context, output);
                if (i + 1 < this.value.length) {
                    output.add((context && context.compress) ? ',' : ', ');
                }
            }
        }
    });

    var Keyword = function (value) {
        this.value = value;
    };
    Keyword.prototype = Object.assign(new Node(), {
        type: 'Keyword',
        genCSS: function (context, output) {
            if (this.value === '%') {
                throw { type: 'Syntax', message: 'Invalid % without number' };
            }
            output.add(this.value);
        }
    });
    Keyword.True = new Keyword('true');
    Keyword.False = new Keyword('false');

    var Anonymous = function (value, index, currentFileInfo, mapLines, rulesetLike, visibilityInfo) {
        this.value = value;
        this._index = index;
        this._fileInfo = currentFileInfo;
        this.mapLines = mapLines;
        this.rulesetLike = (typeof rulesetLike === 'undefined') ? false : rulesetLike;
        this.allowRoot = true;
        this.copyVisibilityInfo(visibilityInfo);
    };
    Anonymous.prototype = Object.assign(new Node(), {
        type: 'Anonymous',
        eval: function () {
            return new Anonymous(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo());
        },
        compare: function (other) {
            return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
        },
        isRulesetLike: function () {
            return this.rulesetLike;
        },
        genCSS: function (context, output) {
            this.nodeVisible = Boolean(this.value);
            if (this.nodeVisible) {
                output.add(this.value, this._fileInfo, this._index, this.mapLines);
            }
        }
    });

    var MATH$1 = Math$1;
    function evalName(context, name) {
        var value = '';
        var i;
        var n = name.length;
        var output = { add: function (s) { value += s; } };
        for (i = 0; i < n; i++) {
            name[i].eval(context).genCSS(context, output);
        }
        return value;
    }
    var Declaration = function (name, value, important, merge, index, currentFileInfo, inline, variable) {
        this.name = name;
        this.value = (value instanceof Node) ? value : new Value([value ? new Anonymous(value) : null]);
        this.important = important ? " " + important.trim() : '';
        this.merge = merge;
        this._index = index;
        this._fileInfo = currentFileInfo;
        this.inline = inline || false;
        this.variable = (variable !== undefined) ? variable
            : (name.charAt && (name.charAt(0) === '@'));
        this.allowRoot = true;
        this.setParent(this.value, this);
    };
    Declaration.prototype = Object.assign(new Node(), {
        type: 'Declaration',
        genCSS: function (context, output) {
            output.add(this.name + (context.compress ? ':' : ': '), this.fileInfo(), this.getIndex());
            try {
                this.value.genCSS(context, output);
            }
            catch (e) {
                e.index = this._index;
                e.filename = this._fileInfo.filename;
                throw e;
            }
            output.add(this.important + ((this.inline || (context.lastRule && context.compress)) ? '' : ';'), this._fileInfo, this._index);
        },
        eval: function (context) {
            var mathBypass = false, prevMath, name = this.name, evaldValue, variable = this.variable;
            if (typeof name !== 'string') {
                // expand 'primitive' name directly to get
                // things faster (~10% for benchmark.less):
                name = (name.length === 1) && (name[0] instanceof Keyword) ?
                    name[0].value : evalName(context, name);
                variable = false; // never treat expanded interpolation as new variable name
            }
            // @todo remove when parens-division is default
            if (name === 'font' && context.math === MATH$1.ALWAYS) {
                mathBypass = true;
                prevMath = context.math;
                context.math = MATH$1.PARENS_DIVISION;
            }
            try {
                context.importantScope.push({});
                evaldValue = this.value.eval(context);
                if (!this.variable && evaldValue.type === 'DetachedRuleset') {
                    throw { message: 'Rulesets cannot be evaluated on a property.',
                        index: this.getIndex(), filename: this.fileInfo().filename };
                }
                var important = this.important;
                var importantResult = context.importantScope.pop();
                if (!important && importantResult.important) {
                    important = importantResult.important;
                }
                return new Declaration(name, evaldValue, important, this.merge, this.getIndex(), this.fileInfo(), this.inline, variable);
            }
            catch (e) {
                if (typeof e.index !== 'number') {
                    e.index = this.getIndex();
                    e.filename = this.fileInfo().filename;
                }
                throw e;
            }
            finally {
                if (mathBypass) {
                    context.math = prevMath;
                }
            }
        },
        makeImportant: function () {
            return new Declaration(this.name, this.value, '!important', this.merge, this.getIndex(), this.fileInfo(), this.inline);
        }
    });

    var debugInfo = /** @class */ (function () {
        function debugInfo(context, ctx, lineSeparator) {
            var result = '';
            if (context.dumpLineNumbers && !context.compress) {
                switch (context.dumpLineNumbers) {
                    case 'comments':
                        result = debugInfo.asComment(ctx);
                        break;
                    case 'mediaquery':
                        result = debugInfo.asMediaQuery(ctx);
                        break;
                    case 'all':
                        result = debugInfo.asComment(ctx) + (lineSeparator || '') + debugInfo.asMediaQuery(ctx);
                        break;
                }
            }
            return result;
        }
        debugInfo.asComment = function (ctx) {
            return "/* line " + ctx.debugInfo.lineNumber + ", " + ctx.debugInfo.fileName + " */\n";
        };
        debugInfo.asMediaQuery = function (ctx) {
            var filenameWithProtocol = ctx.debugInfo.fileName;
            if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
                filenameWithProtocol = "file://" + filenameWithProtocol;
            }
            return "@media -sass-debug-info{filename{font-family:" + filenameWithProtocol.replace(/([.:\/\\])/g, function (a) {
                if (a == '\\') {
                    a = '\/';
                }
                return "\\" + a;
            }) + "}line{font-family:\\00003" + ctx.debugInfo.lineNumber + "}}\n";
        };
        return debugInfo;
    }());

    var Comment = function (value, isLineComment, index, currentFileInfo) {
        this.value = value;
        this.isLineComment = isLineComment;
        this._index = index;
        this._fileInfo = currentFileInfo;
        this.allowRoot = true;
    };
    Comment.prototype = Object.assign(new Node(), {
        type: 'Comment',
        genCSS: function (context, output) {
            if (this.debugInfo) {
                output.add(debugInfo(context, this), this.fileInfo(), this.getIndex());
            }
            output.add(this.value);
        },
        isSilent: function (context) {
            var isCompressed = context.compress && this.value[2] !== '!';
            return this.isLineComment || isCompressed;
        }
    });

    var contexts = {};
    var copyFromOriginal = function copyFromOriginal(original, destination, propertiesToCopy) {
        if (!original) {
            return;
        }
        for (var i = 0; i < propertiesToCopy.length; i++) {
            if (original.hasOwnProperty(propertiesToCopy[i])) {
                destination[propertiesToCopy[i]] = original[propertiesToCopy[i]];
            }
        }
    };
    /*
     parse is used whilst parsing
     */
    var parseCopyProperties = [
        // options
        'paths',
        'rewriteUrls',
        'rootpath',
        'strictImports',
        'insecure',
        'dumpLineNumbers',
        'compress',
        'syncImport',
        'chunkInput',
        'mime',
        'useFileCache',
        // context
        'processImports',
        // Used by the import manager to stop multiple import visitors being created.
        'pluginManager' // Used as the plugin manager for the session
    ];
    contexts.Parse = function (options) {
        copyFromOriginal(options, this, parseCopyProperties);
        if (typeof this.paths === 'string') {
            this.paths = [this.paths];
        }
    };
    var evalCopyProperties = [
        'paths',
        'compress',
        'math',
        'strictUnits',
        'sourceMap',
        'importMultiple',
        'urlArgs',
        'javascriptEnabled',
        'pluginManager',
        'importantScope',
        'rewriteUrls' // option - whether to adjust URL's to be relative
    ];
    contexts.Eval = function (options, frames) {
        copyFromOriginal(options, this, evalCopyProperties);
        if (typeof this.paths === 'string') {
            this.paths = [this.paths];
        }
        this.frames = frames || [];
        this.importantScope = this.importantScope || [];
    };
    contexts.Eval.prototype.enterCalc = function () {
        if (!this.calcStack) {
            this.calcStack = [];
        }
        this.calcStack.push(true);
        this.inCalc = true;
    };
    contexts.Eval.prototype.exitCalc = function () {
        this.calcStack.pop();
        if (!this.calcStack.length) {
            this.inCalc = false;
        }
    };
    contexts.Eval.prototype.inParenthesis = function () {
        if (!this.parensStack) {
            this.parensStack = [];
        }
        this.parensStack.push(true);
    };
    contexts.Eval.prototype.outOfParenthesis = function () {
        this.parensStack.pop();
    };
    contexts.Eval.prototype.inCalc = false;
    contexts.Eval.prototype.mathOn = true;
    contexts.Eval.prototype.isMathOn = function (op) {
        if (!this.mathOn) {
            return false;
        }
        if (op === '/' && this.math !== Math$1.ALWAYS && (!this.parensStack || !this.parensStack.length)) {
            return false;
        }
        if (this.math > Math$1.PARENS_DIVISION) {
            return this.parensStack && this.parensStack.length;
        }
        return true;
    };
    contexts.Eval.prototype.pathRequiresRewrite = function (path) {
        var isRelative = this.rewriteUrls === RewriteUrls.LOCAL ? isPathLocalRelative : isPathRelative;
        return isRelative(path);
    };
    contexts.Eval.prototype.rewritePath = function (path, rootpath) {
        var newPath;
        rootpath = rootpath || '';
        newPath = this.normalizePath(rootpath + path);
        // If a path was explicit relative and the rootpath was not an absolute path
        // we must ensure that the new path is also explicit relative.
        if (isPathLocalRelative(path) &&
            isPathRelative(rootpath) &&
            isPathLocalRelative(newPath) === false) {
            newPath = "./" + newPath;
        }
        return newPath;
    };
    contexts.Eval.prototype.normalizePath = function (path) {
        var segments = path.split('/').reverse();
        var segment;
        path = [];
        while (segments.length !== 0) {
            segment = segments.pop();
            switch (segment) {
                case '.':
                    break;
                case '..':
                    if ((path.length === 0) || (path[path.length - 1] === '..')) {
                        path.push(segment);
                    }
                    else {
                        path.pop();
                    }
                    break;
                default:
                    path.push(segment);
                    break;
            }
        }
        return path.join('/');
    };
    function isPathRelative(path) {
        return !/^(?:[a-z-]+:|\/|#)/i.test(path);
    }
    function isPathLocalRelative(path) {
        return path.charAt(0) === '.';
    }
    // todo - do the same for the toCSS ?

    function makeRegistry(base) {
        return {
            _data: {},
            add: function (name, func) {
                // precautionary case conversion, as later querying of
                // the registry by function-caller uses lower case as well.
                name = name.toLowerCase();
                if (this._data.hasOwnProperty(name)) ;
                this._data[name] = func;
            },
            addMultiple: function (functions) {
                var _this = this;
                Object.keys(functions).forEach(function (name) {
                    _this.add(name, functions[name]);
                });
            },
            get: function (name) {
                return this._data[name] || (base && base.get(name));
            },
            getLocalFunctions: function () {
                return this._data;
            },
            inherit: function () {
                return makeRegistry(this);
            },
            create: function (base) {
                return makeRegistry(base);
            }
        };
    }
    var functionRegistry = makeRegistry(null);

    var defaultFunc = {
        eval: function () {
            var v = this.value_;
            var e = this.error_;
            if (e) {
                throw e;
            }
            if (v != null) {
                return v ? Keyword.True : Keyword.False;
            }
        },
        value: function (v) {
            this.value_ = v;
        },
        error: function (e) {
            this.error_ = e;
        },
        reset: function () {
            this.value_ = this.error_ = null;
        }
    };

    var Ruleset = function (selectors, rules, strictImports, visibilityInfo) {
        this.selectors = selectors;
        this.rules = rules;
        this._lookups = {};
        this._variables = null;
        this._properties = null;
        this.strictImports = strictImports;
        this.copyVisibilityInfo(visibilityInfo);
        this.allowRoot = true;
        this.setParent(this.selectors, this);
        this.setParent(this.rules, this);
    };
    Ruleset.prototype = Object.assign(new Node(), {
        type: 'Ruleset',
        isRuleset: true,
        isRulesetLike: function () { return true; },
        accept: function (visitor) {
            if (this.paths) {
                this.paths = visitor.visitArray(this.paths, true);
            }
            else if (this.selectors) {
                this.selectors = visitor.visitArray(this.selectors);
            }
            if (this.rules && this.rules.length) {
                this.rules = visitor.visitArray(this.rules);
            }
        },
        eval: function (context) {
            var selectors;
            var selCnt;
            var selector;
            var i;
            var hasVariable;
            var hasOnePassingSelector = false;
            if (this.selectors && (selCnt = this.selectors.length)) {
                selectors = new Array(selCnt);
                defaultFunc.error({
                    type: 'Syntax',
                    message: 'it is currently only allowed in parametric mixin guards,'
                });
                for (i = 0; i < selCnt; i++) {
                    selector = this.selectors[i].eval(context);
                    for (var j = 0; j < selector.elements.length; j++) {
                        if (selector.elements[j].isVariable) {
                            hasVariable = true;
                            break;
                        }
                    }
                    selectors[i] = selector;
                    if (selector.evaldCondition) {
                        hasOnePassingSelector = true;
                    }
                }
                if (hasVariable) {
                    var toParseSelectors = new Array(selCnt);
                    for (i = 0; i < selCnt; i++) {
                        selector = selectors[i];
                        toParseSelectors[i] = selector.toCSS(context);
                    }
                    this.parse.parseNode(toParseSelectors.join(','), ["selectors"], selectors[0].getIndex(), selectors[0].fileInfo(), function (err, result) {
                        if (result) {
                            selectors = flattenArray(result);
                        }
                    });
                }
                defaultFunc.reset();
            }
            else {
                hasOnePassingSelector = true;
            }
            var rules = this.rules ? copyArray(this.rules) : null;
            var ruleset = new Ruleset(selectors, rules, this.strictImports, this.visibilityInfo());
            var rule;
            var subRule;
            ruleset.originalRuleset = this;
            ruleset.root = this.root;
            ruleset.firstRoot = this.firstRoot;
            ruleset.allowImports = this.allowImports;
            if (this.debugInfo) {
                ruleset.debugInfo = this.debugInfo;
            }
            if (!hasOnePassingSelector) {
                rules.length = 0;
            }
            // inherit a function registry from the frames stack when possible;
            // otherwise from the global registry
            ruleset.functionRegistry = (function (frames) {
                var i = 0;
                var n = frames.length;
                var found;
                for (; i !== n; ++i) {
                    found = frames[i].functionRegistry;
                    if (found) {
                        return found;
                    }
                }
                return functionRegistry;
            }(context.frames)).inherit();
            // push the current ruleset to the frames stack
            var ctxFrames = context.frames;
            ctxFrames.unshift(ruleset);
            // currrent selectors
            var ctxSelectors = context.selectors;
            if (!ctxSelectors) {
                context.selectors = ctxSelectors = [];
            }
            ctxSelectors.unshift(this.selectors);
            // Evaluate imports
            if (ruleset.root || ruleset.allowImports || !ruleset.strictImports) {
                ruleset.evalImports(context);
            }
            // Store the frames around mixin definitions,
            // so they can be evaluated like closures when the time comes.
            var rsRules = ruleset.rules;
            for (i = 0; (rule = rsRules[i]); i++) {
                if (rule.evalFirst) {
                    rsRules[i] = rule.eval(context);
                }
            }
            var mediaBlockCount = (context.mediaBlocks && context.mediaBlocks.length) || 0;
            // Evaluate mixin calls.
            for (i = 0; (rule = rsRules[i]); i++) {
                if (rule.type === 'MixinCall') {
                    /* jshint loopfunc:true */
                    rules = rule.eval(context).filter(function (r) {
                        if ((r instanceof Declaration) && r.variable) {
                            // do not pollute the scope if the variable is
                            // already there. consider returning false here
                            // but we need a way to "return" variable from mixins
                            return !(ruleset.variable(r.name));
                        }
                        return true;
                    });
                    rsRules.splice.apply(rsRules, [i, 1].concat(rules));
                    i += rules.length - 1;
                    ruleset.resetCache();
                }
                else if (rule.type === 'VariableCall') {
                    /* jshint loopfunc:true */
                    rules = rule.eval(context).rules.filter(function (r) {
                        if ((r instanceof Declaration) && r.variable) {
                            // do not pollute the scope at all
                            return false;
                        }
                        return true;
                    });
                    rsRules.splice.apply(rsRules, [i, 1].concat(rules));
                    i += rules.length - 1;
                    ruleset.resetCache();
                }
            }
            // Evaluate everything else
            for (i = 0; (rule = rsRules[i]); i++) {
                if (!rule.evalFirst) {
                    rsRules[i] = rule = rule.eval ? rule.eval(context) : rule;
                }
            }
            // Evaluate everything else
            for (i = 0; (rule = rsRules[i]); i++) {
                // for rulesets, check if it is a css guard and can be removed
                if (rule instanceof Ruleset && rule.selectors && rule.selectors.length === 1) {
                    // check if it can be folded in (e.g. & where)
                    if (rule.selectors[0] && rule.selectors[0].isJustParentSelector()) {
                        rsRules.splice(i--, 1);
                        for (var j = 0; (subRule = rule.rules[j]); j++) {
                            if (subRule instanceof Node) {
                                subRule.copyVisibilityInfo(rule.visibilityInfo());
                                if (!(subRule instanceof Declaration) || !subRule.variable) {
                                    rsRules.splice(++i, 0, subRule);
                                }
                            }
                        }
                    }
                }
            }
            // Pop the stack
            ctxFrames.shift();
            ctxSelectors.shift();
            if (context.mediaBlocks) {
                for (i = mediaBlockCount; i < context.mediaBlocks.length; i++) {
                    context.mediaBlocks[i].bubbleSelectors(selectors);
                }
            }
            return ruleset;
        },
        evalImports: function (context) {
            var rules = this.rules;
            var i;
            var importRules;
            if (!rules) {
                return;
            }
            for (i = 0; i < rules.length; i++) {
                if (rules[i].type === 'Import') {
                    importRules = rules[i].eval(context);
                    if (importRules && (importRules.length || importRules.length === 0)) {
                        rules.splice.apply(rules, [i, 1].concat(importRules));
                        i += importRules.length - 1;
                    }
                    else {
                        rules.splice(i, 1, importRules);
                    }
                    this.resetCache();
                }
            }
        },
        makeImportant: function () {
            var result = new Ruleset(this.selectors, this.rules.map(function (r) {
                if (r.makeImportant) {
                    return r.makeImportant();
                }
                else {
                    return r;
                }
            }), this.strictImports, this.visibilityInfo());
            return result;
        },
        matchArgs: function (args) {
            return !args || args.length === 0;
        },
        // lets you call a css selector with a guard
        matchCondition: function (args, context) {
            var lastSelector = this.selectors[this.selectors.length - 1];
            if (!lastSelector.evaldCondition) {
                return false;
            }
            if (lastSelector.condition &&
                !lastSelector.condition.eval(new contexts.Eval(context, context.frames))) {
                return false;
            }
            return true;
        },
        resetCache: function () {
            this._rulesets = null;
            this._variables = null;
            this._properties = null;
            this._lookups = {};
        },
        variables: function () {
            if (!this._variables) {
                this._variables = !this.rules ? {} : this.rules.reduce(function (hash, r) {
                    if (r instanceof Declaration && r.variable === true) {
                        hash[r.name] = r;
                    }
                    // when evaluating variables in an import statement, imports have not been eval'd
                    // so we need to go inside import statements.
                    // guard against root being a string (in the case of inlined less)
                    if (r.type === 'Import' && r.root && r.root.variables) {
                        var vars = r.root.variables();
                        for (var name_1 in vars) {
                            if (vars.hasOwnProperty(name_1)) {
                                hash[name_1] = r.root.variable(name_1);
                            }
                        }
                    }
                    return hash;
                }, {});
            }
            return this._variables;
        },
        properties: function () {
            if (!this._properties) {
                this._properties = !this.rules ? {} : this.rules.reduce(function (hash, r) {
                    if (r instanceof Declaration && r.variable !== true) {
                        var name_2 = (r.name.length === 1) && (r.name[0] instanceof Keyword) ?
                            r.name[0].value : r.name;
                        // Properties don't overwrite as they can merge
                        if (!hash["$" + name_2]) {
                            hash["$" + name_2] = [r];
                        }
                        else {
                            hash["$" + name_2].push(r);
                        }
                    }
                    return hash;
                }, {});
            }
            return this._properties;
        },
        variable: function (name) {
            var decl = this.variables()[name];
            if (decl) {
                return this.parseValue(decl);
            }
        },
        property: function (name) {
            var decl = this.properties()[name];
            if (decl) {
                return this.parseValue(decl);
            }
        },
        lastDeclaration: function () {
            for (var i = this.rules.length; i > 0; i--) {
                var decl = this.rules[i - 1];
                if (decl instanceof Declaration) {
                    return this.parseValue(decl);
                }
            }
        },
        parseValue: function (toParse) {
            var self = this;
            function transformDeclaration(decl) {
                if (decl.value instanceof Anonymous && !decl.parsed) {
                    if (typeof decl.value.value === 'string') {
                        this.parse.parseNode(decl.value.value, ['value', 'important'], decl.value.getIndex(), decl.fileInfo(), function (err, result) {
                            if (err) {
                                decl.parsed = true;
                            }
                            if (result) {
                                decl.value = result[0];
                                decl.important = result[1] || '';
                                decl.parsed = true;
                            }
                        });
                    }
                    else {
                        decl.parsed = true;
                    }
                    return decl;
                }
                else {
                    return decl;
                }
            }
            if (!Array.isArray(toParse)) {
                return transformDeclaration.call(self, toParse);
            }
            else {
                var nodes_1 = [];
                toParse.forEach(function (n) {
                    nodes_1.push(transformDeclaration.call(self, n));
                });
                return nodes_1;
            }
        },
        rulesets: function () {
            if (!this.rules) {
                return [];
            }
            var filtRules = [];
            var rules = this.rules;
            var i;
            var rule;
            for (i = 0; (rule = rules[i]); i++) {
                if (rule.isRuleset) {
                    filtRules.push(rule);
                }
            }
            return filtRules;
        },
        prependRule: function (rule) {
            var rules = this.rules;
            if (rules) {
                rules.unshift(rule);
            }
            else {
                this.rules = [rule];
            }
            this.setParent(rule, this);
        },
        find: function (selector, self, filter) {
            self = self || this;
            var rules = [];
            var match;
            var foundMixins;
            var key = selector.toCSS();
            if (key in this._lookups) {
                return this._lookups[key];
            }
            this.rulesets().forEach(function (rule) {
                if (rule !== self) {
                    for (var j = 0; j < rule.selectors.length; j++) {
                        match = selector.match(rule.selectors[j]);
                        if (match) {
                            if (selector.elements.length > match) {
                                if (!filter || filter(rule)) {
                                    foundMixins = rule.find(new Selector(selector.elements.slice(match)), self, filter);
                                    for (var i = 0; i < foundMixins.length; ++i) {
                                        foundMixins[i].path.push(rule);
                                    }
                                    Array.prototype.push.apply(rules, foundMixins);
                                }
                            }
                            else {
                                rules.push({ rule: rule, path: [] });
                            }
                            break;
                        }
                    }
                }
            });
            this._lookups[key] = rules;
            return rules;
        },
        genCSS: function (context, output) {
            var i;
            var j;
            var charsetRuleNodes = [];
            var ruleNodes = [];
            var // Line number debugging
                debugInfo$1;
            var rule;
            var path;
            context.tabLevel = (context.tabLevel || 0);
            if (!this.root) {
                context.tabLevel++;
            }
            var tabRuleStr = context.compress ? '' : Array(context.tabLevel + 1).join('  ');
            var tabSetStr = context.compress ? '' : Array(context.tabLevel).join('  ');
            var sep;
            var charsetNodeIndex = 0;
            var importNodeIndex = 0;
            for (i = 0; (rule = this.rules[i]); i++) {
                if (rule instanceof Comment) {
                    if (importNodeIndex === i) {
                        importNodeIndex++;
                    }
                    ruleNodes.push(rule);
                }
                else if (rule.isCharset && rule.isCharset()) {
                    ruleNodes.splice(charsetNodeIndex, 0, rule);
                    charsetNodeIndex++;
                    importNodeIndex++;
                }
                else if (rule.type === 'Import') {
                    ruleNodes.splice(importNodeIndex, 0, rule);
                    importNodeIndex++;
                }
                else {
                    ruleNodes.push(rule);
                }
            }
            ruleNodes = charsetRuleNodes.concat(ruleNodes);
            // If this is the root node, we don't render
            // a selector, or {}.
            if (!this.root) {
                debugInfo$1 = debugInfo(context, this, tabSetStr);
                if (debugInfo$1) {
                    output.add(debugInfo$1);
                    output.add(tabSetStr);
                }
                var paths = this.paths;
                var pathCnt = paths.length;
                var pathSubCnt = void 0;
                sep = context.compress ? ',' : (",\n" + tabSetStr);
                for (i = 0; i < pathCnt; i++) {
                    path = paths[i];
                    if (!(pathSubCnt = path.length)) {
                        continue;
                    }
                    if (i > 0) {
                        output.add(sep);
                    }
                    context.firstSelector = true;
                    path[0].genCSS(context, output);
                    context.firstSelector = false;
                    for (j = 1; j < pathSubCnt; j++) {
                        path[j].genCSS(context, output);
                    }
                }
                output.add((context.compress ? '{' : ' {\n') + tabRuleStr);
            }
            // Compile rules and rulesets
            for (i = 0; (rule = ruleNodes[i]); i++) {
                if (i + 1 === ruleNodes.length) {
                    context.lastRule = true;
                }
                var currentLastRule = context.lastRule;
                if (rule.isRulesetLike(rule)) {
                    context.lastRule = false;
                }
                if (rule.genCSS) {
                    rule.genCSS(context, output);
                }
                else if (rule.value) {
                    output.add(rule.value.toString());
                }
                context.lastRule = currentLastRule;
                if (!context.lastRule && rule.isVisible()) {
                    output.add(context.compress ? '' : ("\n" + tabRuleStr));
                }
                else {
                    context.lastRule = false;
                }
            }
            if (!this.root) {
                output.add((context.compress ? '}' : "\n" + tabSetStr + "}"));
                context.tabLevel--;
            }
            if (!output.isEmpty() && !context.compress && this.firstRoot) {
                output.add('\n');
            }
        },
        joinSelectors: function (paths, context, selectors) {
            for (var s = 0; s < selectors.length; s++) {
                this.joinSelector(paths, context, selectors[s]);
            }
        },
        joinSelector: function (paths, context, selector) {
            function createParenthesis(elementsToPak, originalElement) {
                var replacementParen, j;
                if (elementsToPak.length === 0) {
                    replacementParen = new Paren(elementsToPak[0]);
                }
                else {
                    var insideParent = new Array(elementsToPak.length);
                    for (j = 0; j < elementsToPak.length; j++) {
                        insideParent[j] = new Element(null, elementsToPak[j], originalElement.isVariable, originalElement._index, originalElement._fileInfo);
                    }
                    replacementParen = new Paren(new Selector(insideParent));
                }
                return replacementParen;
            }
            function createSelector(containedElement, originalElement) {
                var element, selector;
                element = new Element(null, containedElement, originalElement.isVariable, originalElement._index, originalElement._fileInfo);
                selector = new Selector([element]);
                return selector;
            }
            // joins selector path from `beginningPath` with selector path in `addPath`
            // `replacedElement` contains element that is being replaced by `addPath`
            // returns concatenated path
            function addReplacementIntoPath(beginningPath, addPath, replacedElement, originalSelector) {
                var newSelectorPath, lastSelector, newJoinedSelector;
                // our new selector path
                newSelectorPath = [];
                // construct the joined selector - if & is the first thing this will be empty,
                // if not newJoinedSelector will be the last set of elements in the selector
                if (beginningPath.length > 0) {
                    newSelectorPath = copyArray(beginningPath);
                    lastSelector = newSelectorPath.pop();
                    newJoinedSelector = originalSelector.createDerived(copyArray(lastSelector.elements));
                }
                else {
                    newJoinedSelector = originalSelector.createDerived([]);
                }
                if (addPath.length > 0) {
                    // /deep/ is a CSS4 selector - (removed, so should deprecate)
                    // that is valid without anything in front of it
                    // so if the & does not have a combinator that is "" or " " then
                    // and there is a combinator on the parent, then grab that.
                    // this also allows + a { & .b { .a & { ... though not sure why you would want to do that
                    var combinator = replacedElement.combinator;
                    var parentEl = addPath[0].elements[0];
                    if (combinator.emptyOrWhitespace && !parentEl.combinator.emptyOrWhitespace) {
                        combinator = parentEl.combinator;
                    }
                    // join the elements so far with the first part of the parent
                    newJoinedSelector.elements.push(new Element(combinator, parentEl.value, replacedElement.isVariable, replacedElement._index, replacedElement._fileInfo));
                    newJoinedSelector.elements = newJoinedSelector.elements.concat(addPath[0].elements.slice(1));
                }
                // now add the joined selector - but only if it is not empty
                if (newJoinedSelector.elements.length !== 0) {
                    newSelectorPath.push(newJoinedSelector);
                }
                // put together the parent selectors after the join (e.g. the rest of the parent)
                if (addPath.length > 1) {
                    var restOfPath = addPath.slice(1);
                    restOfPath = restOfPath.map(function (selector) {
                        return selector.createDerived(selector.elements, []);
                    });
                    newSelectorPath = newSelectorPath.concat(restOfPath);
                }
                return newSelectorPath;
            }
            // joins selector path from `beginningPath` with every selector path in `addPaths` array
            // `replacedElement` contains element that is being replaced by `addPath`
            // returns array with all concatenated paths
            function addAllReplacementsIntoPath(beginningPath, addPaths, replacedElement, originalSelector, result) {
                var j;
                for (j = 0; j < beginningPath.length; j++) {
                    var newSelectorPath = addReplacementIntoPath(beginningPath[j], addPaths, replacedElement, originalSelector);
                    result.push(newSelectorPath);
                }
                return result;
            }
            function mergeElementsOnToSelectors(elements, selectors) {
                var i, sel;
                if (elements.length === 0) {
                    return;
                }
                if (selectors.length === 0) {
                    selectors.push([new Selector(elements)]);
                    return;
                }
                for (i = 0; (sel = selectors[i]); i++) {
                    // if the previous thing in sel is a parent this needs to join on to it
                    if (sel.length > 0) {
                        sel[sel.length - 1] = sel[sel.length - 1].createDerived(sel[sel.length - 1].elements.concat(elements));
                    }
                    else {
                        sel.push(new Selector(elements));
                    }
                }
            }
            // replace all parent selectors inside `inSelector` by content of `context` array
            // resulting selectors are returned inside `paths` array
            // returns true if `inSelector` contained at least one parent selector
            function replaceParentSelector(paths, context, inSelector) {
                // The paths are [[Selector]]
                // The first list is a list of comma separated selectors
                // The inner list is a list of inheritance separated selectors
                // e.g.
                // .a, .b {
                //   .c {
                //   }
                // }
                // == [[.a] [.c]] [[.b] [.c]]
                //
                var i, j, k, currentElements, newSelectors, selectorsMultiplied, sel, el, hadParentSelector = false, length, lastSelector;
                function findNestedSelector(element) {
                    var maybeSelector;
                    if (!(element.value instanceof Paren)) {
                        return null;
                    }
                    maybeSelector = element.value.value;
                    if (!(maybeSelector instanceof Selector)) {
                        return null;
                    }
                    return maybeSelector;
                }
                // the elements from the current selector so far
                currentElements = [];
                // the current list of new selectors to add to the path.
                // We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
                // by the parents
                newSelectors = [
                    []
                ];
                for (i = 0; (el = inSelector.elements[i]); i++) {
                    // non parent reference elements just get added
                    if (el.value !== '&') {
                        var nestedSelector = findNestedSelector(el);
                        if (nestedSelector != null) {
                            // merge the current list of non parent selector elements
                            // on to the current list of selectors to add
                            mergeElementsOnT
