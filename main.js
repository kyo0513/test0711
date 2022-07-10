'use strict';                                       //エラーの出す範囲を広げる（作業しやくすなる）
//html作成部分の流れ
//××.innerHTML=　でhtmlの中身を記載している
//let tr=document.createElement('tr'); ・・・取得用の定義をあらかじめさくせい
//tr.innerHTML=`<td>${this.name}</td><td>${this.price}</td>`;　　・・・trの中身作成
//table.appendChild(tr);　　　　　　　　　　　　　　　 //テーブルへtr要素の追加
//tr.style.color='red';   ・・・trにスタイルをあてる

window.onload=function(){                           //画面読み込み後
	const name=document.getElementById('name');	    //各IDとかの取得
	const price=document.getElementById('price');	
	const btn=document.getElementById('btn');	
	const total=document.getElementById('total');	
	const table=document.getElementById('table');
    /*const td=document.getElementById('td');*/	
	class Fruit{
		constructor(name,price){                    //コンストラクタ
			this.name=name;
			this.price=price
		}
		showInfo(){
            let tr=document.createElement('tr');
            tr.innerHTML=`<td>${this.name}</td><td>${this.price}</td>`;
            table.appendChild(tr);
            /*table.style.backgroundColor = '#999999';*/
            if(parseInt(this.price) >= 1000){    //数字に直して判定
                tr.style.color='red';                           
            }                      
            const td=document.getElementById('td');	
            return 
        }
	}
	let fruits=[];
	btn.addEventListener('click',()=>{          //イベント管理　これはクリックされた時
		let fruit=new Fruit(name.value,price.value);
		fruits.push(fruit);                     //配列に追加
		name.value='';
		price.value='';
		createTable();
	});
	function createTable(){
		table.innerHTML='<tr><th>名前</th><th>価格</th></tr>';
        fruits.sort(function(a,b){              //降順ソート
            if(parseInt(a.price) < parseInt(b.price)){
                return 1;
            } else {
                return -1;
            }
        })
		for(let i=0;i<fruits.length;i++){
			/*let tr=document.createElement('tr');
            if(fruits[i].price <= 1000){
                document.getElementById("td").style.color = "red";                
            }            
			tr.innerHTML=fruits[i].showInfo();*/
            fruits[i].showInfo();
			/*table.appendChild(tr);*/
			total.textContent=`全${fruits.length}件`;
		}
	}
	createTable();
};
