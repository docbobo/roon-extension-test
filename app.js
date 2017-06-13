"use strict";

var RoonApi              = require('node-roon-api'),
    RoonApiVolumeControl = require('node-roon-api-volume-control');

var denon = {};
var roon = new RoonApi({
    extension_id:        'org.pruessmann.roon.test',
    display_name:        'Roon Test Extension',
    display_version:     '0.0.1',
    publisher:           'Doc Bobo',
    email:               'boris@pruessmann.org',
    website:             'https://github.com/docbobo/roon-extension-test',
});

var svc_volume_control = new RoonApiVolumeControl(roon);

roon.init_services({
    provided_services: [ svc_volume_control ]
});

function create_volume_control() {
    var device = {
        state: {
            display_name: "Main Zone",
            volume_type:  "db",
            volume_min:   -79.5,
            volume_step:  0.5,
            volume_value: 50,
            is_muted:     false
        },
        set_volume: function (req, mode, value) {
        },
        set_mute: function (req, inAction) {
        }
    };

    var volume_control = svc_volume_control.new_device(device);
    setInterval(() => {
        device.state.is_muted = !device.state.is_muted;
        volume_control.update_state({ is_muted: device.state.is_muted });
    }, 5000);
}

create_volume_control();

roon.start_discovery();
