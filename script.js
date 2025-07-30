document.addEventListener('DOMContentLoaded',()=>{
    const menuIcon=document.querySelector('.menu-icon');
    const rightMenu=document.querySelector('.right');

    menuIcon.addEventListener('click',()=>{
        rightMenu.classList.toggle('active');
    })

    rightMenu.querySelectorAll('a').forEach(link=>{
     link.addEventListener('click',()=>{
        rightMenu.classList.remove('active');
     })
    })
})

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector('.progress-fill-1').style.width='90%';
            document.querySelector('.progress-fill-2').style.width='70%';
            document.querySelector('.progress-fill-3').style.width='70%';
            document.querySelector('.progress-fill-4').style.width='50%';
            document.querySelector('.progress-fill-5').style.width='70%';
            document.querySelector('.progress-fill-6').style.width='80%';
            
            document.querySelectorAll('.circle-1').forEach(circle=>{
             const value=parseInt(circle.getAttribute('data-value'));
             let count=0;
             const text=circle.querySelector('.h3-1');

             const animate=setInterval(()=>{
                if(count<=value){
                text.innerText=`${count}%`;
                circle.style.background=`conic-gradient(#a855f7 ${count*3.6}deg,#1e293b ${count*3.6}deg)`;
                count++;
                }else{
                    clearInterval(animate);
                }
             },20);
            });

          document.querySelectorAll('#para-one').forEach(para=>{
            const value2=parseInt(para.getAttribute('data-value'));
            let count2=0;
            let text2=para;
                const animation=setInterval(()=>{
                     if(count2<=value2){
                    text2.innerText=`${count2}%`;
                    count2++;
                     }else{
                        clearInterval(animation);
                     }
           },20);
            });

            observer.disconnect();
        }
    });
},{threshold:0.5});// Trigger the animation when 50% of the section is visible
observer.observe(document.querySelector('.third-section'));
