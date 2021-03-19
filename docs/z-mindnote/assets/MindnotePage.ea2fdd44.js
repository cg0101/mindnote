import{j as t,v as e,o as n,b as s,k as i,i as o,p as l,f as a,r,g as d,F as c,h as p,l as h,e as m}from"./vendor.c863f697.js";import{u}from"./util.78725ff7.js";const f={name:"MindnoteInput",props:{value:Object},data(){return{isSelected:!1,message:this.value,styleObject:{width:"200px"}}},watch:{value:function(t,e){console.log("Prop changed: ",t," | was: ",e),this.message=this.value}},mounted(){this.checkWidth()},methods:{pressEnter:function(){console.log("input > pressEnter",this),this.$emit("hit-enter",this)},pressTab:function(){console.log("input > pressTab"),this.$emit("hit-tab",this)},pressDelete:function(){console.log("input > pressDelete"),""==this.value.name&&this.$emit("hit-delete",this)},hitInput:function(){console.log("hitInput"),this.checkWidth(),this.$emit("press-input",this.treeData)},checkWidth(){if(this.$refs&&this.$refs.inputElment){const t=6;let e=this.$refs.inputElment.offsetWidth;const n=this.$refs.inputElment.scrollWidth;n>e&&(e=n+t);window.innerWidth-e>50&&(this.styleObject.width=e+"px")}}}},g=o("data-v-12a857bc")(((o,l,a,r,d,c)=>t((n(),s("input",{class:{isSelected:d.isSelected},ref:"inputElment",autocomplete:"false",spellcheck:"false",onInput:l[1]||(l[1]=(...t)=>c.hitInput&&c.hitInput(...t)),onKeydown:[l[2]||(l[2]=i(((...t)=>c.pressEnter&&c.pressEnter(...t)),["enter"])),l[3]||(l[3]=i(((...t)=>c.pressTab&&c.pressTab(...t)),["tab"])),l[4]||(l[4]=i(((...t)=>c.pressDelete&&c.pressDelete(...t)),["delete"]))],"onUpdate:modelValue":l[5]||(l[5]=t=>d.message.name=t),style:d.styleObject},null,38)),[[e,d.message.name]])));f.render=g,f.__scopeId="data-v-12a857bc";const I={name:"MindnoteItem",components:{MindnoteInput:f},props:["item"],data(){return{isOpen:!0,value:this.item}},watch:{item:function(t,e){console.log("Prop changed: ",t," | was: ",e),this.value=this.item}},computed:{isFolder:function(){return this.value.children&&this.value.children.length}},methods:{toggle:function(){console.log("item > toggle"),this.isOpen=!this.isOpen},enterItem:function(t){console.log("item > enterItem",this,t),this.$emit("hit-enter",this)},tabItem:function(){console.log("item > tabItem"),this.$emit("hit-tab",this)},deleteItem:function(t){console.log("item > deleteItem",this,t),this.$emit("hit-delete",this)},inputContent:function(){console.log("item > inputContent",this),this.$emit("press-input")}}},v=o("data-v-2cf79249");l("data-v-2cf79249");const b={class:"line-item"},D=d("div",{class:"dot"},null,-1);a();const _=v(((t,e,i,o,l,a)=>{const c=r("mindnote-input");return n(),s("div",b,[d("div",{class:["bullet",{folder:!a.isFolder}],onClick:e[1]||(e[1]=(...t)=>a.toggle&&a.toggle(...t))},[D],2),d(c,{class:"line-content",value:l.value,onHitEnter:a.enterItem,onHitTab:a.tabItem,onHitDelete:a.deleteItem,onPressInput:a.inputContent,ref:"inputitem"},null,8,["value","onHitEnter","onHitTab","onHitDelete","onPressInput"])])}));I.render=_,I.__scopeId="data-v-2cf79249";const $={props:["propsitem"],components:{MindnoteItem:I},data:()=>({isOpen:!0,treeData:[{id:1,name:"Untitled"}]}),beforeMount(){this.propsitem&&this.propsitem.length?this.treeData=this.propsitem:this.treeData=[{id:1,name:"Untitled"}]},watch:{propsitem:function(t,e){console.log("Prop changed: ",t," | was: ",e),this.treeData=this.propsitem}},methods:{toggle(){console.log("child > toggle"),this.isOpen=!this.isOpen},enterItem(t){console.log("child > enterItem",this);const e=t._.vnode.key,n=t.$parent.treeData.length,s=e+1,i={id:n,name:"",remark:"",children:[]};this.treeData.splice(s,0,i),this.$nextTick((()=>this.$el.children[s].querySelector("input").focus()))},addSubitem(){console.log("child > addSubitem",this.treeData),this.$emit("add-subitem",this.treeData),this.isOpen=!0},tabItem(t){console.log("child > tabItem",t);const e=t._.vnode.key;if(e){const n=t._.vnode.key-1,s=t.$parent.treeData[n];s.children||(s.children=[]),s.children.push(t.value),t.$parent.treeData.splice(e,1),this.$emit("press-inputut"),setTimeout((()=>{this.$el.querySelector(".mindnote-children").querySelector("input").focus()}),100)}else console.log("child > tabItem > input > focus")},deleteItem(t){console.log("child > deleteItem",this.treeData);const e=t._.vnode.key;t.$parent.treeData.splice(e,1)},inputContent(){console.log("child > inputContent",this),this.$emit("press-inputut")}}},k=o("data-v-49f8b30b");l("data-v-49f8b30b");const y={class:"mindnote"},T={key:0,class:"mindnote-children"},E=d("div",{class:"mindnote-children__connection"},null,-1);a();const H=k(((e,i,o,l,a,u)=>{const f=r("mindnote-item"),g=r("_self");return n(),s("div",y,[(n(!0),s(c,null,p(a.treeData,((e,i)=>(n(),s("div",{key:i,ref:"treeData"},[d(f,{key:i,ref:"mindnoteTree",item:e,onHitEnter:u.enterItem,onHitTab:u.tabItem,onHitDelete:u.deleteItem,onPressInputut:u.inputContent},null,8,["item","onHitEnter","onHitTab","onHitDelete","onPressInputut"]),e.children&&e.children.length?t((n(),s("div",T,[E,d(g,{propsitem:e.children,onPressInputut:u.inputContent},null,8,["propsitem","onPressInputut"])],512)),[[h,a.isOpen]]):m("",!0)],512)))),128))])}));$.render=H,$.__scopeId="data-v-49f8b30b";const O={name:"MindnotePage",components:{Mindnote:$},props:["mindnoteId"],data:()=>({listItemData:[],rootItem:{name:"Untitled"}}),created(){this.getData(),this.$nextTick((()=>this.$refs.title.focus()))},methods:{getData(){const t=u.getLocalStorage(this.mindnoteId);this.listItemData=t},pressInput(){u.setLocalStorage(this.mindnoteId,this.listItemData)},onTitleChange(){}},mounted(){}},P=o("data-v-0a71d414");l("data-v-0a71d414");const w={class:"pape-mindnote"},S={class:"pape-mindnote__bd"},C={class:"pape-mindnote__bd__title"},j={type:"text",placeholder:"无标题",ref:"title",class:"input-title"},M={class:"pape-mindnote__bd__tree"};a();const x=P(((t,e,i,o,l,a)=>{const c=r("mindnote");return n(),s("div",w,[d("div",S,[d("div",C,[d("input",j,null,512)]),d("div",M,[d(c,{class:"mindnote",ref:"mindnote",propsitem:l.listItemData,onPressInput:a.pressInput},null,8,["propsitem","onPressInput"])])])])}));O.render=x,O.__scopeId="data-v-0a71d414";export default O;