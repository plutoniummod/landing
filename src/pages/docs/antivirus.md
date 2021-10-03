# Why is my antivirus saying Plutonium is a virus?

## **Why is my antivirus saying Plutonium is a virus?**

Plutonium is what's known as a false positive (your antivirus thinks Plutonium is a virus, when in reality Plutonium is 100% clean.)
The devs behind this project have been working on this project for years and tons of hard work has gone into this. They wouldn't risk all their credibility by compromising your PC with malware.

---

## **Why is this happening?**

Plutonium is modifying the games in memory, just like a virus would manipulate other programs thus causing this false detection

---

## **How do I fix this?** (Windows Defender)

We have a video tutorial on how to add exclusions to Windows Defender here:

<Player url="https://youtu.be/0ijMY8FiLSg" />

Alternatively, if you want a faster method you can run a powershell command here:
<Details title="Powershell Command to add Windows Defender Exclusion">
The fastest way to fix this is to right click your start button and press `Windows Powershell (Admin)` and paste the following command into it:
`powershell -inputformat none -outputformat none -NonInteractive -Command Add-MpPreference -ExclusionPath "%localappdata%\Plutonium"`

Note: right click to paste.

![GIF showing how to do this](/images/docs/antivirus/Ecyyy6Q.gif)

(Please note that this only tells **Windows Defender** to not flag Plutonium, if you have any other antivirus, you must refer to their documentation.)
</Details>

---

## **How do I fix this?** (Other Antivirus)

Learn how to add a folder exclusion for Plutonium for your specific AV here:
[Malwarebytes](https://support.malwarebytes.com/hc/en-us/articles/360038479234) | [Avast](https://support.avast.com/en-us/article/Antivirus-scan-exclusions/) | [Norton](https://support.norton.com/sp/en/us/home/current/solutions/v3672136) | [Kaspersky](https://support.kaspersky.com/14848#block1)
| [AVG](https://support.avg.com/SupportArticleView?l=en&urlName=AVG-Antivirus-scan-exclusions&supportType=home) | [Bitdefender](https://www.bitdefender.com/consumer/support/answer/13427/) | [ESET NOD32](https://help.eset.com/eav/14/en-US/idh_detection_exclusions.html) | [G Data](https://help.gdatasoftware.com/b2c/GDAV/2014/en/index.html?410057.htm)
[Ahnlab](https://ask.ahnlab.com/hc/en-us/articles/900003233126--V3-ALL-Let-s-learn-about-setting-up-Scan-Exclusions)

Note: the folder you want to exclude is: `C:\Users\YOUR-USERNAME-HERE\AppData\Local\Plutonium`

---

### Other Notes

* ***If you are using [Web Root](https://community.webroot.com/webroot-secureanywhere-antivirus-12/how-to-uninstall-secureanywhere-317009)/[McAfee](https://service.mcafee.com/webcenter/portal/cp/home/articleview?articleId=TS101331)/[Bullguard](https://www.bullguard.com/support/faq/other/how-do-i-uninstall-bullguard-from-my-computer.aspx) we recommend to flat out uninstall them.***

  * Why? Simply put: **Disabling it or allowing exclusions will not allow Plutonium to function still** (that's how bad those antiviruses are)


* If you cannot find the "AppData" folder when you go to add an exclusion, you will have to enable hidden folders. To do this, open a new file explorer window, click the "View" tab and check "Hidden items".

![Hidden Items](/images/docs/antivirus/EUnBnHg.png)
