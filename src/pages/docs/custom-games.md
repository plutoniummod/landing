# Custom Games / Playing with friends

This guide will teach you how to play with friends over the internet in a custom games match.
Hosting isn't complicated but involves several networking concept that you need to understand before diving in so please make sure to take your time to read this guide to understand the concepts involved in hosting.

## Introduction

### Why do I need to do all this?

First of all you need to know that Plutonium ask you to do all these steps because hosting servers costs money, which is why most games on Steam don't require anything from you other than clicking "Create a game". But for indie games and passionate projects like Plutonium hosting a server for everyone would cost way too much money so you're required to host your games yourself instead which is free for everyone.

### How does hosting work?

Basically when you want to host a service such as a game server (or a private game with your friends) there is an important concept to understand: who can access my network and which service can they access. You don't want people from the outside to have access to everything on your PC.
If you want to play with 2 PC connected on the same internet router you can connect to each other using your **local IP** because both devices trust each other.
But when you want to play with people who aren't connected to your router (so basically people from outside your home) that's a different story because they're all considered as strangers and potential threats. This is where the concept of **port and port forwarding** comes in.

### What is port forwarding?

To make it simple everything connected to the internet running on your PC uses a [port](https://en.wikipedia.org/wiki/Port_(computer_networking)).
The internet going through these ports can either be **outbound connections** (you connecting to Google or to a game server for example) which doesn't require anything on your side or **incoming connections** which means you receive connections from the outside (hosting). In that case you need to **forward** the port used by your service (in that case your game server) to tell your router to allow connections from the outside on that specific port. Otherwise, by default and for security concerns the incoming connections on this port will be blocked. So if you understood this correctly: only the host needs to have a port opened (or UPnP enabled) on his router. The people joining don't need to do anything on their end, just like when you join a public server.

### What is UPnP?

Throughout this guide you'll see the words "port forwarding" and "UPnP" mentionned. To host a server/custom game you need port forwarding which requires manual setup on your router. The idea behind [UPnP](https://en.wikipedia.org/wiki/Universal_Plug_and_Play) is to let your router automatically open and close ports as you open/close services (such as game servers) on your PC, so it's basically an easy automatic port forwarding. Keep in mind that UPnP and port forwarding are two different things so **port forwarding will not enable UPnP**, but they have the same goal. UPnP is nice to have things work right away without any configuration but it doesn't work with every configuration so if it doesn't work for you, you will have to manually port forward instead.

## Add a friend to your friend list

Both you and your friend need to follow each other on the Plutonium forums to join each other:

- Go to [https://forum.plutonium.pw/users](https://forum.plutonium.pw/users) and make sure you're logged in then search for your friend's Plutonium name.
- Go to their profile and hit the green "plus" (+) button to follow them.
  - If there is a heart, that means that you are already following them.
  
Your friend should now appear in the Plutonium's overlay Friend list tab. If he doesn't appear just restart your game.

## T4 / T6

<Alert variant="tip">

There is no party system in Plutonium so your friend(s) can only join you while you're in-game (or finished loading in the loading screen).
To be able to play with your friends on round 1 you can force the game to wait in the loading screen until a certain amount of players connect with the commands below. (These commands need to be entered in the [console](https://plutonium.pw/docs/opening-console/). Replace `2` by the number of players you want to wait for before starting the game.

`sp_minplayers 2` [T4]  
`zombies_minplayers 2` [T6]

</Alert>

Once you and your friend are following each other, the person who wants to host the private match needs to do the following:

- Open the game and open the serverlist (F10 or Home key)
- Go to the network tab and check if UPnP is enabled

---

### **If UPnP is Enabled**

- Start a Private Match
- If the match requires 2 players to start you can force it to start anyways with the command `xpartygo`
- Your friend should now be able to join by double-clicking your name in the Friends List tab of the Plutonium overlay

---

### **If UPnP is Disabled**

- Go to Windows Settings -> Network & Internet, then hit Properties under your network name.

![img](/images/docs/custom-games/PnaSif4.png)

- Set the Network Profile to Private

![img](/images/docs/custom-games/hC6G8QN.png)

- Restart the game
- If UPnP is now enabled follow the [instructions above](#if-upnp-is-enabled). If it's not follow the [instructions below](#if-upnp-is-still-disabled-or-you-cant-connect-despite-it-being-enabled).

---

### **If UPnP is still disabled or you can't connect despite it being enabled**

- Forward the following ports:  
`28960-28961` (UDP) [T4]  
`4976-4977` (UDP) [T6]  
  - Hosting a private match without UPnP requires you to port forward. Since every router is different we can't make a guide for every router so we recommend searching "your router name + port forward" on Google.
- Whitelist the following ports inside Windows Firewall:  
`28960-28961` (UDP) [T4]  
`4976-4977` (UDP) [T6]  
  - This [Tom's Hardware](https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html) article might be helpful.
- Once those steps are done, open your game and start a private match. **(Parties will not work)**
- If the match requires 2 players to start you can force it to start anyways with the command `xpartygo`
- Your friend should now be able to join by double-clicking your name in the Friends List tab of the Plutonium overlay

## IW5

In IW5, there's no easy way of telling if UPnP is enabled, outside of just testing it.

### **If UPnP is enabled**

Simply start a private match and have your friend join you from Friends > Double clicking your name.

### **If UPnP is disabled / is not working**

- Forward the port `27016` (UDP)
  - Hosting a private match without UPnP requires you to port forward. Since every router is different we can't make a guide for every router so we recommend searching "your router name + port forward" on Google.
- Whitelist the port `27016` (UDP) in Windows Firewall.
  - This [Tom's Hardware](https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html) article might be helpful.
- Once those steps are done, open your game and start a private match. **(Parties will not work)**
- If the match requires 2 players to start you can force it to start anyways with the command `xpartygo`
- Your friend should now be able to join by double-clicking your name in the Friends List

## Additional Notes

### LAN Play

If you and some / all of your friends are on the same LAN they connect through the internal IP, if all players are on the same LAN portforwarding is not necessary.

If you want to find your internal IP open a Command Prompt and type `ipconfig`.

![img](/images/docs/custom-games/gUXeTOE.png)

Your local IP will be under `IPv4 Address`.

From there, every client on your LAN will simply be able to connect by [opening the console](opening-console) and executing

```cs
connect HostsIPv4AddressHere
```

### Connecting via an IP address

If the friends list doesn't work for you, you can try connecting via an IP Address.

Have the host get their IP (which they can do via the Plutonium Overlay's Network tab, or via [WhatIsMyIP](https://www.whatismyip.com/))

Then, you will simply be able to connect by [opening the console](opening-console) and running the command

```cs
connect HostsIPAddressHere
```
