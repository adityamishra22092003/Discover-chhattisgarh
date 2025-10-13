// server/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DATA_DIR = path.join(__dirname, '..', 'data');
const PORT = 4000;

function readJSON(filename){
  try{ return JSON.parse(fs.readFileSync(path.join(DATA_DIR, filename), 'utf8')); }
  catch(e){ return []; }
}
function writeJSON(filename, data){
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf8');
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const method = req.method;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS'){ res.writeHead(204); return res.end(); }

  // Simple router
  if (parsed.pathname === '/api/places') {
    if (method === 'GET') {
      const places = readJSON('places.json');
      res.writeHead(200, {'Content-Type':'application/json'});
      return res.end(JSON.stringify(places));
    }
    if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const p = JSON.parse(body);
        const arr = readJSON('places.json');
        arr.push(p);
        writeJSON('places.json', arr);
        res.writeHead(201, {'Content-Type':'application/json'});
        res.end(JSON.stringify(p));
      });
      return;
    }
  }

  // GET single place: /api/places?id=p001
  if (parsed.pathname === '/api/place' && method === 'GET') {
    const id = parsed.query.id;
    const arr = readJSON('places.json');
    const found = arr.find(x => x.id === id);
    if (!found) { res.writeHead(404); return res.end('Not Found'); }
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(found));
    return;
  }

  // simple put/delete handlers (id in query)
  if (parsed.pathname === '/api/place' && method === 'PUT'){
    let body = '';
    req.on('data', c=>body += c);
    req.on('end', ()=>{
      const id = parsed.query.id;
      const arr = readJSON('places.json');
      const idx = arr.findIndex(x => x.id === id);
      if (idx === -1){ res.writeHead(404); return res.end('Not found'); }
      const newData = JSON.parse(body);
      arr[idx] = {...arr[idx], ...newData};
      writeJSON('places.json', arr);
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(arr[idx]));
    });
    return;
  }

  if (parsed.pathname === '/api/place' && method === 'DELETE'){
    const id = parsed.query.id;
    const arr = readJSON('places.json');
    const newArr = arr.filter(x => x.id !== id);
    writeJSON('places.json', newArr);
    res.writeHead(204);
    return res.end();
  }

  // fallback: static file serve from public
  const filePath = path.join(__dirname, '..', 'public', parsed.pathname === '/' ? 'index.html' : parsed.pathname);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(filePath).toLowerCase();
    const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png'}[ext] || 'application/octet-stream';
    res.writeHead(200, {'Content-Type': mime});
    res.end(data);
  });
});

server.listen(PORT, () => console.log('Server running on http://localhost:' + PORT));

// // Cardboard split-screen mode
// let cardboardMode = false;
// const cardboardBtn = document.getElementById('enterCardboard');
// cardboardBtn.addEventListener('click', () => {
//   cardboardMode = !cardboardMode;
//   cardboardBtn.textContent = cardboardMode ? "Exit Cardboard" : "Cardboard Mode";
//   if (!cardboardMode) resizeCanvas();
// });

// // Override draw loop for split-screen
// function drawCardboard() {
//   resizeCanvas();
//   gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//   gl.enable(gl.DEPTH_TEST);

//   // smooth damp
//   yaw += (targetYaw - yaw) * 0.12;
//   pitch += (targetPitch - pitch) * 0.12;
//   pitch = Math.max(-Math.PI/2 + 0.01, Math.min(Math.PI/2 - 0.01, pitch));

//   // Stereo parameters
//   const eyeSep = 1.5; // eye separation
//   const aspect = gl.canvas.width / (2 * gl.canvas.height);

//   for (let eye = 0; eye < 2; ++eye) {
//     // Set viewport for left/right eye
//     gl.viewport(eye * gl.canvas.width/2, 0, gl.canvas.width/2, gl.canvas.height);

//     // Slight horizontal offset for each eye
//     const eyeOffset = (eye === 0 ? -eyeSep : eyeSep);

//     // Projection & view
//     const proj = mat4_perspective(fov, aspect);
//     let view = mat4_identity();
//     mat4_rotate(view, -pitch, [1,0,0]);
//     mat4_rotate(view, -yaw + eyeOffset * 0.01, [0,1,0]); // small yaw offset

//     gl.uniformMatrix4fv(uProj, false, proj);
//     gl.uniformMatrix4fv(uView, false, view);

//     if (texture) {
//       gl.activeTexture(gl.TEXTURE0);
//       gl.bindTexture(gl.TEXTURE_2D, texture);
//       gl.uniform1i(uTex, 0);
//     }

//     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
//     gl.drawElements(gl.TRIANGLES, sph.indices.length, gl.UNSIGNED_SHORT, 0);
//   }

//   if (cardboardMode) {
//     requestAnimationFrame(drawCardboard);
//   } else {
//     requestAnimationFrame(draw);
//   }
// }

// // Patch main draw loop to support Cardboard mode
// const origDraw = draw;
// draw = function() {
//   if (cardboardMode) {
//     drawCardboard();
//   } else {
//     origDraw();
//   }
// };
// requestAnimationFrame(draw);
