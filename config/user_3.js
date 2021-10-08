user_pref("accessibility.force_disabled",										       1);
user_pref("accessibility.tabfocus_applies_to_xul",								    false);
/* Controls all "remote actions, including studies, feature rollouts, 
   and emergency hotfixes" per Mozilla's notes; default=true */
user_pref("app.normandy.enabled",												       false);
/* Controls the running of all Mozilla studies; default=true */
user_pref("app.shield.optoutstudies.enabled",                               false);
user_pref("app.update.auto",													          false);
user_pref("app.update.badgeWaitTime",											       345600000);
user_pref("app.update.checkInstallTime",										       false);
user_pref("app.update.checkInstallTime.days",									    63000);
user_pref("app.update.downloads.attempts",										    0);
user_pref("app.update.download.promptMaxAttempts",								    0);
user_pref("app.update.elevate.attempts",										       0);
user_pref("app.update.elevation.promptMaxAttempts",								 0);
user_pref("app.update.interval",												          432000000);
user_pref("app.update.staging.enabled",									     		 false);
user_pref("browser.aboutConfig.showWarning",									       false);
user_pref("browser.altClickSave",												       true);
user_pref("browser.autofocus",													       false);
user_pref("browser.backspace_action",											       27);
user_pref("browser.bookmarks.restore_default_bookmarks",						    false);
/* Set maximum size of on-disk cache in KiB; default=256000 (256MB), 
   max=1048576 (1GiB) */
