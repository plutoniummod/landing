# How to update Plutonium Mod

## Updating the Plutonium launcher

The launcher updates itself automatically when you start it so you shouldn't try updating it manually. It should appear for a few seconds before the launcher starts if everything is working correctly.
![img](/images/docs/update/update-2.png)

If you don't get the updates automatically this probably means that you pinned the Plutonium launcher while it was running.
<br/>To fix this simply follow these instructions:

1. Unpin Plutonium from your taskbar or start menu
2. Close any Plutonium game running and close the launcher if it's running
3. Pin `plutonium.exe` to your taskbar/start menu and start it

## Checking if your launcher is up-to-date

1. Open your launcher and click on your profile picture in the top right
2. Open the [changelog page](https://plutonium.pw/docs/changelog/)
3. Compare the Core version in your launcher and the latest changelog.
If your Core version is inferior to the one on the changelog then you aren't up-to-date. (Note that the latest version is the one on the right.
For example `r2158-r2190` means that the previous version was `r2158` and that the latest version is `r2190`.
**This is an example!** `r2190` might not be the latest version anymore when you read this.)

## Fixing "Failed to check for updates"

This happens either because you're starting the launcher directly without starting the updater before (often caused by pinning the launcher while it was running) or because something is blocking the connection to the updater.
<br/>Try these methods one by one in the order to try to fix the issue:

### Method 1 (Pinning the launcher properly)
1. Go to where your Plutonium launcher (`plutonium.exe`) is located (this is often in your game files or on your desktop)
2. Delete the application file(s) named `plutonium` and `plutonium.new` (if you have it). Note that these applications could also end with the .exe extension if you have extensions enabled in Windows.
   ![img](/images/docs/update/update-1.png)
3. Follow the [Plutonium Launcher instructions](https://plutonium.pw/docs/install/#plutonium-launcher) to download and install your launcher correctly.

### Method 2 (Changing DNS)
[Change your DNS](https://www.windowscentral.com/how-change-your-pcs-dns-settings-windows-10) to Google or Cloudflare DNS for example.

### Method 3 (Antivirus)
Follow the instructions on the [antivirus documentation](https://plutonium.pw/docs/antivirus/#how-do-i-fix-this-windows-defender) to make sure your antivirus isn't blocking anything.

### Method 4 (VPN)
If you're using a VPN try turning it off. If you aren't using a VPN try using one to see if that allows you to update.
