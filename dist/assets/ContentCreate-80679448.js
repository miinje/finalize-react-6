import{b as _,r as t,j as e,_ as j}from"./vendor-87dae68f.js";import{u as D,p as m}from"./index-d6b096fb.js";import{P as E}from"./PageHead-90e47285.js";import{C as L,c as M}from"./data-b82a565e.js";import{S as O,c as U,M as q}from"./Map-e92b1f9c.js";const z="/finalize-react-6/assets/image-d581590f.svg";function B(){const v=_(),{user:y}=D(),[o,N]=t.useState(null),[f,x]=t.useState(),[w,R]=t.useState(),S=t.useRef(null),g=t.useRef(null),h=t.useRef(null),r=t.useRef(null),n=t.useRef(null),b=t.useRef(null),c=t.useRef(null),i=t.useRef(null);t.useEffect(()=>{x(c.current)},[i,c]);const C=a=>{const{files:p}=a.target,d=Array.from(p).map(s=>({image:URL.createObjectURL(s),label:s.name}));N(d)},F=async a=>{a.preventDefault();const p=g.current.value,d=h.current.value,s=b.current.files,T=n.current.value,V=r.current.value;n||j("태그를 선택해주세요.",{position:"top-center",icon:"🚨",ariaProps:{role:"alert","aria-live":"polite"}}),s[0]||j("사진을 등록해주세요.",{position:"top-center",icon:"🚨",ariaProps:{role:"alert","aria-live":"polite"}});const l=new FormData;l.append("title",p),l.append("content",d),l.append("location",c.current),l.append("address",i.current),l.append("tag",T),l.append("customTag",V),l.set("userId",m.authStore.model.id),s&&l.append("photo",s[0]);try{const u=await m.collection("content").create(l);u&&await m.collection("user").update(y.id,{"content+":u.id}),v("/content/list")}catch(u){console.error(u)}},P=()=>{r.current.value=r.current.value.replace(/(\s+)/g,"_")},A=a=>{n.current.value=a.value};return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Jeju All in One - 나만의 제주"}),e.jsx(L,{title:"제주, 나의 ⭐"}),e.jsx("form",{encType:"multipart/form-data",ref:S,onSubmit:F,className:"flex flex-col gap-2 items-center",children:e.jsxs("div",{className:"flex w-4/5 gap-6 mx-auto px-10 mt-10 mb-32 min-w-[1000px]",children:[e.jsxs("div",{className:"relative w-full flex-grow",children:[e.jsx("label",{htmlFor:"photo",className:"sr-only",children:"사진 등록"}),e.jsx("input",{type:"file",accept:"image/jpg,image/png,image/jpeg,image/webp,image/avif",name:"photo",id:"photo",ref:b,onChange:C,className:"absolute w-full h-full opacity-0 cursor-pointer"}),e.jsxs("div",{className:"flex gap-2 overflow-x-auto p-2 w-full min-w-[350px] h-full bg-slate-100",children:[!o&&e.jsx("img",{src:z,alt:"photo",className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}),o==null?void 0:o.map(a=>e.jsx("img",{src:a.image,alt:a.label,className:"m-auto bg-slate-100 max-h-[660px]"},a.label))]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-2 flex-grow",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"title",className:"sr-only",children:"제목"}),e.jsx("input",{type:"text",id:"title",name:"title",placeholder:"제목을 입력해주세요",ref:g,className:"w-full py-3 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-lightblue",required:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"content",className:"sr-only",children:"내용"}),e.jsx("textarea",{type:"text",id:"content",name:"content",placeholder:"내용을 입력해주세요",ref:h,className:"w-full py-3 px-4 min-h-[100px] border rounded-md border-gray focus:outline-none focus:border-lightblue",required:!0})]}),e.jsx(O,{className:"z-10",options:M,styles:U,ref:n,onChange:A,placeholder:"제주도 태그를 선택해주세요"}),e.jsx("input",{type:"text",ref:r,onChange:P,maxLength:30,className:"w-full py-3 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-lightblue",placeholder:"나만의 제주도 태그를 만들어주세요.(30자 이내, 예: #나의_사랑_제주도)"}),e.jsx(q,{ref:{placeNameRef:c,placeAddressRef:i},place:{placeName:f,placeAddress:w},setPlace:{setPlaceName:x,setPlaceAddress:R}}),e.jsx("div",{children:f}),e.jsx("button",{type:"submit",className:"text-white font-bold bg-lightblue px-4 py-3 rounded-md hover:bg-blue",children:"추억 등록"})]})]})})]})}export{B as default};
