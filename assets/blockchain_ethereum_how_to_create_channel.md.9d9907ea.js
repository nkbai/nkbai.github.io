import{o as e,c as t,b as n,d as a}from"./app.d2d52540.js";const o='{"title":"howtocreate_channel","description":"","frontmatter":{"title":"how_to_create_channel","date":"2019-01-22T01:49:06.000Z","draft":false,"markup":"mmark"},"relativePath":"blockchain/ethereum/how_to_create_channel.md","lastUpdated":1641604782000}',r={},c=[n("h1",{id:"create-channel"},[n("a",{class:"header-anchor",href:"#create-channel","aria-hidden":"true"},"#"),a(" create channel")],-1),n("pre",{class:"mermaid loading"},"sequenceDiagram\n    participant user as Alice\n    participant photon as photon\n    participant  spectrum\n     \n    user->>photon:create channel between Alice and Bob \n    photon->> spectrum:   call Mesh Token to Approve TokensNetwork\n    Note right of photon: this Tx takes about 30 seconds\n    photon->>photon: wait Approve Tx packaged\n    photon->> spectrum:   call TokensNetwork to open channel \n     Note right of photon: this Tx takes about 30 seconds\n    photon->>photon: wait openChannel Tx packaged\n    photon->>user: channel created",-1)];r.render=function(n,a,o,r,h,p){return e(),t("div",null,c)};export{o as __pageData,r as default};