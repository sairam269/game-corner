var dataBase;
function setup(){
	var config = {
      apiKey: "AIzaSyD_iLdJw0D9lkR4CCqiBtySBV_9J6RKP5o",
      authDomain: "gamecorner-798d9.firebaseapp.com",
      databaseURL: "https://gamecorner-798d9.firebaseio.com",
      projectId: "gamecorner-798d9",
      storageBucket: "",
      messagingSenderId: "693722441087"
    };
  	firebase.initializeApp(config);
  	var storage = firebase.storage();
  	dataBase=firebase.database();

  	var ref=dataBase.ref('scores/2048');
  	ref.on('value',gotData,errData;
}

function gotData(data){
	var data=data.val();
	var keys=Object.keys(data);
	for(var i=0;i<keys.length;i++){
		var key=keys[i];
		var li=createElement('li','');
		var score=createP(key);
		score.parent(li);
		li.parent('FBOL');
		//console.log(key);
	}
}

function errData(err){

}