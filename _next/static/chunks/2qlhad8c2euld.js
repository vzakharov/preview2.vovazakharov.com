(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,991733,(__turbopack_context__,module,exports)=>{!function(){var __webpack_modules__={285:function(__unused_webpack_module,exports){var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return -1},Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,n){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(e){return function(e,t,n){e[t]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var n=t.contentWindow,r=n.eval,s=n.execScript;!r&&s&&(s.call(n,"null"),r=n.eval),forEach(Object_keys(e),function(t){n[t]=e[t]}),forEach(globals,function(t){e[t]&&(n[t]=e[t])});var a=Object_keys(n),o=r.call(n,this.code);return forEach(Object_keys(n),function(t){(t in e||-1===indexOf(a,t))&&(e[t]=n[t])}),forEach(globals,function(t){t in e||defineProp(e,t,n[t])}),document.body.removeChild(t),o},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),n=this.runInContext(t);return e&&forEach(Object_keys(t),function(n){e[n]=t[n]}),n},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var n=Script(t);return n[e].apply(n,[].slice.call(arguments,1))}}),exports.isContext=function(e){return e instanceof Context},exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(n){t[n]=e[n]}),t}}};"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/.pnpm/next@16.4.5_@babel+core@7.28.5_@types+node@20.19.25_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.103.1/node_modules/next/dist/compiled/vm-browserify/");var __webpack_exports__={};__webpack_modules__[285](0,__webpack_exports__),module.exports=__webpack_exports__}()},415809,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},514287,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},820984,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},789137,393592,e=>{"use strict";let t=[0x9747b28c,0x5bd1e995],n=(e,t)=>e<<t|e>>>32-t,r=e=>Math.imul(n(Math.imul(e,0xcc9e2d51),15),0x1b873593),s=(e,t)=>Math.imul(n(e^r(t),13),5)+0xe6546b64>>>0;function a(e,t,n,a){let o,i=e=>n[e]??0,l=-4&a,c=e;for(let e=0;e<l;e+=4)c=s(c,i(e)|i(e+1)<<8|i(e+2)<<16|i(e+3)<<24);let f=0;for(let e=a-1;e>=l;e-=1)f=f<<8|i(e);return a>l&&(c^=r(f)),o=c^t+a,o^=o>>>16,o=Math.imul(o,0x85ebca6b),o^=o>>>13,o=Math.imul(o,0xc2b2ae35),(o^=o>>>16)>>>0}let o=/^(?:0|[1-9]\d*)$/,i=e=>o.test(e);function l(e){if(!i(e))throw Error(`Not a world number: ${JSON.stringify(e)}`)}e.s(["f",0,l,"_",0,i,"D",0,function(e){l(e);let n=function(e){let n=Uint8Array.from(e,e=>e.codePointAt(0)??0),[r,o]=t.map(e=>a(e>>>0,0,n,n.length));return s(s(0,r??0),o??0)}(e),r=new TextEncoder,o=new Uint8Array(64);return e=>{3*e.length>o.length&&(o=new Uint8Array(3*e.length));let{written:t}=r.encodeInto(e,o);return a(n,8,o,t)}}],789137);let c=(e,t)=>e.reduceRight((e,n)=>e*t+n,0),f=[3.3871328727963665,133.14166789178438,1971.5909503065513,13731.69376550946,45921.95393154987,67265.7709270087,33430.57558358813,2509.0809287301227],h=[1,42.31333070160091,687.1870074920579,5394.196021424751,21213.794301586597,39307.89580009271,28729.085735721943,5226.495278852854],u=[1.4234371107496835,4.630337846156546,5.769497221460691,3.6478483247632045,1.2704582524523684,.2417807251774506,.022723844989269184,7745450142783414e-19],d=[1,2.053191626637759,1.6763848301838038,.6897673349851,.14810397642748008,.015198666563616457,5475938084995345e-19,10507500716444169e-25],p=[6.657904643501103,5.463784911164114,1.7848265399172913,.29656057182850487,.026532189526576124,.0012426609473880784,27115555687434876e-21,20103343992922881e-23],w=[1,.599832206555888,.1369298809227358,.014875361290850615,7868691311456133e-19,18463183175100548e-21,1421511758316446e-22,20442631033899397e-31],m=e=>(function(e){let t,n=e-.5;if(.425>=Math.abs(n)){let e=.180625-n*n;return n*c(f,e)/c(h,e)}let r=Math.sqrt(-Math.log(Math.min(e,1-e)));return r<=5?(r-=1.6,t=c(u,r)/c(d,r)):(r-=5,t=c(p,r)/c(w,r)),n<0?-t:t})((e+.5)/0x100000000),E=e=>({kind:"leaf",decode:e}),b=(e,t)=>""===e?t:`${e}/${t}`;e.s(["F",0,{struct:e=>({kind:"struct",fields:e}),uniform:(e,t)=>E(n=>{let r,s;return r=n,(s=e)+(r+.5)/0x100000000*(t-s)}),normal:()=>E(m),word:()=>E(e=>e),table:({slots:e,slotOf:t,segmentsAt:n},r)=>({kind:"table",leaf:r,slots:e,segmentsAt:n,lookup:e=>({values:e,at:n=>e[t(n)]??0/0})}),pick:e=>{if(!Number.isInteger(e)||e<1||e>2097152)throw Error(`Cannot pick among ${e}`);return E(t=>Math.floor(t*e/0x100000000))},wide:()=>({kind:"wide"}),over:(e,t)=>({kind:"over",key:e,of:t}),key:function(e){if(Array.isArray(e))return{segments:t=>{if(!e.includes(t))throw Error(`Not a key of [${e.join(", ")}]: ${t}`);return t}};let t=Object.entries(e);return{segments:e=>t.map(([t,n])=>n(e[t])).join("/")}},int:e=>{if("number"!=typeof e||!Number.isSafeInteger(e))throw TypeError(`Not a safe integer: ${String(e)}`);return String(e)},big:e=>{if("bigint"!=typeof e)throw TypeError(`Not a bigint: ${String(e)}`);return e.toString()}},"P",0,function(e,t){return function e(t,n,r){if("leaf"===t.kind)return t.decode(r(n));if("wide"===t.kind)return BigInt(r(b(n,"0")))<<32n|BigInt(r(b(n,"1")));if("over"===t.kind){let{key:s,of:a}=t;return{at:t=>e(a,b(n,s.segments(t)),r)}}if("table"===t.kind){let{slots:e,segmentsAt:s,leaf:a,lookup:o}=t,i=new Float64Array(e);for(let t=0;t<e;t+=1)i[t]=a.decode(r(b(n,s(t))));return o(i)}return Object.fromEntries(Object.entries(t.fields).map(([t,s])=>[t,e(s,b(n,t),r)]))}(e,"",t)}],393592)},530434,555249,942815,334461,e=>{"use strict";let t=(e,t,...n)=>({id:e,listing:t,needs:n}),n=e=>Number.isInteger(e)?e.toFixed(1):String(e);e.s(["a",0,function(e){let t=new Map,n=e=>{let r=t.get(e.id);if(void 0!==r){if(r!==e)throw Error(`Two WGSL pieces are both named ${e.id}`);return}for(let t of e.needs)n(t);t.set(e.id,e)};for(let t of e)n(t);return[...t.values()].map(({listing:e})=>e.trim()).join("\n\n")},"W",0,n,"E",0,e=>`vec${String(e.length)}f(${e.map(e=>n(e)).join(", ")})`,"K",0,t],555249);let r=t("gpu/shared/shader/hash",`
fn mix32(x: u32) -> u32 {
  var h = x;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return h;
}

/// \`a\` and \`b\` hashed into one word.
fn hashOf(a: u32, b: u32) -> u32 {
  return mix32(a ^ mix32(b + 0x9e3779b9u));
}

/// A word as a number in [0, 1).
fn unitOf(h: u32) -> f32 {
  return f32(h >> 8u) / 16777216.0;
}

/// The word of lattice cell \`cell\` under \`salt\`.
fn cellHash(cell: vec2i, salt: u32) -> u32 {
  return hashOf(hashOf(bitcast<u32>(cell.x), bitcast<u32>(cell.y)), salt);
}

/// The word of lattice point \`point\` under \`salt\` in one round of the
/// mixer: for a lattice read many times a pixel, where \`cellHash\`'s four
/// rounds a point are the whole cost.
fn pointHash(point: vec3i, salt: u32) -> u32 {
  let spread =
    bitcast<vec3u>(point) * vec3u(0x9e3779b1u, 0x85ebca77u, 0xc2b2ae3du);
  return mix32(spread.x + spread.y + spread.z + salt);
}

/// Smooth noise in [0, 1), one lattice cell per unit of \`p\`.
fn valueNoise(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = unitOf(cellHash(cell, salt));
  let b = unitOf(cellHash(cell + vec2i(1, 0), salt));
  let c = unitOf(cellHash(cell + vec2i(0, 1), salt));
  let d = unitOf(cellHash(cell + vec2i(1, 1), salt));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

/// \`octaves\` of valueNoise, each twice as fine and half as strong, in [0, 1).
fn fbm(p: vec2f, salt: u32, octaves: i32) -> f32 {
  var sum = 0.0;
  var weight = 0.5;
  var at = p;
  for (var octave = 0; octave < octaves; octave++) {
    sum += weight * valueNoise(at, salt + u32(octave));
    at *= 2.0;
    weight *= 0.5;
  }
  return sum / (1.0 - 2.0 * weight);
}

/// The point lattice cell \`cell\` holds, \`word\` being its \`cellHash\`.
fn cellPoint(cell: vec2i, word: u32) -> vec2f {
  return vec2f(cell) + vec2f(unitOf(word), unitOf(mix32(word)));
}

/// Cells of a unit lattice, one point in each: x is the distance to the
/// nearest point, y that point's own random number in [0, 1).
fn worley(p: vec2f, salt: u32) -> vec2f {
  let cell = vec2i(floor(p));
  var nearest = vec2f(8.0, 0.0);
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      let distance = length(cellPoint(other, word) - p);
      if (distance < nearest.x) {
        nearest = vec2f(distance, unitOf(mix32(word ^ 0xa5a5a5a5u)));
      }
    }
  }
  return nearest;
}

/// How far \`p\` stands from the nearest wall between \`worley\`'s cells: 0 on
/// the web of walls, rising into each cell.
fn cellWalls(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  var first = 8.0;
  var second = 8.0;
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let distance = length(cellPoint(other, cellHash(other, salt)) - p);
      if (distance < first) {
        second = first;
        first = distance;
      } else if (distance < second) {
        second = distance;
      }
    }
  }
  return second - first;
}
`);e.s(["f",0,r],942815),e.i(991733);let{sin:s,cos:a,sqrt:o,exp:i,log:l,pow:c,abs:f,floor:h,min:u,max:d,tanh:p,atan2:w}=Math;e.s([],530434);var m=e.i(789137),E=e.i(393592);let b=2*Math.PI,S=3600/420,v=3600/420*9.81/b,_=[Math.SQRT1_2,-Math.SQRT1_2],g=[[31,13,1],[53,17,1],[89,17,1]],A=[[19,9,.22],[37,9,.16],[61,13,.1]],R=e=>E.F.struct({cycles:E.F.pick(e),weight:E.F.uniform(.75,1.25),start:E.F.uniform(0,1)}),x=e=>E.F.struct({slow:R(e[0]?.[1]??1),middle:R(e[1]?.[1]??1),quick:R(e[2]?.[1]??1)}),y=(0,m.D)("0"),O=(0,E.P)(E.F.struct({drift:x(g),sets:x(A)}),e=>y(`island/sea/swell/${e}`));function H({slow:e,middle:t,quick:n},r,s,a){let o=[e,t,n].map(({cycles:e,weight:t,start:n},s)=>{let[a=1,,o=1]=r[s]??[];return{cycles:a+e,share:o*t,start:n}}),i=o.reduce((e,{share:t})=>e+t,0);return o.map(({cycles:e,share:t,start:n})=>[e,s*t/i*a(e),n])}let W=H(O.drift,g,.165,e=>420/(b*e)),$=H(O.sets,A,.47,()=>1),T=(e,t)=>e.reduce((e,[n,r,s])=>e+r*Math.sin(b*(n*t/3600+s)),0),M=e=>e.map(([e,t,r])=>`${n(t)} * sin(${n(b)} * fract(${n(e)} * tau / ${n(3600)} + ${n(r)}))`).join("\n    + "),L=(1-Math.exp(-3))/3,N=t("outside/swell",`
fn swellDrift(tau: f32) -> f32 {
  return ${M(W)};
}

fn setsAt(tau: f32) -> f32 {
  return 1.0
    + ${M($)};
}
`);e.s(["n",0,.955,"j",0,3,"M",0,L,"O",0,v,"Y",0,3600,"B",0,S,"o",0,b,"w",0,9.81,"y",0,"0","$",0,.4,"p",0,_,"R",0,N,"a",0,420,"H",0,function(e){let t=Math.min(Math.max((e-.955)/(1-.955),0),1),n=Math.exp(-3*e);return 2.1*(n+t*t*(3-2*t)*(1-n)-L)},"Z",0,function(e){let t=e*S;for(let n=0;n<5;n+=1)t=(e-T(W,t))*S;return t},"e",0,function(e,t){let n=Math.sqrt(1-t*t),r=Math.cos(b*e);return n*(r-t/(1+n))/(1-t*r)},"x",0,e=>1+T($,e),"N",0,e=>420*e/3600+T(W,e)],334461)},157997,e=>{e.v(t=>Promise.all(["static/chunks/21mfrgthwjor2.js"].map(t=>e.l(t))).then(()=>t(874091)))},287016,e=>{e.v(t=>Promise.all(["static/chunks/0d_yyjej1bf43.js"].map(t=>e.l(t))).then(()=>t(530842)))},472513,e=>{e.q("/_next/static/media/tile-worker.25qej7ycvodey.ts")},650727,748618,570029,e=>{"use strict";e.i(317683),e.i(675131),e.i(702239);var t=e.i(555249),n=e.i(334461),r=e.i(386004),s=e.i(687944),a=e.i(969716),o=e.i(257349);let i=(0,t.K)("nature/shared/shore/shore-level",`
/// The greater of two levels, rounded where they cross.
fn shoreOver(a: f32, b: f32) -> f32 {
  return 0.5 * (a + b + sqrt((a - b) * (a - b) + SHORE_ROUND * SHORE_ROUND));
}

/// The depth a wave is timed over where the bed stands at \`bed\`.
fn shoreDepth(bed: f32) -> f32 {
  return max(-bed, 0.0) + SHORE_SHALLOWEST;
}

/// Seconds water \`depth\` deep has held a wave back since deep water.
fn shoreDelay(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) * (1.0 - q);
}

/// How fast that delay grows as the water shallows, seconds per metre.
fn shoreSlowing(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) / sqrt(depth * SWELL_FEELS);
}

/// How squarely the waves at a point still run with the open swell: 1 on the
/// beach that faces it, −1 in the island's lee.
fn shoreFacing(along: f32, steep: f32, bed: f32) -> f32 {
  let slow = shoreSlowing(shoreDepth(bed));
  let pace = SWELL_PACE;
  let ahead = pace + slow * along;
  return
    ahead / sqrt(
      pace * pace + 2.0 * pace * slow * along + slow * slow * steep * steep,
    );
}

/// What a shore facing the swell by \`facing\` keeps of a wave's height.
fn sheltered(facing: f32) -> f32 {
  return mix(SHORE_LEE, 1.0, smoothstep(-0.6, 0.7, facing));
}

/// The open swell's amplitude, metres, on a shore keeping \`shelter\` of it.
fn swellAmplitude(tau: f32, shelter: f32) -> f32 {
  return 0.5 * SWELL_HEIGHT * shelter * setsAt(tau);
}

/// A wave of amplitude \`open\` as the shallowing bed has stood it up.
fn shoaled(open: f32, bed: f32) -> f32 {
  return open * max(1.0, pow(SHOALS_FROM / shoreDepth(bed), 0.25));
}

/// How far a wave of amplitude \`open\` has gone toward breaking, 0 to 1 and past.
fn steepness(open: f32, bed: f32) -> f32 {
  return shoaled(open, bed) / max(0.5 * SURF_SHARE * -bed, 1e-4);
}

/// How broken a wave \`steep\` toward breaking is: 0 unbroken, 1 a bore.
fn breaking(steep: f32) -> f32 {
  return smoothstep(BREAKS_FROM, BREAKS_TO, steep);
}

/// How high up the sand, metres, the wave that landed at \`landed\` runs.
fn swashReach(landed: f32, shelter: f32) -> f32 {
  return RUNUP_SHARE * SWELL_HEIGHT * shelter * setsAt(landed);
}

/// How broken the waves are over a bed at \`bed\` in a point's own time \`tau\`.
fn brokenAt(tau: f32, bed: f32, shelter: f32) -> f32 {
  return breaking(steepness(swellAmplitude(tau, shelter), bed));
}

/// The waves' surface over a bed below the still sea, metres about it.
fn surfLevel(tau: f32, bed: f32, shelter: f32) -> f32 {
  let open = swellAmplitude(tau, shelter);
  let steep = steepness(open, bed);
  let limit = 0.5 * SURF_SHARE * max(-bed, 0.0);
  let tall = min(shoaled(open, bed), limit);
  let turns = turnsAt(tau);
  let phase = turns - floor(turns);
  let shape =
    mix(peaked(phase, 0.75 * min(steep, 1.0)), bore(phase), breaking(steep));
  return tall * shape;
}

/// How deep wave \`n\`'s sheet lies on sand at \`bed\`, in a point's own time
/// \`tau\`: nothing before the wave lands or past its tongue's tip.
fn sheetDepth(n: f32, tau: f32, bed: f32, shelter: f32) -> f32 {
  let landed = crestOf(n);
  let since = tau - landed;
  let launch = sqrt(2.0 * SEA_GRAVITY * swashReach(landed, shelter));
  let up = max(bed, 0.0) / BEACH_SLOPE;
  let thin =
    launch - 0.5 * SEA_GRAVITY * BEACH_SLOPE * since - up / max(since, 1e-3);
  if (since <= 0.0 || thin <= 0.0) {
    return 0.0;
  }
  return
    SHEET_THICK
      / (9.0 * SEA_GRAVITY)
      * thin
      * thin
      * smoothstep(0.0, SHEET_GATHERS, since)
      * exp(min(bed, 0.0) / 0.25);
}

/// The sea's slow surface where the bed stands at \`bed\`, a point's \`run\`
/// metres along the swell's heading, keeping \`shelter\` of a wave and \`tongue\`
/// of that again in its swash, at \`seconds\`.
fn swellLevel(
  run: f32,
  bed: f32,
  shelter: f32,
  tongue: f32,
  seconds: f32,
) -> f32 {
  let tau = seconds - run * SWELL_PACE - shoreDelay(shoreDepth(bed));
  let thrown = shelter * tongue;
  let n = floor(turnsAt(tau));
  let sheet =
    max(sheetDepth(n, tau, bed, thrown), sheetDepth(n - 1.0, tau, bed, thrown));
  var low = bed - DRY_UNDER * smoothstep(0.0, 0.05, bed);
  if (bed < 0.0) {
    low = surfLevel(tau, bed, shelter);
  }
  if (sheet <= 0.0) {
    return low;
  }
  var top = max(bed, 0.0) + sheet;
  if (bed < 0.0) {
    top -= SHEET_SINKS * (1.0 - smoothstep(0.0, SHEET_SINKS_UNDER, sheet));
  }
  return mix(low, shoreOver(low, top), smoothstep(-SHEET_REACHES, -0.1, bed));
}
`,n.R,a.f,r.f,s.f,o.U);e.s(["f",0,i],748618),e.i(530434);let l=(0,t.K)("outside/shore-wetness-numbers",`
const WAVES_BACK = ${(0,t.W)(6)};
const NEVER_WET = ${(0,t.W)(1e3)};
const DRY_SECONDS = ${(0,t.W)(28)};
const FILM_FROM = ${(0,t.W)(.4)};
const FILM_TO = ${(0,t.W)(5)};
`),c=(0,t.K)("nature/shared/shore/wetness",`
/// Seconds since a swash sheet last lay on sand \`bed\` metres over the still
/// sea, at a point whose own time is \`tau\` and whose shore keeps \`shelter\` of
/// a wave: 0 while one lies there, \`NEVER_WET\` where none of the last waves
/// reached.
fn drySince(tau: f32, bed: f32, shelter: f32) -> f32 {
  if (bed <= 0.0) {
    return 0.0;
  }
  let n = floor(turnsAt(tau));
  var dry = NEVER_WET;
  for (var back = 0.0; back < WAVES_BACK; back += 1.0) {
    let landed = crestOf(n - back);
    let since = tau - landed;
    let reach = swashReach(landed, shelter);
    // The sheet's tip passes the point going up and again coming down.
    let span = 2.0 * SEA_GRAVITY * (reach - bed);
    if (span > 0.0) {
      let launch = sqrt(2.0 * SEA_GRAVITY * reach);
      let comes = (launch - sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      let leaves = (launch + sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      if (since >= comes) {
        dry = min(dry, max(since - leaves, 0.0));
      }
    }
  }
  return dry;
}

/// How damp sand is \`dry\` seconds after the water left it, 1 soaked.
fn dampAfter(dry: f32) -> f32 {
  return exp(-dry / DRY_SECONDS);
}

/// How much of a film of water still stands on it, 1 a mirror.
fn filmAfter(dry: f32) -> f32 {
  return 1.0 - smoothstep(FILM_FROM, FILM_TO, dry);
}
`,l,a.f,s.f,i,o.U);e.s(["f",0,c],570029),e.s([],650727)},317683,675131,e=>{"use strict";e.i(530434);var t=e.i(555249),n=e.i(334461),r=e.i(789137),s=e.i(393592);let a=[[4.5,3,.07],[10,6,.1],[21,12,.12]],o=s.F.struct({longer:s.F.uniform(0,1),start:s.F.uniform(0,1)}),i=(0,r.D)(n.y),l=(0,s.P)(s.F.struct({short:o,middle:o,long:o}),e=>i(`island/sea/cusps/${e}`)),c=[l.short,l.middle,l.long].map(({longer:e,start:t},n)=>{let[r=1,s=0,o=0]=a[n]??[];return[1/(r+s*e),o,t]});e.s(["$",0,c,"O",0,e=>c.reduce((t,[r,s,a])=>t+s*Math.sin(n.o*(r*e+a)),1)],675131);let f=(0,t.K)("outside/shore-cusped",`
fn cusped(across: f32) -> f32 {
  return 1.0
    + ${c.map(([e,r,s])=>`${(0,t.W)(r)} * sin(${(0,t.W)(n.o)} * (${(0,t.W)(e)} * across + ${(0,t.W)(s)}))`).join("\n    + ")};
}
`);e.s(["f",0,f],317683)},702239,257349,e=>{"use strict";var t=e.i(10012),n=e.i(334461);e.i(530434);var r=e.i(555249);let s=1/12,a=Math.sqrt(30/n.w)/s,o=[.8,1.15],i=(0,r.K)("outside/water-level-numbers",`
const SWELL_FEELS = ${(0,r.W)(30)};
const BEACH_SLOPE = ${(0,r.W)(s)};
const SHORE_SHALLOWEST = ${(0,r.W)(.3)};
const SHORE_LAG = ${(0,r.W)(a)};
const SHORE_FACING_REACH = ${(0,r.W)(4)};
const SHORE_LEE = ${(0,r.W)(.3)};
const SHOALS_FROM = ${(0,r.W)(4.55)};
const SURF_SHARE = ${(0,r.W)(.62)};
const BREAKS_FROM = ${(0,r.W)(o[0])};
const BREAKS_TO = ${(0,r.W)(o[1])};
const RUNUP_SHARE = ${(0,r.W)(.55)};
const SHEET_THICK = ${(0,r.W)(1.5)};
const SHEET_GATHERS = ${(0,r.W)(.5)};
const SHEET_REACHES = ${(0,r.W)(.6)};
const SHEET_SINKS = ${(0,r.W)(.1)};
const SHEET_SINKS_UNDER = ${(0,r.W)(.01)};
const DRY_UNDER = ${(0,r.W)(.03)};
const SHORE_ROUND = ${(0,r.W)(.012)};
`);e.s(["$",0,s,"f",0,o,"x",0,.03,"W",0,.55,"c",0,.5,"Y",0,.6,"P",0,.1,"Q",0,.01,"E",0,1.5,"Z",0,4.55,"w",0,4,"u",0,a,"L",0,.3,"U",0,i,"m",0,.012,"n",0,.3,"H",0,.62,"a",0,30],257349);let l=e=>Math.max(-e,0)+.3;function c(e){let t=Math.sqrt(Math.min(e/30,1));return a*(1-t)*(1-t)}let f=(e,t)=>e*Math.max(1,(4.55/l(t))**.25);function h(e,r,a,o){let i=(0,n.Z)(e),l=r-i,c=Math.sqrt(2*n.w*(.55*n.$*o*(0,n.x)(i))),f=Math.max(a,0)/s,h=c-.5*n.w*s*l-f/Math.max(l,.001);return l<=0||h<=0?0:1.5*h*h/(9*n.w)*(0,t.j)(0,.5,l)*Math.exp(Math.min(a,0)/.25)}e.s(["V",0,e=>(0,t.h)(.3,1,(0,t.j)(-.6,.7,e)),"k",0,c,"W",0,l,"m",0,function(e,t,r){var s;let o=a*(1-Math.sqrt(Math.min((s=l(r))/30,1)))/Math.sqrt(30*s),i=1/n.O;return(i+o*e)/Math.sqrt(i*i+2*i*o*e+o*o*t*t)},"i",0,function(e,r,s,a,i){let u,d,p,w,m,E,b=i-e/n.O-c(l(r)),S=s*a,v=Math.floor((0,n.N)(b)),_=Math.max(h(v,b,r,S),h(v-1,b,r,S)),g=r<0?(d=f(u=.5*n.$*s*(0,n.x)(b),r)/Math.max(-(.31*r),1e-4),p=.31*Math.max(-r,0),w=Math.min(f(u,r),p),E=(m=(0,n.N)(b))-Math.floor(m),w*(0,t.h)((0,n.e)(E,.75*Math.min(d,1)),(0,n.H)(E),(0,t.j)(o[0],o[1],d))):r-.03*(0,t.j)(0,.05,r);if(_<=0)return g;let A=Math.max(r,0)+_-(r<0?.1*(1-(0,t.j)(0,.01,_)):0);return(0,t.h)(g,.5*(g+A+Math.sqrt((g-A)*(g-A)+144e-6)),(0,t.j)(-.6,-.1,r))}],702239)},464455,e=>{"use strict";e.i(334461),e.i(386004),e.i(969716),e.s([])},386004,687944,969716,e=>{"use strict";e.i(530434);var t=e.i(555249),n=e.i(334461);let r=(0,t.K)("outside/swell-course",`
const SWELL_RUNS = ${(0,t.E)(n.p)};
const SWELL_RUNS_X = ${(0,t.W)(n.p[0])};
const SWELL_RUNS_Z = ${(0,t.W)(n.p[1])};
/// Seconds the open swell takes over a metre.
const SWELL_PACE = ${(0,t.W)(1/n.O)};
`);e.s(["f",0,r],386004);let s=(0,t.K)("outside/swell-numbers",`
const SEA_GRAVITY = ${(0,t.W)(n.w)};
const SWELL_HEIGHT = ${(0,t.W)(n.$)};
const HOUR_SECONDS = ${(0,t.W)(n.Y)};
const RADIANS_A_TURN = ${(0,t.W)(n.o)};
const WAVES = ${(0,t.W)(n.a)};
const PERIOD = ${(0,t.W)(n.B)};
const BORE_FACE = ${(0,t.W)(n.n)};
const BORE_FACE_SPAN = ${(0,t.W)(1-n.n)};
const BORE_FALL = ${(0,t.W)(n.j)};
const BORE_MEAN = ${(0,t.W)(n.M)};
`);e.s(["f",0,s],687944);let a=(0,t.K)("nature/shared/swell/swell-train",`
/// How many crests have passed a point whose own time is \`tau\` seconds.
fn turnsAt(tau: f32) -> f32 {
  return WAVES * tau / HOUR_SECONDS + swellDrift(tau);
}

/// The moment, in a point's own time, that crest \`n\` passes it.
fn crestOf(n: f32) -> f32 {
  var tau = n * PERIOD;
  for (var i = 0; i < 5; i++) {
    tau = (n - swellDrift(tau)) * PERIOD;
  }
  return tau;
}

/// A wave that has felt the bottom, at \`phase\` turns after its crest: crests
/// sharpened and troughs flattened by \`sharp\` in [0, 1), the height from crest
/// to trough staying 2 (Abreu et al. 2010, skewed with no asymmetry).
fn peaked(phase: f32, sharp: f32) -> f32 {
  let blunt = sqrt(1.0 - sharp * sharp);
  let swing = cos(RADIANS_A_TURN * phase);
  return blunt * (swing - sharp / (1.0 + blunt)) / (1.0 - sharp * swing);
}

/// A broken wave at \`phase\` turns after its front passed: highest just behind
/// the front, falling away, then the next front's steep face.
fn bore(phase: f32) -> f32 {
  let face = clamp((phase - BORE_FACE) / BORE_FACE_SPAN, 0.0, 1.0);
  let rise = face * face * (3.0 - 2.0 * face);
  let fall = exp(-BORE_FALL * phase);
  return 2.1 * (fall + (1.0 - fall) * rise - BORE_MEAN);
}
`,n.R,s);e.s(["f",0,a],969716)},7705,56269,981761,e=>{"use strict";var t=e.i(555249);e.i(530434);let n=[.42,.063,.022],r=[.0035,.0048,.0062],s=n.map((e,t)=>e+(r[t]??0)/.0183),a=(0,t.K)("sea/water-optics",`
const ABSORB = ${(0,t.E)(n)};
const BACKSCATTER = ${(0,t.E)(r)};
const ATTENUATE = ${(0,t.E)(s)};
`);e.s(["f",0,a],56269);let o=(0,t.K)("nature/shared/water/water-light",`
/// What water returns of light meeting it head on.
const HEAD_ON = 0.0204;
/// What the water's body shows an eye inside it, of the light falling on it.
const DROWNED = vec3f(0.035, 0.13, 0.15);

/// What water reflects of light meeting it at \`cosine\`.
fn fresnel(cosine: f32) -> f32 {
  let away = 1.0 - clamp(cosine, 0.0, 1.0);
  let fifth = away * away * away * away * away;
  return HEAD_ON + (1.0 - HEAD_ON) * fifth;
}

/// What water \`depth\` metres deep keeps of light crossing it, per channel,
/// scattered light that goes on the same way counted in.
fn kept(depth: f32) -> vec3f {
  return exp(-ABSORB * max(depth, 0.0));
}
`,a);e.s(["f",0,o],981761),e.s([],7705)},10012,e=>{"use strict";let t=e=>Math.min(1,Math.max(0,e)),n=(e,n,r)=>t((e-n)/(r-n)),r=e=>{let n=t(e);return n*n*(3-2*n)};e.s(["Y",0,t,"h",0,(e,t,n)=>e+(t-e)*n,"C",0,n,"k",0,r,"j",0,(e,t,s)=>r(n(s,e,t))])}]);