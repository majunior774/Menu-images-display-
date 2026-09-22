const gallery=document.getElementById('gallery');
const filters=document.getElementById('filters');
const search=document.getElementById('search');
const resultCount=document.getElementById('resultCount');
const empty=document.getElementById('empty');
let activeCategory='All Items';
const categories=['All Items',...new Set(MENU_ITEMS.map(x=>x.category))];

categories.forEach(category=>{
  const btn=document.createElement('button');
  btn.className='filter'+(category===activeCategory?' active':'');
  btn.textContent=category;
  btn.addEventListener('click',()=>{
    activeCategory=category;
    document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.textContent===category));
    render();
  });
  filters.appendChild(btn);
});
function render(){
  const q=search.value.trim().toLowerCase();
  const filtered=MENU_ITEMS.filter(item=>(activeCategory==='All Items'||item.category===activeCategory)&&item.name.toLowerCase().includes(q));
  gallery.innerHTML='';
  filtered.forEach(item=>{
    const card=document.createElement('article');card.className='card';
    const img=document.createElement('img');img.src=item.image;img.alt=item.name;img.loading='lazy';
    const body=document.createElement('div');body.className='card-body';
    const cat=document.createElement('p');cat.className='category';cat.textContent=item.category;
    const title=document.createElement('h2');title.textContent=item.name;
    const price=document.createElement('p');price.className='price';price.textContent=item.price||'';
    const btn=document.createElement('button');btn.className='download';btn.textContent='↓  Download JPG';
    btn.addEventListener('click',()=>downloadFile(item.image,item.filename));
    body.append(cat,title,price,btn);card.append(img,body);gallery.appendChild(card);
  });
  resultCount.textContent=`Showing ${filtered.length} of ${MENU_ITEMS.length} menu items`;
  empty.hidden=filtered.length!==0;
}
function downloadFile(path,name){
  const a=document.createElement('a');a.href=path;a.download=name;document.body.appendChild(a);a.click();a.remove();
}
search.addEventListener('input',render);
document.getElementById('downloadAll').addEventListener('click',async()=>{
  const button=document.getElementById('downloadAll');
  if(typeof JSZip==='undefined'){alert('Bulk ZIP needs an internet connection. You can still download each JPG individually.');return;}
  button.disabled=true;button.textContent='Preparing ZIP...';
  try{
    const zip=new JSZip();const folder=zip.folder('indian-chicken-soup-menu-images');
    for(let i=0;i<MENU_ITEMS.length;i++){
      const item=MENU_ITEMS[i];
      const response=await fetch(item.image);
      folder.file(item.filename,await response.blob());
      button.textContent=`Adding ${i+1}/${MENU_ITEMS.length}...`;
    }
    const blob=await zip.generateAsync({type:'blob'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');
    a.href=url;a.download='indian-chicken-soup-menu-images.zip';a.click();URL.revokeObjectURL(url);
  }catch(e){alert('Could not prepare the ZIP. Please download individual images or open this folder through a local server.');}
  finally{button.disabled=false;button.textContent='Download all images (.ZIP)';}
});
render();
