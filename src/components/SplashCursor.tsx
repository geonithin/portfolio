import { useEffect, useRef } from 'react'

interface SplashCursorProps {
  SIM_RESOLUTION?: number
  DYE_RESOLUTION?: number
  DENSITY_DISSIPATION?: number
  VELOCITY_DISSIPATION?: number
  PRESSURE?: number
  CURL?: number
  SPLAT_RADIUS?: number
  SPLAT_FORCE?: number
  COLOR_UPDATE_SPEED?: number
}

export default function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  COLOR_UPDATE_SPEED = 10,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return

    const config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS: 20,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING: true,
      COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
    }

    let gl: WebGL2RenderingContext | WebGLRenderingContext
    let ext: {
      formatRGBA: { internalFormat: number; format: number } | null
      formatRG: { internalFormat: number; format: number } | null
      formatR: { internalFormat: number; format: number } | null
      halfFloatTexType: number
      supportLinearFiltering: boolean | null
    }

    function getWebGLContext(c: HTMLCanvasElement) {
      const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false }
      let glCtx: WebGL2RenderingContext | WebGLRenderingContext | null = c.getContext('webgl2', params) as WebGL2RenderingContext | null
      const isWebGL2 = !!glCtx
      if (!isWebGL2) glCtx = (c.getContext('webgl', params) || c.getContext('experimental-webgl', params)) as WebGLRenderingContext | null
      if (!glCtx) return null

      let halfFloat: OES_texture_half_float | null = null
      let supportLinearFiltering: WEBGL_color_buffer_float | OES_texture_half_float_linear | null = null
      if (isWebGL2) {
        ;(glCtx as WebGL2RenderingContext).getExtension('EXT_color_buffer_float')
        supportLinearFiltering = (glCtx as WebGL2RenderingContext).getExtension('OES_texture_float_linear')
      } else {
        halfFloat = glCtx.getExtension('OES_texture_half_float')
        supportLinearFiltering = glCtx.getExtension('OES_texture_half_float_linear')
      }

      glCtx.clearColor(0.0, 0.0, 0.0, 1.0)
      const halfFloatTexType = isWebGL2
        ? (glCtx as WebGL2RenderingContext).HALF_FLOAT
        : halfFloat
        ? halfFloat.HALF_FLOAT_OES
        : glCtx.UNSIGNED_BYTE

      let formatRGBA: { internalFormat: number; format: number } | null = null
      let formatRG: { internalFormat: number; format: number } | null = null
      let formatR: { internalFormat: number; format: number } | null = null

      if (isWebGL2) {
        const gl2 = glCtx as WebGL2RenderingContext
        formatRGBA = getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, halfFloatTexType)
        formatRG = getSupportedFormat(gl2, gl2.RG16F, gl2.RG, halfFloatTexType)
        formatR = getSupportedFormat(gl2, gl2.R16F, gl2.RED, halfFloatTexType)
      } else {
        formatRGBA = getSupportedFormat(glCtx, glCtx.RGBA, glCtx.RGBA, halfFloatTexType)
        formatRG = getSupportedFormat(glCtx, glCtx.RGBA, glCtx.RGBA, halfFloatTexType)
        formatR = getSupportedFormat(glCtx, glCtx.RGBA, glCtx.RGBA, halfFloatTexType)
      }

      return {
        gl: glCtx,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering: !!supportLinearFiltering,
        },
      }
    }

    function getSupportedFormat(
      glCtx: WebGL2RenderingContext | WebGLRenderingContext,
      internalFormat: number,
      format: number,
      type: number
    ) {
      if (!supportRenderTextureFormat(glCtx, internalFormat, format, type)) {
        switch (internalFormat) {
          case (glCtx as WebGL2RenderingContext).R16F:
            return getSupportedFormat(glCtx, (glCtx as WebGL2RenderingContext).RG16F, (glCtx as WebGL2RenderingContext).RG, type)
          case (glCtx as WebGL2RenderingContext).RG16F:
            return getSupportedFormat(glCtx, (glCtx as WebGL2RenderingContext).RGBA16F, glCtx.RGBA, type)
          default:
            return null
        }
      }
      return { internalFormat, format }
    }

    function supportRenderTextureFormat(
      glCtx: WebGL2RenderingContext | WebGLRenderingContext,
      internalFormat: number,
      format: number,
      type: number
    ) {
      const texture = glCtx.createTexture()
      glCtx.bindTexture(glCtx.TEXTURE_2D, texture)
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.NEAREST)
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.NEAREST)
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE)
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE)
      glCtx.texImage2D(glCtx.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null)
      const fbo = glCtx.createFramebuffer()
      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, fbo)
      glCtx.framebufferTexture2D(glCtx.FRAMEBUFFER, glCtx.COLOR_ATTACHMENT0, glCtx.TEXTURE_2D, texture, 0)
      const status = glCtx.checkFramebufferStatus(glCtx.FRAMEBUFFER)
      return status === glCtx.FRAMEBUFFER_COMPLETE
    }

    const result = getWebGLContext(canvas)
    if (!result) return
    gl = result.gl
    ext = result.ext

    // Shaders
    const baseVertexShaderSrc = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `

    const splatShaderSrc = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `

    const advectionShaderSrc = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;
      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }
      void main () {
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
      }
    `

    const divergenceShaderSrc = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `

    const curlShaderSrc = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `

    const vorticityShaderSrc = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
      }
    `

    const pressureShaderSrc = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `

    const gradientSubtractShaderSrc = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `

    const displayShaderSrc = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 C = texture2D(uTexture, vUv).rgb;
        float a = max(C.r, max(C.g, C.b));
        gl_FragColor = vec4(C, a);
      }
    `

    function compileShader(type: number, source: string) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    function createProgram(vertSrc: string, fragSrc: string) {
      const program = gl.createProgram()!
      gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertSrc))
      gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fragSrc))
      gl.linkProgram(program)
      return {
        program,
        uniforms: new Proxy({} as Record<string, WebGLUniformLocation>, {
          get(_, key: string) {
            return gl.getUniformLocation(program, key)!
          },
        }),
      }
    }

    const splatProgram = createProgram(baseVertexShaderSrc, splatShaderSrc)
    const advectionProgram = createProgram(baseVertexShaderSrc, advectionShaderSrc)
    const divergenceProgram = createProgram(baseVertexShaderSrc, divergenceShaderSrc)
    const curlProgram = createProgram(baseVertexShaderSrc, curlShaderSrc)
    const vorticityProgram = createProgram(baseVertexShaderSrc, vorticityShaderSrc)
    const pressureProgram = createProgram(baseVertexShaderSrc, pressureShaderSrc)
    const gradientSubtractProgram = createProgram(baseVertexShaderSrc, gradientSubtractShaderSrc)
    const displayProgram = createProgram(baseVertexShaderSrc, displayShaderSrc)

    // Vertex buffer
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(0)

    function createFBO(w: number, h: number, internalFormat: number, format: number, type: number, filtering: number) {
      gl.activeTexture(gl.TEXTURE0)
      const texture = gl.createTexture()!
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filtering)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filtering)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)
      const fbo = gl.createFramebuffer()!
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      gl.viewport(0, 0, w, h)
      gl.clear(gl.COLOR_BUFFER_BIT)
      return { texture, fbo, width: w, height: h, texelSizeX: 1 / w, texelSizeY: 1 / h }
    }

    function createDoubleFBO(w: number, h: number, internalFormat: number, format: number, type: number, filtering: number) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, filtering)
      let fbo2 = createFBO(w, h, internalFormat, format, type, filtering)
      return {
        width: w, height: h, texelSizeX: 1 / w, texelSizeY: 1 / h,
        get read() { return fbo1 },
        get write() { return fbo2 },
        swap() { const tmp = fbo1; fbo1 = fbo2; fbo2 = tmp },
      }
    }

    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
    const rgba = ext.formatRGBA!
    const rg = ext.formatRG || rgba
    const r = ext.formatR || rgba

    const simWidth = config.SIM_RESOLUTION
    const simHeight = config.SIM_RESOLUTION
    const dyeWidth = config.DYE_RESOLUTION
    const dyeHeight = config.DYE_RESOLUTION

    let density = createDoubleFBO(dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, ext.halfFloatTexType, filtering)
    let velocity = createDoubleFBO(simWidth, simHeight, rg.internalFormat, rg.format, ext.halfFloatTexType, filtering)
    const divergence = createFBO(simWidth, simHeight, r.internalFormat, r.format, ext.halfFloatTexType, gl.NEAREST)
    const curl = createFBO(simWidth, simHeight, r.internalFormat, r.format, ext.halfFloatTexType, gl.NEAREST)
    let pressure = createDoubleFBO(simWidth, simHeight, r.internalFormat, r.format, ext.halfFloatTexType, gl.NEAREST)

    function bindTexture(texture: WebGLTexture, id: number) {
      gl.activeTexture(gl.TEXTURE0 + id)
      gl.bindTexture(gl.TEXTURE_2D, texture)
    }

    function blit(target: { fbo: WebGLFramebuffer | null; width: number; height: number } | null) {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      } else {
        gl.viewport(0, 0, target.width, target.height)
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
      }
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
    }

    // Pointer state
    const pointers: { id: number; texcoordX: number; texcoordY: number; prevTexcoordX: number; prevTexcoordY: number; deltaX: number; deltaY: number; down: boolean; moved: boolean; color: [number, number, number] }[] = []
    pointers.push({ id: -1, texcoordX: 0, texcoordY: 0, prevTexcoordX: 0, prevTexcoordY: 0, deltaX: 0, deltaY: 0, down: false, moved: false, color: [0, 0, 0] })

    function HSVtoRGB(h: number, s: number, v: number): [number, number, number] {
      let r = 0, g = 0, b = 0
      const i = Math.floor(h * 6)
      const f = h * 6 - i
      const p = v * (1 - s)
      const q = v * (1 - f * s)
      const t = v * (1 - (1 - f) * s)
      switch (i % 6) {
        case 0: r = v; g = t; b = p; break
        case 1: r = q; g = v; b = p; break
        case 2: r = p; g = v; b = t; break
        case 3: r = p; g = q; b = v; break
        case 4: r = t; g = p; b = v; break
        case 5: r = v; g = p; b = q; break
      }
      return [r, g, b]
    }

    function generateColor(): [number, number, number] {
      const c = HSVtoRGB(Math.random(), 0.5, 0.8)
      c[0] *= 0.11
      c[1] *= 0.11
      c[2] *= 0.11
      return c
    }

    function updatePointerDownData(pointer: typeof pointers[0], id: number, posX: number, posY: number) {
      pointer.id = id
      pointer.down = true
      pointer.moved = false
      pointer.texcoordX = posX / canvas.width
      pointer.texcoordY = 1.0 - posY / canvas.height
      pointer.prevTexcoordX = pointer.texcoordX
      pointer.prevTexcoordY = pointer.texcoordY
      pointer.deltaX = 0
      pointer.deltaY = 0
      pointer.color = generateColor()
    }

    function updatePointerMoveData(pointer: typeof pointers[0], posX: number, posY: number) {
      pointer.prevTexcoordX = pointer.texcoordX
      pointer.prevTexcoordY = pointer.texcoordY
      pointer.texcoordX = posX / canvas.width
      pointer.texcoordY = 1.0 - posY / canvas.height
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX)
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY)
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0
    }

    function correctDeltaX(delta: number) {
      const aspectRatio = canvas.width / canvas.height
      if (aspectRatio < 1) delta *= aspectRatio
      return delta
    }

    function correctDeltaY(delta: number) {
      const aspectRatio = canvas.width / canvas.height
      if (aspectRatio > 1) delta /= aspectRatio
      return delta
    }

    function splat(x: number, y: number, dx: number, dy: number, color: [number, number, number]) {
      gl.useProgram(splatProgram.program)
      gl.uniform1i(splatProgram.uniforms['uTarget'], 0)
      gl.uniform1f(splatProgram.uniforms['aspectRatio'], canvas.width / canvas.height)
      gl.uniform2f(splatProgram.uniforms['point'], x, y)
      gl.uniform3f(splatProgram.uniforms['color'], dx, dy, 0)
      gl.uniform1f(splatProgram.uniforms['radius'], correctRadius(config.SPLAT_RADIUS / 100))
      bindTexture(velocity.read.texture, 0)
      blit(velocity.write)
      velocity.swap()

      gl.uniform1i(splatProgram.uniforms['uTarget'], 0)
      gl.uniform3f(splatProgram.uniforms['color'], color[0], color[1], color[2])
      bindTexture(density.read.texture, 0)
      blit(density.write)
      density.swap()
    }

    function correctRadius(radius: number) {
      const aspectRatio = canvas.width / canvas.height
      if (aspectRatio > 1) radius *= aspectRatio
      return radius
    }

    // Random splats on start
    function multipleSplats(amount: number) {
      for (let i = 0; i < amount; i++) {
        const color = generateColor()
        color[0] *= 6
        color[1] *= 6
        color[2] *= 6
        const x = Math.random()
        const y = Math.random()
        const dx = 1000 * (Math.random() - 0.5)
        const dy = 1000 * (Math.random() - 0.5)
        splat(x, y, dx, dy, color)
      }
    }

    let lastUpdateTime = Date.now()
    let colorUpdateTimer = 0

    function step(dt: number) {
      gl.disable(gl.BLEND)

      // Curl
      gl.useProgram(curlProgram.program)
      gl.uniform2f(curlProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(curlProgram.uniforms['uVelocity'], 0)
      bindTexture(velocity.read.texture, 0)
      blit(curl)

      // Vorticity
      gl.useProgram(vorticityProgram.program)
      gl.uniform2f(vorticityProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(vorticityProgram.uniforms['uVelocity'], 0)
      gl.uniform1i(vorticityProgram.uniforms['uCurl'], 1)
      gl.uniform1f(vorticityProgram.uniforms['curl'], config.CURL)
      gl.uniform1f(vorticityProgram.uniforms['dt'], dt)
      bindTexture(velocity.read.texture, 0)
      bindTexture(curl.texture, 1)
      blit(velocity.write)
      velocity.swap()

      // Divergence
      gl.useProgram(divergenceProgram.program)
      gl.uniform2f(divergenceProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(divergenceProgram.uniforms['uVelocity'], 0)
      bindTexture(velocity.read.texture, 0)
      blit(divergence)

      // Pressure
      gl.useProgram(pressureProgram.program)
      gl.uniform2f(pressureProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(pressureProgram.uniforms['uPressure'], 0)
      gl.uniform1i(pressureProgram.uniforms['uDivergence'], 1)
      bindTexture(divergence.texture, 1)
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        bindTexture(pressure.read.texture, 0)
        blit(pressure.write)
        pressure.swap()
      }

      // Gradient subtract
      gl.useProgram(gradientSubtractProgram.program)
      gl.uniform2f(gradientSubtractProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(gradientSubtractProgram.uniforms['uPressure'], 0)
      gl.uniform1i(gradientSubtractProgram.uniforms['uVelocity'], 1)
      bindTexture(pressure.read.texture, 0)
      bindTexture(velocity.read.texture, 1)
      blit(velocity.write)
      velocity.swap()

      // Advect velocity
      gl.useProgram(advectionProgram.program)
      gl.uniform2f(advectionProgram.uniforms['texelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform2f(advectionProgram.uniforms['dyeTexelSize'], velocity.texelSizeX, velocity.texelSizeY)
      gl.uniform1i(advectionProgram.uniforms['uVelocity'], 0)
      gl.uniform1i(advectionProgram.uniforms['uSource'], 0)
      gl.uniform1f(advectionProgram.uniforms['dt'], dt)
      gl.uniform1f(advectionProgram.uniforms['dissipation'], config.VELOCITY_DISSIPATION)
      bindTexture(velocity.read.texture, 0)
      blit(velocity.write)
      velocity.swap()

      // Advect density
      gl.uniform2f(advectionProgram.uniforms['dyeTexelSize'], density.texelSizeX, density.texelSizeY)
      gl.uniform1i(advectionProgram.uniforms['uVelocity'], 0)
      gl.uniform1i(advectionProgram.uniforms['uSource'], 1)
      gl.uniform1f(advectionProgram.uniforms['dissipation'], config.DENSITY_DISSIPATION)
      bindTexture(velocity.read.texture, 0)
      bindTexture(density.read.texture, 1)
      blit(density.write)
      density.swap()
    }

    function render() {
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      gl.useProgram(displayProgram.program)
      gl.uniform1i(displayProgram.uniforms['uTexture'], 0)
      bindTexture(density.read.texture, 0)
      blit(null)
    }

    function resizeCanvas() {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
      }
    }

    let animFrameId: number
    function update() {
      resizeCanvas()
      const now = Date.now()
      let dt = (now - lastUpdateTime) / 1000
      dt = Math.min(dt, 0.016)
      lastUpdateTime = now

      if (!config.PAUSED) {
        colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED
        if (colorUpdateTimer >= 1) {
          colorUpdateTimer = 0
          pointers.forEach(p => { p.color = generateColor() })
        }
        step(dt)
        pointers.forEach(p => {
          if (p.moved) {
            p.moved = false
            splat(p.texcoordX, p.texcoordY, p.deltaX * config.SPLAT_FORCE, p.deltaY * config.SPLAT_FORCE, p.color)
          }
        })
      }

      render()
      animFrameId = requestAnimationFrame(update)
    }

    multipleSplats(Math.floor(Math.random() * 4) + 3)
    animFrameId = requestAnimationFrame(update)

    // Event handlers
    function onMouseMove(e: MouseEvent) {
      const pointer = pointers[0]
      if (!pointer.down) pointer.down = true
      const rect = canvas.getBoundingClientRect()
      updatePointerMoveData(pointer, e.clientX - rect.left, e.clientY - rect.top)
    }

    function onTouchStart(e: TouchEvent) {
      const touches = e.targetTouches
      while (pointers.length < touches.length) pointers.push({ id: -1, texcoordX: 0, texcoordY: 0, prevTexcoordX: 0, prevTexcoordY: 0, deltaX: 0, deltaY: 0, down: false, moved: false, color: [0, 0, 0] })
      const rect = canvas.getBoundingClientRect()
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i]
        updatePointerDownData(pointers[i], touch.identifier, touch.clientX - rect.left, touch.clientY - rect.top)
      }
    }

    function onTouchMove(e: TouchEvent) {
      const touches = e.targetTouches
      const rect = canvas.getBoundingClientRect()
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i]
        const pointer = pointers.find(p => p.id === touch.identifier) || pointers[i]
        updatePointerMoveData(pointer, touch.clientX - rect.left, touch.clientY - rect.top)
      }
    }

    function onTouchEnd(e: TouchEvent) {
      const touches = e.changedTouches
      for (let i = 0; i < touches.length; i++) {
        const pointer = pointers.find(p => p.id === touches[i].identifier)
        if (pointer) pointer.down = false
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [SIM_RESOLUTION, DYE_RESOLUTION, DENSITY_DISSIPATION, VELOCITY_DISSIPATION, PRESSURE, CURL, SPLAT_RADIUS, SPLAT_FORCE, COLOR_UPDATE_SPEED])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
