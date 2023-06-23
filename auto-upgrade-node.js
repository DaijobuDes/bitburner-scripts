/** @param {NS} ns */
export async function main(ns) {
    while (true) {
      var nodes = ns.hacknet.numNodes();
      var nodeList = new Array(nodes).fill(false);

      for (var i = 0; i < nodes; i++) {

        var stat = ns.hacknet.getNodeStats(i);
        var lvl = stat["level"];
        var core = stat["cores"];
        var ram = stat["ram"];

        var lvl = ns.hacknet.getNodeStats(i)["level"];

        if (lvl <= 200) {
          ns.hacknet.upgradeLevel(i, 1);
          if (lvl == 200) {
            if (ram <= 64) {
              ns.hacknet.upgradeRam(i, 1);
              if (ram == 64) {
                ns.hacknet.upgradeCore(i, 1);
                if (core <= 16) {
                  if (core == 16) {
                    nodeList[i] = true;
                  }
                }
              }
            }
          }
        }

        if (checkArray(nodeList) === true) {
          ns.hacknet.purchaseNode();
        }

      }
      await ns.sleep(100);
    }

  }

  function checkArray(array) {
    for (var i = 0; i < array.length; i++) {

      if (array[i] === false) {
        return false;
      }

    }

    return true;
  }