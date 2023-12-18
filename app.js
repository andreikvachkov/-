(() => {
    "use strict";
    var __webpack_modules__ = {
        794: () => {
            !function webpackUniversalModuleDefinition(root, factory) {
                if ("object" == typeof exports && "object" == typeof module) module.exports = factory(); else if ("function" == typeof define && define.amd) define([], factory); else {
                    var a = factory();
                    for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
                }
            }(window, (function() {
                return modules = [ function(module) {
                    module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}');
                }, function(module, exports, __nested_webpack_require_657__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var $ = __nested_webpack_require_657__(3), window = __nested_webpack_require_657__(2), document = window.document, generateMaskSet = __nested_webpack_require_657__(4).generateMaskSet, analyseMask = __nested_webpack_require_657__(4).analyseMask, maskScope = __nested_webpack_require_657__(8);
                    function Inputmask(alias, options, internal) {
                        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
                        this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, 
                        alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), 
                        this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, 
                        resolveAlias(this.opts.alias, options, this.opts), this.isRTL = this.opts.numericInput), 
                        this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, 
                        this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, 
                        this.mouseEnter = !1, this.originalPlaceholder = void 0;
                    }
                    function resolveAlias(aliasStr, options, opts) {
                        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
                        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), 
                        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
                        !1);
                    }
                    function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                        function importOption(option, optionData) {
                            var attrOption = "" === dataAttribute ? option : dataAttribute + "-" + option;
                            optionData = void 0 !== optionData ? optionData : npt.getAttribute(attrOption), 
                            null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                            userOptions[option] = optionData);
                        }
                        if (!0 === opts.importDataAttributes) {
                            var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                            if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), 
                            dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, 
                            dataoptions) if ("alias" === p.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                            for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), 
                            opts) {
                                if (dataoptions) for (p in optionData = void 0, dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                                importOption(option, optionData);
                            }
                        }
                        return $.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), 
                        "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), 
                        opts.isRTL = !0), Object.keys(userOptions).length;
                    }
                    Inputmask.prototype = {
                        dataAttribute: "data-inputmask",
                        defaults: {
                            _maxTestPos: 500,
                            placeholder: "_",
                            optionalmarker: [ "[", "]" ],
                            quantifiermarker: [ "{", "}" ],
                            groupmarker: [ "(", ")" ],
                            alternatormarker: "|",
                            escapeChar: "\\",
                            mask: null,
                            regex: null,
                            oncomplete: $.noop,
                            onincomplete: $.noop,
                            oncleared: $.noop,
                            repeat: 0,
                            greedy: !1,
                            autoUnmask: !1,
                            removeMaskOnSubmit: !1,
                            clearMaskOnLostFocus: !0,
                            insertMode: !0,
                            insertModeVisual: !0,
                            clearIncomplete: !1,
                            alias: null,
                            onKeyDown: $.noop,
                            onBeforeMask: null,
                            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                            },
                            onBeforeWrite: null,
                            onUnMask: null,
                            showMaskOnFocus: !0,
                            showMaskOnHover: !0,
                            onKeyValidation: $.noop,
                            skipOptionalPartCharacter: " ",
                            numericInput: !1,
                            rightAlign: !1,
                            undoOnEscape: !0,
                            radixPoint: "",
                            _radixDance: !1,
                            groupSeparator: "",
                            keepStatic: null,
                            positionCaretOnTab: !0,
                            tabThrough: !1,
                            supportsInputType: [ "text", "tel", "url", "password", "search" ],
                            ignorables: [ 8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                            isComplete: null,
                            preValidation: null,
                            postValidation: null,
                            staticDefinitionSymbol: void 0,
                            jitMasking: !1,
                            nullable: !0,
                            inputEventOnly: !1,
                            noValuePatching: !1,
                            positionCaretOnClick: "lvp",
                            casing: null,
                            inputmode: "text",
                            importDataAttributes: !0,
                            shiftPositions: !0
                        },
                        definitions: {
                            9: {
                                validator: "[0-9０-９]",
                                definitionSymbol: "*"
                            },
                            a: {
                                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                definitionSymbol: "*"
                            },
                            "*": {
                                validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                            }
                        },
                        aliases: {},
                        masksCache: {},
                        mask: function mask(elems) {
                            var that = this;
                            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                                var scopedOpts = $.extend(!0, {}, that.opts);
                                if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                                    void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, 
                                    el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, 
                                    el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                                    el.inputmask.$el = $(el), el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", that.userOptions), 
                                    maskScope.call(el.inputmask, {
                                        action: "mask"
                                    }));
                                }
                            })), elems && elems[0] && elems[0].inputmask || this;
                        },
                        option: function option(options, noremask) {
                            return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options), 
                            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
                        },
                        unmaskedvalue: function unmaskedvalue(value) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "unmaskedvalue",
                                value
                            });
                        },
                        remove: function remove() {
                            return maskScope.call(this, {
                                action: "remove"
                            });
                        },
                        getemptymask: function getemptymask() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "getemptymask"
                            });
                        },
                        hasMaskedValue: function hasMaskedValue() {
                            return !this.opts.autoUnmask;
                        },
                        isComplete: function isComplete() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "isComplete"
                            });
                        },
                        getmetadata: function getmetadata() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "getmetadata"
                            });
                        },
                        isValid: function isValid(value) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "isValid",
                                value
                            });
                        },
                        format: function format(value, metadata) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "format",
                                value,
                                metadata
                            });
                        },
                        setValue: function setValue(value) {
                            this.el && $(this.el).trigger("setvalue", [ value ]);
                        },
                        analyseMask
                    }, Inputmask.extendDefaults = function(options) {
                        $.extend(!0, Inputmask.prototype.defaults, options);
                    }, Inputmask.extendDefinitions = function(definition) {
                        $.extend(!0, Inputmask.prototype.definitions, definition);
                    }, Inputmask.extendAliases = function(alias) {
                        $.extend(!0, Inputmask.prototype.aliases, alias);
                    }, Inputmask.format = function(value, options, metadata) {
                        return Inputmask(options).format(value, metadata);
                    }, Inputmask.unmask = function(value, options) {
                        return Inputmask(options).unmaskedvalue(value);
                    }, Inputmask.isValid = function(value, options) {
                        return Inputmask(options).isValid(value);
                    }, Inputmask.remove = function(elems) {
                        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                        elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                            el.inputmask && el.inputmask.remove();
                        }));
                    }, Inputmask.setValue = function(elems, value) {
                        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                        elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                            el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [ value ]);
                        }));
                    }, Inputmask.dependencyLib = $, window.Inputmask = Inputmask, module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_9604__) {
                    "use strict";
                    var __WEBPACK_AMD_DEFINE_RESULT__;
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
                    }.call(exports, __nested_webpack_require_9604__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }, function(module, exports, __nested_webpack_require_10316__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var window = __nested_webpack_require_10316__(2), document = window.document;
                    function indexOf(list, elem) {
                        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }
                    function isWindow(obj) {
                        return null != obj && obj === obj.window;
                    }
                    function isArraylike(obj) {
                        var length = "length" in obj && obj.length, ltype = _typeof(obj);
                        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || "array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
                    }
                    function isValidElement(elem) {
                        return elem instanceof Element;
                    }
                    function DependencyLib(elem) {
                        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (null != elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), 
                        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
                    }
                    DependencyLib.prototype = {
                        on: function on(events, handler) {
                            function addEvent(ev, namespace) {
                                elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), 
                                eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], 
                                eventRegistry[ev][namespace].push(handler);
                            }
                            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
                                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                                addEvent(ev, namespace);
                            }
                            return this;
                        },
                        off: function off(events, handler) {
                            var eventRegistry, elem;
                            function removeEvent(ev, namespace, handler) {
                                if (ev in eventRegistry == !0) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), 
                                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                            }
                            function resolveNamespace(ev, namespace) {
                                var hndx, hndL, evts = [];
                                if (0 < ev.length) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                                    ev,
                                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                                    handler: eventRegistry[ev][namespace][hndx]
                                }); else evts.push({
                                    ev,
                                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                                    handler
                                }); else if (0 < namespace.length) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, 
                                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                                    ev: evNdx,
                                    namespace: nmsp,
                                    handler: eventRegistry[evNdx][nmsp][hndx]
                                }); else evts.push({
                                    ev: evNdx,
                                    namespace: nmsp,
                                    handler
                                });
                                return evts;
                            }
                            if (isValidElement(this[0])) {
                                eventRegistry = this[0].eventRegistry, elem = this[0];
                                for (var _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                            }
                            return this;
                        },
                        trigger: function trigger(events, argument_1) {
                            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {
                                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                                if (void 0 !== document && "global" === namespace) {
                                    var evnt, i, params = {
                                        bubbles: !0,
                                        cancelable: !0,
                                        detail: argument_1
                                    };
                                    if (document.createEvent) {
                                        try {
                                            evnt = new CustomEvent(ev, params);
                                        } catch (e) {
                                            evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                                        }
                                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
                                    } else evnt = document.createEventObject(), evnt.eventType = ev, evnt.detail = argument_1, 
                                    events.type && DependencyLib.extend(evnt, events), elem.fireEvent("on" + evnt.eventType, evnt);
                                } else if (void 0 !== eventRegistry[ev]) if (events = events.type ? events : DependencyLib.Event(events), 
                                events.detail = arguments.slice(1), "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);
                            }
                            return this;
                        }
                    }, DependencyLib.isFunction = function(obj) {
                        return "function" == typeof obj;
                    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {
                        return null == arr ? -1 : indexOf(arr, elem, i);
                    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {
                        return "object" === _typeof(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
                    }, DependencyLib.extend = function() {
                        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
                        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
                        i++), "object" === _typeof(target) || DependencyLib.isFunction(target) || (target = {}), 
                        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
                        copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, 
                        src && DependencyLib.isArray(src) ? src : []) : src && DependencyLib.isPlainObject(src) ? src : {}, 
                        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
                        return target;
                    }, DependencyLib.each = function(obj, callback) {
                        var value, i = 0;
                        if (isArraylike(obj)) for (var length = obj.length; i < length && (value = callback.call(obj[i], i, obj[i]), 
                        !1 !== value); i++) ; else for (i in obj) if (value = callback.call(obj[i], i, obj[i]), 
                        !1 === value) break;
                        return obj;
                    }, DependencyLib.data = function(owner, key, value) {
                        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
                        owner.__data = owner.__data || {}, owner.__data[key] = value;
                    }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {
                        params = params || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var evt = document.createEvent("CustomEvent");
                        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
                        evt;
                    }, DependencyLib.Event.prototype = window.Event.prototype), module.exports = DependencyLib;
                }, function(module, exports, __nested_webpack_require_17800__) {
                    "use strict";
                    var $ = __nested_webpack_require_17800__(3);
                    function generateMaskSet(opts, nocache) {
                        var ms;
                        function generateMask(mask, metadata, opts) {
                            var masksetDefinition, maskdefKey, regexMask = !1;
                            if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, 
                            mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
                            0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                                var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                                mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
                            }
                            return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, 
                            !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                                mask,
                                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                                validPositions: {},
                                _buffer: void 0,
                                buffer: void 0,
                                tests: {},
                                excludes: {},
                                metadata,
                                maskLength: void 0,
                                jitOffset: {}
                            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
                            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
                            masksetDefinition;
                        }
                        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                            if (1 < opts.mask.length) {
                                null === opts.keepStatic && (opts.keepStatic = !0);
                                var altMask = opts.groupmarker[0];
                                return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, (function(ndx, msk) {
                                    1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), 
                                    void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                                })), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
                            }
                            opts.mask = opts.mask.pop();
                        }
                        return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), 
                        ms;
                    }
                    function analyseMask(mask, regexMask, opts) {
                        var match, m, openingToken, currentOpeningToken, alternator, lastMatch, tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken, openenings = [], maskTokens = [], closeRegexGroup = !1;
                        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                            this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                            this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                            this.quantifier = {
                                min: 1,
                                max: 1
                            };
                        }
                        function insertTestDefinition(mtoken, element, position) {
                            position = void 0 !== position ? position : mtoken.matches.length;
                            var prevMatch = mtoken.matches[position - 1];
                            if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                                fn: new RegExp(element, opts.casing ? "i" : ""),
                                static: !1,
                                optionality: !1,
                                newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                                casing: null,
                                def: element,
                                placeholder: void 0,
                                nativeDef: element
                            }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), (function(ndx, lmnt) {
                                prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || lmnt,
                                    placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                                    nativeDef: (escaped ? "'" : "") + lmnt
                                });
                            }))), escaped = !1; else {
                                var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                                maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                                    fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                        this.test = maskdef.validator;
                                    } : new RegExp("."),
                                    static: maskdef.static || !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element,
                                    generated: maskdef.generated
                                }) : (mtoken.matches.splice(position++, 0, {
                                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || element,
                                    placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                                    nativeDef: (escaped ? "'" : "") + element
                                }), escaped = !1);
                            }
                        }
                        function verifyGroupMarker(maskToken) {
                            maskToken && maskToken.matches && $.each(maskToken.matches, (function(ndx, token) {
                                var nextToken = maskToken.matches[ndx + 1];
                                (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                                regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), 
                                verifyGroupMarker(token);
                            }));
                        }
                        function defaultCase() {
                            if (0 < openenings.length) {
                                if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                                currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                                    0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                                    currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                                }
                            } else insertTestDefinition(currentToken, m);
                        }
                        function reverseTokens(maskToken) {
                            function reverseStatic(st) {
                                return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), 
                                st;
                            }
                            for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                                var intMatch = parseInt(match);
                                if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                                    var qt = maskToken.matches[match];
                                    maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                                }
                                void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                            }
                            return maskToken;
                        }
                        function groupify(matches) {
                            var groupToken = new MaskToken(!0);
                            return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
                        }
                        function closeGroup() {
                            if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) if (0 < openenings.length) {
                                if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), 
                                currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                                    alternator.matches[mndx].alternatorGroup = !1;
                                    0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                                    currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                                }
                            } else currentToken.matches.push(openingToken); else defaultCase();
                        }
                        function groupQuantifier(matches) {
                            var lastMatch = matches.pop();
                            return lastMatch.isQuantifier && (lastMatch = groupify([ matches.pop(), lastMatch ])), 
                            lastMatch;
                        }
                        for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                            if (m = match[0], regexMask) switch (m.charAt(0)) {
                              case "?":
                                m = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                m = "{" + m + "}";
                                break;

                              case "|":
                                if (0 === openenings.length) {
                                    var altRegexGroup = groupify(currentToken.matches);
                                    altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], 
                                    closeRegexGroup = !0;
                                }
                                break;
                            }
                            if (escaped) defaultCase(); else switch (m.charAt(0)) {
                              case "(?=":
                                break;

                              case "(?!":
                                break;

                              case "(?<=":
                                break;

                              case "(?<!":
                                break;

                              case opts.escapeChar:
                                escaped = !0, regexMask && defaultCase();
                                break;

                              case opts.optionalmarker[1]:
                              case opts.groupmarker[1]:
                                closeGroup();
                                break;

                              case opts.optionalmarker[0]:
                                openenings.push(new MaskToken(!1, !0));
                                break;

                              case opts.groupmarker[0]:
                                openenings.push(new MaskToken(!0));
                                break;

                              case opts.quantifiermarker[0]:
                                var quantifier = new MaskToken(!1, !1, !0);
                                m = m.replace(/[{}]/g, "");
                                var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                                    min: mq0,
                                    max: mq1,
                                    jit: mqj[1]
                                };
                                var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                                if (match = matches.pop(), match.isAlternator) {
                                    matches.push(match), matches = match.matches;
                                    var groupToken = new MaskToken(!0), tmpMatch = matches.pop();
                                    matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
                                }
                                match.isGroup || (match = groupify([ match ])), matches.push(match), matches.push(quantifier);
                                break;

                              case opts.alternatormarker:
                                if (0 < openenings.length) {
                                    currentOpeningToken = openenings[openenings.length - 1];
                                    var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                                    lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
                                } else lastMatch = groupQuantifier(currentToken.matches);
                                if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                                lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                                openenings.push(alternator), lastMatch.openGroup) {
                                    lastMatch.openGroup = !1;
                                    var alternatorGroup = new MaskToken(!0);
                                    alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                                }
                                break;

                              default:
                                defaultCase();
                            }
                        }
                        for (closeRegexGroup && closeGroup(); 0 < openenings.length; ) openingToken = openenings.pop(), 
                        currentToken.matches.push(openingToken);
                        return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
                        (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
                    }
                    module.exports = {
                        generateMaskSet,
                        analyseMask
                    };
                }, function(module, exports, __webpack_require__) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    }), exports.default = _default;
                    var escapeRegexRegex = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                    function _default(str) {
                        return str.replace(escapeRegexRegex, "\\$1");
                    }
                }, function(module, exports, __nested_webpack_require_29909__) {
                    "use strict";
                    __nested_webpack_require_29909__(7), __nested_webpack_require_29909__(10), __nested_webpack_require_29909__(11), 
                    __nested_webpack_require_29909__(12), module.exports = __nested_webpack_require_29909__(1);
                }, function(module, exports, __nested_webpack_require_30115__) {
                    "use strict";
                    var Inputmask = __nested_webpack_require_30115__(1);
                    Inputmask.extendDefinitions({
                        A: {
                            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                            casing: "upper"
                        },
                        "&": {
                            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                            casing: "upper"
                        },
                        "#": {
                            validator: "[0-9A-Fa-f]",
                            casing: "upper"
                        }
                    });
                    var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                    function ipValidator(chrs, maskset, pos, strict, opts) {
                        return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                        -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, 
                        ipValidatorRegex.test(chrs);
                    }
                    Inputmask.extendAliases({
                        cssunit: {
                            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                        },
                        url: {
                            regex: "(https?|ftp)//.*",
                            autoUnmask: !1
                        },
                        ip: {
                            mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                            definitions: {
                                i: {
                                    validator: ipValidator
                                },
                                j: {
                                    validator: ipValidator
                                },
                                k: {
                                    validator: ipValidator
                                },
                                l: {
                                    validator: ipValidator
                                }
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return maskedValue;
                            },
                            inputmode: "numeric"
                        },
                        email: {
                            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                            greedy: !1,
                            casing: "lower",
                            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
                            },
                            definitions: {
                                "*": {
                                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                },
                                "-": {
                                    validator: "[0-9A-Za-z-]"
                                }
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return maskedValue;
                            },
                            inputmode: "email"
                        },
                        mac: {
                            mask: "##:##:##:##:##:##"
                        },
                        vin: {
                            mask: "V{13}9{4}",
                            definitions: {
                                V: {
                                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                    casing: "upper"
                                }
                            },
                            clearIncomplete: !0,
                            autoUnmask: !0
                        },
                        ssn: {
                            mask: "999-99-9999",
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                                return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
                            }
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_32290__) {
                    "use strict";
                    __nested_webpack_require_32290__(9);
                    var $ = __nested_webpack_require_32290__(3), window = __nested_webpack_require_32290__(2), document = window.document, ua = window.navigator && window.navigator.userAgent || "", ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"), mobile = "ontouchstart" in window, iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, keyCode = __nested_webpack_require_32290__(0);
                    module.exports = function maskScope(actionObj) {
                        var inputmask = this, maskset = inputmask.maskset, opts = inputmask.opts, el = inputmask.el, isRTL = inputmask.isRTL || (inputmask.isRTL = opts.numericInput);
                        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                            var greedy = opts.greedy;
                            clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
                            var ndxIntlzr, test, testPos, jitRenderStatic, maskTemplate = [], pos = 0;
                            do {
                                if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], 
                                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)); else {
                                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
                                    var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                                    jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && null === test.fn, 
                                    jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : jitRenderStatic = !1;
                                }
                                pos++;
                            } while ((void 0 === inputmask.maxLength || pos < inputmask.maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);
                            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), 
                            opts.greedy = greedy, maskTemplate;
                        }
                        function resetMaskSet(soft) {
                            maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
                        }
                        function getLastValidPosition(closestTo, strict, validPositions) {
                            var before = -1, after = -1, valids = validPositions || maskset.validPositions;
                            for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
                                var psNdx = parseInt(posNdx);
                                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                                closestTo <= psNdx && (after = psNdx));
                            }
                            return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
                        }
                        function getDecisionTaker(tst) {
                            var decisionTaker = tst.locator[tst.alternation];
                            return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), 
                            void 0 !== decisionTaker ? decisionTaker.toString() : "";
                        }
                        function getLocator(tst, align) {
                            var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                            if ("" !== locator) for (;locator.length < align; ) locator += "0";
                            return locator;
                        }
                        function determineTestTemplate(pos, tests) {
                            pos = 0 < pos ? pos - 1 : 0;
                            for (var tstLocator, closest, bestMatch, altTest = getTest(pos), targetLocator = getLocator(altTest), ndx = 0; ndx < tests.length; ndx++) {
                                var tst = tests[ndx];
                                tstLocator = getLocator(tst, targetLocator.length);
                                var distance = Math.abs(tstLocator - targetLocator);
                                (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, 
                                bestMatch = tst);
                            }
                            return bestMatch;
                        }
                        function getTestTemplate(pos, ndxIntlzr, tstPs) {
                            return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
                        }
                        function getTest(pos, tests) {
                            return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0];
                        }
                        function positionCanMatchDefinition(pos, testDefinition, opts) {
                            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
                                if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
                                    valid = !0;
                                    break;
                                }
                                if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                                    valid = void 0;
                                    break;
                                }
                            }
                            return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)), 
                            valid;
                        }
                        function getTests(pos, ndxIntlzr, tstPs) {
                            var latestMatch, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                                function handleMatch(match, loopNdx, quantifierRecurse) {
                                    function isFirstMatch(latestMatch, tokenGroup) {
                                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                                        return firstMatch || $.each(tokenGroup.matches, (function(ndx, match) {
                                            if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), 
                                            firstMatch) return !1;
                                        })), firstMatch;
                                    }
                                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                                        var bestMatch, indexPos;
                                        if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [ maskset.validPositions[pos] ], (function(ndx, lmnt) {
                                            if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation, ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                            (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                                            indexPos = ndxPos);
                                        })), bestMatch) {
                                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation], locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                            return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
                                        }
                                        return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                                    }
                                    function isSubsetOf(source, target) {
                                        function expand(pattern) {
                                            for (var end, expanded = [], start = -1, i = 0, l = pattern.length; i < l; i++) if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end; ) expanded.push(String.fromCharCode(start)); else start = pattern.charCodeAt(i), 
                                            expanded.push(pattern.charAt(i));
                                            return expanded.join("");
                                        }
                                        return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
                                    }
                                    function staticCanMatchDefinition(source, target) {
                                        return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
                                    }
                                    function setMergeLocators(targetMatch, altMatch) {
                                        var alternationNdx = targetMatch.alternation, shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                                        if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) if (targetMatch.locator[i] !== altMatch.locator[i]) {
                                            alternationNdx = i, shouldMerge = !0;
                                            break;
                                        }
                                        if (shouldMerge) {
                                            targetMatch.mloc = targetMatch.mloc || {};
                                            var locNdx = targetMatch.locator[alternationNdx];
                                            if (void 0 !== locNdx) {
                                                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), 
                                                void 0 !== altMatch) {
                                                    for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), 
                                                    void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                                    targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                                                }
                                                return !0;
                                            }
                                            targetMatch.alternation = void 0;
                                        }
                                        return !1;
                                    }
                                    function isSameLevel(targetMatch, altMatch) {
                                        if (targetMatch.locator.length !== altMatch.locator.length) return !1;
                                        for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
                                        return !0;
                                    }
                                    if (testPos > pos + opts._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                                    if (testPos === pos && void 0 === match.matches) return matches.push({
                                        match,
                                        locator: loopNdx.reverse(),
                                        cd: cacheDependency,
                                        mloc: {}
                                    }), !0;
                                    if (void 0 !== match.matches) {
                                        if (match.isGroup && quantifierRecurse !== match) {
                                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse), 
                                            match) return !0;
                                        } else if (match.isOptional) {
                                            var optionalToken = match, mtchsNdx = matches.length;
                                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                                            match) {
                                                if ($.each(matches, (function(ndx, mtch) {
                                                    mtchsNdx <= ndx && (mtch.match.optionality = !0);
                                                })), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                                                insertStop = !0, testPos = pos;
                                            }
                                        } else if (match.isAlternator) {
                                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                                            if (-1 === altIndex || "string" == typeof altIndex) {
                                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                                if (void 0 !== maskset.excludes[pos]) {
                                                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                                                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                                                    }
                                                    0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                                                }
                                                (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                                for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                                    alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), 
                                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, 
                                                        setMergeLocators(altMatch);
                                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                            var altMatch2 = malternateMatches[ndx2];
                                                            if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                                    dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                                    break;
                                                                }
                                                                if (isSubsetOf(altMatch, altMatch2)) {
                                                                    setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                                    break;
                                                                }
                                                                if (isSubsetOf(altMatch2, altMatch)) {
                                                                    setMergeLocators(altMatch2, altMatch);
                                                                    break;
                                                                }
                                                                if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                                    isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, 
                                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        dropMatch || malternateMatches.push(altMatch);
                                                    }
                                                }
                                                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, 
                                                match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
                                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                            if (match) return !0;
                                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup), match) {
                                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, 
                                                latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, 
                                                latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                                    insertStop = !0, testPos = pos;
                                                    break;
                                                }
                                                return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), 
                                                !0;
                                            }
                                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                                        match) return !0;
                                    } else testPos++;
                                }
                                for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                                    if (match && testPos === pos) return match;
                                    if (pos < testPos) break;
                                }
                            }
                            function mergeLocators(pos, tests) {
                                var locator = [];
                                return $.isArray(tests) || (tests = [ tests ]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate(pos, tests.slice()).locator.slice(), 
                                0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, (function(ndx, tst) {
                                    if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                                }))), locator;
                            }
                            if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
                                if (void 0 === ndxIntlzr) {
                                    for (var test, previousPos = pos - 1; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos; ) previousPos--;
                                    void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), 
                                    cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                                }
                                if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                                    if (match && testPos === pos || pos < testPos) break;
                                }
                            }
                            return 0 !== matches.length && !insertStop || matches.push({
                                match: {
                                    fn: null,
                                    static: !0,
                                    optionality: !1,
                                    casing: null,
                                    def: "",
                                    placeholder: ""
                                },
                                locator: [],
                                mloc: {},
                                cd: cacheDependency
                            }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), 
                            maskset.tests[pos]);
                        }
                        function getBufferTemplate() {
                            return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1), 
                            void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
                        }
                        function getBuffer(noCache) {
                            return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0), 
                            void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
                        }
                        function refreshFromBuffer(start, end, buffer) {
                            var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = isRTL ? buffer.slice().reverse() : buffer;
                            if (opts.skipOptionalPartCharacter = "", !0 === start) resetMaskSet(), maskset.tests = {}, 
                            start = 0, end = buffer.length, p = determineNewCaretPosition({
                                begin: 0,
                                end: 0
                            }, !1).begin; else {
                                for (i = start; i < end; i++) delete maskset.validPositions[i];
                                p = start;
                            }
                            var keypress = new $.Event("keypress");
                            for (i = start; i < end; i++) {
                                keypress.which = bffr[i].toString().charCodeAt(0), inputmask.ignorable = !1;
                                var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                                !1 !== valResult && (p = valResult.forwardPosition);
                            }
                            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
                        }
                        function casing(elem, test, pos) {
                            switch (opts.casing || test.casing) {
                              case "upper":
                                elem = elem.toUpperCase();
                                break;

                              case "lower":
                                elem = elem.toLowerCase();
                                break;

                              case "title":
                                var posBefore = maskset.validPositions[pos - 1];
                                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                                break;

                              default:
                                if ($.isFunction(opts.casing)) {
                                    var args = Array.prototype.slice.call(arguments);
                                    args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
                                }
                            }
                            return elem;
                        }
                        function checkAlternationMatch(altArr1, altArr2, na) {
                            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                                isMatch = !0;
                                break;
                            }
                            return isMatch;
                        }
                        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                            var lastAlt, alternation, altPos, prevAltPos, i, validPos, decisionPos, nextPos, input, begin, end, validPsClone = $.extend(!0, {}, maskset.validPositions), tstClone = $.extend(!0, {}, maskset.tests), isValidRslt = !1, returnRslt = !1, lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition();
                            if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, 
                            end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = getTest(lastAlt), 
                            alternation = prevAltPos.alternation; else for (;0 <= lAltPos; lAltPos--) if (altPos = maskset.validPositions[lAltPos], 
                            altPos && void 0 !== altPos.alternation) {
                                if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                                lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
                            }
                            if (void 0 !== alternation) {
                                decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], 
                                !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
                                var validInputs = [], resultPos = -1;
                                for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), 
                                resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), 
                                delete maskset.validPositions[i];
                                for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10; ) {
                                    for (maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1, 
                                    input = validInputs[i], isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)); i++) i === resultPos && (returnRslt = isValidRslt), 
                                    1 == maskPos && isValidRslt && (returnRslt = {
                                        caretPos: i
                                    });
                                    if (isValidRslt) break;
                                    if (resetMaskSet(), prevAltPos = getTest(decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), 
                                    maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                                        returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                        break;
                                    }
                                    var decisionTaker = getDecisionTaker(prevAltPos);
                                    if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                                        returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                        break;
                                    }
                                    for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), 
                                    i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) delete maskset.validPositions[i];
                                }
                            }
                            return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], 
                            returnRslt;
                        }
                        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
                            function isSelection(posObj) {
                                return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
                            }
                            strict = !0 === strict;
                            var maskPos = pos;
                            function processCommandObject(commandObj) {
                                if (void 0 !== commandObj) {
                                    if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [ commandObj.remove ]), 
                                    $.each(commandObj.remove.sort((function(a, b) {
                                        return b.pos - a.pos;
                                    })), (function(ndx, lmnt) {
                                        revalidateMask({
                                            begin: lmnt,
                                            end: lmnt + 1
                                        });
                                    })), commandObj.remove = void 0), void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [ commandObj.insert ]), 
                                    $.each(commandObj.insert.sort((function(a, b) {
                                        return a.pos - b.pos;
                                    })), (function(ndx, lmnt) {
                                        "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
                                    })), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                                        var refresh = commandObj.refreshFromBuffer;
                                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), 
                                        commandObj.refreshFromBuffer = void 0;
                                    }
                                    void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, 
                                    commandObj = !0);
                                }
                                return commandObj;
                            }
                            function _isValid(position, c, strict) {
                                var rslt = !1;
                                return $.each(getTests(position), (function(ndx, tst) {
                                    var test = tst.match;
                                    if (getBuffer(!0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                                        c: getPlaceholder(position, test, !0) || test.def,
                                        pos: position
                                    }, !1 !== rslt) {
                                        var elem = void 0 !== rslt.c ? rslt.c : c, validatedPos = position;
                                        return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? getPlaceholder(position, test, !0) || test.def : elem, 
                                        rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), 
                                        !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c ? !1 : (!1 === revalidateMask(pos, $.extend({}, tst, {
                                            input: casing(elem, test, validatedPos)
                                        }), fromIsValid, validatedPos) && (rslt = !1), !1);
                                    }
                                })), rslt;
                            }
                            void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
                            var result = !0, positionsClone = $.extend(!0, {}, maskset.validPositions);
                            if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++) void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, 
                            delete maskset.tests[i]);
                            if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), 
                            result = processCommandObject(result)), !0 === result) {
                                if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
                                    if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                                        var currentPosValid = maskset.validPositions[maskPos];
                                        if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                                            if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                                                var skip = !1;
                                                if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0), 
                                                !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), 
                                                pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !isMask(maskPos, opts.keepStatic)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (result = _isValid(nPos, c, strict), 
                                                !1 !== result) {
                                                    result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result, 
                                                    maskPos = nPos;
                                                    break;
                                                }
                                            }
                                        } else result = {
                                            caret: seekNext(maskPos)
                                        };
                                    }
                                } else result = !1;
                                !1 !== result || !opts.keepStatic || !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos), 
                                !0 === result && (result = {
                                    pos: maskPos
                                });
                            }
                            if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
                                var postResult = opts.postValidation.call(el, getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
                                void 0 !== postResult && (result = !0 === postResult ? result : postResult);
                            }
                            result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (resetMaskSet(!0), 
                            maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0);
                            var endResult = processCommandObject(result);
                            return endResult;
                        }
                        function trackbackPositions(originalPos, newPos, fillOnly) {
                            if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) ;
                            for (var ps = originalPos; ps < newPos; ps++) if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                                var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];
                                if (vp) {
                                    var tests = getTests(ps).slice();
                                    "" === tests[tests.length - 1].match.def && tests.pop();
                                    var np, bestMatch = determineTestTemplate(ps, tests);
                                    if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                    }), bestMatch.generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly)) {
                                        var cvpInput = maskset.validPositions[newPos].input;
                                        return maskset.validPositions[newPos] = void 0, isValid(newPos, cvpInput, !0, !0);
                                    }
                                }
                            }
                        }
                        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                            function IsEnclosedStatic(pos, valids, selection) {
                                var posMatch = valids[pos];
                                if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
                                var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
                                return prevMatch && nextMatch;
                            }
                            var offset = 0, begin = void 0 !== pos.begin ? pos.begin : pos, end = void 0 !== pos.end ? pos.end : pos;
                            if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, 
                            begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                                var i, positionsClone = $.extend(!0, {}, maskset.validPositions), lvp = getLastValidPosition(void 0, !0);
                                for (maskset.p = begin, i = lvp; begin <= i; i--) delete maskset.validPositions[i], 
                                void 0 === validTest && delete maskset.tests[i + 1];
                                var t, canMatch, valid = !0, j = validatedPos, posMatch = j;
                                for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), 
                                posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
                                    if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                                        begin,
                                        end
                                    }))) {
                                        for (;"" !== getTest(posMatch).match.def; ) {
                                            if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || "+" === t.match.def) {
                                                "+" === t.match.def && getBuffer(!0);
                                                var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                                if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
                                            } else valid = !1;
                                            if (valid) {
                                                void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                                break;
                                            }
                                            if (!valid && posMatch > maskset.maskLength) break;
                                            posMatch++;
                                        }
                                        "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
                                    }
                                    if (!valid) break;
                                }
                                if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), 
                                !1;
                            } else validTest && getTest(validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
                            return resetMaskSet(!0), offset;
                        }
                        function isMask(pos, strict, fuzzy) {
                            var test = getTestTemplate(pos).match;
                            if ("" === test.def && (test = getTest(pos).match), !0 !== test.static) return test.fn;
                            if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;
                            if (!0 !== strict && -1 < pos) {
                                if (fuzzy) {
                                    var tests = getTests(pos);
                                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                                }
                                var testTemplate = determineTestTemplate(pos, getTests(pos)), testPlaceHolder = getPlaceholder(pos, testTemplate.match);
                                return testTemplate.match.def !== testPlaceHolder;
                            }
                            return !1;
                        }
                        function seekNext(pos, newBlock, fuzzy) {
                            void 0 === fuzzy && (fuzzy = !0);
                            for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, fuzzy)); ) position++;
                            return position;
                        }
                        function seekPrevious(pos, newBlock) {
                            var tests, position = pos;
                            if (position <= 0) return 0;
                            for (;0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && (tests = getTests(position), 
                            tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
                            return position;
                        }
                        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                            if (event && $.isFunction(opts.onBeforeWrite)) {
                                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                                if (result) {
                                    if (result.refreshFromBuffer) {
                                        var refresh = result.refreshFromBuffer;
                                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                                        buffer = getBuffer(!0);
                                    }
                                    void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
                                }
                            }
                            if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)), 
                            !0 === triggerEvents)) {
                                var $input = $(input), nptVal = input.inputmask._valueGet();
                                input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout((function() {
                                    nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
                                }), 0);
                            }
                        }
                        function getPlaceholder(pos, test, returnPL) {
                            if (test = test || getTest(pos).match, void 0 !== test.placeholder || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                            if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);
                            if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                                var prevTest, tests = getTests(pos), staticAlternations = [];
                                if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                                !0 === tests[i].match.static && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                            }
                            return test.def;
                        }
                        function HandleNativePlaceholder(npt, value) {
                            if (ie) {
                                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                                    var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                                    if (nptValue !== value) {
                                        var lvp = getLastValidPosition();
                                        -1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer), 
                                        writeBuffer(npt, buffer);
                                    }
                                }
                            } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
                        }
                        function determineNewCaretPosition(selectedCaret, tabbed) {
                            function doRadixFocus(clickPos) {
                                if ("" !== opts.radixPoint && 0 !== opts.digits) {
                                    var vps = maskset.validPositions;
                                    if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                                        if (clickPos < seekNext(-1)) return !0;
                                        var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                        if (-1 !== radixPos) {
                                            for (var vp in vps) if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }
                            if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                            selectedCaret.begin === selectedCaret.end) {
                                switch (opts.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    selectedCaret = {
                                        begin: 0,
                                        end: getBuffer().length
                                    };
                                    break;

                                  case "ignore":
                                    selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                                    break;

                                  case "radixFocus":
                                    if (doRadixFocus(selectedCaret.begin)) {
                                        var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                                        break;
                                    }

                                  default:
                                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                                    if (clickPosition < lastPosition) selectedCaret.end = selectedCaret.begin = isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition); else {
                                        var lvp = maskset.validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                        if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                            var newPos = seekNext(lastPosition);
                                            (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                                        }
                                        selectedCaret.end = selectedCaret.begin = lastPosition;
                                    }
                                }
                                return selectedCaret;
                            }
                        }
                        var valueBuffer, EventRuler = {
                            on: function on(input, eventName, eventHandler) {
                                var ev = function ev(e) {
                                    e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                                    var args, that = this, inputmask = that.inputmask;
                                    if (void 0 === inputmask && "FORM" !== this.nodeName) {
                                        var imOpts = $.data(that, "_inputmask_opts");
                                        $(that).off(), imOpts && new Inputmask(imOpts).mask(that);
                                    } else {
                                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                                            switch (e.type) {
                                              case "input":
                                                if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, 
                                                e.preventDefault();
                                                break;

                                              case "keydown":
                                                inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = !1;
                                                break;

                                              case "keypress":
                                                if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                                                inputmask.skipKeyPressEvent = !0;
                                                break;

                                              case "click":
                                              case "focus":
                                                return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), 
                                                HandleNativePlaceholder(input, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")), 
                                                setTimeout((function() {
                                                    input.focus();
                                                }), 3e3)) : (args = arguments, setTimeout((function() {
                                                    input.inputmask && eventHandler.apply(that, args);
                                                }), 0)), !1;
                                            }
                                            var returnVal = eventHandler.apply(that, arguments);
                                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                                        }
                                        e.preventDefault();
                                    }
                                };
                                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
                            },
                            off: function off(input, event) {
                                var events;
                                input.inputmask && input.inputmask.events && (event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, 
                                $.each(events, (function(eventName, evArr) {
                                    for (;0 < evArr.length; ) {
                                        var ev = evArr.pop();
                                        -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                                    }
                                    delete input.inputmask.events[eventName];
                                })));
                            }
                        }, EventHandlers = {
                            keydownEvent: function keydownEvent(e) {
                                var input = this, $input = $(input), k = e.keyCode, pos = caret(input), kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
                                if (void 0 !== kdResult) return kdResult;
                                if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) e.preventDefault(), 
                                handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join("")); else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                                    e.preventDefault();
                                    var caretPos = seekNext(getLastValidPosition());
                                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                                } else k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(), 
                                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, inputmask.undoValue.split("")), 
                                $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match.static && (pos.begin = seekNext(pos.begin)), 
                                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                                pos.end = seekNext(pos.begin, !0), pos.end < maskset.maskLength && pos.end--), pos.begin < maskset.maskLength && (e.preventDefault(), 
                                caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout((function() {
                                    var caretPos = caret(input);
                                    caret(input, caretPos.begin);
                                }), 0) : k === keyCode.LEFT && setTimeout((function() {
                                    var caretPos_begin = translatePosition(input.inputmask.caretPos.begin);
                                    translatePosition(input.inputmask.caretPos.end);
                                    caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1));
                                }), 0));
                                inputmask.ignorable = -1 !== $.inArray(k, opts.ignorables);
                            },
                            keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === keyCode.ENTER && inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), 
                                setTimeout((function() {
                                    $input.trigger("change");
                                }), 0)), inputmask.skipInputEvent = !0, !0;
                                if (k) {
                                    44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
                                    var forwardPosition, pos = checkval ? {
                                        begin: ndx,
                                        end: ndx
                                    } : caret(input), c = String.fromCharCode(k);
                                    maskset.writeOutBuffer = !0;
                                    var valResult = isValid(pos, c, strict, void 0, void 0, void 0, checkval);
                                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), 
                                    maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, 
                                    !1 !== writeOut && (setTimeout((function() {
                                        opts.onKeyValidation.call(input, k, valResult);
                                    }), 0), maskset.writeOutBuffer && !1 !== valResult)) {
                                        var buffer = getBuffer();
                                        writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
                                    }
                                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                                    valResult;
                                }
                            },
                            pasteEvent: function pasteEvent(e) {
                                var tempValue, inputValue = this.inputmask._valueGet(!0), caretPos = caret(this);
                                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                                if (valueBeforeCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                                valueAfterCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                    inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
                                }
                                var pasteValue = inputValue;
                                if ($.isFunction(opts.onBeforePaste)) {
                                    if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
                                    pasteValue = pasteValue || inputValue;
                                }
                                return checkVal(this, !0, !1, pasteValue.toString().split(""), e), e.preventDefault();
                            },
                            inputFallBackEvent: function inputFallBackEvent(e) {
                                function ieMobileHandler(input, inputValue, caretPos) {
                                    if (iemobile) {
                                        var inputChar = inputValue.replace(getBuffer().join(""), "");
                                        if (1 === inputChar.length) {
                                            var iv = inputValue.split("");
                                            iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                                        }
                                    }
                                    return inputValue;
                                }
                                function analyseChanges(inputValue, buffer, caretPos) {
                                    for (var bl, i, placeholder, frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, action = "", data = []; frontPart.length < fpl; ) frontPart.push("~");
                                    for (;frontBufferPart.length < fpl; ) frontBufferPart.push("~");
                                    for (;backPart.length < bpl; ) backPart.unshift("~");
                                    for (;backBufferPart.length < bpl; ) backBufferPart.unshift("~");
                                    var newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
                                    for (i = 0, bl = newBuffer.length; i < bl; i++) switch (placeholder = getPlaceholder(translatePosition(i)), 
                                    action) {
                                      case "insertText":
                                        oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), 
                                        i = bl;
                                        break;

                                      case "insertReplacementText":
                                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                        break;

                                      case "deleteContentBackward":
                                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                        break;

                                      default:
                                        newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", 
                                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", 
                                        data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", 
                                        !isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", 
                                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                                        break;
                                    }
                                    return {
                                        action,
                                        data,
                                        caret: caretPos
                                    };
                                }
                                var input = this, inputValue = input.inputmask._valueGet(!0), buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""), caretPos = caret(input, void 0, void 0, !0);
                                if (buffer !== inputValue) {
                                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                                    var changes = analyseChanges(inputValue, buffer, caretPos);
                                    switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), 
                                    writeBuffer(input, getBuffer()), caret(input, caretPos.begin, caretPos.end, !0), 
                                    changes.action) {
                                      case "insertText":
                                      case "insertReplacementText":
                                        $.each(changes.data, (function(ndx, entry) {
                                            var keypress = new $.Event("keypress");
                                            keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                                        })), setTimeout((function() {
                                            inputmask.$el.trigger("keyup");
                                        }), 0);
                                        break;

                                      case "deleteContentBackward":
                                        var keydown = new $.Event("keydown");
                                        keydown.keyCode = keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                                        break;

                                      default:
                                        applyInputValue(input, inputValue);
                                        break;
                                    }
                                    e.preventDefault();
                                }
                            },
                            compositionendEvent: function compositionendEvent(e) {
                                inputmask.$el.trigger("input");
                            },
                            setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                                var value = e && e.detail ? e.detail[0] : argument_1;
                                void 0 === value && (value = this.inputmask._valueGet(!0)), applyInputValue(this, value), 
                                (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2);
                            },
                            focusEvent: function focusEvent(e) {
                                var nptValue = this.inputmask._valueGet();
                                opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())), 
                                !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [ e, !0 ]), 
                                inputmask.undoValue = getBuffer().join("");
                            },
                            invalidEvent: function invalidEvent(e) {
                                inputmask.validationEvent = !0;
                            },
                            mouseleaveEvent: function mouseleaveEvent() {
                                inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && HandleNativePlaceholder(this, inputmask.originalPlaceholder);
                            },
                            clickEvent: function clickEvent(e, tabbed) {
                                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                                    var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
                                    void 0 !== newCaretPosition && caret(this, newCaretPosition);
                                }
                            },
                            cutEvent: function cutEvent(e) {
                                var pos = caret(this), clipboardData = window.clipboardData || e.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                                document.execCommand && document.execCommand("copy"), handleRemove(this, keyCode.DELETE, pos), 
                                writeBuffer(this, getBuffer(), maskset.p, e, inputmask.undoValue !== getBuffer().join(""));
                            },
                            blurEvent: function blurEvent(e) {
                                var $input = $(this);
                                if (this.inputmask) {
                                    HandleNativePlaceholder(this, inputmask.originalPlaceholder);
                                    var nptValue = this.inputmask._valueGet(), buffer = getBuffer().slice();
                                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                                    !1 === isComplete(buffer) && (setTimeout((function() {
                                        $input.trigger("incomplete");
                                    }), 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                                    writeBuffer(this, buffer, void 0, e)), inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), 
                                    $input.trigger("change"));
                                }
                            },
                            mouseenterEvent: function mouseenterEvent() {
                                inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), 
                                opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")));
                            },
                            submitEvent: function submitEvent() {
                                inputmask.undoValue !== getBuffer().join("") && inputmask.$el.trigger("change"), 
                                opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                                opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), 
                                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                                setTimeout((function() {
                                    writeBuffer(el, getBuffer());
                                }), 0));
                            },
                            resetEvent: function resetEvent() {
                                el.inputmask.refreshValue = !0, setTimeout((function() {
                                    applyInputValue(el, el.inputmask._valueGet(!0));
                                }), 0);
                            }
                        };
                        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                            var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = void 0;
                            function isTemplateMatch(ndx, charCodes) {
                                for (var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1]; ) charCodeNdx--;
                                var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match.static && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match.static && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                                if (!match && 0 < charCodeNdx && !isMask(ndx, !1, !0)) {
                                    var nextPos = seekNext(ndx);
                                    inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {
                                        begin: nextPos
                                    });
                                }
                                return match;
                            }
                            resetMaskSet(), maskset.tests = {}, initialNdx = opts.radixPoint ? determineNewCaretPosition({
                                begin: 0,
                                end: 0
                            }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
                                begin: initialNdx
                            };
                            var staticMatches = [], prevCaretPos = inputmask.caretPos;
                            if ($.each(inputValue, (function(ndx, charCode) {
                                if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++; else {
                                    var keypress = new $.Event("_checkval");
                                    keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
                                    var lvp = getLastValidPosition(void 0, !0);
                                    isTemplateMatch(initialNdx, charCodes) ? result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1) : (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin), 
                                    result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), 
                                    isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1), 
                                    inputmask.caretPos = {
                                        begin: result.forwardPosition,
                                        end: result.forwardPosition
                                    }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
                                }
                            })), 0 < staticMatches.length) {
                                var sndx, validPos, nextValid = seekNext(-1, void 0, !1);
                                if (!isComplete(getBuffer()) && staticMatches.length <= nextValid || isComplete(getBuffer()) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift()); ) {
                                    var keypress = new $.Event("_checkval");
                                    if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), 
                                    result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), 
                                    result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static) staticMatches.push(result.pos); else if (!result) break;
                                    nextSndx++;
                                }
                            }
                            writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== getBuffer().join(""));
                        }
                        function unmaskedvalue(input) {
                            if (input) {
                                if (void 0 === input.inputmask) return input.value;
                                input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
                            }
                            var umValue = [], vps = maskset.validPositions;
                            for (var pndx in vps) vps[pndx] && vps[pndx].match && (1 != vps[pndx].match.static || !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
                            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                            if ($.isFunction(opts.onUnMask)) {
                                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                            }
                            return unmaskedValue;
                        }
                        function translatePosition(pos) {
                            return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), 
                            pos;
                        }
                        function caret(input, begin, end, notranslate, isDelete) {
                            var range;
                            if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, 
                            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), 
                            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
                            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
                            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), 
                            end = begin + range.text.length), {
                                begin: notranslate ? begin : translatePosition(begin),
                                end: notranslate ? end : translatePosition(end)
                            };
                            if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), 
                            void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), 
                            "number" == typeof begin) {
                                begin = notranslate ? begin : translatePosition(begin), end = notranslate ? end : translatePosition(end), 
                                end = "number" == typeof end ? end : begin;
                                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
                                    begin,
                                    end
                                }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), 
                                input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end); else if (window.getSelection) {
                                    if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                                        var textNode = document.createTextNode("");
                                        input.appendChild(textNode);
                                    }
                                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                                    range.collapse(!0);
                                    var sel = window.getSelection();
                                    sel.removeAllRanges(), sel.addRange(range);
                                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), 
                                range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                            }
                        }
                        function determineLastRequiredPosition(returnDefinition) {
                            var pos, testPos, buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = maskset.validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0;
                            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                            var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                            for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                            return returnDefinition ? {
                                l: bl,
                                def: positions[bl] ? positions[bl].match : void 0
                            } : bl;
                        }
                        function clearOptionalTail(buffer) {
                            buffer.length = 0;
                            for (var lmnt, template = getMaskTemplate(!0, 0, !0, void 0, !0); void 0 !== (lmnt = template.shift()); ) buffer.push(lmnt);
                            return buffer;
                        }
                        function isComplete(buffer) {
                            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                            if ("*" !== opts.repeat) {
                                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                                if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                                    complete = !0;
                                    for (var i = 0; i <= aml; i++) {
                                        var test = getTestTemplate(i).match;
                                        if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== getPlaceholder(i, test)) {
                                            complete = !1;
                                            break;
                                        }
                                    }
                                }
                                return complete;
                            }
                        }
                        function handleRemove(input, k, pos, strict, fromIsValid) {
                            if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE), 
                            isRTL)) {
                                var pend = pos.end;
                                pos.end = pos.begin, pos.begin = pend;
                            }
                            var offset, lvp = getLastValidPosition(void 0, !0);
                            if (pos.end >= getBuffer().length && lvp >= pos.end && (pos.end = lvp + 1), k === keyCode.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin)) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1), 
                            !1 !== (offset = revalidateMask(pos))) {
                                if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
                                    var result = alternate(!0);
                                    if (result) {
                                        var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                                        (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
                                    }
                                }
                                !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin);
                            }
                        }
                        function applyInputValue(input, value) {
                            input.inputmask.refreshValue = !1, $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                            value = value.toString().split(""), checkVal(input, !0, !1, value), inputmask.undoValue = getBuffer().join(""), 
                            (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("");
                        }
                        function mask() {
                            function isElementTypeSupported(input, opts) {
                                function patchValueProperty(npt) {
                                    var valueGet, valueSet;
                                    function patchValhook(type) {
                                        if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                                return elem.value;
                                            }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                                return elem.value = value, elem;
                                            };
                                            $.valHooks[type] = {
                                                get: function get(elem) {
                                                    if (elem.inputmask) {
                                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                        var result = valhookGet(elem);
                                                        return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                                    }
                                                    return valhookGet(elem);
                                                },
                                                set: function set(elem, value) {
                                                    var result = valhookSet(elem, value);
                                                    return elem.inputmask && applyInputValue(elem, value), result;
                                                },
                                                inputmaskpatch: !0
                                            };
                                        }
                                    }
                                    function getter() {
                                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                                    }
                                    function setter(value) {
                                        valueSet.call(this, value), this.inputmask && applyInputValue(this, value);
                                    }
                                    function installNativeValueSetFallback(npt) {
                                        EventRuler.on(npt, "mouseenter", (function() {
                                            var value = this.inputmask._valueGet(!0);
                                            value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value);
                                        }));
                                    }
                                    if (!npt.inputmask.__valueGet) {
                                        if (!0 !== opts.noValuePatching) {
                                            if (Object.getOwnPropertyDescriptor) {
                                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                                valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                                    get: getter,
                                                    set: setter,
                                                    configurable: !0
                                                })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                                    return this.textContent;
                                                }, valueSet = function valueSet(value) {
                                                    this.textContent = value;
                                                }, Object.defineProperty(npt, "value", {
                                                    get: getter,
                                                    set: setter,
                                                    configurable: !0
                                                }));
                                            } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                            valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                            npt.__defineSetter__("value", setter));
                                            npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                                        }
                                        npt.inputmask._valueGet = function(overruleRTL) {
                                            return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                                        }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                            valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                                        }, void 0 === valueGet && (valueGet = function valueGet() {
                                            return this.value;
                                        }, valueSet = function valueSet(value) {
                                            this.value = value;
                                        }, patchValhook(npt.type), installNativeValueSetFallback(npt));
                                    }
                                }
                                "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
                                var elementType = input.getAttribute("type"), isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                                if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
                                    var el = document.createElement("input");
                                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                                } else isSupported = "partial";
                                return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, 
                                isSupported;
                            }
                            EventRuler.off(el);
                            var isSupported = isElementTypeSupported(el, opts);
                            if (!1 !== isSupported) {
                                inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, 
                                -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, 
                                el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(el.autocomplete), 
                                iphone && (opts.insertModeVisual = !1), EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                                EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), 
                                EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "invalid", EventHandlers.invalidEvent), 
                                EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), 
                                EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                                EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                                EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                                mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                                EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                                inputmask.undoValue = getBufferTemplate().join("");
                                var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                                if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                                    applyInputValue(el, el.inputmask._valueGet(!0), opts);
                                    var buffer = getBuffer().slice();
                                    !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                                    (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), 
                                    activeElement === el && caret(el, seekNext(getLastValidPosition()));
                                }
                            }
                        }
                        if (void 0 !== actionObj) switch (actionObj.action) {
                          case "isComplete":
                            return el = actionObj.el, isComplete(getBuffer());

                          case "unmaskedvalue":
                            return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value, 
                            valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), 
                            checkVal.call(this, void 0, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)), 
                            unmaskedvalue(el);

                          case "mask":
                            mask();
                            break;

                          case "format":
                            return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), 
                            checkVal.call(this, void 0, !0, !1, valueBuffer), actionObj.metadata ? {
                                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                                metadata: maskScope.call(this, {
                                    action: "getmetadata"
                                }, maskset, opts)
                            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                          case "isValid":
                            actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), 
                            checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--) ;
                            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));

                          case "getemptymask":
                            return getBufferTemplate().join("");

                          case "remove":
                            if (el && el.inputmask) {
                                $.data(el, "_inputmask_opts", null);
                                var valueProperty, cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask);
                                cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""), 
                                EventRuler.off(el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"), 
                                valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                                    get: el.inputmask.__valueGet,
                                    set: el.inputmask.__valueSet,
                                    configurable: !0
                                })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                                el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
                            }
                            return el;

                          case "getmetadata":
                            if ($.isArray(maskset.metadata)) {
                                var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                                return $.each(maskset.metadata, (function(ndx, mtdt) {
                                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                                })), maskTarget;
                            }
                            return maskset.metadata;
                        }
                    };
                }, function(module, exports, __webpack_require__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
                        return object.__proto__;
                    } : function(object) {
                        return object.constructor.prototype;
                    });
                }, function(module, exports, __nested_webpack_require_104085__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var Inputmask = __nested_webpack_require_104085__(1), $ = Inputmask.dependencyLib, keyCode = __nested_webpack_require_104085__(0), currentYear = (new Date).getFullYear(), escapeRegex = __nested_webpack_require_104085__(5).default, formatCode = {
                        d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                        dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                            return pad(Date.prototype.getDate.call(this), 2);
                        } ],
                        ddd: [ "" ],
                        dddd: [ "" ],
                        m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                            return Date.prototype.getMonth.call(this) + 1;
                        } ],
                        mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                            return pad(Date.prototype.getMonth.call(this) + 1, 2);
                        } ],
                        mmm: [ "" ],
                        mmmm: [ "" ],
                        yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                            return pad(Date.prototype.getFullYear.call(this), 2);
                        } ],
                        yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                            return pad(Date.prototype.getFullYear.call(this), 4);
                        } ],
                        h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                        hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                            return pad(Date.prototype.getHours.call(this), 2);
                        } ],
                        hx: [ function(x) {
                            return "[0-9]{".concat(x, "}");
                        }, Date.prototype.setHours, "hours", function(x) {
                            return Date.prototype.getHours;
                        } ],
                        H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                        HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                            return pad(Date.prototype.getHours.call(this), 2);
                        } ],
                        Hx: [ function(x) {
                            return "[0-9]{".concat(x, "}");
                        }, Date.prototype.setHours, "hours", function(x) {
                            return function() {
                                return pad(Date.prototype.getHours.call(this), x);
                            };
                        } ],
                        M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                        MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                            return pad(Date.prototype.getMinutes.call(this), 2);
                        } ],
                        s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                        ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                            return pad(Date.prototype.getSeconds.call(this), 2);
                        } ],
                        l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                            return pad(Date.prototype.getMilliseconds.call(this), 3);
                        } ],
                        L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                            return pad(Date.prototype.getMilliseconds.call(this), 2);
                        } ],
                        t: [ "[ap]" ],
                        tt: [ "[ap]m" ],
                        T: [ "[AP]" ],
                        TT: [ "[AP]M" ],
                        Z: [ "" ],
                        o: [ "" ],
                        S: [ "" ]
                    }, formatAlias = {
                        isoDate: "yyyy-mm-dd",
                        isoTime: "HH:MM:ss",
                        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                    };
                    function formatcode(match) {
                        var dynMatches = new RegExp("\\d+$").exec(match[0]);
                        if (dynMatches && void 0 !== dynMatches[0]) {
                            var fcode = formatCode[match[0][0] + "x"].slice("");
                            return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
                        }
                        if (formatCode[match[0]]) return formatCode[match[0]];
                    }
                    function getTokenizer(opts) {
                        if (!opts.tokenizer) {
                            var tokens = [], dyntokens = [];
                            for (var ndx in formatCode) if (/\.*x$/.test(ndx)) {
                                var dynToken = ndx[0] + "\\d+";
                                -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
                            } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                            opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", 
                            opts.tokenizer = new RegExp(opts.tokenizer, "g");
                        }
                        return opts.tokenizer;
                    }
                    function prefillYear(dateParts, currentResult, opts) {
                        if (dateParts.year !== dateParts.rawyear) {
                            var crrntyear = currentYear.toString(), enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""), currentYearPart = crrntyear.slice(0, enteredPart.length), currentYearNextPart = crrntyear.slice(enteredPart.length);
                            if (2 === enteredPart.length && enteredPart === currentYearPart) {
                                var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
                                dateParts.day === entryCurrentYear.getDay() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime()) && (dateParts.date.setFullYear(currentYear), 
                                dateParts.year = crrntyear, currentResult.insert = [ {
                                    pos: currentResult.pos + 1,
                                    c: currentYearNextPart[0]
                                }, {
                                    pos: currentResult.pos + 2,
                                    c: currentYearNextPart[1]
                                } ]);
                            }
                        }
                        return currentResult;
                    }
                    function isValidDate(dateParts, currentResult, opts) {
                        if (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult;
                        if ("29" == dateParts.day) {
                            var tokenMatch = getTokenMatch(currentResult.pos, opts);
                            if ("yyyy" === tokenMatch.targetMatch[0] && currentResult.pos - tokenMatch.targetMatchIndex == 2) return currentResult.remove = currentResult.pos + 1, 
                            currentResult;
                        }
                        return !1;
                    }
                    function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
                        if (!result) return result;
                        if (opts.min) {
                            if (dateParts.rawyear) {
                                var maxYear, rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""), minYear = opts.min.year.substr(0, rawYear.length);
                                if (rawYear < minYear) {
                                    var tokenMatch = getTokenMatch(result.pos, opts);
                                    if (rawYear = dateParts.rawyear.substr(0, result.pos - tokenMatch.targetMatchIndex + 1), 
                                    minYear = opts.min.year.substr(0, rawYear.length), minYear <= rawYear) return result.remove = tokenMatch.targetMatchIndex + rawYear.length, 
                                    result;
                                    if (rawYear = "yyyy" === tokenMatch.targetMatch[0] ? dateParts.rawyear.substr(1, 1) : dateParts.rawyear.substr(0, 1), 
                                    minYear = opts.min.year.substr(2, 1), maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear, 
                                    1 === rawYear.length && minYear <= rawYear <= maxYear && !0 !== fromCheckval) return "yyyy" === tokenMatch.targetMatch[0] ? (result.insert = [ {
                                        pos: result.pos + 1,
                                        c: rawYear,
                                        strict: !0
                                    } ], result.caret = result.pos + 2, maskset.validPositions[result.pos].input = opts.min.year[1]) : (result.insert = [ {
                                        pos: result.pos + 1,
                                        c: opts.min.year[1],
                                        strict: !0
                                    }, {
                                        pos: result.pos + 2,
                                        c: rawYear,
                                        strict: !0
                                    } ], result.caret = result.pos + 3, maskset.validPositions[result.pos].input = opts.min.year[0]), 
                                    result;
                                    result = !1;
                                }
                            }
                            result && dateParts.year && dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
                        }
                        return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), 
                        result;
                    }
                    function parse(format, dateObjValue, opts, raw) {
                        var match, fcode, mask = "";
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) if (void 0 === dateObjValue) if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")"; else switch (match[0]) {
                          case "[":
                            mask += "(";
                            break;

                          case "]":
                            mask += ")?";
                            break;

                          default:
                            mask += escapeRegex(match[0]);
                        } else if (fcode = formatcode(match)) if (!0 !== raw && fcode[3]) {
                            var getFn = fcode[3];
                            mask += getFn.call(dateObjValue.date);
                        } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0]; else mask += match[0];
                        return mask;
                    }
                    function pad(val, len) {
                        for (val = String(val), len = len || 2; val.length < len; ) val = "0" + val;
                        return val;
                    }
                    function analyseMask(maskString, format, opts) {
                        var targetProp, match, dateOperation, dateObj = {
                            date: new Date(1, 0, 1)
                        }, mask = maskString;
                        function setValue(dateObj, value, opts) {
                            dateObj[targetProp] = value.replace(/[^0-9]/g, "0"), dateObj["raw" + targetProp] = value, 
                            void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
                        }
                        if ("string" == typeof mask) {
                            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) {
                                var dynMatches = new RegExp("\\d+$").exec(match[0]), fcode = dynMatches ? match[0][0] + "x" : match[0], value = void 0;
                                if (dynMatches) {
                                    var lastIndex = getTokenizer(opts).lastIndex, tokanMatch = getTokenMatch(match.index, opts);
                                    getTokenizer(opts).lastIndex = lastIndex, value = mask.slice(0, mask.indexOf(tokanMatch.nextMatch[0]));
                                } else value = mask.slice(0, fcode.length);
                                Object.prototype.hasOwnProperty.call(formatCode, fcode) && (targetProp = formatCode[fcode][2], 
                                dateOperation = formatCode[fcode][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length);
                            }
                            return dateObj;
                        }
                        if (mask && "object" === _typeof(mask) && Object.prototype.hasOwnProperty.call(mask, "date")) return mask;
                    }
                    function importDate(dateObj, opts) {
                        return parse(opts.inputFormat, {
                            date: dateObj
                        }, opts);
                    }
                    function getTokenMatch(pos, opts) {
                        var targetMatch, match, calcPos = 0, matchLength = 0;
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); ) {
                            var dynMatches = new RegExp("\\d+$").exec(match[0]);
                            if (matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length, calcPos += matchLength, 
                            pos <= calcPos) {
                                targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
                                break;
                            }
                        }
                        return {
                            targetMatchIndex: calcPos - matchLength,
                            nextMatch: match,
                            targetMatch
                        };
                    }
                    Inputmask.extendAliases({
                        datetime: {
                            mask: function mask(opts) {
                                return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), 
                                opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, 
                                opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, 
                                opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), 
                                opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), 
                                opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
                            },
                            placeholder: "",
                            inputFormat: "isoDateTime",
                            displayFormat: void 0,
                            outputFormat: void 0,
                            min: null,
                            max: null,
                            skipOptionalPartCharacter: "",
                            i18n: {
                                dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                ordinalSuffix: [ "st", "nd", "rd", "th" ]
                            },
                            preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                                if (strict) return !0;
                                if (isNaN(c) && buffer[pos] !== c) {
                                    var tokenMatch = getTokenMatch(pos, opts);
                                    if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                                        var validator = formatCode[tokenMatch.targetMatch[0]][0];
                                        if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], 
                                        buffer[pos - 1] = "0", {
                                            fuzzy: !0,
                                            buffer,
                                            refreshFromBuffer: {
                                                start: pos - 1,
                                                end: pos + 1
                                            },
                                            pos: pos + 1
                                        };
                                    }
                                }
                                return !0;
                            },
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
                                if (strict) return !0;
                                var tokenMatch, validator;
                                if (!1 === currentResult) return tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], 
                                new RegExp(validator).test("0" + c)) ? {
                                    insert: [ {
                                        pos,
                                        c: "0"
                                    }, {
                                        pos: pos + 1,
                                        c
                                    } ],
                                    pos: pos + 1
                                } : currentResult;
                                if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), 
                                tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                                    validator = formatCode[tokenMatch.targetMatch[0]][0];
                                    var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                                    !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0");
                                }
                                var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                                return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = prefillYear(dateParts, result, opts), 
                                result = isValidDate(dateParts, result, opts), result = isDateInRange(dateParts, result, opts, maskset, fromCheckval)), 
                                pos && result && currentResult.pos !== pos ? {
                                    buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                                    refreshFromBuffer: {
                                        start: pos,
                                        end: currentResult.pos
                                    }
                                } : result;
                            },
                            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                                e.ctrlKey && e.keyCode === keyCode.RIGHT && (this.inputmask._valueSet(importDate(new Date, opts)), 
                                $(this).trigger("setvalue"));
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
                            },
                            casing: function casing(elem, test, pos, validPositions) {
                                return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
                            },
                            onBeforeMask: function onBeforeMask(initialValue, opts) {
                                return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), 
                                initialValue;
                            },
                            insertMode: !1,
                            shiftPositions: !1,
                            keepStatic: !1,
                            inputmode: "numeric"
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_118124__) {
                    "use strict";
                    var Inputmask = __nested_webpack_require_118124__(1), $ = Inputmask.dependencyLib, keyCode = __nested_webpack_require_118124__(0), escapeRegex = __nested_webpack_require_118124__(5).default;
                    function autoEscape(txt, opts) {
                        for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
                        return escapedTxt;
                    }
                    function alignDigits(buffer, digits, opts, force) {
                        if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
                            var radixPosition = $.inArray(opts.radixPoint, buffer);
                            -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);
                            for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
                        }
                        return buffer;
                    }
                    function findValidator(symbol, maskset) {
                        var posNdx = 0;
                        if ("+" === symbol) {
                            for (posNdx in maskset.validPositions) ;
                            posNdx = parseInt(posNdx);
                        }
                        for (var tstNdx in maskset.tests) if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
                        return posNdx;
                    }
                    function findValid(symbol, maskset) {
                        var ret = -1;
                        return $.each(maskset.validPositions, (function(ndx, tst) {
                            if (tst && tst.match.def === symbol) return ret = parseInt(ndx), !1;
                        })), ret;
                    }
                    function parseMinMaxOptions(opts) {
                        void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                        opts.parseMinMaxOptions = "done");
                    }
                    function genMask(opts) {
                        opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                        " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), 
                        "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
                        var decimalDef = "0", radixPointDef = opts.radixPoint;
                        !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", 
                        opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                        opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, 
                        radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, 
                        opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, 
                        opts.definitions[radixPointDef].static = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, 
                        opts.numericInput = !0);
                        var altMask, mask = "[+]";
                        if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, 
                        opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", 
                        opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator].static = !0, 
                        opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", 
                        void 0 !== opts.digits && 0 !== opts.digits) {
                            var dq = opts.digits.toString().split(",");
                            isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", 
                            opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
                        }
                        return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [ altMask + autoEscape(opts.suffix, opts) + "[-]", mask ]), 
                        opts.greedy = !1, parseMinMaxOptions(opts), mask;
                    }
                    function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
                        return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), 
                        pos;
                    }
                    function decimalValidator(chrs, maskset, pos, strict, opts) {
                        var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1, result = -1 !== radixPos && new RegExp("[0-9１-９]").test(chrs);
                        return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                            insert: {
                                pos: radixPos === pos ? radixPos + 1 : radixPos,
                                c: opts.radixPoint
                            },
                            pos
                        } : result;
                    }
                    function checkForLeadingZeroes(buffer, opts) {
                        var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")), number = numberMatches ? numberMatches[2] : "", leadingzeroes = !1;
                        return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), 
                        !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
                    }
                    Inputmask.extendAliases({
                        numeric: {
                            mask: genMask,
                            _mask: function _mask(opts) {
                                return "(" + opts.groupSeparator + "999){+|1}";
                            },
                            digits: "*",
                            digitsOptional: !0,
                            enforceDigitsOnBlur: !1,
                            radixPoint: ".",
                            positionCaretOnClick: "radixFocus",
                            _radixDance: !0,
                            groupSeparator: "",
                            allowMinus: !0,
                            negationSymbol: {
                                front: "-",
                                back: ""
                            },
                            prefix: "",
                            suffix: "",
                            min: null,
                            max: null,
                            SetMaxOnOverflow: !1,
                            step: 1,
                            inputType: "text",
                            unmaskAsNumber: !1,
                            roundingFN: Math.round,
                            inputmode: "numeric",
                            shortcuts: {
                                k: "000",
                                m: "000000"
                            },
                            placeholder: "0",
                            greedy: !1,
                            rightAlign: !0,
                            insertMode: !0,
                            autoUnmask: !1,
                            skipOptionalPartCharacter: "",
                            definitions: {
                                0: {
                                    validator: decimalValidator
                                },
                                1: {
                                    validator: decimalValidator,
                                    definitionSymbol: "9"
                                },
                                "+": {
                                    validator: function validator(chrs, maskset, pos, strict, opts) {
                                        return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                                    }
                                },
                                "-": {
                                    validator: function validator(chrs, maskset, pos, strict, opts) {
                                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                                    }
                                }
                            },
                            preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                                if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                                var pattern;
                                if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                                    if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) inserts.push({
                                        pos: pos + i,
                                        c: pattern[i],
                                        strict: !1
                                    });
                                    return {
                                        insert: inserts
                                    };
                                }
                                var radixPos = $.inArray(opts.radixPoint, buffer), initPos = pos;
                                if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
                                    if (!0 !== opts.allowMinus) return !1;
                                    var isNegative = !1, front = findValid("+", maskset), back = findValid("-", maskset);
                                    return -1 !== front && (isNegative = [ front, back ]), !1 !== isNegative ? {
                                        remove: isNegative,
                                        caret: initPos
                                    } : {
                                        insert: [ {
                                            pos: findValidator("+", maskset),
                                            c: opts.negationSymbol.front,
                                            fromIsValid: !0
                                        }, {
                                            pos: findValidator("-", maskset),
                                            c: opts.negationSymbol.back,
                                            fromIsValid: void 0
                                        } ],
                                        caret: initPos + opts.negationSymbol.back.length
                                    };
                                }
                                if (strict) return !0;
                                if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
                                    caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                                };
                                if (!1 === opts.__financeInput) if (isSelection) {
                                    if (opts.digitsOptional) return {
                                        rewritePosition: caretPos.end
                                    };
                                    if (!opts.digitsOptional) {
                                        if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                                            insert: {
                                                pos: radixPos + 1,
                                                c: "0",
                                                fromIsValid: !0
                                            },
                                            rewritePosition: radixPos
                                        } : {
                                            rewritePosition: radixPos + 1
                                        };
                                        if (caretPos.begin < radixPos) return {
                                            rewritePosition: caretPos.begin - 1
                                        };
                                    }
                                } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
                                    rewritePosition: radixPos
                                };
                                return {
                                    rewritePosition: pos
                                };
                            },
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                                if (!1 === currentResult) return currentResult;
                                if (strict) return !0;
                                if (null !== opts.min || null !== opts.max) {
                                    var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return !1;
                                    if (null !== opts.max && unmasked > opts.max) return !!opts.SetMaxOnOverflow && {
                                        refreshFromBuffer: !0,
                                        buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                    };
                                }
                                return currentResult;
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                                var processValue = maskedValue.replace(opts.prefix, "");
                                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), 
                                "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                                opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(escapeRegex.call(this, opts.radixPoint), ".")), 
                                processValue = processValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-"), 
                                processValue = processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                                Number(processValue)) : processValue;
                            },
                            isComplete: function isComplete(buffer, opts) {
                                var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                                return maskedValue = maskedValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-"), 
                                maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                                maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), 
                                maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                                "," === opts.radixPoint && (maskedValue = maskedValue.replace(escapeRegex(opts.radixPoint), ".")), 
                                isFinite(maskedValue);
                            },
                            onBeforeMask: function onBeforeMask(initialValue, opts) {
                                var radixPoint = opts.radixPoint || ",";
                                isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                                var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "", forceDigits = 1 < valueParts.length;
                                initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                                var digits = 0;
                                if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, 
                                "" !== decimalPart || !opts.digitsOptional)) {
                                    var digitsFactor = Math.pow(10, digits || 1);
                                    initialValue = initialValue.replace(escapeRegex(radixPoint), "."), isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), 
                                    initialValue = initialValue.toString().replace(".", radixPoint);
                                }
                                if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), 
                                null !== opts.min || null !== opts.max) {
                                    var numberValue = initialValue.toString().replace(radixPoint, ".");
                                    null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
                                }
                                return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
                            },
                            onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                                function stripBuffer(buffer, stripRadix) {
                                    if (!1 !== opts.__financeInput || stripRadix) {
                                        var position = $.inArray(opts.radixPoint, buffer);
                                        -1 !== position && buffer.splice(position, 1);
                                    }
                                    if ("" !== opts.groupSeparator) for (;-1 !== (position = buffer.indexOf(opts.groupSeparator)); ) buffer.splice(position, 1);
                                    return buffer;
                                }
                                var result, leadingzeroes = checkForLeadingZeroes(buffer, opts);
                                if (leadingzeroes) for (var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0, i = leadingzeroes[0].length - offset; 0 < i; i--) delete this.maskset.validPositions[caretNdx + i], 
                                delete buffer[caretNdx + i];
                                if (e) switch (e.type) {
                                  case "blur":
                                  case "checkval":
                                    if (null !== opts.min) {
                                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                            unmaskAsNumber: !0
                                        }));
                                        if (null !== opts.min && unmasked < opts.min) return {
                                            refreshFromBuffer: !0,
                                            buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                        };
                                    }
                                    if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                        var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")), number = nmbrMtchs ? nmbrMtchs[2] : "";
                                        0 == number && (result = {
                                            refreshFromBuffer: !0,
                                            buffer: [ 0 ]
                                        });
                                    } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), 
                                    result = {
                                        refreshFromBuffer: !0,
                                        buffer: stripBuffer(buffer)
                                    }));
                                    if (opts.enforceDigitsOnBlur) {
                                        result = result || {};
                                        var bffr = result && result.buffer || buffer.slice().reverse();
                                        result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
                                    }
                                }
                                return result;
                            },
                            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                                var bffr, $input = $(this);
                                if (e.ctrlKey) switch (e.keyCode) {
                                  case keyCode.UP:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), 
                                    $input.trigger("setvalue"), !1;

                                  case keyCode.DOWN:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), 
                                    $input.trigger("setvalue"), !1;
                                }
                                if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                                    if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), 
                                    "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), 
                                    $input.trigger("setvalue", [ bffr.join(""), caretPos.begin ]), !1;
                                    if (!0 === opts._radixDance) {
                                        var radixPos = $.inArray(opts.radixPoint, buffer);
                                        if (opts.digitsOptional) {
                                            if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [ bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin ]), 
                                            !1;
                                        } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++, 
                                        bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), 
                                        bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [ bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        },
                        currency: {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: 2,
                            digitsOptional: !1
                        },
                        decimal: {
                            alias: "numeric"
                        },
                        integer: {
                            alias: "numeric",
                            digits: 0
                        },
                        percentage: {
                            alias: "numeric",
                            min: 0,
                            max: 100,
                            suffix: " %",
                            digits: 0,
                            allowMinus: !1
                        },
                        indianns: {
                            alias: "numeric",
                            _mask: function _mask(opts) {
                                return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
                            },
                            groupSeparator: ",",
                            radixPoint: ".",
                            placeholder: "0",
                            digits: 2,
                            digitsOptional: !1
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_136158__) {
                    "use strict";
                    var _window = _interopRequireDefault(__nested_webpack_require_136158__(2)), _inputmask = _interopRequireDefault(__nested_webpack_require_136158__(1));
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    function _possibleConstructorReturn(self, call) {
                        return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
                    }
                    function _assertThisInitialized(self) {
                        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return self;
                    }
                    function _inherits(subClass, superClass) {
                        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                        subClass.prototype = Object.create(superClass && superClass.prototype, {
                            constructor: {
                                value: subClass,
                                writable: !0,
                                configurable: !0
                            }
                        }), superClass && _setPrototypeOf(subClass, superClass);
                    }
                    function _wrapNativeSuper(Class) {
                        var _cache = "function" == typeof Map ? new Map : void 0;
                        return _wrapNativeSuper = function _wrapNativeSuper(Class) {
                            if (null === Class || !_isNativeFunction(Class)) return Class;
                            if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                            if ("undefined" != typeof _cache) {
                                if (_cache.has(Class)) return _cache.get(Class);
                                _cache.set(Class, Wrapper);
                            }
                            function Wrapper() {
                                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                            }
                            return Wrapper.prototype = Object.create(Class.prototype, {
                                constructor: {
                                    value: Wrapper,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), _setPrototypeOf(Wrapper, Class);
                        }, _wrapNativeSuper(Class);
                    }
                    function isNativeReflectConstruct() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), 
                            !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function _construct(Parent, args, Class) {
                        return _construct = isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
                            var a = [ null ];
                            a.push.apply(a, args);
                            var Constructor = Function.bind.apply(Parent, a), instance = new Constructor;
                            return Class && _setPrototypeOf(instance, Class.prototype), instance;
                        }, _construct.apply(null, arguments);
                    }
                    function _isNativeFunction(fn) {
                        return -1 !== Function.toString.call(fn).indexOf("[native code]");
                    }
                    function _setPrototypeOf(o, p) {
                        return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                            return o.__proto__ = p, o;
                        }, _setPrototypeOf(o, p);
                    }
                    function _getPrototypeOf(o) {
                        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                            return o.__proto__ || Object.getPrototypeOf(o);
                        }, _getPrototypeOf(o);
                    }
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : {
                            default: obj
                        };
                    }
                    var document = _window.default.document;
                    if (document && document.head && document.head.attachShadow && void 0 === customElements.get("input-mask")) {
                        var InputmaskElement = function(_HTMLElement) {
                            function InputmaskElement() {
                                var _this;
                                _classCallCheck(this, InputmaskElement), _this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this));
                                var attributeNames = _this.getAttributeNames(), shadow = _this.attachShadow({
                                    mode: "closed"
                                }), input = document.createElement("input");
                                for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
                                var im = new _inputmask.default;
                                return im.dataAttribute = "", im.mask(input), input.inputmask.shadowRoot = shadow, 
                                _this;
                            }
                            return _inherits(InputmaskElement, _HTMLElement), InputmaskElement;
                        }(_wrapNativeSuper(HTMLElement));
                        customElements.define("input-mask", InputmaskElement);
                    }
                } ], installedModules = {}, __nested_webpack_require_141950__.m = modules, __nested_webpack_require_141950__.c = installedModules, 
                __nested_webpack_require_141950__.d = function(exports, name, getter) {
                    __nested_webpack_require_141950__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                    });
                }, __nested_webpack_require_141950__.r = function(exports) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                }, __nested_webpack_require_141950__.t = function(value, mode) {
                    if (1 & mode && (value = __nested_webpack_require_141950__(value)), 8 & mode) return value;
                    if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                    var ns = Object.create(null);
                    if (__nested_webpack_require_141950__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value
                    }), 2 & mode && "string" != typeof value) for (var key in value) __nested_webpack_require_141950__.d(ns, key, function(key) {
                        return value[key];
                    }.bind(null, key));
                    return ns;
                }, __nested_webpack_require_141950__.n = function(module) {
                    var getter = module && module.__esModule ? function getDefault() {
                        return module.default;
                    } : function getModuleExports() {
                        return module;
                    };
                    return __nested_webpack_require_141950__.d(getter, "a", getter), getter;
                }, __nested_webpack_require_141950__.o = function(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                }, __nested_webpack_require_141950__.p = "", __nested_webpack_require_141950__(__nested_webpack_require_141950__.s = 6);
                function __nested_webpack_require_141950__(moduleId) {
                    if (installedModules[moduleId]) return installedModules[moduleId].exports;
                    var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                    };
                    return modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_141950__), 
                    module.l = !0, module.exports;
                }
                var modules, installedModules;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    var __webpack_exports__ = {};
    (() => {
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("_lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("_lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("_lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 350;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            spollerTitle.parentElement.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 350;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        spollerActiveTitle.parentElement.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.querySelector(".icon-menu").addEventListener("click", (function(e) {
                if (bodyLockStatus) {
                    bodyLockToggle();
                    document.querySelector(".icon-menu").classList.toggle("_menu-active");
                    document.querySelector(".menu").classList.toggle("_menu-active");
                }
            }));
        }
        function spollerDropList() {
            const spollerDropLists = document.querySelectorAll("[data-drop-spoller]");
            if (spollerDropLists.length) {
                spollerDropLists.forEach((function(spollerDropList) {
                    const spollerDropListActiveItem = spollerDropList.querySelector("[data-drop-spoller-active-item]");
                    const spollerDropListTitlePlaceholder = spollerDropList.querySelector("[data-drop-spoller-title-placeholder]");
                    const spollerDropListTitle = spollerDropList.querySelector("[data-drop-spoller-title]");
                    const spollerDropListOpenBody = spollerDropList.querySelector("[data-spoller]");
                    if (!spollerDropListTitlePlaceholder && spollerDropListTitle) {
                        const div = document.createElement("div");
                        div.classList.add(`${spollerDropList.classList[1]}__item`);
                        div.classList.add(`${spollerDropList.classList[1]}__item_first`);
                        div.setAttribute("data-drop-spoller-item", "");
                        div.innerHTML = spollerDropListTitle.innerHTML;
                        spollerDropList.querySelector("[data-drop-spoller-body]").prepend(div);
                        if (!spollerDropListActiveItem) {
                            const spollerDropListItemFirst = spollerDropList.querySelector(`.${spollerDropList.classList[1]}__item_first`);
                            spollerDropListItemFirst.setAttribute("hidden", "");
                        }
                    }
                    if (spollerDropListTitlePlaceholder) spollerDropListTitlePlaceholder.classList.add("_placeholder");
                    const spollerDropListFirstItem = spollerDropList.querySelector(`.${spollerDropList.classList[1]}__item_first`);
                    if (spollerDropListFirstItem && spollerDropListActiveItem) spollerDropListFirstItem.classList.add("_active");
                    const spollerDropListItems = spollerDropList.querySelectorAll(`.${spollerDropList.classList[1]}__item`);
                    if (spollerDropListItems.length) for (let i = 0; i < spollerDropListItems.length; i++) {
                        const spollerDropListItem = spollerDropListItems[i];
                        spollerDropListItem.addEventListener("click", (function() {
                            if (!spollerDropList.querySelectorAll("._slide").length) {
                                const spollerDropListItemFirst = spollerDropList.querySelector(`.${spollerDropList.classList[1]}__item_first`);
                                if (spollerDropListItemFirst) spollerDropListItemFirst.removeAttribute("hidden", "");
                                if (spollerDropListTitle) {
                                    spollerDropListTitle.innerHTML = spollerDropListItem.innerHTML;
                                    spollerDropListTitle.classList.remove("_error");
                                }
                                for (let i = 0; i < spollerDropListItems.length; i++) {
                                    spollerDropListItems[i].classList.remove("_active");
                                    spollerDropListItems[i].removeAttribute("hidden");
                                }
                                if (spollerDropListActiveItem) spollerDropListItem.classList.add("_active"); else spollerDropListItem.setAttribute("hidden", "");
                                if (spollerDropListOpenBody) {
                                    _slideUp(spollerDropListOpenBody.nextElementSibling, 350);
                                    spollerDropListOpenBody.classList.remove("_spoller-active");
                                    spollerDropList.classList.remove("_spoller-active");
                                }
                                if (spollerDropListTitlePlaceholder) spollerDropListTitlePlaceholder.classList.remove("_placeholder");
                            }
                        }));
                    }
                }));
                document.addEventListener("click", (function(e) {
                    if (!e.target.closest("[data-drop-spoller]")) spollerDropLists.forEach((spollerDropList => {
                        const spollerDropListOpenBody = spollerDropList.querySelector("[data-spoller]");
                        if (spollerDropListOpenBody.classList.contains("_spoller-active") && spollerDropList.classList.contains("_spoller-active")) {
                            _slideUp(spollerDropListOpenBody.nextElementSibling, 350);
                            spollerDropListOpenBody.classList.remove("_spoller-active");
                            spollerDropList.classList.remove("_spoller-active");
                        }
                    }));
                }));
            }
        }
        const headerProfileTop = document.querySelector(".profile-header__top");
        const headerProfileMain = document.querySelector(".profile-header__main");
        if (headerProfileTop && headerProfileMain) headerProfileTop.addEventListener("click", (() => {
            headerProfileTop.classList.toggle("_active");
            headerProfileMain.classList.toggle("_active");
        }));
        document.addEventListener("click", (e => {
            if (!e.target.closest(".profile-header__top") && !e.target.closest(".profile-header__main") && headerProfileTop && headerProfileMain) {
                headerProfileTop.classList.remove("_active");
                headerProfileMain.classList.remove("_active");
            }
        }));
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if (typeof items === "number") super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if (typeof selector !== "string") return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if (typeof selector === "string") {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (html.indexOf("<li") === 0) toCreate = "ul";
                    if (html.indexOf("<tr") === 0) toCreate = "tbody";
                    if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
                    if (html.indexOf("<tbody") === 0) toCreate = "table";
                    if (html.indexOf("<option") === 0) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === "string") {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (arguments.length === 2) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === "function") {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === "function") {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (arguments.length === 1) if (typeof props === "string") {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (arguments.length === 2 && typeof props === "string") {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || typeof selector === "undefined") return false;
            if (typeof selector === "string") {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if (typeof index === "undefined") return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if (typeof newChild === "string") {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if (typeof newChild === "string") {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode !== null) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if (typeof selector === "undefined") return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if (typeof args[0] === "undefined") {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = $el[0].clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = $el[0].clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slide.css("display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if (typeof activeIndex === "undefined") {
                for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart_transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart: transitionStart_transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - loopedSlides * 3 + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if (params.touchEventsTarget === "wrapper") if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = e.type === "touchstart";
            if (!data.isTouchEvent && "which" in e && e.which === 3) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(eventPath[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if (e.type !== "touchstart") {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ($targetEl[0].nodeName === "SELECT") data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && e.type !== "touchmove") return;
            const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
            const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
                if (swiper.imagesLoaded !== void 0) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if ($wrapperEl.length === 0 && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
                    wrongRTL: $wrapperEl.css("display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        const core = Swiper;
        function Keyboard({swiper, extendParams, on, emit}) {
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            swiper.keyboard = {
                enabled: false
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            });
            function handle(event) {
                if (!swiper.enabled) return;
                const {rtlTranslate: rtl} = swiper;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                const kc = e.keyCode || e.charCode;
                const pageUpDown = swiper.params.keyboard.pageUpDown;
                const isPageUp = pageUpDown && kc === 33;
                const isPageDown = pageUpDown && kc === 34;
                const isArrowLeft = kc === 37;
                const isArrowRight = kc === 39;
                const isArrowUp = kc === 38;
                const isArrowDown = kc === 40;
                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return;
                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    let inView = false;
                    if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return;
                    const $el = swiper.$el;
                    const swiperWidth = $el[0].clientWidth;
                    const swiperHeight = $el[0].clientHeight;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const swiperOffset = swiper.$el.offset();
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiperWidth, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiperHeight ], [ swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight ] ];
                    for (let i = 0; i < swiperCoord.length; i += 1) {
                        const point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue;
                            inView = true;
                        }
                    }
                    if (!inView) return;
                }
                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }
                emit("keyPress", kc);
                return;
            }
            function enable() {
                if (swiper.keyboard.enabled) return;
                dom(document).on("keydown", handle);
                swiper.keyboard.enabled = true;
            }
            function disable() {
                if (!swiper.keyboard.enabled) return;
                dom(document).off("keydown", handle);
                swiper.keyboard.enabled = false;
            }
            on("init", (() => {
                if (swiper.params.keyboard.enabled) enable();
            }));
            on("destroy", (() => {
                if (swiper.keyboard.enabled) disable();
            }));
            Object.assign(swiper.keyboard, {
                enable,
                disable
            });
        }
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
                    if (current > total - 1) current -= total;
                    if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
                } else if (typeof swiper.snapIndex !== "undefined") current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if (params.type === "fraction") {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if (params.type === "progressbar") {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if (params.type === "custom" && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if (params.type === "fraction") {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if (params.type === "progressbar") {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if (params.type !== "custom") emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if ($el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if (params.type === "bullets" && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === "bullets" && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if (params.type === "progressbar" && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".team-profile__slider")) new core(".team-profile__slider", {
                modules: [ Navigation, Keyboard, Pagination ],
                slidesPerView: 1,
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        speed: 350
                    },
                    768.98: {
                        speed: 700
                    }
                },
                allowTouchMove: false,
                navigation: {
                    prevEl: ".application-team-profile__arrow_left",
                    nextEl: ".application-team-profile__arrow_right"
                },
                pagination: {
                    el: ".application-team-profile__pagination",
                    clickable: true
                },
                speed: 700,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: false
                }
            });
        }
        window.addEventListener("load", (function() {
            initSliders();
        }));
        const allModules = {};
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-youtube",
                    youtubePlaceAttribute: "data-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    bodyLockDelay: 500,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        }
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                    this.targetOpen.selector = selectorValue;
                    this._selectorOpen = true;
                }
                if (this.isOpen) {
                    this._reopen = true;
                    this.close();
                }
                if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                if (!this._reopen) this.previousActiveElement = document.activeElement;
                this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                if (this.targetOpen.element) {
                    if (this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)) {
                        const codeVideo = this.targetOpen.element.getAttribute(this.options.youtubeAttribute);
                        const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                        const iframe = document.createElement("iframe");
                        const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                        iframe.setAttribute("allowfullscreen", "");
                        iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                        iframe.setAttribute("src", urlVideo);
                        if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                    }
                    if (this.options.hashSettings.location) {
                        this._getHash();
                        this._setHash();
                    }
                    this.options.on.beforeOpen(this);
                    this.targetOpen.element.classList.add(this.options.classes.popupActive);
                    document.body.classList.add(this.options.classes.bodyActive);
                    const menuItem = document.querySelector(".menu");
                    if (menuItem && !menuItem.classList.contains("_menu-active")) if (!this._reopen) bodyLockToggle(400); else this._reopen = false; else if (!this._reopen) bodyLockToggle(400); else this._reopen = false;
                    this.targetOpen.element.setAttribute("aria-hidden", "false");
                    this.previousOpen.selector = this.targetOpen.selector;
                    this.previousOpen.element = this.targetOpen.element;
                    this._selectorOpen = false;
                    setTimeout((() => {
                        this.isOpen = true;
                    }), 400);
                    setTimeout((() => {
                        this._focusTrap();
                    }), 50);
                    document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                        detail: {
                            popup: this
                        }
                    }));
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                if (this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.body.classList.remove(this.options.classes.bodyActive);
                    const menuItem = document.querySelector(".menu");
                    if (menuItem && !menuItem.classList.contains("_menu-active")) bodyLockToggle(400); else bodyLockToggle(400);
                    setTimeout((() => {
                        this.isOpen = false;
                    }), 400);
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                this.open(window.location.hash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
        }
        allModules.popup = new Popup({});
        __webpack_require__(794);
        function formFieldsInit() {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("click", (function(e) {
                const targetElement = e.target;
                if (targetElement.type === "checkbox" && targetElement.checked === true && targetElement.classList.contains("_error") && targetElement.parentElement.classList.contains("_error")) {
                    targetElement.classList.remove("_error");
                    targetElement.parentElement.classList.remove("_error");
                    targetElement.parentElement.parentElement.classList.remove("_error");
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    targetElement.classList.add("_focus");
                    targetElement.parentElement.classList.add("_focus");
                    if (targetElement.dataset.mask === "phone") {
                        targetElement.classList.add("_mask");
                        Inputmask("+7 (999) 999-99-99", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                    }
                    if (targetElement.dataset.mask === "card") {
                        targetElement.classList.add("_mask");
                        Inputmask("9999 9999 9999 9999", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                    }
                    if (targetElement.dataset.mask === "data-card") {
                        targetElement.classList.add("_mask");
                        Inputmask("99/99", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                    }
                    if (targetElement.dataset.mask === "cvv") {
                        targetElement.classList.add("_mask");
                        Inputmask("999", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                    }
                    if (targetElement.dataset.mask === "date") {
                        targetElement.classList.add("_mask");
                        Inputmask("99.99.9999", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                        targetElement.addEventListener("input", (function() {
                            if (targetElement.value[0] > 3) targetElement.value = "3";
                            if (targetElement.value[1] > 1 && targetElement.value[0] == 3) {
                                const value = targetElement.value.slice(0, -9);
                                targetElement.value = `${value}1`;
                            }
                            if (targetElement.value[0] + targetElement.value[1] == "00") targetElement.value = "01";
                            if (targetElement.value[3] > 1) {
                                const value = targetElement.value.slice(0, -7);
                                targetElement.value = `${value}1`;
                            }
                            if (targetElement.value[4] > 2 && targetElement.value[3] == 1) {
                                const value = targetElement.value.slice(0, -6);
                                targetElement.value = `${value}2`;
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "02") {
                                const value = targetElement.value.slice(0, -8);
                                if (value > 28) {
                                    const newValue = targetElement.value.slice(2, 10);
                                    targetElement.value = `28${newValue}`;
                                }
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "04") {
                                const value = targetElement.value.slice(0, -8);
                                if (value > 30) {
                                    const newValue = targetElement.value.slice(2, 10);
                                    targetElement.value = `30${newValue}`;
                                }
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "06") {
                                const value = targetElement.value.slice(0, -8);
                                if (value > 30) {
                                    const newValue = targetElement.value.slice(2, 10);
                                    targetElement.value = `30${newValue}`;
                                }
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "09") {
                                const value = targetElement.value.slice(0, -8);
                                if (value > 30) {
                                    const newValue = targetElement.value.slice(2, 10);
                                    targetElement.value = `30${newValue}`;
                                }
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "11") {
                                const value = targetElement.value.slice(0, -8);
                                if (value > 30) {
                                    const newValue = targetElement.value.slice(2, 10);
                                    targetElement.value = `30${newValue}`;
                                }
                            }
                            if (targetElement.value[3] + targetElement.value[4] == "00") {
                                const value = targetElement.value.slice(0, -7);
                                targetElement.value = `${value}01`;
                            }
                            if (targetElement.value[6] > 2) {
                                const value = targetElement.value.slice(0, -4);
                                targetElement.value = `${value}2`;
                            }
                        }));
                    }
                    if (targetElement.dataset.mask === "time") {
                        targetElement.classList.add("_mask");
                        Inputmask("99:99", {
                            clearIncomplete: false,
                            clearMaskOnLostFocus: true
                        }).mask(targetElement);
                        targetElement.addEventListener("input", (function() {
                            if (targetElement.value[0] > 2) targetElement.value = "2_:__";
                            if (targetElement.value[1] > 3 && targetElement.value[0] == 2) targetElement.value = "23:__";
                            if (targetElement.value[3] >= 6) {
                                const value = targetElement.value.slice(0, -3);
                                targetElement.value = `${value}:5_`;
                            }
                        }));
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (targetElement.dataset.labelInput = " ") {
                        if (targetElement.value === "") {
                            if (targetElement.dataset.mask != "phone" && targetElement.dataset.mask != "date" && targetElement.dataset.mask != "time") {
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "phone") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "card") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "data-card") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "cvv") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "date") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.value === "" && targetElement.dataset.mask === "time") {
                                targetElement.placeholder = targetElement.dataset.placeholder;
                                targetElement.inputmask.remove();
                                targetElement.classList.remove("_mask");
                                targetElement.classList.remove("_focus");
                                targetElement.parentElement.classList.remove("_focus");
                            }
                            if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                        }
                    } else {
                        if (targetElement.dataset.mask != "phone" && targetElement.dataset.mask != "date" && targetElement.dataset.mask != "time") {
                            targetElement.classList.remove("_focus");
                            targetElement.parentElement.classList.remove("_focus");
                        }
                        if (targetElement.value === "" && targetElement.dataset.mask === "phone") {
                            targetElement.placeholder = targetElement.dataset.placeholder;
                            targetElement.inputmask.remove();
                            targetElement.classList.remove("_mask");
                            targetElement.classList.remove("_focus");
                            targetElement.parentElement.classList.remove("_focus");
                        }
                        if (targetElement.value === "" && targetElement.dataset.mask === "date") {
                            targetElement.placeholder = targetElement.dataset.placeholder;
                            targetElement.inputmask.remove();
                            targetElement.classList.remove("_mask");
                            targetElement.classList.remove("_focus");
                            targetElement.parentElement.classList.remove("_focus");
                        }
                        if (targetElement.value === "" && targetElement.dataset.mask === "time") {
                            targetElement.placeholder = targetElement.dataset.placeholder;
                            targetElement.inputmask.remove();
                            targetElement.classList.remove("_mask");
                            targetElement.classList.remove("_focus");
                            targetElement.parentElement.classList.remove("_focus");
                        }
                        if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                    }
                }
            }));
        }
        formFieldsInit();
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if (formRequiredItem.offsetParent !== null) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.mask === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (formRequiredItem.dataset.mask == "phone") if (!formRequiredItem.value || formRequiredItem.value.indexOf("_") != -1) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.dataset.mask == "date") if (!formRequiredItem.value || formRequiredItem.value.indexOf("_") != -1) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.dataset.mask == "time") if (!formRequiredItem.value || formRequiredItem.value.indexOf("_") != -1) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.dataset.mask == "card") if (!formRequiredItem.value || formRequiredItem.value.indexOf("_") != -1) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (!formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_error");
                formRequiredItem.parentElement.classList.add("_error");
                formRequiredItem.parentElement.parentElement.classList.add("_error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.hasAttribute("data-error") && formRequiredItem.getAttribute("data-error")) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", '<div class="form__error">' + formRequiredItem.getAttribute("data-error") + "</div>");
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_error");
                formRequiredItem.parentElement.classList.remove("_error");
                formRequiredItem.parentElement.parentElement.classList.remove("_error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                const inputs = form.querySelectorAll('input:not([data-input],[type="checkbox"]),textarea');
                inputs.forEach((inputItem => {
                    inputItem.parentElement.classList.remove("_focus");
                    inputItem.classList.remove("_focus");
                    inputItem.value = "";
                    inputItem.dataset.placeholder = inputItem.dataset.placeholder;
                    if (inputItem.dataset.mask === "phone") if (inputItem.classList.contains("_mask")) {
                        inputItem.inputmask.remove();
                        inputItem.classList.remove("_mask");
                    }
                    if (inputItem.dataset.mask === "date") if (inputItem.classList.contains("_mask")) {
                        inputItem.inputmask.remove();
                        inputItem.classList.remove("_mask");
                    }
                    if (inputItem.dataset.mask === "time") if (inputItem.classList.contains("_mask")) {
                        inputItem.inputmask.remove();
                        inputItem.classList.remove("_mask");
                    }
                }));
                if (allModules.select) {
                    let selects = form.querySelectorAll(".select");
                    if (selects.length) for (let index = 0; index < selects.length; index++) {
                        const select = selects[index].querySelector("select");
                        allModules.select.selectBuild(select);
                    }
                }
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                if (checkboxes.length) checkboxes.forEach((checkboxItem => {
                    checkboxItem.checked = false;
                    if (checkboxItem.parentElement.classList.contains("_checked")) checkboxItem.parentElement.classList.remove("_checked");
                }));
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            },
            errorsDrop(form) {
                let error = 0;
                const dropTitlesRequired = form.querySelectorAll("[data-drop-title-required]");
                if (dropTitlesRequired.length) dropTitlesRequired.forEach((function(dropTitleRequired) {
                    if (dropTitleRequired.classList.contains("_placeholder")) {
                        error++;
                        dropTitleRequired.classList.add("_error");
                    } else dropTitleRequired.classList.remove("_error");
                }));
                return error;
            },
            errorsPassword(form) {
                let error = 0;
                const requiredPasswordItems = form.querySelectorAll("[data-required-password]");
                if (requiredPasswordItems.length) {
                    if (!requiredPasswordItems[0].value || requiredPasswordItems[0].value != requiredPasswordItems[1].value) {
                        this.addError(requiredPasswordItems[0]);
                        error++;
                    } else this.removeError(requiredPasswordItems[0]);
                    if (!requiredPasswordItems[1].value || requiredPasswordItems[0].value != requiredPasswordItems[1].value) {
                        this.addError(requiredPasswordItems[1]);
                        error++;
                    } else this.removeError(requiredPasswordItems[1]);
                }
                return error;
            }
        };
        function formSubmit(validate) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    e.preventDefault();
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = validate ? formValidate.getErrors(form) : 0;
                const errorDrop = validate ? formValidate.errorsDrop(form) : 0;
                const errorPassword = validate ? formValidate.errorsPassword(form) : 0;
                if (error === 0 && errorDrop === 0 && errorPassword === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            alert(responseResult.message);
                            form.classList.remove("_sending");
                            formSent(form);
                        } else {
                            alert("Ошибка при отправке формы");
                            form.classList.remove("_sending");
                        }
                    } else {
                        e.preventDefault();
                        formSent(form);
                    }
                }
            }
            function formSent(form) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (allModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? allModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
            }
        }
        window.addEventListener("load", (() => {
            formSubmit(true);
        }));
        isWebp();
        menuInit();
        spollers();
        spollerDropList();
    })();
})();