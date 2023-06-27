/** @param {NS} ns */
export async function main(ns) {
  while (true) {
    var nodes = ns.hacknet.numNodes();

    for (var i = 0; i < nodes; i++) {
      var a = ns.hacknet.getLevelUpgradeCost(i);
      var b = ns.hacknet.getRamUpgradeCost(i);
      var c = ns.hacknet.getCoreUpgradeCost(i);
      var d = ns.hacknet.getPurchaseNodeCost();

      var lowest = Math.min(a, b, c, d);

      if (lowest === a) {
        ns.hacknet.upgradeLevel(i, 1);
      } else if (lowest === b) {
        ns.hacknet.upgradeRam(i, 1);
      } else if (lowest === c) {
        ns.hacknet.upgradeCore(i, 1);
      } else if (lowest === d) {
        ns.hacknet.purchaseNode();
      }
    }

    await ns.sleep(100);
  }

}

