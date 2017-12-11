define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_TitleBar_ba3d4433255e4ba2b7e1c138d727f1bd: function AS_TitleBar_ba3d4433255e4ba2b7e1c138d727f1bd(eventobject) {
        var self = this;

        function SHOW_ALERT__a524113769504409b0c1b5a80fb78499_True() {}
        function SHOW_ALERT__a524113769504409b0c1b5a80fb78499_False() {}
        function SHOW_ALERT__a524113769504409b0c1b5a80fb78499_Callback(response) {
            if (response == true) {
                SHOW_ALERT__a524113769504409b0c1b5a80fb78499_True()
            } else {
                SHOW_ALERT__a524113769504409b0c1b5a80fb78499_False()
            };
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "Light conditions",
            "yesLabel": "OK.",
            "noLabel": "Thanks!",
            "message": "Light conditions succesfully measured!",
            "alertHandler": SHOW_ALERT__a524113769504409b0c1b5a80fb78499_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    },
    AS_Button_b6cd26777ac2431686261a4fb5fdf6f7: function AS_Button_b6cd26777ac2431686261a4fb5fdf6f7(eventobject) {
        var self = this;
        if ((switchState == false)) {
            self.view.ONoff2["text"] = "ON";
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.ONoff2["skin"] = "ONskin";
                }, null);
            } else {
                (function() {
                    self.view.ONoff2["skin"] = "ONskin";
                })();
            }
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.ONoff2["focusSkin"] = "FocusONskin";
                }, null);
            } else {
                (function() {
                    self.view.ONoff2["focusSkin"] = "FocusONskin";
                })();
            }
        } else if ((switchState == true)) {
            self.view.ONoff2["text"] = "OFF";
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.ONoff2["skin"] = "OFFskin";
                }, null);
            } else {
                (function() {
                    self.view.ONoff2["skin"] = "OFFskin";
                })();
            }
            if (kony.theme.getCurrentTheme() != "default") {
                kony.theme.setCurrentTheme("default", function() {
                    self.view.ONoff2["focusSkin"] = "FocusOFFskin";
                }, null);
            } else {
                (function() {
                    self.view.ONoff2["focusSkin"] = "FocusOFFskin";
                })();
            }
        }
        if (switchState == false) {
            turnLightOn();
        } else if (switchState == true) {
            turnLightOff();
        }
    },
    AS_Slider_df66f753663d4922b20cb9eb127c4998: function AS_Slider_df66f753663d4922b20cb9eb127c4998(eventobject, selectedvalue) {
        var self = this;
        if ((self.view.ONoff2.text == "ON")) {
            if ((self.view.SliderBrightness.selectedValue < 100)) {
                torchBrightness = 5;
            }
            if ((self.view.SliderBrightness.selectedValue < 80)) {
                torchBrightness = 4;
            }
            if ((self.view.SliderBrightness.selectedValue < 60)) {
                torchBrightness = 3;
            }
            if ((self.view.SliderBrightness.selectedValue < 40)) {
                torchBrightness = 2;
            }
            if ((self.view.SliderBrightness.selectedValue < 20)) {
                torchBrightness = 1;
            }
            adjustLight();
        }
    }
});