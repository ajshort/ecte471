var Builder = {
    table: function() {
        var result = CSG.cube({
            radius: [25, 25, 250], center: [25, 25, 0]
        });

        result = result.union(CSG.cube({
            radius: [25, 25, 250], center: [1500 - 25, 25, 0]
        }));

        result = result.union(CSG.cube({
            radius: [25, 25, 250], center: [25, 750 - 25, 0]
        }));

        result = result.union(CSG.cube({
            radius: [25, 25, 250], center: [1500 - 25, 750 - 25, 0]
        }));

        result = result.union(CSG.cube({
            radius: [750, 25, 25], center: [750, 25, 250 - 25]
        }));

        result = result.union(CSG.cube({
            radius: [750, 25, 25], center: [750, 750 - 25, 250 - 25]
        }));

        result = result.union(CSG.cube({
            radius: [25, 375, 25], center: [25, 375, 250 - 25]
        }));

        result = result.union(CSG.cube({
            radius: [25, 375, 25], center: [1500 - 25, 375, 250 - 25]
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "blue" })
        );
    },

    plate: function() {
        var result = CSG.cube({
            radius: [750, 375, 7.5], center: [0, 0, 7.5]
        });

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [600, 225, 0], end: [600, 225, 15], slices: 64
        }));

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [-600, 225, 0], end: [-600, 225, 15], slices: 64
        }));

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [600, -225, 0], end: [600, -225, 15], slices: 64
        }));

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [-600, -225, 0], end: [-600, -225, 15], slices: 64
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: 0x00FF21 })
        );
    },

    washerDispenser: function() {
        var result = CSG.cube({
            radius: [250, 250, 250]
        });

        var result = result.subtract(CSG.cylinder({
            radius: 70, start: [0, 0, 0], end: [0, 250, 0], slices: 64
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "blue" })
        );
    },

    washer: function() {
        var result = CSG.cylinder({
            radius: 60, start: [0, 0, 0], end: [0, 0, 5], slices: 64
        });

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [0, 0, 0], end: [0, 0, 5], slices: 64
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "silver" })
        );
    },

    boltDispenser: function() {
        var result = CSG.cube({
            radius: [500, 250, 250]
        });

        result = result.subtract(CSG.cylinder({
            radius: 60, start: [250, 0, 0], end: [250, 0, 250]
        }));

        result = result.subtract(CSG.cylinder({
            radius: 60, start: [-250, 0, 0], end: [-250, 0, 250]
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "red" })
        );
    },

    column: function() {
        var result = CSG.cylinder({
            radius: 50, start: [0, 0, 0], end: [0, 0, 100], slices: 64
        });

        result = result.subtract(CSG.cylinder({
            radius: 25, start: [0, 0, 0], end: [0, 0, 100], slices: 64
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "grey" })
        );
    },

    bolt: function() {
        var result = CSG.cylinder({
            radius: 45, start: [0, 0, 0], end: [0, 0, 30], slices: 6
        });

        result = result.union(CSG.cylinder({
            radius: 25, start: [0, 0, 30], end: [0, 0, 100], slices: 64
        }));

        return new THREE.Mesh(
            THREE.CSG.fromCSG(result), new THREE.MeshLambertMaterial({ color: "grey" })
        );
    }
};
