let scene, camera, renderer, cube;
function init () {
    // init scene
    scene = new THREE.Scene();
    // init camera
    camera = new THREE.PerspectiveCamera(
        75, // Field of view 
        window.innerWidth / window.innerHeight, // Aspect ratio (width / height)
        0.1, // near plane (objects closer than this will not be rendered)
        1000 // far plane not displayed because it's too far
    );

    // init the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // set the size of the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    // add the renderer to the DOM
    document.body.appendChild(renderer.domElement);

    // create a cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    // set random texture file from the textures folder    
    const texture = new THREE.TextureLoader().load('textures/' + Math.floor(Math.random() * 19) + '.png');
    // const texture = new THREE.TextureLoader().load('textures/19.gif');
    
    const material = new THREE.MeshBasicMaterial({ map: texture });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // set the camera position
    camera.position.z = 5;

}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

