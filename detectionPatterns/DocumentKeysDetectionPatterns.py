class DocumentKeysDetectionPatterns:

    def __init__(self):
        self.patterns = []
        self.name = "DocumentKeys"
        phantom = (1.4, "PhantomJS", ["xmlEncoding",
                         "xmlVersion",
                         "xmlStandalone",
                         "selectedStylesheetSet",
                         "preferredStylesheetSet",
                         "webkitVisibilityState",
                         "webkitHidden",
                         "onbeforecopy",
                         "onbeforecut",
                         "onbeforepaste",
                         "onsearch",
                         "oncancel",
                         "oncuechange",
                         "onmousewheel",
                         "webkitIsFullScreen",
                         "webkitCurrentFullScreenElement",
                         "webkitFullscreenEnabled",
                         "webkitFullscreenElement",
                         "onwebkitfullscreenchange",
                         "onwebkitfullscreenerror",
                         "registerElement",
                         "caretRangeFromPoint",
                         "webkitCancelFullScreen",
                         "webkitExitFullscreen",
                         "releaseCapture", #added
                         "mozSetImageElement",
                         "mozCancelFullScreen",
                         "enableStyleSheetsForSet",
                         "caretPositionFromPoint",
                         "onbeforescriptexecute",
                         "onafterscriptexecute",
                         "mozFullScreen",
                         "mozFullScreenEnabled",
                         "mozFullScreenElement",
                         "selectedStyleSheetSet",
                         "lastStyleSheetSet",
                         "preferredStyleSheetSet",
                         "styleSheetSets",
                         "ondragexit",
                         "onloadend",
                         "onshow",
                         "onmozfullscreenchange",
                         "onmozfullscreenerror",
                         "onanimationcancel",
                         "onanimationend",
                         "onanimationiteration",
                         "onanimationstart",
                         "ontransitioncancel",
                         "ontransitionend",
                         "ontransitionrun",
                         "ontransitionstart",
                         "onwebkitanimationend",
                         "onwebkitanimationiteration",
                         "onwebkitanimationstart",
                         "onwebkittransitionend"])
        seleniumChrome  = (1.4, "SelChromeChromium", ["\$cdc","\$wdc","\$[a-z]dc"])
        nightmare = (1.4, "Nightmare", ["onvisibilitychange", "onshow"])
        seleniumIE = (1.4, "SelIE", [("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERROR",'C'), ("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERRORCODE",'C'),
        "__webdriver_script_fn"])
        misc = (1.4, "Misc.", ["_IDE([^a-zA-z]|_)", "callSelenium", "_Selenium_IDE_Recorder","selenium",
        "nightmare","_selenium", "fxdriver_evaluate","driver_unwrapped", "webdriver_unwrapped",
        "driver_evaluate", "selenium_unwrapped","fxdriver_unwrapped", "webdriver_evaluate", "webdriver-evaluate",
        "selenium_evaluate", "webdriver_script_function", "webdriver_script_func"])
        self.patterns.extend((phantom, seleniumChrome, nightmare, seleniumIE, misc))