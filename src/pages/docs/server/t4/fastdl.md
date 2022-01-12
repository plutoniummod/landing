# Setting up FastDL

1. Setup any form of Web Server. (Google is your friend here)

2. Place a copy of your `mods` and `usermaps` into your web server's root directory.

3. Verify you can access and download them from the public internet.

Here's an example:

![example](/images/docs/server/t4/fastdl/dhHTEQo.png)

4. Set your `sv_wwwBaseURL` to your server's IP Address. (Example: `set sv_wwwBaseURL "http://123.456.789.12/"`)

## Notes
For some web servers it is neccesary to add the following mime types if they don't already exist\
in your web server's settings to get downloads functioning:
1. .ff
2. .arena
3. .iwi
4. .iwd
5. .files
6. .csv
7. .wav
8. .gsc
9. .csc
