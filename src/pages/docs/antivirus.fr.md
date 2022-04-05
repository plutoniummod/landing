# Pourquoi mon antivirus dit-il que Plutonium est un virus ?

## Pourquoi mon antivirus dit-il que Plutonium est un virus ?

Plutonium est ce qu’on appelle un faux positif (votre antivirus pense que Plutonium est un virus, alors qu’en réalité il n'en est pas un.) Les développeurs derrière ce projet travaillent dur sur ce projet depuis des années. Ils ne risqueraient pas toute leur crédibilité en compromettant votre PC avec des logiciels malveillants.

## Pourquoi cela arrive-t-il?

Plutonium modifie les jeux en mémoire, tout comme un virus manipulerait d’autres programmes, provoquant ainsi cette fausse détection.

## Comment puis-je résoudre ce problème? (Windows Defender)

Nous avons un tutoriel pour ajouter des exclusions dans Windows Defender ici :

<Player url="https://youtu.be/0ijMY8FiLSg" />

Sinon vous pouvez tout simplement exécuter cette command Powershell :

<Details title="Commande Powershell pour ajouter une exclusion dans Windows Defender">

La méthode la plus rapide est de faire un clic droit sur le bouton démarrer, d'ouvrir `Windows Powershell (Admin)` et de coller la commande suivante (clic droit) :
`powershell -inputformat none -outputformat none -NonInteractive -Command Add-MpPreference -ExclusionPath "%localappdata%\Plutonium"`

![GIF d'explication](/images/docs/antivirus/Ecyyy6Q.gif)

(Notez que cela n'ajoute une exclusion pour Plutonium que dans **Windows Defender**. Si vous avez un autre antivirus référez vous à leur documentation)
</Details>

---

## Comment puis-je résoudre ce problème? (Autres antivirus)

Trouvez la documentation pour ajouter le dossier Plutonium en tant qu'exclusion dans votre antivirus ici :

[Malwarebytes](https://support.malwarebytes.com/hc/en-us/articles/360038479234) | [Avast](https://support.avast.com/en-us/article/Antivirus-scan-exclusions/) | [Norton](https://support.norton.com/sp/en/us/home/current/solutions/v3672136) | [Kaspersky](https://support.kaspersky.com/14848#block1)
| [AVG](https://support.avg.com/SupportArticleView?l=en&urlName=AVG-Antivirus-scan-exclusions&supportType=home) | [Bitdefender](https://www.bitdefender.com/consumer/support/answer/13427/) | [ESET NOD32](https://help.eset.com/eav/14/en-US/idh_detection_exclusions.html) | [G Data](https://help.gdatasoftware.com/b2c/GDAV/2014/en/index.html?410057.htm)
[Ahnlab](https://ask.ahnlab.com/hc/en-us/articles/900003233126--V3-ALL-Let-s-learn-about-setting-up-Scan-Exclusions)

Note: le dossier à ajouter en tant qu'exclusion est celui ci : `C:\Utilisateurs\VOTRE-NOM-D'UTILISATEUR\AppData\Local\Plutonium`

---

### Autres notes

* ***Si vous utilisez [Web Root](https://community.webroot.com/webroot-secureanywhere-antivirus-12/how-to-uninstall-secureanywhere-317009)/[McAfee](https://service.mcafee.com/webcenter/portal/cp/home/articleview?articleId=TS101331)/[Bullguard](https://www.bullguard.com/support/faq/other/how-do-i-uninstall-bullguard-from-my-computer.aspx) nous vous recommandons de le désinstaller.***

  * Pourquoi? Simplement parce que **le désactiver ou ajouter une exclusion ne permettra toujours pas à Plutonium de fonctionner, l'antivirus ignorera vos choix** (oui ces antivirus sont mauvais à ce point)

  Si vous ne parvenez pas à trouver le dossier "AppData" lorsque vous tentez d'ajouter un exclusion vous devez afficher les fichiers/dossiers cachés. Pour cela ouvrez un nouvel explorateur de fichiers et cliquez sur l'onglet "Affichage" puis cochez "Elements masqués".

  ![Hidden Items](/images/docs/antivirus/EUnBnHg.png)