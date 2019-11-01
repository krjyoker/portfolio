import React, { Component } from 'react';
import * as THREE from 'three.js';
class Animation extends Component{
    componentDidMount(){
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspecttiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 2

        this.rederer = new THREE.WebGLRenderer({ animation: true })
        this.rederer.setClearColor('#ffffff')
        this.rederer.setSize(width, height)
        this.mount.appendChild(this.rederer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: '#D8D806'})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.start()
    }
    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.rederer.domElement)
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    animate = () => {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render(){
        return(
            <div style={{ width: '400px' , height: '400px' }} ref={(mount) => { this.mount = mount }} />
        )
    }
}
export default Animation