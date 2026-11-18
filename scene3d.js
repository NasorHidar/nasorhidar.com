/**
 * scene3d.js — Core 3D WebGL Engine for Nasor Hidar's Cyber-Spatial Portfolio
 * Architecture: Three.js (ES Module) with multi-scene choreography, DPR clamp,
 * lerp mouse parallax, dynamic proximity graph, and ScrollTrigger integration.
 */

import * as THREE from 'three';

class CyberSpatialEngine {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.canvas) return;

    this.sceneType = document.body.dataset.scene || 'home';
    this.isMobile = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scroll = { y: 0, targetY: 0, progress: 0 };
    this.clock = new THREE.Clock();
    this.isTabActive = true;
    this.disposables = [];

    this.init();
  }

  init() {
    try {
      // 1. Scene setup
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x06070d, 0.028);

      // 2. Camera setup
      const aspect = window.innerWidth / window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(52, aspect, 0.1, 1000);
      this.camera.position.set(0, 0, 18);

      // 3. Renderer setup
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: !this.isMobile,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;

      // 4. Lighting Rig
      this.setupLighting();

      // 5. Starfield / Ambient Particles
      this.createAmbientParticleField();

      // 6. Scene-specific formations
      switch (this.sceneType) {
        case 'projects':
          this.buildProjectsScene();
          break;
        case 'open-source':
          this.buildOpenSourceScene();
          break;
        case 'achievements':
          this.buildAchievementsScene();
          break;
        case 'home':
        default:
          this.buildHomeScene();
          break;
      }

      // 7. Event Listeners
      this.bindEvents();

      // 8. Animation loop
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
    } catch (err) {
      console.warn('WebGL context failed to initialize gracefully. Activating CSS fallback.', err);
      document.body.classList.add('no-webgl');
    }
  }

  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0x0f172a, 1.8);
    this.scene.add(this.ambientLight);

    // Primary Electric Indigo Light
    this.lightIndigo = new THREE.PointLight(0x6366f1, 4.5, 50);
    this.lightIndigo.position.set(8, 10, 12);
    this.scene.add(this.lightIndigo);

    // Cyber Cyan Rim Light
    this.lightCyan = new THREE.PointLight(0x22d3ee, 4.0, 45);
    this.lightCyan.position.set(-10, -8, 8);
    this.scene.add(this.lightCyan);

    // Luminous Lavender Accent Light
    this.lightLavender = new THREE.PointLight(0xa78bfa, 3.2, 40);
    this.lightLavender.position.set(0, 12, -6);
    this.scene.add(this.lightLavender);
  }

  createAmbientParticleField() {
    const count = this.isMobile ? 380 : 1100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cIndigo = new THREE.Color(0x6366f1);
    const cCyan = new THREE.Color(0x22d3ee);
    const cWhite = new THREE.Color(0xf8fafc);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 65;
      positions[i3 + 1] = (Math.random() - 0.5) * 65;
      positions[i3 + 2] = (Math.random() - 0.5) * 65;

      const rand = Math.random();
      const c = rand < 0.45 ? cIndigo : (rand < 0.85 ? cCyan : cWhite);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: this.isMobile ? 0.12 : 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.starField = new THREE.Points(geometry, material);
    this.scene.add(this.starField);
    this.disposables.push(geometry, material);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // HOME SCENE: Interactive Neural-Security Core with Dynamic Proximity Graph
  // ──────────────────────────────────────────────────────────────────────────
  buildHomeScene() {
    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    // 1. Outer Wireframe Icosahedron (Electric Indigo)
    const outerGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x4338ca,
      emissiveIntensity: 0.35
    });
    this.outerCore = new THREE.Mesh(outerGeo, outerMat);
    this.coreGroup.add(this.outerCore);
    this.disposables.push(outerGeo, outerMat);

    // 2. Inner Pulsing Geometric Lattice (Cyber Cyan)
    const innerGeo = new THREE.OctahedronGeometry(2.3, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      wireframe: false,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4
    });
    this.innerCore = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.innerCore);
    this.disposables.push(innerGeo, innerMat);

    // 3. Central Cryptographic Nucleus (Dense Dodecahedron)
    const nucGeo = new THREE.DodecahedronGeometry(1.1, 0);
    const nucMat = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      wireframe: true,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.8
    });
    this.nucleus = new THREE.Mesh(nucGeo, nucMat);
    this.coreGroup.add(this.nucleus);
    this.disposables.push(nucGeo, nucMat);

    // 4. Orbiting Encrypted Data Nodes
    this.nodeCount = this.isMobile ? 12 : 24;
    this.nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.0,
      roughness: 0.1
    });
    this.disposables.push(nodeGeo, nodeMat);

    for (let i = 0; i < this.nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const orbitRadius = 4.6 + (i % 4) * 0.9;
      const speed = (0.25 + (i % 5) * 0.12) * (i % 2 === 0 ? 1 : -1);
      const inclination = (i * Math.PI) / (this.nodeCount / 2);
      const angle = Math.random() * Math.PI * 2;

      this.nodes.push({ mesh, orbitRadius, speed, inclination, angle });
      this.coreGroup.add(mesh);
    }

    // 5. Dynamic Neural Proximity Lines
    const maxLines = this.nodeCount * (this.nodeCount - 1);
    const linePositions = new Float32Array(maxLines * 6);
    this.lineGeometry = new THREE.BufferGeometry();
    this.lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    this.lineMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending
    });

    this.proximityLines = new THREE.LineSegments(this.lineGeometry, this.lineMaterial);
    this.coreGroup.add(this.proximityLines);
    this.disposables.push(this.lineGeometry, this.lineMaterial);

    // Off-center positioning for split-screen hero balance
    this.coreGroup.position.set(window.innerWidth > 1024 ? 4.2 : 0, 0, 0);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // PROJECTS SCENE: Holographic Cyber Architecture & Spatial Grid
  // ──────────────────────────────────────────────────────────────────────────
  buildProjectsScene() {
    this.projectsGroup = new THREE.Group();
    this.scene.add(this.projectsGroup);

    // Floating 3D Matrix Grid Planes
    const gridHelper1 = new THREE.GridHelper(32, 28, 0x22d3ee, 0x1e293b);
    gridHelper1.position.y = -5;
    gridHelper1.rotation.x = 0.2;
    this.projectsGroup.add(gridHelper1);

    const gridHelper2 = new THREE.GridHelper(32, 28, 0x6366f1, 0x1e293b);
    gridHelper2.position.y = 8;
    gridHelper2.rotation.x = -0.2;
    this.projectsGroup.add(gridHelper2);

    // Floating Project Polyhedra Data Nodes
    this.projectNodes = [];
    const shapes = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1.1, 0),
      new THREE.TetrahedronGeometry(1.4, 0),
      new THREE.DodecahedronGeometry(1.0, 0)
    ];

    for (let i = 0; i < 6; i++) {
      const geo = shapes[i % shapes.length];
      const mat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x22d3ee : 0x6366f1,
        wireframe: true,
        emissive: i % 2 === 0 ? 0x0891b2 : 0x4338ca,
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (i - 2.5) * 5.5,
        Math.sin(i * 1.5) * 3,
        (Math.random() - 0.5) * 8
      );
      mesh.rotation.set(Math.random(), Math.random(), 0);
      this.projectNodes.push({ mesh, rotSpeed: 0.008 + i * 0.003 });
      this.projectsGroup.add(mesh);
      this.disposables.push(geo, mat);
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // OPEN-SOURCE SCENE: Holographic Cyber Torus Knot & Pipeline Orbit
  // ──────────────────────────────────────────────────────────────────────────
  buildOpenSourceScene() {
    this.openSourceGroup = new THREE.Group();
    this.scene.add(this.openSourceGroup);

    // 1. Cyber Torus Knot Geometry
    const knotGeo = new THREE.TorusKnotGeometry(3.0, 0.78, this.isMobile ? 80 : 130, 20, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      wireframe: true,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45
    });
    this.torusKnot = new THREE.Mesh(knotGeo, knotMat);
    this.openSourceGroup.add(this.torusKnot);
    this.disposables.push(knotGeo, knotMat);

    // 2. Traversal Security Packets (150+ CI checks homage)
    this.ciPackets = [];
    const packetGeo = new THREE.OctahedronGeometry(0.18, 0);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    this.disposables.push(packetGeo, packetMat);

    for (let i = 0; i < 8; i++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      this.ciPackets.push({ mesh, offset: (i / 8) * Math.PI * 2 });
      this.openSourceGroup.add(mesh);
    }

    this.openSourceGroup.position.set(window.innerWidth > 1024 ? 3.5 : 0, 0.5, 0);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ACHIEVEMENTS SCENE: Gyroscopic Celestial Constellation & Metric Rings
  // ──────────────────────────────────────────────────────────────────────────
  buildAchievementsScene() {
    this.achievementsGroup = new THREE.Group();
    this.scene.add(this.achievementsGroup);

    // 3 Concentric Gyro Rings
    this.gyroRings = [];
    const ringRadii = [3.8, 2.9, 2.0];
    const ringColors = [0x6366f1, 0x22d3ee, 0xfbbf24];

    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.TorusGeometry(r, 0.05, 16, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: ringColors[idx],
        emissive: ringColors[idx],
        emissiveIntensity: 0.6,
        roughness: 0.2
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      this.gyroRings.push({ ring, axis: idx });
      this.achievementsGroup.add(ring);
      this.disposables.push(ringGeo, ringMat);
    });

    // Central Floating Grand Milestone Trophy Core
    const trophyGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const trophyMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      wireframe: true,
      emissive: 0xd97706,
      emissiveIntensity: 0.75
    });
    this.trophyCore = new THREE.Mesh(trophyGeo, trophyMat);
    this.achievementsGroup.add(this.trophyCore);
    this.disposables.push(trophyGeo, trophyMat);

    this.achievementsGroup.position.set(window.innerWidth > 1024 ? 3.8 : 0, 0, 0);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // EVENT BINDINGS & RESIZE
  // ──────────────────────────────────────────────────────────────────────────
  bindEvents() {
    window.addEventListener('resize', () => this.onWindowResize(), { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      this.scroll.targetY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      this.scroll.progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.isTabActive = !document.hidden;
      if (this.isTabActive) {
        this.clock.start();
      } else {
        this.clock.stop();
      }
    });
  }

  onWindowResize() {
    if (!this.renderer || !this.camera) return;
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.isMobile = width < 768;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Re-adjust off-center camera balance
    const offsetX = width > 1024 ? (this.sceneType === 'open-source' ? 3.5 : 4.0) : 0;
    if (this.coreGroup) this.coreGroup.position.x = offsetX;
    if (this.openSourceGroup) this.openSourceGroup.position.x = offsetX;
    if (this.achievementsGroup) this.achievementsGroup.position.x = offsetX;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ANIMATION LOOP & KINETIC CHOREOGRAPHY
  // ──────────────────────────────────────────────────────────────────────────
  animate() {
    requestAnimationFrame(this.animate);
    if (!this.isTabActive || this.prefersReducedMotion) return;

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Smooth Lerp Mouse Parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.055;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.055;
    this.scroll.y += (this.scroll.targetY - this.scroll.y) * 0.07;

    // Ambient Starfield Drift
    if (this.starField) {
      this.starField.rotation.y = elapsedTime * 0.02;
      this.starField.rotation.x = this.mouse.y * 0.08;
    }

    // Dynamic Camera Glide based on Mouse + Scroll
    this.camera.position.x = this.mouse.x * 1.4;
    this.camera.position.y = this.mouse.y * 1.1;

    // Dynamic Point Light Color & Intensity Transitions on Scroll
    if (this.lightIndigo && this.lightCyan) {
      const scrollHue = this.scroll.progress;
      this.lightIndigo.position.y = 10 - scrollHue * 14;
      this.lightCyan.position.y = -8 + scrollHue * 16;
    }

    // ── Home Scene Updates ──
    if (this.coreGroup) {
      this.outerCore.rotation.x += 0.0035;
      this.outerCore.rotation.y += 0.0055;
      this.innerCore.rotation.x -= 0.006;
      this.innerCore.rotation.z += 0.0045;
      this.nucleus.rotation.y += 0.012;

      // Mouse Parallax on Rig
      this.coreGroup.rotation.y = this.mouse.x * 0.35;
      this.coreGroup.rotation.x = -this.mouse.y * 0.3;

      // Scroll-driven camera glide closer and tilt
      this.coreGroup.rotation.z = this.scroll.progress * 0.8;
      this.camera.position.z = 18 - this.scroll.progress * 4.5;

      // Update Orbiting Nodes & Dynamic Lines
      const linePos = this.lineGeometry.attributes.position.array;
      let lineIndex = 0;

      for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        node.angle += node.speed * delta;
        const x = Math.cos(node.angle) * node.orbitRadius;
        const y = Math.sin(node.angle * 1.5) * 1.6;
        const z = Math.sin(node.angle) * node.orbitRadius;

        // Apply orbital inclination tilt
        const rotX = x * Math.cos(node.inclination) - z * Math.sin(node.inclination);
        const rotZ = x * Math.sin(node.inclination) + z * Math.cos(node.inclination);
        node.mesh.position.set(rotX, y, rotZ);

        // Proximity connections between close nodes
        for (let j = i + 1; j < this.nodes.length; j++) {
          const other = this.nodes[j];
          const dist = node.mesh.position.distanceTo(other.mesh.position);
          if (dist < 3.8) {
            linePos[lineIndex++] = node.mesh.position.x;
            linePos[lineIndex++] = node.mesh.position.y;
            linePos[lineIndex++] = node.mesh.position.z;
            linePos[lineIndex++] = other.mesh.position.x;
            linePos[lineIndex++] = other.mesh.position.y;
            linePos[lineIndex++] = other.mesh.position.z;
          }
        }
      }
      this.lineGeometry.setDrawRange(0, lineIndex / 3);
      this.lineGeometry.attributes.position.needsUpdate = true;
    }

    // ── Projects Scene Updates ──
    if (this.projectsGroup) {
      this.projectsGroup.rotation.y = elapsedTime * 0.035 + this.mouse.x * 0.2;
      this.projectsGroup.rotation.x = this.mouse.y * 0.15;
      if (this.projectNodes) {
        this.projectNodes.forEach(item => {
          item.mesh.rotation.x += item.rotSpeed;
          item.mesh.rotation.y += item.rotSpeed * 1.2;
        });
      }
    }

    // ── Open-Source Scene Updates ──
    if (this.openSourceGroup) {
      if (this.torusKnot) {
        this.torusKnot.rotation.x = elapsedTime * 0.12 + this.mouse.y * 0.25;
        this.torusKnot.rotation.y = elapsedTime * 0.18 + this.mouse.x * 0.35;
      }
      if (this.ciPackets) {
        this.ciPackets.forEach(p => {
          const t = elapsedTime * 0.8 + p.offset;
          // Approximate curve traversal around torus knot
          p.mesh.position.x = Math.cos(2 * t) * (3.0 + Math.cos(3 * t) * 0.8);
          p.mesh.position.y = Math.sin(2 * t) * (3.0 + Math.cos(3 * t) * 0.8);
          p.mesh.position.z = Math.sin(3 * t) * 0.8;
        });
      }
    }

    // ── Achievements Scene Updates ──
    if (this.achievementsGroup) {
      if (this.gyroRings) {
        this.gyroRings.forEach(({ ring, axis }) => {
          if (axis === 0) {
            ring.rotation.x += 0.01;
            ring.rotation.y += 0.006;
          } else if (axis === 1) {
            ring.rotation.y += 0.012;
            ring.rotation.z += 0.008;
          } else {
            ring.rotation.x += 0.008;
            ring.rotation.z += 0.014;
          }
        });
      }
      if (this.trophyCore) {
        this.trophyCore.rotation.y += 0.018;
        this.trophyCore.rotation.x = Math.sin(elapsedTime * 1.5) * 0.2;
      }
      this.achievementsGroup.rotation.y = this.mouse.x * 0.3;
      this.achievementsGroup.rotation.x = -this.mouse.y * 0.25;
    }

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.disposables.forEach(d => {
      if (d.dispose) d.dispose();
    });
    if (this.renderer) this.renderer.dispose();
  }
}

// Auto-instantiate when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new CyberSpatialEngine());
} else {
  new CyberSpatialEngine();
}
export default CyberSpatialEngine;

