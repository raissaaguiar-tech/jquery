 //$(document).ready(function () {

    // 1. MUDAR A FRASE — método .text()
    
   //$("#btn-texto").click(function () {
       // $("#frase").text("Texto alterado com jQuery! 🎉 O método .text() fez isso em uma linha.");
   // });

    // 2. ABRIR/FECHAR PAINEL — método .slideToggle()
  
   // $("#btn-slide").click(function () {
       // $("#painel").slideToggle(400);
   // });

   
    // 3. LISTA DE ITENS — eventos (clique no botão + tecla Enter)
    
    //$("#btn-add").click(adicionar);
    //$("#item").keydown(function (e) {
    //    if (e.key === "Enter") adicionar();
    //});
    
    // 4. REMOVER ITEM DA LISTA — delegação de eventos + .fadeOut()
    
  // $("#lista").on("click", "li", function () {
  //   $(this).fadeOut(300, function () {
           // $(this).remove();
       // });
   // });

    // 5. FUNÇÃO adicionar() — ação da lista
    
    //function adicionar() {
       // const texto = $("#item").val().trim();
       // if (texto !== "") {
           // $("#lista").append($("<li>").text(texto));
           // $("#item").val("").focus();
       // }
   // }
//});

    // 6. SAUDAÇÃO — validação + .addClass() / .removeClass()
    
    //$("#btn-ola").click(function () {
       // const nome = $("#nome").val().trim();
        //if (nome === "") {
          //  $("#saudacao").removeClass("ok").addClass("erro").text("⚠️ Digite seu nome!");
      //  } else {
          //  $("#saudacao").removeClass("erro").addClass("ok").text("Olá, " + nome + "! 😊");
      //  }
  //  });

    
    // 7. TEMA CLARO/ESCURO — .toggleClass() + .hasClass()
   
   // $("#tema").click(function () {
      //  $("body").toggleClass("escuro");
      //  const escuro = $("body").hasClass("escuro");
      //  $(this).text(escuro ? "☀️ Modo claro" : "🌙 Modo escuro");
   // });

    
    // 8. COPIAR CÓDIGO — Clipboard API + Promises
   
   // $(".btn-copiar").click(function () {
      //  const codigo = $(this).closest(".codigo-box").find("code").text();
      //  const btn = $(this);

      //  navigator.clipboard.writeText(codigo).then(function () {
         //   btn.text("✅ Copiado!");
        //    setTimeout(function () { btn.text("📋 Copiar"); }, 2000);
      //  }).catch(function () {
           // btn.text("⚠️ Copie manualmente");
            // setTimeout(function () { btn.text("📋 Copiar"); }, 2000);
      //});
 