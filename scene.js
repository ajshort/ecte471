function Scene() {
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.AmbientLight(0x000044));
    
    var light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(12000, 14000, 5000);
    this.scene.add(light);

    var light = new THREE.DirectionalLight(0xAAAAAA, 0.25);
    light.position.set(-6000, 14000, 5000);
    this.scene.add(light);

    var light = new THREE.DirectionalLight(0xAAAAAA, 0.25);
    light.position.set(0, 0, 10000);
    this.scene.add(light);

    this.createGrid();
    this.createAxes();
    this.createFixtures();
    this.createRobots();
    this.createPlates();
}

Scene.prototype.createRobots = function() {
    this.fixed = new FixedRobot();
    this.rail = new RailRobot();

    this.rail.links.rail.position.set(725, 1750, 30);
    this.scene.add(this.rail.links.rail);

    this.fixed.links.base.position.set(1200, 1800, 1750);
    this.scene.add(this.fixed.links.base);
}

Scene.prototype.createGrid = function() {
    var scene = this.scene;
    var material = new THREE.LineBasicMaterial({ color: 0xBBBBBB });

    var draw = function(from, to, colour) {
        var geometry = new THREE.Geometry();

        geometry.vertices.push(from);
        geometry.vertices.push(to);

        scene.add(new THREE.Line(geometry, material));
    };

    for(var x = -3000; x <= 5000; x += 500) {
        draw(new THREE.Vector3(x, 9, 0), new THREE.Vector3(x, 4000, 0));
        draw(new THREE.Vector3(x, 0, 0), new THREE.Vector3(x, 0, 2000));
    }

    for(var y = 0; y <= 4000; y += 500) {
        draw(new THREE.Vector3(-3000, y, 0), new THREE.Vector3(5000, y, 0));
    }

    for(var z = 0 + 500; z <= 2000; z += 500) {
        draw(new THREE.Vector3(-3000, 0, z), new THREE.Vector3(5000, 0, z));
    }
}

Scene.prototype.createAxes = function() {
    var x = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 250), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    var y = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 250), new THREE.MeshBasicMaterial({ color: 0x00FF00 }));
    var z = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 250), new THREE.MeshBasicMaterial({ color: 0x0000FF }));

    x.rotation.set(0, 0, Math.PI/2);
    x.position.set(125, 0, 0);
    y.position.set(0, 125, 0);
    z.rotation.set(Math.PI/2, 0, 0);
    z.position.set(0, 0, 125);

    this.scene.add(x);
    this.scene.add(y);
    this.scene.add(z);
};

Scene.prototype.createFixtures = function() {
    this.table = Builder.table();
    this.table.rotation.set(0, 0, -Math.PI/2);
    this.table.position.set(0, 3500, 250);

    this.washers = Builder.washerDispenser();
    this.washers.position.set(4250, 250, 1250);

    this.bolts = Builder.boltDispenser();
    this.bolts.position.set(2000, 250, 250);

    this.scene.add(this.table);
    this.scene.add(this.washers);
    this.scene.add(this.bolts);

    var washer = Builder.washer();
    washer.rotation.set(Math.PI/2, 0, 0);
    washer.position.set(0, 250, 0);
    this.washers.add(washer);

    var column = Builder.column();
    column.position.set(250, 0, 150);
    this.bolts.add(column);

    var bolt = Builder.bolt();
    bolt.rotation.set(Math.PI, 0, 0);
    bolt.position.set(-250, 0, 250);
    this.bolts.add(bolt);
}

Scene.prototype.createPlates = function() {
    this.plates = [];

    for(var i = 0; i < 3; i++) {
        var plate = Builder.plate();
        plate.rotation.set(Math.PI/2, 0, Math.PI/2);
        plate.position.set(-2375, i * -100, 750);

        this.scene.add(plate);
        this.plates.push(plate);
    }
}

Scene.prototype.removePlate = function() {
    this.scene.remove(this.plates.shift());

    for(var i = 0; i < this.plates.length; i++) {
        var self = this;

        (function() {
            var plate = self.plates[i];
            var position = { y: plate.position.y };
            var target = { y: plate.position.y + 100 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    plate.position.setY(position.y);
                })
                .delay(2000)
                .start();
        })();
    }
}
