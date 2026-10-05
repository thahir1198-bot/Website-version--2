const modal=document.getElementById('estimateModal');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
function openEstimate(e){if(e)e.preventDefault();if(!modal)return;modal.classList.add('show');document.body.style.overflow='hidden'}
function closeEstimate(){if(!modal)return;modal.classList.remove('show');document.body.style.overflow=''}
if(modal){modal.addEventListener('click',e=>{if(e.target===modal)closeEstimate()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeEstimate()})}
function submitEstimate(e){e.preventDefault();const f=e.target;const body=`Name: ${f.name.value}\nMobile: ${f.mobile.value}\nProject / Site: ${f.location.value}\nService: ${f.service.value}\nRequirement: ${f.message.value}`;window.location.href='mailto:exbuildinfra@gmail.com?subject='+encodeURIComponent('EX.BUILD INFRA Consultation Enquiry')+'&body='+encodeURIComponent(body)}
