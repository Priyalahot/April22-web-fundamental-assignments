let h1_Ref = document.getElementById('msg');
        let gmbtn_Ref = document.getElementById('gmbtn');
        let gebtn_Ref = document.getElementById('gebtn');
        let gnbtn_Ref = document.getElementById('gnbtn');

        let btn;

        // function change(){
        //     if(gmbtn_Ref.id==='gmbtn'){
        //         h1_Ref = "Good Morning,Geekster!";
        //         document.getElementById('msg').innerText = h1_Ref;
        //     }
        //     else if(gebtn_Ref.id==='gebtn'){
        //         h1_Ref ="Good Evening,Geekster!";
        //         document.getElementById('msg').innerText = h1_Ref;
        //     }
        //     else if(gnbtn_Ref.id==='gnbtn'){
        //         h1_Ref ="Good Night,Geekster!";
        //         document.getElementById('msg').innerText = h1_Ref;
        //     }
        //     else{
        //         h1_Ref="";
        //     }
        //     // document.getElementById('msg').innerText = h1_Ref;
        // }
        
        function change1(){
            h1_Ref = "Good Morning,Geekster!";
            document.getElementById('msg').innerText = h1_Ref;
            document.getElementById('emoji').innerHTML = "&#x1F603;";
            
        }
        function change2(){
            h1_Ref = "Good Evening,Geekster!";
            document.getElementById('msg').innerText = h1_Ref;
            document.getElementById('emoji').innerHTML = "&#x1F60A;";
        }
        function change3(){
            h1_Ref = "Good Night,Geekster!";
            document.getElementById('msg').innerText = h1_Ref;
            document.getElementById('emoji').innerHTML = "&#x1F634;";
        }
        


