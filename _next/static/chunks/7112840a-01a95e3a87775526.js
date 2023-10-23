"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2016],{19:function(e,t,n){n.d(t,{$q:function(){return lV},AK:function(){return l5},Ab:function(){return l6},B$:function(){return oy},Bt:function(){return l8},Cf:function(){return ol},EK:function(){return O},ET:function(){return lW},Eo:function(){return ov},F8:function(){return oB},Fc:function(){return ok},GL:function(){return lY},IO:function(){return lc},IX:function(){return oS},Ix:function(){return oR},JU:function(){return ow},Jj:function(){return oP},K9:function(){return E},Ky:function(){return z},L$:function(){return oL},Lx:function(){return lT},Lz:function(){return oq},Me:function(){return eZ},Mx:function(){return oF},PL:function(){return lK},PU:function(){return l0},Pb:function(){return oV},QT:function(){return lP},ST:function(){return oC},TF:function(){return oM},TQ:function(){return lb},UQ:function(){return lz},Ub:function(){return p},W:function(){return lL},WA:function(){return S},Wi:function(){return oi},Wu:function(){return lS},Xb:function(){return K},Xk:function(){return lB},Xo:function(){return lg},ar:function(){return ld},at:function(){return od},b9:function(){return ly},cf:function(){return lH},e0:function(){return lI},fH:function(){return oN},hJ:function(){return op},i3:function(){return l4},iE:function(){return oI},kl:function(){return lU},l7:function(){return e7},my:function(){return of},nP:function(){return l9},oe:function(){return lj},pl:function(){return l$},qK:function(){return lO},qY:function(){return o_},r7:function(){return lQ},sc:function(){return lX},u7:function(){return lA},vh:function(){return lw},vr:function(){return l3},xU:function(){return lM},yq:function(){return v},zN:function(){return lG}});var r,i,s=n(25816),a=n(8463),o=n(53333),l=n(74444),u=n(46640),c=n(83454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="9.21.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw w(t),Error(t)}function E(e,t){e||b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new x;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new x,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new x)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||b(),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||b(),new d(e)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class k{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||b(),this.T=e.token,new F(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function V(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new O(0,0))}static max(){return new P(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends q{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends q{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new S(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(U.fromString(e))}static fromName(e){return new z(U.fromString(e).popFirst(5))}static empty(){return new z(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new U(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function Q(e){return e.fields.filter(e=>2!==e.kind)}G.UNKNOWN_ID=-1;class j{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,Y.min())}}function H(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r));return new Y(i,z.empty(),t)}function X(e){return new Y(e.readTime,e.key,-1)}class Y{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Y(P.min(),z.empty(),-1)}static max(){return new Y(P.max(),z.empty(),-1)}}function J(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=z.comparator(e.documentKey,t.documentKey))?n:V(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==Z)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new x,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new ea(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.R.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new el(t)}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===ei.S((0,l.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),eu(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,l.hl)())return!1;if(ei.C())return!0;let e=(0,l.z$)(),t=ei.S(e),n=ei.N(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new S(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.V.$(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.v,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(y("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return eu(this.L.delete())}}class ea extends S{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class el{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eu(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),eu(this.store.add(e))}get(e){return eu(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),eu(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),eu(this.store.count())}j(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.W(r,t)}Z(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{let t=eh(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eu(e){return new en((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=eh(e.target.error);n(t)}})}let ec=!1;function eh(e){let t=ei.S((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){eo(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.et(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=X(t);J(r,n)>0&&(n=r)}),new Y(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function eg(e){return null==e}function ep(e){return 0===e&&1/e==-1/0}function ey(e){return"number"==typeof e&&Number.isInteger(e)&&!ep(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e){var t,n;let r="";for(let t=0;t<e.length;t++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(t),r);return r+"\x01\x01"}function ev(e){let t=e.length;if(t>=2||b(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||b(),U.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:b()}s=t+2}return new U(r)}em.ct=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI=["userId","batchId"],eb={},eE=["prefixPath","collectionGroup","readTime","documentId"],eT=["prefixPath","collectionGroup","documentId"],eS=["collectionGroup","readTime","prefixPath","documentId"],ex=["canonicalId","targetId"],e_=["targetId","path"],eD=["path","targetId"],eC=["collectionId","parent"],eN=["indexId","uid"],eA=["uid","sequenceNumber"],ek=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eF=["indexId","uid","orderedDocumentKey"],eR=["userId","collectionPath","documentId"],eM=["userId","collectionPath","largestBatchId"],eV=["userId","collectionGroup","largestBatchId"],eL=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eO=[...eL,"documentOverlays"],eP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eq=[...eP,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends ee{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function eB(e,t){return ei.M(e.at,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eK(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ez(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eG(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,t){this.comparator=e,this.root=t||ej.EMPTY}insert(e,t){return new e$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ej.BLACK,null,null))}remove(e){return new e$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ej.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eQ(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eQ(this.root,e,this.comparator,!1)}getReverseIterator(){return new eQ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eQ(this.root,e,this.comparator,!0)}}class eQ{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ej{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ej.RED,this.left=null!=r?r:ej.EMPTY,this.right=null!=i?i:ej.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ej(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ej.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ej.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ej.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ej.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();let e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ej.EMPTY=null,ej.RED=!0,ej.BLACK=!1,ej.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ej(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.comparator=e,this.data=new e$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eH(this.data.getIterator())}getIteratorFrom(e){return new eH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eW)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eW(this.comparator);return t.data=e,t}}class eH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eX(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new eY([])}unionWith(e){let t=new eW(K.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eY(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eJ("Invalid base64 string: "+e):e}}(e);return new e0(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new e0(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e0.EMPTY_BYTE_STRING=new e0("");let e1=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e2(e){if(e||b(),"string"==typeof e){let t=0,n=e1.exec(e);if(n||b(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:e4(e.seconds),nanos:e4(e.nanos)}}function e4(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e5(e){return"string"==typeof e?e0.fromBase64String(e):e0.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e3(e){let t=e.mapValue.fields.__previous_value__;return e8(t)?e3(t):t}function e6(e){let t=e2(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class e7{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new e7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof e7&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tt={nullValue:"NULL_VALUE"};function tn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e8(e)?4:tg(e)?9007199254740991:10:b()}function tr(e,t){if(e===t)return!0;let n=tn(e);if(n!==tn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e6(e).isEqual(e6(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e2(e.timestampValue),r=e2(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e5(e.bytesValue).isEqual(e5(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e4(e.geoPointValue.latitude)===e4(t.geoPointValue.latitude)&&e4(e.geoPointValue.longitude)===e4(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e4(e.integerValue)===e4(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e4(e.doubleValue),r=e4(t.doubleValue);return n===r?ep(n)===ep(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],tr);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(eK(n)!==eK(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tr(n[e],r[e])))return!1;return!0}(e,t);default:return b()}}function ti(e,t){return void 0!==(e.values||[]).find(e=>tr(e,t))}function ts(e,t){if(e===t)return 0;let n=tn(e),r=tn(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e4(e.integerValue||e.doubleValue),r=e4(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ta(e.timestampValue,t.timestampValue);case 4:return ta(e6(e),e6(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e5(e),r=e5(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=V(n[e],r[e]);if(0!==t)return t}return V(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=V(e4(e.latitude),e4(t.latitude));return 0!==n?n:V(e4(e.longitude),e4(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ts(n[e],r[e]);if(t)return t}return V(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===te.mapValue&&t===te.mapValue)return 0;if(e===te.mapValue)return 1;if(t===te.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=V(r[e],s[e]);if(0!==t)return t;let a=ts(n[r[e]],i[s[e]]);if(0!==a)return a}return V(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function ta(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return V(e,t);let n=e2(e),r=e2(t),i=V(n.seconds,r.seconds);return 0!==i?i:V(n.nanos,r.nanos)}function to(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e2(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e5(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=to(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${to(e.fields[i])}`;return n+"}"}(e.mapValue):b()}function tl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tu(e){return!!e&&"integerValue"in e}function tc(e){return!!e&&"arrayValue"in e}function th(e){return!!e&&"nullValue"in e}function td(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tf(e){return!!e&&"mapValue"in e}function tm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ez(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tm(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tp(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ty(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.value=e}static empty(){return new tw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tf(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tm(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tm(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ez(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new tw(tm(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tv(e,0,P.min(),P.min(),P.min(),tw.empty(),0)}static newFoundDocument(e,t,n,r){return new tv(e,1,t,P.min(),n,r,0)}static newNoDocument(e,t){return new tv(e,2,t,P.min(),P.min(),tw.empty(),0)}static newUnknownDocument(e,t){return new tv(e,3,t,P.min(),P.min(),tw.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(P.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tw.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tw.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tv&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tv(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.position=e,this.inclusive=t}}function tb(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?z.comparator(z.fromName(a.referenceValue),n.key):ts(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tE(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tr(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{}class tx extends tS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tF(e,t,n):"array-contains"===t?new tL(e,n):"in"===t?new tO(e,n):"not-in"===t?new tP(e,n):"array-contains-any"===t?new tq(e,n):new tx(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tR(e,n):new tM(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ts(t,this.value)):null!==t&&tn(this.value)===tn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class t_ extends tS{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new t_(e,t)}matches(e){return tD(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function tD(e){return"and"===e.op}function tC(e){return"or"===e.op}function tN(e){return tA(e)&&tD(e)}function tA(e){for(let t of e.filters)if(t instanceof t_)return!1;return!0}function tk(e,t){let n=e.filters.concat(t);return t_.create(n,e.op)}class tF extends tx{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){let t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class tR extends tx{constructor(e,t){super(e,"in",t),this.keys=tV("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tM extends tx{constructor(e,t){super(e,"not-in",t),this.keys=tV("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tV(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>z.fromName(e.referenceValue))}class tL extends tx{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tc(t)&&ti(t.arrayValue,this.value)}}class tO extends tx{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ti(this.value.arrayValue,t)}}class tP extends tx{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ti(this.value.arrayValue,t)}}class tq extends tx{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ti(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ft=null}}function tB(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tU(e,t,n,r,i,s,a)}function tK(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof tx)return t.field.canonicalString()+t.op.toString()+to(t.value);if(tN(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eg(t.limit)||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>to(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>to(e)).join(",")),t.ft=e}return t.ft}function tz(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tx?n instanceof tx&&t.op===n.op&&t.field.isEqual(n.field)&&tr(t.value,n.value):t instanceof t_?n instanceof t_&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void b()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tE(e.startAt,t.startAt)&&tE(e.endAt,t.endAt)}function tG(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function t$(e,t){return e.filters.filter(e=>e instanceof tx&&e.field.isEqual(t))}function tQ(e,t,n){let r=tt,i=!0;for(let n of t$(e,t)){let e=tt,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?tt:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tl(e7.empty(),z.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:b();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=tt}0>tp({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tp({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tj(e,t,n){let r=te,i=!0;for(let n of t$(e,t)){let e=te,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tl(e7.empty(),z.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?te:b(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=te}ty({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];ty({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function tH(e){return new tW(e)}function tX(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tY(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tJ(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function tZ(e){return null!==e.collectionGroup}function t0(e){let t=e;if(null===t.dt){t.dt=[];let e=tJ(t),n=tY(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new tT(e)),t.dt.push(new tT(K.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new tT(K.keyField(),e))}}}return t.dt}function t1(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=tB(t.path,t.collectionGroup,t0(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of t0(t)){let t="desc"===n.dir?"asc":"desc";e.push(new tT(n.field,t))}let n=t.endAt?new tI(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tI(t.startAt.position,t.startAt.inclusive):null;t._t=tB(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t._t}function t2(e,t){t.getFirstInequalityField(),tJ(e);let n=e.filters.concat([t]);return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t4(e,t,n){return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t5(e,t){return tz(t1(e),t1(t))&&e.limitType===t.limitType}function t8(e){return`${tK(t1(e))}|lt:${e.limitType}`}function t3(e){var t;let n;return`Query(target=${n=(t=t1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tx?`${t.field.canonicalString()} ${t.op} ${to(t.value)}`:t instanceof t_?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>to(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>to(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t6(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tb(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t0(e),t))&&(!e.endAt||!!function(e,t,n){let r=tb(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t0(e),t))}function t9(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function t7(e){return(t,n)=>{let r=!1;for(let i of t0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?z.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ts(r,i):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ez(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eG(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=new e$(z.comparator),nn=new e$(z.comparator);function nr(...e){let t=nn;for(let n of e)t=t.insert(n.key,n);return t}function ni(e){let t=nn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ns(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}let na=new e$(z.comparator),no=new eW(z.comparator);function nl(...e){let t=no;for(let n of e)t=t.add(n);return t}let nu=new eW(V);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ep(t)?"-0":t}}function nh(e){return{integerValue:""+e}}function nd(e,t){return ey(t)?nh(t):nc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._=void 0}}function nm(e,t){return e instanceof nI?tu(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ng extends nf{}class np extends nf{constructor(e){super(),this.elements=e}}function ny(e,t){let n=nE(t);for(let t of e.elements)n.some(e=>tr(e,t))||n.push(t);return{arrayValue:{values:n}}}class nw extends nf{constructor(e){super(),this.elements=e}}function nv(e,t){let n=nE(t);for(let t of e.elements)n=n.filter(e=>!tr(e,t));return{arrayValue:{values:n}}}class nI extends nf{constructor(e,t){super(),this.serializer=e,this.wt=t}}function nb(e){return e4(e.integerValue||e.doubleValue)}function nE(e){return tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.field=e,this.transform=t}}class nS{constructor(e,t){this.version=e,this.transformResults=t}}class nx{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nx}static exists(e){return new nx(void 0,e)}static updateTime(e){return new nx(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function n_(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nD{}function nC(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nL(e.key,nx.none()):new nk(e.key,e.data,nx.none());{let n=e.data,r=tw.empty(),i=new eW(K.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nF(e.key,r,new eY(i.toArray()),nx.none())}}function nN(e,t,n,r){return e instanceof nk?function(e,t,n,r){if(!n_(e.precondition,t))return n;let i=e.value.clone(),s=nV(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nF?function(e,t,n,r){if(!n_(e.precondition,t))return n;let i=nV(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nR(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):n_(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nA(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof np&&r instanceof np||n instanceof nw&&r instanceof nw?L(n.elements,r.elements,tr):n instanceof nI&&r instanceof nI?tr(n.wt,r.wt):n instanceof ng&&r instanceof ng)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nk extends nD{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nF extends nD{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nR(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nM(e,t,n){var r;let i=new Map;e.length===n.length||b();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof np?ny(o,l):o instanceof nw?nv(o,l):r))}return i}function nV(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ng?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e8(t)&&(t=e3(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof np?ny(e,s):e instanceof nw?nv(e,s):function(e,t){let n=nm(e,t),r=nb(n)+nb(e.wt);return tu(n)&&tu(e.wt)?nh(r):nc(e.serializer,r)}(e,s))}return r}class nL extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nk?function(e,t,n){let r=e.value.clone(),i=nM(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nF?function(e,t,n){if(!n_(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nM(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nR(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nN(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nN(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ns();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=nC(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nl())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>nA(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>nA(e,t))}}class nq{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||b();let r=na,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nq(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.count=e,this.unchangedNames=t}}function nK(e){switch(e){default:return b();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function nz(e){if(void 0===e)return w("GRPC error has no .code"),T.UNKNOWN;switch(e){case r.OK:return T.OK;case r.CANCELLED:return T.CANCELLED;case r.UNKNOWN:return T.UNKNOWN;case r.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case r.INTERNAL:return T.INTERNAL;case r.UNAVAILABLE:return T.UNAVAILABLE;case r.UNAUTHENTICATED:return T.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case r.NOT_FOUND:return T.NOT_FOUND;case r.ALREADY_EXISTS:return T.ALREADY_EXISTS;case r.PERMISSION_DENIED:return T.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case r.ABORTED:return T.ABORTED;case r.OUT_OF_RANGE:return T.OUT_OF_RANGE;case r.UNIMPLEMENTED:return T.UNIMPLEMENTED;case r.DATA_LOSS:return T.DATA_LOSS;default:return b()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return n$}static getOrCreateInstance(){return null===n$&&(n$=new nG),n$}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let n$=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nQ(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nj=new u.z8([4294967295,4294967295],0);function nW(e){let t=nQ().encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function nH(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class nX{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nY(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=u.z8.fromNumber(this.yt)}Tt(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(nj)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;let t=nW(e),[n,r]=nH(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(n,r,e);if(!this.Et(t))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new nX(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.yt)return;let t=nW(e),[n,r]=nH(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(n,r,e);this.Rt(t)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nZ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nJ(P.min(),r,new e$(V),nt,nl())}}class nZ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nZ(n,t,nl(),nl(),nl())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t,n,r){this.vt=e,this.removedTargetIds=t,this.key=n,this.Pt=r}}class n1{constructor(e,t){this.targetId=e,this.bt=t}}class n2{constructor(e,t,n=e0.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n4{constructor(){this.Vt=0,this.St=n3(),this.Dt=e0.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=nl(),t=nl(),n=nl();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}}),new nZ(this.Dt,this.Ct,e,t,n)}$t(){this.xt=!1,this.St=n3()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class n5{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=nt,this.jt=n8(),this.zt=new e$(V)}Wt(e){for(let t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(let t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,t=>{let n=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&n.Mt(e.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(e.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(n.Ut(),n.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),n.Mt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach((e,n)=>{this.Zt(n)&&t(n)})}ee(e){var t;let n=e.targetId,r=e.bt.count,i=this.ne(n);if(i){let s=i.target;if(tG(s)){if(0===r){let e=new z(s.path);this.Jt(n,e,tv.newNoDocument(e,P.min()))}else 1===r||b()}else{let i=this.se(n);if(i!==r){let r=this.ie(e,i);0!==r&&(this.te(n),this.zt=this.zt.insert(n,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null===(t=nG.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,a,o,l;let u={localCacheCount:t,existenceFilterCount:n.count},c=n.unchangedNames;return c&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==c?void 0:c.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(s=null===(i=null==c?void 0:c.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==c?void 0:c.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),u}(r,i,e.bt))}}}}ie(e,t){let n,r;let{unchangedNames:i,count:s}=e.bt;if(!i||!i.bits)return 1;let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=i;try{n=e5(a).toUint8Array()}catch(e){if(e instanceof eJ)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{r=new nX(n,o,l)}catch(e){return v(e instanceof nY?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===r.yt?1:s!==t-this.re(e.targetId,r)?2:0}re(e,t){let n=this.Kt.getRemoteKeysForTarget(e),r=0;return n.forEach(n=>{let i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.At(s)||(this.Jt(e,n,null),r++)}),r}ue(e){let t=new Map;this.Gt.forEach((n,r)=>{let i=this.ne(r);if(i){if(n.current&&tG(i.target)){let t=new z(i.target.path);null!==this.Qt.get(t)||this.ce(r,t)||this.Jt(r,t,tv.newNoDocument(t,e))}n.kt&&(t.set(r,n.Ot()),n.$t())}});let n=nl();this.jt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qt.forEach((t,n)=>n.setReadTime(e));let r=new nJ(e,t,this.zt,this.Qt,n);return this.Qt=nt,this.jt=n8(),this.zt=new e$(V),r}Ht(e,t){if(!this.Zt(e))return;let n=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,n),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,n){if(!this.Zt(e))return;let r=this.Xt(e);this.ce(e,t)?r.Ft(t,1):r.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),n&&(this.Qt=this.Qt.insert(t,n))}removeTarget(e){this.Gt.delete(e)}se(e){let t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new n4,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new eW(V),this.jt=this.jt.insert(e,t)),t}Zt(e){let t=null!==this.ne(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}ne(e){let t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new n4),this.Kt.getRemoteKeysForTarget(e).forEach(t=>{this.Jt(e,t,null)})}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function n8(){return new e$(z.comparator)}function n3(){return new e$(z.comparator)}let n6={asc:"ASCENDING",desc:"DESCENDING"},n9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n7={and:"AND",or:"OR"};class re{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rt(e,t){return e.useProto3Json||eg(t)?t:{value:t}}function rn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ri(e){return e||b(),P.fromTimestamp(function(e){let t=e2(e);return new O(t.seconds,t.nanos)}(e))}function rs(e,t){return new U(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ra(e){let t=U.fromString(e);return rE(t)||b(),t}function ro(e,t){return rs(e.databaseId,t.path)}function rl(e,t){let n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(rd(n))}function ru(e,t){return rs(e.databaseId,t)}function rc(e){let t=ra(e);return 4===t.length?U.emptyPath():rd(t)}function rh(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rd(e){return e.length>4&&"documents"===e.get(4)||b(),e.popFirst(5)}function rf(e,t,n){return{name:ro(e,t),fields:n.value.mapValue.fields}}function rm(e,t,n){let r=rl(e,t.name),i=ri(t.updateTime),s=t.createTime?ri(t.createTime):P.min(),a=new tw({mapValue:{fields:t.fields}}),o=tv.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rg(e,t){var n;let r;if(t instanceof nk)r={update:rf(e,t.key,t.value)};else if(t instanceof nL)r={delete:ro(e,t.key)};else if(t instanceof nF)r={update:rf(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return b();r={verify:ro(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ng)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof np)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nI)return{fieldPath:t.field.canonicalString(),increment:n.wt};throw b()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:rn(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b()),r}function rp(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nx.updateTime(ri(n.updateTime)):void 0!==n.exists?nx.exists(n.exists):nx.none():nx.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||b(),n=new ng;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new np(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new nw(e)}else"increment"in t?n=new nI(e,t.increment):b();let r=K.fromServerFormat(t.fieldPath);return new nT(r,n)})(e,t)):[];if(t.update){t.update.name;let n=rl(e,t.update.name),s=new tw({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new eY(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new nF(n,s,e,r,i)}return new nk(n,s,r,i)}if(t.delete){let n=rl(e,t.delete);return new nL(n,r)}if(t.verify){let n=rl(e,t.verify);return new nO(n,r)}return b()}function ry(e,t){return{documents:[ru(e,t.path)]}}function rw(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=ru(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=ru(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tx?function(e){if("=="===e.op){if(td(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NAN"}};if(th(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(td(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NAN"}};if(th(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rI(e.field),op:n9[e.op],value:e.value}}}(t):t instanceof t_?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n7[t.op],filters:n}}}(t):b()}(t_.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rI(e.field),direction:n6[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=rt(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function rv(e){var t,n,r,i,s,a,o,l;let u,c=rc(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||b();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let m=[];h.where&&(m=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rb(e.unaryFilter.field);return tx.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rb(e.unaryFilter.field);return tx.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rb(e.unaryFilter.field);return tx.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rb(e.unaryFilter.field);return tx.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):void 0!==t.fieldFilter?tx.create(rb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?t_.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op)):b()}(e);return t instanceof t_&&tN(t)?t.getFilters():[t]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new tT(rb(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;h.limit&&(p=eg(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new tI(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new tI(n,t)}(h.endAt)),n=c,r=f,i=g,s=m,a=p,o=y,l=w,new tW(n,r,i,s,a,"F",o,l)}function rI(e){return{fieldPath:e.canonicalString()}}function rb(e){return K.fromServerFormat(e.fieldPath)}function rE(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,n,r,i=P.min(),s=P.min(),a=e0.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rT(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.le=e}}function rx(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:r_(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:ro(i=e.le,t.key),fields:t.data.value.mapValue.fields,updateTime:rn(i,t.version.toTimestamp()),createTime:rn(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rD(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:rD(t.version)}}return r}function r_(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rD(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rC(e){let t=new O(e.seconds,e.nanoseconds);return P.fromTimestamp(t)}function rN(e,t){let n=(t.baseMutations||[]).map(t=>rp(e.le,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rp(e.le,t)),i=O.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,n,r)}function rA(e){var t;let n;let r=rC(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rC(e.lastLimboFreeSnapshotVersion):P.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||b(),n=t1(tH(rc(t.documents[0])))):n=t1(rv(e.query)),new rT(n,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,i,e0.fromBase64String(e.resumeToken))}function rk(e,t){let n;let r=rD(t.snapshotVersion),i=rD(t.lastLimboFreeSnapshotVersion);n=tG(t.target)?ry(e.le,t.target):rw(e.le,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tK(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rF(e){let t=rv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t4(t,t.limit,"L"):t}function rR(e,t){return new nU(t.largestBatchId,rp(e.le,t.overlayMutation))}function rM(e,t){let n=t.path.lastSegment();return[e,ew(t.path.popLast()),n]}function rV(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rD(r.readTime),documentKey:ew(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{getBundleMetadata(e,t){return rO(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rC(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rO(e).put({bundleId:t.id,createTime:rD(ri(t.createTime)),version:t.version})}getNamedQuery(e,t){return rP(e).get(t).next(e=>{if(e)return{name:e.name,query:rF(e.bundledQuery),readTime:rC(e.readTime)}})}saveNamedQuery(e,t){return rP(e).put({name:t.name,readTime:rD(ri(t.readTime)),bundledQuery:t.bundledQuery})}}function rO(e){return eB(e,"bundles")}function rP(e){return eB(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t){this.serializer=e,this.userId=t}static fe(e,t){let n=t.uid||"";return new rq(e,n)}getOverlay(e,t){return rU(e).get(rM(this.userId,t)).next(e=>e?rR(this.serializer,e):null)}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nU(t,i);r.push(this.de(e,s))}),en.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(ew(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rU(e).J("collectionPathOverlayIndex",r))}),en.waitFor(i)}getOverlaysForCollection(e,t,n){let r=ns(),i=ew(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rU(e).j("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rR(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=ns(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rU(e).X({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rR(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}de(e,t){return rU(e).put(function(e,t,n){let[r,i,s]=rM(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rg(e.le,n.mutation)}}(this.serializer,this.userId,t))}}function rU(e){return eB(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(e4(e.integerValue));else if("doubleValue"in e){let n=e4(e.doubleValue);isNaN(n)?this.ge(t,13):(this.ge(t,15),ep(n)?t.ye(0):t.ye(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ge(t,20),"string"==typeof n?t.pe(n):(t.pe(`${n.seconds||""}`),t.ye(n.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(e5(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ge(t,45),t.ye(n.latitude||0),t.ye(n.longitude||0)}else"mapValue"in e?tg(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):b()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){let n=e.fields||{};for(let e of(this.ge(t,55),Object.keys(n)))this.Ie(e,t),this.we(n[e],t)}ve(e,t){let n=e.values||[];for(let e of(this.ge(t,50),n))this.we(e,t)}Ae(e,t){this.ge(t,37),z.fromName(e).path.forEach(e=>{this.ge(t,60),this.Pe(e,t)})}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}function rK(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rB.be=new rB;class rz{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Se(n.value),n=t.next();this.De()}Ce(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.xe(n.value),n=t.next();this.Ne()}ke(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Se(e);else if(e<2048)this.Se(960|e>>>6),this.Se(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Se(480|e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e);else{let e=t.codePointAt(0);this.Se(240|e>>>18),this.Se(128|63&e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e)}}this.De()}Me(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.xe(e);else if(e<2048)this.xe(960|e>>>6),this.xe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.xe(480|e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e);else{let e=t.codePointAt(0);this.xe(240|e>>>18),this.xe(128|63&e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e)}}this.Ne()}Oe(e){let t=this.$e(e),n=rK(t);this.Fe(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Be(e){let t=this.$e(e),n=rK(t);this.Fe(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Se(e){let t=255&e;0===t?(this.qe(0),this.qe(255)):255===t?(this.qe(255),this.qe(0)):this.qe(t)}xe(e){let t=255&e;0===t?(this.Ke(0),this.Ke(255)):255===t?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rG{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class r${constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class rQ{constructor(){this.Qe=new rz,this.je=new rG(this.Qe),this.ze=new r$(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return 0===e?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}He(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rj(this.indexId,this.documentKey,this.arrayValue,n)}}function rW(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rH(e.arrayValue,t.arrayValue))?n:0!==(n=rH(e.directionalValue,t.directionalValue))?n:z.comparator(e.documentKey,t.documentKey)}function rH(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rX{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[],e.filters)){let e=t;e.isInequality()?this.Xe=e:this.Ye.push(e)}}Ze(e){e.collectionGroup===this.collectionId||b();let t=$(e);if(void 0!==t&&!this.tn(t))return!1;let n=Q(e),r=0,i=0;for(;r<n.length&&this.tn(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Xe){let e=n[r];if(!this.en(this.Xe,e)||!this.nn(this.Je[i++],e))return!1;++r}for(;r<n.length;++r){let e=n[r];if(i>=this.Je.length||!this.nn(this.Je[i++],e))return!1}return!0}tn(e){for(let t of this.Ye)if(this.en(t,e))return!0;return!1}en(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}nn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rY(e){return e instanceof tx}function rJ(e){return e instanceof t_&&tN(e)}function rZ(e){return rY(e)||rJ(e)||function(e){if(e instanceof t_&&tC(e)){for(let t of e.getFilters())if(!rY(t)&&!rJ(t))return!1;return!0}return!1}(e)}function r0(e,t){return e instanceof tx||e instanceof t_||b(),t instanceof tx||t instanceof t_||b(),r2(e instanceof tx?t instanceof tx?t_.create([e,t],"and"):r1(e,t):t instanceof tx?r1(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||b(),tD(e)&&tD(t))return tk(e,t.getFilters());let n=tC(e)?e:t,r=tC(e)?t:e,i=n.filters.map(e=>r0(e,r));return t_.create(i,"or")}(e,t))}function r1(e,t){if(tD(t))return tk(t,e.getFilters());{let n=t.filters.map(t=>r0(e,t));return t_.create(n,"or")}}function r2(e){if(e instanceof tx||e instanceof t_||b(),e instanceof tx)return e;let t=e.getFilters();if(1===t.length)return r2(t[0]);if(tA(e))return e;let n=t.map(e=>r2(e)),r=[];return n.forEach(t=>{t instanceof tx?r.push(t):t instanceof t_&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:t_.create(r,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this.sn=new r5}addToCollectionParentIndex(e,t){return this.sn.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(Y.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(Y.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class r5{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eW(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eW(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r8=new Uint8Array(0);class r3{constructor(e,t){this.user=e,this.databaseId=t,this.rn=new r5,this.on=new ne(e=>tK(e),(e,t)=>tz(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.rn.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.rn.add(t)});let i={collectionId:n,parent:ew(r)};return r6(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return r6(e).j(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ev(r.parent))}return n})}addFieldIndex(e,t){let n=r7(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=ie(e);return i.next(e=>{n.put(rV(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r7(e),r=ie(e),i=r9(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=r9(e),r=!0,i=new Map;return en.forEach(this.un(t),t=>this.cn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nl(),r=[];return en.forEach(i,(i,s)=>{y("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tK(t)}`);let a=function(e,t){let n=$(t);if(void 0===n)return null;for(let t of t$(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of Q(t))for(let t of t$(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of Q(t)){let t=0===i.kind?tQ(e,i.fieldPath,e.startAt):tj(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of Q(t)){let t=0===i.kind?tj(e,i.fieldPath,e.endAt):tQ(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),c=this.an(i,s,l),h=this.an(i,s,u),d=this.hn(i,s,o),f=this.ln(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return en.forEach(f,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=z.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}un(e){let t=this.on.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tx||t instanceof t_||b(),t instanceof tx)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=t_.create(n,t.op);return rZ(r=r2(r))?r:(r instanceof t_||b(),tD(r)||b(),r.filters.length>1||b(),r.filters.reduce((e,t)=>r0(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var n,r;if(t instanceof tx||t instanceof t_||b(),t instanceof tx){if(t instanceof tO){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tx.create(t.field,"==",e)))||[];return t_.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return t_.create(i,t.op)}(e));return rZ(t)||b(),rY(t)||rJ(t)?[t]:t.getFilters()})(t_.create(e.filters,"and")).map(t=>tB(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,t)),t}ln(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.fn(t[c/l]):r8,h=this.dn(e,o,n[c%l],r),d=this._n(e,o,i[c%l],s),f=a.map(t=>this.dn(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}dn(e,t,n,r){let i=new rj(e,z.empty(),t,n);return r?i:i.He()}_n(e,t,n,r){let i=new rj(e,z.empty(),t,n);return r?i.He():i}cn(e,t){let n=new rX(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.Ze(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.un(t);return en.forEach(r,t=>this.cn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eW(K.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}wn(e,t){let n=new rQ;for(let r of Q(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.We(r.kind);rB.be._e(e,i)}return n.Ge()}fn(e){let t=new rQ;return rB.be._e(e,t.We(0)),t.Ge()}mn(e,t){let n=new rQ;return rB.be._e(tl(this.databaseId,t),n.We(function(e){let t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ge()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new rQ);let i=0;for(let s of Q(e)){let e=n[i++];for(let n of r)if(this.gn(t,s.fieldPath)&&tc(e))r=this.yn(r,s,e);else{let t=n.We(s.kind);rB.be._e(e,t)}}return this.pn(r)}an(e,t,n){return this.hn(e,t,n.position)}pn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ge();return t}yn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rQ;r.seed(n.Ge()),rB.be._e(e,r.We(t.kind)),i.push(r)}return i}gn(e,t){return!!e.filters.find(e=>e instanceof tx&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r7(e),r=ie(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new Y(rC(t.readTime),new z(ev(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new j(K.fromServerFormat(e),t));return new G(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:V(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r7(e),i=ie(e);return this.In(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rV(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this.Tn(e,t,n).next(t=>{let i=this.En(r,n);return t.isEqual(i)?en.resolve():this.An(e,r,n,t,i)}))))})}Rn(e,t,n,r){return r9(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return r9(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}Tn(e,t,n){let r=r9(e),i=new eW(rW);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(e,r)=>{i=i.add(new rj(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}En(e,t){let n=new eW(rW),r=this.wn(t,e);if(null==r)return n;let i=$(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tc(s))for(let i of s.arrayValue.values||[])n=n.add(new rj(t.indexId,e.key,this.fn(i),r))}else n=n.add(new rj(t.indexId,e.key,r8,r));return n}An(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eX(s),l=eX(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eX(a)):t?(i(o),o=eX(s)):(o=eX(s),l=eX(a))}}(r,i,rW,r=>{s.push(this.Rn(e,t,n,r))},r=>{s.push(this.vn(e,t,n,r))}),en.waitFor(s)}In(e){let t=1;return ie(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rW(e,t)).filter((e,t,n)=>!t||0!==rW(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rW(i,e),s=rW(i,t);if(0===n)r[0]=e.He();else if(n>0&&s<0)r.push(i),r.push(i.He());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Pn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r8,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r8,[]];i.push(IDBKeyRange.bound(t,n))}return i}Pn(e,t){return rW(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(it)}getMinOffset(e,t){return en.mapArray(this.un(t),t=>this.cn(e,t).next(e=>e||b())).next(it)}}function r6(e){return eB(e,"collectionParents")}function r9(e){return eB(e,"indexEntries")}function r7(e){return eB(e,"indexConfiguration")}function ie(e){return eB(e,"indexState")}function it(e){0!==e.length||b();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>J(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Y(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ii{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ii(e,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.X({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||b()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,ew(c),h]);s.push(i.delete(r)),u.push(e.key)}return en.waitFor(s).next(()=>u)}function ia(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(41943040,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);class io{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static fe(e,t,n,r){""!==e.uid||b();let i=e.isAuthenticated()?e.uid:"";return new io(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).X({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=ic(e),s=iu(e);return s.add({}).next(a=>{"number"==typeof a||b();let o=new nP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rg(e.le,t)),i=n.mutations.map(t=>rg(e.le,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ew(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,eb))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.bn[a]=o.keys()}),en.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return iu(e).get(t).next(e=>e?(e.userId===this.userId||b(),rN(this.serializer,e)):null)}Vn(e,t){return this.bn[t]?en.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.bn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return iu(e).X({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||b(),i=rN(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return iu(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).j("userMutationsIndex",t).next(e=>e.map(e=>rN(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ew(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return ic(e).X({range:r},(n,r,s)=>{let[a,o,l]=n,u=ev(o);if(a===this.userId&&t.path.isEqual(u))return iu(e).get(l).next(e=>{if(!e)throw b();e.userId===this.userId||b(),i.push(rN(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V),r=[];return t.forEach(t=>{let i=[this.userId,ew(t.path)],s=IDBKeyRange.lowerBound(i),a=ic(e).X({range:s},(e,r,i)=>{let[s,a,o]=e,l=ev(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.Sn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ew(n)],s=IDBKeyRange.lowerBound(i),a=new eW(V);return ic(e).X({range:s},(e,t,i)=>{let[s,o,l]=e,u=ev(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Sn(e,a))}Sn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(iu(e).get(t).next(e=>{if(null===e)throw b();e.userId===this.userId||b(),n.push(rN(this.serializer,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return is(e.at,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Dn(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return ic(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ev(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||b()})})}containsKey(e,t){return il(e,this.userId,t)}Cn(e){return ih(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function il(e,t,n){let r=[t,ew(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return ic(e).X({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function iu(e){return eB(e,"mutations")}function ic(e){return eB(e,"documentMutations")}function ih(e){return eB(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new id(0)}static kn(){return new id(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Mn(e).next(t=>{let n=new id(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(e=>P.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Mn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.$n(e,t).next(()=>this.Mn(e).next(n=>(n.targetCount+=1,this.Fn(t,n),this.On(e,n))))}updateTargetData(e,t){return this.$n(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ig(e).delete(t.targetId)).next(()=>this.Mn(e)).next(t=>(t.targetCount>0||b(),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,n){let r=0,i=[];return ig(e).X((s,a)=>{let o=rA(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ig(e).X((e,n)=>{let r=rA(n);t(r)})}Mn(e){return ip(e).get("targetGlobalKey").next(e=>(null!==e||b(),e))}On(e,t){return ip(e).put("targetGlobalKey",t)}$n(e,t){return ig(e).put(rk(this.serializer,t))}Fn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Mn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tK(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return ig(e).X({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rA(n);tz(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=iy(e);return t.forEach(t=>{let s=ew(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=iy(e);return en.forEach(t,t=>{let i=ew(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=iy(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=iy(e),i=nl();return r.X({range:n,Y:!0},(e,t,n)=>{let r=ev(e[1]),s=new z(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=ew(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return iy(e).X({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}he(e,t){return ig(e).get(t).next(e=>e?rA(e):null)}}function ig(e){return eB(e,"targets")}function ip(e){return eB(e,"targetGlobal")}function iy(e){return eB(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw([e,t],[n,r]){let i=V(e,n);return 0===i?V(t,r):i}class iv{constructor(e){this.Bn=e,this.buffer=new eW(iw),this.Ln=0}qn(){return++this.Ln}Un(e){let t=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iw(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Kn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return null!==this.Kn}Gn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.Gn(3e5)})}}class ib{constructor(e,t){this.Qn=e,this.params=t}calculateTargetCount(e,t){return this.Qn.jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em.ct);let n=new iv(t);return this.Qn.forEachTarget(e,e=>n.Un(e.sequenceNumber)).next(()=>this.Qn.zn(e,e=>n.Un(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Qn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Qn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(ir)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ir):this.Wn(e,t))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,t){let n,r,i,s,a,l,u;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(l-a)+"ms\n"+`	Removed ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-c}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.db=e,this.garbageCollector=new ib(this,t)}jn(e){let t=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Hn(e){let t=0;return this.zn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}zn(e,t){return this.Jn(e,(e,n)=>t(n))}addReference(e,t,n){return iT(e,n)}removeReference(e,t,n){return iT(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return iT(e,t)}Yn(e,t){let n;return n=!1,ih(e).Z(r=>il(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Jn(e,(s,a)=>{if(a<=t){let t=this.Yn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,P.min()),iy(e).delete([0,ew(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return iT(e,t)}Jn(e,t){let n=iy(e),r,i=em.ct;return n.X({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em.ct&&t(new z(ev(r)),i),i=a,r=s):i=em.ct}).next(()=>{i!==em.ct&&t(new z(ev(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iT(e,t){var n;return iy(e).put((n=e.currentSequenceNumber,{targetId:0,path:ew(t.path),sequenceNumber:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.changes=new ne(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tv.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iC(e).put(n)}removeEntry(e,t,n){return iC(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],r_(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Xn(e,n)))}getEntry(e,t){let n=tv.newInvalidDocument(t);return iC(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(iN(t))},(e,r)=>{n=this.Zn(t,r)}).next(()=>n)}ts(e,t){let n={size:0,document:tv.newInvalidDocument(t)};return iC(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(iN(t))},(e,r)=>{n={document:this.Zn(t,r),size:ia(r)}}).next(()=>n)}getEntries(e,t){let n=nt;return this.es(e,t,(e,t)=>{let r=this.Zn(e,t);n=n.insert(e,r)}).next(()=>n)}ns(e,t){let n=nt,r=new e$(z.comparator);return this.es(e,t,(e,t)=>{let i=this.Zn(e,t);n=n.insert(e,i),r=r.insert(e,ia(t))}).next(()=>({documents:n,ss:r}))}es(e,t,n){if(t.isEmpty())return en.resolve();let r=new eW(ik);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iN(r.first()),iN(r.last())),s=r.getIterator(),a=s.getNext();return iC(e).X({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=z.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>ik(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.G(iN(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),r_(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iC(e).j(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=nt;for(let i of e){let e=this.Zn(z.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t6(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=nt,s=iA(t,n),a=iA(t,Y.max());return iC(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.Zn(z.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new i_(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iD(e).get("remoteDocumentGlobalKey").next(e=>(e||b(),e))}Xn(e,t){return iD(e).put("remoteDocumentGlobalKey",t)}Zn(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rm(e.le,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=z.fromSegments(t.noDocument.path),r=rC(t.noDocument.readTime);n=tv.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{let e=z.fromSegments(t.unknownDocument.path),r=rC(t.unknownDocument.version);n=tv.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new O(e[0],e[1]);return P.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(P.min())))return e}return tv.newInvalidDocument(e)}}class i_ extends iS{constructor(e,t){super(),this.rs=e,this.trackRemovals=t,this.os=new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.os.get(i);if(t.push(this.rs.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rx(this.rs.serializer,s);r=r.add(i.path.popLast());let l=ia(o);n+=l-a.size,t.push(this.rs.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rx(this.rs.serializer,s.convertToNoDocument(P.min()));t.push(this.rs.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.rs.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.rs.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this.rs.ts(e,t).next(e=>(this.os.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.rs.ns(e,t).next(({documents:e,ss:t})=>(t.forEach((t,n)=>{this.os.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iD(e){return eB(e,"remoteDocumentGlobal")}function iC(e){return eB(e,"remoteDocumentsV14")}function iN(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iA(e,t){let n=t.documentKey.path.toArray();return[e,r_(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ik(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=V(n[e],r[e]))return i;return(i=V(n.length,r.length))||(i=V(n[n.length-2],r[r.length-2]))||V(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nN(n.mutation,e,eY.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nl()){let r=ns();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ns();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nl()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=nt,s=ns(),a=ns();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nF)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nN(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,eY.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iF(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ns(),r=new e$((e,t)=>e-t),i=nl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eY.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=ns();l.forEach(e=>{if(!i.has(e)){let r=nC(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tZ(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(ns()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nl())).next(e=>({batchId:a,changes:ni(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=nr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=nr();return this.indexManager.getCollectionParents(e,r).next(s=>en.forEach(s,s=>{var a;let o=(a=s.child(r),new tW(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tv.newInvalidDocument(r)))});let n=nr();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&nN(s.mutation,i,eY.empty(),O.now()),t6(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return en.resolve(this.us.get(t))}saveBundleMetadata(e,t){return this.us.set(t.id,{id:t.id,version:t.version,createTime:ri(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,{name:t.name,query:rF(t.bundledQuery),readTime:ri(t.readTime)}),en.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){this.overlays=new e$(z.comparator),this.hs=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.de(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hs.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hs.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=ns(),i=t.length+1,s=new z(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new e$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ns(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ns(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}de(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nU(t,n));let i=this.hs.get(t);void 0===i&&(i=nl(),this.hs.set(t,i)),this.hs.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.ls=new eW(iO.fs),this.ds=new eW(iO._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){let n=new iO(e,t);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gs(new iO(e,t))}ys(e,t){e.forEach(e=>this.removeReference(e,t))}ps(e){let t=new z(new U([])),n=new iO(t,e),r=new iO(t,e+1),i=[];return this.ds.forEachInRange([n,r],e=>{this.gs(e),i.push(e.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){let t=new z(new U([])),n=new iO(t,e),r=new iO(t,e+1),i=nl();return this.ds.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iO(e,0),n=this.ls.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iO{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return z.comparator(e.key,t.key)||V(e.Es,t.Es)}static _s(e,t){return V(e.Es,t.Es)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new eW(iO.fs)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Rs=this.Rs.add(new iO(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ps(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iO(t,0),r=new iO(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{let t=this.vs(e.Es);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V);return t.forEach(e=>{let t=new iO(e,0),r=new iO(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.Es)})}),en.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;z.isDocumentKey(i)||(i=i.child(""));let s=new iO(new z(i),0),a=new eW(V);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Es)),!0)},s),en.resolve(this.bs(a))}bs(e){let t=[];return e.forEach(e=>{let n=this.vs(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Vs(t.batchId,"removed")||b(),this.mutationQueue.shift();let n=this.Rs;return en.forEach(t.mutations,r=>{let i=new iO(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Dn(e){}containsKey(e,t){let n=new iO(t,0),r=this.Rs.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){let t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e){this.Ss=e,this.docs=new e$(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tv.newInvalidDocument(t))}getEntries(e,t){let n=nt;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tv.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nt,s=t.path,a=new z(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=J(X(a),n)||(r.has(a.key)||t6(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b()}Ds(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iU(this)}getSize(e){return en.resolve(this.size)}}class iU extends iS{constructor(e){super(),this.rs=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.rs.addEntry(e,r)):this.rs.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.persistence=e,this.Cs=new ne(e=>tK(e),tz),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.xs=0,this.Ns=new iL,this.targetCount=0,this.ks=id.Nn()}forEachTarget(e,t){return this.Cs.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.xs&&(this.xs=t),en.resolve()}$n(e){this.Cs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ks=new id(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.$n(t),en.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Cs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.Cs.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.Ns.ws(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.Ns.ys(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ns.Ts(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.Ns.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(e,t){var n;this.Ms={},this.overlays={},this.Os=new em(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new iB(this),this.indexManager=new r4,this.remoteDocumentCache=(n=e=>this.referenceDelegate.Bs(e),new iq(n)),this.serializer=new rS(t),this.Ls=new iM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ms[e.toKey()];return n||(n=new iP(t,this.referenceDelegate),this.Ms[e.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iz(this.Os.next());return this.referenceDelegate.qs(),n(r).next(e=>this.referenceDelegate.Us(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ks(e,t){return en.or(Object.values(this.Ms).map(n=>()=>n.containsKey(e,t)))}}class iz extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iG{constructor(e){this.persistence=e,this.Gs=new iL,this.Qs=null}static js(e){return new iG(e)}get zs(){if(this.Qs)return this.Qs;throw b()}addReference(e,t,n){return this.Gs.addReference(n,t),this.zs.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.Gs.removeReference(n,t),this.zs.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),en.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach(e=>this.zs.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}qs(){this.Qs=new Set}Us(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.zs,n=>{let r=z.fromPath(n);return this.Ws(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.Qs=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ws(e,t).next(e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())})}Bs(e){return 0}Ws(e,t){return en.or([()=>en.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e){this.serializer=e}$(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0}),e.createObjectStore("documentMutations"),iQ(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iQ(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").j().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Js(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Ys(i)))),n<7&&r>=7&&(s=s.next(()=>this.Xs(i))),n<8&&r>=8&&(s=s.next(()=>this.Zs(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ti(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eR});t.createIndex("collectionPathOverlayIndex",eM,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eV,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eE});t.createIndex("documentKeyIndex",eT),t.createIndex("collectionGroupIndex",eS)})(e)).next(()=>this.ei(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.ni(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eN}).createIndex("sequenceNumberIndex",eA,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ek}).createIndex("documentKeyIndex",eF,{unique:!1})})),s}Ys(e){let t=0;return e.store("remoteDocuments").X((e,n)=>{t+=ia(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Js(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||b();let r=rN(this.serializer,n);return is(e,t.userId,r).next(()=>{})}))}))}Xs(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.X((n,i)=>{let s=new U(n),a=[0,ew(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:ew(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}Zs(e,t){e.createObjectStore("collectionParents",{keyPath:eC});let n=t.store("collectionParents"),r=new r5,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ew(r)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>{let n=new U(e);return i(n.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([e,t,n],r)=>{let s=ev(t);return i(s.popLast())}))}ti(e){let t=e.store("targets");return t.X((e,n)=>{let r=rA(n),i=rk(this.serializer,r);return t.put(i)})}ei(e,t){let n=t.store("remoteDocuments"),r=[];return n.X((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new z(U.fromString(n.document.name).popFirst(5)):n.noDocument?z.fromSegments(n.noDocument.path):n.unknownDocument?z.fromSegments(n.unknownDocument.path):b()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}ni(e,t){var n;let r=t.store("mutations"),i=(n=this.serializer,new ix(n)),s=new iK(iG.js,this.serializer.le);return r.j().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nl();rN(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let r=new d(n),a=rq.fe(this.serializer,r),o=s.getIndexManager(r),l=io.fe(r,this.serializer,o,s.referenceDelegate);return new iR(i,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new eU(t,em.ct),e).next()})})}}function iQ(e){e.createObjectStore("targetDocuments",{keyPath:e_}).createIndex("documentTargetsIndex",eD,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ex,{unique:!0}),e.createObjectStore("targetGlobal")}let ij="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iW{constructor(e,t,n,r,i,s,a,o,l,u,c=15){var h;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=a,this.ii=l,this.ri=u,this.oi=c,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=e=>Promise.resolve(),!iW.D())throw new S(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iE(this,r),this.fi=t+"main",this.serializer=new rS(o),this.di=new ei(this.fi,this.oi,new i$(this.serializer)),this.Fs=new im(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(h=this.serializer,new ix(h)),this.Ls=new rL,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,ij);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new em(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iX(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(t=>this.isPrimary&&!t?this.Ei(e).next(()=>!1):!!t&&this.Ai(e).next(()=>!0))).catch(e=>{if(eo(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return iH(e).get("owner").next(e=>en.resolve(this.Ri(e)))}vi(e){return iX(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eB(e,"clientMetadata");return t.j().next(e=>{let n=this.Vi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._i)for(let t of e)this._i.removeItem(this.Si(t.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?en.resolve(!0):iH(e).get("owner").next(t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,ij);return!1}}return!(!this.networkEnabled||!this.inForeground)||iX(e).j().next(e=>void 0===this.Vi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eU(e,em.ct);return this.Ei(t).next(()=>this.vi(t))}),this.di.close(),this.ki()}Vi(e,t){return e.filter(e=>this.bi(e.updateTimeMs,t)&&!this.Di(e.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>iX(e).j().next(e=>this.Vi(e,18e5).map(e=>e.clientId)))}get started(){return this.$s}getMutationQueue(e,t){return io.fe(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r3(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return rq.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.oi)?eq:14===r?eP:13===r?eP:12===r?eO:11===r?eL:void b();return this.di.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new eU(r,this.Os?this.Os.next():em.ct),"readwrite-primary"===t?this.Ii(i).next(e=>!!e||this.Ti(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new S(T.FAILED_PRECONDITION,Z);return n(i)}).next(e=>this.Ai(i).next(()=>e)):this.Oi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Oi(e){return iH(e).get("owner").next(e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Di(e.ownerId)&&!this.Ri(e)&&!(this.ri||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(T.FAILED_PRECONDITION,ij)})}Ai(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iH(e).put("owner",t)}static D(){return ei.D()}Ei(e){let t=iH(e);return t.get("owner").next(e=>this.Ri(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}bi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Ci();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var t;try{let n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Si(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return w("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch(e){}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iH(e){return eB(e,"owner")}function iX(e){return eB(e,"clientMetadata")}function iY(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Fi=r}static Bi(e,t){let n=nl(),r=nl();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iJ(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ui(e,t).next(i=>i||this.Ki(e,t,r,n)).next(n=>n||this.Gi(e,t))}Ui(e,t){if(tX(t))return en.resolve(null);let n=t1(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t1(t=t4(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nl(...r);return this.qi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Qi(t,r);return this.ji(t,s,i,n.readTime)?this.Ui(e,t4(t,null,"F")):this.zi(e,s,t,n)}))})))}Ki(e,t,n,r){return tX(t)||r.isEqual(P.min())?this.Gi(e,t):this.qi.getDocuments(e,n).next(i=>{let s=this.Qi(t,i);return this.ji(t,s,n,r)?this.Gi(e,t):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t3(t)),this.zi(e,s,t,H(r,-1)))})}Qi(e,t){let n=new eW(t7(e));return t.forEach((t,r)=>{t6(e,r)&&(n=n.add(r))}),n}ji(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,t){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",t3(t)),this.qi.getDocumentsMatchingQuery(e,t,Y.min())}zi(e,t,n,r){return this.qi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,n,r){this.persistence=e,this.Wi=t,this.serializer=r,this.Hi=new e$(V),this.Ji=new ne(e=>tK(e),tz),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(n)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Hi))}}async function i1(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Zi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nl();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({tr:e,removedBatchIds:i,addedBatchIds:s}))})})}function i2(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Fs.getLastRemoteSnapshotVersion(t))}function i4(e,t,n){let r=nl(),i=nl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nt;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{er:r,nr:i}})}function i5(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Fs.getTargetData(e,t).next(i=>i?(r=i,en.resolve(r)):n.Fs.allocateTargetId(e).next(i=>(r=new rT(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Fs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Hi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(e.targetId,e),n.Ji.set(t,e.targetId)),e})}async function i8(e,t,n){let r=e,i=r.Hi.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!eo(e))throw e;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function i3(e,t,n){let r=P.min(),i=nl();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Ji.get(n);return void 0!==r?en.resolve(e.Hi.get(r)):e.Fs.getTargetData(t,n)})(e,s,t1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Fs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Wi.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:nl())).next(n=>(i7(e,t9(t),n),{documents:n,sr:i})))}function i6(e,t){let n=e.Fs,r=e.Hi.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.he(e,t).next(e=>e?e.target:null))}function i9(e,t){let n=e.Yi.get(t)||P.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.Xi.getAllFromCollectionGroup(r,t,H(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(i7(e,t,n),n))}function i7(e,t,n){let r=e.Yi.get(t)||P.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Yi.set(t,r)}async function se(e,t,n,r){let i=nl(),s=nt;for(let e of n){let n=t.ir(e.metadata.name);e.document&&(i=i.add(n));let r=t.rr(e);r.setReadTime(t.ur(e.metadata.readTime)),s=s.insert(n,r)}let a=e.Xi.newChangeBuffer({trackRemovals:!0}),o=await i5(e,t1(tH(U.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i4(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Fs.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Fs.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.er,n.nr)).next(()=>n.er)))}async function st(e,t,n=nl()){let r=await i5(e,t1(rF(t.bundledQuery))),i=e;return i.persistence.runTransaction("Save named query","readwrite",e=>{let s=ri(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ls.saveNamedQuery(e,t);let a=r.withResumeToken(e0.EMPTY_BYTE_STRING,s);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(e,a).next(()=>i.Fs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Fs.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(e,t))})}function sn(e,t){return`firestore_clients_${e}_${t}`}function sr(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function si(e,t){return`firestore_targets_${e}_${t}`}class ss{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static cr(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new S(r.error.code,r.error.message)),s?new ss(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ar(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sa{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static cr(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new S(n.error.code,n.error.message)),i?new sa(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ar(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class so{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cr(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nu;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ey(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new so(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sl{constructor(e,t){this.clientId=e,this.onlineState=t}static cr(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new sl(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class su{constructor(){this.activeTargetIds=nu}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sc{constructor(e,t,n,r,i){this.window=e,this.si=t,this.persistenceKey=n,this.dr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new e$(V),this.started=!1,this.gr=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.yr=sn(this.persistenceKey,this.dr),this.pr=`firestore_sequence_number_${this.persistenceKey}`,this.mr=this.mr.insert(this.dr,new su),this.Ir=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Tr=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Er=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ar=`firestore_online_state_${this.persistenceKey}`,this.Rr=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Mi();for(let t of e){if(t===this.dr)continue;let e=this.getItem(sn(this.persistenceKey,t));if(e){let n=so.cr(t,e);n&&(this.mr=this.mr.insert(n.clientId,n))}}this.vr();let t=this.storage.getItem(this.Ar);if(t){let e=this.Pr(t);e&&this.br(e)}for(let e of this.gr)this.wr(e);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let t=!1;return this.mr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,t,n){this.Sr(e,t,n),this.Dr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(si(this.persistenceKey,e));if(n){let r=sa.cr(e,n);r&&(t=r.state)}}return this.Cr.hr(e),this.vr(),t}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(si(this.persistenceKey,e))}updateQueryState(e,t,n){this.Nr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Dr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.yr)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Ir.test(e.key)){if(null==e.newValue){let t=this.Or(e.key);return this.$r(t,null)}{let t=this.Fr(e.key,e.newValue);if(t)return this.$r(t.clientId,t)}}else if(this.Tr.test(e.key)){if(null!==e.newValue){let t=this.Br(e.key,e.newValue);if(t)return this.Lr(t)}}else if(this.Er.test(e.key)){if(null!==e.newValue){let t=this.qr(e.key,e.newValue);if(t)return this.Ur(t)}}else if(e.key===this.Ar){if(null!==e.newValue){let t=this.Pr(e.newValue);if(t)return this.br(t)}}else if(e.key===this.pr){let t=function(e){let t=em.ct;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||b(),t=n}catch(e){w("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em.ct&&this.sequenceNumberHandler(t)}else if(e.key===this.Rr){let t=this.Kr(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Gr(e)))}}}else this.gr.push(e)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,t,n){let r=new ss(this.currentUser,e,t,n),i=sr(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ar())}Dr(e){let t=sr(this.persistenceKey,this.currentUser,e);this.removeItem(t)}kr(e){let t={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(t))}Nr(e,t,n){let r=si(this.persistenceKey,e),i=new sa(e,t,n);this.setItem(r,i.ar())}Mr(e){let t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){let t=this.Ir.exec(e);return t?t[1]:null}Fr(e,t){let n=this.Or(e);return so.cr(n,t)}Br(e,t){let n=this.Tr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ss.cr(new d(i),r,t)}qr(e,t){let n=this.Er.exec(e),r=Number(n[1]);return sa.cr(r,t)}Pr(e){return sl.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,t){let n=t?this.mr.insert(e,t):this.mr.remove(e),r=this.Vr(this.mr),i=this.Vr(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.zr(s,a).then(()=>{this.mr=n})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let t=nu;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sh{constructor(){this.Wr=new su,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,n){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new su,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.no))e(0)}eo(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.no))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sm=null;function sg(){return null===sm?sm=268435456+Math.round(2147483648*Math.random()):sm++,"0x"+sm.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw="WebChannelConnection";class sv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,n,r,i){let s=sg(),a=this.Io(e,t);y("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.To(o,r,i),this.Eo(e,a,o,n).then(t=>(y("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw v("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Ao(e,t,n,r,i,s){return this.po(e,t,n,r,i)}To(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Io(e,t){let n=sp[e];return`${this.wo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,n,r){let i=sg();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();y(sw,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:y(sw,`RPC '${e}' ${i} timed out`),a(new S(T.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(y(sw,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(t.status);a(new S(e,t.message))}else a(new S(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new S(T.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y(sw,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);y(sw,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Ro(e,t,n){let i=sg(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this.To(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=s.join("");y(sw,`Creating RPC '${e}' stream ${i}: ${c}`,l);let h=a.createWebChannel(c,l),d=!1,f=!1,m=new sy({io:t=>{f?y(sw,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(y(sw,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),y(sw,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},ro:()=>h.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(h,u.ii.EventType.OPEN,()=>{f||y(sw,`RPC '${e}' stream ${i} transport opened.`)}),g(h,u.ii.EventType.CLOSE,()=>{f||(f=!0,y(sw,`RPC '${e}' stream ${i} transport closed`),m.fo())}),g(h,u.ii.EventType.ERROR,t=>{f||(f=!0,v(sw,`RPC '${e}' stream ${i} transport errored:`,t),m.fo(new S(T.UNAVAILABLE,"The operation could not be completed")))}),g(h,u.ii.EventType.MESSAGE,t=>{var n;if(!f){let s=t.data[0];s||b();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){y(sw,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nz(t)}(t),s=a.message;void 0===n&&(n=T.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),f=!0,m.fo(new S(n,s)),h.close()}else y(sw,`RPC '${e}' stream ${i} received:`,s),m._o(s)}}),g(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?y(sw,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&y(sw,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.lo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return"undefined"!=typeof window?window:null}function sb(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){return new re(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();let t=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,n,r,i,s,a,o){this.si=e,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new sT(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;let e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.$o===t&&this.Xo(e,n)},t=>{e(()=>{let e=new S(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)})})}Xo(e,t){let n=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo(()=>{n(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(e=>{n(()=>this.Zo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget(()=>this.$o===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sx extends sS{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:b(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||b(),e0.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||b(),e0.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?T.UNKNOWN:nz(e.code);return new S(t,e.message||"")}(l);n=new n2(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=rl(e,r.document.name),s=ri(r.document.updateTime),a=r.document.createTime?ri(r.document.createTime):P.min(),o=new tw({mapValue:{fields:r.document.fields}}),l=tv.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new n0(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=rl(e,r.document),s=r.readTime?ri(r.readTime):P.min(),a=tv.newNoDocument(i,s),o=r.removedTargetIds||[];n=new n0([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=rl(e,r.document),s=r.removedTargetIds||[];n=new n0([],s,i,null)}else{if(!("filter"in t))return b();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nB(r,i),a=e.targetId;n=new n1(a,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?ri(t.readTime):P.min()}(e);return this.listener.eu(t,n)}nu(e){let t={};t.database=rh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tG(r)?{documents:ry(e,r)}:{query:rw(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rr(e,t.resumeToken);let r=rt(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){n.readTime=rn(e,t.snapshotVersion.toTimestamp());let r=rt(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.zo(t)}su(e){let t={};t.database=rh(this.serializer),t.removeTarget=e,this.zo(t)}}class s_ extends sS{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||b(),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||b(),t.map(e=>{let t;return(t=e.updateTime?ri(e.updateTime):ri(n)).isEqual(P.min())&&(t=ri(n)),new nS(t,e.transformResults||[])})):[]),i=ri(e.commitTime);return this.listener.uu(i,r)}return e.writeResults&&0!==e.writeResults.length&&b(),this.iu=!0,this.listener.cu()}au(){let e={};e.database=rh(this.serializer),this.zo(e)}ou(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rg(this.serializer,e))};this.zo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}Ao(e,t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ao(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}terminate(){this.hu=!0}}class sC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(w(t),this.wu=!1):y("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(e=>{n.enqueueAndForget(async()=>{sP(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.Au.add(4),await sk(e),e.Pu.set("Unknown"),e.Au.delete(4),await sA(e)}(this))})}),this.Pu=new sC(n,r)}}async function sA(e){if(sP(e))for(let t of e.Ru)await t(!0)}async function sk(e){for(let t of e.Ru)await t(!1)}function sF(e,t){e.Eu.has(t.targetId)||(e.Eu.set(t.targetId,t),sO(e)?sL(e):sZ(e).Uo()&&sM(e,t))}function sR(e,t){let n=sZ(e);e.Eu.delete(t),n.Uo()&&sV(e,t),0===e.Eu.size&&(n.Uo()?n.Qo():sP(e)&&e.Pu.set("Unknown"))}function sM(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sZ(e).nu(t)}function sV(e,t){e.bu.Lt(t),sZ(e).su(t)}function sL(e){e.bu=new n5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),sZ(e).start(),e.Pu.mu()}function sO(e){return sP(e)&&!sZ(e).qo()&&e.Eu.size>0}function sP(e){return 0===e.Au.size}async function sq(e){e.Eu.forEach((t,n)=>{sM(e,t)})}async function sU(e,t){e.bu=void 0,sO(e)?(e.Pu.pu(t),sL(e)):e.Pu.set("Unknown")}async function sB(e,t,n){if(e.Pu.set("Online"),t instanceof n2&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Eu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Eu.delete(r),e.bu.removeTarget(r))}(e,t)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sK(e,n)}else if(t instanceof n0?e.bu.Wt(t):t instanceof n1?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(P.min()))try{let t=await i2(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.bu.ue(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Eu.get(r);i&&e.Eu.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Eu.get(t);if(!r)return;e.Eu.set(t,r.withResumeToken(e0.EMPTY_BYTE_STRING,r.snapshotVersion)),sV(e,t);let i=new rT(r.target,t,n,r.sequenceNumber);sM(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){y("RemoteStore","Failed to raise snapshot:",t),await sK(e,t)}}async function sK(e,t,n){if(!eo(t))throw t;e.Au.add(1),await sk(e),e.Pu.set("Offline"),n||(n=()=>i2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await sA(e)})}function sz(e,t){return t().catch(n=>sK(e,n,t))}async function sG(e){let t=s0(e),n=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;sP(e)&&e.Tu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Tu.length&&t.Qo();break}n=r.batchId,function(e,t){e.Tu.push(t);let n=s0(e);n.Uo()&&n.ru&&n.ou(t.mutations)}(e,r)}catch(t){await sK(e,t)}s$(e)&&sQ(e)}function s$(e){return sP(e)&&!s0(e).qo()&&e.Tu.length>0}function sQ(e){s0(e).start()}async function sj(e){s0(e).au()}async function sW(e){let t=s0(e);for(let n of e.Tu)t.ou(n.mutations)}async function sH(e,t,n){let r=e.Tu.shift(),i=nq.from(r,t,n);await sz(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sG(e)}async function sX(e,t){t&&s0(e).ru&&await async function(e,t){var n;if(nK(n=t.code)&&n!==T.ABORTED){let n=e.Tu.shift();s0(e).Go(),await sz(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sG(e)}}(e,t),s$(e)&&sQ(e)}async function sY(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sP(e);e.Au.add(3),await sk(e),n&&e.Pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Au.delete(3),await sA(e)}async function sJ(e,t){t?(e.Au.delete(2),await sA(e)):t||(e.Au.add(2),await sk(e),e.Pu.set("Unknown"))}function sZ(e){var t,n,r;return e.Vu||(e.Vu=(t=e.datastore,n=e.asyncQueue,r={oo:sq.bind(null,e),co:sU.bind(null,e),eu:sB.bind(null,e)},t.lu(),new sx(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Vu.Go(),sO(e)?sL(e):e.Pu.set("Unknown")):(await e.Vu.stop(),e.bu=void 0)})),e.Vu}function s0(e){var t,n,r;return e.Su||(e.Su=(t=e.datastore,n=e.asyncQueue,r={oo:sj.bind(null,e),co:sX.bind(null,e),cu:sW.bind(null,e),uu:sH.bind(null,e)},t.lu(),new s_(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Su.Go(),await sG(e)):(await e.Su.stop(),e.Tu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new s1(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s2(e,t){if(w("AsyncQueue",`${t}: ${e}`),eo(e))return new S(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=nr(),this.sortedSet=new e$(this.comparator)}static emptySet(e){return new s4(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s4)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s4;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(){this.Du=new e$(z.comparator)}track(e){let t=e.doc.key,n=this.Du.get(t);n?0!==e.type&&3===n.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==n.type?this.Du=this.Du.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Du=this.Du.remove(t):1===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):b():this.Du=this.Du.insert(t,e)}Cu(){let e=[];return this.Du.inorderTraversal((t,n)=>{e.push(n)}),e}}class s8{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s8(e,t,s4.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t5(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(){this.xu=void 0,this.listeners=[]}}class s6{constructor(){this.queries=new ne(e=>t8(e),t5),this.onlineState="Unknown",this.Nu=new Set}}async function s9(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new s3),r)try{i.xu=await e.onListen(n)}catch(n){let e=s2(n,`Initialization of query '${t3(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.ku(e.onlineState),i.xu&&t.Mu(i.xu)&&an(e)}async function s7(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function ae(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Mu(r)&&(n=!0);i.xu=r}}n&&an(e)}function at(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function an(e){e.Nu.forEach(e=>{e.next()})}class ar{constructor(e,t,n){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s8(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){return!e.fromCache||(!this.options.Uu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;let t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=s8.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.Ku=e,this.byteLength=t}Gu(){return"metadata"in this.Ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.serializer=e}ir(e){return rl(this.serializer,e)}rr(e){return e.metadata.exists?rm(this.serializer,e.document,!1):tv.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return ri(e)}}class aa{constructor(e,t,n){this.Qu=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ao(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++t;let n=U.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}zu(e){let t=new Map,n=new as(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.ir(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nl()).add(e);t.set(n,r)}}return t}async complete(){let e=await se(this.localStore,new as(this.serializer),this.documents,this.Qu.id),t=this.zu(this.documents);for(let e of this.queries)await st(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function ao(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.key=e}}class au{constructor(e){this.key=e}}class ac{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=nl(),this.mutatedKeys=nl(),this.Zu=t7(e),this.tc=new s4(this.Zu)}get ec(){return this.Ju}nc(e,t){let n=t?t.sc:new s5,r=t?t.tc:this.tc,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t6(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ic(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Zu(c,o)>0||l&&0>this.Zu(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tc:s,sc:n,ji:a,mutatedKeys:i}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;let i=e.sc.Cu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)})(e.type,t.type)||this.Zu(e.doc,t.doc)),this.rc(n);let s=t?this.oc():[],a=0===this.Xu.size&&this.current?1:0,o=a!==this.Yu;return(this.Yu=a,0!==i.length||o)?{snapshot:new s8(this.query,e.tc,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new s5,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(e=>this.Ju=this.Ju.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ju=this.Ju.delete(e)),this.current=e.current)}oc(){if(!this.current)return[];let e=this.Xu;this.Xu=nl(),this.tc.forEach(e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))});let t=[];return e.forEach(e=>{this.Xu.has(e)||t.push(new au(e))}),this.Xu.forEach(n=>{e.has(n)||t.push(new al(n))}),t}ac(e){this.Ju=e.sr,this.Xu=nl();let t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return s8.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class ah{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ad{constructor(e){this.key=e,this.lc=!1}}class af{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new ne(e=>t8(e),t5),this._c=new Map,this.wc=new Set,this.mc=new e$(z.comparator),this.gc=new Map,this.yc=new iL,this.Ic={},this.Tc=new Map,this.Ec=id.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function am(e,t){let n,r;let i=aK(e),s=i.dc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.hc();else{let e=await i5(i.localStore,t1(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await ag(i,t,n,"current"===s,e.resumeToken),i.isPrimaryClient&&sF(i.remoteStore,e)}return r}async function ag(e,t,n,r,i){e.Rc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.nc(n);i.ji&&(i=await i3(e.localStore,t.query,!1).then(({documents:e})=>t.view.nc(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return aC(e,t.targetId,a.uc),a.snapshot})(e,t,n,r);let s=await i3(e.localStore,t,!0),a=new ac(t,s.sr),o=a.nc(s.documents),l=nZ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aC(e,n,u.uc);let c=new ah(t,n,a);return e.dc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function ap(e,t){let n=e.dc.get(t),r=e._c.get(n.targetId);if(r.length>1)return e._c.set(n.targetId,r.filter(e=>!t5(e,t))),void e.dc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i8(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sR(e.remoteStore,n.targetId),a_(e,n.targetId)}).catch(et)):(a_(e,n.targetId),await i8(e.localStore,n.targetId,!0))}async function ay(e,t,n){let r=az(e);try{var i,s;let e;let a=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),nl());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nt,l=nl();return e.Xi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nm(r.transform,e||null);null!=i&&(null===n&&(n=tw.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nF(e.key,t,function e(t){let n=[];return ez(t.fields,(t,r)=>{let i=new K([t]);if(tf(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eY(n)}(t.value.mapValue),nx.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ni(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),i=r,s=a.batchId,(e=i.Ic[i.currentUser.toKey()])||(e=new e$(V)),e=e.insert(s,n),i.Ic[i.currentUser.toKey()]=e,await aA(r,a.changes),await sG(r.remoteStore)}catch(t){let e=s2(t,"Failed to persist write");n.reject(e)}}async function aw(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{let s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=i.get(o);if(!u)return;a.push(n.Fs.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Fs.addMatchingKeys(e,s.addedDocuments,o)));let c=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e0.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(n.Fs.updateTargetData(e,c))});let o=nt,l=nl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(i4(e,s,t.documentUpdates).next(e=>{o=e.er,l=e.nr})),!r.isEqual(P.min())){let t=n.Fs.getLastRemoteSnapshotVersion(e).next(t=>n.Fs.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return en.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(n.Hi=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.gc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||b(),t.addedDocuments.size>0?r.lc=!0:t.modifiedDocuments.size>0?r.lc||b():t.removedDocuments.size>0&&(r.lc||b(),r.lc=!1))}),await aA(e,n,t)}catch(e){await et(e)}}function av(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.dc.forEach((n,r)=>{let i=r.view.ku(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.ku(t)&&(r=!0)}),r&&an(n)}(r.eventManager,t),e.length&&r.fc.eu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function aI(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.gc.get(t),s=i&&i.key;if(s){let e=new e$(z.comparator);e=e.insert(s,tv.newNoDocument(s,P.min()));let n=nl().add(s),i=new nJ(P.min(),new Map,new e$(V),e,n);await aw(r,i),r.mc=r.mc.remove(s),r.gc.delete(t),aN(r)}else await i8(r.localStore,t,!1).then(()=>a_(r,t,n)).catch(et)}async function ab(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||b(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ax(e,r,null),aS(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aA(e,i)}catch(e){await et(e)}}async function aE(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||b(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ax(e,t,n),aS(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aA(e,i)}catch(e){await et(e)}}async function aT(e,t){var n;sP(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.Tc.get(r)||[];i.push(t),e.Tc.set(r,i)}catch(n){let e=s2(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aS(e,t){(e.Tc.get(t)||[]).forEach(e=>{e.resolve()}),e.Tc.delete(t)}function ax(e,t,n){let r=e,i=r.Ic[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function a_(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(t=>{e.yc.containsKey(t)||aD(e,t)})}function aD(e,t){e.wc.delete(t.path.canonicalString());let n=e.mc.get(t);null!==n&&(sR(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),aN(e))}function aC(e,t,n){for(let r of n)r instanceof al?(e.yc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(y("SyncEngine","New document in limbo: "+n),e.wc.add(r),aN(e))}(e,r)):r instanceof au?(y("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||aD(e,r.key)):b()}function aN(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){let t=e.wc.values().next().value;e.wc.delete(t);let n=new z(U.fromString(t)),r=e.Ec.next();e.gc.set(r,new ad(n)),e.mc=e.mc.insert(n,r),sF(e.remoteStore,new rT(t1(tH(n.path)),r,"TargetPurposeLimboResolution",em.ct))}}async function aA(e,t,n){let r=[],i=[],s=[];e.dc.isEmpty()||(e.dc.forEach((a,o)=>{s.push(e.Rc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iJ.Bi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fc.eu(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>en.forEach(t,t=>en.forEach(t.$i,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>en.forEach(t.Fi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Hi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(t,i)}}}(e.localStore,i))}async function ak(e,t){let n=e;if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let e=await i1(n.localStore,t);n.currentUser=t,n.Tc.forEach(e=>{e.forEach(e=>{e.reject(new S(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.Tc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await aA(n,e.tr)}}function aF(e,t){let n=e.gc.get(t);if(n&&n.lc)return nl().add(n.key);{let n=nl(),r=e._c.get(t);if(!r)return n;for(let t of r){let r=e.dc.get(t);n=n.unionWith(r.view.ec)}return n}}async function aR(e,t){let n=await i3(e.localStore,t.query,!0),r=t.view.ac(n);return e.isPrimaryClient&&aC(e,t.targetId,r.uc),r}async function aM(e,t){return i9(e.localStore,t).then(t=>aA(e,t))}async function aV(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Vn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sG(e.remoteStore):"acknowledged"===n||"rejected"===n?(ax(e,t,r||null),aS(e,t),function(e,t){e.mutationQueue.Dn(t)}(e.localStore,t)):b(),await aA(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aL(e,t){let n=e;if(aK(n),az(n),!0===t&&!0!==n.Ac){let e=n.sharedClientState.getAllActiveQueryTargets(),t=await aO(n,e.toArray());for(let e of(n.Ac=!0,await sJ(n.remoteStore,!0),t))sF(n.remoteStore,e)}else if(!1===t&&!1!==n.Ac){let e=[],t=Promise.resolve();n._c.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(a_(n,i),i8(n.localStore,i,!0))),sR(n.remoteStore,i)}),await t,await aO(n,e),function(e){let t=e;t.gc.forEach((e,n)=>{sR(t.remoteStore,n)}),t.yc.Is(),t.gc=new Map,t.mc=new e$(z.comparator)}(n),n.Ac=!1,await sJ(n.remoteStore,!1)}}async function aO(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e._c.get(n);if(s&&0!==s.length)for(let n of(t=await i5(e.localStore,t1(s[0])),s)){let t=e.dc.get(n),r=await aR(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i6(e.localStore,n);t=await i5(e.localStore,r),await ag(e,aP(r),n,!1,t.resumeToken)}r.push(t)}return e.fc.eu(i),r}function aP(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new tW(t,n,r,i,s,"F",a,o)}function aq(e){return e.localStore.persistence.Mi()}async function aU(e,t,n,r){if(e.Ac)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e._c.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i9(e.localStore,t9(i[0])),s=nJ.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e0.EMPTY_BYTE_STRING);await aA(e,r,s);break}case"rejected":await i8(e.localStore,t,!0),a_(e,t,r);break;default:b()}}async function aB(e,t,n){let r=aK(e);if(r.Ac){for(let e of t){if(r._c.has(e)){y("SyncEngine","Adding an already active target "+e);continue}let t=await i6(r.localStore,e),n=await i5(r.localStore,t);await ag(r,aP(t),n.targetId,!1,n.resumeToken),sF(r.remoteStore,n)}for(let e of n)r._c.has(e)&&await i8(r.localStore,e,!1).then(()=>{sR(r.remoteStore,e),a_(r,e)}).catch(et)}}function aK(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aF.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=aI.bind(null,t),t.fc.eu=ae.bind(null,t.eventManager),t.fc.vc=at.bind(null,t.eventManager),t}function az(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=ab.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=aE.bind(null,t),t}class aG{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iZ,r=e.initialUser,i=this.serializer,new i0(t,n,r,i)}createPersistence(e){return new iK(iG.js,this.serializer)}createSharedClientState(e){return new sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a$ extends aG{constructor(e,t,n){super(),this.bc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await az(this.bc.syncEngine),await sG(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iZ,r=e.initialUser,i=this.serializer,new i0(t,n,r,i)}createGarbageCollectionScheduler(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new iI(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}createPersistence(e){let t=iY(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ii.withCacheSize(this.cacheSizeBytes):ii.DEFAULT;return new iW(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sI(),sb(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sh}}class aQ extends a${constructor(e,t){super(e,t,!1),this.bc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.bc.syncEngine;this.sharedClientState instanceof sc&&(this.sharedClientState.syncEngine={Qr:aV.bind(null,t),jr:aU.bind(null,t),zr:aB.bind(null,t),Mi:aq.bind(null,t),Gr:aM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi(async e=>{await aL(this.bc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sI();if(!sc.D(t))throw new S(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iY(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aj{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>av(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ak.bind(null,this.syncEngine),await sJ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s6}createDatastore(e){var t,n,r;let i=sE(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new sv(t));return n=e.authCredentials,r=e.appCheckCredentials,new sD(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>av(this.syncEngine,e,0),s=sf.D()?new sf:new sd,new sN(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new af(e,t,n,r,i,s);return a&&(o.Ac=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await sk(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aW(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aX{constructor(e,t){this.Dc=e,this.serializer=t,this.metadata=new x,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(e=>{e&&e.Gu()?this.metadata.resolve(e.Ku.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Ku)}`))},e=>this.metadata.reject(e))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){let e=await this.Nc();if(null===e)return null;let t=this.Cc.decode(e),n=Number(t);isNaN(n)&&this.kc(`length string (${t}) is not valid number`);let r=await this.Mc(n);return new ai(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex(e=>123===e)}async Nc(){for(;0>this.Oc()&&!await this.$c(););if(0===this.buffer.length)return null;let e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");let t=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}kc(e){throw this.Dc.cancel(),Error(`Invalid bundle format: ${e}`)}async $c(){let e=await this.Dc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=rh(e.serializer)+"/documents",r={documents:t.map(t=>ro(e.serializer,t))},i=await e.Ao("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||b(),t.found.name,t.found.updateTime;let n=rl(e,t.found.name),r=ri(t.found.updateTime),i=t.found.createTime?ri(t.found.createTime):P.min(),s=new tw({mapValue:{fields:t.found.fields}});return tv.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||b(),t.readTime||b();let n=rl(e,t.missing),r=ri(t.readTime);return tv.newNoDocument(n,r)}(n,t):b());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||b(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nL(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=z.fromPath(t);this.mutations.push(new nO(n,this.precondition(n)))}),await async function(e,t){let n=rh(e.serializer)+"/documents",r={writes:t.map(t=>rg(e.serializer,t))};await e.po("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=P.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?nx.exists(!1):nx.updateTime(t):nx.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new S(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nx.updateTime(t)}return nx.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aJ{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Fc=n.maxAttempts,this.Lo=new sT(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{let e=new aY(this.datastore),t=this.Lc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.qc(e)}))}).catch(e=>{this.qc(e)})})}Lc(e){try{let t=this.updateFunction(e);return!eg(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nK(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=M.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s2(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a0(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i1(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function a1(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a4(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sY(t.remoteStore,n)),e._onlineComponents=t}function a2(e){return"FirebaseError"===e.name?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a4(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await a0(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a2(t))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await a0(e,new aG)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await a0(e,new aG)}return e._offlineComponents}async function a5(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await a1(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await a1(e,new aj))),e._onlineComponents}function a8(e){return a4(e).then(e=>e.persistence)}function a3(e){return a4(e).then(e=>e.localStore)}function a6(e){return a5(e).then(e=>e.remoteStore)}function a9(e){return a5(e).then(e=>e.syncEngine)}async function a7(e){let t=await a5(e),n=t.eventManager;return n.onListen=am.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n}function oe(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aH({next:s=>{t.enqueueAndForget(()=>s7(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new S(T.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ar(tH(n.path),s,{includeMetadataChanges:!0,Uu:!0});return s9(e,a)})(await a7(e),e.asyncQueue,t,n,r)),r.promise}function ot(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aH({next:n=>{t.enqueueAndForget(()=>s7(e,a)),n.fromCache&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new ar(n,s,{includeMetadataChanges:!0,Uu:!0});return s9(e,a)})(await a7(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t,n){if(!n)throw new S(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oi(e,t,n,r){if(!0===t&&!0===r)throw new S(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function os(e){if(!z.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oa(e){if(z.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b()}function ol(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oo(e);throw new S(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ou(e,t){if(t<=0)throw new S(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oi("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=on.get(e);t&&(y("ComponentProvider","Removing Datastore"),on.delete(e),t.terminate())}(this),Promise.resolve()}}function od(e,t,n,r={}){var i;let s=(e=ol(e,oh))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new C(new _(t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new og(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new of(this.firestore,e,this._key)}}class om{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new om(this.firestore,e,this._query)}}class og extends om{constructor(e,t,n){super(e,t,tH(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new of(this.firestore,null,new z(e))}withConverter(e){return new og(this.firestore,e,this._path)}}function op(e,t,...n){if(e=(0,l.m9)(e),or("collection","path",t),e instanceof oh){let r=U.fromString(t,...n);return oa(r),new og(e,null,r)}{if(!(e instanceof of||e instanceof og))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return oa(r),new og(e.firestore,null,r)}}function oy(e,t){if(e=ol(e,oh),or("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new om(e,null,new tW(U.emptyPath(),t))}function ow(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=M.A()),or("doc","path",t),e instanceof oh){let r=U.fromString(t,...n);return os(r),new of(e,null,new z(r))}{if(!(e instanceof of||e instanceof og))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return os(r),new of(e.firestore,e instanceof og?e.converter:null,new z(r))}}function ov(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),(e instanceof of||e instanceof og)&&(t instanceof of||t instanceof og)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function oI(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),e instanceof om&&t instanceof om&&e.firestore===t.firestore&&t5(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new sT(this,"async_queue_retry"),this.Yc=()=>{let e=sb();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};let e=sb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;let t=sb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});let t=new x;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!eo(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){let t=this.Kc.then(()=>(this.Wc=!0,e().catch(e=>{let t;this.zc=e,this.Wc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw w("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Wc=!1,e))));return this.Kc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);let r=s1.createAndSchedule(this,e,t,n,e=>this.ea(e));return this.jc.push(r),r}Xc(){this.zc&&b()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(let t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{for(let t of(this.jc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.jc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){let t=this.jc.indexOf(e);this.jc.splice(t,1)}}function oE(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oT{constructor(){this._progressObserver={},this._taskCompletionResolver=new x,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oS=-1;class ox extends oh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ob,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oD(this),this._firestoreClient.terminate()}}function o_(e){return e._firestoreClient||oD(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oD(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new e9(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new aZ(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}function oC(e,t){oO(e=ol(e,ox));let n=o_(e);if(n._uninitializedComponentsProvider)throw new S(T.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new aj;return oA(n,i,new a$(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oN(e){oO(e=ol(e,ox));let t=o_(e);if(t._uninitializedComponentsProvider)throw new S(T.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new aj;return oA(t,r,new aQ(r,n.cacheSizeBytes))}function oA(e,t,n){let r=new x;return e.asyncQueue.enqueue(async()=>{try{await a0(e,n),await a1(e,t),r.resolve()}catch(e){if(!a2(e))throw e;v("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function ok(e){if(e._initialized&&!e._terminated)throw new S(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new x;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.D())return Promise.resolve();await ei.delete(e+"main")}(iY(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oF(e){return function(e){let t=new x;return e.asyncQueue.enqueueAndForget(async()=>aT(await a9(e),t)),t.promise}(o_(e=ol(e,ox)))}function oR(e){var t;return(t=o_(e=ol(e,ox))).asyncQueue.enqueue(async()=>{let e=await a8(t),n=await a6(t);return e.setNetworkEnabled(!0),n.Au.delete(0),sA(n)})}function oM(e){var t;return(t=o_(e=ol(e,ox))).asyncQueue.enqueue(async()=>{let e=await a8(t),n=await a6(t);return e.setNetworkEnabled(!1),async function(e){e.Au.add(0),await sk(e),e.Pu.set("Offline")}(n)})}function oV(e,t){let n=o_(e=ol(e,ox)),r=new oT;return function(e,t,n,r){var i,s;let a=(i=sE(t),s=function(e,t){if(e instanceof Uint8Array)return aW(e,t);if(e instanceof ArrayBuffer)return aW(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nQ().encode(n):n),new aX(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=ri(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Ls.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(ao(i));let s=new aa(i,e.localStore,t.serializer),a=await t.Pc();for(;a;){let e=await s.ju(a);e&&n._updateProgress(e),a=await t.Pc()}let o=await s.complete();return await aA(e,o.Hu,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Ls.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.Wu)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await a9(e),a,r)})}(n,e._databaseId,t,r),r}function oL(e,t){var n;return(n=o_(e=ol(e,ox))).asyncQueue.enqueue(async()=>{var e;return(e=await a3(n)).persistence.runTransaction("Get named query","readonly",n=>e.Ls.getNamedQuery(n,t))}).then(t=>t?new om(e,null,t.query):null)}function oO(e){if(e._initialized||e._terminated)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oP(e0.fromBase64String(e))}catch(e){throw new S(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oP(e0.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oK=/^__.*__$/;class oz{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nF(e,this.data,this.fieldMask,t,this.fieldTransforms):new nk(e,this.data,t,this.fieldTransforms)}}class oG{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nF(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o$(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class oQ{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new oQ(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.la(e),r}fa(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return ln(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(o$(this.ua)&&oK.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class oj{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sE(e)}ga(e,t,n,r=!1){return new oQ({ua:e,methodName:t,ma:n,path:K.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oW(e){let t=e._freezeSettings(),n=sE(e._databaseId);return new oj(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oH(e,t,n,r,i,s={}){let a,o;let l=e.ga(s.merge||s.mergeFields?2:0,t,n,i);o9("Data must be an object, but it was:",l,r);let u=o3(r,l);if(s.merge)a=new eY(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=o7(t,r,n);if(!l.contains(i))throw new S(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lr(e,i)||e.push(i)}a=new eY(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new oz(new tw(u),a,o)}class oX extends oU{_toFieldTransform(e){if(2!==e.ua)throw 1===e.ua?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oX}}function oY(e,t,n){return new oQ({ua:3,ma:t.settings.ma,methodName:e._methodName,ha:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oJ extends oU{_toFieldTransform(e){return new nT(e.path,new ng)}isEqual(e){return e instanceof oJ}}class oZ extends oU{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){let t=oY(this,e,!0),n=this.ya.map(e=>o8(e,t)),r=new np(n);return new nT(e.path,r)}isEqual(e){return this===e}}class o0 extends oU{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){let t=oY(this,e,!0),n=this.ya.map(e=>o8(e,t)),r=new nw(n);return new nT(e.path,r)}isEqual(e){return this===e}}class o1 extends oU{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){let t=new nI(e.serializer,nd(e.serializer,this.pa));return new nT(e.path,t)}isEqual(e){return this===e}}function o2(e,t,n,r){let i=e.ga(1,t,n);o9("Data must be an object, but it was:",i,r);let s=[],a=tw.empty();ez(r,(e,r)=>{let o=lt(t,e,n);r=(0,l.m9)(r);let u=i.fa(o);if(r instanceof oX)s.push(o);else{let e=o8(r,u);null!=e&&(s.push(o),a.set(o,e))}});let o=new eY(s);return new oG(a,o,i.fieldTransforms)}function o4(e,t,n,r,i,s){let a=e.ga(1,t,n),o=[o7(t,r,n)],u=[i];if(s.length%2!=0)throw new S(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(o7(t,s[e])),u.push(s[e+1]);let c=[],h=tw.empty();for(let e=o.length-1;e>=0;--e)if(!lr(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.fa(t);if(n instanceof oX)c.push(t);else{let e=o8(n,r);null!=e&&(c.push(t),h.set(t,e))}}let d=new eY(c);return new oG(h,d,a.fieldTransforms)}function o5(e,t,n,r=!1){return o8(n,e.ga(r?4:3,t))}function o8(e,t){if(o6(e=(0,l.m9)(e)))return o9("Unsupported field value:",t,e),o3(e,t);if(e instanceof oU)return function(e,t){if(!o$(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&4!==t.ua)throw t._a("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=o8(i,t.da(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:rn(t.serializer,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rn(t.serializer,n)}}if(e instanceof oB)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oP)return{bytesValue:rr(t.serializer,e._byteString)};if(e instanceof of){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rs(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${oo(e)}`)}(e,t)}function o3(e,t){let n={};return eG(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ez(e,(e,r)=>{let i=o8(r,t.aa(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function o6(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof oB||e instanceof oP||e instanceof of||e instanceof oU)}function o9(e,t,n){if(!o6(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oo(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function o7(e,t,n){if((t=(0,l.m9)(t))instanceof oq)return t._internalPath;if("string"==typeof t)return lt(e,t);throw ln("Field path arguments must be of type string or ",e,!1,void 0,n)}let le=RegExp("[~\\*/\\[\\]]");function lt(e,t,n){if(t.search(le)>=0)throw ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oq(...t.split("."))._internalPath}catch(r){throw ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ln(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new S(T.INVALID_ARGUMENT,o+e+l)}function lr(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new of(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ls(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ls extends li{data(){return super.data()}}function la(e,t){return"string"==typeof t?lt(e,t):t instanceof oq?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ll{}class lu extends ll{}function lc(e,t,...n){let r=[];for(let i of(t instanceof ll&&r.push(t),function(e){let t=e.filter(e=>e instanceof lf).length,n=e.filter(e=>e instanceof lh).length;if(t>1||t>0&&n>0)throw new S(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lh extends lu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lh(e,t,n)}_apply(e){let t=this._parse(e);return lC(e._query,t),new om(e.firestore,e.converter,t2(e._query,t))}_parse(e){let t=oW(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lD(a,s);let t=[];for(let n of a)t.push(l_(r,e,n));o={arrayValue:{values:t}}}else o=l_(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lD(a,s),o=o5(n,t,a,"in"===s||"not-in"===s);return tx.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function ld(e,t,n){let r=la("where",e);return lh._create(r,t,n)}class lf extends ll{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lf(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:t_.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)lC(n,e),n=t2(n,e)}(e._query,t),new om(e.firestore,e.converter,t2(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lm extends lu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lm(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new tT(t,n);return function(e,t){if(null===tY(e)){let n=tJ(e);null!==n&&lN(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new om(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tW(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lg(e,t="asc"){let n=la("orderBy",e);return lm._create(n,t)}class lp extends lu{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lp(e,t,n)}_apply(e){return new om(e.firestore,e.converter,t4(e._query,this._limit,this._limitType))}}function ly(e){return ou("limit",e),lp._create("limit",e,"F")}function lw(e){return ou("limitToLast",e),lp._create("limitToLast",e,"L")}class lv extends lu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lv(e,t,n)}_apply(e){var t;let n=lx(e,this.type,this._docOrFields,this._inclusive);return new om(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function lI(...e){return lv._create("startAt",e,!0)}function lb(...e){return lv._create("startAfter",e,!1)}class lE extends lu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lE(e,t,n)}_apply(e){var t;let n=lx(e,this.type,this._docOrFields,this._inclusive);return new om(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function lT(...e){return lE._create("endBefore",e,!1)}function lS(...e){return lE._create("endAt",e,!0)}function lx(e,t,n,r){if(n[0]=(0,l.m9)(n[0]),n[0]instanceof li)return function(e,t,n,r,i){if(!r)throw new S(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t0(e))if(n.field.isKeyField())s.push(tl(t,r.key));else{let e=r.data.field(n.field);if(e8(e))throw new S(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new S(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tI(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oW(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new S(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new S(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tZ(e)&&-1!==l.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(U.fromString(l));if(!z.isDocumentKey(n))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new z(n);o.push(tl(t,i))}else{let e=o5(n,r,l);o.push(e)}}return new tI(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function l_(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new S(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tZ(t)&&-1!==n.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(U.fromString(n));if(!z.isDocumentKey(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tl(e,new z(r))}if(n instanceof of)return tl(e,n._key);throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oo(n)}.`)}function lD(e,t){if(!Array.isArray(e)||0===e.length)throw new S(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lC(e,t){if(t.isInequality()){let n=tJ(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=tY(e);null!==i&&lN(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lN(e,t,n){if(!n.isEqual(t))throw new S(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lA{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e4(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e5(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ez(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oB(e4(e.latitude),e4(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e3(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e6(e));default:return null}}convertTimestamp(e){let t=e2(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=U.fromString(e);rE(n)||b();let r=new e7(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lF extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new oP(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new of(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lM extends li{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lV extends lM{data(e={}){return super.data(e)}}class lL{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lR(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lV(this._firestore,this._userDataWriter,n.key,n,new lR(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lV(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lR(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lV(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lR(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lO(e,t){return e instanceof lM&&t instanceof lM?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lL&&t instanceof lL&&e._firestore===t._firestore&&oI(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(e){e=ol(e,of);let t=ol(e.firestore,ox);return oe(o_(t),e._key).then(n=>lJ(t,e,n))}class lq extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new oP(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new of(this.firestore,null,t)}}function lU(e){e=ol(e,of);let t=ol(e.firestore,ox),n=o_(t),r=new lq(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s2(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await a3(e),t,n)),n.promise})(n,e._key).then(n=>new lM(t,r,e._key,n,new lR(null!==n&&n.hasLocalMutations,!0),e.converter))}function lB(e){e=ol(e,of);let t=ol(e.firestore,ox);return oe(o_(t),e._key,{source:"server"}).then(n=>lJ(t,e,n))}function lK(e){e=ol(e,om);let t=ol(e.firestore,ox),n=o_(t),r=new lq(t);return lo(e._query),ot(n,e._query).then(n=>new lL(t,r,e,n))}function lz(e){e=ol(e,om);let t=ol(e.firestore,ox),n=o_(t),r=new lq(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i3(e,t,!0),i=new ac(t,r.sr),s=i.nc(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s2(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await a3(e),t,n)),n.promise})(n,e._query).then(n=>new lL(t,r,e,n))}function lG(e){e=ol(e,om);let t=ol(e.firestore,ox),n=o_(t),r=new lq(t);return ot(n,e._query,{source:"server"}).then(n=>new lL(t,r,e,n))}function l$(e,t,n){e=ol(e,of);let r=ol(e.firestore,ox),i=lk(e.converter,t,n);return lY(r,[oH(oW(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nx.none())])}function lQ(e,t,n,...r){let i;e=ol(e,of);let s=ol(e.firestore,ox),a=oW(s);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o4(a,"updateDoc",e._key,t,n,r):o2(a,"updateDoc",e._key,t),lY(s,[i.toMutation(e._key,nx.exists(!0))])}function lj(e){return lY(ol(e.firestore,ox),[new nL(e._key,nx.none())])}function lW(e,t){let n=ol(e.firestore,ox),r=ow(e),i=lk(e.converter,t);return lY(n,[oH(oW(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nx.exists(!1))]).then(()=>r)}function lH(e,...t){var n,r,i;let s,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||oE(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(oE(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof of)a=ol(e.firestore,ox),o=tH(e._key.path),s={next:n=>{t[c]&&t[c](lJ(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=ol(e,om);a=ol(n.firestore,ox),o=n._query;let r=new lq(a);s={next:e=>{t[c]&&t[c](new lL(a,r,n,e))},error:t[c+1],complete:t[c+2]},lo(e._query)}return function(e,t,n,r){let i=new aH(r),s=new ar(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s9(await a7(e),s)),()=>{i.Sc(),e.asyncQueue.enqueueAndForget(async()=>s7(await a7(e),s))}}(o_(a),o,h,s)}function lX(e,t){return function(e,t){let n=new aH(t);return e.asyncQueue.enqueueAndForget(async()=>{(await a7(e)).Nu.add(n),n.next()}),()=>{n.Sc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.Nu.delete(t)})(await a7(e),n))}}(o_(e=ol(e,ox)),oE(t)?t:{next:t})}function lY(e,t){return function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>ay(await a9(e),t,n)),n.promise}(o_(e),t)}function lJ(e,t,n){let r=n.docs.get(t._key),i=new lq(e);return new lM(e,i,t._key,r,new lR(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lZ={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oW(e)}set(e,t,n){this._verifyNotCommitted();let r=l1(e,this._firestore),i=lk(r.converter,t,n),s=oH(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nx.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=l1(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o4(this._dataReader,"WriteBatch.update",s._key,t,n,r):o2(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nx.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=l1(e,this._firestore);return this._mutations=this._mutations.concat(new nL(t._key,nx.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function l1(e,t){if((e=(0,l.m9)(e)).firestore!==t)throw new S(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oW(e)}get(e){let t=l1(e,this._firestore),n=new lF(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();let r=e[0];if(r.isFoundDocument())return new li(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new li(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){let r=l1(e,this._firestore),i=lk(r.converter,t,n),s=oH(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=l1(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o4(this._dataReader,"Transaction.update",s._key,t,n,r):o2(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=l1(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=l1(e,this._firestore),n=new lq(this._firestore);return super.get(e).then(e=>new lM(this._firestore,n,t._key,e._document,new lR(!1,!1),t.converter))}}function l4(e,t,n){e=ol(e,ox);let r=Object.assign(Object.assign({},lZ),n);return!function(e){if(e.maxAttempts<1)throw new S(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a5(e).then(e=>e.datastore);new aJ(e.asyncQueue,i,n,t,r).run()}),r.promise}(o_(e),n=>t(new l2(e,n)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l5(){return new oX("deleteField")}function l8(){return new oJ("serverTimestamp")}function l3(...e){return new oZ("arrayUnion",e)}function l6(...e){return new o0("arrayRemove",e)}function l9(e){return new o1("increment",e)}!function(e,t=!0){f=s.SDK_VERSION,(0,s._registerComponent)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new ox(new N(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e7(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(h,"3.11.0",void 0),(0,s.registerVersion)(h,"3.11.0","esm2017")}()}}]);