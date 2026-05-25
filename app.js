const coreModelInstance = {
    version: "1.0.489",
    registry: [879, 1222, 1046, 190, 1359, 1296, 1288, 1610],
    init: function() {
        const nodes = this.registry.filter(x => x > 228);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});