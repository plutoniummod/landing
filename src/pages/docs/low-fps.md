# Low FPS

If you are encountering Low FPS you can try these steps to increase it.

## Method 1 (fullscreen optimization)

1\. Open the Plutonium Launcher's `bin` folder. You can do this by pressing `Windows Key + R` and typing `%localappdata%\Plutonium\bin`

![img](/images/docs/low-fps/CTF3jDc.png)

2\. Right click `plutonium-bootstrapper-win32.exe` -> properties -> compatibility -> tick the "disable fullscreen optimizations" box.

![gif](/images/docs/low-fps/g7ClFcD.png)

## Method 2 (laptops with two GPUs)

1\. Open your windows settings -> System -> Display -> Graphics settings (on the bottom)

2\. Click Browse and navigate to `C:\Users\YOURUSERNAME\AppData\Local\Plutonium\bin` (you may have to enable "show hidden files and folders" in the windows explorer options to see the "AppData" folder)

![img](/images/docs/low-fps/db5c354783a12a555e5d65b7a713563d.png)

![img](/images/docs/low-fps/O6ILudW.png)

3\. Select plutonium-bootstrapper-win32.exe and hit the options button

![img](/images/docs/low-fps/fa569eacd9abc23f4c1eae37d3215c3c.png)

4\. Select your high performance/dedicated gpu and hit save

![img](/images/docs/low-fps/OWfru0K.png)

## Method 3 (capping the game FPS)

1. [Open the console](/docs/opening-console/)

2. Type `com_maxfps 60` and press Enter (Replace `60` by [your monitor refresh rate](https://www.testufo.com/refreshrate))
   (Don't go above 250 as higher values are known to cause instability)

## Method 4 (updating GPU drivers)

Keeping your GPU drivers up-to-date is important for performance and stability. [See this guide](https://www.howtogeek.com/135976/how-to-update-your-graphics-drivers-for-maximum-gaming-performance/)

## Method 5 (lowering video settings)

Some computers can't handle higher graphics, lowering your graphics settings in game may help on weaker computers.

You can also try switching between windowed borderless mode, fullscreen, and normal windowed mode. Try switching between them to see if one gives you more FPS.
