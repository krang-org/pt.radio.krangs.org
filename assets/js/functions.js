window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Macedo Eireli",
      "url": "./commercials/pt-PT/instala-es-e-servi-os-recreativos/macedo-eireli/1673478693419/commercial.mp3",
      "artist": "Instala Es E Servi Os Recreativos",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Oliveira Santos",
      "url": "./commercials/pt-PT/jornais/oliveira-santos/1673478928971/commercial.mp3",
      "artist": "Jornais",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Silva Barros E Santos",
      "url": "./commercials/pt-PT/armazenagem/silva-barros-e-santos/1673478643028/commercial.mp3",
      "artist": "Armazenagem",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Costa Ara Jo",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-de-cuidado-com-a-pele/costa-ara-jo/1673475893995/commercial.mp3",
      "artist": "Fabricantes De Produtos De Cuidado Com A Pele",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Oliveira S A ",
      "url": "./commercials/pt-PT/fabricantes-de-equipamentos-m-dicos/oliveira-s-a/1673480482314/commercial.mp3",
      "artist": "Fabricantes De Equipamentos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Santos Carvalho E Martins",
      "url": "./commercials/pt-PT/capital-de-risco-e-private-equity/santos-carvalho-e-martins/1673477099414/commercial.mp3",
      "artist": "Capital De Risco E Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Moraes Albuquerque",
      "url": "./commercials/pt-PT/bibliotecas/moraes-albuquerque/1673478848698/commercial.mp3",
      "artist": "Bibliotecas",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Barros Reis E Albuquerque",
      "url": "./commercials/pt-PT/design/barros-reis-e-albuquerque/1673477004161/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Saraiva Pereira E Albuquerque",
      "url": "./commercials/pt-PT/marketing-e-publicidade/saraiva-pereira-e-albuquerque/1673479946561/commercial.mp3",
      "artist": "Marketing E Publicidade",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Batista Melo",
      "url": "./commercials/pt-PT/cuidados-hospitalares-e-de-sa-de/batista-melo/1673475332339/commercial.mp3",
      "artist": "Cuidados Hospitalares E De Sa De",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Xavier Batista",
      "url": "./commercials/pt-PT/farmac-utica/xavier-batista/1673478872452/commercial.mp3",
      "artist": "Farmac Utica",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Pereira Costa E Batista",
      "url": "./commercials/pt-PT/produtos-de-consumo/pereira-costa-e-batista/1673479336485/commercial.mp3",
      "artist": "Produtos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Ara Jo Nogueira",
      "url": "./commercials/pt-PT/institui-es-religiosas/ara-jo-nogueira/1673478615222/commercial.mp3",
      "artist": "Institui Es Religiosas",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Est Ves Est Ves E Moreira",
      "url": "./commercials/pt-PT/servi-os-de-sa-de/est-ves-est-ves-e-moreira/1673479348767/commercial.mp3",
      "artist": "Servi Os De Sa De",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Oliveira Ara Jo E Moreira",
      "url": "./commercials/pt-PT/hardware-de-computador/oliveira-ara-jo-e-moreira/1673479541564/commercial.mp3",
      "artist": "Hardware De Computador",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Batista Macedo E Souza",
      "url": "./commercials/pt-PT/eletr-nicos-de-consumo/batista-macedo-e-souza/1673477422469/commercial.mp3",
      "artist": "Eletr Nicos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Martins Ltda",
      "url": "./commercials/pt-PT/tecnologia-da-informa-o-e-servi-os/martins-ltda/1673476906284/commercial.mp3",
      "artist": "Tecnologia Da Informa O E Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Est Ves Albuquerque",
      "url": "./commercials/pt-PT/produtos-farmac-uticos/est-ves-albuquerque/1673477316234/commercial.mp3",
      "artist": "Produtos Farmac Uticos",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Martins Ara Jo E D Cruze",
      "url": "./commercials/pt-PT/transporte-caminh-es-ferrovias/martins-ara-jo-e-d-cruze/1673475322622/commercial.mp3",
      "artist": "Transporte Caminh Es Ferrovias",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Moreira Eireli",
      "url": "./commercials/pt-PT/publica-o/moreira-eireli/1673478670543/commercial.mp3",
      "artist": "Publica O",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Lemos Ltda",
      "url": "./commercials/pt-PT/marketing-e-publicidade/lemos-ltda/1673476226893/commercial.mp3",
      "artist": "Marketing E Publicidade",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Franco Melo",
      "url": "./commercials/pt-PT/organiza-o-pol-tica/franco-melo/1673477293469/commercial.mp3",
      "artist": "Organiza O Pol Tica",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Souza Albuquerque",
      "url": "./commercials/pt-PT/dispositivos-m-dicos/souza-albuquerque/1673478632613/commercial.mp3",
      "artist": "Dispositivos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Moreira Pereira",
      "url": "./commercials/pt-PT/servi-os/moreira-pereira/1673478255383/commercial.mp3",
      "artist": "Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Souza Saraiva E Carvalho",
      "url": "./commercials/pt-PT/farmac-utica/souza-saraiva-e-carvalho/1673480195258/commercial.mp3",
      "artist": "Farmac Utica",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Costa Batista E Franco",
      "url": "./commercials/pt-PT/cosm-ticos/costa-batista-e-franco/1673478141173/commercial.mp3",
      "artist": "Cosm Ticos",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Barros Carvalho",
      "url": "./commercials/pt-PT/fabricantes-de-artigos-de-jardinagem/barros-carvalho/1673479315800/commercial.mp3",
      "artist": "Fabricantes De Artigos De Jardinagem",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Ara Jo Moraes E Xavier",
      "url": "./commercials/pt-PT/jogos-de-azar-cassinos/ara-jo-moraes-e-xavier/1673479375676/commercial.mp3",
      "artist": "Jogos De Azar Cassinos",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Santos Saraiva",
      "url": "./commercials/pt-PT/design/santos-saraiva/1673475937923/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Moreira Braga",
      "url": "./commercials/pt-PT/seguran-a-p-blica/moreira-braga/1673479561093/commercial.mp3",
      "artist": "Seguran A P Blica",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Silva Lemos E Carvalho",
      "url": "./commercials/pt-PT/fabricantes-de-equipamentos-m-dicos/silva-lemos-e-carvalho/1673480218707/commercial.mp3",
      "artist": "Fabricantes De Equipamentos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Ara Jo Oliveira E Martins",
      "url": "./commercials/pt-PT/capital-de-risco-e-private-equity/ara-jo-oliveira-e-martins/1673479166669/commercial.mp3",
      "artist": "Capital De Risco E Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "D Cruze Eireli",
      "url": "./commercials/pt-PT/rela-es-p-blicas-e-comunica-es/d-cruze-eireli/1673479940408/commercial.mp3",
      "artist": "Rela Es P Blicas E Comunica Es",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Santos Barros E Barros",
      "url": "./commercials/pt-PT/fabricantes-de-cosm-ticos/santos-barros-e-barros/1673479746573/commercial.mp3",
      "artist": "Fabricantes De Cosm Ticos",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Pereira Xavier",
      "url": "./commercials/pt-PT/educa-o-superior/pereira-xavier/1673477802380/commercial.mp3",
      "artist": "Educa O Superior",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Est Ves Lemos E Silva",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-de-papel/est-ves-lemos-e-silva/1673476836669/commercial.mp3",
      "artist": "Fabricantes De Produtos De Papel",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Franco Macedo E Carvalho",
      "url": "./commercials/pt-PT/semicondutores/franco-macedo-e-carvalho/1673475426528/commercial.mp3",
      "artist": "Semicondutores",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Albuquerque E Associados",
      "url": "./commercials/pt-PT/turismo-e-entretenimento/albuquerque-e-associados/1673480352746/commercial.mp3",
      "artist": "Turismo E Entretenimento",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Albuquerque Franco E Santos",
      "url": "./commercials/pt-PT/angaria-o-de-fundos/albuquerque-franco-e-santos/1673478302689/commercial.mp3",
      "artist": "Angaria O De Fundos",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Carvalho S A ",
      "url": "./commercials/pt-PT/engenharia-mec-nica/carvalho-s-a/1673479497114/commercial.mp3",
      "artist": "Engenharia Mec Nica",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "D Cruze Martins E Carvalho",
      "url": "./commercials/pt-PT/angaria-o-de-fundos/d-cruze-martins-e-carvalho/1673479489908/commercial.mp3",
      "artist": "Angaria O De Fundos",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Souza E Associados",
      "url": "./commercials/pt-PT/produtos-de-consumo/souza-e-associados/1673478799252/commercial.mp3",
      "artist": "Produtos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Souza Com Rcio",
      "url": "./commercials/pt-PT/judici-rio/souza-com-rcio/1673480320638/commercial.mp3",
      "artist": "Judici Rio",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "D Cruze Macedo E Oliveira",
      "url": "./commercials/pt-PT/judici-rio/d-cruze-macedo-e-oliveira/1673479482657/commercial.mp3",
      "artist": "Judici Rio",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Est Ves Nogueira",
      "url": "./commercials/pt-PT/tradu-o-e-localiza-o/est-ves-nogueira/1673480071068/commercial.mp3",
      "artist": "Tradu O E Localiza O",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Lemos Barros",
      "url": "./commercials/pt-PT/rela-es-p-blicas-e-comunica-es/lemos-barros/1673478676804/commercial.mp3",
      "artist": "Rela Es P Blicas E Comunica Es",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Costa Eireli",
      "url": "./commercials/pt-PT/entrega-frete/costa-eireli/1673478687462/commercial.mp3",
      "artist": "Entrega Frete",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Est Ves Albuquerque",
      "url": "./commercials/pt-PT/m-dia-online/est-ves-albuquerque/1673480224955/commercial.mp3",
      "artist": "M Dia Online",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Lemos Eireli",
      "url": "./commercials/pt-PT/pr-tica-m-dica/lemos-eireli/1673478316655/commercial.mp3",
      "artist": "Pr Tica M Dica",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Moraes Moraes E Barros",
      "url": "./commercials/pt-PT/transporte-caminh-es-ferrovias/moraes-moraes-e-barros/1673478135135/commercial.mp3",
      "artist": "Transporte Caminh Es Ferrovias",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Ara Jo Com Rcio",
      "url": "./commercials/pt-PT/transporte-e-transporte-mar-timo/ara-jo-com-rcio/1673480058833/commercial.mp3",
      "artist": "Transporte E Transporte Mar Timo",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Oliveira Ltda",
      "url": "./commercials/pt-PT/fabricantes-de-equipamentos-m-dicos/oliveira-ltda/1673480533378/commercial.mp3",
      "artist": "Fabricantes De Equipamentos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Lemos Saraiva E Batista",
      "url": "./commercials/pt-PT/marketing-e-publicidade/lemos-saraiva-e-batista/1673479342977/commercial.mp3",
      "artist": "Marketing E Publicidade",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Costa Macedo",
      "url": "./commercials/pt-PT/fabricantes-de-artigos-para-a-casa-e-jardim/costa-macedo/1673476446351/commercial.mp3",
      "artist": "Fabricantes De Artigos Para A Casa E Jardim",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Batista D Cruze E Pereira",
      "url": "./commercials/pt-PT/fabricantes-de-t-xteis-e-vestu-rio/batista-d-cruze-e-pereira/1673480520789/commercial.mp3",
      "artist": "Fabricantes De T Xteis E Vestu Rio",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Costa Souza E Carvalho",
      "url": "./commercials/pt-PT/ind-stria-qu-mica/costa-souza-e-carvalho/1673477326649/commercial.mp3",
      "artist": "Ind Stria Qu Mica",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Martins Moraes",
      "url": "./commercials/pt-PT/capital-de-risco-e-private-equity/martins-moraes/1673478107053/commercial.mp3",
      "artist": "Capital De Risco E Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Nogueira S A ",
      "url": "./commercials/pt-PT/m-dia-online/nogueira-s-a/1673478891702/commercial.mp3",
      "artist": "M Dia Online",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Martins Ara Jo",
      "url": "./commercials/pt-PT/supermercados/martins-ara-jo/1673477516745/commercial.mp3",
      "artist": "Supermercados",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Martins Moraes E Barros",
      "url": "./commercials/pt-PT/assuntos-internacionais/martins-moraes-e-barros/1673480504403/commercial.mp3",
      "artist": "Assuntos Internacionais",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Macedo Braga E Saraiva",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-para-animais-de-estima-o/macedo-braga-e-saraiva/1673476440939/commercial.mp3",
      "artist": "Fabricantes De Produtos Para Animais De Estima O",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Melo Santos E Reis",
      "url": "./commercials/pt-PT/software-de-computador/melo-santos-e-reis/1673478113941/commercial.mp3",
      "artist": "Software De Computador",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Oliveira E Associados",
      "url": "./commercials/pt-PT/servi-os/oliveira-e-associados/1673478650852/commercial.mp3",
      "artist": "Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Reis Oliveira E Xavier",
      "url": "./commercials/pt-PT/fabricantes-de-artigos-para-a-casa-e-jardim/reis-oliveira-e-xavier/1673478423334/commercial.mp3",
      "artist": "Fabricantes De Artigos Para A Casa E Jardim",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Ara Jo Ltda",
      "url": "./commercials/pt-PT/dispositivos-m-dicos/ara-jo-ltda/1673476884949/commercial.mp3",
      "artist": "Dispositivos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Oliveira Martins E Martins",
      "url": "./commercials/pt-PT/consultoria-de-gest-o/oliveira-martins-e-martins/1673480549561/commercial.mp3",
      "artist": "Consultoria De Gest O",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Lemos Xavier",
      "url": "./commercials/pt-PT/linhas-a-reas-avia-o/lemos-xavier/1673478842319/commercial.mp3",
      "artist": "Linhas A Reas Avia O",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Reis Ltda",
      "url": "./commercials/pt-PT/fabricantes-de-alimentos-e-bebidas/reis-ltda/1673477816621/commercial.mp3",
      "artist": "Fabricantes De Alimentos E Bebidas",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Lemos Eireli",
      "url": "./commercials/pt-PT/fabricantes-de-equipamentos-de-limpeza/lemos-eireli/1673480047590/commercial.mp3",
      "artist": "Fabricantes De Equipamentos De Limpeza",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Reis S A ",
      "url": "./commercials/pt-PT/pesquisa-de-mercado/reis-s-a/1673479954749/commercial.mp3",
      "artist": "Pesquisa De Mercado",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "D Cruze Silva",
      "url": "./commercials/pt-PT/meio-ambiente-e-fontes-renov-veis/d-cruze-silva/1673478599937/commercial.mp3",
      "artist": "Meio Ambiente E Fontes Renov Veis",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Barros E Associados",
      "url": "./commercials/pt-PT/produtos-farmac-uticos/barros-e-associados/1673478149735/commercial.mp3",
      "artist": "Produtos Farmac Uticos",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Ara Jo Com Rcio",
      "url": "./commercials/pt-PT/escrit-rio-legislativo/ara-jo-com-rcio/1673476457643/commercial.mp3",
      "artist": "Escrit Rio Legislativo",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Albuquerque Souza E Costa",
      "url": "./commercials/pt-PT/organiza-o-pol-tica/albuquerque-souza-e-costa/1673475909183/commercial.mp3",
      "artist": "Organiza O Pol Tica",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Ara Jo Macedo",
      "url": "./commercials/pt-PT/servi-os/ara-jo-macedo/1673479356319/commercial.mp3",
      "artist": "Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Ara Jo E Associados",
      "url": "./commercials/pt-PT/organiza-o-pol-tica/ara-jo-e-associados/1673480329188/commercial.mp3",
      "artist": "Organiza O Pol Tica",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Silva Santos",
      "url": "./commercials/pt-PT/servi-os-financeiros/silva-santos/1673478120348/commercial.mp3",
      "artist": "Servi Os Financeiros",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Est Ves Carvalho",
      "url": "./commercials/pt-PT/telecomunica-es/est-ves-carvalho/1673480088481/commercial.mp3",
      "artist": "Telecomunica Es",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Melo Ltda",
      "url": "./commercials/pt-PT/administra-o-governamental/melo-ltda/1673476728516/commercial.mp3",
      "artist": "Administra O Governamental",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Silva Xavier E Braga",
      "url": "./commercials/pt-PT/marinha/silva-xavier-e-braga/1673477194686/commercial.mp3",
      "artist": "Marinha",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Carvalho Est Ves",
      "url": "./commercials/pt-PT/transporte-e-transporte-mar-timo/carvalho-est-ves/1673479153332/commercial.mp3",
      "artist": "Transporte E Transporte Mar Timo",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Costa E Associados",
      "url": "./commercials/pt-PT/produtos-de-consumo/costa-e-associados/1673478163945/commercial.mp3",
      "artist": "Produtos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Santos S A ",
      "url": "./commercials/pt-PT/meio-ambiente-e-fontes-renov-veis/santos-s-a/1673479046753/commercial.mp3",
      "artist": "Meio Ambiente E Fontes Renov Veis",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Nogueira S A ",
      "url": "./commercials/pt-PT/servi-os-empresariais/nogueira-s-a/1673476866574/commercial.mp3",
      "artist": "Servi Os Empresariais",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Braga Ara Jo",
      "url": "./commercials/pt-PT/escrit-rio-executivo/braga-ara-jo/1673479549003/commercial.mp3",
      "artist": "Escrit Rio Executivo",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Oliveira Silva E Braga",
      "url": "./commercials/pt-PT/agricultura-e-alimenta-o/oliveira-silva-e-braga/1673480538243/commercial.mp3",
      "artist": "Agricultura E Alimenta O",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Franco Martins E Lemos",
      "url": "./commercials/pt-PT/arte-fina/franco-martins-e-lemos/1673479322875/commercial.mp3",
      "artist": "Arte Fina",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Est Ves D Cruze",
      "url": "./commercials/pt-PT/fabricantes-de-brinquedos-e-artigos-para-crian-as/est-ves-d-cruze/1673479475537/commercial.mp3",
      "artist": "Fabricantes De Brinquedos E Artigos Para Crian As",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Lemos Eireli",
      "url": "./commercials/pt-PT/tecnologia-da-informa-o/lemos-eireli/1673477307935/commercial.mp3",
      "artist": "Tecnologia Da Informa O",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Nogueira Ara Jo E Braga",
      "url": "./commercials/pt-PT/entrega-frete/nogueira-ara-jo-e-braga/1673479467585/commercial.mp3",
      "artist": "Entrega Frete",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Moraes Eireli",
      "url": "./commercials/pt-PT/design/moraes-eireli/1673476898855/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Oliveira Albuquerque",
      "url": "./commercials/pt-PT/produtos-de-consumo/oliveira-albuquerque/1673478266689/commercial.mp3",
      "artist": "Produtos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Carvalho Melo",
      "url": "./commercials/pt-PT/fabricantes-de-equipamentos-de-fitness-e-bem-estar/carvalho-melo/1673478513900/commercial.mp3",
      "artist": "Fabricantes De Equipamentos De Fitness E Bem Estar",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Lemos Oliveira",
      "url": "./commercials/pt-PT/fabricantes-de-artigos-para-a-casa-e-jardim/lemos-oliveira/1673478811636/commercial.mp3",
      "artist": "Fabricantes De Artigos Para A Casa E Jardim",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Barros Ara Jo",
      "url": "./commercials/pt-PT/gest-o-de-organiza-es-sem-fins-lucrativos/barros-ara-jo/1673480511857/commercial.mp3",
      "artist": "Gest O De Organiza Es Sem Fins Lucrativos",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Moreira E Associados",
      "url": "./commercials/pt-PT/organiza-es-civis-e-sociais/moreira-e-associados/1673479756294/commercial.mp3",
      "artist": "Organiza Es Civis E Sociais",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Carvalho Carvalho E Silva",
      "url": "./commercials/pt-PT/judici-rio/carvalho-carvalho-e-silva/1673476741693/commercial.mp3",
      "artist": "Judici Rio",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Albuquerque Eireli",
      "url": "./commercials/pt-PT/organiza-o-pol-tica/albuquerque-eireli/1673479298293/commercial.mp3",
      "artist": "Organiza O Pol Tica",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Macedo E Associados",
      "url": "./commercials/pt-PT/entretenimento/macedo-e-associados/1673475798990/commercial.mp3",
      "artist": "Entretenimento",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Carvalho E Associados",
      "url": "./commercials/pt-PT/tabaco/carvalho-e-associados/1673478158359/commercial.mp3",
      "artist": "Tabaco",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Souza Braga E Lemos",
      "url": "./commercials/pt-PT/dispositivos-m-dicos/souza-braga-e-lemos/1673480359995/commercial.mp3",
      "artist": "Dispositivos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Santos E Associados",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-t-xteis/santos-e-associados/1673476842911/commercial.mp3",
      "artist": "Fabricantes De Produtos T Xteis",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "D Cruze E Associados",
      "url": "./commercials/pt-PT/entrega-frete/d-cruze-e-associados/1673480496046/commercial.mp3",
      "artist": "Entrega Frete",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "D Cruze Ltda",
      "url": "./commercials/pt-PT/tradu-o-e-localiza-o/d-cruze-ltda/1673479367960/commercial.mp3",
      "artist": "Tradu O E Localiza O",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Nogueira Ltda",
      "url": "./commercials/pt-PT/pl-stic/nogueira-ltda/1673476999091/commercial.mp3",
      "artist": "Pl Stic",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Oliveira Carvalho",
      "url": "./commercials/pt-PT/transportes-e-log-stica/oliveira-carvalho/1673475433857/commercial.mp3",
      "artist": "Transportes E Log Stica",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Macedo E Associados",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-para-animais-de-estima-o/macedo-e-associados/1673476892510/commercial.mp3",
      "artist": "Fabricantes De Produtos Para Animais De Estima O",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Saraiva Lemos E Albuquerque",
      "url": "./commercials/pt-PT/escrita-e-edi-o/saraiva-lemos-e-albuquerque/1673475805009/commercial.mp3",
      "artist": "Escrita E Edi O",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Moreira Barros",
      "url": "./commercials/pt-PT/jogos-de-computador/moreira-barros/1673479283662/commercial.mp3",
      "artist": "Jogos De Computador",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Barros Xavier E Braga",
      "url": "./commercials/pt-PT/fabricantes-de-t-xteis-e-vestu-rio/barros-xavier-e-braga/1673479184940/commercial.mp3",
      "artist": "Fabricantes De T Xteis E Vestu Rio",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Nogueira Eireli",
      "url": "./commercials/pt-PT/produtos-industriais/nogueira-eireli/1673480206569/commercial.mp3",
      "artist": "Produtos Industriais",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Franco Barros E Xavier",
      "url": "./commercials/pt-PT/publicidade-e-marketing/franco-barros-e-xavier/1673478622151/commercial.mp3",
      "artist": "Publicidade E Marketing",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Moraes Eireli",
      "url": "./commercials/pt-PT/servi-os-de-eventos/moraes-eireli/1673476849785/commercial.mp3",
      "artist": "Servi Os De Eventos",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Braga Silva",
      "url": "./commercials/pt-PT/tecnologia-da-informa-o-e-servi-os/braga-silva/1673477708513/commercial.mp3",
      "artist": "Tecnologia Da Informa O E Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Saraiva Com Rcio",
      "url": "./commercials/pt-PT/energia-e-petr-leo/saraiva-com-rcio/1673480079818/commercial.mp3",
      "artist": "Energia E Petr Leo",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Silva Com Rcio",
      "url": "./commercials/pt-PT/fabricantes-de-produtos-de-cuidado-com-a-pele/silva-com-rcio/1673475440473/commercial.mp3",
      "artist": "Fabricantes De Produtos De Cuidado Com A Pele",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Ara Jo Silva",
      "url": "./commercials/pt-PT/design/ara-jo-silva/1673479180283/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Franco Carvalho E Ara Jo",
      "url": "./commercials/pt-PT/servi-os-de-sa-de/franco-carvalho-e-ara-jo/1673479328781/commercial.mp3",
      "artist": "Servi Os De Sa De",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Santos Carvalho E Albuquerque",
      "url": "./commercials/pt-PT/servi-os-legais/santos-carvalho-e-albuquerque/1673478608431/commercial.mp3",
      "artist": "Servi Os Legais",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Silva Braga E Xavier",
      "url": "./commercials/pt-PT/alimenta-o-bebidas/silva-braga-e-xavier/1673475920155/commercial.mp3",
      "artist": "Alimenta O Bebidas",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Souza Com Rcio",
      "url": "./commercials/pt-PT/publica-o/souza-com-rcio/1673478934708/commercial.mp3",
      "artist": "Publica O",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Souza Costa",
      "url": "./commercials/pt-PT/supermercados/souza-costa/1673476859310/commercial.mp3",
      "artist": "Supermercados",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Franco Carvalho E Xavier",
      "url": "./commercials/pt-PT/fabricantes-de-instrumentos-cient-ficos/franco-carvalho-e-xavier/1673478310530/commercial.mp3",
      "artist": "Fabricantes De Instrumentos Cient Ficos",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Est Ves Carvalho E Costa",
      "url": "./commercials/pt-PT/ind-stria-autom-vel/est-ves-carvalho-e-costa/1673478661470/commercial.mp3",
      "artist": "Ind Stria Autom Vel",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Reis Braga E Moraes",
      "url": "./commercials/pt-PT/defesa-espa-o/reis-braga-e-moraes/1673480365735/commercial.mp3",
      "artist": "Defesa Espa O",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Braga Melo",
      "url": "./commercials/pt-PT/turismo-e-entretenimento/braga-melo/1673479844911/commercial.mp3",
      "artist": "Turismo E Entretenimento",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Ara Jo Pereira",
      "url": "./commercials/pt-PT/m-dia-e-comunica-o/ara-jo-pereira/1673479309098/commercial.mp3",
      "artist": "M Dia E Comunica O",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Xavier Xavier",
      "url": "./commercials/pt-PT/servi-os-financeiros/xavier-xavier/1673478792160/commercial.mp3",
      "artist": "Servi Os Financeiros",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Silva Xavier E Costa",
      "url": "./commercials/pt-PT/impress-o/silva-xavier-e-costa/1673475925608/commercial.mp3",
      "artist": "Impress O",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Martins Ltda",
      "url": "./commercials/pt-PT/militar/martins-ltda/1673480488560/commercial.mp3",
      "artist": "Militar",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Ara Jo Eireli",
      "url": "./commercials/pt-PT/servi-os/ara-jo-eireli/1673479051989/commercial.mp3",
      "artist": "Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Carvalho Com Rcio",
      "url": "./commercials/pt-PT/dispositivos-m-dicos/carvalho-com-rcio/1673476874981/commercial.mp3",
      "artist": "Dispositivos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Costa Reis",
      "url": "./commercials/pt-PT/angaria-o-de-fundos/costa-reis/1673478818551/commercial.mp3",
      "artist": "Angaria O De Fundos",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Carvalho Est Ves E Barros",
      "url": "./commercials/pt-PT/organiza-es-civis-e-sociais/carvalho-est-ves-e-barros/1673479291745/commercial.mp3",
      "artist": "Organiza Es Civis E Sociais",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Saraiva S A ",
      "url": "./commercials/pt-PT/pol-tica-p-blica/saraiva-s-a/1673478127283/commercial.mp3",
      "artist": "Pol Tica P Blica",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Costa Costa E Melo",
      "url": "./commercials/pt-PT/eletr-nicos-de-consumo/costa-costa-e-melo/1673475589094/commercial.mp3",
      "artist": "Eletr Nicos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Melo Santos",
      "url": "./commercials/pt-PT/entrega-frete/melo-santos/1673478275565/commercial.mp3",
      "artist": "Entrega Frete",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Moreira Carvalho E Souza",
      "url": "./commercials/pt-PT/marinha/moreira-carvalho-e-souza/1673478862619/commercial.mp3",
      "artist": "Marinha",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Franco E Associados",
      "url": "./commercials/pt-PT/fabricantes-de-materiais-de-constru-o/franco-e-associados/1673476219582/commercial.mp3",
      "artist": "Fabricantes De Materiais De Constru O",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Carvalho Com Rcio",
      "url": "./commercials/pt-PT/dispositivos-m-dicos/carvalho-com-rcio/1673477524004/commercial.mp3",
      "artist": "Dispositivos M Dicos",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Reis Martins",
      "url": "./commercials/pt-PT/servi-os/reis-martins/1673478286862/commercial.mp3",
      "artist": "Servi Os",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Braga S A ",
      "url": "./commercials/pt-PT/publica-o/braga-s-a/1673478295804/commercial.mp3",
      "artist": "Publica O",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "D Cruze Barros E Saraiva",
      "url": "./commercials/pt-PT/servi-os-de-sa-de/d-cruze-barros-e-saraiva/1673477996303/commercial.mp3",
      "artist": "Servi Os De Sa De",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Martins Carvalho",
      "url": "./commercials/pt-PT/instala-es-e-servi-os-recreativos/martins-carvalho/1673478806153/commercial.mp3",
      "artist": "Instala Es E Servi Os Recreativos",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Franco Barros",
      "url": "./commercials/pt-PT/tradu-o-e-localiza-o/franco-barros/1673479654387/commercial.mp3",
      "artist": "Tradu O E Localiza O",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "D Cruze Ara Jo E Barros",
      "url": "./commercials/pt-PT/pol-tica-p-blica/d-cruze-ara-jo-e-barros/1673478919291/commercial.mp3",
      "artist": "Pol Tica P Blica",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Costa Moraes",
      "url": "./commercials/pt-PT/produtos-de-consumo/costa-moraes/1673477201486/commercial.mp3",
      "artist": "Produtos De Consumo",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Ara Jo Saraiva",
      "url": "./commercials/pt-PT/pl-stic/ara-jo-saraiva/1673480098317/commercial.mp3",
      "artist": "Pl Stic",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Carvalho Est Ves",
      "url": "./commercials/pt-PT/restaurantes/carvalho-est-ves/1673480525459/commercial.mp3",
      "artist": "Restaurantes",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Franco S A ",
      "url": "./commercials/pt-PT/jogos-de-azar-cassinos/franco-s-a/1673478824926/commercial.mp3",
      "artist": "Jogos De Azar Cassinos",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Moraes Carvalho",
      "url": "./commercials/pt-PT/transporte-caminh-es-ferrovias/moraes-carvalho/1673480469153/commercial.mp3",
      "artist": "Transporte Caminh Es Ferrovias",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Moreira D Cruze",
      "url": "./commercials/pt-PT/treinamento-e-coaching-profissional/moreira-d-cruze/1673478262273/commercial.mp3",
      "artist": "Treinamento E Coaching Profissional",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Ara Jo E Associados",
      "url": "./commercials/pt-PT/veterin-ria/ara-jo-e-associados/1673478911816/commercial.mp3",
      "artist": "Veterin Ria",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Carvalho Melo E Macedo",
      "url": "./commercials/pt-PT/produtos-desportivos/carvalho-melo-e-macedo/1673480064885/commercial.mp3",
      "artist": "Produtos Desportivos",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Xavier Eireli",
      "url": "./commercials/pt-PT/recrutamento-e-sele-o/xavier-eireli/1673478901241/commercial.mp3",
      "artist": "Recrutamento E Sele O",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Barros Costa E Carvalho",
      "url": "./commercials/pt-PT/treinamento-e-coaching-profissional/barros-costa-e-carvalho/1673478700549/commercial.mp3",
      "artist": "Treinamento E Coaching Profissional",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

