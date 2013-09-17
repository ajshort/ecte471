var container;
var camera;
var renderer;
var controls;

window.onload = function() {
    var width = 1280;
    var height = 800;

    window.scene = new Scene();
    container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000);
    camera.up.set(0, 0, 1);
    camera.position.set(12000, 14000, 5000);
    camera.lookAt(new THREE.Vector3(5000, 2500, 0));

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xF4F4F4, 1);

    container.appendChild(renderer.domElement);
    controls = new THREE.TrackballControls(camera, renderer.domElement);

    window.onresize();
    animate();

    document.getElementById('start').onclick = function() {
        run();
        document.getElementById('buttons').style.display = 'none';

        return false;
    }

    document.getElementById('top').onclick = function() {
        camera.up.set(0, -1, 0);
        camera.position.set(1000, 0, 10000);
        camera.lookAt(new THREE.Vector3(1000, 0, 0));
    };
};

window.onresize = function() {
    var width = container.offsetWidth;
    var height = container.offsetHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};

function animate() {
    controls.update();
    TWEEN.update();

    renderer.render(scene.scene, camera);

    requestAnimationFrame(animate);
}
