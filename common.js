const RunningFirefoxVersion = (navigator.userAgent.match(/Firefox\/([0-9.]+)/) || ["", "156.0"])[1];
const RunningAndroidVersion = "Android 17";

const ChromeMajorVersionToMimic = `${parseInt(RunningFirefoxVersion) + 4}.0.0.0`;

const ChromePhoneUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Mobile Safari/537.36`;
const ChromeTabletUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; SM-X936B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Safari/537.36`;

function getUserAgentOverride(userAgent) {
  if (userAgent.includes("Mobile")) {
    return ChromePhoneUA;
  }
  if (userAgent.includes("Tablet")) {
    return ChromeTabletUA;
  }
  // Desktop mode requested.
  return userAgent;
}
