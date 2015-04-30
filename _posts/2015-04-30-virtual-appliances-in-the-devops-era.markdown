--- 
layout: post
title: "Virtual Appliances in the DevOps Era"
date: 2015-04-30 12:05:50 -0500
published: true
---

## My perspective on 'software defined'
We often talk about things being 'software defined' and many take that to mean simply that there is no hardware required for the system in question, or that something simply runs in a virtual appliance. As an Automation Architect, my perspective is: for something to be software defined, I expect it's configuration to be definable as code. I should be able to clearly define what my systems should look like, also known as 'desired state.' 

## Virtual Reality
Virtual Machines opened doors to new levels of automation that eventually enabled the idea that marketing types like to call 'cloud.' No longer was a running OS bound to a specific metal chassis. We are able to migrate a running virtual machine from one metal box to another over the network like magic. We increased datacenter efficiencies to ridiculous levels by sharing CPU time, deduplicating memory and storage.

## Rise of the Appliance
Virtual appliances allowed ISVs to provide their software as a turn-key black box. Customers can simply download and run the appliance. No installation headaches, no complicated configuration to get started. Everything from the operating system up to the application is there.

## Pretty Little Snowflakes
Virtualization continued to mature, and we learned that a single human can now manage hundreds to thousands of virtual machines. 'Snowflake' servers are still commonplace in smaller IT organizations, but in order for someone to scale and manage a thousand VMs, we have to increase our ability to automate and remove complexity. IT orgs started standardizing on a 'house OS' for their applications. For many this meant an agreed upon distribution of Linux. I realize there is a percentage of off-the-shelf software that might require Windows, and those will always be one-offs. Armed with a basic template to build upon, configuration management tools like Chef and Puppet allow us to define the business role of a VM, its packages and configuration, and apply execute configuration from this description. Now, VMs are less fragile because they are recomposable from code. Virtual machine backups mean very little if I can recompose my system from scratch. Now I can focus more attention on backing up my data instead of my OS and application configuration. Package upgrades and configuration changes can happen datacenter-wide to a thousand OSes with a change to a few lines of code.   


<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">virtual appliances are a crutch for software with bad packaging/deployment.</p>&mdash; jaker (@jakerobinson) <a href="https://twitter.com/jakerobinson/status/555438309833310208">January 14, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


## Stop Boxing Us In
Let's get to the point. Managing virtual appliances does not scale. They're still great for demos, deployment, and smaller IT orgs, but terrible for 'day 2 operations' in larger organizations. They don't use our OS of choice, we can rarely put monitoring or configuration agents on them without voiding warranties, and on and on I can go. The problem however, is not virtual appliances, but the fact that it is the *only option* given to us by some software vendors. Some do this because their software may be very complex to install, or it's just plain easier to support. Maybe some even fear intellectual property being exposed if their software was not in a black box. Whatever the reason, ISVs should be working to fix *those* things, not using virtual appliances as a crutch. You might even discover that building virtual appliances is a lot easier if you simplify your application packaging and configuration. Keep making virtual appliances, but give me packages to install so I can continue to scale and manage thousands of VMs.

 
