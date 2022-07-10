import{_ as t,c as a,o as n,d as e,e as o}from"./app.7ecda22b.js";const f='{"title":"howtocreate_channel","description":"","frontmatter":{"title":"how_to_create_channel","date":"2019-01-22T01:49:06.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/ethereum/how_to_create_channel.md"}',c={},r=e("h1",{id:"create-channel",tabindex:"-1"},[o("create channel "),e("a",{class:"header-anchor",href:"#create-channel","aria-hidden":"true"},"#")],-1),s=e("pre",{class:"mermaid loading"},`sequenceDiagram
    participant user as Alice
    participant photon as photon
    participant  spectrum
     
    user->>photon:create channel between Alice and Bob 
    photon->> spectrum:   call Mesh Token to Approve TokensNetwork
    Note right of photon: this Tx takes about 30 seconds
    photon->>photon: wait Approve Tx packaged
    photon->> spectrum:   call TokensNetwork to open channel 
     Note right of photon: this Tx takes about 30 seconds
    photon->>photon: wait openChannel Tx packaged
    photon->>user: channel created`,-1),h=[r,s];function p(i,l,d,_,u,m){return n(),a("div",null,h)}var w=t(c,[["render",p]]);export{f as __pageData,w as default};
