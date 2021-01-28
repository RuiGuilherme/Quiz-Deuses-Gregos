  $(document).ready(function(){
      var ISA = 0; //Variavel para armazenar qual questão o código deve rodar
      //var deuses = ["demeter", "hera", "eros", "temis", "artemis", "apolo", "hermes", "ares", "dionisio", "hades", "persefone", "zeus", "poseidon", "cronnos", "atenas", "hestia", "afrodite"];
        //Sim, os deuses agora são simples variaveis. hahahaha
      var demeter = 0, hera = 0, eros = 0, temis = 0, artemis = 0, apolo = 0, hermes = 0, ares = 0, dionisio = 0, hades = 0, persefone = 0, zeus = 0, poseidon = 0, cronnos = 0, atenas = 0, hestia = 0, afrodite = 0;
	  $('#MyButton').click(function(){ //Função click "Botão PROXIMO"
      ISA++; //Na proxiam rodada o código vai rodar ISA + 1;
       Getresult($('input[name=answerGroup]:checked', '#myForm').val());//Chama a função com o valor do Radio
     });

   function Getresult(sResultado) {
        //GAMBIARRA
     if (sResultado != null && ISA == 11){
        document.getElementById("MyButton").innerHTML = "Finalizar"; //Atualiza na interface a questão
     }
     if (ISA == 12 && ISA <= 13){
        document.getElementById("MyButton").innerHTML = "Novo teste"; //Atualiza na interface a questão
     }
        //GAMBIARRA
     if (sResultado != null && ISA < 13) {
       Newquestion(); //Atualiza a interface
       switch (ISA) { //Aqui ele vai ver qual deus vai ganhar pontos.
          case 1:
          Pergunta1(sResultado);//Chama os bagulhos muito louco
            break;
          case 2:
          Pergunta2(sResultado);
            break;
          case 3:
          Pergunta3(sResultado);
            break;
          case 4:
          Pergunta4(sResultado);
            break;
          case 5:
          Pergunta5(sResultado);
            break;
          case 6:
          Pergunta6(sResultado);
            break;
          case 7:
          Pergunta7(sResultado);
            break;
          case 8:
          Pergunta8(sResultado);
            break;
          case 9:
          Pergunta9(sResultado);
            break;
          case 10:
          Pergunta10(sResultado);
            break;
          case 11:
          Pergunta11(sResultado);
            break;
          case 12:
          Pergunta12(sResultado);
            break;
         default:
         console.log("Ops! Deu merda. kkkkkkk");
            break;
          }
      //Adiciona os novos valores a interface do usuario
     }
     else {
        location.reload();
     }
   }

     function Newquestion(){
       ISA = ISA +1;//GAMBIARRA
       SetnewTEXT(ISA);
       if (ISA <13)
      document.getElementById("contador").innerHTML = ""+ ISA + " de 12"; //Atualiza na interface a questão
      ISA = ISA -1;//GAMBIARRA
      $("#firsts").prop("checked", true)
     }

     function SetnewTEXT(ISA){
       switch (ISA) { //Aqui ele vai ver qual deus vai ganhar pontos.
          case 1:
            //Código abaixo é uma quimera!
            break;
          case 2:
              $('#oitavo').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Com qual matéria vc tem mais afinidade?";
          document.getElementById("answerGroup_0").innerHTML = "Matemática";
          document.getElementById("answerGroup_1").innerHTML = "Português";
          document.getElementById("answerGroup_2").innerHTML = "Física";
          document.getElementById("answerGroup_3").innerHTML = "Química";
          document.getElementById("answerGroup_4").innerHTML = "Biologia";
          document.getElementById("answerGroup_5").innerHTML = "Artes";
          document.getElementById("answerGroup_6").innerHTML = "História";
          document.getElementById("answerGroup_7").innerHTML = "Educação física";
            break;
          case 3:
          //oitavo já foi liberado na questão anterior!
              $('#nono').removeClass('ocultarPergunta');
              $('#decimo').removeClass('ocultarPergunta');
              $('#decimoprimeiro').removeClass('ocultarPergunta');
              $('#decimosegundo').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Entre a área de medicina qual é a sua preferência?";
          document.getElementById("answerGroup_0").innerHTML = "Perícia";
          document.getElementById("answerGroup_1").innerHTML = "Veterinária";
          document.getElementById("answerGroup_2").innerHTML = "Psicologia";
          document.getElementById("answerGroup_3").innerHTML = "Pediatria";
          document.getElementById("answerGroup_4").innerHTML = "Geriatria";
          document.getElementById("answerGroup_5").innerHTML = "Farmácia";
          document.getElementById("answerGroup_6").innerHTML = "Medicina cirúrgica";
          document.getElementById("answerGroup_7").innerHTML = "Plástica";
          document.getElementById("answerGroup_8").innerHTML = "Tratamento natural";
          document.getElementById("answerGroup_9").innerHTML = "Não gosto de medicina, prefiro telecomunicações...";
          document.getElementById("answerGroup_10").innerHTML = "Não gosto de medicina, prefiro direito";
          document.getElementById("answerGroup_11").innerHTML = "Nada me interessa/outros";
            break;
          case 4:
              $('#sexto').addClass('ocultarPergunta');
              $('#setimo').addClass('ocultarPergunta');
              $('#oitavo').addClass('ocultarPergunta');
              $('#nono').addClass('ocultarPergunta');
              $('#decimo').addClass('ocultarPergunta');
              $('#decimoprimeiro').addClass('ocultarPergunta');
              $('#decimosegundo').addClass('ocultarPergunta');
              $('#decimoterceiro').addClass('ocultarPergunta');
              $('#decimoquarto').addClass('ocultarPergunta');
              $('#decimoquinto').addClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Você se considera alguém calmo?";
          document.getElementById("answerGroup_0").innerHTML = "Sim, a paciência é a minha qualidade!";
          document.getElementById("answerGroup_1").innerHTML = "Sim, raramente perco a paciência!";
          document.getElementById("answerGroup_2").innerHTML = "Mais ou menos, eu me irrito as vezes!";
          document.getElementById("answerGroup_3").innerHTML = "Não muito, me irrito com frequência!";
          document.getElementById("answerGroup_4").innerHTML = "Não tenho paciência nenhuma!";
            break;
          case 5:
              $('#sexto').removeClass('ocultarPergunta');
              $('#setimo').removeClass('ocultarPergunta');
              $('#oitavo').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu gênero de filme favorito?";
          document.getElementById("answerGroup_0").innerHTML = "Ação";
          document.getElementById("answerGroup_1").innerHTML = "Drama";
          document.getElementById("answerGroup_2").innerHTML = "Romance";
          document.getElementById("answerGroup_3").innerHTML = "Mistério";
          document.getElementById("answerGroup_4").innerHTML = "Suspense/terror";
          document.getElementById("answerGroup_5").innerHTML = "Ficção científica";
          document.getElementById("answerGroup_6").innerHTML = "Documentários";
          document.getElementById("answerGroup_7").innerHTML = "Animações";
            break;
          case 6:
              $('#setimo').addClass('ocultarPergunta');
              $('#oitavo').addClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual sua estação favorita?";
          document.getElementById("answerGroup_0").innerHTML = "Primavera";
          document.getElementById("answerGroup_1").innerHTML = "Verão";
          document.getElementById("answerGroup_2").innerHTML = "Outono";
          document.getElementById("answerGroup_3").innerHTML = "Inverno";
          document.getElementById("answerGroup_4").innerHTML = "Todas tem sua própria beleza";
          document.getElementById("answerGroup_5").innerHTML = "Não saio de casa então não faz diferença";
            break;
          case 7:
          $('#setimo').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu sonho?";
          document.getElementById("answerGroup_0").innerHTML = "Comandar um negócio";
          document.getElementById("answerGroup_1").innerHTML = "Ter bastante dinheiro e viajar o mundo";
          document.getElementById("answerGroup_2").innerHTML = "Encontrar amor verdadeiro";
          document.getElementById("answerGroup_3").innerHTML = "Criar uma família";
          document.getElementById("answerGroup_4").innerHTML = "Ser feliz";
          document.getElementById("answerGroup_5").innerHTML = "Ter meu Belo e próprio jardim";
          document.getElementById("answerGroup_6").innerHTML = "Ser imperador do mundo";
            break;
          case 8:
          $('#oitavo').removeClass('ocultarPergunta');
          $('#nono').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu animal favorito?";
          document.getElementById("answerGroup_0").innerHTML = "Coruja";
          document.getElementById("answerGroup_1").innerHTML = "Águia";
          document.getElementById("answerGroup_2").innerHTML = "Golfinho";
          document.getElementById("answerGroup_3").innerHTML = "Leão";
          document.getElementById("answerGroup_4").innerHTML = "Javali";
          document.getElementById("answerGroup_5").innerHTML = "Cachorro";
          document.getElementById("answerGroup_6").innerHTML = "Cobra";
          document.getElementById("answerGroup_7").innerHTML = "Todos os animais são legais";
          document.getElementById("answerGroup_8").innerHTML = "Sem animais, prefiro flores";
            break;
          case 9:
          $('#nono').addClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu passatempo favorito?";
          document.getElementById("answerGroup_0").innerHTML = "Escutar música";
          document.getElementById("answerGroup_1").innerHTML = "Praticar algum esporte";
          document.getElementById("answerGroup_2").innerHTML = "Brincar com animais";
          document.getElementById("answerGroup_3").innerHTML = "Ler um bom livro";
          document.getElementById("answerGroup_4").innerHTML = "Cuidar do meu jardim";
          document.getElementById("answerGroup_5").innerHTML = "Observar o clima, principalmente a chuva";
          document.getElementById("answerGroup_6").innerHTML = "Fazer compras";
          document.getElementById("answerGroup_7").innerHTML = "Jogar videogame";
            break;
          case 10:
          $('#nono').removeClass('ocultarPergunta');
          $('#decimo').removeClass('ocultarPergunta');
          $('#decimoprimeiro').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu maior medo?";
          document.getElementById("answerGroup_0").innerHTML = "Medo de altura";
          document.getElementById("answerGroup_1").innerHTML = "Medo de se afogar";
          document.getElementById("answerGroup_2").innerHTML = "Medo de perder a família";
          document.getElementById("answerGroup_3").innerHTML = "Medo de não encontrar um amor";
          document.getElementById("answerGroup_4").innerHTML = "Medo do escuro";
          document.getElementById("answerGroup_5").innerHTML = "Medo de sangue";
          document.getElementById("answerGroup_6").innerHTML = "Medo de ser traído";
          document.getElementById("answerGroup_7").innerHTML = "Medo de não conseguir um bom emprego";
          document.getElementById("answerGroup_8").innerHTML = "Medo de ficar muito doente";
          document.getElementById("answerGroup_9").innerHTML = "Medo de não conseguir ser feliz";
          document.getElementById("answerGroup_10").innerHTML = "Medo de animais";
            break;
          case 11:
          $('#oitavo').addClass('ocultarPergunta');
          $('#nono').addClass('ocultarPergunta');
          $('#decimo').addClass('ocultarPergunta');
          $('#decimoprimeiro').addClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu esporte favorito?";
          document.getElementById("answerGroup_0").innerHTML = "Arquearia";
          document.getElementById("answerGroup_1").innerHTML = "Natação";
          document.getElementById("answerGroup_2").innerHTML = "Futebol";
          document.getElementById("answerGroup_3").innerHTML = "Esgrima";
          document.getElementById("answerGroup_4").innerHTML = "Artes marciais";
          document.getElementById("answerGroup_5").innerHTML = "Atletismo";
          document.getElementById("answerGroup_6").innerHTML = "Nenhum prefiro assistir";
            break;
          case 12:
          $('#oitavo').removeClass('ocultarPergunta');
          document.getElementById("pergunta").innerHTML = "Qual seu local favorito?";
          document.getElementById("answerGroup_0").innerHTML = "Minha casa";
          document.getElementById("answerGroup_1").innerHTML = "Shopping";
          document.getElementById("answerGroup_2").innerHTML = "Os braços de alguém";
          document.getElementById("answerGroup_3").innerHTML = "Meu jardim";
          document.getElementById("answerGroup_4").innerHTML = "Algum lugar calmo junto a natureza";
          document.getElementById("answerGroup_5").innerHTML = "Quadra de esportes";
          document.getElementById("answerGroup_6").innerHTML = "Biblioteca";
          document.getElementById("answerGroup_7").innerHTML = "Qualquer lugar junto aos meus amigos";
            break;
         default:
         console.log("Ops! Deu merda. kkkkkkk");
            break;
          }
     }


//Aqui estão as funções das perguntas ISSO SE CHAMA GAMBIARRA!
//ATENÇÃO, ABAIXO EXISTE UM CÓDIGO PARA PESSOAS COM 18+, GAMBIARRA DE ALTO NÍVEL!

function Pergunta1(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
          demeter++;
          persefone++;
          hera++;
          eros++;
       break;
     case "2":
          zeus++;
          temis = 3;
       break;
     case "3":
          artemis++;
          apolo++;
          hermes++;
          ares++;
       break;
     case "4":
          dionisio++;
          demeter++;
       break;
     case "5":
          hades++;
          persefone++;
          zeus++;
          poseidon++;
          cronnos++;
          ares++;
       break;
     case "6":
          atenas++;
          temis++;
          hades++;
       break;
     case "7":
          atenas++;
          zeus++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta2(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
          atenas++;
       break;
     case "2":
          dionisio++;
          eros++;
          apolo++;
       break;
     case "3":
          atenas++;
          hades++
       break;
     case "4":
          persefone++;
          hestia++;
       break;
     case "5":
          demeter++;
          dionisio++;
       break;
     case "6":
          dionisio++;
          afrodite++;
       break;
     case "7":
          cronnos++;
          zeus++;
       break;
     case "8":
          artemis++;
          hermes++;
          ares++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta3(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
          hades++;
       break;
     case "2":
          artemis++;
       break;
     case "3":
          hestia++;
       break;
     case "4":
          apolo++;
       break;
     case "5":
          hera++;
       break;
     case "6":
          persefone++;
       break;
     case "7":
          ares++;
       break;
    case "8":
          afrodite++;
      break;
    case "9":
          demeter++;
      break;
    case "10":
          hermes++;
      break;
    case "11":
          temis++;
      break;
    case "12":
          //Nada me interessa?
      break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta4(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
          hestia++;
       break;
     case "2":
          atenas++;
       break;
     case "3":
          poseidon++;
          hades++;
       break;
     case "4":
          zeus++;
       break;
     case "5":
          ares++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta5(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
          ares++;
       break;
     case "2":
          hera++;
       break;
     case "3":
          afrodite++;
       break;
     case "4":
          artemis++;
       break;
     case "5":
          hades++;
       break;
     case "6":
          atenas++;
       break;
     case "7":
          temis++;
       break;
     case "8":
          apolo++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta6(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
	    dionisio++;
      afrodite++;
       break;
     case "2":
      poseidon++;
      apolo++;
       break;
     case "3":
      zeus++;
       break;
     case "4":
     hades++;
       break;
     case "5":
     demeter++;
       break;
     case "6":
     atenas++;
     temis++;
       break;
     case "7":
     //nada aqui????
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta7(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
      zeus++;
       break;
     case "2":
      hermes++;
       break;
     case "3":
      afrodite++
      eros++;
       break;
     case "4":
      hera++;
       break;
     case "5":
      apolo++;
       break;
     case "6":
      demeter++;
      persefone++;
       break;
     case "7":
      hades++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta8(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
        atenas++;
       break;
     case "2":
        zeus++
       break;
     case "3":
        poseidon++;
       break;
     case "4":
        apolo++;
       break;
     case "5":
        ares++;
       break;
     case "6":
        hades++;
       break;
     case "7":
        persefone++;
       break;
     case "8":
        artemis++;
       break;
     case "9":
        demeter++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta9(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
      apolo++;
       break;
     case "2":
      hermes++;
       break;
     case "3":
      artemis++;
       break;
     case "4":
      atenas++;
      temis++;
       break;
     case "5":
        demeter++;
        persefone++;
       break;
     case "6":
        zeus++;
        cronnos++;
       break;
     case "7":
        afrodite++;
        eros++;
       break;
     case "8":
        ares++
        hades++
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta10(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
      zeus--;
       break;
     case "2":
      poseidon--;
       break;
     case "3":
      hera--;
       break;
     case "4":
      afrodite--;
       break;
     case "5":
      hades--;
       break;
     case "6":
      ares--;
       break;
     case "7":
      cronnos--;
       break;
     case "8":
      atenas--;
       break;
     case "9":
      persefone--;
       break;
     case "10":
      apolo--;
     break;
     case "11":
      artemis--;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta11(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
        artemis++;
       break;
     case "2":
        poseidon++;
       break;
     case "3":
        hermes++;
       break;
     case "4":
        hades++;
        atenas++;
       break;
     case "5":
        ares++;
       break;
     case "6":
        hermes++;
       break;
     case "7":
        temis++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
}
function Pergunta12(sResultado){
  switch (sResultado) { //Aqui ele vai ver qual deus vai ganhar pontos.
     case "1":
        hera++;
        hades++;
       break;
     case "2":
        afrodite++;
       break;
     case "3":
        eros++;
       break;
     case "4":
        persefone++;
       break;
     case "5":
        demeter++;
        hestia++;
       break;
     case "6":
        hermes++;
       break;
     case "7":
        atenas++;
        temis++;
       break;
    default:
    console.log("Ops! Deu merda. kkkkkkk");
       break;
     }
     FINALDETUDO();
}
/*
demeter[0]
hera[1]
eros[2]
temis[3]
artemis[4]
apolo[5]
hermes[6]
ares[7]
dionisio[8]
hades[9]
persefone[10]
zeus[11]
poseidon[12]
cronnos[13]
atenas[14]
hestia[15]
afrodite[16]
*/
//Não leve a serio o código abaixo, foi apenas uma zoeira e eu sei que era possível fazer isso dentro de um for usando uma array e relacionando os valores com os nomes, não enche, plz!
function FINALDETUDO(){
  if (demeter > hera && demeter > eros && demeter > temis && demeter > artemis && demeter > apolo && demeter > hermes && demeter > ares && demeter > dionisio && demeter > hades && demeter > persefone && demeter > zeus && demeter > poseidon && demeter > cronnos && demeter > atenas && demeter > hestia && demeter > afrodite){
	  swal({
		  title: 'Demeter!',
		  text: ' É deusa da terra cultivada, das colheitas e das estações do ano.',
		  imageUrl: 'img/demeter.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Demeter',
		  animation: false
		})
  }
  else if (hera > eros && hera > temis && hera > artemis && hera > apolo && hera > hermes && hera > ares && hera > dionisio && hera > hades && hera > persefone && hera > zeus && hera > poseidon && hera > cronnos && hera > atenas && hera > hestia && hera > afrodite){
	  swal({
		  title: 'Hera!',
		  text: 'É a deusa das bodas, da maternidade, e das esposas! Símbolo da fertilidade, sangue e morte, e substituto das cápsulas da papoula de ópio.',
		  imageUrl: 'img/hera.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Hera',
		  animation: false
		})
  }
  else if (eros > temis && eros > artemis && eros > apolo && eros > hermes && eros > ares && eros > dionisio && eros > hades && eros > persefone && eros > zeus && eros > poseidon && eros > cronnos && eros > atenas && eros > hestia && eros > afrodite){
	  swal({
		  title: 'Eros!',
		  text: 'Era o deus do amor e do erotismo. Tinha o papel unificador e coordenador dos elementos, contribuindo para a passagem do caos ao cosmos',
		  imageUrl: 'img/eros.png',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Eros',
		  animation: false
		})
  }
  else if (temis > artemis && temis > apolo && temis > hermes && temis > ares && temis > dionisio && temis > hades && temis > persefone && temis > zeus && temis > poseidon && temis > cronnos && temis > atenas && temis > hestia && temis > afrodite){
	  swal({
		  title: 'Temis!',
		  text: 'Era a deusa-guardiã dos juramentos dos homens e da lei! Seu nome significa "aquela que é posta, colocada".',
		  imageUrl: 'img/temis.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Temis',
		  animation: false
		})
  }
  else if (artemis > apolo && artemis > hermes && artemis > ares && artemis > dionisio && artemis > hades && artemis > persefone && artemis > zeus && artemis > poseidon && artemis > cronnos && artemis > atenas && artemis > hestia && artemis > afrodite){
	  swal({
		  title: 'Artemis!',
		  text: 'Ártemis é deusa da lua, da caça, dos animais selvagens, da região selvagem, do parto e da virgindade e protetora das meninas na antiga religião grega.',
		  imageUrl: 'img/artemis.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Artemis',
		  animation: false
		})
  }
  else if (apolo > hermes && apolo > ares && apolo > dionisio && apolo > hades && apolo > persefone && apolo > zeus && apolo > poseidon && apolo > cronnos && apolo > atenas && apolo > hestia && apolo > afrodite){
	  swal({
		  title: 'Apolo!',
		  text: ' Era descrito como o deus da divina distância, que ameaçava ou protegia desde o alto dos céus, sendo identificado como o sol e a luz da verdade',
		  imageUrl: 'img/apolo.png',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Apolo',
		  animation: false
		})
  }
  else if (hermes > ares && hermes > dionisio && hermes > hades && hermes > persefone && hermes > zeus && hermes > poseidon && hermes > cronnos && hermes > atenas && hermes > hestia && hermes > afrodite){
	  swal({
		  title: 'Hermes!',
		  text: 'Era o deus da fertilidade, dos rebanhos, da magia, da divinação, das estradas e viagens, entre outros atributos.',
		  imageUrl: 'img/hermes.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Hermes',
		  animation: false
		})
  }
  else if (ares > dionisio && ares > hades && ares > persefone && ares > zeus && ares > poseidon && ares > cronnos && ares > atenas && ares > hestia && ares > afrodite){
	  swal({
		  title: 'Ares!',
		  text: 'Era o deus da guerra selvagem, sede de sangue, ou matança personificada.',
		  imageUrl: 'img/ares.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Ares',
		  animation: false
		})
  }
  else if (dionisio > hades && dionisio > persefone && dionisio > zeus && dionisio > poseidon && dionisio > cronnos && dionisio > atenas && dionisio > hestia && dionisio > afrodite){
	  swal({
		  title: 'Dionisio!',
		  text: ' Era o deus dos ciclos vitais, das festas, do vinho, da insânia, do teatro, dos ritos religiosos, também simboliza tudo o que é caótico, perigoso e inesperado,',
		  imageUrl: 'img/dionisio.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Dionisio',
		  animation: false
		})
  }
  else if (hades > persefone && hades > zeus && hades > poseidon && hades > cronnos && hades > atenas && hades > hestia && hades > afrodite){
	  swal({
		  title: 'Hades!',
		  text: 'É o deus do mundo inferior e dos mortos, o deus de obscura!',
		  imageUrl: 'img/hades.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Hades',
		  animation: false
		})
  }
  else if (persefone > zeus && persefone > poseidon && persefone > cronnos && persefone > atenas && persefone > hestia && persefone > afrodite){
	  swal({
		  title: 'Persefone!',
		  text: 'Era a deusa das ervas, flores, frutos e perfumes. ',
		  imageUrl: 'img/persefone.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Persefone',
		  animation: false
		})
  }
  else if (zeus > poseidon && zeus > cronnos && zeus > atenas && zeus > hestia && zeus > afrodite){
	  swal({
		  title: 'Zeus!',
		  text: 'É o deus dos céus, raios, relâmpago que mantêm a ordem e justiça na mitologia grega.',
		  imageUrl: 'img/zeus.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Zeus',
		  animation: false
		})
  }
  else if (poseidon > cronnos && poseidon > atenas && poseidon > hestia && poseidon > afrodite){
	  swal({
		  title: 'Poseidon!',
		  text: 'Era conhecido como o deus dos terremotos, dos  mares, sendo irmão de Zeus!',
		  imageUrl: 'img/poseidon.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Poseidon',
		  animation: false
		})
  }
  else if (cronnos > atenas && cronnos > hestia && cronnos > afrodite){
	  	  	  		swal({
		  title: 'Cronos!',
		  text: 'Era o rei dos titãs e o grande deus do tempo, sobretudo quando este é visto em seu aspecto destrutivo.',
		  imageUrl: 'img/cronnos.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'cronnos',
		  animation: false
		})
  }
  else if (atenas > hestia && atenas > afrodite){
	  	  		swal({
		  title: 'Atena!',
		  text: ' Ela era a deusa da civilização, da sabedoria, da estratégia em batalha, das artes, da justiça e da habilidade. Exerceu profunda influência sobre o pensamento grego, em especial nos conceitos relativos à justiça, à sabedoria e à função civilizadora da cultura e das artes',
		  imageUrl: 'img/atenas.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Atena',
		  animation: false
		})
  }
  else if (hestia > afrodite){
	  	  		swal({
		  title: 'Hestia!',
		  text: 'Ela era a deusa virgem grega do lar, lareira, arquitetura, vida doméstica, família e estado.  Era a personificação da moradia estável, onde as pessoas se reuniam para orar e oferecer sacrifícios aos deuses. Era adorada como protetora das cidades, das famílias e das colônias.',
		  imageUrl: 'img/hestia.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Hestia',
		  animation: false
		})
  }
  else {
	  		swal({
		  title: 'Afrodite!',
		  text: 'É a deusa do amor, da beleza e do sexo! Responsável pela perpetuação da vida, prazer e alegria.',
		  imageUrl: 'img/afrodite.jpg',
		  imageWidth: 300,
		  imageHeight: 300,
		  imageAlt: 'Afrodite',
		  animation: false
		})
  }
}
  });
