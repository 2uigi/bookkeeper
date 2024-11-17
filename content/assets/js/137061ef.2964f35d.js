"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[8008],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),g=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return i.createElement(d.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(t),c=a,m=s["".concat(d,".").concat(c)]||s[c]||y[c]||r;return t?i.createElement(m,l(l({ref:n},p),{},{components:t})):i.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<r;g++)l[g]=t[g];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},18954:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(9668),a=(t(96540),t(15680));const r={},l="BP-35: 128 bits support",o={type:"mdx",permalink:"/bps/BP-35-128-bits-support",source:"@site/src/pages/bps/BP-35-128-bits-support.md",title:"BP-35: 128 bits support",description:"Motivation",frontMatter:{}},d=[{value:"Motivation",id:"motivation",level:3},{value:"128 bits",id:"128-bits",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"API Change",id:"api-change",level:4},{value:"Handle",id:"handle",level:5},{value:"Create LedgerAdv",id:"create-ledgeradv",level:5},{value:"Open Ledger",id:"open-ledger",level:5},{value:"Delete Ledger",id:"delete-ledger",level:5},{value:"CLI",id:"cli",level:4},{value:"REST",id:"rest",level:4},{value:"Wire Protocol",id:"wire-protocol",level:4},{value:"Entry Format",id:"entry-format",level:4},{value:"Entry Format V1",id:"entry-format-v1",level:5},{value:"Entry Format V2",id:"entry-format-v2",level:5},{value:"Metadata Flags",id:"metadata-flags",level:6},{value:"Decoding Entry",id:"decoding-entry",level:5},{value:"Bookie Storage",id:"bookie-storage",level:4},{value:"Journal",id:"journal",level:5},{value:"Ledger Storage",id:"ledger-storage",level:5},{value:"EntryLogger",id:"entrylogger",level:6},{value:"EntryMemTable",id:"entrymemtable",level:6},{value:"IndexPersistenceMgr",id:"indexpersistencemgr",level:6},{value:"IndexInMemPageMgr",id:"indexinmempagemgr",level:6},{value:"DBLedgerStorage",id:"dbledgerstorage",level:6},{value:"Metadata Store",id:"metadata-store",level:4},{value:"LedgerManager",id:"ledgermanager",level:5},{value:"ZooKeeper Ledger Manager",id:"zookeeper-ledger-manager",level:6},{value:"Ledger ID generation",id:"ledger-id-generation",level:6},{value:"Etcd",id:"etcd",level:6},{value:"Performance Concerns",id:"performance-concerns",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],g={toc:d},p="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,i.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bp-35-128-bits-support"},"BP-35: 128 bits support"),(0,a.yg)("h3",{id:"motivation"},"Motivation"),(0,a.yg)("p",null,"BookKeeper coordinates with a metadata store to generate a cluster wide ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId"),".\nCurrently this is a signed ",(0,a.yg)("inlineCode",{parentName:"p"},"64 bit")," number (effectively 63 bits). This method works\ngreat because we have a centralized metadata store for coordinating the id generation.\nHowever this method may not scale as the cluster size and number of ledgers grow."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Globally_unique_identifier"},"Universally unique identifier - Wikipedia"),"\nis a preferred way to generate decentralized globally unique IDs and it takes ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits"),".\nThis method can scale well as it doesn't need a centralized coordination. "),(0,a.yg)("p",null,"This BP proposes the changes for increasing ledger id from ",(0,a.yg)("inlineCode",{parentName:"p"},"63 bits")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits"),"."),(0,a.yg)("h3",{id:"128-bits"},"128 bits"),(0,a.yg)("p",null,"Since there is no native support for ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," in both Java and\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/issues/2180"},"Protobuf"),", we have to break ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits"),"\ninto 2 ",(0,a.yg)("inlineCode",{parentName:"p"},"64 bits")," numbers for representing the ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," id:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ledger-id-msb: the most significant 64 bits, bit 64 - 127"),(0,a.yg)("li",{parentName:"ul"},"ledger-id-lsb: the least significant 64 bits, bit 0 - 63")),(0,a.yg)("p",null,"For backward compatibility, the ",(0,a.yg)("inlineCode",{parentName:"p"},"ledger-id-lsb")," is the current ",(0,a.yg)("inlineCode",{parentName:"p"},"64 bits")," ledger-id.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"ledger-id-msb")," will be added as a new field in both API and protocol. "),(0,a.yg)("p",null,"I am proposing calling ",(0,a.yg)("inlineCode",{parentName:"p"},"ledger-id-msb")," as ",(0,a.yg)("inlineCode",{parentName:"p"},"ledger-scope-id"),". So the current 64bits ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId")," and\nthe newly introduced 64bits ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," together will be forming the new ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," ledger id."),(0,a.yg)("p",null,"The default ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),". That means any ledgers created prior to this change are allocated\nunder scope ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),". Hence it maintains backward compatibility during upgrade. "),(0,a.yg)("p",null,"The combination of ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId")," forms the ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," ledger id. We can introduce a\nhex representation of this ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," ledger id - ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerQualifiedName")," . This ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerQualifiedName")," can\nbe useful for CLI tooling, REST api and troubleshooting purpose. The API internally can convert\n",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerQualifiedName")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId"),"."),(0,a.yg)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,a.yg)("h4",{id:"api-change"},"API Change"),(0,a.yg)("p",null,"The API will be introducing ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," across the interfaces. This field will be optional and default to ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),". "),(0,a.yg)("h5",{id:"handle"},"Handle"),(0,a.yg)("p",null,"Introduce a new method ",(0,a.yg)("inlineCode",{parentName:"p"},"getScopeId")," for representing the scope id (the most significant  ",(0,a.yg)("inlineCode",{parentName:"p"},"128 bits")," ledger id)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface Handle extends AutoCloseable {\n\n  ...\n\n  /**\n   * Return the ledger scope id. The most significant 64 bits of 128 bits.\n   */\n  long getScopeId();\n\n  /**\n   * Return the ledger id. The least significant 64 bits of 128 bits.\n   */ \n  long getId();\n\n  ...\n\n}\n")),(0,a.yg)("h5",{id:"create-ledgeradv"},"Create LedgerAdv"),(0,a.yg)("p",null,"Introduce a new method ",(0,a.yg)("inlineCode",{parentName:"p"},"withLedgerScopeId")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"CreateAdvBuilder")," for providing ",(0,a.yg)("inlineCode",{parentName:"p"},"scopeId"),"\n(the most significant 64 bits for 128 bits ledger id) on creating a ledger."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface CreateAdvBuilder extends OpBuilder<WriteHandle> {\n  ...\n\n  /**\n   * Set the scope id for the newly created ledger.\n   * If no explicit scopeId is passed, the new ledger\n   * will be created under scope `0`.\n   */\n  CreateAdvBuilder withLedgerScopeId(long scopeId); \n\n  ...\n}\n")),(0,a.yg)("h5",{id:"open-ledger"},"Open Ledger"),(0,a.yg)("p",null,"Introduce a new method ",(0,a.yg)("inlineCode",{parentName:"p"},"withLedgerScopeId")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"OpenBuilder")," for providing ",(0,a.yg)("inlineCode",{parentName:"p"},"scopeId"),"\n(the most significant 64 bits for 128 bits ledger id) on opening a ledger."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface OpenBuilder extends OpBuilder<ReadHandle> {\n  ...\n  /**\n   * Set the scope id of the ledger to open.\n   */\n  OpenBuilder withLedgerScopeId(long scopeId);\n  ...\n}\n")),(0,a.yg)("h5",{id:"delete-ledger"},"Delete Ledger"),(0,a.yg)("p",null,"Introduce a new method ",(0,a.yg)("inlineCode",{parentName:"p"},"withLedgerScopeId")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"DeleteBuilder")," for providing ",(0,a.yg)("inlineCode",{parentName:"p"},"scopeId"),"\n(the most significant 64 bits for 128 bits ledger id) on deleting a ledger."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface DeleteBuilder extends OpBuilder<Void> {\n  ...\n  /**\n   * Set the scope id of the ledger to delete.\n   */\n  DeleteBuilder withLedgerScopeId(long scopeId);\n  ...\n}\n")),(0,a.yg)("h4",{id:"cli"},"CLI"),(0,a.yg)("p",null,"All BookKeeper CLI tools will be updated with additional option ",(0,a.yg)("inlineCode",{parentName:"p"},"\u2014ledger-scope-id"),".\nOptionally we can add option ",(0,a.yg)("inlineCode",{parentName:"p"},"\u2014ledger-qualified-name")," (the hex representation of 128 bits).\nInternally all the CLI tools will convert ledger qualified name to ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),"."),(0,a.yg)("h4",{id:"rest"},"REST"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"All ledger related endpoints will be adding a new parameter ",(0,a.yg)("inlineCode",{parentName:"li"},"ledger_scope_id"),". "),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"ListLedgerService"),"  only supports listing ledgers under a given ledger scope id.\nIf ",(0,a.yg)("inlineCode",{parentName:"li"},"ledger_scope_id")," is missing, it will be listing ledgers under scope ",(0,a.yg)("inlineCode",{parentName:"li"},"0"),".")),(0,a.yg)("h4",{id:"wire-protocol"},"Wire Protocol"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"There will be no plan for supporting 128 bits in v2 protocol, due to the limitation in v2 protocol.\nSo any operations in v2 protocol with scope id not equal to 0  will be failed immediately with\n",(0,a.yg)("inlineCode",{parentName:"p"},"ILLEGAL_OP")," exceptions.")),(0,a.yg)("p",null,"All the request and response messages will be adding an optional field ",(0,a.yg)("inlineCode",{parentName:"p"},"optional int64 ledgerScopeId"),"."),(0,a.yg)("h4",{id:"entry-format"},"Entry Format"),(0,a.yg)("p",null,"Currently all the entries written to bookies are encoded in a certain format, including ",(0,a.yg)("inlineCode",{parentName:"p"},"metadata"),",\n",(0,a.yg)("inlineCode",{parentName:"p"},"digest code")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"payload"),". The entry format is not ",(0,a.yg)("em",{parentName:"p"},"versioned"),"."),(0,a.yg)("p",null,"In order to support adding another field ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"metadata")," section, we are introducing\n",(0,a.yg)("inlineCode",{parentName:"p"},"version")," in the entry format."),(0,a.yg)("h5",{id:"entry-format-v1"},"Entry Format V1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},"Entry Format V1\n===============\n--- header ---\nBytes (0 - 7)                   : Ledger ID\nBytes (8 - 15)                  : Entry ID\nBytes (16 - 23)                 : LastAddConfirmed\nBytes (24 - 31)                 : Length\n--- digest ---\nBytes (32 - (32 + x - 1))       : Digest Code (e.g. CRC32)\n--- payload ---\nBytes ((32 + x) - )             : Payload\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"x")," is the length of digest code.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"}," Prior to introducing ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),", ledgerId is assumed to be a positive value.")),(0,a.yg)("h5",{id:"entry-format-v2"},"Entry Format V2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},"Entry Format V2\n===============\n--- header ---\nBytes (0 - 7)                   : Metadata Flags\nBytes (8 - 15)                  : Ledger Scope ID\nBytes (16 - 23)                 : Ledger ID\nBytes (24 - 31)                 : Entry ID\nBytes (32 - 39)                 : LastAddConfirmed\nBytes (40 - 47)                 : Length\n--- digest ---\nBytes (37 - (37 + x - 1))       : Digest Code (e.g. CRC32)\n--- payload ---\nBytes ((37 + x) - )             : Payload\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"x")," is the length of digest code.")),(0,a.yg)("h6",{id:"metadata-flags"},"Metadata Flags"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},"Metadata: 1 Bytes (Long)\n------------------------\n0x 0 0\n   |__| \n     |\n version\n\n----\nBit 0 - 3: digest type (e.g. CRC32, CRC32C and such)\nBit 4 - 7: version, the most significant bit of this byte will be always set to 1.\nit will be used for differentiating entry format v1 and v2.\n\n")),(0,a.yg)("p",null,"We are setting the most significant bit to be ",(0,a.yg)("inlineCode",{parentName:"p"},"1"),". So the first byte in entry v2 will\nbe a negative value, which can be used for differentiating entry format v1 and v2.\nThe version will be encoded into the first byte. The version will be used for describing\nthe entry format."),(0,a.yg)("h5",{id:"decoding-entry"},"Decoding Entry"),(0,a.yg)("p",null,"The pseudo code for decoding an entry will be described as followings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"\nByteBuf entry = ...;\n\nint metadataFlags = entry.getByte();\n\nif (metadataFlags <= 128) { // the entry is encoded in v1 format\n    // decoding the entry in v1 format\n    ...\n} else {\n    // decoding the entry in v2 format\n}\n\n")),(0,a.yg)("h4",{id:"bookie-storage"},"Bookie Storage"),(0,a.yg)("h5",{id:"journal"},"Journal"),(0,a.yg)("p",null,"A new method should be added in journal ",(0,a.yg)("inlineCode",{parentName:"p"},"WriteCallback")," to handle ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface WriteCallback {\n\n    void writeComplete(int rc,\n                       long ledgerScopeId,\n                       long ledgerId,\n                       long entryId,\n                       BookieSocketAddress addr,\n                       Object ctx);\n\n    default void writeComplete(int rc,\n                               long ledgerId,\n                               long entryId,\n                               BookieSocketAddress addr,\n                               Object ctx) {\n        writeComplete(rc, 0L, ledgerId, entryId, addr, ctx);\n    }\n\n}\n")),(0,a.yg)("p",null,"The journal should be changed to be able to retrieve ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," from the entry\npayload based on ",(0,a.yg)("a",{parentName:"p",href:"#entry-format"},"Entry Format"),"."),(0,a.yg)("h5",{id:"ledger-storage"},"Ledger Storage"),(0,a.yg)("h6",{id:"entrylogger"},"EntryLogger"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Methods in ",(0,a.yg)("inlineCode",{parentName:"li"},"EntryLogger")," should be able to accept ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId")," as a parameter."),(0,a.yg)("li",{parentName:"ol"},"EntryLogger should be updated to retrieve ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId")," from the entry payload\nbased on ",(0,a.yg)("a",{parentName:"li",href:"#entry-format"},"Entry Format"),".")),(0,a.yg)("h6",{id:"entrymemtable"},"EntryMemTable"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," should be added as part of ",(0,a.yg)("inlineCode",{parentName:"p"},"EntryKey"),"."),(0,a.yg)("h6",{id:"indexpersistencemgr"},"IndexPersistenceMgr"),(0,a.yg)("p",null,"Currently the ledger index files (64 bits) are stored into 2-level-hirechicy\ndirectories - ",(0,a.yg)("inlineCode",{parentName:"p"},"<msb-32bits-hex>/<lsb-32bits-hex>/<ledger-id-hex>.idx"),"."),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is 0, it will be using existing scheme for storing and retrieving\nledger index files."),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is not 0, that means the ledgers are produced by new clients that\nsupport 128-bits, those ledgers will be stored in a 4-level-hirechicy\ndirectories -\n",(0,a.yg)("inlineCode",{parentName:"p"},"<msb-32bits-hex-ledger-scope-id>/<lsb-32bits-hex-ledger-scope-id>/<msb-32bits-hex-ledger-id>/<lsb-32bits-hex-ledger-id>"),"."),(0,a.yg)("p",null,"All the file info caches should be updated to use ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId>"),"\nas index keys."),(0,a.yg)("h6",{id:"indexinmempagemgr"},"IndexInMemPageMgr"),(0,a.yg)("p",null,"The LRU pages map will be updated to use ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId>")," as index\nkeys."),(0,a.yg)("h6",{id:"dbledgerstorage"},"DBLedgerStorage"),(0,a.yg)("p",null,"Currently DBLedgerStorage use ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerId, entryId>")," as the index key for indexing entry\nlocations for each entry."),(0,a.yg)("p",null,"Similar as ",(0,a.yg)("inlineCode",{parentName:"p"},"SortedLedgerStorage")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"InterleavedLedgerStorage"),", for ledgers whose\n",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is 0, they will be using existing scheme for storing their entry locations."),(0,a.yg)("p",null,"For ledgers whose ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is not 0, they will be stored in a new rocksdb,\nwhose index key will be ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId, entryId>"),"."),(0,a.yg)("h4",{id:"metadata-store"},"Metadata Store"),(0,a.yg)("h5",{id:"ledgermanager"},"LedgerManager"),(0,a.yg)("p",null,"All the interfaces should be updated with accepting ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),"."),(0,a.yg)("p",null,"The actual implementation should decide how to store metadata\nfor ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId>"),". "),(0,a.yg)("h6",{id:"zookeeper-ledger-manager"},"ZooKeeper Ledger Manager"),(0,a.yg)("p",null,"We need to introduce a LongLongHierarchicalLedgerManager for storing metadata\nindexing by ",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId>"),"."),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is 0, then it will be falling back to ",(0,a.yg)("inlineCode",{parentName:"p"},"LongHierarchicalLedgerManager"),".\nSo no behavior is changed."),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is not 0, those ledgers will be indexed in new hierarchy\n(possible under a different znode)."),(0,a.yg)("h6",{id:"ledger-id-generation"},"Ledger ID generation"),(0,a.yg)("p",null,"When upgrading from 64bit to 128bits, we probably don't need any centralized mechanism\nfor generating ledger id. It can be implemented using UUID generation."),(0,a.yg)("p",null,"Especially since we are supporting 128bits by introducing ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),". That means\napplication of bookkeeper can decide its own way for generating their ",(0,a.yg)("inlineCode",{parentName:"p"},"scopeId"),".\nAn application or even bookkeeper client can generate its ledgerId using UUID generation,\nthen breaks the 128 bits UUID into two parts, one serves as ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," and the other\none serves as ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerId"),"."),(0,a.yg)("h6",{id:"etcd"},"Etcd"),(0,a.yg)("p",null,"Since Etcd has a better key/value presentation, we can basically just combine\n",(0,a.yg)("inlineCode",{parentName:"p"},"<ledgerScopeId, ledgerId>")," as the index key for storing ledger metadata in Etcd.\nNothing is needed for special consideration."),(0,a.yg)("h3",{id:"performance-concerns"},"Performance Concerns"),(0,a.yg)("p",null,"There shouldn't be any performance difference when not using 128 bit ledger id\n(",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," is omitted)."),(0,a.yg)("p",null,"Performance concerns can be arisen in following areas:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Wire Protocol"),": additional 9 bytes will be added per entry, one byte for version\nand 8 bytes for the msb of 128 bit ledger id"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Journal"),": additional 9 bytes will be added per entry (same as wire protocol). "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"EntryLogger"),": additional 9 bytes will be added per entry (same as wire protocol)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Memtable"),": additional 8 bytes will be added per indexed entry."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"FileInfo"),": there is no change to the index file format itself."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"IndexPersistenceManager"),": Files will be organized in more directory hierarchy.\nIt shouldn't be a big deal. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"IndexInMemoryManager (LedgerCache)"),": additional 8 bytes per index page."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"DbLedgerStorage"),": additional 8 bytes per entry for entry location."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Metadata"),": on zookeeper, we need a 128 bit ledger manager, that means more znode\nhierarchy than 64 bit ledger manager. Etcd like key/value metadata store is probably\nmore preferable for 128 bit ledger manager.")),(0,a.yg)("p",null,"However increasing ledger id from 64 bits to 128 bits can get rid of the only remaining\ncentral point, since we don't need to use zookeeper for ledger id generation. The id\ngeneration can become decentralized. "),(0,a.yg)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,a.yg)("p",null,"All the required changes are described above. In summary, the changes can\nhappen in following 2 phases:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Ensure all components have ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId")," added (both wire protocol, storage and such).\nAssuming ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId")," will be 0. The changes can happen independently and ensure\nthey are backward compatible with old clients."),(0,a.yg)("li",{parentName:"ol"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId")," into public API, so application can start using ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId"),".\nAfter that, applications can use UUID to generate ledger id and break UUID into two parts,\none is ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId"),", while the other one is ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerId"),".")),(0,a.yg)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,a.yg)("p",null,"All the changes are backward compatible, since we are doing the changes by adding an optional\nfield ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId"),". Old clients can still operating in the mode of ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId == 0"),".\nThe new application can activate the feature by starting using ",(0,a.yg)("inlineCode",{parentName:"p"},"ledgerScopeId")," in the new API."),(0,a.yg)("h3",{id:"test-plan"},"Test Plan"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Add unit tests for individual components on introducing ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId"),"."),(0,a.yg)("li",{parentName:"ol"},"Add backward compatibility tests for individual components."),(0,a.yg)("li",{parentName:"ol"},"Add end-to-end integration tests for introducing ",(0,a.yg)("inlineCode",{parentName:"li"},"ledgerScopeId"),"."),(0,a.yg)("li",{parentName:"ol"},"Add end-to-end backward compatibility tests.")),(0,a.yg)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,a.yg)("p",null,"N/A"))}s.isMDXComponent=!0}}]);