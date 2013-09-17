function FixedRobot() {
    var material = new THREE.MeshNormalMaterial();

    this.links = {
        base: new THREE.Mesh(new THREE.CylinderGeometry(100, 100, 200, 64), material),
        arm: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 950, 64), material),
        elbow: new THREE.Mesh(new THREE.CylinderGeometry(75, 75, 150, 64), material),
        forearm: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 950, 64), material),
        shoulder: new THREE.Mesh(new THREE.CubeGeometry(150, 150, 150), material),
        column: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 1, 64), material),
        wrist: new THREE.Mesh(new THREE.CylinderGeometry(75, 75, 150, 64), material),
        tool: new THREE.Mesh(new THREE.CubeGeometry(40, 40, 40), material),
        item: null
    };

    this.links.base.add(this.links.arm);
    this.links.arm.add(this.links.elbow);
    this.links.elbow.add(this.links.forearm);
    this.links.forearm.add(this.links.shoulder);
    this.links.shoulder.add(this.links.column);
    this.links.column.add(this.links.wrist);
    this.links.wrist.add(this.links.tool);

    this.links.arm.rotation.set(Math.PI/2, 0, 0);
    this.links.arm.position.set(0, 0, 475);

    this.links.forearm.rotation.set(Math.PI/2, 0, 0);
    this.links.elbow.position.set(0, 475, 0);
    this.links.forearm.position.set(0, 0, -475);

    this.links.shoulder.position.set(0, -475, 0);
    this.links.column.rotation.set(Math.PI/2, 0, 0);

    this.links.tool.position.set(0, -95, 0);

    this.setBase(0);
    this.setElbow(0);
    this.setColumn(500);
    this.setWrist(0);
}

FixedRobot.prototype.setBase = function(base) {
    this.base = base;
    this.links.base.rotation.set(Math.PI/2, base + Math.PI/2, 0);
}

FixedRobot.prototype.setElbow = function(elbow) {
    this.elbow = elbow;
    this.links.elbow.rotation.set(Math.PI/2, -elbow, 0);
}

FixedRobot.prototype.setColumn = function(column) {
    this.column = column;

    column = column - 115;

    this.links.column.scale.set(1, column, 1);
    this.links.column.position.set(0, 0, -column/2);

    this.links.wrist.scale.set(1, 1/column, 1);
    this.links.wrist.position.set(0, -column / (2*column), 0);
}

FixedRobot.prototype.setWrist = function(wrist) {
    this.links.wrist.rotation.set(0, wrist, 0);
}

function RailRobot() {
    var material = new THREE.MeshNormalMaterial();

    this.links = {
        rail: new THREE.Mesh(new THREE.CubeGeometry(6200, 60, 60), material),
        base: new THREE.Mesh(new THREE.CylinderGeometry(100, 100, 200, 64), material),
        column: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 1, 64), material),
        shoulder: new THREE.Mesh(new THREE.CubeGeometry(150, 150, 150), material),
        arm: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 800, 64), material),
        elbow: new THREE.Mesh(new THREE.CylinderGeometry(75, 75, 150, 64), material),
        forearm: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 800, 64), material),
        wrist: new THREE.Mesh(new THREE.CylinderGeometry(75, 75, 150, 64), material),
        hand: new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 110, 64), material),
        tool: new THREE.Mesh(new THREE.CubeGeometry(40, 40, 40), material),
        item: null
    };

    this.links.rail.add(this.links.base);
    this.links.base.add(this.links.column);
    this.links.column.add(this.links.shoulder);
    this.links.shoulder.add(this.links.arm);
    this.links.arm.add(this.links.elbow);
    this.links.elbow.add(this.links.forearm);
    this.links.forearm.add(this.links.wrist);
    this.links.wrist.add(this.links.hand);
    this.links.hand.add(this.links.tool);

    this.links.rail.rotation.set(Math.PI/2, 0, 0);

    this.links.arm.rotation.set(0, 0, Math.PI/2);
    this.links.arm.position.set(400, 0, 0);

    this.links.elbow.position.set(0, -400, 0);
    this.links.forearm.rotation.set(0, 0, Math.PI/2);
    this.links.forearm.position.set(-400, 0, 0);

    this.links.wrist.position.set(0, 400, 0);
    this.links.hand.rotation.set(Math.PI/2, 0, 0);
    this.links.hand.position.set(0, 0, -55);

    this.links.tool.position.set(0, -75, 0);

    this.setRail(0);
    this.setBase(0);
    this.setColumn(1000);
    this.setElbow(0);
    this.setWrist(0);
};

RailRobot.prototype.setRail = function(rail) {
    this.rail = rail;
    this.links.base.position.set(rail - 6200/2, 100 - 30, 0);
};

RailRobot.prototype.setBase = function(base) {
    this.base = base;
    this.links.base.rotation.set(0, base, 0);
};

RailRobot.prototype.setColumn = function(column) {
    this.column = column;

    column = column - 100;

    this.links.column.scale.set(1, column, 1);
    this.links.column.position.set(0, column/2, 0);

    this.links.shoulder.scale.set(1, 1/column, 1);
    this.links.shoulder.position.set(0, column / (2*column), 0);
};

RailRobot.prototype.setElbow = function(elbow) {
    this.elbow = elbow;
    this.links.elbow.rotation.set(elbow, 0, Math.PI/2);
};

RailRobot.prototype.setWrist = function(wrist) {
    this.wrist = wrist;
    this.links.wrist.rotation.set(Math.PI/2, wrist, 0);
};
