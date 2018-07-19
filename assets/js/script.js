var c = document.getElementById("E2N");
var ctx = c.getContext("2d");
//E
ctx.beginPath();
ctx.moveTo(90,145);
ctx.lineTo(90,455);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90,145);
ctx.lineTo(195,145);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90,310);
ctx.lineTo(195,310);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90,455);
ctx.lineTo(195,455);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

//N
ctx.beginPath();
ctx.moveTo(695,145);
ctx.lineTo(695,455);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(445,145);
ctx.lineTo(445,455);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(445,145);
ctx.lineTo(695,455);
ctx.closePath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.stroke();
 //2
 ctx.beginPath();
 ctx.moveTo(195,145);
ctx.bezierCurveTo(420,-50,680,-50,130,555); // courbe avec un point de passage
ctx.lineCap = "round";
 ctx.lineWidth ="15";
 ctx.strokeStyle = "#EA4E1D";
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(133,555);
 ctx.quadraticCurveTo(250,510,340,505); // courbe avec un point de passage
 ctx.lineCap = "round";
 ctx.lineWidth = "15";
 ctx.strokeStyle = "#EA4E1D";
 ctx.stroke();

//hexagone
//1
ctx.beginPath(); // début de chemin
ctx.moveTo(780,145); //le tracé part du point 200,50
ctx.lineTo(760,165); //un segment est ajouté vers 100.150
ctx.lineTo(760,185); //un segment est ajouté vers 300.150
ctx.lineTo(780,205);
ctx.lineTo(800,185);
ctx.lineTo(800,165);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#EBEBEB"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//2
ctx.beginPath(); // début de chemin
ctx.moveTo(755,195); //le tracé part du point 200,50
ctx.lineTo(735,215); //un segment est ajouté vers 100.150
ctx.lineTo(735,235); //un segment est ajouté vers 300.150
ctx.lineTo(755,255);
ctx.lineTo(775,235);
ctx.lineTo(775,215);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#E9E9E9"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//3
ctx.beginPath(); // début de chemin
ctx.moveTo(810,195); //le tracé part du point 200,50
ctx.lineTo(790,215); //un segment est ajouté vers 100.150
ctx.lineTo(790,235); //un segment est ajouté vers 300.150
ctx.lineTo(810,255);
ctx.lineTo(830,235);
ctx.lineTo(830,215);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#595656"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//4
ctx.beginPath(); // début de chemin
ctx.moveTo(775,250); //le tracé part du point 200,50
ctx.lineTo(755,270); //un segment est ajouté vers 100.150
ctx.lineTo(755,290); //un segment est ajouté vers 300.150
ctx.lineTo(775,310);
ctx.lineTo(795,290);
ctx.lineTo(795,270);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#EA4E1A"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//5
ctx.beginPath(); // début de chemin
ctx.moveTo(755,300); //le tracé part du point 200,50
ctx.lineTo(735,320); //un segment est ajouté vers 100.150
ctx.lineTo(735,340); //un segment est ajouté vers 300.150
ctx.lineTo(755,360);
ctx.lineTo(775,340);
ctx.lineTo(775,320);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#878787"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//6
ctx.beginPath(); // début de chemin
ctx.moveTo(810,300); //le tracé part du point 200,50
ctx.lineTo(790,320); //un segment est ajouté vers 100.150
ctx.lineTo(790,340); //un segment est ajouté vers 300.150
ctx.lineTo(810,360);
ctx.lineTo(830,340);
ctx.lineTo(830,320);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#ECECEC"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//7
ctx.beginPath(); // début de chemin
ctx.moveTo(840,225); //le tracé part du point 200,50
ctx.lineTo(835,230); //un segment est ajouté vers 100.150
ctx.lineTo(835,235); //un segment est ajouté vers 300.150
ctx.lineTo(840,240);
ctx.lineTo(845,235);
ctx.lineTo(845,230);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#EFEFEF"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//8
ctx.beginPath(); // début de chemin
ctx.moveTo(845,240); //le tracé part du point 200,50
ctx.lineTo(840,245); //un segment est ajouté vers 100.150
ctx.lineTo(840,250); //un segment est ajouté vers 300.150
ctx.lineTo(845,255);
ctx.lineTo(850,250);
ctx.lineTo(850,245);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#CECECE"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé
//9
ctx.beginPath(); // début de chemin
ctx.moveTo(865,230); //le tracé part du point 200,50
ctx.lineTo(860,235); //un segment est ajouté vers 100.150
ctx.lineTo(865,240); //un segment est ajouté vers 300.150
ctx.lineTo(870,235);
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#EA4E1D"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé

//TEXTE
var text = 'Ecole du Numérique';
ctx.font = "30pt Verdana";
ctx.textAlign = "right";
ctx.textBaseline = "bottom";
ctx.fillStyle = "#8B8B8B";
ctx.fillText(text,860,500);
var text2 = 'du Noyonnais';
ctx.font = "30pt Verdana";
ctx.textAlign = "right";
ctx.textBaseline = "bottom";
ctx.fillStyle = "#8B8B8B";
ctx.fillText(text2,710,535);
