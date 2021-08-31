# Low FPS

If you are encountering Low FPS you can try these steps to increase it.

## Method 1

1\. Open the Plutonium Launcher's `bin` folder. You can do this by pressing `Windows Key + R` and typing `%localappdata%\Plutonium\bin`

![img](https://i.imgur.com/CTF3jDc.png)

2\. Right click `plutonium-bootstrapper-win32.exe` -> properties -> compatibility -> tick the "disable fullscreen optimizations" box.

![gif](https://i.imgur.com/g7ClFcD.png)

## Method 2 (Laptops with two GPUs)

1\. Open your windows settings -> System -> Display -> Graphics settings (on the bottom)

2\. Click Browse and navigate to `C:\Users\YOURUSERNAME\AppData\Local\Plutonium\bin` (you may have to enable "show hidden files and folders" in the windows explorer options to see the "AppData" folder)

![img](https://i.gyazo.com/db5c354783a12a555e5d65b7a713563d.png)

![img](https://i.imgur.com/O6ILudW.png)

3\. Select plutonium-bootstrapper-win32.exe and hit the options button

![img](https://i.gyazo.com/fa569eacd9abc23f4c1eae37d3215c3c.png)

4\. Select your high performance/dedicated gpu and hit save

![img](https://i.imgur.com/OWfru0K.png)

## Method 3

1. Open the console https://plutonium.pw/docs/opening-console/

2. Type /com_maxfps 0 and press Enter (this command will tell the game to have an unlimited FPS cap so once you get this fixed you should set it your monitor refresh rate instead e.g /com_maxfps 60)

## Method 4

Some computers can't handle higher graphics, lowering the graphics may help in the in-game graphic options could help on weaker computers.

Also some games may get lower FPS when playing in windowed borderless mode or when playing in fullscreen. Try switching between both modes to see if one gives you more FPS.
