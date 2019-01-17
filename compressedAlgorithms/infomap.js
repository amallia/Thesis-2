jInfomap=function(){let e,t,o,n=.001,r={},s={};function c(e){let t={};return e.forEach(function(e){t[e]=!0}),Object.keys(t)}function a(e){let t=[];for(let o in e)e.hasOwnProperty(o)&&t.push(e[o]);return t}function i(e,t){let o=e._assoc_mat[t]?Object.keys(e._assoc_mat[t]):[],n=0;return o.forEach(function(o){let r=e._assoc_mat[t][o]||1;t===o&&(r=0),n+=r}),n}function u(e,t){return void 0===e._assoc_mat[t]?[]:Object.keys(e._assoc_mat[t])}function g(e){if(null===e||"object"!=typeof e)return e;let t=e.constructor();for(let o in e)t[o]=g(e[o]);return t}function f(e){let t,o,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),o=e[n],e[n]=e[t],e[t]=o;return e}function l(e,t,o){t.nodes_to_com={},t.internals={},t.degrees={},t.gdegrees={},t.total_weight=function(e){let t=0;return e.edges.forEach(function(e){t+=e.weight}),t}(e),void 0===o?e.nodes.forEach(function(o,n){t.nodes_to_com[o]=n;let r=i(e,o);if(r<0)throw"Bad graph type, use positive weights!";t.degrees[n]=r,t.gdegrees[o]=r,t.internals[n]=0}):e.nodes.forEach(function(n){let r=o[n];t.nodes_to_com[n]=r;let s=i(e,n);t.degrees[r]=(t.degrees[r]||0)+s,t.gdegrees[n]=s;let c=0;u(e,n).forEach(function(t){let s=e._assoc_mat[n][t];if(s<=0)throw"Bad graph type, use positive weights";o[t]===r&&(t===n?c=0:c+=s/2)}),t.internals[r]=(t.internals[r]||0)+c})}function _(e){let t=e.total_weight,o=c(a(e.nodes_to_com)),n=c(Object.keys(e.nodes_to_com)),r=0,s=0,i=0,u=0;return n.forEach(function(o){let n=e.gdegrees[o]||0;0!==t&&(i+=n/(2*t)*Math.log(n/(2*t)))}),o.forEach(function(o){let n=e.internals[o]||0,c=e.degrees[o]||0;0!==t&&(s+=(c-2*n)/(2*t)*Math.log((c-2*n)/(2*t)),r+=(c-2*n)/(2*t),u+=((c-2*n)/(2*t)+c/(2*t))*Math.log((c-2*n)/(2*t)+c/(2*t)))}),r*Math.log(r)-2*s-i+u}function d(e,t,o){let n={};return u(t,e).forEach(function(r){if(r!==e){let s=t._assoc_mat[e][r]||1,c=o.nodes_to_com[r];n[c]=(n[c]||0)+s}}),n}function h(e){let t=0,o=g(e),n={};return Object.keys(e).forEach(function(r){let s=e[r],c=void 0===n[s]?-1:n[s];-1===c&&(n[s]=t,c=t,t+=1),o[r]=c}),o}function m(e,t){let o=!0,r=_(t),s=r;for(;o;){if(r=s,o=!1,f(e.nodes).forEach(function(n){let r=t.nodes_to_com[n],c=d(n,e,t);t.degrees[r]=(t.degrees[r]||0)-(t.gdegrees[n]||0),t.internals[r]=(t.internals[r]||0)-(c[r]||0),t.nodes_to_com[n]=-1;let a=r,i=0;Object.keys(c).forEach(function(e){t.nodes_to_com[n]=+e,t.degrees[e]=(t.degrees[e]||0)+(t.gdegrees[n]||0),t.internals[e]=(t.internals[e]||0)+(c[e]||0);let o=_(t);Math.abs(o)>Math.abs(i)&&(i=o,a=e),t.degrees[e]=(t.degrees[e]||0)-(t.gdegrees[n]||0),t.internals[e]=(t.internals[e]||0)-(c[e]||0),t.nodes_to_com[n]=-1}),t.nodes_to_com[n]=+a,t.degrees[a]=(t.degrees[a]||0)+(t.gdegrees[n]||0),t.internals[a]=(t.internals[a]||0)+(c[a]||0),(a!==r||isNaN(s))&&(o=!0)}),(s=_(t))-r<n||isNaN(s))break}}function w(e,t){let o,n,r={nodes:[],edges:[],_assoc_mat:{}},i=a(e);return r.nodes=r.nodes.concat(c(i)),t.edges.forEach(function(t){n=t.weight||1;let c=e[t.source],a=e[t.target];var i,u,g;u=c,g=a,o=((i=r)._assoc_mat[u]?i._assoc_mat[u][g]:void 0)||0,function(e,t){!function(e,t){e._assoc_mat[t.source]=e._assoc_mat[t.source]||{},e._assoc_mat[t.source][t.target]=t.weight,e._assoc_mat[t.target]=e._assoc_mat[t.target]||{},e._assoc_mat[t.target][t.source]=t.weight}(e,t),s[t.source+"_"+t.target]?e.edges[s[t.source+"_"+t.target]].weight=t.weight:(e.edges.push(t),s[t.source+"_"+t.target]=e.edges.length-1)}(r,{source:c,target:a,weight:o+n})}),s={},r}let p=function(){let e=function(e,t){if(0===e.edges.length){let t={};return e.nodes.forEach(function(e){t[e]=e}),t}let o,s={};l(r,s,t);let c=[];m(r,s);let a=_(s),i=h(s.nodes_to_com);c.push(i),o=a;let u=w(i,r);for(l(u,s);!1===isNaN(_(s))&&(m(u,s),!((a=_(s))-o<n));)i=h(s.nodes_to_com),c.push(i),o=a,l(u=w(i,u),s);return c}(r,o);return function(e,t){let o=g(e[0]);for(let n=1;n<t+1;n++)Object.keys(o).forEach(function(t){o[t]=e[n][t]});return o}(e,e.length-1)};return p.nodes=function(t){return t.length>0&&(e=t),p},p.edges=function(o){if(void 0===e)throw"Please provide the graph nodes first!";if(o.length>0){t=o;let n=function(e){let t={};return e.forEach(function(e){t[e.source]=t[e.source]||{},t[e.source][e.target]=e.weight,t[e.target]=t[e.target]||{},t[e.target][e.source]=e.weight}),t}(o);r={nodes:e,edges:t,_assoc_mat:n}}return p},p.partition_init=function(e){return e.length>0&&(o=e),p},p};