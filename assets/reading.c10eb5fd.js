import"./styles.879ebca4.js";import{o as i,c as a,b as e,w as s,r as t,F as r,e as l,d as n}from"./vendor.75db89f3.js";const d={name:"FlipCard",props:["card","reverse"],data:()=>({flip:!1}),methods:{click(){this.flip||(this.flip=!0,this.emit())},emit(){this.$emit("flipped")}}},o=s("data-v-e0bd85a4")(((s,t,r,l,n,d)=>(i(),a("div",{class:["w-max relative my-12",{"cursor-pointer":!n.flip&&!s.flipRev}],onClick:t[1]||(t[1]=(...i)=>d.click&&d.click(...i))},[e("div",{id:"front",class:["front",{frontflip:n.flip&&!r.card.orientation,reversefrontflip:n.flip&&r.card.orientation}],style:{content:`url(/cards/${r.card.id}.jpg)`}},null,6),e("div",{class:["back absolute top-0",{backflip:n.flip||s.isReverse}]},null,2)],2))));d.render=o,d.__scopeId="data-v-e0bd85a4";const c={name:"ReadingApp",components:{FlipCard:d},data:()=>({cards:JSON.parse(localStorage.getItem("drawn")),cardsRemaining:3}),methods:{flip(){this.cardsRemaining--,this.cardsRemaining||setTimeout((function(){window.location.replace("../result/index.html")}),3e3)}}},p={class:"flex justify-around m-auto flex-wrap"};c.render=function(s,n,d,o,c,f){const m=t("FlipCard");return i(),a("div",p,[(i(!0),a(r,null,l(c.cards,(s=>(i(),a("div",{key:s.id},[e(m,{card:s,onFlipped:f.flip},null,8,["card","onFlipped"])])))),128))])},n(c).mount("#app");