# How to stop your game from being zoomed in

If your game is zoomed in as shown in the screenshot below even though the game resolution isn't higher than your monitor resolution then this might fix your issue.

![img](/images/docs/fix-game-zoomed-in/example.png)

## Why is this happening?

This is happening because your scaling setting in Windows is set to something higher than 100% and some games will use that scaling setting but you can prevent that from happening.
![img](/images/docs/fix-game-zoomed-in/windows-setting.png)

## How to fix it

First, try pressing ALT+Enter to see if the game will force fullscreen. If not, keep reading.

The fix below will only change the setting for Plutonium games while keeping your Windows scaling setting intact for every other applications.

1. Make sure that the Plutonium launcher and any Plutonium game is closed.

2. Press Win + R, paste `%localappdata%\Plutonium\bin` and press Enter

3. Right click on `plutonium-bootstrapper-win32` and click on `Properties`

4. Go to the `Compatibility tab` and click on `Change high DPI settings`

5. Check `Override high DPI scaling behavior`

6. In `Scaling performed by` select `Application`. If this was already set to `Application` try the other option(s).

![img](/images/docs/fix-game-zoomed-in/app-setting.png)

7. Open the launcher again and boot up your game to see if the issue is fixed.
