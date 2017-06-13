# Test Case: Reproducing update_state issue with multiple Roon Cores

This repository contains a test case for reproducing a Roon issue I was seing.

## Setup

* A standalone Roon Server. In my case it's running on Linux.
* Roon Remote on MacOS, connected to the RoonServer.
* An audio device, can be the local output of the machine running MacOS.

## Reproducing the problem

* Start the extension so that it appears under Settings->Extensions
* Attach the Volume Control to the audio device. At that point, you should already be seeing two entries in the dropdown under "Device Setup"
* Watch the volume of the audio device change every 5 seconds. You should also see two 'controls_changed' log entries in the extension log output.
* **Stop the Roon Remote**
* Once the Roon Remote was stopped, not 'controls_changed' events appear anymore, even though the standalone server is still runing.
* Restart the Roon Remote. Although one 'controls_changed' entry appears in the log output, the volume UI does not refresh anymore.
