/* jshint -W101 */
var config = {
//    configLocation: './config.json', // see ./modules/HttpConfigFetch.js
    hosts: {
        //domain: 'fiducial.net',
        anonymousdomain: 'anon.fiducial.net',
        authdomain: 'fiducial.net',
        muc: 'muc.jitsi.fiducial.net',
        //bridge: 'jitsi-videobridge.jitsi-meet.example.com', // FIXME: use XEP-0030
        //jirecon: 'jirecon.jitsi-meet.example.com',
        //call_control: 'callcontrol.jitsi-meet.example.com',
        focus: 'jicofo.jitsi.fiducial.net',
    },
//  getroomnode: function (path) { return 'someprefixpossiblybasedonpath'; },
//  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
//  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '/http-bind',
    clientNode: 'Fiducom', // The name of client node advertised in XEP-0115 'c' stanza
    //focusUserJid: 'focus@auth.jitsi-meet.example.com', // The real JID of focus participant - can be overridden here
    //defaultSipNumber: '', // Default SIP number

    // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    desktopSharingChromeMethod: 'ext',
    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: 'abkpepjnljieihilablelpopponldomi',
    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: ['screen', 'window'],
    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.0.1',

    // The ID of the jidesha extension for Firefox. If null, we assume that no
    // extension is required.
    desktopSharingFirefoxExtId: null,
    // Whether desktop sharing should be disabled on Firefox.
    desktopSharingFirefoxDisabled: true,
    // The maximum version of Firefox which requires a jidesha extension.
    // Example: if set to 41, we will require the extension for Firefox versions
    // up to and including 41. On Firefox 42 and higher, we will run without the
    // extension.
    // If set to -1, an extension will be required for all versions of Firefox.
    desktopSharingFirefoxMaxVersionExtRequired: -1,
    // The URL to the Firefox extension for desktop sharing.
    desktopSharingFirefoxExtensionURL: null,

    // Disables ICE/UDP by filtering out local and remote UDP candidates in signalling.
    webrtcIceUdpDisable: false,
    // Disables ICE/TCP by filtering out local and remote TCP candidates in signalling.
    webrtcIceTcpDisable: false,

    openSctp: false, // Toggle to enable/disable SCTP channels
    disableStats: false,
    disableAudioLevels: false,
    channelLastN: -1, // The default value of the channel attribute last-n.
    adaptiveLastN: false,
    adaptiveSimulcast: false,
    enableRecording: false,
    enableWelcomePage: true,
    disableSimulcast: false,
    logStats: false, // Enable logging of PeerConnection stats via the focus
    requireDisplayName: true,
//    startAudioMuted: 10, // every participant after the Nth will start audio muted
//    startVideoMuted: 10, // every participant after the Nth will start video muted
    defaultLanguage: "fr",
// To enable sending statistics to callstats.io you should provide Applicaiton ID and Secret.
//    callStatsID: "", // Application ID for callstats.io API
//    callStatsSecret: "", // Secret for callstats.io API
    /*noticeMessage: 'Service update is scheduled for 16th March 2015. ' +
    'During that time service will not be available. ' +
    'Apologise for inconvenience.',*/
    disableThirdPartyRequests: true,
};
