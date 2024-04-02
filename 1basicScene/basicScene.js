// Canvas
const canvas = document.getElementById("basicSceneCanvas")

// Scene Sizes
const width = 800
const height = 600

// Scene
const scene = new THREE.Scene()

// Objects
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "teal",
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.x = 2
camera.position.y = 1
camera.position.z = 5
scene.add(camera)

// Render
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)
renderer.render(scene, camera)
