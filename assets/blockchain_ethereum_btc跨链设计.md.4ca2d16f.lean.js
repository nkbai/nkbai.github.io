import{_ as e,c as a,o as r,a as o}from"./app.e7435feb.js";const _='{"title":"btc\u8DE8\u94FE\u8BBE\u8BA1","description":"","frontmatter":{"title":"btc\u8DE8\u94FE\u8BBE\u8BA1","date":"2019-04-15T04:08:31.082Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"PrepareLockin\u8FC7\u7A0B","slug":"preparelockin\u8FC7\u7A0B"},{"level":3,"title":"1. \u7528\u6237\u5728\u4E3B\u94FE\u6784\u9020PrepareLockin\u8C03\u7528,\u5C06\u6BD4\u7279\u5E01\u9501\u5B9A\u5230\u6307\u5B9A\u7684\u5730\u5740","slug":"_1-\u7528\u6237\u5728\u4E3B\u94FE\u6784\u9020preparelockin\u8C03\u7528-\u5C06\u6BD4\u7279\u5E01\u9501\u5B9A\u5230\u6307\u5B9A\u7684\u5730\u5740"},{"level":3,"title":"2. \u7B49\u5F85\u786E\u8BA4\u5757\u6570\u4EE5\u540E,\u7528\u6237\u9009\u53D6\u516C\u8BC1\u4EBA\u5728\u4FA7\u94FE\u505APrepareLockin.","slug":"_2-\u7B49\u5F85\u786E\u8BA4\u5757\u6570\u4EE5\u540E-\u7528\u6237\u9009\u53D6\u516C\u8BC1\u4EBA\u5728\u4FA7\u94FE\u505Apreparelockin"},{"level":3,"title":"3. \u516C\u8BC1\u4EBA\u901A\u8FC7PBFT\u534F\u5546nonce,\u6267\u884C\u4FA7\u94FEPrepareLockin","slug":"_3-\u516C\u8BC1\u4EBA\u901A\u8FC7pbft\u534F\u5546nonce-\u6267\u884C\u4FA7\u94FEpreparelockin"},{"level":3,"title":"4. \u7528\u6237\u5728\u51ED\u5BC6\u7801\u89E3\u9501\u4FA7\u94FELockin","slug":"_4-\u7528\u6237\u5728\u51ED\u5BC6\u7801\u89E3\u9501\u4FA7\u94FElockin"},{"level":3,"title":"5.\u6210\u529F\u4EE5\u540E,\u53D1\u8D77\u5206\u5E03\u5F0F\u7B7E\u540D,\u5728\u4E3B\u94FE\u53D1\u8D77\u4EA4\u6613\u5C06PrepareLockin\u8F6C\u6362\u4E3A\u666E\u901AUTXO.","slug":"_5-\u6210\u529F\u4EE5\u540E-\u53D1\u8D77\u5206\u5E03\u5F0F\u7B7E\u540D-\u5728\u4E3B\u94FE\u53D1\u8D77\u4EA4\u6613\u5C06preparelockin\u8F6C\u6362\u4E3A\u666E\u901Autxo"},{"level":3,"title":"5. \u7528\u6237\u548C\u516C\u8BC1\u4EBA\u53D6\u6D88\u7684\u8FC7\u7A0B","slug":"_5-\u7528\u6237\u548C\u516C\u8BC1\u4EBA\u53D6\u6D88\u7684\u8FC7\u7A0B"},{"level":2,"title":"PrepareLockout\u8FC7\u7A0B","slug":"preparelockout\u8FC7\u7A0B"},{"level":3,"title":"1. \u7528\u6237\u5728\u4FA7\u94FE\u8C03\u7528\u5408\u7EA6PrepareLockout,\u5C06\u4FA7\u94FE\u5E01\u9501\u5B9A.","slug":"_1-\u7528\u6237\u5728\u4FA7\u94FE\u8C03\u7528\u5408\u7EA6preparelockout-\u5C06\u4FA7\u94FE\u5E01\u9501\u5B9A"},{"level":3,"title":"2. \u5F85\u786E\u8BA4\u5757\u6570\u4EE5\u540E,\u7528\u6237\u9009\u53D6\u516C\u8BC1\u4EBA\u5728\u4E3B\u94FE\u505APrepareLockout.","slug":"_2-\u5F85\u786E\u8BA4\u5757\u6570\u4EE5\u540E-\u7528\u6237\u9009\u53D6\u516C\u8BC1\u4EBA\u5728\u4E3B\u94FE\u505Apreparelockout"},{"level":3,"title":"3. \u516C\u8BC1\u4EBA\u901A\u8FC7PBFT\u534F\u5546,\u9009\u53D6\u5408\u9002\u7684UTXO,\u6267\u884C\u4E3B\u94FEPrepareLockout","slug":"_3-\u516C\u8BC1\u4EBA\u901A\u8FC7pbft\u534F\u5546-\u9009\u53D6\u5408\u9002\u7684utxo-\u6267\u884C\u4E3B\u94FEpreparelockout"},{"level":3,"title":"4. \u7528\u6237\u51ED\u5BC6\u7801\u89E3\u9501\u4E3B\u94FELockout,","slug":"_4-\u7528\u6237\u51ED\u5BC6\u7801\u89E3\u9501\u4E3B\u94FElockout"},{"level":3,"title":"5. \u7B2C\u4E8C\u90E8\u4E2D\u7684\u516C\u8BC1\u4EBA\u68C0\u6D4B\u5230\u5BC6\u7801\u51FA\u73B0\u4EE5\u540E,\u5728\u4FA7\u94FE\u6267\u884Clockout","slug":"_5-\u7B2C\u4E8C\u90E8\u4E2D\u7684\u516C\u8BC1\u4EBA\u68C0\u6D4B\u5230\u5BC6\u7801\u51FA\u73B0\u4EE5\u540E-\u5728\u4FA7\u94FE\u6267\u884Clockout"},{"level":3,"title":"6. \u7528\u6237\u4EE5\u53CA\u516C\u8BC1\u4EBA\u5728\u4FA7\u94FE\u4E3B\u94FE\u53D6\u6D88lockout\u7684\u8FC7\u7A0B","slug":"_6-\u7528\u6237\u4EE5\u53CA\u516C\u8BC1\u4EBA\u5728\u4FA7\u94FE\u4E3B\u94FE\u53D6\u6D88lockout\u7684\u8FC7\u7A0B"},{"level":2,"title":"\u516C\u8BC1\u4EBA\u4EE5\u53CA\u7528\u6237\u5982\u4F55\u77E5\u9053btc\u4E3B\u94FE\u4E0A\u7684\u4E0E\u81EA\u5DF1\u76F8\u5173\u7684UTXO","slug":"\u516C\u8BC1\u4EBA\u4EE5\u53CA\u7528\u6237\u5982\u4F55\u77E5\u9053btc\u4E3B\u94FE\u4E0A\u7684\u4E0E\u81EA\u5DF1\u76F8\u5173\u7684utxo"}],"relativePath":"blockchain/ethereum/btc\u8DE8\u94FE\u8BBE\u8BA1.md"}',l={},t=o("",32),i=[t];function c(n,p,h,d,u,s){return r(),a("div",null,i)}var b=e(l,[["render",c]]);export{_ as __pageData,b as default};