user_pref("browser.cache.disk.capacity",										       1048576);
/* On-disk cache, default=true */
user_pref("browser.cache.disk.enable",											       false);
/* Automatically scale the size of the on-disk cache; default=true */
user_pref("browser.cache.disk.smart_size.enabled",								    false);
/* Set maximum size of on-memory cache in KiB; default=-1 */
user_pref("browser.cache.memory.capacity",										    1048576);
/* Tooltips for elements in the browser chrome; default=true */
user_pref("browser.chrome.toolbar_tips",										       false);
user_pref("browser.contentblocking.category",									    "custom");
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false);
user_pref("browser.contentblocking.report.hide_lockwise_app",				    true);
user_pref("browser.contentblocking.report.lockwise.enabled",				    false);
user_pref("browser.contentblocking.report.monitor.enabled",					    false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2",			       true);
user_pref("browser.ctrlTab.recentlyUsedOrder",									    false);
user_pref("browser.discovery.enabled",											       false);
user_pref("browser.display.use_system_colors",									    true);
/* Animate download icon upon beginning a download; default=true */
user_pref("browser.download.animateNotifications",								    false);
user_pref("browser.download.autohideButton",									       false);
user_pref("browser.download.hide_plugins_without_extensions",				    false);		/*noRR*/
user_pref("browser.gesture.swipe.left",											    "");   		/*noRR*/
user_pref("browser.gesture.swipe.right",										       "");	     	/*noRR*/
user_pref("browser.history_swipe_animation.disabled",							    true);
user_pref("browser.messaging-system.whatsNewPanel.enabled",					    false);
/* Pre-load components of the default 'new tab' page; default=false */
user_pref("browser.newtab.preload",												       false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled",	    false);
/* Controls default 'new tab' in-page "recommendations and other 
   notifications from Mozilla" per Mozilla's notes; default=true */
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed",		    false);
/* Default 'new tab' page telemetry collection; default=true (for both) */
user_pref("browser.newtabpage.activity-stream.feeds.telemetry",			    false);
user_pref("browser.newtabpage.activity-stream.telemetry",					    false);
user_pref("browser.ping-centre.telemetry",										    false);
user_pref("browser.policies.runOncePerModification.searchInNavBar",		    "unified");
user_pref("browser.preferences.defaultPerformanceSettings.enabled",		    false);
user_pref("browser.preferences.search",											    false);
user_pref("browser.protections_panel.infoMessage.seen",						    true);
user_pref("browser.rights.3.shown",												       true);
/* Controls local Safebrowsing lookups of downloads; default=true */
user_pref("browser.safebrowsing.downloads.enabled",                         true);
/* Controls remote Safebrowsing lookups of downloads without affecting 
   other malware protections, per Mozilla's notes; default=true */
user_pref("browser.safebrowsing.downloads.remote.enabled",                  false);
user_pref("browser.search.region",												       "US");
user_pref("browser.search.update",												       true);
user_pref("browser.send_pings",													       false);		/*noRR*/
user_pref("browser.send_pings.max_per_link",									       0);
user_pref("browser.sessionstore.restore_hidden_tabs",							    true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",			    true);
/* Controls whether or not tab with relevant information is shown
   post-update; default=78.12.0 (or requisite format for version) */
user_pref("browser.startup.homepage_override.mstone",                       "ignore");
/* Which page to load on startup; 0=blank, 1=home (default), 3=resume */
user_pref("browser.startup.page",												       3);
user_pref("browser.suppress_first_window_animation",							    false);
user_pref("browser.tabs.allowTabDetach",										       false);
user_pref("browser.tabs.crashReporting.sendReport",							    false);
/* Adds extra padding above tabstrip and below toolbar; default=false */
user_pref("browser.tabs.extraDragSpace",                                    false);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS",						    1500);
user_pref("browser.tabs.drawInTitlebar",										       true);
user_pref("browser.tabs.insertAfterCurrent",									       true);
user_pref("browser.tabs.maxOpenBeforeWarn",										    150);
user_pref("browser.tabs.warnOnClose",											       false);		/*noRR*/
/* Navigate the browser chrome with tab key; default=true */
user_pref("browser.toolbars.keyboard_navigation",								    false);
/* Controls how the toolbar is organized */
user_pref("browser.uiCustomization.state",										    "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"downloads-button\",\"fxa-toolbar-menu-button\",\"ublock0_raymondhill_net-browser-action\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"ublock0_raymondhill_net-browser-action\",\"_287dcf75-bec6-4eec-b4f6-71948a2eea29_-browser-action\",\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":16,\"newElementCount\":3}");
/* UI density; 0=normal (default), 1=compact */
user_pref("browser.uidensity",													       1);
user_pref("browser.uitour.enabled",												       false);
user_pref("browser.urlbar.delay",												       0);			/*noRR*/
user_pref("browser.urlbar.formatting.enabled",									    false);
user_pref("browser.urlbar.maxRichResults",										    15);
user_pref("browser.urlbar.speculativeConnect.enabled",						    true);		/*PRE...*/
user_pref("browser.urlbar.suggest.bookmark",									       true);		/*noRR*/
user_pref("browser.urlbar.suggest.history",										    true);		/*noRR*/
user_pref("browser.urlbar.suggest.openpage",									       true);		/*noRR*/
user_pref("browser.urlbar.suggest.searches",									       false);		/*noRR*/
user_pref("browser.urlbar.suggest.topsites",									       false);
user_pref("browser.urlbar.trimURLs",											       false);
user_pref("browser.urlbar.update2",												       false);		/*RRonly*/
user_pref("browser.urlbar.update1.interventions",								    false);		/*noRR*/
user_pref("browser.urlbar.update1.searchTips",									    false);		/*noRR*/
/* Various telemetry collection-related features */
user_pref("datareporting.healthreport.uploadEnabled",							    false);		/*noRR*/
user_pref("datareporting.policy.dataSubmissionEnabled",						    false);		/*noRR*/
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification",    true);		/*noRR*/
/* Toggle availability of device motion sensors */
user_pref("device.sensors.motion.enabled",										    false);
user_pref("device.sensors.orientation.enabled",									    false);
/* Expose "accessibiity" section in dev tools; default=true */
user_pref("devtools.accessibility.enabled",										    false);
/* Toggle support for live-debugging UI chrome with dev tools; 
   default=false */
user_pref("devtools.chrome.enabled",											       true);
/* Toggle whether or not to display a prompt requiring user action
   when launching dev tools window, UNSAFE if false; default=true */
user_pref("devtools.debugger.prompt-connection",								    false);
/* Toggle allowance of launching dev tools window in separate FF 
   instance, UNSAFE if true; default=false */
user_pref("devtools.debugger.remote-enabled",									    false);
user_pref("devtools.inspector.three-pane-enabled",								    false);
user_pref("devtools.memory.enabled",											       false);
user_pref("devtools.screenshot.audio.enabled",									    false);
user_pref("devtools.whatsnew.enabled",											       false);		/*noRR*/
user_pref("devtools.whatsnew.feature-enabled",									    false);		/*noRR*/
user_pref("dom.event.contextmenu.enabled",										    true);
user_pref("dom.experimental_forms",												       true);
user_pref("dom.forms.autocomplete.formautofill",								    true);
user_pref("dom.gamepad.enabled",												          false);
user_pref("dom.gamepad.extensions.enabled",										    false);
/* Support for lazy-loading images, allegedly causes issues with 
   images displaying when printing in 78esr; default=false */
user_pref("dom.image-lazy-loading.enabled",										    true);
/* Number of unique browser processes on system (e10s); default=8,
   -1=per-tab (effectively), 0=1 process/disable e10s */
user_pref("dom.ipc.processCount",												       35);
/* Monitor these processes for hangs in loading; default=true */
user_pref("dom.ipc.processHangMonitor",											    false);
/* Experimental monitor for better managing resource priority across
   e10 processes; default=true */
user_pref("dom.ipc.processPriorityManager.enabled",							    true);
/* Report process loading hangs to user; default=true */
user_pref("dom.ipc.reportProcessHangs",											    false);
/* Duration in seconds before reporting a process loading hang to
   user; default=10 */
user_pref("dom.max_script_run_time",											       20);
/* Website-administered push notifications */
user_pref("dom.push.connection.enabled",										       false);
user_pref("dom.push.enabled",													          false);
user_pref("dom.push.serverURL",													       "");
/* Controls whether or not sites can register Serviceworkers; 
   default=true */
user_pref("dom.serviceWorkers.enabled",											    false);
user_pref("dom.vibrator.enabled",												       false);
user_pref("dom.vr.enabled",														       false);
user_pref("dom.vr.oculus.enabled",												       false);
user_pref("dom.vr.oculus.invisible.enabled",									       false);
user_pref("dom.vr.openvr.enabled",												       false);
user_pref("dom.webaudio.enabled",												       false);
/* Website-administered push notifications */
user_pref("dom.webnotifications.enabled",										       false);
/* Toggle controlling whether or not website-administered push
   notifications can register serviceworkers; default=true */
user_pref("dom.webnotifications.serviceworker.enabled",						    false);
/* UI for reporting extensions for "abuse"; default=true (both) */
user_pref("extensions.abuseReport.amWebAPI.enabled",							    false);
user_pref("extensions.abuseReport.enabled",										    false);
/* Preference for the currently-active theme, NOTE: This cannot be 
   used to change the theme; default="default-theme@mozilla.org" */
user_pref("extensions.activeThemeID",											       "firefox-compact-dark@mozilla.org");
user_pref("extensions.checkCompatibility",										    false);		/*noRR*/
user_pref("extensions.formautofill.addresses.enabled",						    false);
/* Toggle to force-disable FireFox Monitor; default=hidden */
user_pref("extensions.fxmonitor.enabled", 										    false);
/* Fetching of addon information for recommendations; default=true */
user_pref("extensions.getAddons.cache.enabled",                             false);
user_pref("extensions.getAddons.showPane",										    false);		/*noRR*/
user_pref("extensions.htmlaboutaddons.recommendations.enabled",			    false);
user_pref("extensions.legacy.enabled",											       true);		/*noRR*/
user_pref("extensions.pocket.enabled",											       false);
user_pref("extensions.recommendations.hideNotice",								    true);		/*noRR*/
user_pref("extensions.recommendations.themeRecommendationUrl",				    "");
user_pref("extensions.screenshots.disabled",									       true);
user_pref("extensions.screenshots.upload-disabled",							    true);
user_pref("extensions.ui.extension.hidden",										    false);		/*noRR*/
user_pref("extensions.ui.plugin.hidden",										       false);		/*noRR*/
user_pref("font.default.x-western",												       "sans-serif");
user_pref("font.minimum-size.x-western",										       12);
user_pref("font.name.sans-serif.x-western",										    "Helvetica");
user_pref("font.size.variable.x-western",										       15);
user_pref("full-screen-api.pointer-lock.enabled",								    false);
user_pref("full-screen-api.warning.delay",										    -1);
user_pref("full-screen-api.warning.timeout",									       0);
user_pref("general.autoScroll",													       false);
/* Location services; default=true */
user_pref("geo.enabled",														          false);
/* Toggle use of CoreText instead of HarfBuzz for text shaping; 
   default=false */
user_pref("gfx.font_rendering.coretext.enabled",								    true);
/* HiDPI rendering; off=0, default=2 */
user_pref("gfx.hidpi.enabled",													       0);
/* Various features of experimental WebRender implementation */
user_pref("gfx.webrender.all",													       false);
user_pref("gfx.webrender.compositor",											       false);
user_pref("gfx.webrender.compositor.force-enabled",						       false);
user_pref("gfx.webrender.enabled",												       false);
user_pref("gfx.webrender.force-disabled",										       true);
/* 78esr only */
user_pref("gfx.webrender.picture-caching",										    true);
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible",		    true);
/* Allowance of discrete GPU; default=true */
user_pref("gl.allow-high-power",						                            false);
user_pref("identity.fxaccounts.toolbar.enabled",                            false);
user_pref("image.animated.resume-from-last-displayed",						    false);
user_pref("intl.multilingual.downloadEnabled",									    false);
user_pref("intl.regional_prefs.use_os_locales",									    true);
user_pref("javascript.options.writable_streams",								    true);
/* Force toggle OpenGL hardware acceleration, available by default
   on OS X; default=false */
user_pref("layers.acceleration.force-enabled",                              true);
/* Controls whether or not "browser extensions' background scripts
   can auto-play audio media" per Mozilla's notes; default=true */
user_pref("media.autoplay.allow-extension-background-pages",				    false);
/* Function unknown; default=false */
user_pref("media.autoplay.block-event.enabled",									    true);
/* Controls whether or not auto-play blocking is applied to the
   Web Audio API; default=false */
user_pref("media.autoplay.block-webaudio",										    true);
/* Method of blocking auto-playing media, see https://bit.ly/2U58Wdv;
   0=use sticky activation (default), 1=use transient activation 
   (controlled by: dom.user_activation.transient.timeout), 2=use 
   user input depth */
user_pref("media.autoplay.blocking_policy",                                 0);
/* Toggle blocking of auto-playing media; 0=allow all, 1=block audio,
   5=block all (default) */
user_pref("media.autoplay.default",												       5);
/* Support for AV1 video codec; default=true */
user_pref("media.av1.enabled",													       true);
/* Set media buffer size for non-Media Source Extensions, therefore
   does not affect YouTube and DASH content; default=60 */
user_pref("media.cache_readahead_limit",										       9999);
/* Set maximum size of media cache; default=512000, max=1048576 */
user_pref("media.cache_size",													          1048576);
/* Support for in-browser encoding of WebM container/VP9 video 
   codec; default=true */
user_pref("media.encoder.webm.enabled",											    false);
/* Toggle availability of screensharing in WebRTC; default=true */
user_pref("media.getusermedia.screensharing.enabled",							    false);
/* Controls whether or not auto-update is enabled for the OpenH264 
   plugin; default=hidden */
user_pref("media.gmp-gmpopenh264.autoupdate",									    true);
/* Toggle OpenH264 plugin; default=true */
user_pref("media.gmp-gmpopenh264.enabled",										    true);
/* Display OpenH264 plugin in Addons > Plugins; default=true */
user_pref("media.gmp-gmpopenh264.visible",										    true);
/* Controls whether or not auto-update is enabled for the Widevine 
   CDM plugin; default=hidden */
user_pref("media.gmp-widevinecdm.autoupdate",									    true);
/* Toggle Widevine CDM plugin; default=true */
user_pref("media.gmp-widevinecdm.enabled",										    true);
/* Display Widevine CDM plugin in Addons > Plugins; default=true */
user_pref("media.gmp-widevinecdm.visible",										    true);
/* Toggle force-enabling of hardware video decoding, available by
   default (for H.264) on OS X; default=false */
user_pref("media.hardware-video-decoding.force-enabled",						    true);
/* Toggle availability of "Asynchronous SourceBuffer add and remove" 
   for Media Source Extensions API per Mozilla's notes; default=false */
user_pref("media.mediasource.experimental.enabled",							    false);
/* Support for WebM container/VP9 video codec in Media Source 
   Extensions; default=true */
user_pref("media.mediasource.vp9.enabled",										    true);
/* Support for OGG/Vorbis audio codecs in WebM containers; 
   default=true */
user_pref("media.mediasource.webm.audio.enabled",								    true);
/* Support for WebM container/VP9 video codec; default=true */
user_pref("media.mediasource.webm.enabled",										    false);
/* Toggle in-browser availability of webcam/microphone hardware; 
   default=true */
user_pref("media.navigator.enabled",											       false);
/* Control WebRTC TLS versions; 770=1.1?, 771=1.2, 772=1.3 */
user_pref("media.peerconnection.dtls.version.max",								    772);
user_pref("media.peerconnection.dtls.version.min",								    771);
/* Toggle WebRTC; default=true */
user_pref("media.peerconnection.enabled",										       false);
/* Function unknown; default=false */
user_pref("media.peerconnection.video.use_rtx",									    true);
/* VP9 availability within WebRTC; default=true */
user_pref("media.peerconnection.video.vp9_enabled",							    false);
/* Delay in ms before video in background tab is suspended; 
   default=10000 */
user_pref("media.suspend-bkgnd-video.delay-ms",									    1000);
/* Required for reporting of YouTube frame data; default=true */
user_pref("media.video_stats.enabled",											       true);
/* Picture-in-picture; default=true */
user_pref("media.videocontrols.picture-in-picture.enabled",					    true);
/* Floating blue picture-in-picture access button; default=true */
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled",    false);
/* Support for WebM/VP9 video codec */
user_pref("media.webm.enabled",													       false);
/* Toggle support for draft Web Speech API; default=false */
user_pref("media.webspeech.synth.enabled",										    false);
/* Controls running of feature experiments; default=true */
user_pref("messaging-system.rsexperimentloader.enabled",						    false);
/* Force native cookie blocking behavior out-of-the-box; 0=allow all, 
   1=block 3rd party, 2=block all, 3=block from unvisited, 4=block 
   cross-site trackers only (default), 5=block cross-site trackers and 
   use partitioned cookie jar (efficacy/support in 78esr unknown) */
user_pref("network.cookie.cookieBehavior",										    0);
/* Disable IPv6 for in-browser DNS functions; default=false */
user_pref("network.dns.disableIPv6",											       true);
/* Controls fetching of DNS resoluton(s) for external domains in 
   links; default=false*/
user_pref("network.dns.disablePrefetch",										       false);
/* Disable above DNS prefetching from secure pages; default=true */
user_pref("network.dns.disablePrefetchFromHTTPS",								    false);
/* Duration in seconds to idle the DNS resolver thread before 
   shutting it down; -1=forever, 0=immediate, default=60 */
user_pref("network.dns.resolver-thread-extra-idle-time-seconds",			    600);
/* Duration in ms before DNS timeout; default=2000 */
user_pref("network.dns.resolver_shutdown_timeout_ms",							    1000);
/* Number of DNS entries to cache in-browser; default=400 */
user_pref("network.dnsCacheEntries",											       400);
/* Combined with the below preference, set the minimum time in seconds 
   before expiring DNS records in browser cache; default=60 */
user_pref("network.dnsCacheExpiration",											    120);
/* Combined with the above preference, set the minimum time in seconds 
   before expiring DNS records in browser cache; default=60 */
user_pref("network.dnsCacheExpirationGracePeriod",								    120);
/* In-browser FTP support */
user_pref("network.ftp.enabled",												          false);
/* Duration in ms before standard connection timeout; default=90 */
user_pref("network.http.connection-timeout",									       60);
/* Duration in ms to wait before falling back to IPv4 after waiting
   for a response over IPv6; default=5 */
user_pref("network.http.fallback-connection-timeout",							    1);
/* Set whether or not Firefox will fallback to IPv4 on IPv6-capable
   sites; default=true */
user_pref("network.http.fast-fallback-to-IPv4",                             true);
/* Preference pulled from version 90, efficacy/support in 
   78esr unknown; default=100 */
user_pref("network.http.http3.backup_timer_delay",								    100);
/* Default value pulled from version 90, efficacy in 78esr unknown; 
   default=10 (78esr) */
user_pref("network.http.http3.default-max-stream-blocked",					    20);
/* Default value pulled from version 90, efficacy in 78esr unknown, 
   "Maximal number of streams that can be blocked on waiting for 
   qpack instructions" per Mozilla's notes; default=0 */
user_pref("network.http.http3.default-qpack-table-size",						    65536);
/* Preference pulled from version 90, efficacy/support in 78esr 
   unknown; default=true */
user_pref("network.http.http3.enable_0rtt",										    true);
/* Preference pulled from version 90, efficacy/support in 78esr 
   unknown; default=false */
user_pref("network.http.http3.enable_qlog",										    false);
/* Toggle experimental draft HTTP/3 support; default=false */
user_pref("network.http.http3.enabled",											    false);
/* Preference pulled from version 90, efficacy/support in 78esr 
   unknown; default=32 */
user_pref("network.http.http3.parallel_fallback_conn_limit",				    32);
/* Maximum conncetions per sever; default=6 */
user_pref("network.http.max-persistent-connections-per-server",			    10);
/* Affects pages auto-redirecting elsewehere; default=false */
user_pref("network.http.prompt-temp-redirect",                              false);
/* "Controls how much referrer is sent across origins" per Mozilla's
   notes; 0=send full URL (default), 1=send URL sans query, 2=only 
   send the origin */
user_pref("network.http.referer.XOriginTrimmingPolicy",						    2);
/* Set the maximum number of concurrent speculative pre-connections
   made when hovering over links on sites; default=6 */
user_pref("network.http.speculative-parallel-limit",							    10);
/* Throttle network connection(s) of background tabs; default=false */
user_pref("network.http.throttle.enable",										       true);
/* Toggle to force-display real ASCII-translated URL instead of 
   unicode-based internationalized domain names to prevent spoofing; 
   default=false */
user_pref("network.IDN_show_punycode",											       true);
/* Handles "network change events" related to IPv6, per Mozilla's 
   notes; default=true */
user_pref("network.notify.IPv6",												          true);
/* Controls pre-fetching of links based on Firefox's predictive
   algorithm(s) for potential user engagement; default=false */
user_pref("network.predictor.enable-prefetch",									    true);
/* Controls recording and use of user-resource engagement history to 
   better predict necessary resources for loading priority on future
   pageloads; default=true */
user_pref("network.predictor.enabled",											       true);
/* Set maximum number of links that can be pre-fetched and held
   in memory at once; default=10 */
user_pref("network.predictor.prefetch-rolling-load-count",					    60);
/* Pre-fetch specially-tagged links which the site believes a user 
   is likely to visit; default=true */
user_pref("network.prefetch-next",												       true);
/* Support for standardized link-preload HTML tags; default=false */
user_pref("network.preload",													          true);
/* Controls use of unofficial, Google-hosted list of domains at 
   which to only (even initially) connect with HSTS, UNSAFE if 
   false; default=true */
user_pref("network.stricttransportsecurity.preloadlist",						    true);
/* DNS over HTTPS modes; 0=disabled, 1=depreciated, 2=TRR with native 
   fallback, 3=TRR only, 4=depreciated, 5=disabled by user, not by 
   default preference (default) */
user_pref("network.trr.mode",													          0);
/* Controls display of small screenshot when dragging a tab; 
   default=true */
user_pref("nglayout.enable_drag_images",										       false);
/* Popup notification animations, efficacy in 78esr unknown; 
   default=hidden */
user_pref("permissions.postPrompt.animate",										    false);
/* Use WebGL in PDF rendering; default=false */
user_pref("pdfjs.enableWebGL",													       true);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling",					    true);
user_pref("pdfjs.previousHandler.preferredAction",								    4);
user_pref("places.history.enabled",												       true);
user_pref("privacy.donottrackheader.enabled",									    false);
user_pref("privacy.file_unique_origin",											    true);
user_pref("privacy.history.custom",												       true);
user_pref("privacy.partition.network_state",									       true);
user_pref("privacy.purge_trackers.enabled",										    false);
user_pref("privacy.socialtracking.block_cookies.enabled",					    false);
user_pref("privacy.trackingprotection.cryptomining.enabled",				    false);
user_pref("privacy.trackingprotection.enabled",									    false);
user_pref("privacy.trackingprotection.fingerprinting.enabled",				    false);
user_pref("privacy.trackingprotection.pbmode.enabled",						    false);
user_pref("privacy.trackingprotection.socialtracking.enabled",				    false);
/* Toggle parsing of (all) content for reader mode; default=true */
user_pref("reader.parse-on-load.enabled",										       false);
/* Set delay in ms before displaying extension installation popup 
   for security reasons; default=1000 */
user_pref("security.dialog_enable_delay",										       1000);
/* Toggle blocking of mixed active content; default=true */
user_pref("security.mixed_content.block_active_content",						    true);
/* Toggle blocking of mixed passive content (e.g. images); 
   default=false */
user_pref("security.mixed_content.block_display_content",					    true);
/* Function unknown; default=false */
user_pref("security.mixed_content.block_object_subrequest",					    true);
/* Upgrade mixed content to secure, NOTE: Upgrading is broken; 
   default=false */
user_pref("security.mixed_content.upgrade_display_content",					    false);
/* Control OCSP fetching (non-stapled); 0=disabled, 1=enabled (default), 
   2=enabled for EV certificates only */
user_pref("security.OCSP.enabled",								                   1);
/* Suspend connection on OCSP response fetch failure (CA cannot be 
   reached), triggering will result in security warning page (most
   often on Microsoft sites); default=false */
user_pref("security.OCSP.require", 												       false);
/* Disable or limit SHA-1 certificates; 0=allow all, 1=block all, 
   2=deprecated option that maps to 1, 3=only allowed for locally-
   added roots (default), 4=only allowed for locally-added roots or 
   for certs in 2015 and earlier */
user_pref("security.pki.sha1_enforcement_level", 								    3);
/* Disables TLS session resumption; default=false */
user_pref("security.ssl.disable_session_identifiers",							    false);
/* Toggle reporting of TLS errors to Mozilla; defult=true */
user_pref("security.ssl.errorReporting.enabled",								    false);
/* Begin transmitting encrypted application data mid-TLS handshake; 
   default=true */
user_pref("security.ssl.enable_false_start",                                true);
/* Allow destination server to provide (staple) OCSP response instead 
   of querying CA; default=true */
user_pref("security.ssl.enable_ocsp_stapling",									    true);
/* Reject connection when connecting to server which has not
   applied mitigations for CVE-2009-3555, default=false */
user_pref("security.ssl.require_safe_negotiation",								    false);
/* Show broken padlock upon connection to server which has not
   applied mitigations for CVE-2009-3555; default=false */
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",				    true);
/* Insecure; default=false */
user_pref("security.ssl3.dhe_rsa_aes_128_sha",									    false);
/* Insecure; default=false */
user_pref("security.ssl3.dhe_rsa_aes_256_sha",									    false);
/* default=true */
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",					    true);
/* Insecure; default=true */
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",								    false);
/* default=true */
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_gcm_sha384",					    true);
/* Insecure; default=true */
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",								    false);
/* default=true */
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",			    true);
/* default=true */
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",						    true);
/* Insecure; default=true */
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",								    false);
/* default=true */
user_pref("security.ssl3.ecdhe_rsa_aes_256_gcm_sha384",						    true);
/* Insecure, sometimes needed for compatibility; default=true */
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",								    false);
/* default=true */
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256",				    true);
/* Insecure; default=hidden */
user_pref("security.ssl3.rsa_aes_128_gcm_sha256",								    false);
/* Insecure, sometimes needed for compatibility; default=true */
user_pref("security.ssl3.rsa_aes_128_sha",										    true);
/* Insecure, sometimes needed for compatibility; default=hidden */
user_pref("security.ssl3.rsa_aes_256_gcm_sha384",								    true);
/* Insecure, sometimes needed for compatibility; default=true */
user_pref("security.ssl3.rsa_aes_256_sha",										    false);
/* Insecure; default=true */
user_pref("security.ssl3.rsa_des_ede3_sha",										    false);
/* Experimental, efficacy of draft implementation unconfirmed,
   allows servers in low-trust settings (CDNs) to issue short-lived 
   authentication credentials to avoid exposing private keys and
   additionally avoid constant trips to CAs; default=false */
user_pref("security.tls.enable_delegated_credentials",						    true);
/* Experimental, efficacy of implementation unconfirmed, some
   servers may require this feature; default=false */
user_pref("security.tls.enable_post_handshake_auth",							    true);
/* Reset allowance of TLS 1.0/1.1 with each restart; default=false */
user_pref("security.tls.version.enable-deprecated", 							    false);
/* Control allowed TLS versions; 1=1.0, 2=1.1, 3=1.2, 4=1.3 */
user_pref("security.tls.version.max",											       4);
user_pref("security.tls.version.min",											       3);
/* Force bookmark/history sidebar to always be on the left;
   default=true */
user_pref("sidebar.position_start",                                         true);
/* Toggle allowance of stylesheets (e.g. userChrome.css); 
   default=false */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",			    true);
/* Various telemetry collection-related features */
user_pref("toolkit.telemetry.archive.enabled",									    false);
user_pref("toolkit.telemetry.bhrPing.enabled",									    false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled",					       false);
user_pref("toolkit.telemetry.newProfilePing.enabled",							    false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun",						    false);
user_pref("toolkit.telemetry.server",											       "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled",				       false);
/* 78esr only */
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession",       false);
user_pref("toolkit.telemetry.unified",								                false);
user_pref("toolkit.telemetry.updatePing.enabled",								    false);
/* Controls whether FF matches host OS theme, >78esr only; default=1 */
user_pref("ui.systemUsesDarkTheme",												       0);
/* Toggle to force-disable WebGL; default=false */
user_pref("webgl.disabled",														       false);
/* Toggle WebGL extension for graphics driver debugging; default=true */
user_pref("webgl.enable-debug-renderer-info",                               false);
/* Toggles WebGL extensions in 'draft' status, there are (were) none 
   being tested per Mozilla's notes; default=false */
user_pref("webgl.enable-draft-extensions",										    false);
/* Toggle availability of WebGL 2; default=true */
user_pref("webgl.enable-webgl2",                                            true);
/* Toggle to force-enable WebGL, NOTE: Force-enabling ironically has 
   a tendency to break/disable WebGL; default=false */
user_pref("webgl.force-enabled",												          false);
/* Force-toggle anti-aliasing in WebGL rendering; default=false */
user_pref("webgl.msaa-force",												             false);
/* Toggle requirement that extensions be signed, only available in esr; 
   default=true */
user_pref("xpinstall.signatures.required",										    true);
