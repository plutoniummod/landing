# Setting up FastDL

1. Setup any form of Web Server. (Google is your friend here)

2. Place a copy of your `mods` folder into your web server's root directory.

3. Verify you can access and download your mod files from the public internet.

Here's an example:

![example](/images/docs/server/t5/fastdl/dhHTEQo.png)

4. Set your `sv_wwwBaseURL` to your server's IP Address. (Example: `set sv_wwwBaseURL "http://123.456.789.12/"`)

## Notes
For some web servers it is neccesary to add the following [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) if they don't already exist in your web server's settings to get downloads functioning:

* .ff
* .arena
* .iwi
* .iwd
* .files
* .csv
* .wav
* .gsc
* .csc
