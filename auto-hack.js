/** @param {NS} ns */
export async function main(ns) {
  // Get current hostname of the server
  var target = ns.getHostname();

  // If no root access, open ports and get root access
  if (!ns.hasRootAccess(target)) {
    var ports = ns.getServerNumPortsRequired(target);
    if (ports != 0) {
      // TODO: Automate BruteSSH and other things here.

    }

    // Run NUKE.exe if all requirements are met
    ns.nuke(target);

  }

  const moneyThresh = ns.getServerMaxMoney(target) * 0.75;
  const securityThresh = ns.getServerMinSecurityLevel(target) + 5;

  while (true) {
    // #if
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      // If security is higher than its threshold set
      await ns.weaken(target);
    }
    else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      // If money is lower than its threshold set
      await ns.grow(target);
    }
    else {
      // Hack server if nothing else is true above
      await ns.hack(target);
    }
    // #endif
  }

}