function sobre(){

    var select = document.getElementById('sel')
    var diretor = document.getElementById('diretor')
    var nome = document.getElementById('nome')  
    var img = document.getElementById('foto')

    //var item = document.createElement('option')

    if(select.selectedIndex == 0){
        nome.innerHTML = `Selecione um deles para saber um pouco mais sobre`
        img.src = `_imagens/gifpoderoso.gif`
        img.style.maxWidth= '450px'
        diretor.innerHTML = ``



    } else if(select.selectedIndex == 1){
        nome.innerHTML = `Charles Chaplin`
        nome.style.margin='10px auto'

        img.src = "_imagens/gifchaplin.gif"
        img.style.maxWidth= '450px'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Charles Spencer Chaplin nasceu em Londres filho de um pai ator, com quem Chaplin 
        teve pouco contato, e a mãe cantora de music hall. Teve uma infância conturbada com o irmão, pois 
        foram abandonados pelo pai e a mãe sofria de problemas mentais. 
        <br>
        &nbsp;&nbsp;Tendo que tomar conta de si muito cedo e inspirado pela profissão da mãe, quando tinha apenas doze anos 
        já fazia parte de uma trupe de artistas comediantes. Foi vivendo de pequenas apresentações e outros 
        trabalhos por Londres até que em 1914 teve a chance de atuar em uma comédia americana, foi a primeira 
        vez que interpretou seu famoso personagem Carlitos, no curta Charlot Fotogênico (1914). 
        <br>    
        &nbsp;&nbsp;No ano seguinte, com apenas vinte e cinco anos Chaplin já apareceu em mais de 30 projeções e tornou-se famoso e rico. 
        Hoje é considerado um dos pais do cinema por sua contribuição à evolução da sétima arte e o cineasta mais 
        homenageado de todos os tempos.
        <br>
        &nbsp;&nbsp;Principais filmes de Charles Chaplin: O Garoto (1921), Em Busca do Ouro (1925), O Circo (1928), 
        Luzes da Cidade (1931), Tempos Modernos (1936), O Grande Ditador (1940), Luzes da Ribalta (1952), 
        Um Rei em Nova Iorque (1957) e A Condessa de Hong Kong (1967).`
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 2){
        nome.innerHTML = `Clint Eastwood`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/gifClint.gif'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Clinton Eastwood Jr. é um ator, cineasta produtor dos Estados Unidos famoso pelos seus papéis 
        típicos em filmes de ação como um cara durão e anti-herói, principalmente como o Homem sem 
        nome da Trilogia dos Dólares nos filmes western spaghetti de Sergio Leone dos anos 60, 
        e interpretando o Inspetor 'Dirty' Harry Callahan na série de filmes Dirty Harry, das 
        décadas de 1970 e 1980.
        <br>
        &nbsp;&nbsp;Como diretor, seus filmes têm tido criticas positivas. Ganhou quatro vezes o Oscar — duas cada 
        como Melhor Diretor e de Melhor Filme —, e foi homenageado em 1995, recebendo o Prêmio 
        Memorial Irving G. Thalberg em reconhecimento à sua longa carreira no cinema. 
        Por duas vezes foi eleito o ator favorito dos americanos, e é o único ator da história 
        do cinema a estrelar em filmes considerados de "grande sucesso" 
        por cinco décadas consecutivas.
        <br>
        &nbsp;&nbsp;Eastwood tem conquistado grandes elogios dos críticos como diretor. Seu primeiro 
        trabalho foi no filme Play Misty for Me, em 1971. Ele tentou dirigir um episódio da série 
        americana Rawhide, mas seus pensamentos não combinavam com os do dono do estúdio, que acabou 
        desistindo da oferta. Eastwood tornou-se popular por dirigir grandes filmes de drama, tais 
        como Unforgiven, A Perfect World, Mystic River, Million Dollar Baby, Flags of Our Fathers, 
        e Letters from Iwo Jima. No entanto, ele dirigiu longas em outros gêneros. Algumas de suas 
        escolhas para dirigir um filme foram pessoais, outras comerciais.
        <br>
        &nbsp;&nbsp;Eastwood produziu a maioria de seus filmes, e destacou-se por quase todos serem de orçamento baixo. 
        Ao longo dos anos, desenvolveu relações com outros diretores e produtores. Clint prefere trabalhar 
        sempre com a mesma equipe de produtores, editores e técnicos. Tem uma longa relação com a Warner Bros, 
        estúdio que financia a maioria de seus filmes. Mesmo assim, em 2004, Eastwood declarou ao 
        The New York Times que tem certa dificuldade para fazer a Warner aceitar alguns de seus projetos, 
        como aconteceu com Million Dollar Baby.
        <br>
        &nbsp;&nbsp;Eastwood dirigiu o filme Invictus, com os atores Morgan Freeman e Matt Damon.
        <br>
        &nbsp;&nbsp;Enquanto está dirigindo, Clint evita conversar, e somente usa as palavras "OK", "Ação" e "Corta".
        `
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 3){
        nome.innerHTML = `David Fincher`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/david.jpg'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Nascido no Colorado, EUA, filho de um escritor e de uma enfermeira, à exemplo de outros diretores o contato de Fincher com cinema começou quando ele ganhou uma câmera Super-8 do seu pai, no seu aniversário de oito anos. 
        <br>
        &nbsp;&nbsp;Ele morava há poucas quadras da casa do diretor George Lucas, que no final da década de setenta revolucionou o cinema com o primeiro filme da série Star Wars. Fincher disse que foi assistindo O Império Contra-Ataca (1980), que soube que queria trabalhar com cinema. 
        <br>
        &nbsp;&nbsp;Assim que terminou o ensino médio começou a trabalhar na Korty Films, e logo depois foi parar na Industrial Light and Magic, empresa de efeitos especiais de George Lucas. Depois de ficar uns anos trabalhando com publicidade, Fincher fez sua estreia como diretor no filme Alien 3 (1992), mal sucedido, e depois entrou de vez para o hall da fama de Hollywood ao dirigir o sucesso Seven: Os Sete Pecados Capitais (1995).
        <br>
        &nbsp;&nbsp;Grandes sucessos de David Fincher: Seven: Os Sete Pecados Capitais (1995), Clube da Luta (1999), Zodíaco (2007), O Curioso Caso de Benjamin Button (2008), A Rede Social (2010), Garota Exemplar (2014). `
        
    }else if(select.selectedIndex == 4){
        nome.innerHTML = `James Cameron`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/james.jpg'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Nascido no Canadá e filho de uma enfermeira com uma engenharia eletricista, a vida de Cameron deu uma reviravolta 
        quando a sua família se mudou para a Califórnia, EUA. O cineasta então tinha dezesseis anos e se aproximou do 
        mundo cinematográfico que já era uma tradição na região. 
        <br>
        &nbsp;&nbsp;Apesar de ter viciado em cinema e ter visitado inúmeras vezes os arquivos de filme da Universidade do Sul 
        da Califórnia, James decidiu cursar filosofia no Canadá. Curso que acabou abandonando para escrever roteiros 
        e se dedicar totalmente à carreira cinematográfica. 
        <br>
        &nbsp;&nbsp;Com vinte e quatro anos, James fez seu primeiro curta de ficção científica, Xenogênese (1978), que lhe rendeu 
        um emprego na empresa do famoso diretor Roger Corman. Mas foi seis anos depois, com O Exterminador do Futuro, 
        que Cameron consagrou-se como um diretor de sucesso, sendo responsável pelas duas maiores bilheterias da 
        história do cinema: Avatar e Titanic. 
        <br>
        &nbsp;&nbsp;Entre os filmes mais famosos de James Cameron estão: O Exterminador do Futuro (1984), O Segredo do Abismo (1989), 
        Aliens (1986), Titanic (1997) e Avatar (2009). `
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 5){
        nome.innerHTML = `Martin Scorsese`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/gifmartin.gif'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;O aclamado diretor Martin Charles Scorsese cresceu junto aos seus pais de descendência italiana no bairro de Little 
        Italy, em Manhattan, Nova York. Os pais contam que desde pequeno Martin já fazia pequenos filmes em casa, 
        usando-os como atores. 
        <br>
        &nbsp;&nbsp;Quando tinha por volta de vinte anos de idade, Martins produziu um pequeno curta-metragem de comédia que 
        lhe rendeu uma bolsa de estudos de US $ 500 dólares para estudar cinema Universidade de Nova York. Aos 
        vinte e quatro anos já havia concluído seu mestrado em cinema e aos vinte e seis completou o seu primeiro 
        longa, chamado Quem está batendo na minha porta? (1966). 
        <br>
        &nbsp;&nbsp;Mas o sucesso absoluto do diretor veio com Taxi Driver (1976), quando ganhou a Palma de Ouro no Festival 
        de Cannes e fixou o status do ator Robert De Niro como uma lenda viva do cinema. Hoje Scorsese é um dos 
        diretores mais premiados e reconhecidos de todos os tempos. 
        <br>
        &nbsp;&nbsp;Grandes filmes de Martin Scorsese: Taxi Driver (1976), Os Bons Companheiros (1990), Gangues de Nova York (2002), 
        O Aviador (2004), Os Infiltrados (2006), O Lobo de Wall Street (2013). `
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 6){
        nome.innerHTML = `Quentin Tarantino`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/giftarantino.gif'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Nascido no Tennessee e criado pela mãe e o pai adotivo na Califórnia, Quentin Tarantino sempre gostou 
        de cinema, chegando a abandonar o ensino médio porque preferia ver filmes e ler quadrinhos. 
        <br>
        &nbsp;&nbsp;Frequentou algumas aulas de teatro no final da adolescência, mas foi com o emprego como balconista 
        na Video Archives, uma famosa locadora de filmes em Manhattan Beach, que Quentin ficou ainda mais viciado em 
        filmes e usava parte do seu tempo escrevendo roteiros. Um desses roteiros foi justamente o de Cães de Aluguel, 
        comprado por um produtor e gravado em 1992. 
        <br>
        &nbsp;&nbsp;O estilo violento e sádico de Tarantino aliado às inúmeras referências que ele trazia de seu 
        vício em cinema o fez um diretor de sucesso a partir de Pulp Fiction (1994), lançado quando o diretor tinha 
        31 anos. Hoje Tarantino é um dos nomes mais famosos da indústria hollywoodiana e qualquer película assinada 
        por ele é sucesso garantido de bilheteria. 
        <br>
        &nbsp;&nbsp;Maiores filmes de Quentin Tarantino: Pulp Fiction, Tempos de Violência (1994), Kill Bill 
        Vol. I e II (2003 - 2004), Bastardos Inglórios (2009), Django Livre (2012). `
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 7){
        nome.innerHTML = `Stanley Kubrick`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/kubrick.jpg'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Kubrick cresceu no Bronx, EUA, e compartilhou os gostos do pai, médico, por xadrez e fotografia. 
        Seu trabalho com câmeras começou como fotojornalista para uma revista chamada Look, quando ele tinha 
        apenas dezessete anos de idade. 
        <br>
        &nbsp;&nbsp;Quando tinha vinte e dois anos, dirigiu um pequeno documentário de apenas doze minutos que 
        acompanhou o lutador de boxe Walter Cartier por um dia. Foi o seu primeiro trabalho profissional, 
        lançado pela produtora RKO como Dia de Luta (1951).  
        <br>
        &nbsp;&nbsp;Cinco anos depois Kubrick já estava trabalhando com Kirk Douglas, um dos maiores atores 
        norte-americanos de todos os tempos. 
        <br>
        &nbsp;&nbsp;Os maiores filmes de Stanley Kucrick são: Spartacus (1960), 2001: Uma Odisséia no Espaço (1968), 
        Laranja Mecânica (1971), O Iluminado (1980). `
        diretor.style.textAlign= 'justify'
    }else if(select.selectedIndex == 8){
        nome.innerHTML = `Steven Spielberg`
        nome.style.margin='10px auto'
        img.style.maxWidth= '450px'

        img.src = '_imagens/steven.jpg'
        
        diretor.innerHTML = `
        &nbsp;&nbsp;Ainda criança, Steven Spielberg fazia pequenos filmes caseiros com sua câmera Super-8, com 
        as suas três irmãs mais novas como atrizes. Ele não era bom aluno e não conseguiu vaga no curso de 
        cinema da Universidade da Califórnia. 
        <br>
        &nbsp;&nbsp;Sua carreira começou para valer aos treze anos de idade, quando venceu um concurso de curtas 
        com um filme de 40 minutos que falava sobre guerra. A partir daí foi só sucesso: aos dezesseis anos teve 
        o seu primeiro filme, Amblin (1963) premiado no Festival de Veneza e com vinte cinco 
        anos de idade já trabalhava em Hollywood. 
        <br>
        &nbsp;&nbsp;Hoje Spielberg é um nome indispensável em qualquer lista de cinema, vencedor de quatro 
        Oscar e diretor de filmes que já arrecadaram cerca de dez bilhões de dólares! 
        <br>
        &nbsp;&nbsp;Os clássicos de Steven Spielberg são: Tubarão (1975), Contatos Imediatos de Terceiro Grau (1977), 
        Jurassic Park: Parque dos Dinossauros (1993), Indiana Jones e Os Caçadores da Arca Perdida (1981), E.T. 
        - O Extraterrestre (1982), A Lista de Schindler (1993), Lincoln (2012). `
        diretor.style.textAlign= 'justify'
    }

    //res.appendChild(img)
    //select.appendChild(item)
}


